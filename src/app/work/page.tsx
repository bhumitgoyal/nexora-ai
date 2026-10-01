import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { WorkGrid } from "@/components/work/WorkGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CtaBanner } from "@/components/home/CtaBanner";
import { getDeployments } from "@/lib/deployments";

export const metadata: Metadata = pageMetadata({
  title: "Deployments: AI Systems in Production",
  description:
    "AI systems Nuvero has deployed across energy, wellness, e-commerce, real estate, PR and logistics, with the real metrics each one moved and live demos to try.",
  path: "/work",
});

export default async function WorkPage() {
  const deployments = await getDeployments();

  return (
    <>
      <section className="relative isolate overflow-hidden pb-8 pt-14 md:pb-10 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />

        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="The deployment log"
            title="Systems shipped. Numbers moved."
            subtitle="Every deployment on this log runs in production today, with the metric it was commissioned to move and the proof it moved it."
          />
        </div>
      </section>

      <section className="container-x pb-24">
        <WorkGrid caseStudies={deployments} />
      </section>

      <CtaBanner />
    </>
  );
}
