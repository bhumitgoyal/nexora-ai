"use client";

import { motion } from "motion/react";
import { Radar, Megaphone } from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";
import { ServiceSpotlightCard } from "./ServiceSpotlightCard";

export function PosterServiceSpotlight2() {
  return (
    <Poster page="06 / 14" section="Spotlight · Pipeline">
      <PosterDecor
        grid
        orbs={[
          { tone: "fuchsia", size: 320, className: "-top-24 -left-20", animated: true },
          { tone: "brand", size: 300, className: "bottom-16 right-10", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 02 of 03 · Growth engines
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Pipeline on tap.
        <br />
        <span className="text-gradient">Campaigns on autopilot.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds that turn your go-to-market motion from manual & expensive
        into compounding & cheap: verified leads at pennies, and campaigns that
        write, test, and optimize themselves.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Radar,
            tone: "brand",
            title: "AI Lead Generation",
            tagline: "Pipeline on tap enriched, verified, ready to close.",
            problem:
              "Buying lists is a graveyard. Manual prospecting is the most expensive way to fill a CRM with bounces.",
            solution: [
              "Targeted LinkedIn scraping aligned to your ICP signals",
              "Multi-source enrichment (firmographics, tech stack, hiring intent)",
              "Cascaded email verification across providers pay pennies",
              "Personalized first-touch openers per lead",
            ],
            tech: ["Apollo", "Apify", "Clearbit", "NeverBounce", "OpenAI"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Megaphone,
            tone: "accent",
            title: "AI Marketing Automation",
            tagline: "Campaigns that write, test, and optimize themselves.",
            problem:
              "Your team spends 80% of the week on busywork drafts, replies, repurposing and 20% on the strategy that actually moves the needle.",
            solution: [
              "Full campaign generation: copy, subject lines, LPs, follow-ups",
              "AI reply triage that drafts, sends, or queues for review",
              "Repurposing: one long-form → 12 channel-ready cuts",
              "Continuous A/B/n testing with auto-promotion of winners",
            ],
            tech: ["n8n", "Make", "Instantly", "Smartlead", "Claude"],
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
          { v: "94%", l: "lower lead cost vs. manual research" },
          { v: "2.4%", l: "bounce rate across 480k+ verified" },
          { v: "80%", l: "reduction in campaign setup time" },
          { v: "3.1×", l: "lift in positive reply rate" },
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
