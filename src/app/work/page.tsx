import type { Metadata } from "next";
import { WorkGrid } from "@/components/work/WorkGrid";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "45 custom AI systems shipped across energy, wellness, e-commerce, real estate, and more, with real client metrics.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={420} className="right-[-100px] top-[20%]" />

        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="Selected work"
            title="Systems shipped. Numbers moved."
            subtitle="A few of the AI builds we're proudest of and the metrics they shifted for our clients."
          />
        </div>
      </section>

      <section className="container-x pb-24">
        <WorkGrid />
      </section>

      <CtaBanner />
    </>
  );
}
