import { briefings, getBriefing } from "@/content/briefings";
import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/components/seo/ogCard";

export const alt = "Nuvero AI intelligence briefing";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return briefings.map((b) => ({ slug: b.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBriefing(slug);
  const date = b
    ? new Date(b.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
    : "";
  return ogCard({
    eyebrow: b ? `Briefing · ${b.category}` : "Briefing",
    title: b?.title ?? "Intelligence Briefings",
    subtitle: b?.dek,
    footer: b ? `${date} · ${b.readMins} min read` : "nuvero.space/briefings",
  });
}
