"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/content/process";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { EASE, useIsomorphicLayoutEffect, PIN_QUERY, NO_PIN_QUERY } from "@/lib/motion";

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
      PIN_QUERY,
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
    <div ref={sectionRef} className="hidden min-h-screen flex-col justify-center pb-24 pt-16 pin:flex">
      <div className="container-x">
        <SectionHeader
          eyebrow="How infrastructure gets built"
          title="From workflow map to a system that runs itself."
          subtitle="Five phases. A demo every week."
        />

        {/* The crossfading stage shows one phase at a time — screen readers get all five. */}
        <ol className="sr-only">
          {processSteps.map((s) => (
            <li key={s.number}>
              {s.number}. {s.title} ({s.duration}): {s.summary}
            </li>
          ))}
        </ol>
        <div aria-hidden className="mx-auto mt-12 grid max-w-5xl grid-cols-[1fr_1.6fr] items-center gap-16">
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
                  className="w-fit rounded-none border-[var(--color-border)] font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-muted)]"
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
        <div className="mx-auto mt-10 max-w-5xl">
          <div aria-hidden className="eyebrow flex items-center justify-between text-[var(--color-fg-muted)]">
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

function StackedProcess({ className = "pin:hidden" }: { className?: string }) {
  return (
    <div className={`container-x ${className}`}>
      <SectionHeader
        eyebrow="How infrastructure gets built"
        title="From workflow map to a system that runs itself."
        subtitle="Map the work. Build the layer. Ship every week."
      />
      <div className="relative mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="relative flex h-full flex-col -mb-px -mr-px border border-[var(--color-border)] p-6 transition-colors hover:bg-[var(--color-bg-elev)]">
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-mono text-4xl font-bold leading-none text-[var(--color-brand)]">
                    {step.number}
                  </span>
                  <Badge variant="outline" className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-muted)] border-[var(--color-border)] rounded-none">
                    {step.duration}
                  </Badge>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-callout leading-relaxed text-[var(--color-fg-muted)]">
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
  // CSS decides which one shows (the `pin` variant) — no post-hydration swap.
  return (
    <section className="section-y relative border-t border-[var(--color-border)] pin:py-0">
      <PinnedProcess />
      <StackedProcess />
    </section>
  );
}
