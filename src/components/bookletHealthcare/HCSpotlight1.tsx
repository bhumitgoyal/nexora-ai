"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function HCSpotlight1() {
  return (
    <Poster page="04 / 08" section="Spotlight · Scheduling & Intake">
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
        Spotlight · 01 of 02 · Scheduling &amp; Intake
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        The phone rings. An AI answers.
        <br />
        <span className="text-gradient">The patient is booked.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds for any practice where patients wait too long to get seen: a
        voice booking agent that fills your calendar 24/7, and a pre-consultation
        intake bot that prepares the doctor before the patient sits down.
        Research consistently shows patient acceptance of AI is dramatically higher
        when framed as &ldquo;AI-assisted&rdquo; rather than &ldquo;AI alone&rdquo;
        (University of Michigan / NIH, 2024) — every build below is designed with
        that distinction baked in.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Phone,
            tone: "brand",
            title: "AI Voice Booking Agent",
            tagline: "24/7 phone booking that syncs with your calendar and never puts a patient on hold.",
            problem:
              "Your front desk handles 60–100+ calls a day. During peak hours, patients hear a busy tone or voicemail — and 85% of them never call back. That's a missed appointment you never knew about.",
            solution: [
              "Answers calls 24/7, books appointments into your real calendar",
              "Handles rescheduling, cancellations, and waitlist offers",
              "Routes urgent or clinical calls to a human immediately",
              "Full transcript logged — nothing lost, everything auditable",
            ],
            tech: ["VAPI", "Twilio", "Google Calendar API", "EHR Webhooks"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: MessageCircle,
            tone: "accent",
            title: "Pre-Consultation WhatsApp Intake Bot",
            tagline: "Symptoms, history, and insurance — collected before the patient arrives.",
            problem:
              "Doctors spend the first 5–10 minutes of every consultation catching up on basics: \"What brings you in today?\" That's 2 hours of clinical time lost per day on information the patient could have shared beforehand.",
            solution: [
              "WhatsApp-based intake form sent automatically after booking",
              "Collects symptoms, current medications, allergies, and insurance",
              "Structures data for the doctor's review — not a raw text dump",
              "Patient fills it at their pace; the doctor reads a clean summary",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "Supabase", "EHR API"],
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
          { v: "20–23%", l: "average clinic no-show rate reduced with AI reminders (DexCare, 2024)" },
          { v: "$200", l: "average revenue lost per missed appointment (Clearwave, 2024)" },
          { v: "85%", l: "of patients prefer AI-assisted over AI-alone care decisions (U-M, 2024)" },
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
