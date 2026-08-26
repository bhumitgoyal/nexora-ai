"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/content/process";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { EASE, useIsomorphicLayoutEffect } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function PinnedProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    if (!section || !rail) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: section,
          start: "top top+=15px",
          end: `+=${processSteps.length * 70}%`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            gsap.set(rail, { scaleX: self.progress });
            const idx = Math.min(
              processSteps.length - 1,
              Math.floor(self.progress * processSteps.length)
            );
            setActive((prev) => (prev === idx ? prev : idx));
          },
        });
        // revert (true) un-wraps the pin-spacer so React's unmount
        // finds the DOM exactly as it rendered it
        return () => st.kill(true);
      }
    );
    return () => mm.revert();
  }, []);

  const step = processSteps[active];

  return (
    <div ref={sectionRef} className="hidden md:flex min-h-screen flex-col justify-center py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="How infrastructure gets built"
          title="From workflow map to a system that runs itself."
          subtitle="Scroll through it. Five phases, weekly demos, KPI-instrumented from day one."
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-[1fr_1.6fr] items-center gap-16">
          {/* giant chapter number */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={step.number}
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -90, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="font-mono text-[11rem] font-bold leading-none tracking-tighter text-[var(--color-brand)]"
              >
                {step.number}
              </motion.span>
            </AnimatePresence>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center font-mono text-[16rem] font-bold leading-none text-[var(--color-fg)] opacity-[0.04]"
            >
              {step.number}
            </span>
          </div>

          {/* step content crossfades */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.number}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <Badge
                  variant="outline"
                  className="w-fit rounded-none border-[var(--color-border)] font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)]"
                >
                  {step.duration}
                </Badge>
                <h3 className="font-display text-4xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-[var(--color-fg-muted)]">
                  {step.summary}
                </p>
                <ul className="mt-2 flex flex-col gap-2.5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--color-fg-muted)]">
                      <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* progress rail */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
            {processSteps.map((s, i) => (
              <span key={s.number} className={i === active ? "text-[var(--color-brand)]" : ""}>
                {s.title}
              </span>
            ))}
          </div>
          <div className="mt-3 h-[2px] w-full bg-[var(--color-border)]">
            <div ref={railRef} className="h-full origin-left bg-[var(--color-brand)]" style={{ transform: "scaleX(0)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedProcess({ className = "md:hidden" }: { className?: string }) {
  return (
    <div className={`container-x ${className}`}>
      <SectionHeader
        eyebrow="How infrastructure gets built"
        title="From workflow map to a system that runs itself."
        subtitle="No theatre, no decks-as-deliverables. We map the manual work, build the layer that absorbs it, and ship working systems every week."
      />
      <div className="relative mt-16">
        <div className="grid grid-cols-1 gap-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="relative flex h-full flex-col border border-[var(--color-border)] border-b-0 last:border-b p-6 transition-all hover:bg-[var(--color-bg-elev)] hover:border-[var(--color-brand)]">
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-mono text-4xl font-bold leading-none text-[var(--color-brand)]">
                    {step.number}
                  </span>
                  <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)] border-[var(--color-border)] rounded-none">
                    {step.duration}
                  </Badge>
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
  );
}

export function ProcessSnapshot() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduced) {
    return (
      <section className="relative border-t border-[var(--color-border)] py-24">
        <StackedProcess className="" />
      </section>
    );
  }
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-0">
      <PinnedProcess />
      <StackedProcess />
    </section>
  );
}
