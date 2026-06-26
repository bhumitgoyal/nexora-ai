"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Megaphone,
  ShoppingBag,
  Utensils,
  ArrowRight,
  Sparkles,
  BarChart3,
  Search,
  TrendingUp,
  UserCheck,
  Send,
  Zap,
  ShoppingCart,
  MessageSquare,
  Phone,
  Bot,
  Target,
  Mic,
  FileText,
  Bell,
  Users,
  Home,
  ClipboardCheck,
  Star,
  Calculator,
  Calendar,
  BarChart2,
  LayoutGrid,
  Stethoscope,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/content/services";

type SolvedItem = {
  task: string;
  detail: string;
  icon?: LucideIcon;
  isNew?: boolean;
};

const sections = [
  {
    id: "agencies",
    icon: Megaphone,
    label: "Marketing Agencies",
    eyebrow: "For agencies scaling delivery",
    headline: "Deliver more. Hire less.",
    description:
      "Agency growth hits a wall when delivery capacity can't keep up with new clients. The bottleneck is almost always repetitive, low-value work. We build personalized AI automation for that entire layer so your team can take on more clients without burning out.",
    painPoints: [
      "Hours spent building the same client reports every month",
      "Campaign monitoring requiring constant manual checks",
      "Lead nurturing falling off after the first email",
      "Client update emails being written from scratch each time",
      "Manual prospecting eating into delivery time",
    ],
    solved: [
      { task: "Unified AI Reporting Engine", icon: BarChart3, detail: "Connects to all your ad platforms, generates branded client reports on schedule, and flags anomalies in plain English automatically." },
      { task: "AI SEO Engine", icon: Search, detail: "Mines keyword gaps, generates content briefs, creates programmatic pages, and monitors rankings turning SEO from a sprint into a compounding loop." },
      { task: "AI Ad Campaign Optimizer", icon: TrendingUp, detail: "Monitors performance every few hours, auto-rotates fatigued creatives, reallocates budget to top performers, and sends a daily Slack summary." },
      { task: "AI Onboarding Agent", icon: UserCheck, detail: "Handles new client intake from first email to structured brief forms, asset collection, async Q&A all without a single manual email." },
      { task: "Client Outreach Automation", icon: Send, detail: "Find and reach clients with personalized messages automatically without pressing a single button. Built on your ICP with CRM integration." },
      { task: "Your problem next", icon: Sparkles, detail: "We build custom AI solutions for the specific delivery bottlenecks inside your agency not template tools repackaged for marketing.", isNew: true },
    ] as SolvedItem[],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce Brands",
    eyebrow: "For Shopify stores, DTC brands & Amazon sellers",
    headline: "More revenue. Less manual work.",
    description:
      "E-commerce brands leave significant revenue on the table through abandoned carts, slow follow-ups, and manual ops that don't scale. We build AI automation that works while you sleep compounding revenue, improving customer experience, and cutting operational overhead.",
    painPoints: [
      "Abandoned carts never getting a timely, personalized follow-up",
      "Instagram comments going unanswered and harming brand perception",
      "Order confirmations and support taking up team bandwidth",
      "Leads captured but never properly qualified or nurtured",
      "Customer questions going unanswered outside business hours",
    ],
    solved: [
      { task: "Workflow Automation", icon: Zap, detail: "Build custom AI workflows that complete repetitive work for you order processing, CRM updates, inventory alerts without manual intervention." },
      { task: "Cart Recovery Automation", icon: ShoppingCart, detail: "Don't let visitors forget what they were about to buy. Automatically send personalized reminders featuring the exact products they viewed." },
      { task: "Instagram Comments Automation", icon: MessageSquare, detail: "Reply instantly to Instagram comments that would otherwise go unnoticed, using your brand's unique tone of voice within seconds of posting." },
      { task: "Confirmation Call Automation", icon: Phone, detail: "Automated voice calls for order confirmations, delivery updates, and follow-ups placed within minutes, fully personalized to each customer." },
      { task: "Personalized AI Chatbot", icon: Bot, detail: "24/7 support trained on your product catalog and brand tone. Converts browsers into buyers, handles support tickets, and escalates to humans seamlessly." },
      { task: "Lead Generation System", icon: Target, detail: "Automated lead capture, qualification, and CRM enrichment conversion-focused from day one. High-intent leads are surfaced to your team immediately." },
      { task: "Incoming & Outgoing Brand-Aware Voice Bots", icon: Mic, detail: "AI voice agents that answer inbound calls, make outbound follow-up calls, speak in your brand's tone, qualify leads, collect customer information, and route conversations intelligently." },
      { task: "Your problem next", icon: Sparkles, detail: "Every e-commerce brand is different. We build personalized AI tools around your specific revenue and ops challenges.", isNew: true },
    ] as SolvedItem[],
  },
  {
    id: "realestate",
    icon: Building2,
    label: "Real Estate & Property",
    eyebrow: "For real estate agents, developers & property managers",
    headline: "Close faster. Nurture smarter. Manage less.",
    description:
      "Real estate businesses lose deals to slow follow-ups, miss renewals because of manual tracking, and waste hours on listing copy and tenant communication. We build AI automation that keeps your pipeline moving, your tenants happy, and your team focused on closing not chasing.",
    painPoints: [
      "Leads going cold because follow-ups happen too late",
      "Tenant inquiries piling up without timely responses",
      "Lease renewal reminders sent manually, often missed",
      "Listing descriptions taking hours to write from scratch",
      "Maintenance requests falling through the cracks",
    ],
    solved: [
      { task: "AI Lead Nurturing Agent", icon: Users, detail: "Automatically follows up with every incoming property enquiry via WhatsApp, email, or voice within seconds. Qualifies intent, books site visits, and routes hot leads to the right agent." },
      { task: "Listing Description Generator", icon: FileText, detail: "Generates compelling, SEO-optimised property listings from a simple set of inputs bedrooms, location, amenities in seconds, in your brand voice." },
      { task: "Lease Renewal & Reminder Automation", icon: Bell, detail: "Monitors lease end dates and auto-sends personalised renewal offers at the right time. Reduces churn and keeps occupancy high without manual tracking." },
      { task: "Tenant Communication Bot", icon: Home, detail: "Handles inbound tenant queries 24/7 maintenance requests, payment questions, move-in checklists escalating to your team only when genuinely needed." },
      { task: "Document & Compliance Workflow", icon: ClipboardCheck, detail: "Automates collection of KYC documents, rental agreements, and compliance checklists. Sends reminders, tracks completion, and flags missing items before they cause delays." },
      { task: "Your problem next", icon: Sparkles, detail: "We build custom AI tools around your exact real estate workflow not generic CRM add-ons repackaged for property teams.", isNew: true },
    ] as SolvedItem[],
  },
  {
    id: "restaurants",
    icon: Utensils,
    label: "Restaurants",
    eyebrow: "For restaurant operations",
    headline: "Cut waste. Fill covers. Run smoother.",
    description:
      "Restaurants face a unique combination of operational, financial, and marketing challenges often with lean teams. We build problem-specific AI systems that handle scheduling, reconciliation, forecasting, and marketing so you can focus on the food and the guest experience.",
    painPoints: [
      "Quiet covers during slow periods eating into margins",
      "Manual POS reconciliation taking hours each night",
      "Negative reviews spotted too late to fix the root cause",
      "Overstaffing and understaffing on unpredictable shifts",
      "Food waste from inaccurate prep planning",
    ],
    solved: [
      { task: "AI Marketing Automation", icon: Megaphone, detail: "Identifies slow periods and sends personalized promotions to the right guest segments via email or SMS automatically, based on visit history." },
      { task: "Reconciliation Agent", icon: Calculator, detail: "Reconciles POS, payment gateways, and delivery platforms daily and flags discrepancies before your accountant notices." },
      { task: "Review & Feedback Mining Agent", icon: Star, detail: "Monitors all review platforms in real time, categorizes sentiment, surfaces recurring themes, and drafts manager responses for one-click approval." },
      { task: "AI Staff Scheduling Agent", icon: Calendar, detail: "Analyzes footfall patterns, bookings, and local events to generate optimal shift schedules cutting labor costs without leaving a shift short." },
      { task: "Demand Forecasting Model", icon: BarChart2, detail: "Predicts daily covers and dish demand using historical data, weather, and events. Your kitchen gets a daily prep guide to cut waste and prep smarter." },
      { task: "Reservation & Table Optimization Agent", icon: LayoutGrid, detail: "Consolidates all booking platforms, assigns tables to maximize capacity, sends automated reminders to cut no-shows, and manages the waitlist." },
      { task: "Your problem next", icon: Sparkles, detail: "Every restaurant is different. We build custom AI tools around your specific operation not generic hospitality software.", isNew: true },
    ] as SolvedItem[],
  },
];

const industryJumpIcons: Record<string, LucideIcon> = {
  agencies: Megaphone,
  ecommerce: ShoppingBag,
  realestate: Building2,
  restaurants: Utensils,
};

export function WhatWeOfferContent() {
  const [tab, setTab] = useState<"industry" | "service">("industry");

  return (
    <>
      <section className="relative border-b border-[var(--color-border)] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-50" />
        <div className="container-x">
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
              <span className="size-1.5 bg-[var(--color-brand)]" />
              What we offer
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Custom AI, built for{" "}
              <span className="text-[var(--color-brand)]">your</span> problem.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg">
              We don&apos;t do generic AI. We go deep on your industry, understand your exact
              workflow, and build AI solutions around the specific pain points costing you the most.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
              >
                Book a free 30-min call <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                See our work
              </Link>
            </div>
          </Reveal>

          {/* Tab toggle */}
          <Reveal delay={0.18}>
            <div className="mt-10 inline-flex border border-[var(--color-border)] p-1 gap-1">
              <button
                onClick={() => setTab("industry")}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                  tab === "industry"
                    ? "bg-[var(--color-brand)] text-white"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                }`}
              >
                By Industry
              </button>
              <button
                onClick={() => setTab("service")}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                  tab === "service"
                    ? "bg-[var(--color-brand)] text-white"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                }`}
              >
                By Service
              </button>
            </div>
          </Reveal>

          {/* Quick jump nav — industry tab only */}
          {tab === "industry" && (
            <Reveal delay={0.2}>
              <div className="mt-4 flex flex-wrap gap-2">
                {sections.map((s) => {
                  const Icon = industryJumpIcons[s.id] ?? Megaphone;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-1.5 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2 text-xs font-semibold text-[var(--color-fg-muted)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                    >
                      <Icon className="size-3.5" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* BY INDUSTRY */}
      {tab === "industry" && (
        <>
          {sections.map((section, idx) => {
            const Icon = section.icon;
            const regularItems = section.solved.filter((a) => !a.isNew);
            const ctaItem = section.solved.find((a) => a.isNew);
            return (
              <section
                key={section.id}
                id={section.id}
                className="border border-[var(--color-border)] border-t-0 py-24 md:py-32"
                style={{ background: idx % 2 === 1 ? "var(--color-bg-elev)" : "var(--color-bg)" }}
              >
                <div className="container-x">
                  <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                    <Reveal>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex size-10 items-center justify-center border-2 border-[var(--color-brand)] text-[var(--color-brand)]">
                            <Icon className="size-5" />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                            {section.eyebrow}
                          </span>
                        </div>
                        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                          {section.headline}
                        </h2>
                        <p className="text-base leading-relaxed text-[var(--color-fg-muted)]">
                          {section.description}
                        </p>
                        <div className="mt-2 border-t border-[var(--color-border)] pt-6">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                            Common pain points we solve
                          </p>
                          <ul className="flex flex-col gap-3">
                            {section.painPoints.map((p) => (
                              <li key={p} className="flex items-start gap-3 text-sm text-[var(--color-fg-muted)]">
                                <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
                          >
                            Build custom AI for {section.label.toLowerCase()} <ArrowRight className="size-4" />
                          </Link>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                      <div className="overflow-hidden border border-[var(--color-border)]">
                        <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-elev)] px-5 py-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                            Problems already solved
                          </p>
                        </div>
                        {regularItems.map((a) => {
                          const ItemIcon = a.icon;
                          return (
                            <div
                              key={a.task}
                              className="flex gap-4 border-b border-[var(--color-border)] p-5 last:border-b-0 transition-colors hover:bg-[var(--color-bg-elev)]"
                            >
                              {ItemIcon && (
                                <ItemIcon className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                              )}
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-semibold text-[var(--color-fg)]">{a.task}</span>
                                <span className="text-sm text-[var(--color-fg-muted)]">{a.detail}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {ctaItem && (
                        <Link href="/contact" className="mt-3 block">
                          <div className="group flex items-start gap-4 border-2 border-dashed border-[var(--color-brand)] p-6 transition-all duration-200 hover:bg-[var(--color-brand)]">
                            <Sparkles className="mt-0.5 size-5 shrink-0 text-[var(--color-brand)] transition-colors group-hover:text-white" />
                            <div className="flex flex-col gap-1">
                              <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-brand)] transition-colors group-hover:text-white">
                                Your Problem Next?
                              </span>
                              <span className="text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-white/80">
                                {ctaItem.detail}
                              </span>
                              <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] transition-colors group-hover:text-white">
                                Book a free 30-min call <ArrowRight className="size-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      )}
                    </Reveal>
                  </div>
                </div>
              </section>
            );
          })}
        </>
      )}

      {/* BY SERVICE */}
      {tab === "service" && (
        <section className="border-t border-[var(--color-border)] py-24 md:py-32">
          <div className="container-x">
            <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] border border-[var(--color-border)] md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.slug} className="h-full">
                    <div className="flex h-full flex-col gap-4 bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--color-bg-elev)]">
                      <span className="inline-flex size-10 items-center justify-center border-2 border-[var(--color-brand)] text-[var(--color-brand)]">
                        <Icon className="size-5" />
                      </span>
                      <h2 className="font-display text-xl font-semibold tracking-tight">{service.title}</h2>
                      <p className="text-sm text-[var(--color-fg-muted)]">{service.tagline}</p>
                      <ul className="mt-2 flex flex-col gap-2">
                        {service.solution.slice(0, 3).map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-sm text-[var(--color-fg-muted)]">
                            <span className="mt-1.5 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services#${service.slug}`}
                        className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] hover:underline"
                      >
                        See full details <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
                >
                  Book a free 30-min call <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Bottom CTA — industry tab only */}
      {tab === "industry" && (
        <section className="py-24 md:py-32">
          <div className="container-x">
            <Reveal>
              <div className="flex flex-col items-center gap-6 border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)] p-10 text-center md:p-16">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                  Doesn&apos;t match your needs?
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                  Your problem is still <span className="text-[var(--color-brand)]">solvable.</span>
                </h2>
                <p className="max-w-xl text-base text-[var(--color-fg-muted)]">
                  Give us a call or fill the form. We build AI solutions to your exact problem, not generic tools dressed up for your industry.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
                >
                  Book a free 30-min call <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
