"use client";

import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Zap, Lock, Code2, HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { pricingTiers, pricingPrinciples, pricingFaqs, scopingSteps } from "@/content/pricing";

export function PricingContent() {
  return (
    <>
      <section className="section-y relative isolate overflow-hidden ">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <SectionHeader
            as="h1"
            eyebrow="Engagement Models"
            title="Tailored fixed scopes. Guaranteed deliverables. 100% code ownership."
            subtitle="Because every business's workflows and systems are subjective, we deliver transparent, fixed-price proposals scoped specifically to your tools. Milestone demos every 7 days, and deployment directly into your own cloud environment."
          />
        </div>
      </section>

      {/* Main Pricing Tiers Grid */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elev)] py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {pricingTiers.map((tier) => {
              const isFeatured = tier.featured;
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col justify-between border-2 p-8 md:p-10 transition ${
                    isFeatured
                      ? "border-[var(--color-brand)] bg-[var(--color-bg)] shadow-[8px_8px_0_var(--color-brand)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-brand)] hover:shadow-[6px_6px_0_var(--color-brand)]"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="eyebrow absolute -top-3.5 right-8 bg-[var(--color-brand)] px-4 py-1 font-bold text-white">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <span className="block font-display text-4xl font-bold tracking-tight text-[var(--color-brand)]">{tier.timeline}</span>

                    <h2 className="mt-1 font-display text-title-2 font-bold text-[var(--color-fg)]">
                      {tier.name}
                    </h2>

                    <p className="mt-2 text-callout text-[var(--color-fg-muted)]">{tier.tagline}</p>

                    {/* Scope Model Block */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tier.guarantees.map((g, i) => (
                        <span key={i} className="eyebrow border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1.5 font-bold text-[var(--color-fg)]">
                          ✓ {g}
                        </span>
                      ))}
                    </div>

                    {/* Full Deliverables List */}
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {tier.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-callout leading-snug text-[var(--color-fg)]">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <details className="group mt-6 border-t border-[var(--color-border)] pt-2">
                      <summary className="eyebrow flex min-h-11 cursor-pointer list-none items-center gap-2 font-bold text-[var(--color-fg)] [&::-webkit-details-marker]:hidden">
                        <span aria-hidden className="inline-block text-base text-[var(--color-brand)] transition-transform group-open:rotate-45">+</span>
                        Scope, fit &amp; everything included
                      </summary>
                      <div className="mt-3 flex flex-col gap-4 text-callout text-[var(--color-fg-muted)]">
                        <p><span className="font-semibold text-[var(--color-fg)]">{tier.scopeModel}.</span> {tier.scopeBasis}.</p>
                        <p><span className="font-semibold text-[var(--color-fg)]">Best for:</span> {tier.target}</p>
                        <ul className="flex flex-col gap-2">
                          {[...tier.deliverables.slice(3), ...tier.deliverableBullets].map((d, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>

                  </div>

                  {/* CTA button */}
                  <div className="mt-10 border-t border-[var(--color-border)] pt-6">
                    <Link
                      href={tier.ctaHref}
                      className={`press flex min-h-12 w-full items-center justify-between px-6 text-[15px] font-bold transition-colors ${
                        isFeatured
                          ? "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-strong)]"
                          : "border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[var(--color-fg)] hover:bg-[var(--color-brand)] hover:text-white"
                      }`}
                    >
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Scope Engagements */}
      <section className="section-y border-t border-[var(--color-border)] bg-[var(--color-bg)] ">
        <div className="container-x">
          <SectionHeader
            eyebrow="Scoping Protocol"
            title="How we scope every project without surprises."
            subtitle="We follow a four-step framework that ensures alignment, concrete milestones, and guaranteed deliverables before writing production code."
          />

          <div className="mt-14 grid grid-cols-1 gap-0 border border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">
            {scopingSteps.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 border-b border-[var(--color-border)] p-8 md:border-b-0 md:border-r last:border-r-0 bg-[var(--color-bg-elev)]"
              >
                <span className="eyebrow font-bold text-[var(--color-brand)]">
                  ■ STAGE {s.step}
                </span>
                <h3 className="font-display text-lg font-bold text-[var(--color-fg)]">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles & Code Ownership Section */}
      <section className="section-y border-t border-[var(--color-border)] bg-[var(--color-bg-elev)] ">
        <div className="container-x">
          <SectionHeader
            eyebrow="The Engineering Standard"
            title="Why we refuse proprietary black boxes."
            subtitle="Most automation consultancies lock you into ongoing tool markups and closed platforms. Nuvero engineers pure infrastructure that you own entirely."
          />

          <div className="mt-14 grid grid-cols-1 gap-0 border border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">
            {pricingPrinciples.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 border-b border-[var(--color-border)] p-8 md:border-b-0 md:border-r last:border-r-0 bg-[var(--color-bg)]"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow font-bold text-[var(--color-brand)]">
                    ■ PRINCIPLE 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-fg)]">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section-y border-t border-[var(--color-border)] bg-[var(--color-bg)] ">
        <div className="container-x">
          <SectionHeader
            eyebrow="Commercial FAQs"
            title="Frequently asked commercial questions."
            subtitle="Everything you need to know about our custom scoping, milestone sign-offs, and cloud architecture delivery."
          />

          <div className="mt-12 flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-[var(--color-bg-elev)]">
            {pricingFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 md:p-8">
                <h4 className="flex items-center gap-2.5 font-display text-base font-bold text-[var(--color-fg)] md:text-lg">
                  <span className="size-2 bg-[var(--color-brand)]" />
                  {faq.question}
                </h4>
                <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed pl-4.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
