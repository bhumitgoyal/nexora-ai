"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useReducedMotion,
} from "motion/react";

const ROWS = [
  {
    text: "Built to compound revenue · Built to cut manual ops · Built to scale without headcount ·",
    direction: -1 as const,
    outline: false,
  },
  {
    text: "Built to run while you sleep · Built to pay for itself · Built to last ·",
    direction: 1 as const,
    outline: true,
  },
];

function ScrollRow({
  text,
  direction,
  outline,
  skew,
}: {
  text: string;
  direction: 1 | -1;
  outline: boolean;
  skew: ReturnType<typeof useSpring>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced
      ? ["0%", "0%"]
      : direction === -1
        ? ["8%", "-12%"]
        : ["-12%", "8%"]
  );

  const repeated = `${text}   ${text}`;

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        style={{ x, skewX: prefersReduced ? 0 : skew }}
        className="flex whitespace-nowrap will-change-transform"
      >
        <span
          className={`font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-tight ${
            outline ? "text-stroke-fg" : "text-[var(--color-fg)]"
          }`}
        >
          {repeated.split("Built to").map((part, i) =>
            i === 0 ? null : (
              <span key={i}>
                <span className={outline ? "text-stroke-brand" : "text-[var(--color-brand)]"}>
                  Built to
                </span>
                {part}
              </span>
            )
          )}
        </span>
      </motion.div>
    </div>
  );
}

export function ScrollWordHighlight() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const rawSkew = useTransform(velocity, [-1500, 1500], [-4, 4]);
  const skew = useSpring(rawSkew, { stiffness: 300, damping: 40 });

  return (
    <section className="border-t border-[var(--color-border)] py-16 overflow-hidden flex flex-col gap-3">
      {ROWS.map((row, i) => (
        <ScrollRow key={i} text={row.text} direction={row.direction} outline={row.outline} skew={skew} />
      ))}
    </section>
  );
}
