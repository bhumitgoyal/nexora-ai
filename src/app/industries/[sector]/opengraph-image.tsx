import { getSectorBySlug, sectorPaths } from "@/content/sectors";
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/components/seo/ogCard";

export const alt = "Nuvero AI infrastructure by industry";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return sectorPaths;
}

export default async function Image({ params }: { params: Promise<{ sector: string }> }) {
  const { sector: slug } = await params;
  const sector = getSectorBySlug(slug);
  return ogCard({
    eyebrow: `Industry · ${sector?.label ?? "All sectors"}`,
    title: sector ? `AI infrastructure for ${sector.label}` : "AI infrastructure by industry",
    subtitle: sector ? sector.services.map((s) => s.name).slice(0, 4).join(" · ") : undefined,
    footer: `nuvero.space/industries/${slug}`,
    stat: sector ? { value: String(sector.services.length), label: "systems for this sector" } : undefined,
  });
}
