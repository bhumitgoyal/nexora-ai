"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck, Terminal, Cpu, Clock, Layers } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/content/site";

const PILLARS = [
  {
    icon: Terminal,
    title: "Founder-built",
    description: "The person on your call is the engineer who ships it.",
  },
  {
    icon: Clock,
    title: "Demo every week",
    description: "Working software every 7 days. Never slide decks.",
  },
  {
    icon: ShieldCheck,
    title: "You own the code",
    description: "Runs in your cloud. Every repo is yours. No lock-in.",
  },
  {
    icon: Layers,
    title: "Battle-tested",
    description: "45+ systems live across 11 industries.",
  },
];

export function FounderTrust() {
  return (
    <section id="founder-engineering" className="border-t-2 border-[var(--color-border)] bg-[var(--color-bg)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The engineering model"
          title="No account managers. No junior handoffs. Direct founder engineering."
          subtitle="One engineer, start to finish. Nothing lost in handoffs."
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

                    <h3 className="font-display text-title-3 font-bold text-[var(--color-fg)]">
                      {pillar.title}
                    </h3>

                    <p className="text-callout leading-snug text-[var(--color-fg-muted)]">
                      {pillar.description}
                    </p>
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
              <div className="md:col-span-8 flex items-center gap-6">
                <div className="relative size-24 shrink-0 overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-hard-brand)] md:size-28">
                  <Image src="/bhumit.webp" alt={`${site.founder.name}, founder of Nuvero AI`} fill sizes="112px" className="object-cover grayscale" />
                </div>
                <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-[var(--color-brand)]" />
                  <span className="eyebrow font-bold text-[var(--color-brand)]">
                    Principal AI Engineer & Founder
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-fg)] md:text-3xl">
                  {site.founder.name}
                </h3>
                <p className="text-callout text-[var(--color-fg-muted)]">
                  Ships agentic systems that move real business metrics.
                </p>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-start gap-4 border-t border-[var(--color-border)] pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                <div className="flex flex-col gap-1">
                  <span className="eyebrow text-[var(--color-fg-muted)]">Verified deployments</span>
                  <span className="font-display text-2xl font-bold text-[var(--color-fg)]">45+ Live Systems</span>
                </div>
                <Link
                  href="/about"
                  className="eyebrow flex items-center gap-2 font-bold text-[var(--color-brand)] hover:underline"
                >
                  <span>About the engineer →</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
