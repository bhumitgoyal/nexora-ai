"use client";

import { motion } from "motion/react";
import { services } from "@/content/services";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";

export function PosterServicesOverview() {
  return (
    <Poster page="04 / 14" section="Services overview">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 340, className: "-top-24 -right-20", animated: true },
          { tone: "accent", size: 280, className: "bottom-20 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Services
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[44px] leading-[1.05]"
      >
        Twelve disciplines. <span className="text-gradient">One operating system</span>
        <br />
        for your business.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Every service below is a production system we&rsquo;ve shipped in the wild —
        not a deck, not a pilot, not a &ldquo;wait for v2.&rdquo; Pick what bleeds.
        We&rsquo;ll build it.
      </motion.p>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {services.map((s, i) => {
          const Icon = s.icon;
          const accentColor =
            s.accent === "brand"
              ? "text-[var(--color-brand-strong)]"
              : s.accent === "accent"
              ? "text-[var(--color-accent-strong)]"
              : "text-[var(--color-fg)]";
          const accentBg =
            s.accent === "brand"
              ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28),transparent_70%)]"
              : s.accent === "accent"
              ? "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]"
              : "bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(34,211,238,0.18))]";
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.04, duration: 0.45 }}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-3.5"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid size-9 place-items-center rounded-lg border border-[var(--color-border-strong)] ${accentBg}`}
                >
                  <Icon className={`size-4 ${accentColor}`} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[12.5px] font-semibold leading-tight tracking-tight text-[var(--color-fg)]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[10px] leading-[1.45] text-[var(--color-fg-muted)]">
                {s.tagline}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-6 flex items-center justify-between rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-4"
      >
        <p className="font-display text-[14px] tracking-tight text-[var(--color-fg)]">
          The next four pages go deep on eight of these — with the problem,
          the build, the deliverables, and the stack we use to ship.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          → pages 05–07
        </span>
      </motion.div>
    </Poster>
  );
}
