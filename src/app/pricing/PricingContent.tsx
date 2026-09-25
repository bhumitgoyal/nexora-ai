"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Zap, Lock, Code2, HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { pricingTiers, pricingPrinciples, pricingFaqs } from "@/content/pricing";

type Currency = "usd" | "aed" | "eur" | "gbp" | "inr";

const CURRENCIES: { key: Currency; label: string }[] = [
  { key: "usd", label: "USD ($)" },
  { key: "aed", label: "AED (د.إ)" },
  { key: "eur", label: "EUR (€)" },
  { key: "gbp", label: "GBP (£)" },
  { key: "inr", label: "INR (₹)" },
];

export function PricingContent() {
  const [currency, setCurrency] = useState<Currency>("usd");

  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x relative z-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              as="h1"
              eyebrow="Transparent Engagements"
              title="Fixed scopes. Guaranteed deliverables. 100% code ownership."
              subtitle="We build AI systems the way custom engineering should be built: transparent pricing, milestone demos every 7 days, and deployment directly into your own cloud environment."
            />

            {/* Currency Selector */}
            <div className="flex items-center gap-1 border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-1.5 shadow-[3px_3px_0_var(--color-border)]">
              <span className="px-2 font-mono text-[10px] uppercase font-bold text-[var(--color-fg-subtle)]">
                Currency:
              </span>
              {CURRENCIES.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCurrency(c.key)}
                  className={`px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                    currency === c.key
                      ? "bg-[var(--color-brand)] text-white"
                      : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
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
                  className={`relative flex flex-col justify-between border-2 p-8 md:p-10 transition-all ${
                    isFeatured
                      ? "border-[var(--color-brand)] bg-[var(--color-bg)] shadow-[8px_8px_0_var(--color-brand)]"
                      : "border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-brand)] hover:shadow-[6px_6px_0_var(--color-brand)]"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 right-8 bg-[var(--color-brand)] px-4 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                        TIMELINE: {tier.timeline}
                      </span>
                      <span className="font-mono text-xs text-[var(--color-fg-subtle)]">
                        TIER // {tier.id.toUpperCase()}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-[var(--color-fg)] md:text-3xl">
                      {tier.name}
                    </h2>

                    <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                      {tier.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="mt-8 border-y border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl font-extrabold tracking-tight text-[var(--color-fg)] md:text-5xl">
                          {tier.price[currency]}
                        </span>
                        {tier.period && (
                          <span className="font-mono text-sm font-semibold text-[var(--color-fg-subtle)]">
                            {tier.period}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs font-mono text-[var(--color-fg-muted)]">
                        Best for: {tier.target}
                      </p>
                    </div>

                    {/* Full Deliverables List */}
                    <div className="mt-8 flex flex-col gap-3">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-fg)]">
                        ■ Complete Deliverables:
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {tier.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[var(--color-fg)] leading-relaxed">
                            <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights / Delivery Guarantees */}
                    <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                        ■ Deployment Guarantees:
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tier.guarantees.map((g, i) => (
                          <span
                            key={i}
                            className="border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 font-mono text-[11px] text-[var(--color-fg)]"
                          >
                            ✓ {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="mt-10 border-t border-[var(--color-border)] pt-6">
                    <Link
                      href={tier.ctaHref}
                      className={`flex w-full items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-colors ${
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

      {/* Principles & Code Ownership Section */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-20 md:py-28">
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
                className="flex flex-col gap-3 border-b border-[var(--color-border)] p-8 md:border-b-0 md:border-r last:border-r-0 bg-[var(--color-bg-elev)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
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
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elev)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Commercial FAQs"
            title="Frequently asked commercial questions."
            subtitle="Everything you need to know about our billing, milestone sign-offs, and cloud architecture delivery."
          />

          <div className="mt-12 flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-[var(--color-bg)]">
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
