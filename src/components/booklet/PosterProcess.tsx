"use client";

import { motion } from "motion/react";
import { processSteps } from "@/content/process";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";

export function PosterProcess() {
  return (
    <Poster page="12 / 14" section="How we work">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 320, className: "-top-24 -right-20", animated: true },
          { tone: "accent", size: 300, className: "-bottom-24 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Process · 5 stages
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[42px] leading-[1.05]"
      >
        Strategy on paper.
        <br />
        <span className="text-gradient">Production in weeks.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        We ship in tight weekly cycles. Working software in your hands from
        week one. Measured KPIs locked in before a line of code is written.
        No mystery, no slide-deck stalling.
      </motion.p>

      <div className="mt-7 relative">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[linear-gradient(180deg,var(--color-brand),var(--color-accent),transparent)] opacity-50" />

        <div className="flex flex-col gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="relative flex items-start gap-5"
            >
              <span
                className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-[var(--color-border-strong)] ${
                  i % 2 === 0
                    ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_70%)]"
                    : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.32),transparent_70%)]"
                }`}
              >
                <span className="font-mono text-[11px] font-semibold text-[var(--color-fg)]">
                  {step.number}
                </span>
              </span>

              <div className="flex-1 rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[18px] font-semibold tracking-tight text-[var(--color-fg)]">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-1.5 text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)]">
                  {step.summary}
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-1.5 text-[10.5px] text-[var(--color-fg-muted)]"
                    >
                      <span className="size-1 rounded-full bg-[var(--color-brand-strong)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Poster>
  );
}
