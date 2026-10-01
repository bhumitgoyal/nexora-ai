import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Per-route metadata builder.
 *
 * Why this exists: Next merges metadata *shallowly*, so a page that sets only
 * `title` + `description` inherits the root layout's whole `openGraph` / `twitter`
 * objects — every share card on the site used to say the homepage's title and
 * point og:url at the homepage. Every route builds its metadata through here so
 * canonical, og:url, og:title, og:description and the twitter card always agree.
 */

/** " · Nuvero AI" — the suffix the root layout's title template appends. */
export const TITLE_SUFFIX = ` · ${site.name}`;
const MAX_TITLE = 60;
const MIN_DESC = 140;
const MAX_DESC = 160;

export const ORG_ID = `${site.url}/#organization`;
export const PERSON_ID = `${site.url}/#bhumit-goyal`;
export const WEBSITE_ID = `${site.url}/#website`;

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${site.url}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Picks the first candidate that fits in 60 chars *with* the brand suffix
 * (returned as a plain string so the layout template applies). If none fit with
 * the suffix, the first one that fits alone is returned as an absolute title.
 * As a last resort the first candidate is cut at a word boundary.
 */
export type SeoTitle = string | { absolute: string };

export function fitTitle(...candidates: string[]): SeoTitle {
  const clean = candidates.map((c) => c.replace(/\s+/g, " ").trim()).filter(Boolean);
  const withSuffix = clean.find((c) => c.length + TITLE_SUFFIX.length <= MAX_TITLE);
  if (withSuffix) return withSuffix;
  const alone = clean.find((c) => c.length <= MAX_TITLE);
  if (alone) return { absolute: alone };
  return { absolute: clip(clean[0] ?? site.name, MAX_TITLE) };
}

/** The title string as it will actually render (used for og:title / twitter:title). */
export function renderedTitle(title: string | { absolute: string }): string {
  return typeof title === "string" ? `${title}${TITLE_SUFFIX}` : title.absolute;
}

function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:·–-]+$/, "")}…`;
}

/**
 * Builds a 140–160 char description: joins sentences until it reaches the
 * minimum, then clips at a word boundary if it overshoots the maximum.
 */
export function fitDescription(...sentences: string[]): string {
  let out = "";
  for (const s of sentences) {
    const next = s.replace(/\s+/g, " ").trim();
    if (!next) continue;
    if (out.length >= MIN_DESC) break;
    out = out ? `${out} ${next}` : next;
  }
  return clip(out, MAX_DESC);
}

type PageMetaInput = {
  /** Page title (without brand) or an absolute title object. */
  title: string | { absolute: string };
  description: string;
  /** Route path, e.g. "/pricing". Becomes the canonical + og:url. */
  path: string;
  type?: "website" | "article" | "profile";
  /**
   * OG image override. Omit to use the route's own opengraph-image file or the
   * root one; file-based images take precedence over this anyway.
   */
  image?: { url: string; alt: string };
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
};

const DEFAULT_IMAGE = { url: "/opengraph-image", alt: `${site.name} - ${site.tagline}`, width: 1200, height: 630 };

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
  noindex,
  article,
}: PageMetaInput): Metadata {
  const shareTitle = renderedTitle(title);
  const img = image ? { ...image, width: 1200, height: 630 } : DEFAULT_IMAGE;
  const url = absoluteUrl(path);

  const openGraph: NonNullable<Metadata["openGraph"]> =
    type === "article"
      ? {
          type: "article",
          url,
          siteName: site.name,
          locale: "en_US",
          title: shareTitle,
          description,
          images: [img],
          publishedTime: article?.publishedTime,
          modifiedTime: article?.modifiedTime ?? article?.publishedTime,
          section: article?.section,
          tags: article?.tags,
          authors: [absoluteUrl("/about")],
        }
      : {
          type,
          url,
          siteName: site.name,
          locale: "en_US",
          title: shareTitle,
          description,
          images: [img],
        };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      creator: "@bhumitgoyal",
      images: [{ url: img.url, alt: img.alt }],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Title-cases a slug fragment, keeping known acronyms/brands intact. */
const CASING: Record<string, string> = {
  ai: "AI",
  erp: "ERP",
  pr: "PR",
  crm: "CRM",
  seo: "SEO",
  linkedin: "LinkedIn",
  swg: "SWG",
  saas: "SaaS",
  b2b: "B2B",
  d2c: "D2C",
};

function titleWord(w: string): string {
  return CASING[w] ?? w.charAt(0).toUpperCase() + w.slice(1);
}

/**
 * A short, unique label for a deployment derived from its slug minus the client
 * name, e.g. ("southwest-gases-erp", "Southwest Gases") → "ERP". Several
 * deployments share a client, so the client + industry pair is not unique.
 */
export function deploymentLabel(slug: string, client: string): string {
  const clientWords = new Set(
    client
      .toLowerCase()
      .replace(/[()]/g, " ")
      .split(/[^a-z0-9]+/)
      .filter(Boolean),
  );
  // Client abbreviations used in slugs (Southwest Gases → "swg"): a short word
  // starting with the client's first letter whose letters appear in order in
  // the client name.
  const squashed = [...clientWords].join("");
  const isAbbrev = (w: string) => {
    if (w.length < 2 || w.length > 4 || w[0] !== squashed[0]) return false;
    let pos = 0;
    for (const ch of w) {
      pos = squashed.indexOf(ch, pos);
      if (pos === -1) return false;
      pos++;
    }
    return true;
  };
  const words = slug.split("-");
  let i = 0;
  while (i < words.length - 1 && (clientWords.has(words[i]) || (i === 0 && isAbbrev(words[i])))) i++;
  return words.slice(i).map(titleWord).join(" ");
}

export function deploymentTitle(slug: string, client: string) {
  const label = deploymentLabel(slug, client);
  // Our own internal deployments: the brand suffix already names the client.
  if (client === site.name) return fitTitle(label);
  const firstClientWord = client.toLowerCase().split(/[^a-z0-9]+/)[0] ?? "";
  // Slug doesn't start with the client (e.g. a multi-tenant engine): the label
  // alone is the more useful title.
  if (!firstClientWord || !slug.toLowerCase().startsWith(firstClientWord)) return fitTitle(label);
  return fitTitle(`${client}: ${label}`, label);
}
