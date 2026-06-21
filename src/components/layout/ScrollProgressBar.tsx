"use client";

import { useScroll, useSpring, motion, useReducedMotion } from "motion/react";

export function ScrollProgressBar() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-[var(--color-brand)]"
    />
  );
}
