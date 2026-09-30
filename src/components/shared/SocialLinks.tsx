"use client";

import { Linkedin, Github, Instagram } from "@/components/shared/brand-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { site } from "@/content/site";

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin, handle: "@bhumitgoyal" },
  { label: "GitHub", href: site.socials.github, icon: Github, handle: "@bhumitgoyal" },
  { label: "Instagram", href: site.socials.instagram, icon: Instagram, handle: "@bhumitgoyal" },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-col gap-2.5">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <li key={s.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                >
                  <Icon className="size-4" />
                  <span>{s.label}</span>
                  <span className="font-mono text-xs text-[var(--color-fg-subtle)]">{s.handle}</span>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="rounded-none border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-3 py-1.5 text-xs font-medium text-[var(--color-fg)] shadow-[2px_2px_0_var(--color-brand)]"
              >
                Visit {s.label}
              </TooltipContent>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
}
