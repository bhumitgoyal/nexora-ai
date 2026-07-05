"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Megaphone, Building2, ShoppingBag, Utensils, Boxes } from "lucide-react";
import { sectors, type Sector } from "@/content/sectors";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const sectorIcons: Record<string, React.ElementType> = {
  marketing: Megaphone,
  ecommerce: ShoppingBag,
  realestate: Building2,
  restaurants: Utensils,
  b2b: Boxes,
};

// Ink console: sidebar of systems on the left, the selected system's real
// workflow rendered as connected nodes on the right. Dark panel uses the
// brand ink — no off-palette colors.
function ServiceConsole({ sector }: { sector: Sector }) {
  const [active, setActive] = useState(0);
  const svc = sector.services[active];
  const chipIndex = svc.chip ? Math.min(1, svc.steps.length - 2) : -1;

  return (
    <div className="border border-t-0 border-[var(--color-border)] bg-[var(--color-fg)] text-[var(--color-bg)]">
      {/* mobile system selector */}
      <div className="flex gap-2 overflow-x-auto border-b border-[var(--color-bg)]/15 p-3 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sector.services.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActive(i)}
            className={`shrink-0 border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
              i === active
                ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                : "border-[var(--color-bg)]/25 text-[var(--color-bg)]/60"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        {/* sidebar */}
        <div className="hidden border-r border-[var(--color-bg)]/15 py-2 md:block">
          {sector.services.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-2 border-l-2 px-4 py-3 text-left text-sm transition-colors ${
                  isActive
                    ? "border-[var(--color-brand)] bg-[var(--color-bg)]/5 font-semibold text-[var(--color-bg)]"
                    : "border-transparent text-[var(--color-bg)]/50 hover:border-[var(--color-bg)]/30 hover:text-[var(--color-bg)]"
                }`}
              >
                <span className="min-w-0 flex-1">{s.name}</span>
                {isActive && s.stat && (
                  <span className="shrink-0 bg-[var(--color-brand)] px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.08em] text-white">
                    {s.stat}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* workflow panel */}
        <div className="min-w-0 p-5 md:p-7">
          {/* header line */}
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-bg)]/50 md:text-[11px]">
            <span className="font-bold text-[var(--color-bg)]">{svc.name}</span>
            {svc.stat && (
              <>
                {" "}· Result: <span className="font-bold text-[var(--color-bg)]">{svc.stat}</span>
              </>
            )}
          </p>

          {/* diagram label row */}
          <div className="mt-6 flex items-center justify-between gap-4 border-b border-[var(--color-bg)]/15 pb-2">
            <p className="min-w-0 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-bg)]/40">
              Real workflow diagram · {svc.steps.map((s) => s.name).join(" · ")}
            </p>
            <span className="flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-bg)]/60">
              <span className="size-1.5 animate-pulse bg-[var(--color-brand)]" />
              live
            </span>
          </div>

          {/* nodes */}
          <div className="mt-4 flex flex-col items-stretch gap-2 pt-6 md:flex-row md:items-center md:gap-0">
            {svc.steps.map((step, i) => (
              <div key={step.name} className="contents">
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 border border-[var(--color-bg)]/25 bg-[var(--color-bg)]/5 px-3 py-2.5">
                  <span className="truncate text-sm font-bold text-[var(--color-bg)]">{step.name}</span>
                  <span className="truncate font-mono text-[9px] text-[var(--color-bg)]/45">{step.sub}</span>
                </div>
                {i < svc.steps.length - 1 && (
                  <span className="relative flex shrink-0 items-center justify-center self-center px-1 font-mono text-sm text-[var(--color-bg)]/40 md:px-1.5">
                    <span className="hidden md:inline">→</span>
                    <span className="md:hidden">↓</span>
                    {i === chipIndex && (
                      <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap bg-[var(--color-brand)] px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.08em] text-white md:block">
                        {svc.chip}
                      </span>
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* how it works — full copy preserved */}
          <div className="mt-7">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-bg)]/40">
              How it works
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-bg)]/60">
              {svc.how}
            </p>
          </div>

          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-bg)] underline underline-offset-4 transition-colors hover:text-[var(--color-brand)]"
          >
            View case study <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Outcomes in production"
          title="Results already running, mapped to your workflows."
          subtitle="Every entry below is an outcome a real business collects today — carts recovered, calls answered, books closed. Start from a proven one, or bring us a workflow no one has automated yet."
        />

        <Reveal delay={0.12}>
          <Tabs defaultValue={sectors[0].id} className="mt-14">
            {/* Sector selector keyboard-navigable via arrow keys */}
            <div className="overflow-x-auto border border-[var(--color-border)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="flex h-auto min-w-max w-full justify-start rounded-none bg-transparent p-0">
                {sectors.map((s) => {
                  const Icon = sectorIcons[s.id];
                  return (
                    <TabsTrigger
                      key={s.id}
                      value={s.id}
                      className="flex min-h-[44px] items-center gap-2 border-r border-[var(--color-border)] px-5 py-3 text-sm font-semibold rounded-none transition-all duration-200 last:border-r-0 text-[var(--color-fg-muted)] shadow-none hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)] data-[state=active]:bg-[var(--color-brand)] data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      <Icon className="size-4" />
                      {s.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Console panels */}
            {sectors.map((s) => (
              <TabsContent
                key={s.id}
                value={s.id}
                className="mt-0 data-[state=active]:animate-tab-fade-in"
              >
                <ServiceConsole sector={s} />
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

        {/* CTA section */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-6 border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)] p-8 text-center md:p-12">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                Don&apos;t see your workflow here?
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                If it&apos;s manual, it&apos;s{" "}
                <span className="text-[var(--color-brand)]">automatable.</span>
              </h3>
              <p className="mx-auto max-w-xl text-sm text-[var(--color-fg-muted)] md:text-base">
                There is no fixed catalogue. We design the agents and orchestration around your
                exact operation — whatever the workflow, the infrastructure gets built for it.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
              >
                Book a free 30-min call <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                See deployed systems
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
