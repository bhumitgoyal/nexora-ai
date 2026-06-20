"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Factory, Megaphone, ShoppingBag } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

const offerings = [
  {
    icon: Megaphone,
    label: "Marketing Agencies",
    tagline: "Scale delivery without scaling headcount.",
    description:
      "Problem-specific AI automation for agencies — report generation, campaign monitoring, client outreach — so your team ships better work, faster and takes on more clients.",
    solved: [
      "Client report generation",
      "AI SEO & campaign monitoring",
      "Client outreach automation",
      "Lead nurturing sequences",
      "Client onboarding automation",
    ],
    href: "/what-we-offer#agencies",
    accentClass: "border-[var(--color-brand)] text-[var(--color-brand)]",
  },
  {
    icon: ShoppingBag,
    label: "E-commerce Brands",
    tagline: "More revenue. Less manual work. Built to scale.",
    description:
      "Custom AI automation for Shopify stores, DTC brands, and Amazon sellers — cart recovery, confirmation calls, lead generation, and workflow automation that compounds revenue.",
    solved: [
      "Cart recovery automation",
      "Instagram comment automation",
      "Order confirmation calls",
      "Personalized AI chatbot",
      "Lead generation systems",
    ],
    href: "/what-we-offer#ecommerce",
    accentClass: "border-[var(--color-accent)] text-[var(--color-accent)]",
  },
  {
    icon: Factory,
    label: "Manufacturers",
    tagline: "Built for the production floor.",
    description:
      "Personalized AI solutions that eliminate the repetitive back-office work slowing your production down — inventory, supplier follow-ups, reports, and maintenance, all automated.",
    solved: [
      "Inventory reordering alerts",
      "Supplier follow-up emails",
      "Production & quality reports",
      "Maintenance scheduling",
      "Vendor communication logs",
    ],
    href: "/what-we-offer#manufacturers",
    accentClass: "border-[var(--color-fg)] text-[var(--color-fg)]",
  },
];

function AnimatedYour() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="relative inline-block">
      Your
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-brand)]"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />
    </span>
  );
}

export function WhatWeOffer() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we offer"
          title="Custom AI, built for your business type."
          subtitle="We don't do generic AI. We understand your industry and build problem-specific AI tools around the exact workflows slowing you down."
        />

        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-3">
          {offerings.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group flex h-full flex-col border border-[var(--color-border)] border-r-0 p-8 last:border-r transition-all hover:bg-[var(--color-bg-elev)] hover:border-[var(--color-brand)] md:border-r-0 md:last:border-r"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className={`inline-flex size-12 items-center justify-center border-2 ${item.accentClass}`}>
                      <Icon className="size-5" />
                    </span>
                    <Link
                      href={item.href}
                      className="inline-flex size-8 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-subtle)] transition-all group-hover:border-[var(--color-brand)] group-hover:text-[var(--color-brand)]"
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>

                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-fg-muted)]">
                    {item.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-[var(--color-border)] pt-6">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                      Problems already solved
                    </p>
                    <ul className="flex flex-col gap-2">
                      {item.solved.map((a, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm text-[var(--color-fg-muted)]">
                          <span className="size-1.5 shrink-0 bg-[var(--color-brand)]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Your Problem Next — primary CTA within each card */}
                  <div className="mt-auto pt-6">
                    <Link href={item.href} className="block">
                      <motion.div
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.15 }}
                        className="group/cta border-2 border-dashed border-[var(--color-border)] p-5 transition-all duration-200 hover:border-[var(--color-brand)] hover:bg-[var(--color-bg)]"
                      >
                        <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)] transition-colors group-hover/cta:text-[var(--color-brand)]">
                          <AnimatedYour />{" "}Problem Next?
                        </p>
                        <p className="mt-1 text-xs text-[var(--color-fg-subtle)] transition-colors group-hover/cta:text-[var(--color-fg-muted)]">
                          Tell us your challenge — we build for it.
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-brand)]">
                          Get a custom solution <ArrowUpRight className="size-3" />
                        </span>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/what-we-offer"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              See full breakdown for each business type
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
