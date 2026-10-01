import { getDeployment } from "@/lib/deployments";
import { caseStudies } from "@/content/caseStudies";
import { deploymentLabel } from "@/lib/seo";
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/components/seo/ogCard";

export const alt = "Nuvero AI deployment case study";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getDeployment(slug);
  if (!study) {
    return ogCard({ eyebrow: "Deployment", title: "Deployments", footer: "nuvero.space/work" });
  }
  const top = study.results?.[0];
  return ogCard({
    eyebrow: `Deployment · ${study.industry}`,
    title: `${study.client}: ${deploymentLabel(study.slug, study.client)}`,
    subtitle: study.summary,
    footer: `nuvero.space/work · ${study.year}`,
    stat: top ? { value: top.metric, label: top.label } : undefined,
  });
}
