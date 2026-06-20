import type { Metadata } from "next";
import { industries } from "@/content/industries";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI systems shipped across real estate, healthcare, fintech, e-commerce, SaaS, logistics, and education.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={420} className="right-[-120px] top-[10%]" />

        <div className="container-x relative z-10">
          <SectionHeader
            eyebrow="Industries"
            title="Built across the verticals where AI compounds fastest."
            subtitle="We're industry-flexible by design — what matters is whether the workflow is repetitive, judgment-heavy, and worth automating."
          />
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col gap-5 card-surface p-7">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(34,211,238,0.18))] text-[var(--color-brand-strong)]">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-pretty text-sm text-[var(--color-fg-muted)]">
                    {ind.headline}
                  </p>
                  <ul className="mt-auto flex flex-col gap-2.5 border-t border-[var(--color-border)] pt-4">
                    {ind.useCases.map((u) => (
                      <li key={u} className="flex items-start gap-2 text-sm text-[var(--color-fg)]">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
