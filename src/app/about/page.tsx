import type { Metadata } from "next";
import { Linkedin, Github, Instagram, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";
import { principles, aboutStats } from "@/content/techStack";
import { GradientOrb } from "@/components/shared/GradientOrb";
import { GridBackground } from "@/components/shared/GridBackground";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CountUp } from "@/components/shared/CountUp";
import { GlowButton } from "@/components/shared/GlowButton";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nexora AI is led by Bhumit Goyal — an AI engineer obsessed with shipping agentic systems that move real business metrics.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <GridBackground />
        <GradientOrb tone="brand" size={520} className="left-[-160px] top-[-100px]" />
        <GradientOrb tone="accent" size={420} className="right-[-120px] top-[20%]" />

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border-strong)] glass px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
                  About Nexora
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  An AI agency built like a <span className="text-gradient">product team</span>, not a consultancy.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
                  Nexora AI was founded on a simple belief: most businesses don't need
                  another AI vendor — they need a small, senior team that will design,
                  build, integrate, and own AI systems end-to-end. That's exactly what we do.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-3 pt-3">
                  <GlowButton href="/contact" size="md" withArrow>
                    Work with us
                  </GlowButton>
                  <GlowButton href="/work" size="md" variant="secondary">
                    See the work
                  </GlowButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative mx-auto aspect-square w-full max-w-sm">
                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,var(--color-brand),var(--color-accent))] opacity-60 blur-3xl" />
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-bg-elev)] p-8">
                  <span className="flex size-32 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-brand),var(--color-accent))] font-display text-5xl font-semibold text-white shadow-[0_0_60px_-12px_rgba(139,92,246,0.6)]">
                    BG
                  </span>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="font-display text-xl font-semibold tracking-tight">
                      {site.founder.name}
                    </span>
                    <span className="text-xs text-[var(--color-fg-muted)]">
                      {site.founder.role}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <SocialPill href={site.socials.linkedin} label="LinkedIn">
                      <Linkedin className="size-3.5" />
                    </SocialPill>
                    <SocialPill href={site.socials.github} label="GitHub">
                      <Github className="size-3.5" />
                    </SocialPill>
                    <SocialPill href={site.socials.instagram} label="Instagram">
                      <Instagram className="size-3.5" />
                    </SocialPill>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <SectionHeader
            eyebrow="Founder note"
            title="Hi, I'm Bhumit."
            align="left"
            className="max-w-md"
          />
          <Reveal>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-[var(--color-fg)] md:text-lg">
              <p>
                {site.founder.bio}
              </p>
              <p className="text-[var(--color-fg-muted)]">
                Over the last few years I've shipped voice agents that field every inbound
                call, WhatsApp copilots that remember every member, lead-gen pipelines that
                deliver verified prospects for cents, and end-to-end marketing systems that
                cut campaign setup from a week to an afternoon. The common thread? AI
                integrated into real workflows, owned by the business, and instrumented
                to move a number.
              </p>
              <p className="text-[var(--color-fg-muted)]">
                I work closely with a small bench of senior engineers and designers. We
                deliberately stay small so every project gets senior attention — and we
                ship faster because of it.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-white/[0.02] px-4 py-2 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)]"
                >
                  <Mail className="size-4 text-[var(--color-accent)]" />
                  {site.contact.email}
                </a>
                <a
                  href={`tel:${site.contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-white/[0.02] px-4 py-2 text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)]"
                >
                  <Phone className="size-4 text-[var(--color-accent)]" />
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <SectionHeader eyebrow="By the numbers" title="A few stats from the last 24 months." />
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {aboutStats.map((s, i) => {
            const numericMatch = s.metric.match(/[\d.]+/);
            const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;
            const suffix = s.metric.replace(/[\d.]+/, "");
            return (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="flex flex-col gap-2 card-surface p-6 text-center">
                  <span className="text-gradient-brand font-display text-4xl font-semibold tracking-tight md:text-5xl">
                    <CountUp value={numeric} suffix={suffix} decimals={s.metric.includes(".") ? 1 : 0} />
                  </span>
                  <span className="text-xs text-[var(--color-fg-muted)]">{s.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <SectionHeader
          eyebrow="What we believe"
          title="Four principles that shape every engagement."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex flex-col gap-3 card-surface p-7">
                <span className="font-mono text-xs text-[var(--color-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function SocialPill({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-fg-muted)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-fg)]"
    >
      {children}
    </a>
  );
}
