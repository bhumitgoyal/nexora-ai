"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useAmbientMotion } from "@/hooks/useMotionPreference";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** base drift in % of one copy per second (negative = right-to-left) */
  baseVelocity?: number;
  className?: string;
};

// Award-site marquee: drifts on its own, then accelerates, reverses with scroll
// direction and leans (skew) with scroll speed — the Lando Norris / Godly
// pattern, in ink. Two copies: the second is aria-hidden so the list reads once.
// Reduced motion / pause switch: a still row, no rAF work at all.
export function VelocityMarquee({ children, baseVelocity = -2, className }: Props) {
  const ambient = useAmbientMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-2000, 0, 2000], [8, 0, -8], { clamp: true });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (!ambient) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    moveBy += direction.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn(
        "relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <motion.div style={{ x: ambient ? x : "0%", skewX: ambient ? skewX : 0 }} className="flex shrink-0 items-center gap-8 pr-8 will-change-transform">
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
