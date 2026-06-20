"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const quadrants = [
  {
    no: "01",
    label: "Acquisition",
    body: "Cart-abandonment recovery, personalized win-back offers, and an AI concierge that greets every new visitor by intent, not by script.",
  },
  {
    no: "02",
    label: "Styling & Discovery",
    body: "An AI stylist trained on your own catalog — answers \"how do I style this?\" using your actual SKUs, not generic fashion advice.",
  },
  {
    no: "03",
    label: "Retention",
    body: "Brand-aware, customer-aware messaging that remembers past orders, sizes, and preferences — every single time, on every channel.",
  },
  {
    no: "04",
    label: "Operations",
    body: "Voice agents that confirm orders before dispatch, killing fake/random COD orders before they cost you a delivery.",
  },
];

const stats = [
  { value: "60–70%", label: "average cart abandonment rate D2C brands lose to silence" },
  { value: "3 weeks", label: "time to first live agent on your store" },
  { value: "Zero", label: "vendor lock-in — you own the integration" },
];

export function D2CManifesto() {
  return (
    <Poster page="02 / 08" section="Manifesto">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 380, className: "-top-32 -left-20", animated: true },
          { tone: "accent", size: 320, className: "-bottom-24 -right-16", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        <Quote className="size-3 text-[var(--color-accent)]" />
        Manifesto · 01
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="poster-title mt-6 text-[48px] leading-[1.0]"
      >
        <span className="text-[var(--color-fg-muted)]">Your store doesn&rsquo;t sleep.</span>
        <br />
        <span className="text-gradient">Your sales team</span>
        <br />
        shouldn&rsquo;t have to.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-[155mm] text-[13.5px] leading-[1.65] text-[var(--color-fg-muted)]"
      >
        Most D2C brands treat AI like a chat widget bolted onto checkout. The real leverage
        is when AI becomes part of the{" "}
        <span className="text-[var(--color-fg)]">buying journey itself</span> — recommending
        the right product, recovering the cart that almost converted, confirming the order
        before it ships, and remembering every customer&rsquo;s taste the next time they
        come back.
      </motion.p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {quadrants.map((q, i) => (
          <motion.div
            key={q.no}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                {q.no}
              </span>
              <span className="size-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
            </div>
            <h3 className="mt-3 font-display text-[16px] font-semibold tracking-tight text-[var(--color-fg)]">
              {q.label}
            </h3>
            <p className="mt-2 text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)]">
              {q.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.7 }}
        className="mt-6 grid grid-cols-3 gap-3"
      >
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4"
          >
            <div className="text-gradient-brand font-display text-[28px] font-semibold leading-none tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 text-[10px] leading-tight text-[var(--color-fg-muted)]">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </Poster>
  );
}
