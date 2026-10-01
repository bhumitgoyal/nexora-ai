import { getSectorBySlug, getServiceBySlug, solutionPaths } from "@/content/sectors";
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/components/seo/ogCard";

export const alt = "A Nuvero AI system, by industry";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return solutionPaths;
}

export default async function Image({ params }: { params: Promise<{ sector: string; service: string }> }) {
  const { sector: sectorParam, service: serviceParam } = await params;
  const sector = getSectorBySlug(sectorParam);
  const service = sector ? getServiceBySlug(sector, serviceParam) : undefined;
  return ogCard({
    eyebrow: `System · ${sector?.label ?? "Industries"}`,
    title: service && sector ? `${service.name} for ${sector.label}` : "AI infrastructure by industry",
    subtitle: service?.tagline,
    footer: service?.stat ? `nuvero.space · ${service.stat}` : `nuvero.space/industries/${sectorParam}`,
  });
}
