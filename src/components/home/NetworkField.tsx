"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

// Cursor-reactive node network — reads as "infrastructure", not confetti.
// Canvas 2D, DPR-capped, paused offscreen, disabled for reduced motion.
export function NetworkField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const NODE_COUNT = isMobile ? 34 : 70;
    const LINK_DIST = isMobile ? 110 : 150;
    const MOUSE_DIST = 200;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999 };

    const brand = "193, 18, 31"; // --color-brand
    const ink = "0, 48, 73"; // deep ink for faint links

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // gentle drift toward cursor
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < MOUSE_DIST && d > 0.001) {
          n.x += (dx / d) * 0.18;
          n.y += (dy / d) * 0.18;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            const near =
              Math.hypot(mouse.x - (a.x + b.x) / 2, mouse.y - (a.y + b.y) / 2) < MOUSE_DIST;
            const alpha = (1 - d / LINK_DIST) * (near ? 0.28 : 0.1);
            ctx.strokeStyle = `rgba(${near ? brand : ink}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const near = Math.hypot(mouse.x - n.x, mouse.y - n.y) < MOUSE_DIST;
        ctx.fillStyle = near ? `rgba(${brand}, 0.55)` : `rgba(${ink}, 0.28)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? 2.2 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    seed();

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      seed();
    };

    window.addEventListener("resize", onResize);
    canvas.parentElement?.addEventListener("mousemove", onMove, { passive: true });
    canvas.parentElement?.addEventListener("mouseleave", onLeave);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      canvas.parentElement?.removeEventListener("mousemove", onMove);
      canvas.parentElement?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    />
  );
}
