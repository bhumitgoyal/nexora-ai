"use client";

import { Send, Search } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

type System = {
  code: string;
  name: string;
  icon: React.ElementType;
  status: string;
  blurb: string;
  metrics: { value: string; label: string }[];
  log: string[];
};

const systems: System[] = [
  {
    code: "SYS-INT-01",
    name: "Nuvero Outreach Engine",
    icon: Send,
    status: "Running",
    blurb:
      "The pipeline that fills our own calendar. It discovers and scores leads, resolves verified contacts with provenance, and drafts every email, with a human approving each send before it goes out.",
    metrics: [
      { value: "~10 min", label: "daily review to run it" },
      { value: "0", label: "sends without human approval" },
      { value: "100%", label: "contacts with provenance" },
    ],
    log: ["discover → dedupe → score", "resolve contact · confidence 0.92", "draft ready · awaiting approval"],
  },
  {
    code: "SYS-INT-02",
    name: "SBA Research Agent",
    icon: Search,
    status: "Running",
    blurb:
      "How we find businesses the usual sources never surface. It scrapes public SBA registrations, enriches each with sites and socials, and outputs clean, ready-to-work lead lists.",
    metrics: [
      { value: "1000s", label: "SMBs found per run" },
      { value: "Hrs → min", label: "research per batch" },
      { value: "$0", label: "recurring tool cost" },
    ],
    log: ["scan registrations · region set", "enrich · site + socials found", "export · 1,284 rows clean"],
  },
];

function SystemCard({ system }: { system: System }) {
  return (
    <div className="flex flex-col border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[6px_6px_0_var(--color-border)]">
      {/* commissioning header */}
      <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
        <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg)]">
          <system.icon className="size-4 text-[var(--color-brand)]" strokeWidth={2} />
          {system.code}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
          <span className="size-1.5 animate-pulse bg-[var(--color-brand)]" />
          {system.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)]">
          {system.name}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{system.blurb}</p>

        {/* faux internal log */}
        <div className="flex flex-col gap-1 border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
          {system.log.map((line, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-mono text-[10px] text-[var(--color-fg-subtle)]"
            >
              <span className="text-[var(--color-brand)]">›</span>
              {line}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-3 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
          {system.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5 bg-[var(--color-bg-elev)] px-3 py-3">
              <span className="font-display text-base font-bold tabular-nums leading-none text-[var(--color-brand)]">
                {m.value}
              </span>
              <span className="text-[9.5px] leading-tight text-[var(--color-fg-subtle)]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FromTheWorkshop() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="From the workshop"
          title="We build the infrastructure we run on."
          subtitle="Before we ship a system to a client, it earns its place inside our own operation. These two run Nuvero every day."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {systems.map((s, i) => (
            <Reveal key={s.code} delay={i * 0.08}>
              <SystemCard system={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
