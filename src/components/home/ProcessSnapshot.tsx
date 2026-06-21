"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { processSteps } from "@/content/process";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

export function ProcessSnapshot() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="How we work"
          title="We automate your pain points."
          subtitle="No theatre, no decks-as-deliverables. Just a tight cycle that ships working software every week."
        />

        <div className="relative mt-16">
          {/* Animated connector line — desktop only */}
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-[10%] right-[10%] top-[2.6rem] hidden h-[1px] overflow-hidden bg-[var(--color-border)] md:block"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={prefersReduced ? { duration: 0 } : { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute inset-0 origin-left bg-[var(--color-brand)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative flex h-full flex-col border border-[var(--color-border)] border-b-0 last:border-b md:border-b md:border-r-0 md:last:border-r p-6 transition-all hover:bg-[var(--color-bg-elev)] hover:border-[var(--color-brand)]">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-mono text-4xl font-bold leading-none text-[var(--color-brand)]">
                      {step.number}
                    </span>
                    <span className="border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {step.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
