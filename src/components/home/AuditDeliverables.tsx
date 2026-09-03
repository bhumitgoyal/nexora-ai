"use client";

import { ClipboardCheck, FileSearch, Gauge, Route } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

const deliverables = [
  {
    form: "N-01",
    icon: FileSearch,
    title: "Intelligence Gap Analysis",
    body: "Where humans are doing work the layer should own, ranked by hours and error rate, mapped to the exact workflows we'd automate first.",
  },
  {
    form: "N-02",
    icon: Gauge,
    title: "Infrastructure Readiness Report",
    body: "A read on your current stack, data, and integrations, and what has to be true before an agent can run in production against it.",
  },
  {
    form: "N-03",
    icon: Route,
    title: "Initial Deployment Roadmap",
    body: "A sequenced plan for the first system, with the metric it moves, the interfaces it touches, and a realistic time-to-live.",
  },
];

export function AuditDeliverables() {
  return (
    <section className="border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Audit log / Form N-01"
          title="What a systems audit puts in your hands."
          subtitle="Before a line of code, you leave with a written read on where intelligence pays off, what your stack is ready for, and where to start."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] shadow-[6px_6px_0_var(--color-border)]">
            {/* docket header row */}
            <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)]">
                Nuvero AI · Systems Audit · Deliverables
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] sm:inline">
                No charge · ~15 min
              </span>
            </div>

            <ul className="flex flex-col">
              {deliverables.map((d, i) => (
                <li
                  key={d.form}
                  className={`flex items-start gap-4 px-5 py-5 ${
                    i < deliverables.length - 1 ? "border-b border-[var(--color-border)]" : ""
                  }`}
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-brand)]">
                    <d.icon className="size-4" strokeWidth={2} />
                  </span>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]">
                        {d.form}
                      </span>
                      <h3 className="font-display text-base font-semibold tracking-tight text-[var(--color-fg)] md:text-lg">
                        {d.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                      {d.body}
                    </p>
                  </div>
                  <ClipboardCheck className="mt-1 hidden size-4 shrink-0 text-[var(--color-brand)] sm:block" />
                </li>
              ))}
            </ul>

            <a
              href="/#automation-audit"
              className="flex items-center justify-center gap-2 border-t-2 border-[var(--color-border)] bg-[var(--color-brand)] px-5 py-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-brand-strong)]"
            >
              Book your systems audit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
