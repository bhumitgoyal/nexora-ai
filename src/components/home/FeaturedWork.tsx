"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, Mic, Bot, Megaphone, Truck, Target, Search, Boxes, FileText, Send } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Tilt } from "@/components/fx/Tilt";

type WorkItem = {
  no: string;
  client: string;
  industry: string;
  headline: string;
  highlights: string[];
  impact: { metric: string; label: string }[];
  href: string;
  icon: React.ElementType;
  openSource?: boolean;
};

const workItems: WorkItem[] = [
  {
    no: "01",
    href: "/work/southwest-gases-voice-concierge",
    client: "Southwest Gases",
    industry: "Energy & Utilities",
    headline: "Every inbound call answered in <60s · every new lead followed up in <5 min",
    icon: Mic,
    highlights: [
      "Answers inbound calls 24/7, first ring every time",
      "Auto-calls new leads within seconds of enquiry",
      "Captures and structures every lead's data automatically",
      "Logs call summaries no manual note entry needed",
    ],
    impact: [
      { metric: "<60s", label: "follow-up time (was ~4 hours)" },
      { metric: "100%", label: "follow-up consistency" },
      { metric: "0", label: "manual call notes entered" },
    ],
  },
  {
    no: "02",
    href: "/work/gohappy-club-member-assistant",
    client: "GoHappy Club",
    industry: "Senior Wellness · D2C",
    headline: "92% of queries self-served in 6 languages · LLM cost down ~60%",
    icon: Bot,
    highlights: [
      "Understands Hinglish and 5 other Indian languages",
      "Smart semantic caching for sub-50ms repeat responses",
      "Human escalation when genuinely uncertain",
      "Auto-filters spam and forwarded content",
    ],
    impact: [
      { metric: "70%+", label: "cache hit rate" },
      { metric: "~60%", label: "lower LLM inference cost" },
      { metric: "<50ms", label: "response time on cached queries" },
    ],
  },
  {
    no: "03",
    href: "/work/ai-marketing-campaign-orchestrator",
    client: "Marketrz Agency",
    industry: "Marketing & Media",
    headline: "Full campaign kit in <15 min · down from 2 days, across 6+ channels",
    icon: Megaphone,
    highlights: [
      "Generates ad copy across all major platforms",
      "Creates personalised customer email sequences",
      "Produces WhatsApp broadcast campaigns",
      "Generates push notification variants with A/B splits",
    ],
    impact: [
      { metric: "<15 min", label: "campaign creation (was ~2 days)" },
      { metric: "6+", label: "channels covered from one brief" },
      { metric: "100%", label: "consistent brand voice, every time" },
    ],
  },
  {
    no: "04",
    href: "/work/southwest-gases-delivery-schedule",
    client: "Southwest Gases",
    industry: "Energy & Utilities",
    headline: "Zero daily ops calls · 100% route visibility, full audit trail",
    icon: Truck,
    highlights: [
      "Manage all delivery routes from one central portal",
      "Push live status updates to drivers instantly",
      "Weekly delivery performance summaries auto-generated",
      "Full operational change history and audit trail",
    ],
    impact: [
      { metric: "0", label: "daily ops coordination calls needed" },
      { metric: "100%", label: "route visibility in real time" },
      { metric: "Full", label: "audit trail of every change made" },
    ],
  },
  {
    no: "05",
    href: "/work/southwest-gases-erp",
    client: "Southwest Gases",
    industry: "Energy & Utilities",
    headline: "Month-end from days to minutes · every invoice reconciled to QuickBooks on its own",
    icon: Boxes,
    highlights: [
      "Runs order entry, deliveries, cylinder rents, and invoicing in one system",
      "Invoices build themselves on delivery and sync straight to QuickBooks",
      "Drivers see documents with no price, rate, or balance anywhere",
      "Nightly jobs pull payment status and reconcile any failed sync",
    ],
    impact: [
      { metric: "Days → min", label: "month-end invoicing and reconciliation" },
      { metric: "0", label: "prices or balances shown to any driver" },
      { metric: "100%", label: "of invoices reconciled to QuickBooks" },
    ],
  },
  {
    no: "06",
    href: "/work/linkedin-lead-intelligence-engine",
    client: "Multi-Client Deployment",
    industry: "B2B SaaS & Agencies",
    headline: "100% automated top-of-funnel · near-zero marginal lead cost, zero manual research",
    icon: Target,
    highlights: [
      "Finds and qualifies leads without human input",
      "Enriches each prospect with contextual data",
      "Sends personalised outreach at scale",
      "AI voice agents follow up hot leads automatically",
    ],
    impact: [
      { metric: "100%", label: "automated top-of-funnel prospecting" },
      { metric: "Zero", label: "manual prospect research hours" },
      { metric: "94%", label: "lower lead cost vs. prior vendors" },
    ],
  },
  {
    no: "07",
    href: "/work",
    client: "SBA.gov Research Workflow",
    industry: "Government & SMB Data",
    headline: "1,000s of hidden SMBs found per run · hours of research collapsed to minutes",
    icon: Search,
    highlights: [
      "Scrapes SBA listings for registered small businesses",
      "Surfaces hidden businesses not indexed by Google",
      "Extracts websites, socials, and contact details",
      "Outputs clean, structured, ready-to-use lead lists",
    ],
    impact: [
      { metric: "Hours → min", label: "research time per batch" },
      { metric: "1000s", label: "of SMBs found per automated run" },
      { metric: "$0", label: "recurring tool or data cost" },
    ],
    openSource: true,
  },
  {
    no: "08",
    href: "/work/adfactors-pr-wire-booking",
    client: "Adfactors PR",
    industry: "PR & Communications",
    headline: "178 wire rate cards to a client-ready PDF quote in minutes, not hours",
    icon: FileText,
    highlights: [
      "One live catalogue of every domestic and international wire",
      "Single-window builder that prices a request as you go",
      "Client-ready PDF quotes generated in the browser",
      "Admin console for Partnerships to edit any rate live",
    ],
    impact: [
      { metric: "178", label: "rate cards unified into one catalogue" },
      { metric: "Minutes", label: "to a client-ready quote, was hours" },
      { metric: "1", label: "source of truth, edited in real time" },
    ],
  },
  {
    no: "09",
    href: "/work/nuvero-outreach-engine",
    client: "Nuvero AI",
    industry: "Sales & Outreach",
    headline: "A full outreach pipeline reviewed in ~10 minutes a day, with a human gating every send",
    icon: Send,
    highlights: [
      "Discovers, dedupes, and scores leads before you look",
      "Resolves contacts with provenance and a confidence score",
      "Drafts each email under strict no-invented-facts guards",
      "Throttled, capped sending to protect the domain",
    ],
    impact: [
      { metric: "~10 min", label: "daily review to run the pipeline" },
      { metric: "0", label: "emails sent without human approval" },
      { metric: "100%", label: "of contacts carry provenance" },
    ],
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={item.href}
      data-cursor="Open"
      className="group relative flex h-full w-[min(340px,82vw)] shrink-0 snap-start flex-col overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--color-brand)] hover:shadow-[var(--shadow-hard-brand)]"
    >
      <div className="relative h-[110px] overflow-hidden bg-[var(--color-brand)]">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
          <div>
            <span className="eyebrow text-white">{item.industry}</span>
            <div className="mt-0.5 font-display text-base font-semibold text-white">{item.client}</div>
          </div>
          <span className="font-mono text-xs font-semibold text-white">{item.no}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex items-start gap-2.5">
          <item.icon aria-hidden className="mt-0.5 size-4 shrink-0 text-[var(--color-brand)]" />
          <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-[var(--color-fg)]">
            {item.headline}
          </h3>
        </div>

        {/* the numbers are the story — big, three of them, one line each */}
        <dl className="mt-auto flex flex-col border-t-2 border-[var(--color-border)]">
          {item.impact.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-4 border-b border-[var(--color-border)]/25 py-3 last:border-b-0">
              <dt className="text-callout text-[var(--color-fg-muted)]">{r.label}</dt>
              <dd className="shrink-0 font-display text-2xl font-bold tabular-nums leading-none text-[var(--color-brand)]">{r.metric}</dd>
            </div>
          ))}
        </dl>
        <span className="eyebrow inline-flex items-center gap-1 text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">
          Read the deployment <ArrowUpRight aria-hidden className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}

// A rail the reader drives — no auto-scroll (HIG: no time-limited UI; show
// partial content at the edge so it's obvious there's more).
export function FeaturedWork() {
  const railRef = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = railRef.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };
  useEffect(update, []);

  const page = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <section aria-labelledby="featured-work-title" className="section-y relative border-t border-[var(--color-border)]">
      <div className="container-x mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="featured-work-title"
          align="left"
          eyebrow="Deployments"
          title="Systems we've shipped that moved real business metrics."
          subtitle="Every deployment starts with a number. Here is where it landed."
        />
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => page(-1)} disabled={edge.start} aria-label="Previous deployments" className="press inline-flex size-12 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-hard-sm)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-40">
            <ArrowLeft className="size-5" />
          </button>
          <button type="button" onClick={() => page(1)} disabled={edge.end} aria-label="Next deployments" className="press inline-flex size-12 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-hard-sm)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-40">
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <ul
        ref={railRef}
        data-cursor="Drag"
        onScroll={update}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-px-6 px-6 pb-3 md:scroll-px-10 md:px-10 xl:scroll-px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
      >
        {workItems.map((item) => (
          <li key={item.no} className="flex">
            <Tilt className="flex">
              <WorkCard item={item} />
            </Tilt>
          </li>
        ))}
      </ul>

      <div className="container-x mt-10 flex">
        <Link
          href="/work"
          className="press inline-flex min-h-12 items-center gap-2 border-2 border-[var(--color-border)] px-6 text-callout font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
        >
          All deployments
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
