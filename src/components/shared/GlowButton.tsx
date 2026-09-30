import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  withArrow?: boolean;
  external?: boolean;
};

// The site's one button. Primary vs secondary differ by style, never size (HIG
// Buttons). Every size clears the 44px hit target; `press` drops the button
// into its own hard shadow on tap — the tactile press state HIG asks for.
export function GlowButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  external = false,
}: GlowButtonProps) {
  const sizes = {
    sm: "min-h-11 px-4 text-sm",
    md: "min-h-12 px-5 text-[15px]",
    lg: "min-h-12 px-7 py-3.5 text-base",
  };

  const variants = {
    primary:
      "border-2 border-[var(--color-brand)] bg-[var(--color-brand)] text-white shadow-[var(--shadow-hard-sm)] hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]",
    secondary:
      "border-2 border-[var(--color-border)] bg-transparent text-[var(--color-fg)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
    ghost:
      "border-2 border-transparent text-[var(--color-fg-muted)] hover:border-[var(--color-border)] hover:text-[var(--color-fg)]",
  };

  const linkProps = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      className={cn(
        "press group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-colors duration-200",
        sizes[size],
        variants[variant],
        className,
      )}
      {...linkProps}
    >
      <span className="relative z-10">{children}</span>
      {withArrow ? (
        <ArrowRight aria-hidden className="relative z-10 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}
