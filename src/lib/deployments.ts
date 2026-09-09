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
    if (!local) return row;
    return {
      ...row,
      // `||` (not `??`) so the feed's empty-string defaults fall back to local.
      demoUrl: row.demoUrl || local.demoUrl,
      demoPasscode: row.demoPasscode || local.demoPasscode,
      snapshot: row.snapshot || local.snapshot,
      runningCost: row.runningCost || local.runningCost,
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
