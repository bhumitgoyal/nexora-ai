"use client";

import { motion } from "motion/react";
import { Megaphone, Mail, Phone, Globe } from "lucide-react";
import { site } from "@/content/site";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

export function MktCover() {
  return (
    <Poster page="01 / 08" section="Cover" showWatermark={false}>
      <PosterDecor
        grid
        orbs={[
          { tone: "accent", size: 520, className: "-top-40 -left-40", animated: true },
          { tone: "brand", size: 440, className: "-bottom-32 -right-32", animated: true },
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
                Nuvero AI
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="poster-eyebrow"
          >
            <Megaphone className="size-3 text-[var(--color-accent)]" />
            Services Booklet · 2026 Edition
          </motion.div>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="poster-title mt-5 text-[56px] leading-[0.96]"
          >
            <span className="text-gradient-brand">White-label automation</span>
            <br />
            <span className="text-gradient">and dashboards</span>
            <br />
            that make your agency
            <br />
            <span className="text-[var(--color-fg-muted)]">look bigger.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-7 max-w-[150mm] text-pretty text-[14px] leading-[1.55] text-[var(--color-fg-muted)]"
          >
            A boutique AI consultancy building the workflow automation, client
            dashboards, and reporting infrastructure that agencies resell under their own name. This means your team
            spends less time on manual ops and more time on the work clients actually pay for.
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
              <Globe className="size-3 text-[var(--color-accent)]" />
              nuvero.space
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-fg-muted)]">
              <Phone className="size-3 text-[var(--color-accent)]" />
              {site.contact.phone}
            </span>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent),var(--color-brand),transparent)] opacity-60" />
      </div>
    </Poster>
  );
}
