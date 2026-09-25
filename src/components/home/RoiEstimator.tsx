"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowRight, Loader2, Sparkles, Clock, TrendingUp } from "lucide-react";

type Currency = "usd" | "aed" | "eur" | "gbp" | "inr";

const CURRENCY_SPECS: Record<
  Currency,
  {
    symbol: string;
    label: string;
    hourlyRate: number;
    format: (amt: number) => string;
    rateLabel: string;
  }
> = {
  usd: {
    symbol: "$",
    label: "USD ($)",
    hourlyRate: 35,
    format: (amt: number) => `$${Math.round(amt).toLocaleString()}`,
    rateLabel: "$35/hr avg. loaded staff cost",
  },
  aed: {
    symbol: "AED",
    label: "AED (د.إ)",
    hourlyRate: 130,
    format: (amt: number) => `AED ${Math.round(amt).toLocaleString()}`,
    rateLabel: "AED 130/hr avg. loaded cost",
  },
  eur: {
    symbol: "€",
    label: "EUR (€)",
    hourlyRate: 32,
    format: (amt: number) => `€${Math.round(amt).toLocaleString()}`,
    rateLabel: "€32/hr avg. loaded cost",
  },
  gbp: {
    symbol: "£",
    label: "GBP (£)",
    hourlyRate: 28,
    format: (amt: number) => `£${Math.round(amt).toLocaleString()}`,
    rateLabel: "£28/hr avg. loaded cost",
  },
  inr: {
    symbol: "₹",
    label: "INR (₹)",
    hourlyRate: 350,
    format: (amt: number) => {
      if (amt >= 10_000_000) return `₹${(amt / 10_000_000).toFixed(1)} Cr`;
      if (amt >= 100_000) return `₹${(amt / 100_000).toFixed(1)}L`;
      return `₹${(amt / 1000).toFixed(0)}K`;
    },
    rateLabel: "₹350/hr avg. fully-loaded cost",
  },
};

const LEVELS = [
  { max: 30, label: "Automation starter", desc: "Good foundation, high-leverage quick wins available." },
  { max: 65, label: "Clear automation wins", desc: "Real operational drag. High-impact workflows ready for deployment." },
  { max: 100, label: "High-impact opportunity", desc: "Significant manual bottlenecks. Autonomous systems compound rapidly here." },
];

function getLevel(score: number) {
  return LEVELS.find((l) => score <= l.max) ?? LEVELS[LEVELS.length - 1];
}

function getTarget(teamSize: number, manualHours: number, handoffs: number) {
  if (manualHours >= 12) return "Repetitive task load per person";
  if (handoffs >= 18) return "Approval and handoff bottlenecks";
  if (teamSize >= 20) return "Cross-team coordination overhead";
  return "Repetitive outreach and follow-up";
}

export function RoiEstimator() {
  const [currency, setCurrency] = useState<Currency>("usd");
  const [teamSize, setTeamSize] = useState([12]);
  const [manualHours, setManualHours] = useState([8]);
  const [handoffs, setHandoffs] = useState([10]);
  const [email, setEmail] = useState("");
  const [gateState, setGateState] = useState<"idle" | "submitting" | "revealed">("idle");
  const [emailError, setEmailError] = useState("");

  const spec = CURRENCY_SPECS[currency];

  const weeklyHoursLost = teamSize[0] * manualHours[0];
  const daysPerYear = Math.round((weeklyHoursLost * 52) / 8);
  const annualCost = weeklyHoursLost * 52 * spec.hourlyRate;
  const formattedCost = spec.format(annualCost);
  const estimatedReclaimedHours = Math.round(weeklyHoursLost * 0.75);

  const score = Math.min(
    100,
    Math.round(
      (manualHours[0] / 20) * 50 +
      (handoffs[0] / 30) * 30 +
      (teamSize[0] / 100) * 20
    )
  );
  const level = getLevel(score);
  const target = getTarget(teamSize[0], manualHours[0], handoffs[0]);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setGateState("submitting");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Automation Audit Lead",
          email,
          message: `Automation audit result:\n• Score: ${score}/100 (${level.label})\n• Currency: ${currency.toUpperCase()}\n• Team size: ${teamSize[0]} people\n• Manual hours/person/week: ${manualHours[0]}h\n• Weekly handoffs: ${handoffs[0]}\n• Est. annual cost drag: ${formattedCost}\n• Est. weekly hours reclaimable: ~${estimatedReclaimedHours}h\n• Primary target: ${target}`,
        }),
      });
    } catch {
      // Reveal result even on network error
    }
    setGateState("revealed");
  }

  return (
    <section id="automation-audit" className="border-t-2 border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Automation Audit & ROI"
            title="How much of your week is already on autopilot?"
            subtitle="Drag the sliders. Get an honest read on where your team's time is going and what AI targets first."
          />

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 border border-[var(--color-border)] bg-[var(--color-bg)] p-1">
            {(Object.keys(CURRENCY_SPECS) as Currency[]).map((cKey) => (
              <button
                key={cKey}
                onClick={() => setCurrency(cKey)}
                className={`px-3 py-1.5 font-mono text-xs font-semibold transition-colors ${
                  currency === cKey
                    ? "bg-[var(--color-brand)] text-white"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-surface)]"
                }`}
              >
                {CURRENCY_SPECS[cKey].label}
              </button>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-0 border border-[var(--color-border)] lg:grid-cols-2">
            {/* Sliders */}
            <div className="flex flex-col gap-10 border-b border-[var(--color-border)] p-8 lg:border-b-0 lg:border-r md:p-12 bg-[var(--color-bg)]">
              <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Team size
                  </label>
                  <span className="font-display text-2xl font-bold text-[var(--color-brand)]">
                    {teamSize[0]} people
                  </span>
                </div>
                <Slider
                  min={2}
                  max={100}
                  step={1}
                  value={teamSize}
                  onValueChange={setTeamSize}
                  className="[&_[role=slider]]:rounded-none [&_[role=slider]]:border-[var(--color-brand)] [&_[role=slider]]:bg-[var(--color-brand)] [&_.bg-primary]:bg-[var(--color-brand)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-fg-subtle)]">
                  <span>2</span><span>100</span>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Repetitive hours per person / week
                  </label>
                  <span className="font-display text-2xl font-bold text-[var(--color-brand)]">
                    {manualHours[0]}h
                  </span>
                </div>
                <Slider
                  min={1}
                  max={20}
                  step={1}
                  value={manualHours}
                  onValueChange={setManualHours}
                  className="[&_[role=slider]]:rounded-none [&_[role=slider]]:border-[var(--color-brand)] [&_[role=slider]]:bg-[var(--color-brand)] [&_.bg-primary]:bg-[var(--color-brand)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-fg-subtle)]">
                  <span>1h</span><span>20h</span>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-end justify-between">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    Manual handoffs or approvals per week
                  </label>
                  <span className="font-display text-2xl font-bold text-[var(--color-brand)]">
                    {handoffs[0]}
                  </span>
                </div>
                <Slider
                  min={1}
                  max={30}
                  step={1}
                  value={handoffs}
                  onValueChange={setHandoffs}
                  className="[&_[role=slider]]:rounded-none [&_[role=slider]]:border-[var(--color-brand)] [&_[role=slider]]:bg-[var(--color-brand)] [&_.bg-primary]:bg-[var(--color-brand)]"
                />
                <div className="flex justify-between text-xs text-[var(--color-fg-subtle)]">
                  <span>1</span><span>30</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-between gap-8 bg-[var(--color-bg-elev)] p-8 md:p-12">
              <div className="flex flex-col gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                  Your automation profile
                </p>

                {/* Score */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-end justify-between">
                    <p className="text-xs text-[var(--color-fg-muted)]">Automation opportunity score</p>
                    <span className="font-display text-4xl font-bold text-[var(--color-brand)]">
                      {score}<span className="text-xl text-[var(--color-fg-subtle)]">/100</span>
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[var(--color-border)]">
                    <div
                      className="h-full bg-[var(--color-brand)] transition-all duration-500"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="text-xs font-semibold text-[var(--color-fg-muted)]">
                    {level.label}: <span className="font-normal text-[var(--color-fg-subtle)]">{level.desc}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-5 border-t border-[var(--color-border)] pt-5">
                  <div>
                    <p className="text-xs text-[var(--color-fg-muted)]">Team hours lost per week</p>
                    <p className="mt-1 font-display text-3xl font-bold tracking-tight text-[var(--color-fg)]">
                      {weeklyHoursLost}h
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--color-fg-muted)]">Days per year on automation-ready work</p>
                    <p className="mt-1 font-display text-3xl font-bold tracking-tight text-[var(--color-fg)]">
                      {daysPerYear} days
                    </p>
                  </div>

                  {/* Email gate */}
                  {gateState !== "revealed" ? (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
                      <p className="text-xs font-semibold text-[var(--color-fg-muted)]">
                        Enter your work email to see the full cost drag breakdown and reclaimed hours projection
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="min-w-0 flex-1 border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-brand)] focus:outline-none"
                        />
                        <button
                          type="submit"
                          disabled={gateState === "submitting"}
                          className="inline-flex shrink-0 items-center gap-1.5 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] disabled:opacity-60"
                        >
                          {gateState === "submitting" ? (
                            <Loader2 className="size-4 animate-spin" />
                          ) : (
                            <>See projection <ArrowRight className="size-3.5" /></>
                          )}
                        </button>
                      </div>
                      {emailError && (
                        <p className="text-xs text-[var(--color-brand)]">{emailError}</p>
                      )}
                    </form>
                  ) : (
                    <>
                      <p className="text-[11px] text-[var(--color-fg-subtle)]">
                        Roadmap sent to <span className="font-semibold text-[var(--color-fg-muted)]">{email}</span>
                      </p>

                      {/* Annual cost */}
                      <div className="border border-[var(--color-brand)] bg-[var(--color-brand)]/5 p-4">
                        <p className="text-xs text-[var(--color-fg-muted)]">Estimated annual staff cost on automatable work</p>
                        <p className="mt-1 font-display text-3xl font-bold tracking-tight text-[var(--color-brand)]">
                          ≈ {formattedCost}<span className="text-base font-normal text-[var(--color-fg-subtle)]">/yr</span>
                        </p>
                        <p className="mt-1 text-[10px] text-[var(--color-fg-subtle)]">{spec.rateLabel}</p>
                      </div>

                      {/* Reclaimed Bandwidth Highlights */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="border border-[var(--color-accent)] bg-[var(--color-accent)]/5 p-4">
                          <p className="text-xs text-[var(--color-fg-muted)]">Reclaimable time</p>
                          <p className="mt-1 font-display text-2xl font-bold tracking-tight text-[var(--color-accent)]">
                            ~{estimatedReclaimedHours}h / wk
                          </p>
                          <p className="mt-0.5 text-[10px] text-[var(--color-fg-subtle)]">estimated team capacity returned</p>
                        </div>
                        <div className="border border-[var(--color-accent)] bg-[var(--color-accent)]/5 p-4">
                          <p className="text-xs text-[var(--color-fg-muted)]">Target efficiency</p>
                          <p className="mt-1 font-display text-2xl font-bold tracking-tight text-[var(--color-accent)]">
                            75% - 90%
                          </p>
                          <p className="mt-0.5 text-[10px] text-[var(--color-fg-subtle)]">routine handoff automation</p>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <p className="text-xs text-[var(--color-fg-muted)]">We target first</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-brand)]">{target}</p>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]"
              >
                See what we would automate for you <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
