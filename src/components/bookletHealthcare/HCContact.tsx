"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { site } from "@/content/site";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Best for proposals & scoping",
  },
  {
    icon: Phone,
    label: "Call / Mobile",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneRaw}`,
    note: "9 AM – 9 PM IST · global on request",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.contact.whatsapp,
    href: `https://wa.me/${site.contact.phoneRaw.replace("+", "")}`,
    note: "Fastest channel · usual reply in <2h",
  },
  {
    icon: Globe,
    label: "Website",
    value: "nexora-ai.vercel.app",
    href: site.url,
    note: "Live work, services & booking",
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", value: "in/bhumitgoyal", href: site.socials.linkedin },
  { icon: Github, label: "GitHub", value: "@bhumitgoyal", href: site.socials.github },
  { icon: Instagram, label: "Instagram", value: "@bhumitgoyal", href: site.socials.instagram },
  { icon: Twitter, label: "Twitter / X", value: "@bhumitgoyal", href: site.socials.twitter },
];

export function HCContact() {
  return (
    <Poster page="08 / 08" section="The Next Move" showWatermark={false}>
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 460, className: "-top-32 -left-32", animated: true },
          { tone: "accent", size: 420, className: "-bottom-32 -right-32", animated: true },
          { tone: "fuchsia", size: 280, className: "top-1/3 right-1/4", animated: true },
        ]}
      />

      <div className="flex h-full min-h-[260mm] flex-col">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="poster-eyebrow"
        >
          <Sparkles className="size-3 text-[var(--color-accent)]" />
          The next move
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="poster-title mt-7 text-[50px] leading-[1.0]"
        >
          Let&rsquo;s give your practice
          <br />
          <span className="text-gradient">the team it deserves.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="mt-5 max-w-[160mm] text-[13px] leading-[1.6] text-[var(--color-fg-muted)]"
        >
          We don&rsquo;t start from a service list. We start from your actual
          bottleneck. One 20–30 minute discovery call, no slides, no NDA.
          We&rsquo;ll map the two or three highest-leverage AI opportunities in
          your practice and tell you straight whether it&rsquo;s worth shipping,
          what it&rsquo;ll cost, and how fast we can have it live.
        </motion.p>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.005))] p-4 transition-colors hover:border-[var(--color-brand)]/60"
              >
                <div className="absolute -right-12 -top-12 size-32 rounded-full bg-[rgba(139,92,246,0.28)] blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--color-border-strong)] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_70%)]">
                    <Icon className="size-5 text-[var(--color-accent-strong)]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                      {c.label}
                    </div>
                    <div className="truncate font-display text-[15.5px] font-semibold tracking-tight text-[var(--color-fg)]">
                      {c.value}
                    </div>
                    <div className="mt-0.5 text-[10px] leading-tight text-[var(--color-fg-muted)]">
                      {c.note}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.55 }}
          className="mt-5 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
              Online
            </span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
              {site.founder.location}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2.5">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-2 transition-colors hover:border-[var(--color-accent)]/60"
                >
                  <Icon className="size-3.5 shrink-0 text-[var(--color-fg-muted)]" />
                  <div className="min-w-0">
                    <div className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                      {s.label}
                    </div>
                    <div className="truncate text-[10.5px] text-[var(--color-fg)]">
                      {s.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-auto pt-8"
        >
          <div className="rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.14),rgba(34,211,238,0.08))] p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                  Signed
                </div>
                <div className="mt-1 font-display text-[22px] font-semibold tracking-tight text-[var(--color-fg)]">
                  {site.founder.name}
                </div>
                <div className="text-[11px] text-[var(--color-fg-muted)]">
                  {site.founder.role} · {site.name}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
                  © {new Date().getFullYear()} Nexora AI · Healthcare Edition
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                  08 / 08 · Healthcare Services Booklet
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Poster>
  );
}
