import type { Metadata } from "next";
import { WorkGrid } from "@/components/work/WorkGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Perforation } from "@/components/shared/Perforation";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Deployments",
  description:
    "45 systems deployed across energy, wellness, e-commerce, real estate, and more — with the real metrics each one moved.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />

        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="The deployment log"
            title="Systems shipped. Numbers moved."
            subtitle="Every deployment on this log runs in production today — with the metric it was commissioned to move, and the proof it moved it."
          />
        </div>
      </section>

      <Perforation label="Log entries" />

      <section className="container-x pb-24 pt-12">
        <WorkGrid />
      </section>

      <CtaBanner />
    </>
  );
}
