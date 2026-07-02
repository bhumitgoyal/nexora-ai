// Single source of truth for motion direction — one ease, one duration scale.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
export const EASE_GSAP = "power3.inOut";
export const EASE_OUT_GSAP = "power3.out";

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1.1,
} as const;
