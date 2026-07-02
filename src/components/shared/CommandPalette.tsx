"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Briefcase, FileText, Phone, ArrowUpRight, LayoutGrid } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";
import { services } from "@/content/services";

const pages = [
  { label: "Infrastructure", href: "/what-we-offer", icon: LayoutGrid },
  { label: "Systems", href: "/services", icon: FileText },
  { label: "Deployments & Case Studies", href: "/work", icon: Briefcase },
  { label: "Our Process", href: "/process", icon: FileText },
  { label: "About", href: "/about", icon: FileText },
  { label: "Book a Call", href: "/contact", icon: Phone },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const run = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 rounded-none border border-[var(--color-border)] shadow-[6px_6px_0_var(--color-brand)] bg-[var(--color-bg)] max-w-xl w-full">
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <Command className="bg-transparent [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.18em] [&_[cmdk-group-heading]]:text-[var(--color-fg-subtle)]">
          <CommandInput
            placeholder="Search pages, case studies, services…"
            className="h-12 border-b border-[var(--color-border)] text-sm placeholder:text-[var(--color-fg-subtle)]"
          />
          <CommandList className="max-h-[380px]">
            <CommandEmpty className="py-8 text-center text-sm text-[var(--color-fg-muted)]">
              No results found.
            </CommandEmpty>

            <CommandGroup heading="Pages">
              {pages.map((p) => {
                const Icon = p.icon;
                return (
                  <CommandItem
                    key={p.href}
                    value={p.label}
                    onSelect={() => run(p.href)}
                    className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-fg-muted)] aria-selected:bg-[var(--color-bg-elev)] aria-selected:text-[var(--color-fg)]"
                  >
                    <Icon className="size-4 shrink-0" />
                    {p.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>

            <CommandSeparator className="bg-[var(--color-border)]" />

            <CommandGroup heading="Case Studies">
              {caseStudies.map((c) => (
                <CommandItem
                  key={c.slug}
                  value={`${c.client} ${c.industry} ${c.title}`}
                  onSelect={() => run(`/work/${c.slug}`)}
                  className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-[var(--color-fg-muted)] aria-selected:bg-[var(--color-bg-elev)] aria-selected:text-[var(--color-fg)]"
                >
                  <ArrowUpRight className="size-4 shrink-0 text-[var(--color-brand)]" />
                  <div className="flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-[var(--color-fg)]">{c.client}</span>
                    <span className="truncate text-xs text-[var(--color-fg-subtle)]">{c.industry}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandSeparator className="bg-[var(--color-border)]" />

            <CommandGroup heading="Systems">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <CommandItem
                    key={s.slug}
                    value={s.title}
                    onSelect={() => run(`/services#${s.slug}`)}
                    className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-fg-muted)] aria-selected:bg-[var(--color-bg-elev)] aria-selected:text-[var(--color-fg)]"
                  >
                    <Icon className="size-4 shrink-0 text-[var(--color-brand)]" />
                    {s.title}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
