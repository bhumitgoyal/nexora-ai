"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, FileText } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/shared/GlowButton";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-18">
          <Logo />

          <nav className="hidden items-center gap-0 md:flex">
            {site.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--color-brand)] text-white"
                      : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-elev)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/booklet"
              className="inline-flex min-h-[44px] items-center gap-1.5 border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] px-4 py-2 text-sm font-semibold text-[var(--color-fg-muted)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              <FileText className="size-3.5 text-[var(--color-accent)]" />
              Booklet
            </Link>
            <GlowButton href="/contact" size="sm" withArrow>
              Book a call
            </GlowButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[var(--color-border)] text-[var(--color-fg)] md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-bg)] md:hidden"
    >
      <div className="container-x flex h-16 items-center justify-between border-b border-[var(--color-border)]">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex size-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg)]"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="container-x flex flex-1 flex-col justify-center gap-0 py-12">
        {site.nav.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block border-b border-[var(--color-border)] py-4 font-display text-3xl font-semibold tracking-tight text-[var(--color-fg)] hover:text-[var(--color-brand)]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col gap-3"
        >
          <GlowButton href="/contact" size="lg" withArrow>
            Book a call
          </GlowButton>
          <Link
            href="/booklet"
            onClick={onClose}
            className="inline-flex items-center gap-2 self-start border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            <FileText className="size-4 text-[var(--color-accent)]" />
            Open services booklet
          </Link>
        </motion.div>
      </nav>

      <div className="container-x flex flex-col gap-3 border-t border-[var(--color-border)] pb-10 pt-6 text-sm text-[var(--color-fg-muted)]">
        <a href={`mailto:${site.contact.email}`} className="hover:text-[var(--color-fg)]">
          {site.contact.email}
        </a>
        <a href={`tel:${site.contact.phoneRaw}`} className="hover:text-[var(--color-fg)]">
          {site.contact.phone}
        </a>
      </div>
    </motion.div>
  );
}
