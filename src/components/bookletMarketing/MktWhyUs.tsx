"use client";

import { motion } from "motion/react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const props = [
  {
    no: "01",
    label: "Affordable, not cheap",
    body: "Strategy sprints from $4k. Custom builds $8k–$40k depending on scope. Boutique outcomes at a fraction of hiring an internal automation team.",
  },
  {
    no: "02",
    label: "White-label, not co-branded",
    body: "Dashboards, chatbots, and reports ship under your agency's name. Your clients never see our name unless you want them to.",
  },
  {
    no: "03",
    label: "Shipped, not stalled",
    body: "Live in 4–8 weeks. Weekly demos. No 80-slide strategy decks before something actually ships to a client.",
  },
  {
    no: "04",
    label: "Owned, not rented",
    body: "Code, data, and integrations live in your accounts. No vendor lock-in, no per-seat tax as you add more client accounts.",
  },
];

const timeline = [
  { week: "Week 1", step: "Understand" },
  { week: "Week 2", step: "Design" },
  { week: "Weeks 3–6", step: "Build" },
  { week: "Weeks 6–8", step: "Integrate" },
  { week: "Ongoing", step: "Scale" },
];

export function MktWhyUs() {
  return (
    <Poster page="07 / 08" section="Why Nexora">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 360, className: "-top-28 -right-24", animated: true },
          { tone: "accent", size: 300, className: "-bottom-20 -left-16", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Why Nexora · Built for agencies, not enterprise
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[38px] leading-[1.06]"
      >
        Affordable. White-label.
        <br />
        <span className="text-gradient">Wired in weeks, not quarters.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        We built this specifically for agencies who can&rsquo;t afford a 6-month enterprise
        engagement but can&rsquo;t keep running their operations on spreadsheets and Slack threads.
      </motion.p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {props.map((p, i) => (
          <motion.div
            key={p.no}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                {p.no}
              </span>
              <span className="size-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_2px_rgba(139,92,246,0.6)]" />
            </div>
            <h3 className="mt-3 font-display text-[15px] font-semibold tracking-tight text-[var(--color-fg)]">
              {p.label}
            </h3>
            <p className="mt-2 text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)]">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.08),rgba(34,211,238,0.05))] p-5"
      >
        <div className="poster-eyebrow mb-4">Process · from kickoff to live</div>
        <div className="relative flex items-start justify-between">
          <div className="absolute left-0 right-0 top-[13px] h-px bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-accent)] to-[var(--color-brand)] opacity-30" />
          {timeline.map((t, i) => (
            <div key={t.step} className="relative flex flex-col items-center gap-2 text-center">
              <div
                className="relative z-10 size-[26px] rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] flex items-center justify-center"
                style={{
                  background: i === 0
                    ? "radial-gradient(circle,rgba(139,92,246,0.4),rgba(139,92,246,0.05))"
                    : undefined,
                }}
              >
                <span className="font-mono text-[8px] text-[var(--color-fg-subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="font-display text-[11px] font-semibold tracking-tight text-[var(--color-fg)]">
                {t.step}
              </span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                {t.week}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Poster>
  );
}
