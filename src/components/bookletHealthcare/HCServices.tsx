"use client";

import { motion } from "motion/react";
import { Phone, Bell, MessageCircle, Pill, Heart, FileText } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const services = [
  {
    no: "01",
    icon: Phone,
    title: "AI Voice Booking Agent",
    tagline: "Patients call, an AI assistant answers — books, reschedules, and confirms appointments 24/7 without a single hold tone.",
    accent: "brand" as const,
  },
  {
    no: "02",
    icon: Bell,
    title: "Appointment Reminders & No-Show Reduction",
    tagline: "Multi-channel reminders (SMS, WhatsApp, voice) at 72h, 24h, and 2h before the visit. Smart rescheduling for cancellations.",
    accent: "accent" as const,
  },
  {
    no: "03",
    icon: MessageCircle,
    title: "Pre-Consultation WhatsApp Intake Bot",
    tagline: "Collects symptoms, history, and insurance details before the patient walks in. The doctor starts the visit informed, not catching up.",
    accent: "brand" as const,
  },
  {
    no: "04",
    icon: Pill,
    title: "Prescription & Refill Reminders",
    tagline: "Automated nudges when a prescription is running low or a refill window opens. No more \"I forgot to take my meds\" at the next visit.",
    accent: "accent" as const,
  },
  {
    no: "05",
    icon: Heart,
    title: "Preventive Care Recall",
    tagline: "Annual check-ups, screening schedules, and vaccination reminders sent automatically based on patient age, history, and last-visit date.",
    accent: "brand" as const,
  },
  {
    no: "06",
    icon: FileText,
    title: "Insurance & Billing Claims Assistant",
    tagline: "Pre-authorization checks, claim status tracking, and patient billing inquiries handled by AI before they reach your billing desk.",
    accent: "accent" as const,
  },
];

export function HCServices() {
  return (
    <Poster page="03 / 08" section="Services">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 340, className: "-top-24 -right-20", animated: true },
          { tone: "accent", size: 280, className: "bottom-20 -left-20", animated: true },
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
        Every service below is designed to support and extend the doctor&rsquo;s
        existing relationship with the patient — never to substitute for the
        consultation itself. AI handles the admin; the clinician stays in charge.
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
          Don&rsquo;t see your problem here? Good. That usually means it&rsquo;s specific to your
          practice, which is exactly the kind of build we like best. Tell us what&rsquo;s actually
          broken and we&rsquo;ll scope it for free before you commit to anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-4"
      >
        <p className="font-display text-[14px] tracking-tight text-[var(--color-fg)]">
          The next two pages go deep on the four builds that save the most time for clinics.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          → pages 04–05
        </span>
      </motion.div>
    </Poster>
  );
}
