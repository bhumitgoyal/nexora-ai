"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function GridBackground({
  variant = "grid",
  className,
}: {
  variant?: "grid" | "dot";
  className?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const parent = overlay.parentElement;
    if (!parent) return;

    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        overlay.style.backgroundImage = `radial-gradient(480px circle at ${px}px ${py}px, rgba(0,48,73,0.10) 0%, transparent 65%)`;
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(raf);
      overlay.style.backgroundImage = "none";
    };

    parent.addEventListener("mousemove", onMouseMove, { passive: true });
    parent.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          variant === "grid" ? "grid-bg" : "dot-bg",
          className,
        )}
      />
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "none" }}
      />
    </>
  );
}
