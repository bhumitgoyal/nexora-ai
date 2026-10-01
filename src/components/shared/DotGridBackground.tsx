"use client";

import { useEffect, useRef } from "react";

interface Props {
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  orbitSpeed?: number;
  impactRadius?: number;
  hoverScale?: number;
  enableOrbit?: boolean;
}

export function DotGridBackground({
  dotColor = "rgba(0,48,73,0.55)",
  dotSize = 1.5,
  spacing = 28,
  orbitSpeed = 0.8,
  impactRadius = 100,
  hoverScale = 2.2,
  enableOrbit = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Only real mice get the orbit effect; touch, reduced motion and the site's
    // pause switch all get the static grid (drawn once, zero ongoing cost).
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const interactive = () =>
      fine.matches && !reduce.matches && document.documentElement.dataset.motion !== "paused";

    let rafId = 0;
    let mouse = { x: -9999, y: -9999 };
    let decayFactor = 0; // 0 = no orbit, 1 = full orbit (decays after mouseleave)
    const colorPrefix = dotColor.replace(/[\d.]+\)$/, "");
    const rest = document.createElement("canvas");
    const restCtx = rest.getContext("2d");
    let w = 0;
    let h = 0;
    let dpr = 1;
    let cols = 0;
    let rows = 0;
    let phases = new Float32Array(0);

    // The resting grid is painted once into an offscreen canvas; each frame is
    // one drawImage plus only the handful of dots inside the cursor's radius.
    const buildGrid = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = rest.width = w * dpr;
      canvas.height = rest.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / spacing) + 1;
      rows = Math.ceil(h / spacing) + 1;
      phases = new Float32Array(cols * rows).map(() => Math.random() * Math.PI * 2);
      if (!restCtx) return;
      restCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      restCtx.fillStyle = `${colorPrefix}0.3)`;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          restCtx.beginPath();
          restCtx.arc(c * spacing, r * spacing, dotSize, 0, Math.PI * 2);
          restCtx.fill();
        }
      }
    };

    const smoothstep = (edge0: number, edge1: number, x: number) => {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    };

    let time = 0;
    let isLooping = false;

    const draw = () => {
      // Before first layout the canvas has 0 offsetWidth/Height, so the offscreen
      // `rest` canvas is 0x0 and drawImage() throws. The ResizeObserver re-runs
      // draw() once a real size arrives, so just skip until then.
      if (w <= 0 || h <= 0 || rest.width === 0 || rest.height === 0) return;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(rest, 0, 0, w, h);

      if (enableOrbit && decayFactor > 0 && mouse.x > -9999) {
        const c0 = Math.max(0, Math.floor((mouse.x - impactRadius) / spacing));
        const c1 = Math.min(cols - 1, Math.ceil((mouse.x + impactRadius) / spacing));
        const r0 = Math.max(0, Math.floor((mouse.y - impactRadius) / spacing));
        const r1 = Math.min(rows - 1, Math.ceil((mouse.y + impactRadius) / spacing));
        const pad = dotSize + 1;
        for (let r = r0; r <= r1; r++) {
          for (let c = c0; c <= c1; c++) {
            const ox = c * spacing;
            const oy = r * spacing;
            const dx = ox - mouse.x;
            const dy = oy - mouse.y;
            const influence = smoothstep(impactRadius, 0, Math.sqrt(dx * dx + dy * dy)) * decayFactor;
            if (influence <= 0) continue;
            const angle = time * orbitSpeed + phases[r * cols + c];
            const orbitR = spacing * 0.32 * influence;
            const tilt = Math.PI / 6;
            const x3d = Math.cos(angle) * orbitR;
            const y3d = Math.sin(angle) * orbitR;
            const depth = (Math.sin(angle) * Math.sin(tilt) + 1) / 2;
            ctx.clearRect(ox - pad, oy - pad, pad * 2, pad * 2);
            ctx.beginPath();
            ctx.arc(ox + x3d, oy + y3d * Math.cos(tilt), dotSize * (1 + (hoverScale - 1) * influence * (0.5 + depth * 0.5)), 0, Math.PI * 2);
            ctx.fillStyle = `${colorPrefix}${(0.3 + 0.7 * influence * (0.4 + depth * 0.6)).toFixed(2)})`;
            ctx.fill();
          }
        }
      }

      time += 0.016;
      if (decayFactor > 0 && mouse.x === -9999) decayFactor = Math.max(0, decayFactor - 0.025);

      // idle once the cursor has left and the orbit has drained
      if ((mouse.x === -9999 && decayFactor <= 0) || !interactive()) {
        isLooping = false;
        return;
      }
      rafId = requestAnimationFrame(draw);
    };

    const startLoop = () => {
      if (!isLooping) {
        isLooping = true;
        rafId = requestAnimationFrame(draw);
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(rafId);
        isLooping = false;
      } else if (mouse.x !== -9999 || decayFactor > 0) {
        startLoop();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive()) return;
      mouse = { x: e.clientX, y: e.clientY };
      decayFactor = 1;
      startLoop();
    };

    const onMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    const ro = new ResizeObserver(() => {
      buildGrid();
      draw();
    });

    buildGrid();
    draw();
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      isLooping = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
    };
  }, [dotColor, dotSize, spacing, orbitSpeed, impactRadius, hoverScale, enableOrbit]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
