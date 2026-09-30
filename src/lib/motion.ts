import { useEffect, useLayoutEffect } from "react";

// GSAP pins reparent DOM nodes (pin-spacer). Their cleanup must run BEFORE
// React removes nodes on unmount, which only layout effects guarantee -
// useEffect cleanups run after DOM removal and crash client-side navigation.
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Single source of truth for motion direction - one ease, one duration scale.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
export const EASE_GSAP = "power3.inOut";
export const EASE_OUT_GSAP = "power3.out";

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1.1,
} as const;

// Springs (Apple HIG / "Designing Fluid Interfaces"): start critically damped —
// no overshoot. Bounce only when a gesture handed the element momentum.
export const SPRING = {
  settle: { type: "spring", duration: 0.5, bounce: 0 },
  fling: { type: "spring", duration: 0.6, bounce: 0.15 },
} as const;

export const STAGGER = 0.06;

// Must match the `pin` custom variant in globals.css.
export const PIN_QUERY = "(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";
export const NO_PIN_QUERY = "(max-width: 1023px), (max-height: 699px), (prefers-reduced-motion: reduce)";
