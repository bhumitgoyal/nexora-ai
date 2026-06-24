"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, allIndustries, type CaseStudy } from "@/content/caseStudies";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return caseStudies;
    return caseStudies.filter((c) => c.industry === filter);
  }, [filter]);

  const filters = ["All", ...allIndustries];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-all",
              filter === f
                ? "border-[var(--color-brand)] bg-[var(--color-brand)]/10 text-[var(--color-fg)]"
                : "border-[var(--color-border-strong)] text-[var(--color-fg-muted)] hover:border-[var(--color-brand)]/50 hover:text-[var(--color-fg)]",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => (
            <motion.div
              key={c.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <WorkCard study={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-[var(--color-fg-muted)]">
          No case studies in this category yet try another filter.
        </p>
      ) : null}
    </div>
  );
}

function WorkCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex h-full flex-col overflow-hidden card-surface"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-brand)]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full bg-black/40 backdrop-blur px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
            {study.industry}
          </span>
          <span className="rounded-full bg-black/40 backdrop-blur px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
            {study.year}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <span className="font-display text-2xl font-semibold text-white">
            {study.client}
          </span>
          <ArrowUpRight className="size-5 text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-pretty font-display text-lg font-semibold tracking-tight md:text-xl">
          {study.title}
        </h3>
        <p className="text-sm text-[var(--color-fg-muted)]">{study.summary}</p>
        <div className="mt-auto grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-4">
          {study.results.map((r) => (
            <div key={r.label} className="flex flex-col gap-0.5">
              <span className="text-gradient-brand font-display text-lg font-semibold">
                {r.metric}
              </span>
              <span className="text-[10px] leading-tight text-[var(--color-fg-subtle)]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
