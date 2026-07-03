"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";
import { MaskReveal } from "@/components/shared/MaskReveal";

const TRAITS = [
  {
    label: "Scoped to one job",
    body: "a workflow you already run, mapped end to end before anything is built.",
  },
  {
    label: "Trained on your work",
    body: "your SOPs, your tone, your edge cases — not generic prompts.",
  },
  {
    label: "Accountable in numbers",
    body: "instrumented from day one, every figure on this sheet auditable.",
  },
  {
    label: "Maintained like infrastructure",
    body: "monitored, retrained, and improved every week it runs.",
  },
];

// Live-ticking counters make the record feel like a working system, not a mockup.
function useLiveCount(start: number, maxStep: number, intervalMs: number) {
  const prefersReduced = useReducedMotion();
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (prefersReduced) return;
    const iv = setInterval(
      () => setValue((v) => v + Math.floor(Math.random() * (maxStep + 1))),
      intervalMs
    );
    return () => clearInterval(iv);
  }, [prefersReduced, maxStep, intervalMs]);

  return value;
}

function CommissionRecord() {
  const calls = useLiveCount(5204, 3, 1400);
  const leads = useLiveCount(1318, 1, 2600);

  return (
    <div className="relative border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 shadow-[6px_6px_0_var(--color-brand)] md:p-8">
      {/* stamped corner */}
      <span
        aria-hidden
        className="absolute -right-2 -top-3 rotate-6 border-2 border-[var(--color-brand)] bg-[var(--color-bg)] px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] md:-right-3"
      >
        In production
      </span>

      {/* header */}
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-fg-subtle)]">
        Commissioning record
      </span>

      {/* identity */}
      <div className="mt-5 flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg)] font-mono text-sm font-bold text-[var(--color-fg)] md:size-14 md:text-base">
          011
        </span>
        <div className="min-w-0">
          <p className="font-display text-xl font-semibold leading-tight tracking-tight md:text-2xl">
            Voice operations system
          </p>
          <p className="text-sm text-[var(--color-fg-muted)]">Inbound calls, end to end</p>
        </div>
      </div>

      {/* record fields */}
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[var(--color-border)] pt-5 md:gap-x-6">
        {[
          ["Commissioned", "Week 6"],
          ["Owner", "Your ops team"],
          ["Runs on", "Your stack"],
          ["Coverage", "24 / 7"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">{k}</p>
            <p className="mt-1 font-mono text-sm text-[var(--color-fg)]">{v}</p>
          </div>
        ))}
      </div>

      {/* live metrics */}
      <div className="mt-6 border-t border-[var(--color-border)] pt-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
          Running total · Last 30 days
        </p>
        <dl className="mt-3 flex flex-col">
          {[
            ["Calls handled", calls.toLocaleString("en-US")],
            ["Leads qualified", leads.toLocaleString("en-US")],
            ["First response", "0.8s"],
            ["Human handoffs", "3%"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)]/40 py-2.5 last:border-b-0"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">{k}</dt>
              <dd className="font-mono text-base font-bold tabular-nums text-[var(--color-fg)] md:text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function AgentRoster() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-20 md:py-32">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* copy */}
        <div>
          <Reveal>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-brand)]">
              What a deployment is
            </p>
          </Reveal>
          <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-6xl md:leading-[1.05]">
            <MaskReveal delay={0.08}>
              <span>Infrastructure with</span>
            </MaskReveal>
            <MaskReveal delay={0.2}>
              <span className="text-[var(--color-brand)]">a job description.</span>
            </MaskReveal>
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
              Every deployment leaves a record like this one: a system with a
              scope, an owner, and numbers it answers for. Not a subscription
              you log into — a layer that clocks in so your team doesn&apos;t
              have to.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-col gap-4">
            {TRAITS.map((trait, i) => (
              <Reveal key={trait.label} delay={0.2 + i * 0.07}>
                <li className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-2 size-1.5 shrink-0 bg-[var(--color-brand)]" />
                  <span>
                    <strong className="font-semibold text-[var(--color-fg)]">{trait.label} —</strong>{" "}
                    <span className="text-[var(--color-fg-muted)]">{trait.body}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.5}>
            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-[44px] items-center gap-2 border-b-2 border-[var(--color-brand)] pb-1 text-sm font-semibold text-[var(--color-brand)] transition-colors hover:text-[var(--color-brand-strong)]"
            >
              Commission your first system <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* record card */}
        <Reveal delay={0.2} y={28}>
          <CommissionRecord />
        </Reveal>
      </div>
    </section>
  );
}
