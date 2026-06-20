"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ArrowRight,
  Megaphone,
  Factory,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { sectors } from "@/content/sectors";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

const sectorIcons: Record<string, React.ElementType> = {
  marketing: Megaphone,
  ecommerce: ShoppingBag,
  manufacturing: Factory,
  restaurants: Utensils,
};

function ServiceCard({ service, index }: { service: { name: string; tagline: string; how: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className={`border border-[var(--color-border)] transition-all duration-200 ${
        open
          ? "border-[var(--color-brand)] bg-[var(--color-bg-elev)]"
          : "bg-[var(--color-bg)] hover:border-[var(--color-brand)] hover:bg-[var(--color-bg-elev)]"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <div className="flex flex-col gap-1">
          <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--color-fg)]">
            {service.name}
          </span>
          <span className="text-xs text-[var(--color-fg-muted)]">{service.tagline}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="mt-0.5 shrink-0 text-[var(--color-brand)]"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--color-border)] px-5 pb-5 pt-4">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                How it works
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {service.how}
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand)] underline underline-offset-4 hover:text-[var(--color-brand-strong)]"
                >
                  Build this for my business <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesPreview() {
  const [activeSector, setActiveSector] = useState(sectors[0].id);
  const current = sectors.find((s) => s.id === activeSector)!;

  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Problems we have already solved"
          title="Custom AI tools, built around your problem."
          subtitle="Either choose from existing solved problems, or contact us for custom AI tools — we build to fit, not the other way around."
        />

        {/* Sector selector */}
        <Reveal delay={0.12}>
          <div className="mt-14 flex flex-wrap gap-0 border border-[var(--color-border)]">
            {sectors.map((s) => {
              const Icon = sectorIcons[s.id];
              const active = s.id === activeSector;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSector(s.id)}
                  className={`flex items-center gap-2 border-r border-[var(--color-border)] px-5 py-3.5 text-sm font-semibold transition-all duration-200 last:border-r-0 ${
                    active
                      ? "bg-[var(--color-brand)] text-white"
                      : "text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)]"
                  }`}
                >
                  <Icon className="size-4" />
                  {s.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active sector panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-0 border border-t-0 border-[var(--color-border)] p-6 md:p-8"
          >
            <div className="mb-6 flex items-start gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                  {current.label}
                </span>
                <p className="text-sm text-[var(--color-fg-muted)]">{current.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {current.services.map((service, i) => (
                <ServiceCard key={service.name} service={service} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA section */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-6 border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)] p-8 text-center md:p-12">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                Doesn't match your needs?
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Your problem is still{" "}
                <span className="text-[var(--color-brand)]">solvable.</span>
              </h3>
              <p className="mx-auto max-w-xl text-sm text-[var(--color-fg-muted)] md:text-base">
                Give us a call or fill the form — we build personalized AI solutions to your
                exact problem, not generic tools dressed up for your industry.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
              >
                Describe your problem <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/what-we-offer"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                See all sectors
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
