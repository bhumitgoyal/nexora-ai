"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    // skip on subsequent navigations — only show on hard load
    if (sessionStorage.getItem("nexora_loaded")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("nexora_loaded", "1");

    const holdTimer = setTimeout(() => setPhase("hold"), 800);
    const outTimer = setTimeout(() => setPhase("out"), 1600);
    const doneTimer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-bg)]"
        >
          {/* grid backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-40" />

          {/* logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8 flex size-16 items-center justify-center border-2 border-[var(--color-brand)] bg-[var(--color-brand)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-7 text-white"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 20V4l16 16V4" />
            </svg>
            {/* animated ring */}
            <motion.span
              className="absolute inset-[-6px] border-2 border-[var(--color-brand)]"
              initial={{ opacity: 0, scale: 1.3 }}
              animate={{ opacity: [0, 0.5, 0], scale: [1.3, 1.05, 1.3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* wordmark — letters stagger in */}
          <div className="flex items-baseline gap-2 font-display text-2xl font-semibold tracking-tight">
            {"Nexora".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[var(--color-fg)]"
              >
                {char}
              </motion.span>
            ))}
            {" ".split("").map((_, i) => (
              <span key="space" className="inline-block w-2" />
            ))}
            {"AI".split("").map((char, i) => (
              <motion.span
                key={"ai" + i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.56 + i * 0.08,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
            className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]"
          >
            Custom AI · Built for your problem
          </motion.p>

          {/* progress bar */}
          <motion.div className="mt-10 h-[2px] w-48 overflow-hidden bg-[var(--color-border)]">
            <motion.div
              className="h-full bg-[var(--color-brand)]"
              initial={{ width: "0%" }}
              animate={{ width: phase === "out" ? "100%" : phase === "hold" ? "70%" : "30%" }}
              transition={{ duration: phase === "out" ? 0.5 : 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
