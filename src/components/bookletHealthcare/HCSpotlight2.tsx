"use client";

import { motion } from "motion/react";
import { Bell, FileText } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function HCSpotlight2() {
  return (
    <Poster page="05 / 08" section="Spotlight · Retention & Follow-Up">
      <PosterDecor
        grid
        orbs={[
          { tone: "fuchsia", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "brand", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 02 of 02 · Retention &amp; Follow-Up
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Reduce no-shows. Close the loop.
        <br />
        <span className="text-gradient">Keep patients on track.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds that protect both revenue and patient outcomes at the two
        moments clinics lose the most: the appointment that gets forgotten, and
        the lab result that never gets discussed. Every build below supports the
        doctor&rsquo;s relationship with the patient — it never substitutes for
        clinical judgment.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: Bell,
            tone: "brand",
            title: "No-Show Reminders & Smart Rescheduling",
            tagline: "Multi-channel reminders that adapt to the patient's preferred contact method.",
            problem:
              "A 20% no-show rate means one in five appointment slots generates zero revenue while blocking access for other patients. Most clinics send one SMS reminder and hope for the best.",
            solution: [
              "Multi-channel reminders at 72h, 24h, and 2h (SMS, WhatsApp, voice)",
              "One-tap rescheduling link — no phone call needed",
              "Cancelled slots offered to waitlisted patients automatically",
              "No-show patterns flagged for proactive outreach by your team",
            ],
            tech: ["Twilio", "WhatsApp Cloud API", "N8N", "Supabase"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: FileText,
            tone: "accent",
            title: "Lab-Result & Follow-Up Communication",
            tagline: "Close the loop between the lab and the next appointment — automatically.",
            problem:
              "Lab results come back. The patient doesn't know. The doctor's staff is supposed to call, but the task falls through the cracks. The patient drifts, and a treatable finding gets delayed.",
            solution: [
              "Automated WhatsApp notification when results are ready",
              "Doctor-approved summary template — no raw data sent to patients",
              "One-tap follow-up booking if results require a conversation",
              "Escalation to staff for any critical or abnormal findings",
            ],
            tech: ["WhatsApp Cloud API", "Claude", "EHR API", "Supabase"],
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
          { v: "30–40%", l: "no-show reduction with multi-channel AI reminders (MGMA, 2025)" },
          { v: "2:1", l: "ratio of admin-to-patient time for every hour of direct care (AMA, 2024)" },
          { v: "73%", l: "of practices report stable or declining no-show rates with automation (MGMA, 2025)" },
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
