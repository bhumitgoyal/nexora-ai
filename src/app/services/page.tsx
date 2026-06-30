import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/content/services";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlowButton } from "@/components/shared/GlowButton";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI voice agents, WhatsApp automation, lead generation, campaign automation, and custom AI workflows. Every Nuvero service is built end-to-end and instrumented for measurable ROI.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={420} className="right-[-100px] top-[20%]" />

        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="Services"
            title="AI Services Customers Are Already Using"
            subtitle="No matter how niche your workflow is, we're here to automate it with AI. Pick a starting point or talk to us about a bundle everything is custom-fit, integrated into your stack, and instrumented for measurable impact."
          />
        </div>
      </section>

      <section className="relative">
        <div className="container-x flex flex-col gap-12 pb-24 md:gap-20">
          {services.map((service, i) => {
            const Icon = service.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-8 card-surface p-7 md:grid-cols-[1fr_1.4fr] md:gap-12 md:p-12"
                >
                  <div className={flip ? "md:order-2" : ""}>
                    <div className="flex flex-col gap-5">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(139,92,246,0.18),rgba(34,211,238,0.18))] text-[var(--color-brand-strong)]">
                        <Icon className="size-5" />
                      </span>
                      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
                        {service.tagline}
                      </p>
                      <div className="flex flex-col gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4">
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
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
                        Talk to us about this
                      </GlowButton>
                    </div>
                  </div>

                  <div className={flip ? "md:order-1" : ""}>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                          How we solve it
                        </span>
                        <ul className="flex flex-col gap-2.5">
                          {service.solution.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--color-fg)]">
                              <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5">
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-brand-strong)]">
                          What you get
                        </span>
                        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
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
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
