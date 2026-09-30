"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/shared/Marquee";
import { Magnetic } from "@/components/shared/Magnetic";
import { MaskReveal } from "@/components/shared/MaskReveal";
import { Reveal } from "@/components/shared/Reveal";
import { Stamp } from "@/components/shared/Stamp";
import { NetworkField } from "@/components/home/NetworkField";
import { EASE, DURATION } from "@/lib/motion";
import { site } from "@/content/site";
import { useAmbientMotion } from "@/hooks/useMotionPreference";

const trustLogos = [
  { name: "Southwest Gases", industry: "Energy & Utilities" },
  { name: "GoHappy Club", industry: "Senior Wellness · D2C" },
  { name: "Welders Supply USA", industry: "Industrial Supply" },
  { name: "Marketrz Agency", industry: "Marketing & Media" },
  { name: "CarBuddy Delhi", industry: "Automotive · D2C" },
  { name: "Velocity Watches", industry: "Luxury E-commerce" },
  { name: "Lifestyle Projects", industry: "Real Estate" },
  { name: "The Health Factory", industry: "Health & Wellness" },
  { name: "Arch Design", industry: "Architecture & Design" },
  { name: "Arya Dining", industry: "Hospitality & F&B" },
];

const tickets = [
  { no: "047", job: "Lead follow-up" },
  { no: "112", job: "Cart recovery" },
  { no: "203", job: "Inbound calls" },
  { no: "318", job: "Morning reports" },
  { no: "426", job: "Invoice matching" },
  { no: "531", job: "Review replies" },
];

// Live outcome ticker — the first thing on the page is work being done,
// not a claim. Numbers tick like a meter, never rounded.
function LiveTicker() {
  const ambient = useAmbientMotion();
  const [calls, setCalls] = useState(214);

  useEffect(() => {
    if (!ambient) return;
    const iv = setInterval(
      () => setCalls((c) => c + (Math.random() < 0.6 ? 1 : 0)),
      4000
    );
    return () => clearInterval(iv);
  }, [ambient]);

  return (
    <div className="eyebrow inline-flex max-w-full items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2 text-[var(--color-fg-subtle)]">
      <span className="size-1.5 shrink-0 animate-pulse bg-[var(--color-brand)]" />
      <span className="truncate">
        Running now · calls answered today:{" "}
        <span className="font-bold tabular-nums text-[var(--color-fg)]">{calls}</span>
        <span className="hidden sm:inline">
          {" "}· hours returned this week:{" "}
          <span className="font-bold tabular-nums text-[var(--color-fg)]">31.5</span>
        </span>
      </span>
    </div>
  );
}

const heroStats = [
  { value: "4 hrs → 60 sec", label: "lead response time" },
  { value: "31.5 hrs/wk", label: "returned per team" },
  { value: "45 systems", label: "in production today" },
];

// A work order gets pulled, stamped AUTOMATED, and the next one slides in.
// Print-shop brutalism: this is Nuvero's version of a hero animation.
function JobTicket() {
  const ambient = useAmbientMotion();
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    if (!ambient) {
      setStamped(true);
      return;
    }
    setStamped(false);
    const stampTimer = setTimeout(() => setStamped(true), 900);
    const nextTimer = setTimeout(() => setIndex((i) => (i + 1) % tickets.length), 2600);
    return () => {
      clearTimeout(stampTimer);
      clearTimeout(nextTimer);
    };
  }, [index, ambient]);

  const ticket = tickets[index];

  return (
    <div className="relative h-14 w-full max-w-[340px] md:max-w-[380px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={ticket.no}
          initial={prefersReduced ? { opacity: 0 } : { x: 44, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { x: -44, opacity: 0 }}
          transition={{ duration: DURATION.fast, ease: EASE }}
          className="absolute inset-0 flex items-center justify-between gap-3 border-[1.5px] border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4"
        >
          <span className="eyebrow flex min-w-0 items-baseline gap-3 text-[var(--color-fg)]">
            <span className="shrink-0 text-[var(--color-fg-subtle)]">Nº {ticket.no}</span>
            <span className="truncate">{ticket.job}</span>
          </span>
          <span className="relative flex h-7 w-[104px] shrink-0 items-center justify-center">
            <AnimatePresence>
              {stamped && (
                <Stamp key={ticket.no} rotate={-3} className="absolute inset-0">
                  Automated
                </Stamp>
              )}
            </AnimatePresence>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], prefersReduced ? [1, 1] : [1, 0.5]);

  // Everything above the fold reveals with CSS from first paint (Reveal/MaskReveal
  // `priority`) — the headline is the LCP element and must never wait for JS.
  return (
    <section ref={sectionRef} className="relative isolate flex min-h-[92svh] items-center overflow-hidden border-b border-[var(--color-border)] pb-16 pt-10 md:min-h-screen md:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-60" />
      <div className="absolute inset-0 -z-10">
        <NetworkField />
      </div>

      <span aria-hidden className="nv-fade-in absolute left-6 top-24 hidden h-12 w-12 border-b-2 border-r-2 border-[var(--color-brand)] opacity-30 md:block" style={{ "--nv-delay": "1.1s" } as React.CSSProperties} />
      <span aria-hidden className="nv-fade-in absolute bottom-24 right-6 hidden h-12 w-12 border-l-2 border-t-2 border-[var(--color-brand)] opacity-30 md:block" style={{ "--nv-delay": "1.2s" } as React.CSSProperties} />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x relative z-10 flex flex-col items-center text-center">
        <Reveal priority className="max-w-full">
          <LiveTicker />
        </Reveal>

        <h1 className="mt-8 flex max-w-5xl flex-col items-center font-display text-display font-bold text-[var(--color-fg)]">
          <MaskReveal priority delay={0.1}>
            <span>
              The <span className="text-[var(--color-brand)]">AI infrastructure</span>
            </span>
          </MaskReveal>
          <MaskReveal priority delay={0.22}>
            <span>your business runs on.</span>
          </MaskReveal>
        </h1>

        <Reveal priority delay={0.45}>
          <p className="mt-6 max-w-xl text-pretty text-lead text-[var(--color-fg-muted)]">
            Agents trained on how your company actually works, answering your
            customers in under 60 seconds and handing your team back 30+ hours
            a week. Manual work disappears. You own the whole layer.
          </p>
        </Reveal>

        <Reveal priority delay={0.55} className="mt-7 flex w-full justify-center">
          <JobTicket />
        </Reveal>

        <Reveal priority delay={0.65} className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Magnetic className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="press group inline-flex min-h-12 w-full items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-hard)] transition-colors hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)] sm:w-auto"
            >
              {site.cta.primary}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
          </Magnetic>
          <Link
            href="/work"
            className="press inline-flex min-h-12 w-full items-center justify-center gap-2 border-2 border-[var(--color-border)] bg-transparent px-7 py-3.5 text-base font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:w-auto"
          >
            {site.cta.secondary}
          </Link>
        </Reveal>

        <Reveal priority delay={0.75} className="mt-8 w-full max-w-2xl">
          <dl className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5 bg-[var(--color-bg-elev)] px-4 py-3">
                <dt className="eyebrow order-2 text-[var(--color-fg-subtle)]">{s.label}</dt>
                <dd className="order-1 font-display text-xl font-bold tabular-nums tracking-tight text-[var(--color-brand)]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 px-4 text-center text-callout text-[var(--color-fg-subtle)]">
            30-min call · you own the code · your data stays in your stack
          </p>
        </Reveal>

        <Reveal priority delay={0.9} className="mt-14 flex w-full flex-col items-center gap-5 md:mt-16">
          <h2 className="eyebrow text-[var(--color-fg-subtle)]">
            Businesses running on Nuvero infrastructure
          </h2>
          <div className="w-full">
            <Marquee>
              {trustLogos.map((logo) => (
                <span key={logo.name} className="flex items-center gap-5">
                  <span className="whitespace-nowrap font-display text-base font-semibold tracking-tight text-[var(--color-fg)]">
                    {logo.name}
                  </span>
                  <span aria-hidden className="size-1.5 shrink-0 bg-[var(--color-brand)]" />
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
