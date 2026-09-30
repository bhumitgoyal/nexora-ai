"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useIsomorphicLayoutEffect } from "@/lib/motion";
import { useAmbientMotion } from "@/hooks/useMotionPreference";

gsap.registerPlugin(ScrambleTextPlugin);

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/";

// Telex-style "print": the text resolves out of mono noise when it mounts.
// Server HTML and screen readers get the final text; only sighted users with
// motion allowed see the scramble.
export function Scramble({ text, className, duration = 0.7 }: { text: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ambient = useAmbientMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || !ambient) return;
    const tween = gsap.fromTo(
      el,
      { scrambleText: { text: " ", chars: CHARS } },
      { duration, ease: "none", scrambleText: { text, chars: CHARS, speed: 0.7, revealDelay: 0.15 } },
    );
    return () => {
      tween.kill();
      el.textContent = text;
    };
  }, [text, ambient, duration]);

  return (
    <span ref={ref} aria-label={text} className={className}>
      {text}
    </span>
  );
}
