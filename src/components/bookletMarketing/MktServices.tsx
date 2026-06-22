"use client";

import { motion } from "motion/react";
import {
  LayoutDashboard,
  GitBranch,
  Repeat2,
  TrendingUp,
  Bot,
  Users,
} from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const services = [
  {
    no: "01",
    icon: LayoutDashboard,
    title: "White-Label Client Dashboards",
    tagline: "Live, branded dashboards pulling from Google Ads, Meta, GA4, and your CRM. Clients see real-time numbers without a single manual report.",
    accent: "brand" as const,
  },
  {
    no: "02",
    icon: GitBranch,
    title: "Workflow & Approval Automation",
    tagline: "Client onboarding, content approvals, campaign QA checklists, and status updates. We wire everything into Slack, Notion, and email so nothing waits on a human to notice.",
    accent: "accent" as const,
  },
  {
    no: "03",
    icon: Repeat2,
    title: "AI Content Repurposing Engine",
    tagline: "One long-form asset becomes 12 channel-ready cuts, from blog to social to webinar to email. Delivered in your client's brand voice, not a generic AI tone.",
    accent: "brand" as const,
  },
  {
    no: "04",
    icon: TrendingUp,
    title: "Campaign Analytics & Anomaly Alerts",
    tagline: "Plain-English Q-and-A on top of client ad accounts. It flags budget pacing issues, CPA spikes, and underperforming creatives before the client asks.",
    accent: "accent" as const,
  },
  {
    no: "05",
    icon: Bot,
    title: "White-Label Chatbots & Voice Agents",
    tagline: "Resell conversational AI and voice concierges to your own clients under your agency's brand. We build it, and you own the client relationship and the margin.",
    accent: "brand" as const,
  },
  {
    no: "06",
    icon: Users,
    title: "Internal Capacity & Margin Dashboard",
    tagline: "See which accounts are over-serviced before the client does. View hours logged vs. retainer value, scope creep flags, and team utilization in one view.",
    accent: "accent" as const,
  },
];

export function MktServices() {
  return (
    <Poster page="03 / 08" section="Services">
      <PosterDecor
        grid
        orbs={[
          { tone: "accent", size: 340, className: "-top-24 -right-20", animated: true },
          { tone: "brand", size: 280, className: "bottom-20 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Services
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[42px] leading-[1.05]"
      >
        Six builds we ship often.{" "}
        <span className="text-gradient">Not the only six</span>
        <br />
        we build.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Every service below is a production system we&rsquo;ve actually shipped for an agency, not
        a pilot or a concept deck. They&rsquo;re listed because they&rsquo;re common requests,
        not because they&rsquo;re the only ones we take on.
      </motion.p>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isBrand = s.accent === "brand";
          const accentColor = isBrand
            ? "text-[var(--color-brand-strong)]"
            : "text-[var(--color-accent-strong)]";
          const accentBg = isBrand
            ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]";
          return (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.45 }}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-3.5"
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-9 place-items-center rounded-lg border border-[var(--color-border-strong)] ${accentBg}`}>
                  <Icon className={`size-4 ${accentColor}`} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                  {s.no}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[12.5px] font-semibold leading-tight tracking-tight text-[var(--color-fg)]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[10px] leading-[1.45] text-[var(--color-fg-muted)]">
                {s.tagline}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 rounded-xl border border-dashed border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))] px-5 py-4"
      >
        <p className="text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)] italic">
          Running into something that doesn&rsquo;t match this list? That&rsquo;s usually the most
          valuable kind of build: something specific to how your agency actually works. Tell us
          what&rsquo;s broken and we&rsquo;ll scope it for free before you commit to anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-4"
      >
        <p className="font-display text-[14px] tracking-tight text-[var(--color-fg)]">
          The next two pages go deep on the four builds agencies ask for first.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          → pages 04–05
        </span>
      </motion.div>
    </Poster>
  );
}
