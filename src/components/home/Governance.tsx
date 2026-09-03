"use client";

import { ClipboardCheck, ShieldCheck, Lock } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

const controls = [
  {
    ticket: "GOV-01",
    icon: ClipboardCheck,
    title: "Deployment Audits",
    body: "Every system is signed off against a written checklist before and after it goes live.",
    checks: ["Access scope reviewed", "Failure modes mapped", "Escalation path defined"],
  },
  {
    ticket: "GOV-02",
    icon: ShieldCheck,
    title: "Agent Integrity Monitoring",
    body: "Agents are watched in production for drift and out-of-policy actions, with a human alerted the moment confidence drops.",
    checks: ["Drift + hallucination checks", "Confidence thresholds", "Human alerted on breach"],
  },
  {
    ticket: "GOV-03",
    icon: Lock,
    title: "Infrastructure Hardening",
    body: "Least-privilege access, secrets in vaults, encryption at rest and in transit, so the layer is safe against real customer data.",
    checks: ["Least-privilege keys", "Secrets vaulted", "Full audit trail"],
  },
];

export function Governance() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Inspection & compliance"
          title="Governance built into every deployment."
          subtitle="An agent in production is only as good as the controls around it. Every Nuvero system ships with these, not as an add-on."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {controls.map((c, i) => (
            <Reveal key={c.ticket} delay={i * 0.08}>
              <div className="flex h-full flex-col border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[5px_5px_0_var(--color-border)]">
                <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg)]">
                    Ticket {c.ticket}
                  </span>
                  <c.icon className="size-4 text-[var(--color-brand)]" strokeWidth={2} />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{c.body}</p>
                  <ul className="mt-auto flex flex-col gap-2 border-t border-[var(--color-border)] pt-4">
                    {c.checks.map((check) => (
                      <li
                        key={check}
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-fg-muted)]"
                      >
                        <ShieldCheck className="size-3.5 shrink-0 text-[var(--color-brand)]" strokeWidth={2} />
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
