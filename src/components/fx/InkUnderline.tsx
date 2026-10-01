"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

gsap.registerPlugin(DrawSVGPlugin);

// A hand-inked stroke that draws itself under a word, once (GSAP DrawSVG).
// Decorative: aria-hidden, drawn instantly under reduced motion, and waits for
// the first-visit preloader to lift.
export function InkUnderline({ delay = 0.9 }: { delay?: number }) {
  const ref = useRef<SVGPathElement>(null);

  useIsomorphicLayoutEffect(() => {
    const path = ref.current;
    if (!path) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const firstVisit = document.documentElement.classList.contains("nv-first-visit");
    const tween = gsap.fromTo(
      path,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.8, ease: "power2.inOut", delay: delay + (firstVisit ? 1.15 : 0) },
    );
    return () => {
      tween.kill();
    };
  }, [delay]);

  return (
    <svg
      aria-hidden
      viewBox="0 0 400 18"
      preserveAspectRatio="none"
      className="pointer-events-none absolute bottom-[0.02em] left-0 h-[0.16em] w-full overflow-visible"
    >
      <path
        ref={ref}
        d="M3 12 C 60 5, 120 15, 190 9 S 320 4, 397 10"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="6"
        strokeLinecap="square"
      />
    </svg>
  );
}
