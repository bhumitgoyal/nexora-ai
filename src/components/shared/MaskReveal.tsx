"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { EASE } from "@/lib/motion";

type MaskRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Above the fold: CSS-driven, starts on first paint (see Reveal). */
  priority?: boolean;
};

// Award-site line mask: content slides up from behind an invisible clip edge.
// The observer lives on the outer (unclipped) wrapper — the inner starts fully
// clipped, so observing it directly would never fire. A timed fail-safe forces
// the reveal if the element is on screen but the observer never triggered:
// a missing heading is worse than a skipped animation.
export function MaskReveal({ children, delay = 0, className, priority = false }: MaskRevealProps) {
  if (priority) {
    return (
      <span className={`block overflow-hidden ${className ?? ""}`}>
        <span className="nv-mask-in block" style={{ "--nv-delay": `${delay}s` } as CSSProperties}>
          {children}
        </span>
      </span>
    );
  }
  return <ObservedMaskReveal delay={delay} className={className}>{children}</ObservedMaskReveal>;
}

function ObservedMaskReveal({ children, delay = 0, className }: Omit<MaskRevealProps, "priority">) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) setForced(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  const inner: Variants = prefersReduced
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.6, delay } },
      }
    : {
        hidden: { y: "110%" },
        show: { y: "0%", transition: { duration: 0.9, ease: EASE, delay } },
      };

  return (
    <motion.span
      ref={ref}
      className={`block overflow-hidden ${className ?? ""}`}
      initial="hidden"
      animate={forced ? "show" : undefined}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.span variants={inner} className="block will-change-transform">
        {children}
      </motion.span>
    </motion.span>
  );
}
