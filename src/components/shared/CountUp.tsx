"use client";

import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

type CountUpProps = {
  value: number;
  /** kept for API compatibility — NumberFlow owns the timing now */
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

// The server HTML carries the real number (crawlers and no-JS readers never see
// "0"). Only if the figure starts offscreen does it drop to zero, invisibly, and
// roll up when scrolled into view. NumberFlow keeps digits tabular, exposes the
// final value to screen readers, and honours prefers-reduced-motion itself.
export function CountUp({ value, prefix = "", suffix = "", decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);
  const armed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || armed.current) return;
    armed.current = true;
    if (el.getBoundingClientRect().top > window.innerHeight) setDisplay(0);
  }, []);

  useEffect(() => {
    if (inView) setDisplay(value);
  }, [inView, value]);

  return (
    <span ref={ref}>
      <NumberFlow
        value={display}
        prefix={prefix}
        suffix={suffix}
        locales="en-IN"
        format={{ minimumFractionDigits: decimals, maximumFractionDigits: decimals }}
        transformTiming={{ duration: 900, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
    </span>
  );
}
