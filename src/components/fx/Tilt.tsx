"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useAmbientMotion } from "@/hooks/useMotionPreference";

// Card leans toward the pointer (±5°) like a sheet lifted off the press bed.
// Transform-only, springs critically damped, mouse only.
export function Tilt({ children, className, max = 5 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const ambient = useAmbientMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 250, damping: 30 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 250, damping: 30 });

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        if (!ambient || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
