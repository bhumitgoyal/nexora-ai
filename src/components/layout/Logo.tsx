import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-base font-semibold tracking-tight",
        className,
      )}
    >
      <span className="relative inline-flex size-8 items-center justify-center border-2 border-[var(--color-brand)] bg-[var(--color-brand)] text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-4"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20V4l16 16V4" />
        </svg>
      </span>
      <span className="text-[var(--color-fg)]">
        Nexora <span className="text-[var(--color-brand)]">AI</span>
      </span>
    </Link>
  );
}
