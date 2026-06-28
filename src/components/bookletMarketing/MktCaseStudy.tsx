"use client";

import { motion } from "motion/react";
import { Zap, Search, Quote } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const primaryStats = [
  { metric: "~15 min", label: "to go from feature brief to a full campaign kit, down from ~2 days" },
  { metric: "Multi-client", label: "built to run the same workflow across many brand voices without adding headcount" },
  { metric: "100%", label: "consistent brand voice across every channel, every time" },
];

const howWeBuilt = [
  "One input, the feature or campaign details, fans out into a complete multi-channel content kit",
  "Each output is auto-tailored to its platform's format (ad copy reads differently from a push notification)",
  "Brand voice and tonality matched per client, not a single generic model output",
  "Packaged for agencies as custom tooling, with a per-client analytics dashboard layered on top",
];

const primaryTech = ["GPT API", "Claude", "Multi-Tenant Dashboards", "Custom Tooling"];

export function MktCaseStudy() {
  return (
    <Poster page="06 / 08" section="Proof">
      <PosterDecor
        grid
        orbs={[
          { tone: "accent", size: 360, className: "-top-28 -right-24", animated: true },
          { tone: "brand", size: 280, className: "-bottom-24 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Proof
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        <span className="text-gradient">Real builds,</span>{" "}
        <span className="text-[var(--color-fg-muted)]">not a hypothetical pitch.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[170mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        These three are pulled from a longer list of systems we&rsquo;ve actually shipped across
        voice, content, internal operations, and lead generation, for clients whose problems
        didn&rsquo;t show up anywhere on a services page. We&rsquo;re showing these because
        they&rsquo;re the closest fit to how agencies actually run client work. If your problem
        looks different, tell us. That&rsquo;s usually where the better build is.
      </motion.p>

      {/* --- PRIMARY CASE CARD --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-5 rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5"
      >
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Primary Case Study
          </div>
        </div>
        <h3 className="mt-2 font-display text-[18px] font-semibold tracking-tight text-[var(--color-fg)]">
          <span className="text-gradient">AI Content &amp; Campaign Engine</span>{" "}
          <span className="text-[var(--color-fg-muted)]">· Multi-Client Deployment</span>
        </h3>
        <p className="mt-2 font-display text-[13px] leading-[1.4] tracking-tight text-[var(--color-fg)]">
          Type a new feature&rsquo;s details once. Get a full go-to-market kit back: ad copy,
          customer emails, WhatsApp messages, and push notifications, each tailored to the platform
          and matched to the client&rsquo;s brand voice.
        </p>
        <p className="mt-3 text-[11px] leading-[1.5] text-[var(--color-fg-muted)]">
          <span className="font-semibold text-[var(--color-fg-subtle)]">The problem:</span>{" "}
          Launching a single feature used to mean manually writing the same message five different
          ways for five different channels. It was slow, inconsistent, and impossible to scale once
          you&rsquo;re running this for more than one client.
        </p>

        <div className="mt-4">
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            How we built it
          </div>
          <ul className="mt-2 flex flex-col gap-1.5">
            {howWeBuilt.map((a) => (
              <li
                key={a}
                className="flex items-start gap-1.5 text-[10.5px] leading-[1.45] text-[var(--color-fg-muted)]"
              >
                <span className="mt-1 size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {primaryStats.map((s, i) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-3"
            >
              <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[rgba(34,211,238,0.18)] blur-3xl" />
              <div className="text-gradient-brand font-display text-[18px] font-semibold leading-none tracking-tight">
                {s.metric}
              </div>
              <div className="mt-1.5 text-[9px] leading-tight text-[var(--color-fg-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {primaryTech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* --- SECONDARY CASE CARDS --- */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-4"
        >
          <div className="flex items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--color-border-strong)] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28),transparent_70%)]">
              <Zap className="size-4 text-[var(--color-brand-strong)]" />
            </span>
            <h4 className="font-display text-[13px] font-semibold tracking-tight text-[var(--color-fg)]">
              Autonomous Outbound Sales Engine
            </h4>
          </div>
          <p className="mt-2.5 text-[10.5px] leading-[1.5] text-[var(--color-fg-muted)]">
            Identifies qualified leads from Google Maps, enriches each with email, LinkedIn,
            Instagram and other socials, then reaches out with a personalized pitch. It calls
            prospects at their preferred time using ElevenLabs voice AI to capture requirements with
            zero human intervention.
          </p>
          <div className="mt-3 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-2.5">
            <div className="text-[9.5px] leading-[1.45] text-[var(--color-fg-muted)]">
              <span className="font-semibold text-[var(--color-accent-strong)]">Result:</span>{" "}
              Fully automated the top of the sales funnel end-to-end. Generates sales-ready, enriched leads
              with zero manual research.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55 }}
          className="rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-4"
        >
          <div className="flex items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[var(--color-border-strong)] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]">
              <Search className="size-4 text-[var(--color-accent-strong)]" />
            </span>
            <h4 className="font-display text-[13px] font-semibold tracking-tight text-[var(--color-fg)]">
              US SMB Lead Scraper (SBA.gov)
            </h4>
          </div>
          <p className="mt-2.5 text-[10.5px] leading-[1.5] text-[var(--color-fg-muted)]">
            Give it an industry name. It scrapes verified listings from the U.S. Small Business
            Administration, surfacing SMBs invisible to normal Google search, then pulls each
            company&rsquo;s website and social handles into one clean list.
          </p>
          <div className="mt-3 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-2.5">
            <div className="text-[9.5px] leading-[1.45] text-[var(--color-fg-muted)]">
              <span className="font-semibold text-[var(--color-accent-strong)]">Result:</span>{" "}
              Turned hours of daily manual research into a minutes-long automated run, at zero tool
              cost. Open-sourced on GitHub.
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- CLOSING LINE --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-4 rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] p-3.5"
      >
        <p className="text-[11px] leading-[1.55] text-[var(--color-fg-muted)]">
          This is the same playbook we&rsquo;d run for your agency: your brand voice in, your
          client&rsquo;s data wired in, and a clean handoff so your team owns the system going
          forward.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-3"
      >
        <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] mb-1.5">
          Also in the build log
        </div>
        <p className="text-[10px] leading-[1.55] text-[var(--color-fg-muted)]">
          Brand-aware customer support assistants for D2C clients · internal delivery and ops
          dashboards · cold-call and inbound voice agents · public-data lead scraping and enrichment
          tools. If it&rsquo;s repetitive, judgment-heavy, or eating someone&rsquo;s time, it&rsquo;s
          probably buildable, for you or for a client you&rsquo;d resell it to.
        </p>
      </motion.div>
    </Poster>
  );
}
