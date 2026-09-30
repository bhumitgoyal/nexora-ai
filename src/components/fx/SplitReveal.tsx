"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Line-by-line masked heading reveal (GSAP SplitText — free since 3.13).
// SplitText re-splits on resize and font load (autoSplit), labels the parent
// for screen readers and hides the line wrappers, and `revert()` restores the
// exact original DOM on unmount. Reduced motion: never split, just show.
export function SplitReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // split the heading itself — SplitText won't descend through a block child
    const el = (ref.current?.firstElementChild as HTMLElement | null) ?? ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // already on screen at mount (e.g. deep link) → show immediately, no flash
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 105,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          delay,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }),
    });
    return () => split.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
