"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";

// Embla carousel, driven by the reader: swipe, drag, arrow keys or the buttons.
// No autoplay (HIG: no time-limited UI; WCAG 2.2.2) — the next card peeks in
// so it's obvious there's more.
export function Testimonials() {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    duration: 28,
  });
  const [index, setIndex] = useState(0);
  const [snaps, setSnaps] = useState(0);
  const [edge, setEdge] = useState({ prev: false, next: true });

  const sync = useCallback(() => {
    if (!embla) return;
    setIndex(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList().length);
    setEdge({ prev: embla.canScrollPrev(), next: embla.canScrollNext() });
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync).on("reInit", sync);
    return () => {
      embla.off("select", sync).off("reInit", sync);
    };
  }, [embla, sync]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      embla?.scrollNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      embla?.scrollPrev();
    }
  };

  const navBtn =
    "press inline-flex size-12 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-hard-sm)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-40";

  return (
    <section aria-roledescription="carousel" aria-labelledby="testimonials-title" className="section-y relative border-t border-[var(--color-border)]">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="testimonials-title"
          align="left"
          eyebrow="What clients say"
          title="The kind of feedback that makes us love what we do."
        />
        <div className="flex shrink-0 items-center gap-3">
          <span aria-live="polite" className="eyebrow min-w-16 text-[var(--color-fg-muted)]">
            {String(index + 1).padStart(2, "0")} / {String(snaps || testimonials.length).padStart(2, "0")}
          </span>
          <button type="button" aria-label="Previous testimonial" disabled={!edge.prev} onClick={() => embla?.scrollPrev()} className={navBtn}>
            <ArrowLeft className="size-5" />
          </button>
          <button type="button" aria-label="Next testimonial" disabled={!edge.next} onClick={() => embla?.scrollNext()} className={navBtn}>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Client testimonials — use the arrow keys to move"
        className="mt-12 overflow-hidden px-6 focus-visible:outline-offset-[-4px] md:px-10 xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
      >
        <ul className="flex gap-5">
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[62%] lg:basis-[40%]"
            >
              <figure className="flex h-full flex-col gap-6 border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 md:p-8">
                <span aria-hidden className="font-display text-5xl leading-none text-[var(--color-brand)]">“</span>
                <blockquote className="text-pretty text-body leading-relaxed text-[var(--color-fg)]">{t.quote}</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                  <span aria-hidden className="inline-flex size-10 shrink-0 items-center justify-center bg-[var(--color-brand)] font-display text-sm font-semibold text-white">
                    {t.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-callout font-semibold text-[var(--color-fg)]">{t.name}</span>
                    <span className="text-[13px] text-[var(--color-fg-muted)]">
                      {t.role} · {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-x mt-8 flex justify-end">
        <Link
          href="/reviews"
          className="eyebrow group inline-flex min-h-11 items-center gap-1.5 font-bold text-[var(--color-fg)] transition-colors hover:text-[var(--color-brand)]"
        >
          Every review
          <ArrowUpRight aria-hidden className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
