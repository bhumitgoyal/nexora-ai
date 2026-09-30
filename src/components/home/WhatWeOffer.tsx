"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { DURATION, EASE } from "@/lib/motion";
import { site } from "@/content/site";
import { ArrowUpRight, Building2, Megaphone, ShoppingBag, UtensilsCrossed, Stethoscope, Boxes, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

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

function AnimatedYour() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="relative inline-block">
      Your
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[var(--color-brand)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: DURATION.base, ease: EASE, delay: 0.4 }}
      />
    </span>
  );
}

function OfferingCard({ item, index }: { item: Offering; index: number }) {
  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.08}>
      <div className="group relative flex h-full flex-col bg-[var(--color-bg)] p-6 transition-colors hover:z-10 hover:bg-[var(--color-bg-elev)] hover:ring-1 hover:ring-inset hover:ring-[var(--color-brand)] sm:p-8">

        <div className="mb-6 flex items-start justify-between">
          <span className={`inline-flex size-12 items-center justify-center border-2 ${item.accentClass}`}>
            <Icon className="size-5" />
          </span>
          <Link
            href={item.href}
            aria-label={`${item.label}: see the infrastructure`}
            className="inline-flex size-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors group-hover:border-[var(--color-brand)] group-hover:text-[var(--color-brand)]"
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <h3 className="font-display text-title-3 font-semibold">
          {item.label}
        </h3>
        <p className="mt-1 text-callout font-medium text-[var(--color-fg)]">
          {item.tagline}
        </p>
        <p className="mt-4 text-callout leading-relaxed text-[var(--color-fg-muted)]">
          {item.description}
        </p>

        <div className="mt-6 border-t border-[var(--color-border)] pt-6">
          <p className="eyebrow mb-3 text-[var(--color-fg-muted)]">
            Systems already running in production
          </p>
          <ul className="flex flex-col gap-2">
            {item.solved.map((a, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-callout text-[var(--color-fg-muted)]">
                <span className="size-1.5 shrink-0 bg-[var(--color-brand)]" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <Link href="/contact" className="block">
            <div className="group/cta border-2 border-dashed border-[var(--color-border)] p-5 transition-colors duration-200 hover:border-[var(--color-brand)] hover:bg-[var(--color-bg)]">
              <p className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)] transition-colors group-hover/cta:text-[var(--color-brand)]">
                <AnimatedYour />{" "}workflow next?
              </p>
              <p className="mt-1 text-callout text-[var(--color-fg-muted)]">
                If a human does it manually today, we can build the system that runs it.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-callout font-semibold text-[var(--color-brand)]">
                {site.cta.primary} <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export function WhatWeOffer() {
  return (
    <section className="section-y relative border-t border-[var(--color-border)]">
      <div className="container-x">
        <SectionHeader
          eyebrow="The infrastructure"
          title={<>One <span className="text-[var(--color-brand)]">AI layer</span>, shaped to how your industry works.</>}
          subtitle="We don't sell tools. We build the intelligence layer under your operations: agents that learn your workflows, your systems, and your edge cases, so the manual work in your industry simply stops being manual."
        />

        {/* Mobile: horizontal scroll */}
        <ul className="scrollbar-hide -mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 md:hidden">
          {orderedOfferings.map((item, i) => (
            <li key={item.label} className="w-[84vw] shrink-0 snap-start border border-[var(--color-border)] bg-[var(--color-bg)]">
              <OfferingCard item={item} index={i} />
            </li>
          ))}
        </ul>

        {/* Desktop: grid */}
        <div className="mt-16 hidden md:grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {orderedOfferings.map((item, i) => (
            <OfferingCard key={item.label} item={item} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/what-we-offer"
              className="press inline-flex min-h-12 items-center gap-2 border-2 border-[var(--color-border)] px-6 text-callout font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              See the full infrastructure map per industry
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
