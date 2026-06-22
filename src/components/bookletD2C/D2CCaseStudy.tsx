"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Quote } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const results = [
  { metric: "92%", label: "first-touch queries resolved by AI" },
  { metric: "3.9→4.8", label: "member CSAT lift post-launch" },
  { metric: "<45s", label: "median response time, 24/7" },
];

const approach = [
  "Unified brain over the brand's CRM, event calendar, and knowledge base",
  "Per-member long-term memory: the bot remembers last week's questions and preferences",
  "Tone-detection layer that mirrors each member's pace, language, and formality",
  "Strict escalation: any finance or medical query routes to a human within 2 minutes",
];

const tech = ["LangChain", "Claude", "Pinecone", "WhatsApp Cloud API", "Supabase", "GPT-4o"];

export function D2CCaseStudy() {
  return (
    <Poster page="06 / 08" section="Case Study · GoHappy Club">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 360, className: "-top-28 -right-24", animated: true },
          { tone: "accent", size: 280, className: "-bottom-24 -left-20", animated: true },
        ]}
      />

      <div className="flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="poster-eyebrow"
        >
          Proof · A real build, not a hypothetical pitch.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]"
        >
          <span>2024</span>
          <span className="text-[var(--color-fg-subtle)]">·</span>
          <span>8 weeks</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 flex items-end justify-between gap-6"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Senior Wellness · D2C Membership
          </div>
          <h2 className="poster-title mt-2 text-[34px] leading-[1.08] tracking-tight">
            <span className="text-gradient">GoHappy Club</span>
          </h2>
        </div>
        <ArrowUpRight className="size-5 shrink-0 text-[var(--color-fg-subtle)]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.65 }}
        className="mt-3 max-w-[170mm] font-display text-[17px] leading-[1.3] tracking-tight text-[var(--color-fg)]"
      >
        Multilingual WhatsApp + in-app member assistant, 6 languages, ages 55–92
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3 max-w-[170mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        GoHappy Club came to us with a support team buried in repeat questions across 6
        languages. These two are pulled from a longer list of systems we&rsquo;ve actually
        shipped across voice, WhatsApp, internal ops, and lead generation, for clients who
        came to us with problems that didn&rsquo;t look like anything in a services list.
        We&rsquo;re showing these two because they&rsquo;re the closest fit to a D2C
        store&rsquo;s day-to-day. If your problem looks different, that&rsquo;s the point.
        Tell us what it is.
      </motion.p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {results.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4"
          >
            <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[rgba(139,92,246,0.28)] blur-3xl" />
            <div className="text-gradient-brand font-display text-[40px] font-semibold leading-none tracking-tight">
              {r.metric}
            </div>
            <div className="mt-2.5 text-[11px] leading-[1.45] text-[var(--color-fg-muted)]">
              {r.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55 }}
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-4"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            How we built it
          </div>
          <ul className="mt-2 flex flex-col gap-1.5">
            {approach.map((a) => (
              <li
                key={a}
                className="flex items-start gap-1.5 text-[10.5px] leading-[1.45] text-[var(--color-fg-muted)]"
              >
                <span className="mt-1 size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
          className="flex flex-col gap-4"
        >
          <div className="flex-1 rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.12),rgba(34,211,238,0.08))] p-4">
            <Quote className="size-4 text-[var(--color-accent)] opacity-70" />
            <p className="mt-2 text-[11px] leading-[1.6] text-[var(--color-fg)]">
              &ldquo;Our members are 60-plus and they prefer the bot over our humans. That
              sentence felt impossible 6 months ago.&rdquo;
            </p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
              Head of Member Experience, GoHappy Club
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3">
            <p className="text-[10px] leading-[1.55] text-[var(--color-fg-muted)]">
              This is the same playbook we&rsquo;d run for your store: brand voice in, customer
              memory in, your catalog or call flow wired in, and a clean handoff to your team
              whenever a human is genuinely the better answer.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3">
            <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] mb-1.5">
              Also in the build log
            </div>
            <p className="text-[9.5px] leading-[1.55] text-[var(--color-fg-muted)]">
              Internal delivery-ops dashboards · multi-client campaign content engines ·
              autonomous outbound lead-gen and sales calling · public data scraping and lead
              enrichment tools. If it&rsquo;s repetitive, judgment-heavy, or eating your
              team&rsquo;s time, it&rsquo;s probably buildable.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="mt-4 flex items-center justify-between"
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          nuvero · case gohappy
        </span>
      </motion.div>
    </Poster>
  );
}
