"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ROWS = [
  {
    text: "Built to compound revenue · Built to cut manual ops · Built to scale without headcount ·",
    direction: -1 as const,
  },
  {
    text: "Built to run while you sleep · Built to pay for itself · Built to last ·",
    direction: 1 as const,
  },
];

function ScrollRow({ text, direction }: { text: string; direction: 1 | -1 }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === -1 ? ["4%", "-4%"] : ["-4%", "4%"]
  );

  const repeated = `${text}   ${text}`;

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x }} className="flex whitespace-nowrap will-change-transform">
        <span className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-tight text-[var(--color-fg)]">
          {repeated.split("Built to").map((part, i) =>
            i === 0 ? null : (
              <span key={i}>
                <span className="text-[var(--color-brand)]">Built to</span>
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
  return (
    <section className="border-t border-[var(--color-border)] py-16 overflow-hidden flex flex-col gap-3">
      {ROWS.map((row, i) => (
        <ScrollRow key={i} text={row.text} direction={row.direction} />
      ))}
    </section>
  );
}
