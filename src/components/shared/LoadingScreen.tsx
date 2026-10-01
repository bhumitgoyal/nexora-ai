"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "@/lib/motion";

// Apple HIG: a launch screen "isn't an opportunity for artistic expression" and
// must never make people wait. So this is first-visit-only, gated before paint
// by the inline script in layout.tsx (html.nv-first-visit — CSS hides it
// otherwise, so it never flashes for returning visitors, reduced motion or
// no-JS), ~1.1s, and any click/key/scroll skips it.
const DURATION_MS = 1100;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("nv-first-visit")) {
      setVisible(false);
      return;
    }
    try {
      sessionStorage.setItem("nuvero_loaded", "1");
    } catch {}
    startRef.current = performance.now();

    let raf = 0;
    let timeout = 0;
    const finish = () => {
      cancelAnimationFrame(raf);
      setProgress(100);
      setExiting(true);
      timeout = window.setTimeout(() => {
        setVisible(false);
        root.classList.remove("nv-first-visit");
      }, 700);
      window.removeEventListener("pointerdown", finish);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("wheel", finish);
    };
    const tick = (now: number) => {
      const t = Math.min(1, (now - startRef.current) / DURATION_MS);
      setProgress(Math.floor((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else finish();
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointerdown", finish, { once: true });
    window.addEventListener("keydown", finish, { once: true });
    window.addEventListener("wheel", finish, { once: true, passive: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      window.removeEventListener("pointerdown", finish);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("wheel", finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="loader" aria-hidden className="nv-loader fixed inset-0 z-[200]" exit={{ opacity: 0 }}>
          <motion.div
            className="absolute inset-0 bg-[var(--color-brand)]"
            animate={exiting ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-bg)]"
            animate={exiting ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" />

            <div className="relative mb-6 flex size-16 items-center justify-center">
              <Image src="/brand/mark-red.png" alt="" width={448} height={440} sizes="56px" className="size-14" />
            </div>

            <div className="flex items-baseline gap-2 font-display text-2xl font-semibold tracking-tight">
              <span className="text-[var(--color-fg)]">Nuvero</span>
              <span className="text-[var(--color-brand)]">AI</span>
            </div>

            <div className="mt-8 h-[2px] w-48 overflow-hidden bg-[var(--color-border)]">
              <div
                className="h-full w-full origin-left bg-[var(--color-brand)]"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            </div>

            <span className="absolute bottom-6 right-8 font-mono text-6xl font-bold tabular-nums tracking-tighter text-[var(--color-fg)] md:bottom-10 md:right-12 md:text-8xl">
              {progress}
              <span className="text-[var(--color-brand)]">%</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
