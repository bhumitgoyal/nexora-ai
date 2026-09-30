"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Users, Sheet, Phone, Database, CalendarDays, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useIsomorphicLayoutEffect, PIN_QUERY, NO_PIN_QUERY } from "@/lib/motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Plate = { no: string; label: string; icon: LucideIcon; /** scattered offset, fraction of stage w/h */ dx: number; dy: number; rot: number };

// Six tools a business already runs, flat ink plates in the print-shop language.
// Scroll pulls them out of the scatter into one stack under THE LAYER — the
// Apple-style "product assembles itself" scrub, reinterpreted as a job-sheet.
const PLATES: Plate[] = [
  { no: "01", label: "Inbox", icon: Mail, dx: -0.2, dy: -0.36, rot: -7 },
  { no: "02", label: "CRM", icon: Users, dx: 0.2, dy: -0.28, rot: 5 },
  { no: "03", label: "Sheets", icon: Sheet, dx: -0.22, dy: 0.02, rot: 4 },
  { no: "04", label: "Phone line", icon: Phone, dx: 0.22, dy: 0.1, rot: -5 },
  { no: "05", label: "ERP", icon: Database, dx: -0.18, dy: 0.3, rot: -3 },
  { no: "06", label: "Calendar", icon: CalendarDays, dx: 0.2, dy: 0.36, rot: 7 },
];

const STEPS = [
  { no: "01", title: "Scattered", body: "Six tools, six logins, and a person copying data between them all day." },
  { no: "02", title: "Wired", body: "The layer reads from and writes to every one of them. One source of truth." },
  { no: "03", title: "Automated", body: "The work moves on its own. Your team signs off on what matters." },
];

export function LayerAssembly() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(2);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const mm = gsap.matchMedia();
    mm.add(PIN_QUERY, () => {
      const plates = gsap.utils.toArray<HTMLElement>("[data-plate]", stage);
      const bar = stage.querySelector<HTMLElement>("[data-bar]");
      const ticks = gsap.utils.toArray<HTMLElement>("[data-tick]", stage);
      const stamp = stage.querySelector<HTMLElement>("[data-stamp]");
      setStep(0);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = self.progress < 0.45 ? 0 : self.progress < 0.8 ? 1 : 2;
            setStep((prev) => (prev === idx ? prev : idx));
          },
        },
      });

      tl.from(
        plates,
        {
          x: (i) => PLATES[i].dx * stage.clientWidth,
          y: (i) => PLATES[i].dy * stage.clientHeight,
          rotate: (i) => PLATES[i].rot,
          scale: 0.82,
          ease: "power2.inOut",
          duration: 0.5,
          stagger: 0.02,
        },
        0,
      )
        .from(bar, { scaleX: 0, opacity: 0, duration: 0.18, transformOrigin: "left center" }, 0.5)
        .from(ticks, { opacity: 0, x: -8, duration: 0.12, stagger: 0.015 }, 0.6)
        .from(stamp, { opacity: 0, scale: 1.9, rotate: 6, duration: 0.1, ease: "power3.out" }, 0.86)
        .to({}, { duration: 0.06 });

      return () => {
        tl.scrollTrigger?.kill(true);
        tl.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section aria-labelledby="layer-title" className="relative overflow-x-clip border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div ref={sectionRef} className="flex min-h-screen flex-col justify-center py-20 md:py-16">
        <div className="container-x grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
          <div className="flex flex-col gap-8">
            <SectionHeader
              id="layer-title"
              align="left"
              eyebrow="How it wires in"
              title={
                <>
                  Your tools, pulled into <span className="text-[var(--color-brand)]">one layer</span>.
                </>
              }
              subtitle="No rip-and-replace. The layer sits on top of the systems you already pay for and does the work between them."
            />
            <ol className="flex flex-col border-t-2 border-[var(--color-border)]">
              {STEPS.map((s, i) => (
                <li
                  key={s.no}
                  aria-current={i === step ? "step" : undefined}
                  className={cn(
                    "grid grid-cols-[3rem_1fr] gap-x-3 border-b border-[var(--color-border)] py-4 transition-opacity duration-300",
                    i === step ? "opacity-100" : "md:opacity-55",
                  )}
                >
                  <span className={cn("font-mono text-sm font-bold", i === step ? "text-[var(--color-brand)]" : "text-[var(--color-fg-subtle)]")}>
                    {s.no}
                  </span>
                  <span className="font-display text-title-3 font-semibold">{s.title}</span>
                  <p className="col-start-2 mt-1 text-callout text-[var(--color-fg-muted)]">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div
            ref={stageRef}
            role="img"
            aria-label="Six business tools — inbox, CRM, sheets, phone line, ERP and calendar — stacked under one Nuvero layer and stamped automated."
            className="relative flex aspect-[4/3.4] w-full items-center justify-center border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] grid-bg"
          >
            <span aria-hidden className="eyebrow absolute left-4 top-3 text-[var(--color-fg-subtle)]">Fig. 1 · Assembly</span>
            <span aria-hidden className="eyebrow absolute bottom-3 right-4 text-[var(--color-fg-subtle)]">Sheet 04 / 12</span>

            <div className="relative flex w-[min(78%,340px)] flex-col">
              <div
                data-bar
                className="flex items-center justify-between border-2 border-[var(--color-border)] bg-[var(--color-brand)] px-4 py-3 text-white shadow-[var(--shadow-hard)]"
              >
                <span className="eyebrow font-bold">Nuvero · The layer</span>
                <span aria-hidden className="size-2 bg-white" />
              </div>
              {PLATES.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.no}
                    data-plate
                    className="relative -mt-[2px] flex items-center gap-3 border-2 border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 shadow-[var(--shadow-hard-sm)] will-change-transform"
                  >
                    <span className="font-mono text-[11px] font-bold text-[var(--color-fg-subtle)]">{p.no}</span>
                    <Icon aria-hidden className="size-4 text-[var(--color-fg)]" strokeWidth={2.25} />
                    <span className="font-display text-base font-semibold">{p.label}</span>
                    <span data-tick aria-hidden className="eyebrow ml-auto font-bold text-[var(--color-brand)]">
                      Wired
                    </span>
                  </div>
                );
              })}
              <span
                data-stamp
                aria-hidden
                className="absolute -bottom-12 -right-4 rotate-[-6deg] border-[3px] border-[var(--color-brand)] bg-[var(--color-bg)] px-4 py-2 font-mono text-base font-bold uppercase tracking-[0.2em] text-[var(--color-brand)] shadow-[var(--shadow-hard-sm)] md:-right-10"
              >
                Automated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
