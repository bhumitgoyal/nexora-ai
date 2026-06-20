"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";

const beliefs = [
  {
    no: "01",
    label: "Prompting is not strategy",
    body:
      "Anyone can paste a prompt into ChatGPT. That's a parlor trick — not leverage. Real AI lives inside the boring tools your team already pays for: CRMs, inboxes, dashboards, ticketing, schedulers.",
  },
  {
    no: "02",
    label: "Workflows compound, prompts don't",
    body:
      "A clever prompt saves five minutes. A wired-in agent saves five hours every day, then five hundred, then five thousand. Integration is where the curve bends.",
  },
  {
    no: "03",
    label: "Custom beats generic, always",
    body:
      "Off-the-shelf SaaS gets you 70% of the way. The remaining 30% — the part that's actually unique to your business — is where the real margin and moat live.",
  },
  {
    no: "04",
    label: "Owned, not rented",
    body:
      "You shouldn't rent intelligence at $30/seat forever. We build on your stack, in your cloud, with your data. No vendor lock-in. No per-seat tax.",
  },
];

export function PosterManifesto() {
  return (
    <Poster page="02 / 14" section="Manifesto">
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
        className="poster-title mt-6 text-[58px] leading-[1.0]"
      >
        <span className="text-[var(--color-fg-muted)]">AI is not</span>
        <br />
        <span className="text-gradient">prompting</span>{" "}
        <span className="text-[var(--color-fg-muted)]">a chatbot.</span>
        <br />
        It&apos;s <span className="text-gradient-brand">wiring</span>{" "}
        the way your
        <br />
        business <span className="text-[var(--color-fg-muted)]">actually runs.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-[155mm] text-[13.5px] leading-[1.65] text-[var(--color-fg-muted)]"
      >
        Most teams equate &ldquo;using AI&rdquo; with typing into ChatGPT. That&rsquo;s like
        equating &ldquo;using electricity&rdquo; with plugging in a lamp. The actual leverage
        is when AI sits invisibly inside your <span className="text-[var(--color-fg)]">management, analytics, marketing, sales,
        coding, dashboards, customer support, and operations</span> — taking the
        repetitive judgment-heavy work off your team&rsquo;s plate, 24/7, without ever
        getting tired or quitting.
      </motion.p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {beliefs.map((b, i) => (
          <motion.div
            key={b.no}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                {b.no}
              </span>
              <span className="size-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
            </div>
            <h3 className="mt-3 font-display text-[16px] font-semibold tracking-tight text-[var(--color-fg)]">
              {b.label}
            </h3>
            <p className="mt-2 text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)]">
              {b.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.7 }}
        className="mt-7 rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.12),rgba(34,211,238,0.08))] p-5"
      >
        <p className="font-display text-[15px] leading-[1.5] tracking-tight text-[var(--color-fg)]">
          &ldquo;If a process repeats, it can be agentified. If it&rsquo;s judgment-heavy,
          it can be augmented. If it&rsquo;s a meeting, it can be summarized,
          actioned, and followed up — automatically. The bar is no longer{" "}
          <span className="text-gradient-brand">can AI do this</span>. The bar is{" "}
          <span className="text-gradient-brand">have we wired it in yet</span>.&rdquo;
        </p>
      </motion.div>
    </Poster>
  );
}
