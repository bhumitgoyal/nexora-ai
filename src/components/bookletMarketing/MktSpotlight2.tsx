"use client";

import { motion } from "motion/react";
import { Repeat2, Bot } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function MktSpotlight2() {
  return (
    <Poster page="05 / 08" section="Spotlight · Content & Resell">
      <PosterDecor
        grid
        orbs={[
          { tone: "fuchsia", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "accent", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 02 of 02 · Content &amp; Resell
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        10× the output.
        <br />
        <span className="text-gradient">A new revenue line,</span>{" "}
        <span className="text-[var(--color-fg-muted)]">not just a cost cut.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds that turn automation into new margin: a content engine that multiplies your
        team&rsquo;s output, and white-label AI products you can resell to your own client base.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Repeat2,
            tone: "brand",
            title: "AI Content Repurposing Engine",
            tagline: "One asset becomes 12 channel-ready cuts, all in your client's brand voice.",
            problem:
              "Your content team writes one great long-form piece and then spends three more days manually cutting it into social posts, emails, and ad copy, using a brand voice that has to be re-learned every time.",
            solution: [
              "One asset automatically becomes 12 channel-ready cuts",
              "Brand-voice training per client, not generic AI tone",
              "Editorial guardrails + fact-check pass before publishing",
              "Plugs into your existing CMS, Buffer, or scheduling tool",
            ],
            tech: ["Claude", "Notion", "Buffer", "Webflow"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Bot,
            tone: "accent",
            title: "White-Label Chatbots & Voice Agents",
            tagline: "Your agency's brand. Your client's problem solved. Your margin.",
            problem:
              "Your clients are asking you for \"AI stuff\" and you're either turning down the work or reselling a generic SaaS tool that doesn't actually solve their problem.",
            solution: [
              "Custom chatbots and voice agents built for your client's business",
              "Shipped under your agency's brand. You own the client relationship",
              "You set the markup. We handle the build and the maintenance",
              "Turns a one-off project into a recurring retainer line",
            ],
            tech: ["VAPI", "LangChain", "WhatsApp Cloud API", "Claude"],
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
          { v: "10×", l: "increase in monthly content output, same team size" },
          { v: "New", l: "recurring revenue line from AI services resold to clients" },
          { v: "0 drop", l: "in client NPS when content shifted to AI-assisted" },
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
