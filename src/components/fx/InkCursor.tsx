"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useAmbientMotion } from "@/hooks/useMotionPreference";

// A printer's registration mark that trails the pointer. It never replaces the
// system cursor (that stays for precision + accessibility) — it's an
// annotation layer: grows over anything interactive and reads a label from the
// nearest [data-cursor] ("Open", "Drag", "Play"). Mouse only, and gone under
// reduced motion or the pause switch.
export function InkCursor() {
  const ambient = useAmbientMotion();
  const [fine, setFine] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!fine || !ambient) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const labelled = t?.closest<HTMLElement>("[data-cursor]");
      setLabel(labelled?.dataset.cursor ?? null);
      setActive(!!t?.closest("a, button, [role=button], [role=tab], input, select, textarea, [data-cursor]"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [fine, ambient, x, y]);

  if (!fine || !ambient) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[150] mix-blend-multiply"
    >
      <motion.svg
        viewBox="0 0 40 40"
        className="-translate-x-1/2 -translate-y-1/2 text-[var(--color-brand)]"
        animate={{ width: active ? 44 : 22, height: active ? 44 : 22, opacity: visible ? 1 : 0, rotate: active ? 45 : 0 }}
        transition={{ type: "spring", duration: 0.35, bounce: 0 }}
      >
        <circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path d="M20 2v36M2 20h36" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </motion.svg>
      <AnimatePresence>
        {label && visible ? (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="eyebrow absolute left-0 top-0 -translate-y-1/2 whitespace-nowrap bg-[var(--color-fg)] px-2 py-1 font-bold text-[var(--color-bg)] mix-blend-normal"
          >
            {label}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
