"use client";

import { motion, type Variants } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { DURATION, EASE } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  /**
   * Above the fold: reveal with a CSS animation that starts on first paint
   * instead of waiting for hydration + an IntersectionObserver. Use for page
   * heroes / anything that can be the LCP element.
   */
  priority?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 20,
  x = 0,
  scale = false,
  className,
  as = "div",
  priority = false,
}: RevealProps) {
  if (priority) {
    const Tag = as;
    return (
      <Tag
        className={`nv-fade-in ${className ?? ""}`}
        style={{ "--nv-delay": `${delay}s` } as CSSProperties}
      >
        {children}
      </Tag>
    );
  }

  const Component = motion[as];
  // MotionConfig reducedMotion="user" (layout) drops the transform and keeps the
  // fade — HIG: replace movement with fades rather than removing feedback.
  const variants: Variants = {
    hidden: { opacity: 0, y, x, scale: scale ? 0.96 : 1 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: DURATION.base, ease: EASE, delay },
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
