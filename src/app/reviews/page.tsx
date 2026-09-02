import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Every piece of feedback from the businesses running on Nuvero AI infrastructure, in one place.",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-fg-subtle)] transition-colors hover:text-[var(--color-brand)]"
              >
                <ArrowLeft className="size-3.5" />
                Back home
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="inline-flex w-fit items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                What clients say
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Every <span className="text-[var(--color-brand)]">review</span>, in one place.
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                The unfiltered feedback from teams running their operations on our
                infrastructure, straight from the businesses we&apos;ve shipped with.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="mb-10 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
            {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            Work with us
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
          {reviews.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="flex flex-col gap-4 bg-[var(--color-bg)] p-6 md:flex-row md:gap-6 md:p-8"
            >
              <div className="flex items-center gap-3 md:w-56 md:shrink-0 md:flex-col md:items-start md:gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] font-display text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[var(--color-fg)]">{t.name}</span>
                  <span className="text-xs text-[var(--color-fg-subtle)]">
                    {[t.role, t.company].filter(Boolean).join(" · ")}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-start gap-3">
                <Quote className="mt-1 size-5 shrink-0 text-[var(--color-brand-strong)]" />
                <p className="text-pretty text-[15px] leading-relaxed text-[var(--color-fg)]">
                  {t.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
