"use client";

import { motion } from "motion/react";
import { Bot, Sparkles } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function D2CSpotlight1() {
  return (
    <Poster page="04 / 08" section="Spotlight · Discovery & Styling">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "accent", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 01 of 02 · Discovery &amp; Styling
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        A chatbot that knows your catalog
        <br />
        <span className="text-gradient">better than your staff.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds for any brand where customers ask questions before they buy: a brand-aware
        assistant that remembers every customer, and an AI stylist that recommends from your
        actual catalog.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Bot,
            tone: "brand",
            title: "Brand-Aware Customer Chatbot",
            tagline: "WhatsApp + web + in-app on one unified brain that never forgets a customer.",
            problem:
              "Generic bots give generic answers. A customer asks about a past order or a specific fabric and the bot has no memory, no context — bounces them to a human.",
            solution: [
              "WhatsApp + web + in-app on one unified brand voice, not a generic script",
              "Per-customer memory: past orders, sizes, and preferences",
              "Tone-matched to your default brand voice",
              "Smart escalation to a human for refunds, complaints, disputes",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "Pinecone", "Supabase", "Shopify API"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: Sparkles,
            tone: "accent",
            title: "AI Stylist / Product Advisor",
            tagline: "\"How do I style this?\" answered from your real catalog, not generic advice.",
            problem:
              "\"How do I style this?\" is the highest-intent question a customer can ask — and most brands have no answer ready beyond a generic size chart.",
            solution: [
              "Answers styling questions using your real catalog, not stock advice",
              "Recommends complete looks: \"customers who bought this also paired it with...\"",
              "Understands fit, fabric, and occasion from your product descriptions",
              "Push-recommends on product pages without being asked",
            ],
            tech: ["Claude Vision", "LangChain", "Pinecone", "Shopify API"],
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
          { v: "92%", l: "first-touch queries resolved without a human" },
          { v: "4.8/5", l: "median customer satisfaction post-launch" },
          { v: "<45s", l: "median response time, 24/7" },
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
