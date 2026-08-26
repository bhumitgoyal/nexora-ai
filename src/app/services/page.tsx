import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/content/services";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlowButton } from "@/components/shared/GlowButton";
import { SystemIndex } from "@/components/services/SystemIndex";
import { Perforation } from "@/components/shared/Perforation";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "The systems that make up Nuvero's AI infrastructure: voice agents, conversational AI, workflow orchestration, lead engines, and knowledge layers. Built into your stack, instrumented for measurable impact, owned by you.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />

        <div className="container-x relative z-10">
          <Link
            href="/what-we-offer"
            className="mb-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-brand)]"
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
                  <span className="absolute -top-3 left-5 border-2 border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] md:left-11">
                    {sysNo}
                  </span>

                  <div className={flip ? "md:order-2" : ""}>
                    <div className="flex flex-col gap-5">
                      <span className="inline-flex size-12 items-center justify-center border-2 border-[var(--color-brand)] text-[var(--color-brand)]">
                        <Icon className="size-5" />
                      </span>
                      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                        {service.tagline}
                      </p>
                      <div className="flex flex-col gap-2 border-[1.5px] border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                          The problem
                        </span>
                        <p className="text-sm leading-relaxed text-[var(--color-fg)]">
                          {service.problem}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="rounded-none font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-subtle)] border-[var(--color-border)]"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <GlowButton href="/contact" variant="secondary" size="sm" withArrow>
                        Commission this system
                      </GlowButton>
                    </div>
                  </div>

                  <div className={flip ? "md:order-1" : ""}>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex flex-col gap-3">
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-brand)]">
                          How the layer runs it
                        </span>
                        <ul className="flex flex-col gap-2.5">
                          {service.solution.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-fg)]">
                              <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-brand)]" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3 border-[1.5px] border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                          What you get
                        </span>
                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                              <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Custom solution card */}
          <Reveal>
            <Link href="/contact" className="block">
              <div className="group flex flex-col items-start gap-4 border-2 border-dashed border-[var(--color-brand)] p-8 transition-all duration-200 hover:bg-[var(--color-brand)] md:flex-row md:items-center md:justify-between md:p-10">
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
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)] transition-colors group-hover:text-white">
                  Book a free 30-min call <ArrowRight className="size-4" />
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
