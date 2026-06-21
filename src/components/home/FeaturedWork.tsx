"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate, type PanInfo } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, ExternalLink, Mic, Bot, Megaphone, Truck, Target, Search } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const CARD_GAP = 20;
const CARD_CLASSES = "w-[280px] sm:w-[320px] md:w-[360px]";

type WorkItem = {
  no: string;
  client: string;
  industry: string;
  headline: string;
  highlights: string[];
  impact: { metric: string; label: string }[];
  gradient: string;
  icon: React.ElementType;
  badge?: string;
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
      "Logs call summaries — no manual note entry needed",
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

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * index, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex shrink-0 flex-col overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-elev)] transition-colors hover:border-[var(--color-brand)] ${CARD_CLASSES}`}
    >
      {/* Gradient banner */}
      <div className={`relative h-[110px] bg-gradient-to-br ${item.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elev)]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]/80">
              {item.industry}
            </span>
            <div className="mt-0.5 font-display text-sm font-semibold text-[var(--color-fg)]">
              {item.client}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {item.openSource && (
              <span className="inline-flex items-center gap-1 border border-[var(--color-accent)] bg-[var(--color-bg-elev)] px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                <ExternalLink className="size-2.5" />
                Open Source
              </span>
            )}
            <span className="font-mono text-[10px] font-semibold text-[var(--color-fg-muted)]/60">
              {item.no}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">
            <item.icon className="size-4" />
          </span>
          <p className="font-display text-[15px] font-semibold leading-snug tracking-tight text-[var(--color-fg)]">
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

        {/* Impact stats */}
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
    </motion.div>
  );
}

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [leftBound, setLeftBound] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardStride, setCardStride] = useState(300);

  const updateBounds = useCallback(() => {
    if (trackRef.current && containerRef.current) {
      const firstCard = trackRef.current.children[0] as HTMLElement | null;
      const measuredWidth = firstCard ? firstCard.offsetWidth : 280;
      const stride = measuredWidth + CARD_GAP;
      setCardStride(stride);
      const trackW = trackRef.current.scrollWidth;
      const containerW = containerRef.current.offsetWidth;
      setLeftBound(Math.min(0, -(trackW - containerW)));
    }
  }, []);

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [updateBounds]);

  const snapToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(workItems.length - 1, index));
    const target = Math.max(leftBound, -(clamped * cardStride));
    animate(x, target, { type: "spring", stiffness: 380, damping: 42 });
    setActiveIndex(clamped);
  }, [leftBound, x, cardStride]);

  const handleDragEnd = useCallback((_: unknown, info: PanInfo) => {
    const currentX = x.get();
    const velocitySnap = info.velocity.x < -200
      ? Math.ceil(-currentX / cardStride)
      : info.velocity.x > 200
      ? Math.floor(-currentX / cardStride)
      : Math.round(-currentX / cardStride);
    snapToIndex(velocitySnap);
  }, [x, snapToIndex, cardStride]);

  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Selected work"
            title="Systems we've shipped that moved real business metrics."
            subtitle="Every engagement starts with a number we're trying to move — and ends with the proof we moved it."
          />
          <div className="hidden shrink-0 items-center gap-1.5 self-end pb-1 sm:flex">
            <button
              onClick={() => snapToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="inline-flex size-9 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => snapToIndex(activeIndex + 1)}
              disabled={activeIndex >= workItems.length - 1}
              aria-label="Next project"
              className="inline-flex size-9 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div ref={containerRef} className="mt-12 overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: leftBound, right: 0 }}
            dragElastic={0.04}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            style={{ x, gap: `${CARD_GAP}px` }}
            className="flex cursor-grab select-none active:cursor-grabbing"
          >
            {workItems.map((item, i) => (
              <WorkCard key={item.no} item={item} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {workItems.map((_, i) => (
              <button
                key={i}
                onClick={() => snapToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  i === activeIndex
                    ? "w-5 bg-[var(--color-brand)]"
                    : "w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-fg-muted)]"
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <button
              onClick={() => snapToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="inline-flex size-8 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] disabled:opacity-30"
            >
              <ArrowLeft className="size-3.5" />
            </button>
            <button
              onClick={() => snapToIndex(activeIndex + 1)}
              disabled={activeIndex >= workItems.length - 1}
              aria-label="Next project"
              className="inline-flex size-8 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-muted)] disabled:opacity-30"
            >
              <ArrowRight className="size-3.5" />
            </button>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-fg-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
          >
            See all case studies <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
