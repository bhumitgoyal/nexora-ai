import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = pageMetadata({
  title: "Client Reviews",
  description:
    "What operators say about running their business on Nuvero AI infrastructure: voice agents, assistants and workflow systems in production, in their own words.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <section className="section-y relative isolate overflow-hidden ">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6">
            <Reveal priority>
              <Link
                href="/"
                className="eyebrow inline-flex min-h-11 w-fit items-center gap-1.5 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
              >
                <ArrowLeft className="size-3.5" />
                Back home
              </Link>
            </Reveal>
            <Reveal priority delay={0.05}>
              <span className="eyebrow inline-flex w-fit items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1.5 text-[var(--color-fg-muted)]">
                <span className="size-1.5 bg-[var(--color-brand)]" />
                What clients say
              </span>
            </Reveal>
            <Reveal priority delay={0.1}>
              <h1 className="max-w-3xl text-balance font-display text-title-1 font-semibold">
                Every <span className="text-[var(--color-brand)]">review</span>, in one place.
              </h1>
            </Reveal>
            <Reveal priority delay={0.15}>
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
          <span className="eyebrow text-[var(--color-fg-muted)]">
            {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
          </span>
          <Link
            href="/contact"
            className="press group inline-flex min-h-11 items-center gap-2 border-2 border-[var(--color-border)] px-5 text-callout font-semibold text-[var(--color-fg)] transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
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
                <span className="inline-flex size-11 shrink-0 items-center justify-center bg-[var(--color-brand)] font-display text-sm font-semibold text-white">
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
