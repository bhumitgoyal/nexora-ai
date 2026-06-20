"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({
  children,
  delay = 0,
  y = 20,
  x = 0,
  scale = false,
  className,
  as = "div",
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : y,
      x: prefersReduced ? 0 : x,
      scale: scale && !prefersReduced ? 0.96 : 1,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
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
