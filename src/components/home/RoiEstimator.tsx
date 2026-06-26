"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LEVELS = [
  { max: 30, label: "Automation starter", desc: "Good foundation a few quick wins available." },
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

export function RoiEstimator() {
  const [teamSize, setTeamSize] = useState([12]);
  const [manualHours, setManualHours] = useState([8]);
  const [handoffs, setHandoffs] = useState([10]);

  const weeklyHoursLost = teamSize[0] * manualHours[0];
  const daysPerYear = Math.round((weeklyHoursLost * 52) / 8);
  const annualCostINR = weeklyHoursLost * 52 * 350;
  const formattedCost =
    annualCostINR >= 10_000_000
      ? `₹${(annualCostINR / 10_000_000).toFixed(1)} Cr`
      : annualCostINR >= 100_000
      ? `₹${(annualCostINR / 100_000).toFixed(1)}L`
      : `₹${(annualCostINR / 1000).toFixed(0)}K`;
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

  return (
    <section id="automation-audit" className="border-t border-[var(--color-border)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Automation Audit"
          title="How much of your week is already on autopilot?"
          subtitle="Drag the sliders. Get an honest read on where your team's time is going and what AI would target first."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-0 border border-[var(--color-border)] lg:grid-cols-2">
            {/* Sliders */}
            <div className="flex flex-col gap-10 border-b border-[var(--color-border)] p-8 lg:border-b-0 lg:border-r md:p-12">
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
                    <span className="font-display text-4xl font-bold text-[var(--color-brand)]">{score}<span className="text-xl text-[var(--color-fg-subtle)]">/100</span></span>
                  </div>
                  {/* Score bar */}
                  <div className="h-2 w-full bg-[var(--color-border)]">
                    <div
                      className="h-full bg-[var(--color-brand)] transition-all duration-500"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="text-xs font-semibold text-[var(--color-fg-muted)]">
                    {level.label} <span className="font-normal text-[var(--color-fg-subtle)]">{level.desc}</span>
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

                  <div className="border border-[var(--color-brand)] bg-[var(--color-brand)]/5 p-4">
                    <p className="text-xs text-[var(--color-fg-muted)]">Estimated annual staff cost on automatable work</p>
                    <p className="mt-1 font-display text-3xl font-bold tracking-tight text-[var(--color-brand)]">
                      ≈ {formattedCost}<span className="text-base font-normal text-[var(--color-fg-subtle)]">/yr</span>
                    </p>
                    <p className="mt-1 text-[10px] text-[var(--color-fg-subtle)]">Based on ₹350/hr avg. fully-loaded cost</p>
                  </div>

                  <div>
                    <p className="text-xs text-[var(--color-fg-muted)]">We'd target first</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-brand)]">{target}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]"
              >
                See what we'd automate for you <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
