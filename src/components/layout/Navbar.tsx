"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, FileText, Search } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { DURATION, EASE, STAGGER } from "@/lib/motion";
import { GlowButton } from "@/components/shared/GlowButton";
import { Magnetic } from "@/components/shared/Magnetic";
import { Logo } from "./Logo";
import { RollText } from "@/components/fx/RollText";

const headerNav = site.nav.filter((item) =>
  (site.headerNav as readonly string[]).includes(item.href),
);

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(href + "/");

function openCommandPalette() {
  document.dispatchEvent(new CustomEvent("nuvero:command-palette"));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > previous && latest > 200);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : 0 }}
        transition={{ duration: DURATION.fast, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
          scrolled
            ? "border-[var(--color-border)] bg-[var(--color-bg)]"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-x flex h-header items-center justify-between gap-6 lg:h-header-lg">
          <Logo className="shrink-0" priority />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              {headerNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex min-h-11 items-center px-3.5 text-[15px] font-medium transition-colors xl:px-4",
                        active
                          ? "bg-[var(--color-brand)] text-white"
                          : "text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-fg)]",
                      )}
                    >
                      <RollText>{item.label}</RollText>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={openCommandPalette}
              className="inline-flex size-11 items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-elev)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              aria-label="Search the site"
              title="Search (⌘K / Ctrl K)"
            >
              <Search className="size-4" strokeWidth={2.25} />
            </button>
            <Magnetic>
              <GlowButton href="/contact" size="sm" withArrow className="!h-11">
                {site.cta.primary}
              </GlowButton>
            </Magnetic>
          </div>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg)] lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {open ? <MobileMenu pathname={pathname} onClose={() => setOpen(false)} /> : null}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </motion.header>
    </>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  return (
    <Dialog.Portal forceMount>
      <Dialog.Content forceMount asChild aria-describedby={undefined}>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: DURATION.fast, ease: EASE }}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[var(--color-bg)] lg:hidden"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div className="container-x flex h-header shrink-0 items-center justify-between border-b border-[var(--color-border)]">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center border border-[var(--color-border)] text-[var(--color-fg)]"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Primary" className="container-x flex flex-1 flex-col justify-center py-10">
            <ul>
              {site.nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * STAGGER, duration: DURATION.fast, ease: EASE }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex min-h-11 items-center justify-between border-b border-[var(--color-border)] py-3.5 font-display text-3xl font-semibold tracking-tight",
                        active ? "text-[var(--color-brand)]" : "text-[var(--color-fg)] hover:text-[var(--color-brand)]",
                      )}
                    >
                      {item.label}
                      <span className="eyebrow text-[var(--color-fg-subtle)]">{String(i + 1).padStart(2, "0")}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-col gap-3">
              <GlowButton href="/contact" size="lg" withArrow>
                {site.cta.primary}
              </GlowButton>
              <Link
                href="/booklet"
                onClick={onClose}
                className="inline-flex min-h-11 items-center gap-2 self-start border border-[var(--color-border)] px-4 text-sm font-medium text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <FileText className="size-4 text-[var(--color-accent-ink)]" />
                Open the infrastructure booklet
              </Link>
            </div>
          </nav>

          <div className="container-x flex flex-col border-t border-[var(--color-border)] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-4 text-sm text-[var(--color-fg-muted)]">
            <a href={`mailto:${site.contact.email}`} className="inline-flex min-h-11 items-center hover:text-[var(--color-fg)]">
              {site.contact.email}
            </a>
            <a href={`tel:${site.contact.phoneRaw}`} className="inline-flex min-h-11 items-center hover:text-[var(--color-fg)]">
              {site.contact.phone}
            </a>
          </div>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
