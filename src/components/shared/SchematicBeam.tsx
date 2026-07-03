"use client";

import { useEffect, useState, type RefObject } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type SchematicBeamProps = {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  delay?: number;
  duration?: number;
};

// Blueprint-style connector: hard 90° elbow route between two nodes with a
// red pulse travelling the line. Ref-measured so it survives any responsive
// layout (horizontal on desktop, vertical on mobile).
export function SchematicBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  delay = 0,
  duration = 2.4,
}: SchematicBeamProps) {
  const prefersReduced = useReducedMotion();
  const [pathD, setPathD] = useState("");
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      if (!container || !from || !to) return;

      const c = container.getBoundingClientRect();
      const a = from.getBoundingClientRect();
      const b = to.getBoundingClientRect();
      setSize({ width: c.width, height: c.height });

      const horizontalGap = Math.max(b.left - a.right, a.left - b.right);
      const verticalGap = Math.max(b.top - a.bottom, a.top - b.bottom);

      if (horizontalGap >= verticalGap) {
        // side-to-side elbow
        const leftToRight = a.right <= b.left;
        const startX = (leftToRight ? a.right : a.left) - c.left;
        const endX = (leftToRight ? b.left : b.right) - c.left;
        const startY = a.top + a.height / 2 - c.top;
        const endY = b.top + b.height / 2 - c.top;
        const midX = startX + (endX - startX) / 2;
        setPathD(`M ${startX},${startY} L ${midX},${startY} L ${midX},${endY} L ${endX},${endY}`);
      } else {
        // top-to-bottom elbow
        const topToBottom = a.bottom <= b.top;
        const startY = (topToBottom ? a.bottom : a.top) - c.top;
        const endY = (topToBottom ? b.top : b.bottom) - c.top;
        const startX = a.left + a.width / 2 - c.left;
        const endX = b.left + b.width / 2 - c.left;
        const midY = startY + (endY - startY) / 2;
        setPathD(`M ${startX},${startY} L ${startX},${midY} L ${endX},${midY} L ${endX},${endY}`);
      }
    };

    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef]);

  return (
    <svg
      fill="none"
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      className={cn("pointer-events-none absolute left-0 top-0", className)}
      aria-hidden
    >
      {/* base route — dashed ink */}
      <path
        d={pathD}
        stroke="var(--color-border)"
        strokeWidth={1.5}
        strokeOpacity={0.35}
        strokeDasharray="4 4"
      />
      {/* travelling pulse */}
      {!prefersReduced && pathD && (
        <motion.path
          d={pathD}
          pathLength={100}
          stroke="var(--color-brand)"
          strokeWidth={2.5}
          strokeDasharray="10 90"
          initial={{ strokeDashoffset: 10 }}
          animate={{ strokeDashoffset: [10, -100] }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
        />
      )}
    </svg>
  );
}
