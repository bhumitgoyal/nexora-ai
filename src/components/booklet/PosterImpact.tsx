"use client";

import { motion } from "motion/react";
import { Clock, Wallet, Activity, ShieldCheck } from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";
import { CountUp } from "@/components/shared/CountUp";

const pillars = [
  {
    icon: Clock,
    title: "Time saved",
    value: 1800,
    suffix: "h",
    label: "annual ops time recovered per team",
    tone: "brand",
  },
  {
    icon: Wallet,
    title: "Cost saved",
    value: 184,
    suffix: "k",
    label: "median year-one ops savings, in USD",
    tone: "accent",
  },
  {
    icon: Activity,
    title: "Throughput",
    value: 10,
    suffix: "×",
    label: "increase in output across content & ops",
    tone: "brand",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    value: 99.4,
    suffix: "%",
    decimals: 1,
    label: "uptime across shipped agentic systems",
    tone: "accent",
  },
] as const;

const breakdown = [
  { tag: "Voice", line: "97% of inbound calls resolved without human handoff" },
  { tag: "Chat", line: "92% of first-touch member queries answered by AI" },
  { tag: "Lead-gen", line: "$0.11 per verified lead · 2.4% bounce rate at scale" },
  { tag: "Marketing", line: "80% reduction in campaign setup time · 3.1× reply lift" },
  { tag: "Sales-ops", line: "Forecast accuracy 76% → 94% in two quarters" },
  { tag: "Recruiting", line: "Time-to-hire collapsed from 6 weeks to 9 days" },
  { tag: "Content", line: "10× monthly content output · 0 drop in NPS" },
  { tag: "Knowledge", line: "62% faster ramp · 78% drop in routing incidents" },
];

export function PosterImpact() {
  return (
    <Poster page="08 / 14" section="Impact">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 400, className: "-top-32 -left-24", animated: true },
          { tone: "accent", size: 340, className: "-bottom-32 -right-24", animated: true },
          { tone: "fuchsia", size: 240, className: "top-1/2 right-10", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Impact
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[44px] leading-[1.02]"
      >
        Real numbers,
        <br />
        <span className="text-gradient">from real deployments.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        We instrument every system with KPIs before a line of code ships. If it
        doesn&rsquo;t move a number, it isn&rsquo;t done. Below: the four
        outcomes our clients care about most — followed by where each lift
        actually came from.
      </motion.p>

      <div className="mt-6 grid grid-cols-4 gap-3">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          const isBrand = p.tone === "brand";
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4"
            >
              <div
                className={`absolute -right-10 -top-10 size-32 rounded-full blur-3xl ${
                  isBrand ? "bg-[rgba(139,92,246,0.35)]" : "bg-[rgba(34,211,238,0.32)]"
                }`}
              />
              <Icon
                className={`size-4 ${
                  isBrand ? "text-[var(--color-brand-strong)]" : "text-[var(--color-accent-strong)]"
                }`}
              />
              <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                {p.title}
              </div>
              <div className="text-gradient-brand mt-1.5 font-display text-[40px] font-semibold leading-none tracking-tight">
                <CountUp value={p.value} suffix={p.suffix} decimals={"decimals" in p ? p.decimals : 0} />
              </div>
              <p className="mt-2.5 text-[10.5px] leading-[1.45] text-[var(--color-fg-muted)]">
                {p.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-5"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[16px] font-semibold tracking-tight text-[var(--color-fg)]">
            Where the wins came from
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            8 disciplines · same playbook
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5">
          {breakdown.map((b, i) => (
            <motion.div
              key={b.tag}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.04, duration: 0.4 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                {b.tag}
              </span>
              <span className="text-[11px] leading-[1.5] text-[var(--color-fg-muted)]">
                {b.line}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-5 flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-3.5"
      >
        <p className="font-display text-[13px] tracking-tight text-[var(--color-fg)]">
          Across 47+ shipped systems, in 11 industries, handling 1.4M+ AI
          interactions per month — and counting.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          v1.0 · 2026
        </span>
      </motion.div>
    </Poster>
  );
}
