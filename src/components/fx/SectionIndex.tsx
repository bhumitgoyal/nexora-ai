"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

// Folio in the left margin, like a page number on a job sheet: "§ 07 — The
// wiring". Tells you where you are on a long page (HIG: preserve context).
// Only on very wide screens where the margin is genuinely empty.
export function SectionIndex() {
  const pathname = usePathname();
  const [current, setCurrent] = useState<{ n: number; label: string } | null>(null);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>("main section")].filter((s) =>
      s.querySelector("h2, h1"),
    );
    if (sections.length < 4) {
      setCurrent(null);
      return;
    }
    const labelOf = (s: HTMLElement) => {
      if (s.querySelector("h1")) return "Intro";
      const eyebrow = s.querySelector<HTMLElement>(".eyebrow");
      const h = s.querySelector<HTMLElement>("h1, h2");
      const text = (eyebrow?.textContent || h?.getAttribute("aria-label") || h?.textContent || "").trim();
      return text.length > 32 ? text.slice(0, 31) + "…" : text;
    };
    // sections currently crossing the middle band of the viewport
    const live = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? live.add(e.target as HTMLElement) : live.delete(e.target as HTMLElement)));
        const hit = sections.find((s) => live.has(s));
        setCurrent(hit ? { n: sections.indexOf(hit) + 1, label: labelOf(hit) } : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  if (!current) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 [@media(min-width:1500px)]:block">
      <div className="flex items-center gap-3 [writing-mode:vertical-rl] rotate-180">
        <span className="font-mono text-xs font-bold tabular-nums text-[var(--color-brand)]">
          § {String(current.n).padStart(2, "0")}
        </span>
        <span className="h-10 w-px bg-[var(--color-border)]/40" />
        <AnimatePresence mode="wait">
          <motion.span
            key={current.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="eyebrow text-[var(--color-fg-muted)]"
          >
            {current.label}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
