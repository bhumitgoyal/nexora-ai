"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Lock, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { pricingTiers, pricingPrinciples } from "@/content/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="section-y border-t-2 border-[var(--color-border)] bg-[var(--color-bg-elev)]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Engagement models"
          title="Custom fixed scopes. Tailored to your operational stack."
          subtitle="Fixed price, fixed scope, no hourly surprises. You own all the code."
        />

        {/* Pricing Cards Grid */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingTiers.map((tier) => {
              const isFeatured = tier.featured;
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col justify-between border-2 p-7 transition ${
                    isFeatured
                      ? "border-[var(--color-brand)] bg-[var(--color-bg)] shadow-[6px_6px_0_var(--color-brand)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-brand)] hover:shadow-[4px_4px_0_var(--color-brand)]"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="eyebrow absolute -top-3.5 right-6 bg-[var(--color-brand)] px-3 py-0.5 font-bold text-white">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <span className="block font-display text-3xl font-bold tracking-tight text-[var(--color-brand)]">
                      {tier.timeline}
                    </span>

                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[var(--color-fg)]">
                      {tier.name}
                    </h3>

                    <p className="mt-1 text-callout text-[var(--color-fg-muted)]">{tier.scopeModel}</p>

                    {/* Deliverables */}
                    <div className="mt-6 flex flex-col gap-2.5">
                      {tier.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-callout leading-snug text-[var(--color-fg)]">
                          <span className="mt-1 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                    <Link
                      href={tier.ctaHref}
                      className={`press flex min-h-12 w-full items-center justify-center gap-2 px-4 text-callout font-bold transition-colors ${
                        isFeatured
                          ? "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-strong)]"
                          : "border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[var(--color-fg)] hover:bg-[var(--color-brand)] hover:text-white"
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Guarantees Bar */}
        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-1 gap-0 border border-[var(--color-border)] bg-[var(--color-bg)] md:grid-cols-4">
            {pricingPrinciples.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 border-b border-[var(--color-border)] p-5 md:border-b-0 md:border-r last:border-r-0 md:p-6"
              >
                <span className="font-mono text-xs font-bold text-[var(--color-brand)]">0{idx + 1}</span>
                <h4 className="font-display text-base font-bold text-[var(--color-fg)]">{p.title}</h4>
              </div>
            ))}
          </div>
        </Reveal>

        {/* View full pricing details link */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Link
            href="/pricing"
            className="press inline-flex min-h-12 items-center gap-2 border-2 border-[var(--color-border)] px-5 text-callout font-semibold transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            Full pricing &amp; scoping FAQ <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
