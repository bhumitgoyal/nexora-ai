import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Marquee } from "@/components/shared/Marquee";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="What clients say"
          title="The kind of feedback that makes us love what we do."
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <Marquee>
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex w-[420px] h-[300px] shrink-0 flex-col gap-5 card-surface p-7 md:w-[460px]"
            >
              <Quote className="size-5 shrink-0 text-[var(--color-brand-strong)]" />
              <p className="text-pretty text-[15px] leading-relaxed text-[var(--color-fg)] line-clamp-5 overflow-hidden">
                "{t.quote}"
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] font-display text-sm font-semibold text-white">
                  {t.initials}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[var(--color-fg)]">
                    {t.name}
                  </span>
                  <span className="text-xs text-[var(--color-fg-subtle)]">
                    {t.role} · {t.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
