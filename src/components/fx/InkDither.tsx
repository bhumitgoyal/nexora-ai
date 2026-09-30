"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useAmbientMotion } from "@/hooks/useMotionPreference";
import { cn } from "@/lib/utils";

// Paper Shaders' ordered dithering in ink-on-cream: a print-shop halftone that
// drifts slowly. WebGL, lazy-loaded (never in the initial bundle), paused by the
// library when offscreen, frozen (speed 0 = no rAF at all) under reduced motion
// or the site's pause switch. The dot-bg underneath is the no-WebGL fallback.
const Dithering = dynamic(() => import("@paper-design/shaders-react").then((m) => m.Dithering), {
  ssr: false,
});

// Paper Shaders throws if WebGL is missing (locked-down browsers, some
// headless/VM setups). Never let decoration take the page down: feature-detect
// first, and an error boundary catches anything that still slips through.
class ShaderBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function InkDither({ className, opacity = 0.14 }: { className?: string; opacity?: number }) {
  const ambient = useAmbientMotion();
  const [webgl, setWebgl] = useState(false);
  useEffect(() => setWebgl(hasWebGL()), []);
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden dot-bg", className)}>
      {webgl ? (
      <ShaderBoundary>
      <Dithering
        style={{ position: "absolute", inset: 0, opacity }}
        colorBack="#00000000"
        colorFront="#003049"
        shape="warp"
        type="4x4"
        size={2}
        speed={ambient ? 0.25 : 0}
        maxPixelCount={1600 * 900}
      />
      </ShaderBoundary>
      ) : null}
    </div>
  );
}
