"use client";

import { motion } from "motion/react";
import { Sparkles, Mail, Phone, Globe } from "lucide-react";
import { site } from "@/content/site";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";

export function PosterCover() {
  return (
    <Poster page="01 / 14" section="Cover" showWatermark={false}>
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 520, className: "-top-40 -left-40", animated: true },
          { tone: "accent", size: 440, className: "-bottom-32 -right-32", animated: true },
          { tone: "fuchsia", size: 320, className: "top-1/3 right-10", animated: true },
        ]}
      />

      <div className="flex h-full min-h-[260mm] flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)]">
              <span className="text-gradient-brand font-display text-lg font-bold">N</span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-tight text-[var(--color-fg)]">
                Nexora AI
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                est. 2024 · remote · india
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="poster-eyebrow"
          >
            <Sparkles className="size-3 text-[var(--color-accent)]" />
            Services booklet · 2026 edition
          </motion.div>
        </div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-fg-muted)]"
          >
            A field guide to agentic systems —
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="poster-title mt-5 text-[64px] leading-[0.96]"
          >
            <span className="text-gradient">Agentic systems</span>
            <br />
            that run your
            <br />
            <span className="text-[var(--color-fg-muted)]">business while</span>
            <br />
            <span className="text-[var(--color-fg-muted)]">you sleep.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-7 max-w-[150mm] text-pretty text-[14px] leading-[1.55] text-[var(--color-fg-muted)]"
          >
            A boutique AI consultancy designing voice agents, chatbots and end-to-end
            workflow automations that compound revenue, slash manual ops, and put
            your business on autopilot. This booklet is everything we build, why it
            works, and what it&rsquo;s done for the operators we&rsquo;ve shipped with.
          </motion.p>
        </div>

        <div className="flex items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
              Prepared by
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
              {site.founder.name}
            </span>
            <span className="text-[12px] text-[var(--color-fg-muted)]">
              {site.founder.role}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col items-end gap-2 text-right"
          >
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-fg-muted)]">
              <Mail className="size-3 text-[var(--color-accent)]" />
              {site.contact.email}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-fg-muted)]">
              <Phone className="size-3 text-[var(--color-accent)]" />
              {site.contact.phone}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-fg-muted)]">
              <Globe className="size-3 text-[var(--color-accent)]" />
              nexora-ai.vercel.app
            </span>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-brand),var(--color-accent),transparent)] opacity-60" />
      </div>
    </Poster>
  );
}
