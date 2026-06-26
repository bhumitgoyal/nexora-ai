"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef, useCallback } from "react";
import { ArrowUpRight, Building2, Megaphone, ShoppingBag, UtensilsCrossed, Stethoscope, type LucideIcon } from "lucide-react";
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
      "Problem-specific AI automation for agencies report generation, campaign monitoring, client outreach so your team ships better work, faster and takes on more clients.",
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
    tagline: "Recover 15–20% of abandoned carts automatically — while you sleep.",
    description:
      "Custom AI automation for Shopify stores, DTC brands, and Amazon sellers cart recovery, confirmation calls, lead generation, and workflow automation that compounds revenue.",
    solved: [
      "Cart recovery automation",
      "Instagram comments automation",
      "Order confirmation calls",
      "Personalized AI chatbot",
      "Lead generation systems",
      "Brand-aware inbound & outbound voice bots",
    ],
    href: "/what-we-offer#ecommerce",
    accentClass: "border-[var(--color-accent)] text-[var(--color-accent)]",
  },
  {
    icon: UtensilsCrossed,
    label: "Hospitality & F&B",
    tagline: "Deliver exceptional experiences, hands-free.",
    description:
      "AI-powered automation for restaurants, hotels, and food businesses reservations, guest communication, staff scheduling, and demand forecasting so your team focuses on service, not admin.",
    solved: [
      "Reservation & booking automation",
      "Guest inquiry & feedback handling",
      "Staff scheduling & shift reminders",
      "Menu update & promotion broadcasts",
      "Post-visit review follow-up flows",
    ],
    href: "/what-we-offer#hospitality",
    accentClass: "border-[var(--color-fg)] text-[var(--color-fg)]",
  },
  {
    icon: Building2,
    label: "Real Estate & Property",
    tagline: "Close faster. Manage smarter.",
    description:
      "Custom AI automation for property managers, agents, and developers tenant communication, lead nurturing, listing generation, and document workflows that run 24/7 without your team touching them.",
    solved: [
      "Tenant inquiry & lease renewal automation",
      "AI-powered property lead nurturing",
      "Rental payment reminders & follow-ups",
      "Listing description generation",
      "Maintenance request routing",
      "Property inspection report automation",
    ],
    href: "/what-we-offer#realestate",
    accentClass: "border-[var(--color-success)] text-[var(--color-success)]",
  },
  {
    icon: Stethoscope,
    label: "Healthcare & Clinics",
    tagline: "Cut front-desk admin by ~30% — every reminder, intake form, and follow-up runs itself.",
    description:
      "Intelligent automation for clinics, diagnostic centres, and health providers appointment scheduling, patient reminders, intake forms, and follow-up workflows that reduce no-shows and free your staff.",
    solved: [
      "Appointment booking & rescheduling",
      "Patient reminder & follow-up calls",
      "Intake form & document automation",
      "Insurance pre-auth follow-ups",
      "Post-visit care instruction delivery",
    ],
    href: "/what-we-offer#healthcare",
    accentClass: "border-[var(--color-brand)] text-[var(--color-brand)]",
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

function OfferingCard({ item, index }: { item: Offering; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const Icon = item.icon;

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current || !overlayRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlayRef.current.style.backgroundImage = `radial-gradient(320px circle at ${x}px ${y}px, rgba(193,18,31,0.07) 0%, transparent 65%)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    if (overlayRef.current) overlayRef.current.style.backgroundImage = "none";
  }, []);

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        ref={cardRef}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative flex h-full flex-col bg-[var(--color-bg)] p-8 transition-all hover:z-10 hover:bg-[var(--color-bg-elev)] hover:ring-1 hover:ring-inset hover:ring-[var(--color-brand)]"
      >
        {/* cursor spotlight */}
        <div
          ref={overlayRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{ backgroundImage: "none" }}
        />

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
                Tell us your challenge we build for it.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-brand)]">
                Book a free 30-min call <ArrowUpRight className="size-3" />
              </span>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function WhatWeOffer() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we offer"
          title={<>Custom <span className="text-[var(--color-brand)]">AI</span>, built for your business type.</>}
          subtitle="We don't do generic AI. We understand your industry and build problem-specific AI tools around the exact workflows slowing you down."
        />

        {/* Mobile: horizontal scroll */}
        <div className="mt-16 md:hidden -mx-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4" style={{ width: "max-content" }}>
            {offerings.map((item, i) => (
              <div key={item.label} className="w-[85vw] shrink-0 border border-[var(--color-border)] bg-[var(--color-bg)]">
                <OfferingCard item={item} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="mt-16 hidden md:grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {offerings.map((item, i) => (
            <OfferingCard key={item.label} item={item} index={i} />
          ))}
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
