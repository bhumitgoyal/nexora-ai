import type { Metadata } from "next";
import Link from "next/link";
import { Factory, Megaphone, ShoppingBag, Utensils, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "Custom AI automation built for marketing agencies, e-commerce brands, manufacturers, and restaurants. Problem-specific AI tools that actually fit your workflow.",
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
      { task: "Unified AI Reporting Engine", detail: "Connects to all your ad platforms, generates branded client reports on schedule, and flags anomalies in plain English — automatically." },
      { task: "AI SEO Engine", detail: "Mines keyword gaps, generates content briefs, creates programmatic pages, and monitors rankings — turning SEO from a sprint into a compounding loop." },
      { task: "AI Ad Campaign Optimizer", detail: "Monitors performance every few hours, auto-rotates fatigued creatives, reallocates budget to top performers, and sends a daily Slack summary." },
      { task: "AI Onboarding Agent", detail: "Handles new client intake from first email to structured brief — forms, asset collection, async Q&A — all without a single manual email." },
      { task: "Client Outreach Automation", detail: "Find and reach clients with personalized messages automatically — without pressing a single button. Built on your ICP with CRM integration." },
      { task: "Your problem next", detail: "We build custom AI solutions for the specific delivery bottlenecks inside your agency — not template tools repackaged for marketing.", isNew: true },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce Brands",
    eyebrow: "For Shopify stores, DTC brands & Amazon sellers",
    headline: "More revenue. Less manual work.",
    description:
      "E-commerce brands leave significant revenue on the table through abandoned carts, slow follow-ups, and manual ops that don't scale. We build AI automation that works while you sleep — compounding revenue, improving customer experience, and cutting operational overhead.",
    painPoints: [
      "Abandoned carts never getting a timely, personalized follow-up",
      "Instagram comments going unanswered and harming brand perception",
      "Order confirmations and support taking up team bandwidth",
      "Leads captured but never properly qualified or nurtured",
      "Customer questions going unanswered outside business hours",
    ],
    solved: [
      { task: "Workflow Automation", detail: "Build custom AI workflows that complete repetitive work for you — order processing, CRM updates, inventory alerts — without manual intervention." },
      { task: "Cart Recovery Automation", detail: "Don't let visitors forget what they were about to buy. Automatically send personalized reminders featuring the exact products they viewed." },
      { task: "Instagram Comment Automation", detail: "Reply instantly to Instagram comments that would otherwise go unnoticed, using your brand's unique tone of voice — within seconds of posting." },
      { task: "Confirmation Call Automation", detail: "Automated voice calls for order confirmations, delivery updates, and follow-ups — placed within minutes, fully personalized to each customer." },
      { task: "Personalized AI Chatbot", detail: "24/7 support trained on your product catalog and brand tone. Converts browsers into buyers, handles support tickets, and escalates to humans seamlessly." },
      { task: "Lead Generation System", detail: "Automated lead capture, qualification, and CRM enrichment — conversion-focused from day one. High-intent leads are surfaced to your team immediately." },
      { task: "Your problem next", detail: "Every e-commerce brand is different. We build personalized AI tools around your specific revenue and ops challenges.", isNew: true },
    ],
  },
  {
    id: "manufacturers",
    icon: Factory,
    label: "Manufacturers",
    eyebrow: "For the production floor",
    headline: "Stop losing time to admin. Start running a tighter operation.",
    description:
      "Manufacturing businesses bleed time on repetitive back-office tasks — chasing suppliers, updating inventory spreadsheets, sending status emails, and manually generating reports. We build personalized AI solutions that handle all of it so your team stays focused on what they're actually good at: making things.",
    painPoints: [
      "Hours lost chasing supplier responses",
      "Inventory errors from manual spreadsheet updates",
      "Delayed production reports holding up decisions",
      "Missed maintenance windows causing downtime",
      "Vendor communication falling through the cracks",
    ],
    solved: [
      { task: "AI Inventory Reconciliation Agent", detail: "Cross-references POs, GRNs, and stock counts in real time. Flags discrepancies and auto-triggers reorder alerts without manual effort." },
      { task: "AI SOP / Internal Knowledge Copilot", detail: "Indexes all your SOPs, safety manuals, and training docs into a searchable AI brain. Workers get accurate, cited answers in plain English — instantly." },
      { task: "Production & Quality Reports", detail: "Automatically pulls production line data, calculates yield and defect KPIs, and distributes formatted reports at the end of every shift." },
      { task: "Maintenance Scheduling", detail: "Predicts service needs from equipment usage and history, generates a forward-looking maintenance calendar, and alerts the right technician before breakdowns occur." },
      { task: "Vendor Communication Logs", detail: "Monitors supplier emails and messages, extracts commitments and action items, and surfaces overdue responses with daily alerts." },
      { task: "Your problem next", detail: "We build custom AI tools to fit your exact manufacturing workflow — not generic software rebranded for the factory floor.", isNew: true },
    ],
  },
  {
    id: "restaurants",
    icon: Utensils,
    label: "Restaurants",
    eyebrow: "For restaurant operations",
    headline: "Cut waste. Fill covers. Run smoother.",
    description:
      "Restaurants face a unique combination of operational, financial, and marketing challenges — often with lean teams. We build problem-specific AI systems that handle scheduling, reconciliation, forecasting, and marketing so you can focus on the food and the guest experience.",
    painPoints: [
      "Quiet covers during slow periods eating into margins",
      "Manual POS reconciliation taking hours each night",
      "Negative reviews spotted too late to fix the root cause",
      "Overstaffing and understaffing on unpredictable shifts",
      "Food waste from inaccurate prep planning",
    ],
    solved: [
      { task: "AI Marketing Automation", detail: "Identifies slow periods and sends personalized promotions to the right guest segments via email or SMS — automatically, based on visit history." },
      { task: "Reconciliation Agent", detail: "Reconciles POS, payment gateways, and delivery platforms daily and flags discrepancies before your accountant notices." },
      { task: "Review & Feedback Mining Agent", detail: "Monitors all review platforms in real time, categorizes sentiment, surfaces recurring themes, and drafts manager responses for one-click approval." },
      { task: "AI Staff Scheduling Agent", detail: "Analyzes footfall patterns, bookings, and local events to generate optimal shift schedules — cutting labor costs without leaving a shift short." },
      { task: "Demand Forecasting Model", detail: "Predicts daily covers and dish demand using historical data, weather, and events. Your kitchen gets a daily prep guide to cut waste and prep smarter." },
      { task: "Reservation & Table Optimization Agent", detail: "Consolidates all booking platforms, assigns tables to maximize capacity, sends automated reminders to cut no-shows, and manages the waitlist." },
      { task: "Your problem next", detail: "Every restaurant is different. We build custom AI tools around your specific operation — not generic hospitality software.", isNew: true },
    ],
  },
];

export default function WhatWeOfferPage() {
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
              We don't do generic AI. We go deep on your industry, understand your exact
              workflow, and build personalized AI solutions around the specific pain points
              that are costing you the most revenue and time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
              >
                Get a custom AI solution <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                See all services
              </Link>
            </div>
          </Reveal>

          {/* Quick jump nav */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-2">
              {sections.map((s) => {
                const Icon = s.icon;
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
        </div>
      </section>

      {sections.map((section, idx) => {
        const Icon = section.icon;
        const regularItems = section.solved.filter((a) => !a.isNew);
        const ctaItem = section.solved.find((a) => a.isNew);
        return (
          <section
            key={section.id}
            id={section.id}
            className="border-b border-[var(--color-border)] py-24 md:py-32"
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
                  <div className="flex flex-col gap-0">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                      Problems already solved
                    </p>
                    {regularItems.map((a) => (
                      <div
                        key={a.task}
                        className="flex gap-4 border border-[var(--color-border)] border-b-0 p-5 last:border-b transition-all hover:bg-[var(--color-bg-elev)] hover:border-[var(--color-brand)]"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--color-brand)]" />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-[var(--color-fg)]">{a.task}</span>
                          <span className="text-sm text-[var(--color-fg-muted)]">{a.detail}</span>
                        </div>
                      </div>
                    ))}

                    {/* Your Problem Next — primary CTA row */}
                    {ctaItem && (
                      <Link href="/contact" className="block">
                        <div className="group mt-3 flex items-start gap-4 border-2 border-dashed border-[var(--color-brand)] p-6 transition-all duration-200 hover:bg-[var(--color-brand)]">
                          <Sparkles className="mt-0.5 size-5 shrink-0 text-[var(--color-brand)] transition-colors group-hover:text-white" />
                          <div className="flex flex-col gap-1">
                            <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-brand)] transition-colors group-hover:text-white">
                              Your Problem Next?
                            </span>
                            <span className="text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-white/80">
                              {ctaItem.detail}
                            </span>
                            <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] transition-colors group-hover:text-white">
                              Describe your problem <ArrowRight className="size-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center gap-6 border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)] p-10 text-center md:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                Doesn't match your needs?
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Your problem is still <span className="text-[var(--color-brand)]">solvable.</span>
              </h2>
              <p className="max-w-xl text-base text-[var(--color-fg-muted)]">
                Give us a call or fill the form — we build personalized AI solutions to your
                exact problem, not generic tools dressed up for your industry. Your needs
                will surely be matched.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
              >
                Describe your problem <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
