"use client";

import Link from "next/link";
import { Printer, ArrowLeft, Sparkles } from "lucide-react";
import { site } from "@/content/site";

export function PrintBar() {
  const onPrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="no-print booklet-toolbar">
      <Link
        href="/booklet"
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
      >
        <ArrowLeft className="size-3.5" />
        Back
      </Link>

      <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] sm:inline-flex">
        <Sparkles className="size-3 text-[var(--color-accent)]" />
        Services booklet · v1.0
      </div>

      <button
        type="button"
        onClick={onPrint}
        className="group inline-flex items-center gap-2 bg-[var(--color-brand)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-brand-strong)]"
      >
        <Printer className="size-3.5" />
        Save as PDF
      </button>
    </div>
  );
}
