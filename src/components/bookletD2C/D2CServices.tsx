"use client";

import { motion } from "motion/react";
import { Bot, Sparkles, ShoppingCart, PhoneCall, Truck, Heart } from "lucide-react";
import { Poster } from "@/components/booklet/Poster";
import { PosterDecor } from "@/components/booklet/PosterDecor";

const services = [
  {
    no: "01",
    icon: Bot,
    title: "Brand-Aware Customer Chatbot",
    tagline: "A WhatsApp + web assistant trained on your catalog, FAQs, and tone. It remembers every past order and preference per customer.",
    accent: "brand" as const,
  },
  {
    no: "02",
    icon: Sparkles,
    title: "AI Stylist / Product Advisor",
    tagline: "Ask \"how do I style this?\" and get an answer pulled from your real catalog: outfit pairing, sizing logic, and \"customers also bought.\"",
    accent: "accent" as const,
  },
  {
    no: "03",
    icon: ShoppingCart,
    title: "Cart Recovery & Win-Back Agent",
    tagline: "Personalized nudges the moment a cart is abandoned. Channel-aware, time-aware, with the right discount at the right moment instead of a blanket coupon.",
    accent: "brand" as const,
  },
  {
    no: "04",
    icon: PhoneCall,
    title: "Order Confirmation Voice Agent",
    tagline: "An outbound voice call before dispatch that confirms address, size, and intent. It catches fake COD orders before they cost you a return shipment.",
    accent: "accent" as const,
  },
  {
    no: "05",
    icon: Truck,
    title: "WhatsApp Order Tracking Bot",
    tagline: "\"Where's my order?\" answered instantly, pulled live from your courier + order system. No human needed, no hold time.",
    accent: "brand" as const,
  },
  {
    no: "06",
    icon: Heart,
    title: "Retention & Personalization Engine",
    tagline: "Post-purchase flows that adapt per customer: replenishment nudges, restock alerts, and loyalty messaging that actually reflects what they bought.",
    accent: "accent" as const,
  },
];

export function D2CServices() {
  return (
    <Poster page="03 / 08" section="Services">
      <PosterDecor
        grid
        orbs={[
          { tone: "brand", size: 340, className: "-top-24 -right-20", animated: true },
          { tone: "accent", size: 280, className: "bottom-20 -left-20", animated: true },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="poster-eyebrow"
      >
        Services
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="poster-title mt-6 text-[42px] leading-[1.05]"
      >
        Seven builds we ship often.{" "}
        <span className="text-gradient">Not the only seven</span>
        <br />
        we build.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 max-w-[160mm] text-[12.5px] leading-[1.55] text-[var(--color-fg-muted)]"
      >
        Every service below is a production system we&rsquo;ve actually shipped for a D2C brand,
        not a pilot or a concept deck. They&rsquo;re listed because they&rsquo;re common, not
        because they&rsquo;re the only options.
      </motion.p>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isBrand = s.accent === "brand";
          const accentColor = isBrand
            ? "text-[var(--color-brand-strong)]"
            : "text-[var(--color-accent-strong)]";
          const accentBg = isBrand
            ? "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.28),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_70%)]";
          return (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.45 }}
              className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.005))] p-3.5"
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-9 place-items-center rounded-lg border border-[var(--color-border-strong)] ${accentBg}`}>
                  <Icon className={`size-4 ${accentColor}`} />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
                  {s.no}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[12.5px] font-semibold leading-tight tracking-tight text-[var(--color-fg)]">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[10px] leading-[1.45] text-[var(--color-fg-muted)]">
                {s.tagline}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 rounded-xl border border-dashed border-[var(--color-border-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))] px-5 py-4"
      >
        <p className="text-[11.5px] leading-[1.55] text-[var(--color-fg-muted)] italic">
          Don&rsquo;t see your problem here? Good. That usually means it&rsquo;s specific to your
          store, which is exactly the kind of build we like best. Tell us what&rsquo;s actually
          broken and we&rsquo;ll scope it for free before you commit to anything.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-3 flex items-center justify-between rounded-xl border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(139,92,246,0.10),rgba(34,211,238,0.06))] px-5 py-4"
      >
        <p className="font-display text-[14px] tracking-tight text-[var(--color-fg)]">
          The next two pages go deep on the four builds that move revenue fastest for D2C brands.
        </p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
          → pages 04–05
        </span>
      </motion.div>
    </Poster>
  );
}
