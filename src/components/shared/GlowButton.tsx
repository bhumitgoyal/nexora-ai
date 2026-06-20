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
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200";

  const variants = {
    primary: cn(
      "border-2 border-[var(--color-brand)] bg-[var(--color-brand)] text-white",
      "hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]",
    ),
    secondary: cn(
      "border-2 border-[var(--color-border)] bg-transparent text-[var(--color-fg)]",
      "hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
    ),
    ghost: cn(
      "border-2 border-transparent text-[var(--color-fg-muted)]",
      "hover:text-[var(--color-fg)] hover:border-[var(--color-border)]",
    ),
  };

  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...linkProps}
    >
      <span className="relative z-10">{children}</span>
      {withArrow ? (
        <ArrowRight className="relative z-10 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}
