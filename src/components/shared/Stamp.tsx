"use client";

import { motion } from "motion/react";
import { SPRING } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StampProps = {
  children: React.ReactNode;
  /** Mount = the stamp lands. Remount (new key) to stamp again. */
  className?: string;
  size?: "sm" | "lg";
  rotate?: number;
};

// The brand's one "rubber-stamp moment" — the same component everywhere a job
// gets marked done (hero ticket, contact confirmation), so it means one thing.
// Lands critically damped: an impact, not a bounce (HIG springs guidance).
export function Stamp({ children, className, size = "sm", rotate = -4 }: StampProps) {
  return (
    <motion.span
      initial={{ scale: 1.9, opacity: 0, rotate: rotate + 10 }}
      animate={{ scale: 1, opacity: 1, rotate }}
      exit={{ opacity: 0 }}
      transition={SPRING.settle}
      className={cn(
        "inline-flex items-center justify-center border-2 border-[var(--color-brand)] font-mono font-bold uppercase text-[var(--color-brand)]",
        size === "sm" ? "px-2 py-1 text-[11px] tracking-[0.16em]" : "border-[3px] px-4 py-2 text-base tracking-[0.2em]",
        className,
      )}
    >
      {children}
    </motion.span>
  );
}
