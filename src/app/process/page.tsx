import type { Metadata } from "next";
import { processSteps } from "@/content/process";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
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
        <GridBackground />
        <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={420} className="right-[-120px] top-[20%]" />

        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="Our process"
            title="A repeatable engagement model that ships value every week."
            subtitle="No slide-ware. No mystery. Five phases, weekly demos, KPI-instrumented from day one."
          />
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="relative">
          <div className="absolute left-[28px] top-4 z-10 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-[var(--color-brand)] via-[var(--color-accent)] to-transparent md:block" />

          <ol className="flex flex-col gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05} className="relative z-0">
                <li className="relative flex flex-col gap-5 card-surface p-6 md:flex-row md:gap-8 md:p-8 md:pl-20">
                  <span className="absolute left-0 top-6 hidden size-14 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] font-mono text-sm font-semibold text-[var(--color-accent)] md:left-7 md:flex">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-2 md:w-[200px] md:shrink-0">
                    <span className="font-mono text-xs text-[var(--color-accent)] md:hidden">{step.number}</span>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <span className="rounded-full border border-[var(--color-border)] bg-white/[0.02] px-2.5 py-0.5 self-start font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                      {step.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-pretty text-base text-[var(--color-fg)] md:text-lg">
                      {step.summary}
                    </p>
                    <ul className="flex flex-col gap-2 text-sm text-[var(--color-fg-muted)]">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <TechStackMarquee />
      <CtaBanner />
    </>
  );
}
