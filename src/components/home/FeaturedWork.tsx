"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mic, Bot, Megaphone, Truck, Target, Search } from "lucide-react";
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
    headline: "AI Voice Agent That Handles Inbound Calls & Instantly Follows Up New Leads",
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
    headline: "AI Assistant Built For India's Senior Citizen Community",
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
    client: "Marketing Agencies",
    industry: "Marketing & Media",
    headline: "Launch Complete Marketing Campaigns From A Single Input",
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
    headline: "Real-Time Delivery Operations Without Endless Phone Calls",
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
    client: "Multi-Client Deployment",
    industry: "B2B SaaS & Agencies",
    headline: "Fully Automated Lead Generation & Outreach Engine",
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
      { metric: "$0.11", label: "average cost per verified lead" },
    ],
    gradient: "from-cyan-500/25 via-fuchsia-500/20 to-violet-500/25",
  },
  {
    no: "06",
    client: "SBA.gov Research Workflow",
    industry: "Government & SMB Data",
    headline: "Automated Discovery Of Hard-To-Find U.S. SMBs",
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
