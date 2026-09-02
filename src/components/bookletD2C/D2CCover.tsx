"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShoppingBag, Mail, Phone, Globe } from "lucide-react";
import { site } from "@/content/site";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

export function D2CCover() {
  return (
    <Poster page="01 / 08" section="Cover" showWatermark={false}>
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 520, className: "-top-40 -left-40", animated: true },
          { tone: "accent", size: 440, className: "-bottom-32 -right-32", animated: true },
          { tone: "fuchsia", size: 320, className: "top-1/3 right-10", animated: true },
        ]}
      />

      <div className="flex h-full min-h-[260mm] flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/mark-red.png"
              alt=""
              width={448}
              height={440}
              className="h-9 w-auto"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-tight text-[var(--color-fg)]">
                Nuvero AI
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="poster-eyebrow"
          >
            <ShoppingBag className="size-3 text-[var(--color-accent)]" />
            For D2C &amp; E-Commerce Brands · 2026 Edition
          </motion.div>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="poster-title mt-5 text-[60px] leading-[0.96]"
          >
            <span className="text-gradient-brand">An AI store team</span>
            <br />
            <span className="text-gradient">that knows every</span>
            <br />
            customer
            <br />
            <span className="text-[var(--color-fg-muted)]">by name.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-7 max-w-[150mm] text-pretty text-[14px] leading-[1.55] text-[var(--color-fg-muted)]"
          >
            A boutique AI consultancy that builds brand-aware chatbots, AI stylists, voice
            order-confirmation agents, and full-funnel retention systems for D2C and
            e-commerce brands. Everything wires directly into Shopify, WhatsApp, and your
            existing stack.
          </motion.p>
        </div>

        <div className="flex items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)]">
              Prepared by
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
              {site.founder.name}
            </span>
            <span className="text-[12px] text-[var(--color-fg-muted)]">
              {site.founder.role}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col items-end gap-2 text-right"
          >
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-1.5 text-[11px] text-(--color-fg-muted) hover:text-(--color-fg)">
              <Mail className="size-3 text-[var(--color-accent)]" />
              {site.contact.email}
            </a>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] text-(--color-fg-muted) hover:text-(--color-fg)">
              <Globe className="size-3 text-[var(--color-accent)]" />
              nuvero.space
            </a>
            <a href={`tel:${site.contact.phoneRaw}`} className="inline-flex items-center gap-1.5 text-[11px] text-(--color-fg-muted) hover:text-(--color-fg)">
              <Phone className="size-3 text-[var(--color-accent)]" />
              {site.contact.phone}
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-brand)] opacity-60" />
      </div>
    </Poster>
  );
}
