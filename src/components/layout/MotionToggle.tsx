"use client";

import { Pause, Play } from "lucide-react";
import { setMotionPaused, useMotionPaused } from "@/hooks/useMotionPreference";

// WCAG 2.2.2 / HIG "let people stop motion": one switch that freezes every
// marquee, ticker and live feed on the site, remembered across visits.
export function MotionToggle() {
  const paused = useMotionPaused();
  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={() => setMotionPaused(!paused)}
      className="inline-flex min-h-11 items-center gap-2 border border-[var(--color-border)] px-3 text-callout text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
    >
      {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
      {paused ? "Resume motion" : "Pause motion"}
    </button>
  );
}
