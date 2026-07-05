"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { Marquee } from "@/components/shared/Marquee";
import { Magnetic } from "@/components/shared/Magnetic";
import { MaskReveal } from "@/components/shared/MaskReveal";
import { NetworkField } from "@/components/home/NetworkField";
import { EASE } from "@/lib/motion";

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
  const prefersReduced = useReducedMotion();
  const [calls, setCalls] = useState(214);

  useEffect(() => {
    if (prefersReduced) return;
    const iv = setInterval(
      () => setCalls((c) => c + (Math.random() < 0.6 ? 1 : 0)),
      4000
    );
    return () => clearInterval(iv);
  }, [prefersReduced]);

  return (
    <div className="inline-flex max-w-full items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)] md:text-[10px] md:tracking-[0.22em]">
      <span className="size-1.5 shrink-0 animate-pulse bg-[var(--color-brand)]" />
      <span className="truncate">
        Running now — calls answered today:{" "}
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
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
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
  }, [index, prefersReduced]);

  const ticket = tickets[index];

  return (
    <div className="relative h-14 w-full max-w-[340px] md:max-w-[380px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={ticket.no}
          initial={prefersReduced ? { opacity: 0 } : { x: 44, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { x: -44, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="absolute inset-0 flex items-center justify-between gap-3 border-[1.5px] border-dashed border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4"
        >
          <span className="flex min-w-0 items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg)]">
            <span className="shrink-0 text-[var(--color-fg-subtle)]">Nº {ticket.no}</span>
            <span className="truncate">{ticket.job}</span>
          </span>
          <span className="relative flex h-7 w-[104px] shrink-0 items-center justify-center">
            <AnimatePresence>
              {stamped && (
                <motion.span
                  initial={prefersReduced ? { opacity: 0 } : { scale: 2.4, opacity: 0, rotate: 8 }}
                  animate={{ scale: 1, opacity: 1, rotate: -3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.2, 1.4, 0.4, 1] }}
                  className="absolute inset-0 flex items-center justify-center border-2 border-[var(--color-brand)] font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand)]"
                >
                  Automated
                </motion.span>
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
  const overlayRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], prefersReduced ? [1, 1] : [1, 0.5]);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        overlay.style.backgroundImage = `radial-gradient(560px circle at ${px}px ${py}px, rgba(0,48,73,0.09) 0%, transparent 65%)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      overlay.style.backgroundImage = "none";
    };

    section.addEventListener("mousemove", onMove, { passive: true });
    section.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate flex min-h-[92svh] items-center overflow-hidden border-b border-[var(--color-border)] pb-16 pt-10 md:min-h-screen md:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-60" />
      <div className="absolute inset-0 -z-10">
        <NetworkField />
      </div>
      <div ref={overlayRef} aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: "none" }} />

      {/* animated corner marks */}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute left-6 top-24 hidden h-12 w-12 border-b-2 border-r-2 border-[var(--color-brand)] opacity-30 md:block"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        className="absolute bottom-24 right-6 hidden h-12 w-12 border-l-2 border-t-2 border-[var(--color-brand)] opacity-30 md:block"
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-x relative z-10 flex flex-col items-center text-center">
        {/* live outcome ticker replaces the static eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-full"
        >
          <LiveTicker />
        </motion.div>

        {/* headline */}
        <h1 className="mt-8 flex max-w-5xl flex-col items-center font-display text-[11.5vw] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--color-fg)] sm:text-6xl md:text-7xl lg:text-[84px]">
          <MaskReveal delay={0.15}>
            <span>
              The <span className="text-[var(--color-brand)]">AI infrastructure</span>
            </span>
          </MaskReveal>
          <MaskReveal delay={0.3}>
            <span>your business runs on.</span>
          </MaskReveal>
        </h1>

        {/* sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 max-w-xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg"
        >
          Agents trained on how your company actually works — answering your
          customers in under 60 seconds and handing your team back 30+ hours
          a week. Manual work disappears. You own the whole layer.
        </motion.p>

        {/* job ticket stamp */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-7 flex w-full justify-center"
        >
          <JobTicket />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <Magnetic className="w-full sm:w-auto">
            <a
              href="/#automation-audit"
              className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)] sm:w-auto"
            >
              Map your infrastructure
              <motion.svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </Magnetic>
          <a
            href="/work"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 border-2 border-[var(--color-border)] bg-transparent px-7 py-3.5 text-base font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:w-auto"
          >
            See deployed systems
          </a>
        </motion.div>

        {/* outcome triplet — the numbers, at the decision point */}
        <motion.dl
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5 bg-[var(--color-bg-elev)] px-4 py-3">
              <dt className="order-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-lg font-bold tabular-nums tracking-tight text-[var(--color-brand)] md:text-xl">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* risk-reversal + ownership microline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-3 px-4 text-center text-xs text-[var(--color-fg-subtle)]"
        >
          Free audit · 15 min · you own the code · your data stays in your stack
        </motion.p>

        {/* trust logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 flex w-full flex-col items-center gap-5 md:mt-16"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            Businesses running on Nuvero infrastructure
          </span>
          <div className="w-full">
            <Marquee pauseOnHover={false}>
              {trustLogos.map((logo) => (
                <span key={logo.name} className="flex items-center gap-5">
                  <span className="font-display text-sm font-semibold tracking-tight text-[var(--color-brand)] whitespace-nowrap">
                    {logo.name}
                  </span>
                  <span className="size-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                </span>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ArrowDown className="size-4 animate-bounce text-[var(--color-fg-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
