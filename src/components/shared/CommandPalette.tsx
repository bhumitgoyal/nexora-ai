"use client";

import { useCallback } from "react";
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
import { Briefcase, FileText, Phone, ArrowUpRight, LayoutGrid, Newspaper, MessageSquareQuote, Factory, Workflow, Cpu, Coins } from "lucide-react";
import type { SearchEntry } from "@/lib/searchIndex";
import { site } from "@/content/site";

const pages = [
  { label: "Infrastructure", href: "/what-we-offer", icon: LayoutGrid },
  { label: "Systems", href: "/services", icon: FileText },
  { label: "Deployments", href: "/work", icon: Briefcase },
  { label: "Industries", href: "/industries", icon: Factory },
  { label: "Process", href: "/process", icon: Workflow },
  { label: "Pricing", href: "/pricing", icon: Coins },
  { label: "Intelligence Briefings", href: "/briefings", icon: Newspaper },
  { label: "Client Reviews", href: "/reviews", icon: MessageSquareQuote },
  { label: "About", href: "/about", icon: FileText },
  { label: site.cta.primary, href: "/contact", icon: Phone },
];

const GROUP_ICON = { Deployments: ArrowUpRight, Systems: Cpu, Briefings: Newspaper } as const;

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  entries: SearchEntry[];
};

export function CommandPalette({ open, onOpenChange: setOpen, entries }: CommandPaletteProps) {
  const router = useRouter();

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
        <Command className="bg-transparent [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.18em] [&_[cmdk-group-heading]]:text-[var(--color-fg-subtle)]">
          <CommandInput
            placeholder="Search pages, deployments, systems, briefings"
            className="h-12 border-b border-[var(--color-border)] text-sm placeholder:text-[var(--color-fg-subtle)]"
          />
          <CommandList className="max-h-[380px]">
            <CommandEmpty className="py-8 text-center text-sm text-[var(--color-fg-muted)]">
              No matches. Try a sector, like “logistics”.
            </CommandEmpty>

            <CommandGroup heading="Pages">
              {pages.map((p) => {
                const Icon = p.icon;
                return (
                  <CommandItem
                    key={p.href}
                    value={p.label}
                    onSelect={() => run(p.href)}
                    className="flex min-h-11 cursor-pointer items-center gap-3 px-4 py-2 text-sm text-[var(--color-fg-muted)] aria-selected:bg-[var(--color-bg-elev)] aria-selected:text-[var(--color-fg)]"
                  >
                    <Icon className="size-4 shrink-0" />
                    {p.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>

            {(["Deployments", "Systems", "Briefings"] as const).map((group) => {
              const Icon = GROUP_ICON[group];
              const items = entries.filter((e) => e.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <CommandSeparator className="bg-[var(--color-border)]" />
                  <CommandGroup heading={group}>
                    {items.map((e) => (
                      <CommandItem
                        key={e.href}
                        value={`${e.label} ${e.hint ?? ""} ${group}`}
                        onSelect={() => run(e.href)}
                        className="flex min-h-11 cursor-pointer items-center gap-3 px-4 py-2 text-[var(--color-fg-muted)] aria-selected:bg-[var(--color-bg-elev)] aria-selected:text-[var(--color-fg)]"
                      >
                        <Icon className="size-4 shrink-0 text-[var(--color-brand)]" />
                        <div className="flex min-w-0 flex-col">
                          <span className="truncate text-sm font-medium text-[var(--color-fg)]">{e.label}</span>
                          {e.hint ? <span className="truncate text-xs text-[var(--color-fg-subtle)]">{e.hint}</span> : null}
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </div>
              );
            })}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
