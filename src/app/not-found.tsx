import Link from "next/link";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { GlowButton } from "@/components/shared/GlowButton";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-24">
      <GridBackground />
      <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
      <GradientOrb tone="accent" size={420} className="right-[-100px] bottom-[-100px]" />

      <div className="container-x relative z-10 flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-sm tracking-[0.22em] text-[var(--color-accent)]">
          404 · ROUTE_NOT_FOUND
        </span>
        <h1 className="text-balance font-display text-5xl font-semibold leading-none tracking-tight md:text-7xl">
          The agent <span className="text-gradient">couldn't route</span> this request.
        </h1>
        <p className="max-w-xl text-pretty text-[var(--color-fg-muted)] md:text-lg">
          The page you're looking for doesn't exist, has moved, or was never published.
          Head home or reach out — we'll find what you need.
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <GlowButton href="/" size="lg" withArrow>
            Back to home
          </GlowButton>
          <Link
            href="/contact"
            className="text-sm font-medium text-[var(--color-fg-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
          >
            or contact us →
          </Link>
        </div>
      </div>
    </section>
  );
}
