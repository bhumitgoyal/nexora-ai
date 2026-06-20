"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";

type Props = {
  caseStudy: CaseStudy;
  page: string;
  index: number;
  total: number;
};

export function PosterCaseStudy({ caseStudy, page, index, total }: Props) {
  const c = caseStudy;
  return (
    <Poster page={page} section={`Case study · ${c.client}`}>
      <PosterDecor
        grid
        orbs={[
          { tone: index % 2 === 0 ? "brand" : "fuchsia", size: 360, className: "-top-28 -right-24", animated: true },
          { tone: "accent", size: 280, className: "-bottom-24 -left-20", animated: true },
        ]}
      />

      <div className="flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="poster-eyebrow"
        >
          Case study · {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]"
        >
          <span>{c.year}</span>
          <span className="text-[var(--color-fg-subtle)]">·</span>
          <span>{c.duration}</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 flex items-end justify-between gap-6"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            {c.industry}
          </div>
          <h2 className="poster-title mt-2 text-[34px] leading-[1.08] tracking-tight">
            <span className="text-gradient">{c.client}</span>
          </h2>
        </div>
        <ArrowUpRight className="size-5 shrink-0 text-[var(--color-fg-subtle)]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.65 }}
        className="mt-4 max-w-[170mm] font-display text-[20px] leading-[1.25] tracking-tight text-[var(--color-fg)]"
      >
        {c.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3.5 max-w-[170mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        {c.summary}
      </motion.p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {c.results.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4"
          >
            <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[rgba(139,92,246,0.28)] blur-3xl" />
            <div className="text-gradient-brand font-display text-[44px] font-semibold leading-none tracking-tight">
              {r.metric}
            </div>
            <div className="mt-2.5 text-[11px] leading-[1.45] text-[var(--color-fg-muted)]">
              {r.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55 }}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            The challenge
          </div>
          <p className="mt-2 text-[11px] leading-[1.55] text-[var(--color-fg)]">
            {c.challenge}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            How we built it
          </div>
          <ul className="mt-2 flex flex-col gap-1.5">
            {c.approach.slice(0, 4).map((a) => (
              <li
                key={a}
                className="flex items-start gap-1.5 text-[10.5px] leading-[1.45] text-[var(--color-fg-muted)]"
              >
                <span className="mt-1 size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="mt-5 flex items-center justify-between"
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {c.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          nexora-ai · case {c.slug}
        </span>
      </motion.div>
    </Poster>
  );
}
