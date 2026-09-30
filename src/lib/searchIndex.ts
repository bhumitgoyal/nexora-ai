import { getDeployments } from "@/lib/deployments";
import { services } from "@/content/services";
import { briefings } from "@/content/briefings";

export type SearchEntry = { group: "Deployments" | "Systems" | "Briefings"; label: string; hint?: string; href: string };

// Titles only — the palette used to import the full briefings/case-study
// bodies (~95 kB) into every page's client bundle. Deployments come from the
// same feed /work renders, so the palette can't drift from it.
export async function getSearchIndex(): Promise<SearchEntry[]> {
  const deployments = await getDeployments();
  return [
    ...deployments.map((d) => ({ group: "Deployments" as const, label: d.client, hint: d.industry, href: `/work/${d.slug}` })),
    ...services.map((s) => ({ group: "Systems" as const, label: s.title, href: `/services#${s.slug}` })),
    ...briefings.map((b) => ({ group: "Briefings" as const, label: b.title, hint: b.category, href: `/briefings/${b.slug}` })),
  ];
}
