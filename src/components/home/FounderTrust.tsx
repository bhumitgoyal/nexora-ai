"use client";

import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Terminal, Cpu, Clock, Layers } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/content/site";

const PILLARS = [
  {
    icon: Terminal,
    title: "Direct Founder Engineering",
    description: "You partner directly with Bhumit Goyal. The person on your discovery call is the engineer writing the prompts, wiring the APIs, and deploying the cloud infrastructure. Zero translation layers.",
  },
  {
    icon: Clock,
    title: "7-Day Milestone Demos",
    description: "We ship working software every single week. You inspect working code and live agent dialogues on day 7, not slide decks at the end of the month.",
  },
  {
    icon: ShieldCheck,
    title: "Full Code Sovereignty",
    description: "100% of your software runs in your own Google Cloud, AWS, or Azure environment. You own all Git repositories, container configurations, and database schemas with zero vendor lock-in.",
  },
  {
    icon: Layers,
    title: "Production Battle-Tested",
    description: "Over 45 systems actively running in production across 11 industries. Every pattern we build has been hardened against real-world edge cases and carrier rate limits.",
  },
];

export function FounderTrust() {
  return (
    <section id="founder-engineering" className="border-t-2 border-[var(--color-border)] bg-[var(--color-bg)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Engineering Model"
          title="No account managers. No junior handoffs. Direct founder engineering."
          subtitle="Large agencies sell you with senior partners and pass your build to junior subcontractors. Nuvero is built on direct founder-led engineering: technical precision, sub-second latency, and unmatched velocity."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-0 border border-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4 bg-[var(--color-bg-elev)]">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between border-b border-[var(--color-border)] p-8 md:border-b-0 md:border-r last:border-r-0 hover:bg-[var(--color-surface)] transition-colors"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg)]">
                        <Icon className="size-5 text-[var(--color-brand)]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--color-brand)]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[var(--color-fg)]">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                      ■ Standard Operating Protocol
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Founder Bio Callout Box */}
        <Reveal delay={0.2}>
          <div className="mt-10 border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] p-8 md:p-10 shadow-[6px_6px_0_var(--color-border)]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-[var(--color-brand)]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                    Principal AI Engineer & Founder
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-fg)] md:text-3xl">
                  {site.founder.name}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
                  {site.founder.bio}
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col items-start gap-4 border-t border-[var(--color-border)] pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] text-[var(--color-fg-subtle)] uppercase">Verified Deployments</span>
                  <span className="font-display text-2xl font-bold text-[var(--color-fg)]">45+ Live Systems</span>
                </div>
                <Link
                  href="/about"
                  className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)] hover:underline"
                >
                  <span>Read our engineering manifesto →</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
