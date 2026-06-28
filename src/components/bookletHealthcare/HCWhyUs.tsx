"use client";

import { motion } from "motion/react";
import {
  Wallet,
  Layers,
  ShieldCheck,
  Infinity as InfinityIcon,
  Sparkles,
} from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const valueProps = [
  {
    icon: Wallet,
    title: "Affordable, not cheap",
    body: "Strategy sprints from $4k. Custom builds $8k–$30k for most clinic engagements. Boutique outcomes at a fraction of hiring a full-time ops team.",
    accent: "brand" as const,
  },
  {
    icon: Layers,
    title: "Practice-specific, not generic",
    body: "Every bot, agent, and workflow is trained on your actual scheduling rules, specialties, and patient communication style. No templated chatbots.",
    accent: "accent" as const,
  },
  {
    icon: ShieldCheck,
    title: "Shipped, not stalled",
    body: "Live in your practice in 3–6 weeks. No 80-slide strategy decks before something actually ships. Weekly demos from day one.",
    accent: "brand" as const,
  },
  {
    icon: InfinityIcon,
    title: "Owned, not rented",
    body: "Code, data, and integrations live in your cloud accounts. No vendor lock-in, no per-seat tax as your practice grows.",
    accent: "accent" as const,
  },
];

const processSteps = [
  { label: "Understand", detail: "Week 1" },
  { label: "Design", detail: "Week 2" },
  { label: "Build", detail: "Weeks 3–5" },
  { label: "Integrate", detail: "Weeks 5–6" },
  { label: "Scale", detail: "Ongoing" },
];

export function HCWhyUs() {
  return (
    <Poster page="07 / 08" section="Why Nexora">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 360, className: "-top-28 -left-24", animated: true },
          { tone: "accent", size: 320, className: "-bottom-24 -right-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        <Sparkles className="size-3 text-[var(--color-accent)]" />
        Why Nexora
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Affordable. Practice-matched.
        <br />
        <span className="text-gradient">Wired in weeks,</span>{" "}
        <span className="text-[var(--color-fg-muted)]">not quarters.</span>
      </motion.h2>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {valueProps.map((v, i) => {
          const Icon = v.icon;
          const isBrand = v.accent === "brand";
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.005))] p-4"
            >
              <div
                className={`absolute -right-10 -top-10 size-32 rounded-full blur-3xl ${
                  isBrand ? "bg-[rgba(139,92,246,0.3)]" : "bg-[rgba(34,211,238,0.28)]"
                }`}
              />
              <div className="flex items-start gap-3">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--color-border-strong)] ${
                    isBrand
                      ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent_70%)]"
                      : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_70%)]"
                  }`}
                >
                  <Icon
                    className={`size-5 ${
                      isBrand ? "text-[var(--color-brand-strong)]" : "text-[var(--color-accent-strong)]"
                    }`}
                  />
                </span>
                <div>
                  <h3 className="font-display text-[15.5px] font-semibold tracking-tight text-[var(--color-fg)]">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-[1.55] text-[var(--color-fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.55 }}
        className="mt-5 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[14px] font-semibold tracking-tight text-[var(--color-fg)]">
            How we work · 5 stages
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            Weekly demos · working software from day one
          </span>
        </div>
        <div className="mt-4 flex items-center gap-0">
          {processSteps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`grid size-8 place-items-center rounded-full border border-[var(--color-border-strong)] ${
                    i % 2 === 0
                      ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),transparent_70%)]"
                      : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.32),transparent_70%)]"
                  }`}
                >
                  <span className="font-mono text-[9px] font-semibold text-[var(--color-fg)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <span className="font-display text-[11px] font-semibold tracking-tight text-[var(--color-fg)]">
                    {step.label}
                  </span>
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                    {step.detail}
                  </span>
                </div>
              </div>
              {i < processSteps.length - 1 && (
                <div className="mx-2 h-px flex-1 bg-[linear-gradient(90deg,var(--color-brand),var(--color-accent))] opacity-40" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] leading-[1.55] text-[var(--color-fg-muted)]">
          KPIs locked before code is written. No mystery cycles. No slide-deck stalling.
        </p>
      </motion.div>
    </Poster>
  );
}
