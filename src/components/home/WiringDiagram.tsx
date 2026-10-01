"use client";

import { useRef, createRef } from "react";
import {
  Phone,
  MessageSquareText,
  ShoppingBag,
  Mail,
  Table2,
  Database,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { SchematicBeam } from "@/components/shared/SchematicBeam";

const TOOLS: { label: string; icon: LucideIcon }[] = [
  { label: "Phone", icon: Phone },
  { label: "WhatsApp", icon: MessageSquareText },
  { label: "Shopify", icon: ShoppingBag },
  { label: "Gmail", icon: Mail },
  { label: "Sheets", icon: Table2 },
  { label: "CRM", icon: Database },
];

function ToolNode({
  label,
  icon: Icon,
  nodeRef,
}: {
  label: string;
  icon: LucideIcon;
  nodeRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={nodeRef}
      className="relative z-10 flex items-center gap-2 border-[1.5px] border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2"
    >
      <Icon className="size-3.5 shrink-0 text-[var(--color-fg-muted)]" />
      <span className="eyebrow font-bold text-[var(--color-fg)]">
        {label}
      </span>
    </div>
  );
}

// Blueprint schematic: your tools wire into the layer; your team gets the
// outcome. Beams are ref-measured, so the same component works stacked on
// mobile and spread out on desktop.
export function WiringDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const toolRefs = useRef(TOOLS.map(() => createRef<HTMLDivElement>()));

  return (
    <section className="section-y relative overflow-hidden border-t border-[var(--color-border)] ">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="container-x">
        <SectionHeader
          eyebrow="The wiring"
          title="Wired into the tools you already run."
          subtitle="No new dashboard. The work happens where it already lives."
        />

        <Reveal delay={0.1}>
          <div
            ref={containerRef}
            className="relative mx-auto mt-14 flex max-w-4xl flex-col items-center gap-14 md:flex-row md:justify-between md:gap-8"
          >
            {/* tool nodes */}
            <div className="grid w-full max-w-xs grid-cols-2 gap-3 md:w-auto md:max-w-none md:grid-cols-1 md:gap-4">
              {TOOLS.map((tool, i) => (
                <ToolNode key={tool.label} label={tool.label} icon={tool.icon} nodeRef={toolRefs.current[i]} />
              ))}
            </div>

            {/* the layer */}
            <div
              ref={layerRef}
              className="relative z-10 flex flex-col items-center gap-1 border-2 border-[var(--color-brand)] bg-[var(--color-bg)] px-8 py-6 shadow-[5px_5px_0_rgba(193,18,31,0.25)]"
            >
              <span className="eyebrow text-[var(--color-fg-muted)]">
                Nuvero
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-[var(--color-brand)] md:text-2xl">
                THE LAYER
              </span>
              <span className="eyebrow text-[var(--color-fg-muted)]">
                Runs the work
              </span>
            </div>

            {/* your team */}
            <div
              ref={teamRef}
              className="relative z-10 flex items-center gap-2.5 border-[1.5px] border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3"
            >
              <Users className="size-4 shrink-0 text-[var(--color-fg-muted)]" />
              <div className="flex flex-col">
                <span className="eyebrow font-bold text-[var(--color-fg)]">
                  Your team
                </span>
                <span className="eyebrow text-[var(--color-fg-muted)]">
                  Gets the outcome
                </span>
              </div>
            </div>

            {/* beams: tools → layer, layer → team */}
            {TOOLS.map((tool, i) => (
              <SchematicBeam
                key={tool.label}
                containerRef={containerRef}
                fromRef={toolRefs.current[i]}
                toRef={layerRef}
                delay={i * 0.35}
              />
            ))}
            <SchematicBeam
              containerRef={containerRef}
              fromRef={layerRef}
              toRef={teamRef}
              delay={0.8}
              duration={2}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="eyebrow mx-auto mt-12 max-w-md text-center text-[var(--color-fg-muted)]">
            + Slack, Notion, Calendly, HubSpot, Stripe & your internal APIs
          </p>
        </Reveal>
      </div>
    </section>
  );
}
