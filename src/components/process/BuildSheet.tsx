"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { processSteps } from "@/content/process";
import { Reveal } from "@/components/shared/Reveal";

// Manufacturing traveler: the five phases as a build sheet, stitched
// together by a red thread that draws itself down the margin as you scroll.
export function BuildSheet() {
  const listRef = useRef<HTMLOListElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.7", "end 0.7"],
  });
  const thread = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  return (
    <section className="container-x pb-24 md:pb-32">
      {/* traveler header */}
      <Reveal>
        <div className="mx-auto flex max-w-3xl items-center justify-between border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2.5 md:px-6">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-fg)] md:text-[10px]">
            Build sheet · Rev 2026
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] md:text-[10px]">
            Scope: your workflow
          </span>
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-3xl">
        {/* thread rail */}
        <div
          aria-hidden
          className="absolute bottom-8 left-[15px] top-8 w-[2px] bg-[var(--color-border)] opacity-25 md:left-[19px]"
        />
        {/* the red thread */}
        <motion.div
          aria-hidden
          style={{ scaleY: prefersReduced ? 1 : thread }}
          className="absolute bottom-8 left-[15px] top-8 w-[2px] origin-top bg-[var(--color-brand)] md:left-[19px]"
        />

        <ol ref={listRef} className="flex flex-col gap-8 pt-10 md:gap-10">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <li className="relative pl-12 md:pl-16">
                {/* punched eyelet */}
                <span className="absolute left-0 top-6 flex size-8 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] md:size-10">
                  <motion.span
                    initial={prefersReduced ? { opacity: 1 } : { scale: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-30% 0px -30% 0px" }}
                    transition={{ duration: 0.3, ease: [0.2, 1.4, 0.4, 1] }}
                    className="size-2.5 bg-[var(--color-brand)] md:size-3"
                  />
                </span>

                {/* spec row */}
                <div className="border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] transition-colors hover:border-[var(--color-brand)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border)]/60 px-5 py-3 md:px-7">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                      Phase {step.number}
                    </span>
                    <span className="border border-[var(--color-border)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                      {step.duration}
                    </span>
                  </div>
                  <div className="px-5 py-5 md:px-7 md:py-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-[var(--color-fg-muted)] md:text-base">
                      {step.summary}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-fg-muted)]">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* sign-off */}
        <Reveal delay={0.1}>
          <div className="ml-12 mt-8 flex items-center justify-between border-2 border-dashed border-[var(--color-border)] px-5 py-4 md:ml-16 md:px-7">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-fg)]">
              Sign-off: working system, in production
            </span>
            <span className="rotate-[-3deg] border-2 border-[var(--color-success)] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-success)]">
              Shipped
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
