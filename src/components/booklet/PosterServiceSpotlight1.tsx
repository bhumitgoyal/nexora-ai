"use client";

import { motion } from "motion/react";
import { PhoneCall, MessageSquareText } from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";
import { ServiceSpotlightCard } from "./ServiceSpotlightCard";

export function PosterServiceSpotlight1() {
  return (
    <Poster page="05 / 14" section="Spotlight · Conversational">
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
        Spotlight · 01 of 03 · Conversational AI
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Pick up every call. Answer every chat.
        <br />
        <span className="text-gradient">In your voice. In their language.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two flagship builds for any business with customers who message and call:
        a voice concierge that never sleeps, and an omnichannel chat brain that
        remembers every past conversation.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: PhoneCall,
            tone: "brand",
            title: "AI Voice Agents",
            tagline: "Human-grade voice concierges that never sleep.",
            problem:
              "Missed calls leak revenue. Round-the-clock reps crush margins. IVRs frustrate the customers you fought hardest to win.",
            solution: [
              "Inbound agents that handle FAQs, troubleshoot, route smartly — zero hold-music",
              "Outbound campaign agents that pitch, qualify, and book meetings",
              "Trained on your SOPs, catalog, and customer history",
              "Transcripts, sentiment, and outcomes piped to your CRM",
            ],
            tech: ["Vapi", "Twilio", "ElevenLabs", "Deepgram", "OpenAI Realtime"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: MessageSquareText,
            tone: "accent",
            title: "Conversational AI & Chatbots",
            tagline: "Omnichannel assistants with memory, context, and taste.",
            problem:
              "Generic bots break the moment a real customer asks a real question. Support teams drown in repeats; NPS pays the price.",
            solution: [
              "WhatsApp, web, in-app, and Instagram DM on one unified brain",
              "Per-user long-term memory so the next chat feels continuous",
              "Multilingual + tone-matched replies that mirror your customers",
              "Smart escalation to humans on high-stakes intents",
            ],
            tech: ["LangChain", "Pinecone", "WhatsApp Cloud", "Claude", "GPT-4o"],
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
          { v: "97%", l: "inbound calls resolved without handoff" },
          { v: "92%", l: "first-touch chat queries resolved" },
          { v: "<45s", l: "median chat response, 24/7" },
          { v: "+31%", l: "outbound conversion lift" },
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
