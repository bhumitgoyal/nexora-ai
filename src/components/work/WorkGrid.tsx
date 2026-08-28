"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
              "min-h-[36px] border px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-all",
              filter === f
                ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                : "border-[var(--color-border)] text-[var(--color-fg-muted)] hover:border-[var(--color-brand)] hover:text-[var(--color-fg)]",
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
        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.client} workflow, built by Nuvero AI`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 grid-bg opacity-20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="border border-white/30 bg-black/55 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90">
            {study.industry}
          </span>
          <span className="border border-white/30 bg-black/55 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/90">
            {study.year}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <span className="font-display text-2xl font-semibold text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
            {study.client}
          </span>
          <ArrowUpRight className="size-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
              <span className="font-display text-base font-bold leading-tight tracking-tight text-[var(--color-brand)] md:text-lg">
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
