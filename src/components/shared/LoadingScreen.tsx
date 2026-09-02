"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const prefersReduced = useReducedMotion();
  const startRef = useRef<number>(0);

  useEffect(() => {
    // skip on subsequent navigations only show on hard load
    if (sessionStorage.getItem("nuvero_loaded") || prefersReduced) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("nuvero_loaded", "1");
    startRef.current = performance.now();

    // Counter eases toward 100 over ~1.8s — never feels stalled, never instant.
    const MIN_DURATION = 1800;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startRef.current) / MIN_DURATION);
      // ease-out curve so it sprints early and lands softly
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        setTimeout(() => setVisible(false), 950);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="loader" className="fixed inset-0 z-[200]" exit={{ opacity: 0 }}>
          {/* trailing brand panel — wipes up slightly behind the main panel */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[var(--color-brand)]"
            initial={{ y: "0%" }}
            animate={exiting ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.08 }}
          />
          {/* main panel */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-bg)]"
            initial={{ y: "0%" }}
            animate={exiting ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-40" />

            {/* logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative mb-8 flex size-16 items-center justify-center"
            >
              <Image src="/brand/mark-red.png" alt="" width={448} height={440} priority className="size-14" />
              <motion.span
                className="absolute inset-0 border-2 border-[var(--color-brand)]"
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{ opacity: [0, 0.5, 0], scale: [1.3, 1.05, 1.3] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* wordmark letters stagger in */}
            <div className="flex items-baseline gap-2 font-display text-2xl font-semibold tracking-tight">
              {"Nuvero".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: EASE }}
                  className="text-[var(--color-fg)]"
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block w-2" />
              {"AI".split("").map((char, i) => (
                <motion.span
                  key={"ai" + i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.56 + i * 0.08, duration: 0.4, ease: EASE }}
                  className="text-[var(--color-brand)]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mt-3 max-w-[85vw] px-6 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] md:text-xs"
            >
              The AI infrastructure your business runs on
            </motion.p>

            {/* progress bar tied to the counter */}
            <div className="mt-10 h-[2px] w-48 overflow-hidden bg-[var(--color-border)]">
              <div
                className="h-full bg-[var(--color-brand)]"
                style={{ width: `${progress}%`, transition: "width 80ms linear" }}
              />
            </div>

            {/* big counter, bottom-right — the award-site signature */}
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
