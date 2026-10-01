import { site } from "@/content/site";
import type { Briefing } from "@/content/briefings";
import type { CaseStudy } from "@/content/caseStudies";
import { services } from "@/content/services";
import { type Sector, sectorSlug, serviceSlug } from "@/content/sectors";
import { ORG_ID, PERSON_ID, WEBSITE_ID, absoluteUrl, deploymentLabel } from "@/lib/seo";
import { JsonLdScript } from "./JsonLdScript";

// Per-page structured data. Each component renders one JSON-LD <script> and is
// dropped into a page with a single line. Entities reference the global
// Organization / Person / WebSite nodes from ./JsonLd by @id, and also carry a
// name inline so validators that don't join across script blocks still see one.

const ORG_REF = { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url };

type Crumb = { name: string; path: string };

function breadcrumbNode(crumbs: Crumb[]) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

const clip = (s: string, max: number) => (s.length <= max ? s : `${s.slice(0, max - 1).replace(/\s+\S*$/, "")}…`);

/** BreadcrumbList. "Home" is prepended automatically. */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  return <JsonLdScript data={{ "@context": "https://schema.org", ...breadcrumbNode(items) }} />;
}

/** FAQPage. Pass exactly the Q&As that are visible on the page. */
export function FaqJsonLd({ items, path }: { items: { question: string; answer: string }[]; path: string }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${absoluteUrl(path)}#faq`,
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  );
}

/** BlogPosting + BreadcrumbList for /briefings/[slug]. */
export function BriefingJsonLd({ briefing }: { briefing: Briefing }) {
  const url = absoluteUrl(`/briefings/${briefing.slug}`);
  const wordCount = briefing.body.reduce((n, b) => {
    const text =
      b.type === "list" ? b.items.join(" ") : b.type === "ledger" ? b.rows.map((r) => r.cells.join(" ")).join(" ") : b.text;
    return n + text.split(/\s+/).length;
  }, 0);
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: clip(briefing.title, 110),
            description: briefing.dek,
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            image: [`${url}/opengraph-image`],
            datePublished: briefing.date,
            dateModified: briefing.date,
            articleSection: briefing.category,
            wordCount,
            timeRequired: `PT${briefing.readMins}M`,
            inLanguage: "en",
            // The page shows a visible "By Bhumit Goyal" byline, so credit the Person.
            author: { "@id": PERSON_ID },
            publisher: {
              ...ORG_REF,
              logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png"), width: 512, height: 512 },
            },
            isPartOf: { "@id": WEBSITE_ID },
          },
          breadcrumbNode([
            { name: "Briefings", path: "/briefings" },
            { name: briefing.title, path: `/briefings/${briefing.slug}` },
          ]),
        ],
      }}
    />
  );
}

/** Case study as an Article (a CreativeWork) + BreadcrumbList for /work/[slug]. */
export function CaseStudyJsonLd({ study }: { study: CaseStudy }) {
  const url = absoluteUrl(`/work/${study.slug}`);
  const label = deploymentLabel(study.slug, study.client);
  const images = [study.image ? absoluteUrl(study.image) : null, `${url}/opengraph-image`].filter(Boolean);
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${url}#case-study`,
            genre: "Case study",
            headline: clip(`${study.client}: ${label}`, 110),
            alternativeHeadline: clip(study.title, 110),
            description: study.summary,
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            image: images,
            temporalCoverage: study.year,
            about: [
              { "@type": "Thing", name: study.industry },
              ...(study.client && !/tenant/i.test(study.client) ? [{ "@type": "Organization", name: study.client }] : []),
            ],
            keywords: study.tech.join(", "),
            author: ORG_REF,
            publisher: ORG_REF,
            isPartOf: { "@id": WEBSITE_ID },
            inLanguage: "en",
          },
          breadcrumbNode([
            { name: "Deployments", path: "/work" },
            { name: study.client, path: `/work/${study.slug}` },
          ]),
        ],
      }}
    />
  );
}

/** Sector hub: a Service with an OfferCatalog of that sector's systems + BreadcrumbList. */
export function SectorJsonLd({ sector }: { sector: Sector }) {
  const slug = sectorSlug(sector);
  const url = absoluteUrl(`/industries/${slug}`);
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: `AI infrastructure for ${sector.label}`,
            serviceType: "AI infrastructure",
            url,
            provider: ORG_REF,
            areaServed: "Worldwide",
            audience: { "@type": "BusinessAudience", audienceType: sector.label },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${sector.label} systems`,
              itemListElement: sector.services.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.name,
                  description: s.tagline,
                  url: absoluteUrl(`/industries/${slug}/${serviceSlug(s)}`),
                },
              })),
            },
          },
          breadcrumbNode([
            { name: "Industries", path: "/industries" },
            { name: sector.label, path: `/industries/${slug}` },
          ]),
        ],
      }}
    />
  );
}

/** /services: the systems catalogue as an OfferCatalog. */
export function SystemsCatalogJsonLd() {
  const url = absoluteUrl("/services");
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "@id": `${url}#catalog`,
        name: `${site.name} systems`,
        url,
        itemListElement: services.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.tagline,
            url: `${url}#${s.slug}`,
            provider: ORG_REF,
          },
        })),
      }}
    />
  );
}

/** /about: AboutPage whose main entity is the Organization, founded by the Person. */
export function AboutPageJsonLd() {
  const url = absoluteUrl("/about");
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        url,
        name: `About ${site.name}`,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": ORG_ID },
        about: [{ "@id": ORG_ID }, { "@id": PERSON_ID }],
      }}
    />
  );
}
