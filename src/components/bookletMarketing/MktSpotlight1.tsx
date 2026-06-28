"use client";

import { motion } from "motion/react";
import { LayoutDashboard, GitBranch } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function MktSpotlight1() {
  return (
    <Poster page="04 / 08" section="Spotlight · Reporting & Ops">
      <PosterDecor
        grid
        orbs={[
          { tone: "accent", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "brand", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 01 of 02 · Reporting &amp; Ops
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Stop building reports.
        <br />
        <span className="text-gradient">Start shipping dashboards.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds for any agency still assembling client reports by hand: a live branded
        dashboard, and an automation layer underneath your account management workflow.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: LayoutDashboard,
            tone: "brand",
            title: "White-Label Client Dashboards",
            tagline: "Live data from every ad platform in one branded view, auto-refreshed and never stale.",
            problem:
              "Account managers spend hours every week pulling numbers into slide decks that are stale the moment they're sent, and clients ask the same \"how are we doing\" question anyway.",
            solution: [
              "Live data from Google Ads, Meta, GA4, CRM in one branded view",
              "Auto-refreshed. No one touches a spreadsheet to update it",
              "AI-written weekly summary in plain English, not just charts",
              "Shipped under your agency's branding, not ours",
            ],
            tech: ["Looker Studio", "Supabase", "Claude", "Google Ads API"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: GitBranch,
            tone: "accent",
            title: "Workflow & Approval Automation",
            tagline: "Onboarding, sign-offs, and QA that trigger themselves, not a PM chasing Slack.",
            problem:
              "Client onboarding, content sign-offs, and campaign QA all currently run through someone's memory and a shared inbox. That is exactly where things get missed.",
            solution: [
              "Onboarding checklists that trigger themselves, not a PM",
              "Content approval flows wired into Slack, Notion, or email",
              "Campaign QA checks before anything goes live",
              "Status visibility for clients without a status-update call",
            ],
            tech: ["N8N", "Slack", "Notion API", "Temporal"],
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 grid grid-cols-3 gap-2"
      >
        {[
          { v: "80%", l: "reduction in time spent assembling client reports" },
          { v: "1,800h", l: "annual ops time recovered per account team" },
          { v: "Zero", l: "manual touch needed to keep dashboards current" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-3"
          >
            <div className="text-gradient-brand font-display text-[22px] font-semibold leading-none tracking-tight">
              {m.v}
            </div>
            <div className="mt-1.5 text-[9.5px] leading-tight text-[var(--color-fg-muted)]">
              {m.l}
            </div>
          </div>
        ))}
      </motion.div>
    </Poster>
  );
}
