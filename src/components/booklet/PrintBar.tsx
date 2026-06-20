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
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
      >
        <ArrowLeft className="size-3.5" />
        Back to {site.shortName}
      </Link>

      <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] sm:inline-flex">
        <Sparkles className="size-3 text-[var(--color-accent)]" />
        Services booklet · v1.0
      </div>

      <button
        type="button"
        onClick={onPrint}
        className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--color-brand),var(--color-accent))] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_28px_-12px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_38px_-10px_rgba(34,211,238,0.7)]"
      >
        <Printer className="size-3.5" />
        Save as PDF
      </button>
    </div>
  );
}
