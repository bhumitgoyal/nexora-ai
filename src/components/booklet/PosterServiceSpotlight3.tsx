"use client";

import { motion } from "motion/react";
import { Workflow, LineChart } from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";
import { ServiceSpotlightCard } from "./ServiceSpotlightCard";

export function PosterServiceSpotlight3() {
  return (
    <Poster page="07 / 14" section="Spotlight · Operations">
      <PosterDecor
        grid
        orbs={[
          { tone: "accent", size: 340, className: "-top-28 right-1/4", animated: true },
          { tone: "fuchsia", size: 280, className: "bottom-12 -left-16", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 03 of 03 · Operations & revenue
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Custom agents for the
        <br />
        <span className="text-gradient">last-mile work no SaaS owns.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        The 30% of your workflows that no off-the-shelf product handles — wired
        across Slack, Notion, Sheets, Salesforce, and your internal APIs. Where
        your team&rsquo;s real leverage hides.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Workflow,
            tone: "brand",
            title: "Custom AI Workflows & Integrations",
            tagline: "Agentic systems wired into the tools you already pay for.",
            problem:
              "Off-the-shelf SaaS handles 70%. The last 30% — the part unique to your business — is where the leverage hides.",
            solution: [
              "Bespoke agents for ops, finance, recruiting, supply chain",
              "Tool-use across Slack, Notion, Sheets, Jira, Stripe + APIs",
              "Event-driven orchestration with retries + observability",
              "Built on your stack, owned by you — no vendor lock-in",
            ],
            tech: ["LangGraph", "Temporal", "n8n", "Supabase", "AWS"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: LineChart,
            tone: "accent",
            title: "Sales Operations Copilot",
            tagline: "Pipeline hygiene, forecasts, and deal intel — on autopilot.",
            problem:
              "Your CRM is a swamp. Reps don't log calls, forecasts are guesses, leadership learns deals slipped after they're gone.",
            solution: [
              "Auto-enrichment: notes, next steps, risk score, competitor context",
              "Conversation intelligence over Gong / Fathom / Fireflies",
              "AI forecasts with confidence intervals your CFO trusts",
              "Slack nudges the moment a deal goes stale",
            ],
            tech: ["Salesforce", "HubSpot", "Gong", "Claude", "Slack"],
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 grid grid-cols-4 gap-2"
      >
        {[
          { v: "1,800h", l: "ops time recovered annually per team" },
          { v: "94%", l: "forecast accuracy, up from 76%" },
          { v: "23%", l: "lift in win rate on stage-3+ deals" },
          { v: "$1.8M", l: "additional ARR closed in two quarters" },
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
