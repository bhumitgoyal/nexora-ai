"use client";

import { useState, useMemo, ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "@/content/caseStudies";
import { cn } from "@/lib/utils";
import { DURATION, EASE } from "@/lib/motion";

// 13 industries for ~15 deployments meant almost every chip matched one card.
// Group into a handful of sectors a buyer actually self-identifies with.
const GROUPS: { label: string; match: RegExp }[] = [
  { label: "Operations & industry", match: /energy|utilit|industrial|logistic|manufactur|supply|gas/i },
  { label: "Commerce & consumer", match: /commerce|d2c|retail|luxury|wellness|consumer|brand|hospitality|f&b|food/i },
  { label: "Marketing & media", match: /marketing|media|agency|pr\b|public relations|content/i },
  { label: "Real estate", match: /real estate|property|realty/i },
  { label: "B2B, SaaS & education", match: /b2b|saas|software|education|campus|research|internal|recruit|sales/i },
];

function groupOf(industry: string) {
  return GROUPS.find((g) => g.match.test(industry))?.label ?? "Other";
}

export function WorkGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [filter, setFilter] = useState<string>("All");

  const filters = useMemo(() => {
    const present = new Set(caseStudies.map((c) => groupOf(c.industry)));
    return ["All", ...[...GROUPS.map((g) => g.label), "Other"].filter((l) => present.has(l))];
  }, [caseStudies]);

  const filtered = useMemo(
    () => (filter === "All" ? caseStudies : caseStudies.filter((c) => groupOf(c.industry) === filter)),
    [filter, caseStudies],
  );

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filter deployments by sector" className="scrollbar-hide -mx-6 flex gap-2 overflow-x-auto px-6 md:-mx-10 md:px-10 lg:mx-0 lg:flex-wrap lg:justify-center lg:px-0">
        {filters.map((f) => {
          const count = f === "All" ? caseStudies.length : caseStudies.filter((c) => groupOf(c.industry) === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "eyebrow inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap border-2 px-4 font-bold transition-colors",
                filter === f
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-fg-muted)] hover:border-[var(--color-brand)] hover:text-[var(--color-fg)]",
              )}
            >
              {f}
              <span className={filter === f ? "text-white" : "text-[var(--color-fg-subtle)]"}>{count}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {filtered.length} deployments
      </p>

      <motion.ul layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((c) => (
            <motion.li
              key={c.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.fast, ease: EASE }}
            >
              <WorkCard study={c} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

function WorkCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex h-full flex-col overflow-hidden card-surface"
    >
      {/* shared element: morphs into the case-study hero (React <ViewTransition>) */}
      <ViewTransition name={`work-poster-${study.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-[var(--color-border)] bg-[var(--color-brand)]">
          {study.image ? (
            <Image
              src={study.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 grid-bg opacity-20" />
          )}
          <div className="absolute left-0 top-0 flex flex-wrap items-center">
            <span className="eyebrow bg-[var(--color-fg)] px-2.5 py-1 text-[var(--color-bg)]">{study.industry}</span>
            <span className="eyebrow border-l border-[var(--color-bg)]/40 bg-[var(--color-fg)] px-2.5 py-1 text-[var(--color-bg)]">{study.year}</span>
          </div>
        </div>
      </ViewTransition>
      <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-6 py-4">
        <span className="font-display text-title-3 font-semibold">{study.client}</span>
        <ArrowUpRight aria-hidden className="size-5 text-[var(--color-brand)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-pretty font-display text-lg font-semibold tracking-tight md:text-xl">
          {study.title}
        </h3>
        <p className="text-callout text-[var(--color-fg-muted)]">{study.summary}</p>
        <div className="mt-auto grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-4">
          {study.results.map((r) => (
            <div key={r.label} className="flex flex-col gap-0.5">
              <span className="font-display text-base font-bold leading-tight tracking-tight text-[var(--color-brand)] md:text-lg">
                {r.metric}
              </span>
              <span className="text-[11px] leading-tight text-[var(--color-fg-muted)]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
