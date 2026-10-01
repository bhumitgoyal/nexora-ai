import type { Metadata } from "next";
import { SystemsCatalogJsonLd } from "@/components/seo/schemas";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { services } from "@/content/services";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlowButton } from "@/components/shared/GlowButton";
import { SystemIndex } from "@/components/services/SystemIndex";
import { Perforation } from "@/components/shared/Perforation";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = pageMetadata({
  title: "AI Systems: Voice, Chat, Workflows & Knowledge",
  description:
    "The systems Nuvero composes your AI infrastructure from: voice agents, conversational AI, workflow orchestration, lead engines and knowledge layers you own.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <SystemsCatalogJsonLd />
      <section className="section-y relative isolate overflow-hidden ">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />

        <div className="container-x relative z-10">
          <Link
            href="/what-we-offer"
            className="eyebrow mb-8 inline-flex items-center gap-2 font-semibold text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
          >
            <ArrowLeft className="size-4" /> Back to Infrastructure
          </Link>
          <SectionHeader
            as="h1"
            eyebrow="The systems"
            title="The building blocks of your AI infrastructure."
            subtitle="These aren't packaged services. They're the systems we compose your intelligence layer from, each custom-built into your stack, trained on how your company works, and instrumented for measurable impact."
          />

          <div className="mt-14">
            <SystemIndex />
          </div>
        </div>
      </section>

      <Perforation label="Catalogue entries" />

      <section className="relative">
        <div className="container-x flex flex-col gap-12 pb-24 pt-12 md:gap-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const flip = i % 2 === 1;
            const sysNo = `SYS-${String(i + 1).padStart(2, "0")}`;
            return (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="relative grid scroll-mt-24 grid-cols-1 gap-8 border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 transition-colors hover:border-[var(--color-brand)] md:grid-cols-[1fr_1.4fr] md:gap-12 md:p-12"
                >
                  {/* catalogue plate */}
                  <span className="eyebrow absolute -top-3 left-5 border-2 border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-bold text-[var(--color-brand)] md:left-11">
                    {sysNo}
                  </span>

                  <div className={flip ? "md:order-2" : ""}>
                    <div className="flex flex-col gap-5">
                      <span className="inline-flex size-12 items-center justify-center border-2 border-[var(--color-brand)] text-[var(--color-brand)]">
                        <Icon className="size-5" />
                      </span>
                      <h2 className="font-display text-title-2 font-semibold">
                        {service.title}
                      </h2>
                      <p className="text-pretty text-lead text-[var(--color-fg-muted)]">
                        {service.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="rounded-none font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-subtle)] border-[var(--color-border)]"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <GlowButton href="/contact" variant="secondary" size="sm" withArrow>
                          Commission this system
                        </GlowButton>
                        {service.overviewUrl ? (
                          <a
                            href={service.overviewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="eyebrow inline-flex items-center gap-1.5 font-semibold text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
                          >
                            <ExternalLink className="size-3.5" /> See it in action
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className={flip ? "md:order-1" : ""}>
                    {/* three-step flow instead of paragraphs; full spec on demand */}
                    <span className="eyebrow text-[var(--color-brand)]">How the layer runs it</span>
                    <ol className="mt-3 flex flex-col">
                      {service.solution.slice(0, 3).map((point, idx) => (
                        <li key={point} className="relative flex gap-4 pb-6 last:pb-0">
                          {idx < 2 ? <span aria-hidden className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-0.5 bg-[var(--color-border)]/30" /> : null}
                          <span className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-sm font-bold text-[var(--color-brand)] shadow-[var(--shadow-hard-sm)]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="pt-2 text-callout leading-snug text-[var(--color-fg)]">{point}</span>
                        </li>
                      ))}
                    </ol>

                    <details className="group mt-6 border-t-2 border-[var(--color-border)] pt-2">
                      <summary className="eyebrow flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-[var(--color-fg)] [&::-webkit-details-marker]:hidden">
                        <span aria-hidden className="inline-block text-base text-[var(--color-brand)] transition-transform group-open:rotate-45">+</span>
                        Full spec: problem, method, deliverables
                      </summary>
                      <div className="mt-3 flex flex-col gap-5">
                        <p className="text-callout leading-relaxed text-[var(--color-fg-muted)]">
                          <span className="font-semibold text-[var(--color-fg)]">The problem. </span>
                          {service.problem}
                        </p>
                        {service.solution.length > 3 ? (
                          <ul className="flex flex-col gap-2">
                            {service.solution.slice(3).map((point) => (
                              <li key={point} className="flex items-start gap-2.5 text-callout text-[var(--color-fg)]">
                                <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-brand)]" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        <ul className="grid grid-cols-1 gap-2 border-[1.5px] border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:grid-cols-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-callout text-[var(--color-fg-muted)]">
                              <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Custom solution card */}
          <Reveal>
            <Link href="/contact" className="block">
              <div className="group flex flex-col items-start gap-4 border-2 border-dashed border-[var(--color-brand)] p-8 transition duration-200 hover:bg-[var(--color-brand)] md:flex-row md:items-center md:justify-between md:p-10">
                <div className="flex items-start gap-4">
                  <Sparkles className="mt-0.5 size-6 shrink-0 text-[var(--color-brand)] transition-colors group-hover:text-white" />
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-xl font-semibold tracking-tight text-[var(--color-brand)] transition-colors group-hover:text-white md:text-2xl">
                      Solution to your custom problem
                    </span>
                    <span className="max-w-xl text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-white/80 md:text-base">
                      Have a workflow, bottleneck, or internal process that doesn&apos;t fit standard systems? We engineer custom AI agents tailored to your exact stack, tools, and operations.
                    </span>
                  </div>
                </div>
                <span className="eyebrow inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-bold text-[var(--color-brand)] transition-colors group-hover:text-white">
                  Book a 30-min call <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
