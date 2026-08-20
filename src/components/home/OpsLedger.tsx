"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useIsomorphicLayoutEffect } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const LEDGER = [
  { time: "07:58", work: "Overnight leads qualified & routed", hrs: "4.5" },
  { time: "09:00", work: "Morning ops report compiled", hrs: "3.0" },
  { time: "10:40", work: "Abandoned carts recovered", hrs: "5.5" },
  { time: "12:15", work: "Invoices matched & reconciled", hrs: "4.0" },
  { time: "15:30", work: "Support tickets resolved", hrs: "7.5" },
  { time: "18:05", work: "Follow-up calls & emails sent", hrs: "4.5" },
  { time: "23:47", work: "After-hours enquiries answered", hrs: "2.5" },
];

// Nuvero's signature scroll moment: a printed day-sheet where the layer
// takes each line item over from the team, row by row, as you scroll.
export function OpsLedger() {
  const sectionRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const rows = section.querySelectorAll<HTMLElement>("[data-ledger-row]");
        const tally = section.querySelector<HTMLElement>("[data-ledger-tally]");

        rows.forEach((row) => {
          const strike = row.querySelector<HTMLElement>("[data-strike]");
          const layer = row.querySelector<HTMLElement>("[data-layer]");
          gsap.set(strike, { scaleX: 0 });
          gsap.set(layer, { opacity: 0, y: 6 });
        });
        gsap.set(tally, { opacity: 0, y: 14 });

        // live hours counter — starts at 0, ticks up as each row flips to
        // THE LAYER, reversible on scroll-up, never double counts
        const counterEl = section.querySelector<HTMLElement>("[data-hours-counter]");
        const display = { value: 0 };
        let counterTween: gsap.core.Tween | null = null;
        if (counterEl) counterEl.textContent = "0.0";

        const retally = () => {
          let target = 0;
          rows.forEach((row) => {
            if (row.dataset.flipped === "true") {
              target += parseFloat(row.dataset.hours ?? "0");
            }
          });
          counterTween?.kill();
          counterTween = gsap.to(display, {
            value: target,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
              if (counterEl) counterEl.textContent = display.value.toFixed(1);
            },
          });
        };

        const flip = (row: HTMLElement, on: boolean) => {
          if ((row.dataset.flipped === "true") === on) return;
          row.dataset.flipped = on ? "true" : "false";
          retally();
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=240%",
            pin: true,
            scrub: 0.4,
          },
        });

        rows.forEach((row) => {
          const strike = row.querySelector<HTMLElement>("[data-strike]");
          const layer = row.querySelector<HTMLElement>("[data-layer]");
          tl.to(strike, { scaleX: 1, duration: 0.5, ease: "none" });
          tl.to(
            layer,
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "none",
              onComplete: () => flip(row, true),
              onReverseComplete: () => flip(row, false),
            },
            "<+=0.25"
          );
        });
        tl.to(tally, { opacity: 1, y: 0, duration: 0.8, ease: "none" }, "+=0.2");

        return () => {
          counterTween?.kill();
          // revert (true) un-wraps the pin-spacer so React's unmount
          // finds the DOM exactly as it rendered it
          tl.scrollTrigger?.kill(true);
          tl.kill();
        };
      }
    );

    // Mobile / reduced motion: ledger shown fully taken-over, no pin.
    mm.add("(max-width: 767px), (prefers-reduced-motion: reduce)", () => {
      const rows = section.querySelectorAll<HTMLElement>("[data-ledger-row]");
      const tally = section.querySelector<HTMLElement>("[data-ledger-tally]");
      const counterEl = section.querySelector<HTMLElement>("[data-hours-counter]");
      rows.forEach((row) => {
        gsap.set(row.querySelector("[data-strike]"), { scaleX: 1 });
        gsap.set(row.querySelector("[data-layer]"), { opacity: 1, y: 0 });
      });
      gsap.set(tally, { opacity: 1, y: 0 });
      if (counterEl) counterEl.textContent = "31.5";
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center overflow-hidden border-t border-[var(--color-border)] py-20 md:min-h-screen md:py-0"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-40" />

      <div className="container-x w-full">
        <SectionHeader
          eyebrow="The day sheet"
          title="A normal Tuesday, off your team's plate."
          subtitle="Scroll the ledger. Every line is a real workflow the layer runs today, with the hours it hands back each week."
        />

        {/* the ledger */}
        <div className="mx-auto mt-10 w-full max-w-3xl border-2 border-[var(--color-border)] bg-[var(--color-bg-elev)] md:mt-14">
          {/* sheet header */}
          <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] px-4 py-2.5 md:px-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] md:text-[10px]">
              Ops ledger · Daily
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--color-fg-subtle)] md:text-[10px]">
              Handled by
            </span>
          </div>

          {LEDGER.map((row) => (
            <div
              key={row.time}
              data-ledger-row
              data-hours={row.hrs}
              data-flipped="false"
              className="flex items-center justify-between gap-3 border-b border-[var(--color-border)]/50 px-4 py-3 last:border-b-0 md:px-6 md:py-[13px]"
            >
              <div className="flex min-w-0 items-baseline gap-3 md:gap-4">
                <span className="shrink-0 font-mono text-[10px] tabular-nums text-[var(--color-fg-subtle)] md:text-xs">
                  {row.time}
                </span>
                <span className="truncate text-sm font-medium text-[var(--color-fg)] md:text-base">
                  {row.work}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2 md:gap-3">
                <span className="relative font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-fg-subtle)] md:text-xs">
                  <span className="md:hidden">You</span>
                  <span className="hidden md:inline">Your team</span>
                  <span
                    data-strike
                    aria-hidden
                    className="absolute left-[-3%] top-1/2 h-[2px] w-[106%] origin-left bg-[var(--color-brand)]"
                  />
                </span>
                <span
                  data-layer
                  className="border border-[var(--color-brand)] px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)] md:text-[10px]"
                >
                  <span className="md:hidden">Layer</span>
                  <span className="hidden md:inline">The layer</span>
                </span>
              </div>
            </div>
          ))}

          {/* tally */}
          <div
            data-ledger-tally
            className="flex items-center justify-between border-t-2 border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 md:px-6"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-fg)] md:text-xs">
              Hours returned to your team
            </span>
            <span className="font-display text-2xl font-bold text-[var(--color-brand)] md:text-3xl">
              {/* width reserved for the widest value ("31.5") so digits never shift layout */}
              <span data-hours-counter className="inline-block min-w-[4ch] text-right tabular-nums">
                31.5
              </span>
              <span className="ml-1 font-mono text-xs font-normal text-[var(--color-fg-subtle)]">/wk</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
