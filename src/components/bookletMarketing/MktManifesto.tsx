"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const quadrants = [
  {
    no: "01",
    label: "Client Reporting",
    body: "Live dashboards that pull from ad platforms, CRMs, and analytics — branded as yours, updated without anyone touching a spreadsheet.",
  },
  {
    no: "02",
    label: "Workflow Automation",
    body: "Onboarding, approvals, content repurposing, and campaign QA — the repetitive 80% of account management, automated.",
  },
  {
    no: "03",
    label: "Client-Facing AI",
    body: "Chatbots, voice agents, and lead-gen systems you can resell to your own clients under your agency's brand.",
  },
  {
    no: "04",
    label: "Internal Ops",
    body: "Capacity planning, scope-creep alerts, and resource allocation dashboards so you know which accounts are bleeding hours before the client does.",
  },
];

const stats = [
  { value: "20–60h", label: "manual hours/week reclaimed per account team" },
  { value: "2 weeks", label: "time to first live dashboard or agent" },
  { value: "100%", label: "white-label — everything ships under your agency's name" },
];

export function MktManifesto() {
  return (
    <Poster page="02 / 08" section="Manifesto">
      <PosterDecor
        grid
        orbs={[
          { tone: "accent", size: 380, className: "-top-32 -left-20", animated: true },
          { tone: "brand", size: 320, className: "-bottom-24 -right-16", animated: true },
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
        className="poster-title mt-6 text-[46px] leading-[1.0]"
      >
        <span className="text-[var(--color-fg-muted)]">Your clients don&rsquo;t pay you</span>
        <br />
        <span className="text-gradient">to copy-paste</span>
        <br />
        between tabs.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-[155mm] text-[13.5px] leading-[1.65] text-[var(--color-fg-muted)]"
      >
        Every agency runs the same hidden tax: account managers pulling reports by hand, junior
        staff repurposing the same content five different ways, and a founder who&rsquo;s the
        only one who can explain ROI to a client on a call. We build the{" "}
        <span className="text-[var(--color-fg)]">infrastructure layer underneath your service
        offering</span> — wired into the tools you already run client work through — so your
        senior team&rsquo;s time goes to strategy, not spreadsheets.
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
            <div className="text-gradient-brand font-display text-[26px] font-semibold leading-none tracking-tight">
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
