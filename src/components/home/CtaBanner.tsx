import Link from "next/link";
import { GlowButton } from "@/components/shared/GlowButton";
import { site } from "@/content/site";
import { Reveal } from "@/components/shared/Reveal";

export function CtaBanner() {
  return (
    <section className="section-y relative border-t border-[var(--color-border)]">
      <div className="container-x">
        <Reveal>
          <div className="relative border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] px-6 py-14 text-center shadow-[var(--shadow-hard-lg)] sm:px-8 md:px-16 md:py-24">
            {/* corner accents */}
            <span className="absolute left-0 top-0 block h-8 w-8 border-b-2 border-r-2 border-[var(--color-brand)] translate-x-[-2px] translate-y-[-2px]" />
            <span className="absolute right-0 top-0 block h-8 w-8 border-b-2 border-l-2 border-[var(--color-brand)] translate-x-[2px] translate-y-[-2px]" />
            <span className="absolute bottom-0 left-0 block h-8 w-8 border-r-2 border-t-2 border-[var(--color-brand)] translate-x-[-2px] translate-y-[2px]" />
            <span className="absolute bottom-0 right-0 block h-8 w-8 border-l-2 border-t-2 border-[var(--color-brand)] translate-x-[2px] translate-y-[2px]" />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
              <span className="eyebrow inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[var(--color-fg-muted)]">
                <span aria-hidden className="size-1.5 bg-[var(--color-brand)]" />
                Every week you wait costs another 31.5 hours
              </span>
              <h2 className="text-balance font-display text-title-1 font-semibold">
                Ready to run on{" "}
                <span className="text-[var(--color-brand)]">AI infrastructure</span>?
              </h2>
              <p className="max-w-xl text-pretty text-lead text-[var(--color-fg-muted)]">
                Book a 30-minute call. We'll map your workflows, show you which
                manual work disappears first, and tell you honestly whether we're the right fit.
                No slides, no sales theatre.
              </p>
              <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
                <GlowButton href="/contact" size="lg" withArrow>
                  {site.cta.primary}
                </GlowButton>
                <Link href="/booklet" className="inline-flex min-h-11 items-center text-callout text-[var(--color-fg-muted)] underline underline-offset-4 transition-colors hover:text-[var(--color-brand)]">
                  Read the infrastructure booklet
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
