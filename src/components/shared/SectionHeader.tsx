import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { MaskReveal } from "./MaskReveal";
import { SplitReveal } from "@/components/fx/SplitReveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
  /** id on the heading, for aria-labelledby on the section */
  id?: string;
  /** page hero: reveal with CSS from first paint (it may be the LCP element) */
  priority?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as: Heading = "h2",
  id,
  priority = Heading === "h1",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal priority={priority}>
          <span className="eyebrow inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1.5 text-[var(--color-fg-muted)]">
            <span aria-hidden className="size-1.5 bg-[var(--color-brand)]" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      {priority ? (
        <MaskReveal delay={0.08} priority>
          <Heading id={id} className={cn("text-balance font-semibold", Heading === "h1" ? "text-title-1" : "text-title-2")}>
            {title}
          </Heading>
        </MaskReveal>
      ) : (
        // below the fold: SplitText line masks, staggered per line
        <SplitReveal delay={0.05}>
          <Heading id={id} className={cn("text-balance font-semibold", Heading === "h1" ? "text-title-1" : "text-title-2")}>
            {title}
          </Heading>
        </SplitReveal>
      )}
      {subtitle ? (
        <Reveal delay={0.1} priority={priority}>
          <p className="text-pretty text-lead text-[var(--color-fg-muted)]">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
