"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  LineChart,
  Megaphone,
  Target,
  KanbanSquare,
  Code2,
  Gauge,
  Settings2,
  UserCog,
  MessageSquareText,
  PhoneCall,
  Bot,
} from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";

const domains = [
  { icon: Briefcase, label: "Management", body: "Decisions, approvals, status — surfaced from your tools, summarized in real time.", tone: "brand" },
  { icon: LineChart, label: "Analytics", body: "Plain-English Q&A on top of your warehouse. Charts, anomalies, and weekly digests, on tap.", tone: "accent" },
  { icon: Megaphone, label: "Marketing", body: "Campaign generation, copy variants, repurposing, and continuous A/B/n testing on autopilot.", tone: "brand" },
  { icon: Target, label: "Sales", body: "Pipeline hygiene, conversation intelligence, forecast confidence, and SDR copilots.", tone: "accent" },
  { icon: KanbanSquare, label: "Project Ops", body: "Stand-ups, ticket triage, scope creep alerts, and PM nudges baked into Slack / Linear.", tone: "brand" },
  { icon: Code2, label: "Engineering", body: "Code review assistants, PR summaries, on-call copilots, and internal SDK chatbots.", tone: "accent" },
  { icon: Gauge, label: "Dashboards", body: "Custom internal dashboards that compose live data and AI commentary in one view.", tone: "brand" },
  { icon: Settings2, label: "Customizations", body: "The last 30% of any SaaS — the part your team actually needs — built bespoke.", tone: "accent" },
  { icon: UserCog, label: "Personalization", body: "Per-customer experiences, per-rep playbooks, per-user memory — at scale.", tone: "brand" },
  { icon: MessageSquareText, label: "Chatbots", body: "Web, in-app, WhatsApp and Instagram assistants with memory and citations.", tone: "accent" },
  { icon: PhoneCall, label: "Voice Agents", body: "Inbound + outbound voice concierges that never sleep and never put callers on hold.", tone: "brand" },
  { icon: Bot, label: "Personal Agents", body: "An agent per role, per workflow — your second brain that does the work, not just plans it.", tone: "accent" },
] as const;

export function PosterIntegrations() {
  return (
    <Poster page="03 / 14" section="Where AI plugs in">
      <PosterDecor
        grid
        orbs={[
          { tone: "fuchsia", size: 320, className: "-top-24 right-10", animated: true },
          { tone: "accent", size: 360, className: "-bottom-28 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Manifesto · 02
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[44px] leading-[1.05]"
      >
        Twelve places AI <span className="text-gradient">already belongs</span>
        <br />
        inside your business — most just{" "}
        <span className="text-[var(--color-fg-muted)]">haven&rsquo;t noticed.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="mt-5 max-w-[165mm] text-[12.5px] leading-[1.6] text-[var(--color-fg-muted)]"
      >
        Every box below is a workflow that&rsquo;s currently being done by humans
        copy-pasting between tabs. Every box below is also a workflow we can
        agentify — wired into the systems you already pay for. No new vendor.
        No new login. Just less manual labor and more compounding output.
      </motion.p>

      <div className="mt-6 grid grid-cols-4 gap-2.5">
        {domains.map((d, i) => {
          const Icon = d.icon;
          return (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.45 }}
              className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-3.5"
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,${
                  d.tone === "brand" ? "var(--color-brand)" : "var(--color-accent)"
                },transparent)]`}
              />
              <span
                className={`mb-2.5 grid size-8 place-items-center rounded-lg border border-[var(--color-border-strong)] ${
                  d.tone === "brand"
                    ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_70%)]"
                    : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_70%)]"
                }`}
              >
                <Icon
                  className={`size-4 ${
                    d.tone === "brand"
                      ? "text-[var(--color-brand-strong)]"
                      : "text-[var(--color-accent-strong)]"
                  }`}
                />
              </span>
              <h3 className="font-display text-[12.5px] font-semibold tracking-tight text-[var(--color-fg)]">
                {d.label}
              </h3>
              <p className="mt-1 text-[10px] leading-[1.45] text-[var(--color-fg-muted)]">
                {d.body}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-6 grid grid-cols-3 gap-2.5"
      >
        {[
          { k: "Manual hours / week reclaimed per team", v: "20–60h" },
          { k: "Time to first live agent", v: "2 weeks" },
          { k: "Vendor lock-in introduced", v: "Zero" },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-3"
          >
            <div className="text-gradient-brand font-display text-xl font-semibold tracking-tight">
              {m.v}
            </div>
            <div className="mt-0.5 text-[10px] leading-tight text-[var(--color-fg-muted)]">
              {m.k}
            </div>
          </div>
        ))}
      </motion.div>
    </Poster>
  );
}
