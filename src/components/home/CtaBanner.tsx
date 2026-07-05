import { GlowButton } from "@/components/shared/GlowButton";
import { Reveal } from "@/components/shared/Reveal";

export function CtaBanner() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="border-beam relative border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] px-8 py-16 text-center md:px-16 md:py-24">
            {/* corner accents */}
            <span className="absolute left-0 top-0 block h-8 w-8 border-b-2 border-r-2 border-[var(--color-brand)] translate-x-[-2px] translate-y-[-2px]" />
            <span className="absolute right-0 top-0 block h-8 w-8 border-b-2 border-l-2 border-[var(--color-brand)] translate-x-[2px] translate-y-[-2px]" />
            <span className="absolute bottom-0 left-0 block h-8 w-8 border-r-2 border-t-2 border-[var(--color-brand)] translate-x-[-2px] translate-y-[2px]" />
            <span className="absolute bottom-0 right-0 block h-8 w-8 border-l-2 border-t-2 border-[var(--color-brand)] translate-x-[2px] translate-y-[2px]" />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                Every week you wait costs another 31.5 hours
              </span>
              <h2 className="text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Ready to run on{" "}
                <span className="text-[var(--color-brand)]">AI infrastructure</span>?
              </h2>
              <p className="max-w-xl text-pretty text-[var(--color-fg-muted)] md:text-lg">
                Book a 30-minute infrastructure audit. We'll map your workflows, show you which
                manual work disappears first, and tell you honestly whether we're the right fit.
                No slides, no sales theatre.
              </p>
              <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
                <GlowButton href="/contact" size="lg" withArrow>
                  Book a free 30-min call
                </GlowButton>
                <a href="/booklet" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors underline underline-offset-4">
                  View the systems booklet
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
