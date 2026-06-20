import { cn } from "@/lib/utils";

type Tone = "brand" | "accent" | "fuchsia";

type DecorProps = {
  /** Toggle the subtle grid background. */
  grid?: boolean;
  /** Add radial orbs in the bleed area. */
  orbs?: Array<{
    tone: Tone;
    size: number;
    className: string;
    animated?: boolean;
  }>;
  className?: string;
};

export function PosterDecor({ grid = true, orbs = [], className }: DecorProps) {
  return (
    <div className={cn("poster-bleed", className)}>
      {grid ? <div className="poster-grid" /> : null}
      {orbs.map((o, i) => (
        <div
          key={i}
          aria-hidden
          style={{ width: o.size, height: o.size }}
          className={cn(
            "poster-orb",
            `poster-orb-${o.tone}`,
            o.animated && (i % 2 === 0 ? "orb-float" : "orb-float-slow"),
            o.className,
          )}
        />
      ))}
    </div>
  );
}
