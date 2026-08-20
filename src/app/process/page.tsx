import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BuildSheet } from "@/components/process/BuildSheet";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Nuvero ships in 6 weeks: a 5-phase engagement model with weekly demos, KPIs tracked from day one, and no deliverable without a metric attached.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="How infrastructure gets built"
            title="Five phases. One thread."
            subtitle="No slide-ware, no mystery. Every deployment follows the same build sheet: weekly demos, KPI-instrumented from day one, signed off only when the system runs."
          />
        </div>
      </section>

      <BuildSheet />

      <TechStackMarquee />
      <CtaBanner />
    </>
  );
}
