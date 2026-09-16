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

    let rafId = 0;
    let mouse = { x: -9999, y: -9999 };
    let decayFactor = 0; // 0 = no orbit, 1 = full orbit (decays after mouseleave)

    /* Build dot grid */
    interface Dot { ox: number; oy: number; phase: number }
    let dots: Dot[] = [];

    const buildGrid = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ ox: c * spacing, oy: r * spacing, phase: Math.random() * Math.PI * 2 });
        }
      }
    };

    /* Smoothstep easing */
    const smoothstep = (edge0: number, edge1: number, x: number) => {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    };

    let time = 0;
    let isLooping = false;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const dot of dots) {
        const dx = dot.ox - mouse.x;
        const dy = dot.oy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = enableOrbit
          ? smoothstep(impactRadius, 0, dist) * decayFactor
          : 0;

        let px = dot.ox;
        let py = dot.oy;
        let size = dotSize;
        let opacity = 0.3;

        if (influence > 0) {
          /* 3D orbit projection */
          const angle = time * orbitSpeed + dot.phase;
          const orbitR = spacing * 0.32 * influence;
          const tilt = Math.PI / 6; // 30° tilt
          const x3d = Math.cos(angle) * orbitR;
          const y3d = Math.sin(angle) * orbitR;
          const z3d = Math.sin(angle) * orbitR * Math.sin(tilt);
          const depth = (z3d + orbitR) / (2 * orbitR); // 0→1
          px = dot.ox + x3d;
          py = dot.oy + y3d * Math.cos(tilt);
          size = dotSize * (1 + (hoverScale - 1) * influence * (0.5 + depth * 0.5));
          opacity = 0.3 + 0.7 * influence * (0.4 + depth * 0.6);
        }

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${opacity})`);
        ctx.fill();
      }

      time += 0.016;

      /* Decay when mouse is away */
      if (decayFactor > 0 && mouse.x === -9999) {
        decayFactor = Math.max(0, decayFactor - 0.025);
      }

      // If mouse is away and decay has completed, stop RAF loop to save 100% idle CPU
      if (mouse.x === -9999 && decayFactor <= 0) {
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

    /* Pause when tab hidden */
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(rafId);
        isLooping = false;
      } else if (mouse.x !== -9999 || decayFactor > 0) {
        startLoop();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      decayFactor = 1;
      startLoop();
    };

    const onMouseLeave = () => {
      mouse = { x: -9999, y: -9999 };
      // decayFactor drains in draw loop and will stop loop when done
    };

    const ro = new ResizeObserver(() => {
      buildGrid();
      draw();
    });

    buildGrid();
    draw(); // Draw static initial resting grid once
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
