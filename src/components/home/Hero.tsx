"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/shared/Marquee";

const trustLogos = [
  {
    name: "Southwest Gases",
    industry: "Energy & Utilities",
    metric: "97% of inbound calls resolved without human handoff",
    slug: "southwest-gases-voice-concierge",
  },
  {
    name: "GoHappy Club",
    industry: "Senior Wellness · D2C",
    metric: "70%+ AI cache hit rate, ~60% lower LLM cost",
    slug: "gohappy-club-member-assistant",
  },
  {
    name: "Welders Supply USA",
    industry: "Industrial Supply",
    metric: "Outbound follow-up fully automated end-to-end",
    slug: null,
  },
  {
    name: "Marketrz Agency",
    industry: "Marketing & Media",
    metric: "Multi-channel campaigns in <15 min from one brief",
    slug: null,
  },
  {
    name: "CarBuddy Delhi",
    industry: "Automotive · D2C",
    metric: "Lead nurturing & qualification running 24/7",
    slug: null,
  },
  {
    name: "Velocity Watches",
    industry: "Luxury E-commerce",
    metric: "Cart recovery + post-purchase flows automated",
    slug: null,
  },
  {
    name: "Lifestyle Projects",
    industry: "Real Estate",
    metric: "Lead qualification and follow-up fully automated",
    slug: null,
  },
  {
    name: "Signature Global",
    industry: "Real Estate",
    metric: "AI-driven buyer engagement across channels",
    slug: null,
  },
  {
    name: "The Health Factory",
    industry: "Health & Wellness",
    metric: "Patient intake and follow-up flows fully automated",
    slug: null,
  },
  {
    name: "Arch Design",
    industry: "Architecture & Design",
    metric: "Client intake and project scoping automated",
    slug: null,
  },
  {
    name: "Arya Dining",
    industry: "Hospitality & F&B",
    metric: "Reservations and guest experience automated",
    slug: null,
  },
];

const words = ["Your", "team", "closes", "deals.", "AI", "handles", "the", "rest."];

const outcomeTags = [
  "Revenue growth",
  "Ops automation",
  "E-commerce scale",
  "Lead generation",
];

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
    <section ref={sectionRef} className="relative isolate flex min-h-[88vh] items-center overflow-hidden border-b border-[var(--color-border)] pb-20 pt-12 md:min-h-screen md:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-60" />
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
        {/* eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-fg-muted)]"
        >
          <span className="size-1.5 bg-[var(--color-brand)]" />
          Custom AI · Built in your stack · Shipped in weeks
        </motion.div>

        {/* animated word-by-word headline */}
        <h1 className="mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-1 font-display text-5xl font-semibold leading-none tracking-tight md:text-7xl lg:text-[80px]">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                word === "AI"
                  ? "text-[var(--color-brand)]"
                  : "text-[var(--color-fg)]"
              }
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-7 max-w-2xl text-pretty text-base text-[var(--color-fg-muted)] md:text-lg"
        >
          Custom AI that cuts 8+ hours of manual work per person every week — and answers
          your customers in under 60 seconds, 24/7. Built in your stack. Shipped in 6 weeks.
          You own it forever.
        </motion.p>

        {/* outcome tags */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.5 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          {outcomeTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-fg-subtle)]"
            >
              <span className="size-1 bg-[var(--color-brand)]" />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="/#automation-audit"
            className="group inline-flex w-full items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)] sm:w-auto"
          >
            Get your free automation audit
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
          <a
            href="/work"
            className="inline-flex w-full items-center justify-center gap-2 border-2 border-[var(--color-border)] bg-transparent px-7 py-3.5 text-base font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:w-auto"
          >
            See our work
          </a>
        </motion.div>

        {/* pricing anchor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-2 text-xs text-[var(--color-fg-subtle)]"
        >
          Builds from ₹1,20,000 · retainers from ₹40,000/mo · if we miss the agreed KPI, we rebuild free
        </motion.p>

        {/* trust logos with hover cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-20 flex w-full flex-col items-center gap-5"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            Trusted by teams shipping with us
          </span>
          {/* Mobile: auto-sliding single line */}
          <div className="md:hidden w-full">
            <Marquee pauseOnHover={false}>
              {trustLogos.map((logo) => (
                <span key={logo.name} className="flex items-center gap-4">
                  <span className="font-display text-sm font-semibold tracking-tight text-[var(--color-brand)] whitespace-nowrap">
                    {logo.name}
                  </span>
                  <span className="size-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                </span>
              ))}
            </Marquee>
          </div>

          {/* Desktop: same scrolling style */}
          <div className="hidden md:block w-full">
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
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ArrowDown className="size-4 animate-bounce text-[var(--color-fg-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
