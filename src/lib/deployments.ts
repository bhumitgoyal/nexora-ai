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
  if (!url) return caseStudies;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return caseStudies;
    const data = await res.json();
    const rows: unknown[] = Array.isArray(data) ? data : [];
    const fetched = rows.filter(isCaseStudy);
    // The agent feed is authoritative once it has anything; curated is only a fallback,
    // so the seeded originals are never shown twice.
    return fetched.length > 0 ? fetched : caseStudies;
  } catch {
    return caseStudies;
  }
}

export async function getDeployment(slug: string): Promise<CaseStudy | undefined> {
  const deployments = await getDeployments();
  return deployments.find((d) => d.slug === slug);
}
