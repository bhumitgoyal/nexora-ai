"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";

type ServiceSpotlight = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  problem: string;
  solution: string[];
  tech: string[];
  tone: "brand" | "accent";
};

export function ServiceSpotlightCard({
  service,
  index,
}: {
  service: ServiceSpotlight;
  index: number;
}) {
  const Icon = service.icon;
  const isBrand = service.tone === "brand";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.55 }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.005))] p-5"
    >
      <div
        className={`absolute inset-x-0 top-0 h-px ${
          isBrand
            ? "bg-[linear-gradient(90deg,transparent,var(--color-brand),transparent)]"
            : "bg-[linear-gradient(90deg,transparent,var(--color-accent),transparent)]"
        }`}
      />

      <div className="flex items-start justify-between gap-3">
        <span
          className={`grid size-11 place-items-center rounded-xl border border-[var(--color-border-strong)] ${
            isBrand
              ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent_70%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_70%)]"
          }`}
        >
          <Icon
            className={`size-5 ${
              isBrand
                ? "text-[var(--color-brand-strong)]"
                : "text-[var(--color-accent-strong)]"
            }`}
          />
        </span>
        <ArrowUpRight className="size-4 text-[var(--color-fg-subtle)]" />
      </div>

      <h3 className="mt-3.5 font-display text-[19px] font-semibold leading-tight tracking-tight text-[var(--color-fg)]">
        {service.title}
      </h3>
      <p className="mt-1.5 text-[11.5px] italic leading-snug text-[var(--color-fg-muted)]">
        {service.tagline}
      </p>

      <div className="mt-3.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          The pain
        </span>
        <p className="mt-1 text-[10.5px] leading-[1.5] text-[var(--color-fg)]">
          {service.problem}
        </p>
      </div>

      <div className="mt-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          What we ship
        </span>
        <ul className="mt-1.5 flex flex-col gap-1.5">
          {service.solution.map((s) => (
            <li key={s} className="flex items-start gap-1.5 text-[10.5px] leading-[1.45] text-[var(--color-fg-muted)]">
              <Check
                className={`mt-0.5 size-3 shrink-0 ${
                  isBrand
                    ? "text-[var(--color-brand-strong)]"
                    : "text-[var(--color-accent-strong)]"
                }`}
              />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-1 pt-3">
        {service.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-fg-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
