"use client";

import { services } from "@/content/services";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowDown } from "lucide-react";

// Parts-catalogue index: every system numbered and anchor-linked,
// like the contents page of an equipment manual.
export function SystemIndex() {
  return (
    <Reveal delay={0.1}>
      <div className="mx-auto max-w-3xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)]">
        <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] px-4 py-2.5 md:px-6">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--color-fg)] md:text-[10px]">
            Systems catalogue · Index
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] md:text-[10px]">
            {String(services.length).padStart(2, "0")} entries
          </span>
        </div>
        <ol>
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-[var(--color-border)]/40 last:border-b-0">
              <a
                href={`#${s.slug}`}
                className="group flex min-h-[44px] items-center gap-3 px-4 py-2.5 transition-colors hover:bg-[var(--color-bg)] md:gap-5 md:px-6"
              >
                <span className="shrink-0 font-mono text-[10px] font-bold tracking-[0.14em] text-[var(--color-brand)] md:text-xs">
                  SYS-{String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-brand)] md:text-base">
                  {s.title}
                </span>
                <span className="hidden max-w-[220px] truncate font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-fg-subtle)] lg:block">
                  {s.tech[0]} · {s.tech[1]}
                </span>
                <ArrowDown className="size-3.5 shrink-0 text-[var(--color-fg-subtle)] transition-all group-hover:translate-y-0.5 group-hover:text-[var(--color-brand)]" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
