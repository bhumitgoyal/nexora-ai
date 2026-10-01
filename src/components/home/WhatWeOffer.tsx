"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type KeyboardEvent } from "react";
import { DURATION, EASE } from "@/lib/motion";
import { site } from "@/content/site";
import { ArrowUpRight, Building2, Megaphone, ShoppingBag, UtensilsCrossed, Stethoscope, Boxes, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type Offering = {
  icon: LucideIcon;
  label: string;
  tagline: string;
  description: string;
  solved: string[];
  href: string;
  accentClass: string;
};

const offerings: Offering[] = [
  {
    icon: Megaphone,
    label: "Marketing Agencies",
    tagline: "Scale delivery without scaling headcount.",
    description:
      "Problem-specific AI automation for agencies (report generation, campaign monitoring, client outreach) so your team ships better work faster and takes on more clients.",
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
    tagline: "Recover 15–20% of abandoned carts automatically, while you sleep.",
    description:
      "Custom AI automation for Shopify stores, DTC brands, and Amazon sellers: cart recovery, confirmation calls, lead generation, and workflow automation that compounds revenue.",
    solved: [
      "Cart recovery automation",
      "Instagram comments automation",
      "Order confirmation calls",
      "Personalized AI chatbot",
      "Lead generation systems",
      "Brand-aware inbound & outbound voice bots",
    ],
    href: "/what-we-offer#ecommerce",
    accentClass: "border-[var(--color-fg)] text-[var(--color-fg)]",
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality & F&B",
    tagline: "Deliver exceptional experiences, hands-free.",
    description:
      "AI-powered automation for restaurants, hotels, and food businesses: reservations, guest communication, staff scheduling, and demand forecasting, so your team focuses on service, not admin.",
    solved: [
      "Reservation & booking automation",
      "Guest inquiry & feedback handling",
      "Staff scheduling & shift reminders",
      "Menu update & promotion broadcasts",
      "Post-visit review follow-up flows",
    ],
    href: "/what-we-offer#restaurants",
    accentClass: "border-[var(--color-fg)] text-[var(--color-fg)]",
  },
  {
    icon: Building2,
    label: "Real Estate & Property",
    tagline: "Close faster. Manage smarter.",
    description:
      "Custom AI automation for property managers, agents, and developers: tenant communication, lead nurturing, listing generation, and document workflows that run 24/7 without your team touching them.",
    solved: [
      "Tenant inquiry & lease renewal automation",
      "AI-powered property lead nurturing",
      "Rental payment reminders & follow-ups",
      "Listing description generation",
      "Maintenance request routing",
      "Property inspection report automation",
    ],
    href: "/what-we-offer#realestate",
    accentClass: "border-[var(--color-brand)] text-[var(--color-brand)]",
  },
  {
    icon: Stethoscope,
    label: "Healthcare & Clinics",
    tagline: "Cut front-desk admin by ~30%. Every reminder, intake form, and follow-up runs itself.",
    description:
      "Intelligent automation for clinics, diagnostic centres, and health providers: appointment scheduling, patient reminders, intake forms, and follow-up workflows that reduce no-shows and free your staff.",
    solved: [
      "Appointment booking & rescheduling",
      "Patient reminder & follow-up calls",
      "Intake form & document automation",
      "Insurance pre-auth follow-ups",
      "Post-visit care instruction delivery",
    ],
    href: "/industries/healthcare",
    accentClass: "border-[var(--color-brand)] text-[var(--color-brand)]",
  },
  {
    icon: Boxes,
    label: "B2B & SaaS Teams",
    tagline: "Win back ~40% of your ops team's week. The busywork between your tools, gone.",
    description:
      "Custom internal tools and operations automation for B2B and SaaS teams: the dashboards, CRM hygiene, onboarding, and cross-tool data shuffling that quietly eats the week, so your people build pipeline, not spreadsheets.",
    solved: [
      "Custom internal tools & dashboards",
      "CRM hygiene & data enrichment",
      "Cross-tool workflow automation",
      "Client onboarding & provisioning",
      "Automated ops & pipeline reporting",
      "Renewal & churn-risk alerts",
    ],
    href: "/what-we-offer#b2b",
    accentClass: "border-[var(--color-fg)] text-[var(--color-fg)]",
  },
];

// Real Estate leads the offering line-up.
const orderedOfferings = [
  ...offerings.filter((o) => o.label === "Real Estate & Property"),
  ...offerings.filter((o) => o.label !== "Real Estate & Property"),
];

// One industry at a time instead of six text-heavy cards: pick your industry,
// see the promise in one line and the systems already running as a numbered
// ledger. (Progressive disclosure — the detail lives on /what-we-offer.)
export function WhatWeOffer() {
  const [active, setActive] = useState(0);
  const uid = useId();
  const item = orderedOfferings[active];
  const Icon = item.icon;

  const onKey = (e: KeyboardEvent) => {
    const n = orderedOfferings.length;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? (active + 1) % n :
      e.key === "ArrowUp" || e.key === "ArrowLeft" ? (active - 1 + n) % n : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <section className="section-y relative border-t border-[var(--color-border)]">
      <div className="container-x">
        <SectionHeader
          eyebrow="The infrastructure"
          title={<>One <span className="text-[var(--color-brand)]">AI layer</span>, shaped to how your industry works.</>}
          subtitle="Pick your industry. See what's already running."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 grid border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
            <div
              role="tablist"
              aria-label="Industries"
              aria-orientation="vertical"
              onKeyDown={onKey}
              className="scrollbar-hide flex overflow-x-auto border-b-2 border-[var(--color-border)] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r-2"
            >
              {orderedOfferings.map((o, i) => {
                const TabIcon = o.icon;
                const selected = i === active;
                return (
                  <button
                    key={o.label}
                    id={`${uid}-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`${uid}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative flex min-h-14 shrink-0 items-center gap-3 px-5 text-left font-display text-base font-semibold transition-colors lg:border-b lg:border-[var(--color-border)]/30 lg:last:border-b-0",
                      selected ? "text-white" : "text-[var(--color-fg)] hover:bg-[var(--color-bg)]",
                    )}
                  >
                    {selected ? (
                      <motion.span layoutId={`${uid}-active`} className="absolute inset-0 bg-[var(--color-brand)]" transition={{ type: "spring", duration: 0.4, bounce: 0 }} />
                    ) : null}
                    <TabIcon aria-hidden className="relative size-4 shrink-0" />
                    <span className="relative whitespace-nowrap">{o.label}</span>
                    <span aria-hidden className={cn("relative ml-auto hidden font-mono text-xs lg:inline", selected ? "text-white" : "text-[var(--color-fg-subtle)]")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${active}`} className="relative min-h-[26rem] bg-[var(--color-bg)] p-6 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: DURATION.fast, ease: EASE }}
                  className="flex h-full flex-col gap-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-14 shrink-0 items-center justify-center border-2 border-[var(--color-brand)] bg-[var(--color-bg-elev)] text-[var(--color-brand)] shadow-[var(--shadow-hard-sm)]">
                      <Icon aria-hidden className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-title-3 font-semibold">{item.label}</h3>
                      <p className="mt-1 text-lead text-[var(--color-fg-muted)]">{item.tagline}</p>
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow mb-2 text-[var(--color-fg-muted)]">Running in production</p>
                    <ol className="grid border-t-2 border-[var(--color-border)] sm:grid-cols-2 sm:gap-x-6">
                      {item.solved.map((a, idx) => (
                        <motion.li
                          key={a}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: DURATION.fast, ease: EASE, delay: 0.04 * idx }}
                          className="flex min-h-12 items-center gap-3 border-b border-[var(--color-border)]/30 py-2 text-callout"
                        >
                          <span className="font-mono text-xs font-bold text-[var(--color-brand)]">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="text-[var(--color-fg)]">{a}</span>
                        </motion.li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href={item.href}
                      className="press inline-flex min-h-12 items-center gap-2 border-2 border-[var(--color-border)] px-5 text-callout font-semibold transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                    >
                      See the {item.label.toLowerCase()} map <ArrowUpRight aria-hidden className="size-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex min-h-12 items-center gap-1 text-callout font-semibold text-[var(--color-brand)] underline-offset-4 hover:underline"
                    >
                      {site.cta.primary} <ArrowUpRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
