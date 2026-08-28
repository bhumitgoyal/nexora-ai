"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mic, Bot, Megaphone, Truck, Target, Search, Boxes, FileText, Send } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Marquee } from "@/components/shared/Marquee";

type WorkItem = {
  no: string;
  client: string;
  industry: string;
  headline: string;
  highlights: string[];
  impact: { metric: string; label: string }[];
  gradient: string;
  icon: React.ElementType;
  openSource?: boolean;
};

const workItems: WorkItem[] = [
  {
    no: "01",
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
    gradient: "from-violet-500/35 via-fuchsia-500/20 to-cyan-500/25",
  },
  {
    no: "02",
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
    gradient: "from-cyan-500/35 via-teal-500/20 to-violet-500/25",
  },
  {
    no: "03",
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
    gradient: "from-violet-500/30 via-cyan-500/20 to-fuchsia-500/25",
  },
  {
    no: "04",
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
    gradient: "from-fuchsia-500/25 via-violet-500/20 to-cyan-500/20",
  },
  {
    no: "05",
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
    gradient: "from-violet-500/30 via-cyan-500/20 to-fuchsia-500/25",
  },
  {
    no: "06",
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
    gradient: "from-cyan-500/25 via-fuchsia-500/20 to-violet-500/25",
  },
  {
    no: "07",
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
    gradient: "from-teal-500/30 via-cyan-500/20 to-violet-500/20",
    openSource: true,
  },
  {
    no: "08",
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
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-cyan-500/25",
  },
  {
    no: "09",
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
    gradient: "from-cyan-500/30 via-teal-500/20 to-violet-500/25",
  },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="relative flex w-[340px] h-[430px] shrink-0 flex-col overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-elev)] transition-colors hover:border-[var(--color-brand)] cursor-pointer select-none">
      <div className="relative h-[110px] overflow-hidden bg-[var(--color-brand)]">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">
              {item.industry}
            </span>
            <div className="mt-0.5 font-display text-sm font-semibold text-white">
              {item.client}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] font-semibold text-white/60">
              {item.no}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 overflow-hidden">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">
            <item.icon className="size-4" />
          </span>
          <p className="font-display text-base font-semibold leading-snug tracking-tight text-[var(--color-fg)]">
            {item.headline}
          </p>
        </div>

        <ul className="flex flex-col gap-2 border-t border-[var(--color-border)] pt-4">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[12px] leading-snug text-[var(--color-fg-muted)]">
              <span className="mt-1.5 size-1 shrink-0 bg-[var(--color-brand)]" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-[var(--color-border)] pt-4">
          {item.impact.map((r) => (
            <div key={r.label} className="flex flex-col gap-0.5">
              <span className="font-display text-base font-semibold leading-none text-[var(--color-brand)]">
                {r.metric}
              </span>
              <span className="text-[9.5px] leading-tight text-[var(--color-fg-subtle)]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (carouselRef.current && !carouselRef.current.contains(e.target as Node)) {
        setPaused(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x mb-12">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems we've shipped that moved real business metrics."
          subtitle="Every engagement starts with a number we're trying to move and ends with the proof we moved it."
        />
      </div>

      <div ref={carouselRef} onClick={() => setPaused(true)}>
        <Marquee pauseOnHover={false} paused={paused}>
          {workItems.map((item) => (
            <WorkCard key={item.no} item={item} />
          ))}
        </Marquee>
      </div>

      {paused && (
        <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
          Paused click outside to resume
        </p>
      )}

      <div className="mt-10 flex justify-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
        >
          See our work
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
