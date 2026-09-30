"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { EASE, DURATION } from "@/lib/motion";

// reducedMotion="user": every motion/react transform animation collapses to an
// instant change (opacity still fades) when the OS asks for reduced motion —
// the CSS kill-switch in globals.css can't reach JS-driven animations.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE, duration: DURATION.base }}>
      {children}
    </MotionConfig>
  );
}
