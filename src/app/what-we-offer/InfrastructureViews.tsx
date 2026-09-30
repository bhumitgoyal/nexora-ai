"use client";

import { useEffect, useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type View = "industry" | "service";

type Props = {
  industry: ReactNode;
  service: ReactNode;
  industryJump: ReactNode;
  serviceJump: ReactNode;
};

const TABS: { id: View; label: string }[] = [
  { id: "industry", label: "By industry" },
  { id: "service", label: "By system" },
];

// The only interactive part of /what-we-offer: both views are server-rendered
// and passed in, this just decides which one is visible. A sticky, proper
// tablist (arrow keys, aria-selected) instead of two unrelated buttons.
export function InfrastructureViews({ industry, service, industryJump, serviceJump }: Props) {
  const [view, setView] = useState<View>("industry");
  const uid = useId();

  // /what-we-offer#service-<slug> only resolves once the system view is showing.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash.startsWith("service-")) return;
    setView("service");
    const raf = requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }));
    return () => cancelAnimationFrame(raf);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = view === "industry" ? "service" : "industry";
    setView(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <>
      <div className="sticky top-header z-30 border-y border-[var(--color-border)] bg-[var(--color-bg)] lg:top-header-lg">
        <div className="container-x flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:gap-6">
          <div role="tablist" aria-label="Browse the infrastructure" className="inline-flex shrink-0 self-start border-2 border-[var(--color-border)]">
            {TABS.map((t) => {
              const selected = view === t.id;
              return (
                <button
                  key={t.id}
                  id={`${uid}-tab-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${uid}-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setView(t.id)}
                  onKeyDown={onKeyDown}
                  className={cn(
                    "eyebrow inline-flex min-h-11 items-center px-5 font-bold transition-colors",
                    selected ? "bg-[var(--color-brand)] text-white" : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <nav
            aria-label={view === "industry" ? "Jump to an industry" : "Jump to a system"}
            className="scrollbar-hide -mx-6 flex gap-2 overflow-x-auto px-6 md:-mx-10 md:px-10 lg:mx-0 lg:px-0"
          >
            {view === "industry" ? industryJump : serviceJump}
          </nav>
        </div>
      </div>

      <div id={`${uid}-panel-industry`} role="tabpanel" aria-labelledby={`${uid}-tab-industry`} hidden={view !== "industry"}>
        {industry}
      </div>
      <div id={`${uid}-panel-service`} role="tabpanel" aria-labelledby={`${uid}-tab-service`} hidden={view !== "service"}>
        {service}
      </div>
    </>
  );
}
