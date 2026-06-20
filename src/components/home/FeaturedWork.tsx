import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredCaseStudies } from "@/content/caseStudies";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems we've shipped that moved real business metrics."
          subtitle="Every engagement starts with a number we're trying to move — and ends with the proof we moved it."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/work/${c.slug}`}
                className="group relative flex h-full flex-col overflow-hidden card-surface"
              >
                <div className={cn("relative aspect-[16/10] overflow-hidden", "bg-gradient-to-br", c.gradient)}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elev)] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                        {c.industry}
                      </span>
                      <span className="font-display text-lg font-semibold text-white">
                        {c.client}
                      </span>
                    </div>
                    <ArrowUpRight className="size-5 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <p className="text-pretty text-sm text-[var(--color-fg)] md:text-base">
                    {c.summary}
                  </p>
                  <div className="mt-auto grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-4">
                    {c.results.map((r) => (
                      <div key={r.label} className="flex flex-col gap-0.5">
                        <span className="text-gradient-brand font-display text-xl font-semibold">
                          {r.metric}
                        </span>
                        <span className="text-[10px] leading-tight text-[var(--color-fg-subtle)]">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
          >
            See all case studies <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
