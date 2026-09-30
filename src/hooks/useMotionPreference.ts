"use client";

import { useSyncExternalStore, type RefObject } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Site-wide "pause motion" switch (WCAG 2.2.2): the footer toggle flips it,
// CSS loops stop via html[data-motion="paused"], and JS loops (tickers,
// counters, feeds) subscribe through useAmbientMotion().

const KEY = "nuvero_motion";
const listeners = new Set<() => void>();

function read(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.motion === "paused";
}

export function setMotionPaused(paused: boolean) {
  const root = document.documentElement;
  if (paused) root.dataset.motion = "paused";
  else delete root.dataset.motion;
  try {
    localStorage.setItem(KEY, paused ? "paused" : "on");
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useMotionPaused() {
  return useSyncExternalStore(subscribe, read, () => false);
}

/** True when decorative, looping motion may run: no reduced-motion, not paused. */
export function useAmbientMotion() {
  const reduced = useReducedMotion();
  const paused = useMotionPaused();
  return !reduced && !paused;
}

/**
 * Ambient motion that also sleeps while offscreen — for intervals and infinite
 * loops (tickers, feeds, pulses). No work is scheduled for things nobody sees.
 */
export function useLiveMotion(ref: RefObject<Element | null>) {
  const ambient = useAmbientMotion();
  const inView = useInView(ref, { margin: "100px" });
  return ambient && inView;
}
