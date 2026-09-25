"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Lock, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { pricingTiers, pricingPrinciples } from "@/content/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="border-t-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Engagement Models"
          title="Custom fixed scopes. Tailored to your operational stack."
          subtitle="Because every business's workflows and legacy tools are subjective, we deliver transparent, fixed-price proposals scoped specifically to your systems. Zero hourly surprises, and you own 100% of the code."
        />

        {/* Pricing Cards Grid */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingTiers.map((tier) => {
              const isFeatured = tier.featured;
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col justify-between border-2 p-7 transition-all ${
                    isFeatured
                      ? "border-[var(--color-brand)] bg-[var(--color-bg)] shadow-[6px_6px_0_var(--color-brand)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-brand)] hover:shadow-[4px_4px_0_var(--color-brand)]"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 right-6 bg-[var(--color-brand)] px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                        {tier.timeline}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[var(--color-fg)]">
                      {tier.name}
                    </h3>

                    <p className="mt-2 text-xs text-[var(--color-fg-muted)] leading-relaxed min-h-[3rem]">
                      {tier.tagline}
                    </p>

                    {/* Scope Model */}
                    <div className="mt-6 border-y border-[var(--color-border)] py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-display text-lg font-bold text-[var(--color-fg)]">
                          {tier.scopeModel}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--color-fg-subtle)] leading-snug">
                          {tier.scopeBasis}
                        </span>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mt-6 flex flex-col gap-2.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-fg)]">
                        ■ Key Deliverables:
                      </span>
                      {tier.deliverables.slice(0, 4).map((d, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--color-fg)] leading-snug">
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
                      className={`flex w-full items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
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
                className="flex flex-col gap-2 border-b border-[var(--color-border)] p-6 md:border-b-0 md:border-r last:border-r-0 md:p-8"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  ■ 0{idx + 1}
                </span>
                <h4 className="font-display text-sm font-bold text-[var(--color-fg)]">
                  {p.title}
                </h4>
                <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* View full pricing details link */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-fg-muted)] font-mono">
            Want to understand how we scope your exact stack and integrations?
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-brand)] hover:underline"
          >
            <span>Learn more about our scoping process and FAQs →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
