"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { DURATION, EASE } from "@/lib/motion";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { site } from "@/content/site";
import { Magnetic } from "@/components/shared/Magnetic";

export function QuickContact() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // HIG: floating controls shouldn't sit on content at rest. It stays out of
  // the hero (which has its own CTA) and appears once you've scrolled past it.
  useMotionValueEvent(scrollY, "change", (y) => setShown(y > 640));

  if (pathname.startsWith("/booklet") || pathname === "/contact") return null;

  return (
    <>
      <AnimatePresence>
        {shown || open ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: DURATION.fast, ease: EASE }}
            className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-40 md:bottom-8 md:right-8"
          >
            <Magnetic>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Get in touch"
                className="press inline-flex min-h-12 min-w-12 items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-4 text-sm font-semibold text-white shadow-[var(--shadow-hard-sm)] transition-colors hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]"
              >
                <MessageCircle aria-hidden className="size-4" />
                <span className="hidden sm:inline">Get in touch</span>
              </button>
            </Magnetic>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 rounded-none border border-[var(--color-border)] bg-[var(--color-bg)] p-0 shadow-[8px_8px_0_var(--color-brand)] sm:max-w-sm">
          <div className="border-b border-[var(--color-border)] p-6">
            <DialogTitle className="font-display text-xl font-semibold tracking-tight">
              Get in touch
            </DialogTitle>
            <DialogDescription className="mt-1 text-sm text-[var(--color-fg-muted)]">
              Pick the fastest way to reach us.
            </DialogDescription>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <a
              href={`mailto:${site.contact.email}`}
              className="group flex items-center gap-4 border border-[var(--color-border)] p-4 transition hover:border-[var(--color-brand)] hover:bg-[var(--color-bg-elev)]"
            >
              <Mail className="size-5 shrink-0 text-[var(--color-accent-ink)]" />
              <div className="flex flex-col">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">Email</span>
                <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">{site.contact.email}</span>
              </div>
            </a>
            <a
              href={`tel:${site.contact.phoneRaw}`}
              className="group flex items-center gap-4 border border-[var(--color-border)] p-4 transition hover:border-[var(--color-brand)] hover:bg-[var(--color-bg-elev)]"
            >
              <Phone className="size-5 shrink-0 text-[var(--color-accent-ink)]" />
              <div className="flex flex-col">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">Call</span>
                <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">{site.contact.phone}</span>
              </div>
            </a>
            <a
              href={`https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-[var(--color-border)] p-4 transition hover:border-[var(--color-brand)] hover:bg-[var(--color-bg-elev)]"
            >
              <MessageCircle className="size-5 shrink-0 text-[var(--color-accent-ink)]" />
              <div className="flex flex-col">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">WhatsApp</span>
                <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-brand)]">Message us directly</span>
              </div>
            </a>
          </div>

          <div className="border-t border-[var(--color-border)] p-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-brand-strong)]"
            >
              Full contact form <ArrowRight className="size-4" />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
