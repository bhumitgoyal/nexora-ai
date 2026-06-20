"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Wallet,
  Layers,
  Infinity as InfinityIcon,
  Sparkles,
} from "lucide-react";
import { Poster } from "./Poster";
import { PosterDecor } from "./PosterDecor";
import { techStack, principles } from "@/content/techStack";

const valueProps = [
  {
    icon: Wallet,
    title: "Affordable, not cheap",
    body:
      "Strategy sprints from $4k. Custom builds $8k–$40k. Boutique-grade outcomes at agency-disrupting prices.",
    accent: "brand",
  },
  {
    icon: Layers,
    title: "Structured, not chaotic",
    body:
      "Discovery → Design → Build → Integrate → Scale. Weekly demos, locked KPIs, written runbooks. No mystery cycles.",
    accent: "accent",
  },
  {
    icon: ShieldCheck,
    title: "Shipped, not stalled",
    body:
      "47+ systems in production. 94% client retention. Zero launches missed in the last 18 months.",
    accent: "brand",
  },
  {
    icon: InfinityIcon,
    title: "Long-term, not one-off",
    body:
      "Every engagement includes 30 days post-launch optimization. Most clients move to a monthly retainer for compounding improvements.",
    accent: "accent",
  },
];

const stackByGroup = {
  Ops: techStack.filter((t) => t.category === "ops"),
  Sales: techStack.filter((t) => t.category === "sales"),
  Marketing: techStack.filter((t) => t.category === "marketing"),
  Finance: techStack.filter((t) => t.category === "finance"),
  Support: techStack.filter((t) => t.category === "support"),
};

export function PosterWhyUs() {
  return (
    <Poster page="13 / 14" section="Why Nexora">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 360, className: "-top-28 -left-24", animated: true },
          { tone: "accent", size: 320, className: "-bottom-24 -right-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        <Sparkles className="size-3 text-[var(--color-accent)]" />
        Why Nexora
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Affordable. Structured.
        <br />
        <span className="text-gradient">Reliably shipped.</span>{" "}
        <span className="text-[var(--color-fg-muted)]">Built to compound.</span>
      </motion.h2>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {valueProps.map((v, i) => {
          const Icon = v.icon;
          const isBrand = v.accent === "brand";
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.005))] p-4"
            >
              <div
                className={`absolute -right-10 -top-10 size-32 rounded-full blur-3xl ${
                  isBrand ? "bg-[rgba(139,92,246,0.3)]" : "bg-[rgba(34,211,238,0.28)]"
                }`}
              />
              <div className="flex items-start gap-3">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--color-border-strong)] ${
                    isBrand
                      ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent_70%)]"
                      : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_70%)]"
                  }`}
                >
                  <Icon
                    className={`size-5 ${
                      isBrand ? "text-[var(--color-brand-strong)]" : "text-[var(--color-accent-strong)]"
                    }`}
                  />
                </span>
                <div>
                  <h3 className="font-display text-[15.5px] font-semibold tracking-tight text-[var(--color-fg)]">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-[1.55] text-[var(--color-fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.55 }}
        className="mt-5 grid grid-cols-2 gap-3"
      >
        {principles.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3"
          >
            <div className="font-display text-[12.5px] font-semibold tracking-tight text-[var(--color-fg)]">
              {p.title}
            </div>
            <p className="mt-1 text-[10.5px] leading-[1.5] text-[var(--color-fg-muted)]">
              {p.body}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.55 }}
        className="mt-5 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[14px] font-semibold tracking-tight text-[var(--color-fg)]">
            The stack we ship on
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
            Deployed in your cloud · zero lock-in
          </span>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2.5">
          {Object.entries(stackByGroup).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-1.5">
              <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                {group}
              </div>
              <ul className="flex flex-col gap-0.5">
                {items.map((t) => (
                  <li
                    key={t.name}
                    className="text-[10px] leading-tight text-[var(--color-fg-muted)]"
                  >
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </Poster>
  );
}
