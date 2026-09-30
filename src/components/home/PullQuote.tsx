import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Reveal } from "@/components/shared/Reveal";

// One voice, set large, right after the evidence — instead of an auto-scrolling
// wall of quotes. The full set lives on /reviews.
export function PullQuote() {
  const t = testimonials[0];
  return (
    <section aria-label="Client testimonial" className="border-t border-[var(--color-border)] bg-[var(--color-bg-elev)]">
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <figure className="mx-auto flex max-w-4xl flex-col gap-8">
            <blockquote className="text-balance font-display text-title-2 font-semibold">
              <span aria-hidden className="text-[var(--color-brand)]">“</span>
              {t.quote}
              <span aria-hidden className="text-[var(--color-brand)]">”</span>
            </blockquote>
            <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-[var(--color-border)] pt-5">
              <span className="flex items-center gap-3">
                <span aria-hidden className="inline-flex size-11 items-center justify-center bg-[var(--color-brand)] font-display text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-callout text-[var(--color-fg-muted)]">
                    {t.role} · {t.company}
                  </span>
                </span>
              </span>
              <Link
                href="/reviews"
                className="eyebrow inline-flex min-h-11 items-center gap-1.5 font-bold text-[var(--color-fg)] transition-colors hover:text-[var(--color-brand)]"
              >
                Every review <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
