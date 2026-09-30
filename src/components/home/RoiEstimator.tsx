"use client";

import { useId, useState } from "react";
import Link from "next/link";
import NumberFlow from "@number-flow/react";
import { Slider } from "@/components/ui/slider";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight, Loader2 } from "lucide-react";
import { site } from "@/content/site";

const BUILD_COST = 120_000;

const LEVELS = [
  { max: 30, label: "Automation starter", desc: "Good foundation, with a few quick wins available." },
  { max: 65, label: "Clear automation wins", desc: "Real bottlenecks exist. Right time to move." },
  { max: 100, label: "High-impact opportunity", desc: "Significant manual drag. AI would compound fast here." },
];

function getLevel(score: number) {
  return LEVELS.find((l) => score <= l.max) ?? LEVELS[LEVELS.length - 1];
}

function getTarget(teamSize: number, manualHours: number, handoffs: number) {
  if (manualHours >= 12) return "Repetitive task load per person";
  if (handoffs >= 18) return "Approval & handoff bottlenecks";
  if (teamSize >= 20) return "Cross-team coordination overhead";
  return "Repetitive outreach & follow-up";
}

function formatINR(amount: number): string {
  if (amount >= 10_000_000) return `₹${(amount / 10_000_000).toFixed(1)} Cr`;
  if (amount >= 100_000) return `₹${(amount / 100_000).toFixed(1)}L`;
  return `₹${(amount / 1000).toFixed(0)}K`;
}

// Split for NumberFlow: the number rolls, the unit (L / Cr / K) is a suffix.
function inrParts(amount: number): { value: number; suffix: string } {
  if (amount >= 10_000_000) return { value: +(amount / 10_000_000).toFixed(1), suffix: " Cr" };
  if (amount >= 100_000) return { value: +(amount / 100_000).toFixed(1), suffix: "L" };
  return { value: Math.round(amount / 1000), suffix: "K" };
}

const FLOW = { format: { maximumFractionDigits: 1 } } as const;

type SliderRowProps = {
  label: string;
  value: number;
  unit: (v: number) => string;
  min: number;
  max: number;
  onChange: (v: number) => void;
};

function SliderRow({ label, value, unit, min, max, onChange }: SliderRowProps) {
  const labelId = useId();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-between gap-4">
        <span id={labelId} className="eyebrow text-[var(--color-fg-muted)]">
          {label}
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-[var(--color-brand)]">{unit(value)}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={1}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        thumb-labelledby={labelId}
        valueText={unit(value)}
      />
      <div aria-hidden className="flex justify-between text-callout text-[var(--color-fg-subtle)]">
        <span>{unit(min)}</span>
        <span>{unit(max)}</span>
      </div>
    </div>
  );
}

export function RoiEstimator() {
  const [teamSize, setTeamSize] = useState(12);
  const [manualHours, setManualHours] = useState(8);
  const [handoffs, setHandoffs] = useState(10);
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [sendState, setSendState] = useState<"idle" | "submitting" | "sent" | "failed">("idle");
  const [emailError, setEmailError] = useState("");

  const weeklyHoursLost = teamSize * manualHours;
  const daysPerYear = Math.round((weeklyHoursLost * 52) / 8);
  const annualCostINR = weeklyHoursLost * 52 * 350;
  const formattedCost = formatINR(annualCostINR);
  const cost = inrParts(annualCostINR);

  const paybackMonths = BUILD_COST / (annualCostINR / 12);
  const roiPct = Math.round(((annualCostINR - BUILD_COST) / BUILD_COST) * 100);
  const showPayback = annualCostINR > BUILD_COST;

  const score = Math.min(
    100,
    Math.round((manualHours / 20) * 50 + (handoffs / 30) * 30 + (teamSize / 100) * 20),
  );
  const level = getLevel(score);
  const target = getTarget(teamSize, manualHours, handoffs);

  // HIG Responsibility: the numbers are never held hostage behind an email.
  // Sending them to the team is an optional next step, and the copy says
  // exactly what happens — including when it fails.
  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter an email like name@company.com.");
      return;
    }
    setSendState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Automation Audit Lead",
          email,
          message: `Automation audit result:\n• Score: ${score}/100 (${level.label})\n• Team size: ${teamSize} people\n• Manual hours/person/week: ${manualHours}h\n• Weekly handoffs: ${handoffs}\n• Est. annual cost: ${formattedCost}\n• Primary target: ${target}`,
        }),
      });
      setSendState(res.ok ? "sent" : "failed");
    } catch {
      setSendState("failed");
    }
  }

  return (
    <section id="automation-audit" className="section-y border-t border-[var(--color-border)]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Automation audit"
          title="How much of your week is already on autopilot?"
          subtitle="Drag the sliders. Get an honest read on where your team's time goes and what AI would target first."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 border border-[var(--color-border)] lg:grid-cols-2">
            <div className="flex flex-col gap-10 border-b border-[var(--color-border)] p-6 sm:p-8 md:p-12 lg:border-b-0 lg:border-r">
              <SliderRow label="Team size" value={teamSize} min={2} max={100} unit={(v) => `${v} people`} onChange={setTeamSize} />
              <SliderRow label="Repetitive hours per person / week" value={manualHours} min={1} max={20} unit={(v) => `${v}h`} onChange={setManualHours} />
              <SliderRow label="Manual handoffs or approvals / week" value={handoffs} min={1} max={30} unit={(v) => `${v}`} onChange={setHandoffs} />
            </div>

            <div className="flex flex-col justify-between gap-8 bg-[var(--color-bg-elev)] p-6 sm:p-8 md:p-12">
              <div aria-live="polite" className="flex flex-col gap-6">
                <h3 className="eyebrow text-[var(--color-fg-muted)]">Your automation profile</h3>

                <div className="flex flex-col gap-3">
                  <div className="flex items-end justify-between">
                    <p className="text-callout text-[var(--color-fg-muted)]">Automation opportunity score</p>
                    <span className="font-display text-4xl font-bold text-[var(--color-brand)]">
                      <NumberFlow value={score} />
                      <span className="text-xl text-[var(--color-fg-subtle)]">/100</span>
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[var(--color-border)]/15">
                    <div
                      className="h-full w-full origin-left bg-[var(--color-brand)] transition-transform duration-500"
                      style={{ transform: `scaleX(${score / 100})`, transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                  </div>
                  <p className="text-callout font-semibold text-[var(--color-fg)]">
                    {level.label}. <span className="font-normal text-[var(--color-fg-muted)]">{level.desc}</span>
                  </p>
                </div>

                <dl className="grid grid-cols-2 gap-5 border-t border-[var(--color-border)] pt-5">
                  <div>
                    <dt className="text-callout text-[var(--color-fg-muted)]">Team hours lost / week</dt>
                    <dd className="mt-1 font-display text-3xl font-bold tracking-tight">
                      <NumberFlow value={weeklyHoursLost} suffix="h" />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-callout text-[var(--color-fg-muted)]">Days / year on automatable work</dt>
                    <dd className="mt-1 font-display text-3xl font-bold tracking-tight">
                      <NumberFlow value={daysPerYear} suffix=" days" />
                    </dd>
                  </div>
                  <div className="col-span-2 border-2 border-[var(--color-brand)] bg-[var(--color-bg)] p-4">
                    <dt className="text-callout text-[var(--color-fg-muted)]">Estimated annual staff cost on automatable work</dt>
                    <dd className="mt-1 font-display text-3xl font-bold tracking-tight text-[var(--color-brand)]">
                      ≈ <NumberFlow value={cost.value} prefix="₹" suffix={cost.suffix} {...FLOW} />
                      <span className="text-base font-normal text-[var(--color-fg-subtle)]">/yr</span>
                    </dd>
                    <p className="mt-1 text-callout text-[var(--color-fg-subtle)]">Based on ₹350/hr average fully-loaded cost</p>
                  </div>
                  {showPayback ? (
                    <>
                      <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                        <dt className="text-callout text-[var(--color-fg-muted)]">Payback period</dt>
                        <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-[var(--color-accent-ink)]">
                          {paybackMonths < 1 ? "<1 mo" : <NumberFlow value={+paybackMonths.toFixed(1)} prefix="~" suffix=" mo" {...FLOW} />}
                        </dd>
                        <p className="mt-0.5 text-callout text-[var(--color-fg-subtle)]">vs ₹1,20,000 build cost</p>
                      </div>
                      <div className="border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                        <dt className="text-callout text-[var(--color-fg-muted)]">Est. first-year ROI</dt>
                        <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-[var(--color-accent-ink)]">
                          {roiPct > 999 ? ">1000%" : <NumberFlow value={roiPct} suffix="%" />}
                        </dd>
                        <p className="mt-0.5 text-callout text-[var(--color-fg-subtle)]">return on build cost</p>
                      </div>
                    </>
                  ) : null}
                  <div className="col-span-2">
                    <dt className="text-callout text-[var(--color-fg-muted)]">We&apos;d target first</dt>
                    <dd className="mt-1 font-semibold text-[var(--color-fg)]">{target}</dd>
                  </div>
                </dl>

                {sendState === "sent" ? (
                  <p role="status" className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-callout">
                    Sent to our engineers. We&apos;ll reply to <span className="font-semibold">{email}</span> with a first-pass plan within one business day.
                  </p>
                ) : (
                  <form onSubmit={handleEmailSubmit} noValidate className="flex flex-col gap-2 border-t border-[var(--color-border)] pt-5">
                    <label htmlFor={emailId} className="text-callout font-semibold text-[var(--color-fg)]">
                      Want an engineer to review these numbers? <span className="font-normal text-[var(--color-fg-muted)]">(optional)</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        id={emailId}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        aria-invalid={emailError ? true : undefined}
                        aria-describedby={emailError ? `${emailId}-error` : undefined}
                        className="min-h-12 min-w-0 flex-1 border border-[var(--color-border)] bg-[var(--color-bg)] px-3 text-body text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-brand)]"
                      />
                      <button
                        type="submit"
                        disabled={sendState === "submitting"}
                        className="press inline-flex min-h-12 shrink-0 items-center gap-1.5 border-2 border-[var(--color-fg)] bg-[var(--color-bg)] px-4 text-callout font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] disabled:opacity-70"
                      >
                        {sendState === "submitting" ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : "Send"}
                      </button>
                    </div>
                    {emailError ? (
                      <p id={`${emailId}-error`} className="text-callout font-medium text-[var(--color-brand)]">{emailError}</p>
                    ) : null}
                    {sendState === "failed" ? (
                      <p role="alert" className="text-callout font-medium text-[var(--color-brand)]">
                        That didn&apos;t go through. Try again, or email {site.contact.email}.
                      </p>
                    ) : null}
                  </form>
                )}
              </div>

              <Link
                href="/contact"
                className="press inline-flex min-h-12 items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-hard)] transition-colors hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]"
              >
                {site.cta.primary} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
