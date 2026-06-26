"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ArrowRight,
  Megaphone,
  Building2,
  ShoppingBag,
  Utensils,
  BarChart2,
  Search,
  TrendingUp,
  UserPlus,
  Send,
  Zap,
  ShoppingCart,
  Phone,
  Bot,
  Target,
  MessageCircle,
  Users,
  FileText,
  Bell,
  Home,
  Wrench,
  PenLine,
  Calculator,
  Star,
  CalendarDays,
  LayoutGrid,
} from "lucide-react";
import { sectors } from "@/content/sectors";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const sectorIcons: Record<string, React.ElementType> = {
  marketing: Megaphone,
  ecommerce: ShoppingBag,
  realestate: Building2,
  restaurants: Utensils,
};

const serviceIcons: Record<string, React.ElementType> = {
  "Unified AI Reporting Engine": BarChart2,
  "AI SEO Engine": Search,
  "AI Ad Campaign Optimizer": TrendingUp,
  "AI Onboarding Agent": UserPlus,
  "Client Outreach Automation": Send,
  "AI Content Engine": PenLine,
  "Workflow Automation": Zap,
  "Cart Recovery Automation": ShoppingCart,
  "Confirmation Call Automation": Phone,
  "Personalized AI Chatbot": Bot,
  "Lead Generation System": Target,
  "Instagram Comment Automation": MessageCircle,
  "AI Lead Nurturing Agent": Users,
  "Listing Description Generator": FileText,
  "Lease Renewal and Reminder Automation": Bell,
  "Tenant Communication Bot": Home,
  "Maintenance Request Routing System": Wrench,
  "Monthly Property Performance Reports": BarChart2,
  "AI Marketing Automation": Megaphone,
  "Reconciliation Agent": Calculator,
  "Review & Feedback Mining Agent": Star,
  "AI Staff Scheduling Agent": CalendarDays,
  "Demand Forecasting Model": TrendingUp,
  "Reservation & Table Optimization Agent": LayoutGrid,
};

function ServiceCard({ service, index }: { service: { name: string; tagline: string; how: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = serviceIcons[service.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
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
        <div className="flex items-start gap-3">
          {Icon && (
            <span className="mt-0.5 shrink-0 text-[var(--color-brand)]">
              <Icon className="size-4" />
            </span>
          )}
          <div className="flex flex-col gap-1">
            <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--color-fg)]">
              {service.name}
            </span>
            <span className="text-xs text-[var(--color-fg-muted)]">{service.tagline}</span>
          </div>
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
  return (
    <section className="relative border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Problems we have already solved"
          title="Custom AI tools, built around your problem."
          subtitle="Either choose from existing solved problems, or contact us for custom AI tools we build to fit, not the other way around."
        />

        <Reveal delay={0.12}>
          <Tabs defaultValue={sectors[0].id} className="mt-14">
            {/* Sector selector keyboard-navigable via arrow keys */}
            <div className="overflow-x-auto border border-[var(--color-border)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="flex h-auto min-w-max w-full justify-start rounded-none bg-transparent p-0">
                {sectors.map((s) => {
                  const Icon = sectorIcons[s.id];
                  return (
                    <TabsTrigger
                      key={s.id}
                      value={s.id}
                      className="flex min-h-[44px] items-center gap-2 border-r border-[var(--color-border)] px-5 py-3 text-sm font-semibold rounded-none transition-all duration-200 last:border-r-0 text-[var(--color-fg-muted)] shadow-none hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)] data-[state=active]:bg-[var(--color-brand)] data-[state=active]:text-white data-[state=active]:shadow-none"
                    >
                      <Icon className="size-4" />
                      {s.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Content panels */}
            {sectors.map((s) => (
              <TabsContent
                key={s.id}
                value={s.id}
                className="mt-0 border border-t-0 border-[var(--color-border)] p-6 md:p-8 data-[state=active]:animate-tab-fade-in"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-fg)]">
                      {s.label}
                    </span>
                    <p className="text-sm text-[var(--color-fg-muted)]">{s.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {s.services.map((service, i) => (
                    <ServiceCard key={service.name} service={service} index={i} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

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
                Give us a call or fill the form we build personalized AI solutions to your
                exact problem, not generic tools dressed up for your industry.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)]"
              >
                Book a free 30-min call <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                See our work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
