"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { EASE } from "@/lib/motion";

type FeedLine = {
  time: string;
  text: string;
  tag: string;
};

const FEED: FeedLine[] = [
  { time: "08:47", text: "inbound call answered · 0.7s pickup", tag: "VOICE" },
  { time: "08:49", text: "lead #2231 qualified · pushed to CRM", tag: "LEADS" },
  { time: "08:52", text: "cart #8817 recovery sent · WhatsApp", tag: "CARTS" },
  { time: "08:57", text: "invoice INV-2209 matched · books clean", tag: "BOOKS" },
  { time: "09:00", text: "morning report compiled · sent to ops", tag: "REPORT" },
  { time: "09:04", text: "review reply drafted · queued for approval", tag: "REVIEWS" },
  { time: "09:11", text: "meeting booked · Thursday 3:00 pm", tag: "CALENDAR" },
  { time: "09:16", text: "follow-up email sent · 60s after enquiry", tag: "LEADS" },
  { time: "09:23", text: "stock alert raised · reorder suggested", tag: "OPS" },
  { time: "09:31", text: "after-hours ticket resolved · no handoff", tag: "SUPPORT" },
];

const VISIBLE = 6;

// Continuous-feed printout: operations print themselves line by line,
// timestamped and tagged, like a telex on the wall of a print shop.
export function Switchboard() {
  const prefersReduced = useReducedMotion();
  const [head, setHead] = useState(VISIBLE);

  useEffect(() => {
    if (prefersReduced) return;
    const iv = setInterval(() => setHead((h) => h + 1), 1800);
    return () => clearInterval(iv);
  }, [prefersReduced]);

  const lines = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (head - VISIBLE + i + FEED.length * 1000) % FEED.length;
    return { ...FEED[idx], key: head - VISIBLE + i };
  });

  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The switchboard"
          title="What the layer printed this morning."
          subtitle="The work as it happens, every line timestamped, logged, and auditable. This is what running on infrastructure looks like."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-2xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[6px_6px_0_var(--color-border)]">
            {/* header strip */}
            <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] px-4 py-2.5 md:px-5">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--color-fg)] md:text-[10px]">
                Nuvero · Switchboard
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] md:text-[10px]">
                <span className="size-1.5 animate-pulse bg-[var(--color-brand)]" />
                Printing
              </span>
            </div>

            {/* feed — perforated left edge */}
            <div className="relative overflow-hidden border-l-[3px] border-dotted border-[var(--color-border)]/40 px-4 py-3 md:px-5">
              <div className="flex flex-col">
                <AnimatePresence initial={false} mode="popLayout">
                  {lines.map((line, i) => {
                    const isLatest = i === lines.length - 1;
                    return (
                      <motion.div
                        key={line.key}
                        layout
                        initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        animate={{ opacity: isLatest ? 1 : 0.45 + i * 0.09, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="flex items-baseline gap-2.5 py-[7px] md:gap-4"
                      >
                        <span className="shrink-0 font-mono text-[10px] tabular-nums text-[var(--color-fg-subtle)] md:text-xs">
                          {line.time}
                        </span>
                        <span className="hidden shrink-0 border border-[var(--color-border)]/60 px-1 py-px font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)] sm:inline">
                          {line.tag}
                        </span>
                        <span className="min-w-0 truncate font-mono text-[11px] text-[var(--color-fg)] md:text-[13px]">
                          {line.text}
                          {isLatest && !prefersReduced && (
                            <motion.span
                              aria-hidden
                              className="ml-1 inline-block h-[1em] w-[7px] translate-y-[2px] bg-[var(--color-brand)]"
                              animate={{ opacity: [1, 1, 0, 0] }}
                              transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                            />
                          )}
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* footer strip */}
            <div className="flex items-center justify-between border-t-2 border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 md:px-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                24 / 7 · no shifts, no backlog
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                Every line auditable
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
