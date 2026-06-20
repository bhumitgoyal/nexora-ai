"use client";

import { motion } from "motion/react";
import { ShoppingCart, PhoneCall } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";
import { ServiceSpotlightCard } from "@/components/booklet/ServiceSpotlightCard";

export function D2CSpotlight2() {
  return (
    <Poster page="05 / 08" section="Spotlight · Conversion & Ops">
      <PosterDecor
        grid
        orbs={[
          { tone: "fuchsia", size: 340, className: "-top-32 left-1/3", animated: true },
          { tone: "brand", size: 300, className: "bottom-10 -right-24", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Spotlight · 02 of 02 · Conversion &amp; Ops
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[40px] leading-[1.05]"
      >
        Recover the sale. Confirm the order.
        <br />
        <span className="text-gradient">Stop the fakes.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Two builds that protect revenue at the two riskiest moments in the funnel: the cart
        that&rsquo;s about to be abandoned, and the COD order that might never get picked up.
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <ServiceSpotlightCard
          index={0}
          service={{
            icon: ShoppingCart,
            tone: "brand",
            title: "Cart Recovery & Win-Back Agent",
            tagline: "Personalized nudge within minutes, on the channel they actually use.",
            problem:
              "70% of carts get abandoned, and most brands send one generic discount email 24 hours later — by then, the intent is gone.",
            solution: [
              "Personalized nudge within minutes, on the channel they actually use",
              "Dynamic offer logic — not every cart needs a 10% discount to convert",
              "References the specific product left behind, not a generic \"come back\"",
              "Full attribution back to revenue recovered, tracked per campaign",
            ],
            tech: ["WhatsApp Cloud API", "Shopify Webhooks", "N8N", "Claude"],
          }}
        />

        <ServiceSpotlightCard
          index={1}
          service={{
            icon: PhoneCall,
            tone: "accent",
            title: "Order Confirmation Voice Agent",
            tagline: "Outbound call within minutes of order placement. Confirms. Converts. Cancels fakes.",
            problem:
              "COD orders that never get picked up cost brands a forward shipment and a reverse shipment — pure margin destruction, often from fake or impulsive orders.",
            solution: [
              "Outbound call within minutes of order placement",
              "Confirms address, size/variant, and genuine intent to receive",
              "Auto-cancels or flags suspicious orders before they ship",
              "Full transcript + outcome logged back into your order system",
            ],
            tech: ["VAPI", "Twilio", "ElevenLabs", "Shopify API"],
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 grid grid-cols-3 gap-2"
      >
        {[
          { v: "28%", l: "of abandoned carts typically recovered with timely personalization" },
          { v: "15–20%", l: "of COD orders are fake or never collected industry-wide" },
          { v: "2 min", l: "median time from order placed to confirmation call" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-3"
          >
            <div className="text-gradient-brand font-display text-[22px] font-semibold leading-none tracking-tight">
              {m.v}
            </div>
            <div className="mt-1.5 text-[9.5px] leading-tight text-[var(--color-fg-muted)]">
              {m.l}
            </div>
          </div>
        ))}
      </motion.div>
    </Poster>
  );
}
