import { caseStudies, type CaseStudy } from "@/content/caseStudies";

/**
 * Deployments shown on /work come from the Nuvero outreach agent, which is the single
 * source of truth (editable at manage.nuvero.space/deployments) - same architecture as
 * src/lib/reviews.ts. Set DEPLOYMENTS_API_URL to its public deployments endpoint; it
 * defaults to the deployed backend. The curated set in content/caseStudies.ts is only a
 * fallback for when the feed is empty or unreachable, so nothing is ever duplicated.
 */
const DEFAULT_DEPLOYMENTS_API =
  "https://nuvero-outreach-backend-629748840531.us-central1.run.app/api/deployments/public";

function isCaseStudy(row: unknown): row is CaseStudy {
  if (!row || typeof row !== "object") return false;
  const r = row as Record<string, unknown>;
  return typeof r.slug === "string" && typeof r.client === "string" && typeof r.title === "string";
}

// The feed is owner-authored today, but its URL fields still land in <a href> and
// next/image src on the public site. Only let through what those can safely take:
// an https:// link, or a same-origin "/..." asset path. Anything else (a
// "javascript:" href, a host outside next.config's remotePatterns that would throw
// mid-render) is dropped so the local fallback is used instead.
function safeLink(value: unknown): string | undefined {
  return typeof value === "string" && /^https:\/\//i.test(value) ? value : undefined;
}
function safeAsset(value: unknown): string | undefined {
  return typeof value === "string" && /^(\/|https:\/\/)/i.test(value) ? value : undefined;
}

export async function getDeployments(): Promise<CaseStudy[]> {
  const url = process.env.DEPLOYMENTS_API_URL || DEFAULT_DEPLOYMENTS_API;
  let fetched: CaseStudy[] = [];
  if (url) {
    try {
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (res.ok) {
        const data = await res.json();
        fetched = (Array.isArray(data) ? data : []).filter(isCaseStudy) as CaseStudy[];
      }
    } catch {
      // fall through to local
    }
  }
  // Feed empty/unreachable → curated content in full.
  if (fetched.length === 0) return caseStudies;

  // The feed is the source of truth for core fields; local content fills in the
  // demo fields (demoUrl / passcode / snapshot / runningCost) the feed may not
  // carry yet, and any locally-added study not yet in the feed is appended so it
  // still shows on /work.
  const localBySlug = new Map(caseStudies.map((c) => [c.slug, c]));
  const merged = fetched.map((row) => {
    const local = localBySlug.get(row.slug);
    return {
      ...row,
      // URL fields are scheme-checked before they can reach <a href> / next-image.
      // An unsafe or missing feed value falls back to the local one (which may be
      // undefined for a feed-only study - that's fine, the field is optional).
      image: safeAsset(row.image) ?? local?.image,
      snapshot: safeAsset(row.snapshot) ?? local?.snapshot,
      demoUrl: safeLink(row.demoUrl) ?? local?.demoUrl,
      // `||` (not `??`) so the feed's empty-string defaults fall back to local.
      demoPasscode: row.demoPasscode || local?.demoPasscode,
      runningCost: row.runningCost || local?.runningCost,
    };
  });
  const feedSlugs = new Set(fetched.map((r) => r.slug));
  const localOnly = caseStudies.filter((c) => !feedSlugs.has(c.slug));
  return [...merged, ...localOnly];
}

export async function getDeployment(slug: string): Promise<CaseStudy | undefined> {
  const deployments = await getDeployments();
  return deployments.find((d) => d.slug === slug);
}
