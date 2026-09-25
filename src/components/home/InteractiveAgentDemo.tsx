"use client";

import { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Volume2, ShieldCheck, Zap, Activity, Cpu, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import { GlowButton } from "@/components/shared/GlowButton";
import Link from "next/link";

type Scenario = {
  id: string;
  name: string;
  tag: string;
  industry: string;
  caller: string;
  audioDuration: string;
  latencyMs: number;
  tokensPerSec: number;
  model: string;
  toolCall: {
    name: string;
    payload: string;
    result: string;
  };
  turns: {
    speaker: "caller" | "agent";
    text: string;
    timestamp: string;
    highlight?: boolean;
  }[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "voice-concierge",
    name: "Voice Concierge",
    tag: "VOICE AI · INBOUND",
    industry: "Energy & Utilities",
    caller: "Commercial Customer (Southwest Region)",
    audioDuration: "0:42",
    latencyMs: 740,
    tokensPerSec: 88,
    model: "Nuvero-Voice-v2 (11Labs + GPT-4o)",
    toolCall: {
      name: "DATABASE_ACCOUNT_LOOKUP",
      payload: '{"account_id": "SWG-88219", "query": "tank_refill_status"}',
      result: '{"tank_level": "18%", "dispatch_route": "Route-4B", "eta": "Tomorrow 09:30 AM"}',
    },
    turns: [
      {
        speaker: "caller",
        text: "Hi, this is Mark from Apex Fabrication. Our bulk propane tank is sitting at under twenty percent and we have a heavy run tomorrow morning. Can we get an urgent refill scheduled?",
        timestamp: "00:04",
      },
      {
        speaker: "agent",
        text: "Hello Mark, checking Apex Fabrication on Route 4B right now. I see tank 2 at 18% capacity. I have scheduled an expedited 500-gallon top-off for tomorrow morning before 09:30 AM. A confirmation text was sent to your phone on file.",
        timestamp: "00:11",
        highlight: true,
      },
      {
        speaker: "caller",
        text: "That is perfect. Also, can you ensure the driver has the updated gate code 4821?",
        timestamp: "00:19",
      },
      {
        speaker: "agent",
        text: "Gate code 4821 is logged on the driver manifest for Route 4B. The delivery order is locked in with zero human handoff needed. Anything else for Apex Fabrication today?",
        timestamp: "00:27",
        highlight: true,
      },
    ],
  },
  {
    id: "lead-qualification",
    name: "Lead Qualifier",
    tag: "OUTREACH · CRM SYNC",
    industry: "B2B SaaS & Services",
    caller: "Inbound Prospect (Series A Founder)",
    audioDuration: "0:36",
    latencyMs: 620,
    tokensPerSec: 112,
    model: "Nuvero-Triage-v4 (Claude 3.5 Sonnet)",
    toolCall: {
      name: "CRM_UPSERT_AND_SLACK_NOTIFY",
      payload: '{"company": "Veloce Health", "team": 28, "budget": "$15k-$30k", "score": 94}',
      result: '{"lead_id": "LEAD-4902", "status": "QUALIFIED_A_TIER", "cal_invite_sent": true}',
    },
    turns: [
      {
        speaker: "caller",
        text: "We are a 28-person healthcare team losing roughly 40 hours a week on manual patient onboarding and follow-ups. We need custom automation within the next month.",
        timestamp: "00:03",
      },
      {
        speaker: "agent",
        text: "Understood. That matches our Healthcare Core System deployment. We typically automate the intake-to-EHR sync and SMS reminders within 3 weeks, saving ~35 hours weekly with full HIPAA compliance.",
        timestamp: "00:09",
        highlight: true,
      },
      {
        speaker: "caller",
        text: "Can we review a technical blueprint and sample architecture this Thursday?",
        timestamp: "00:16",
      },
      {
        speaker: "agent",
        text: "I have reserved Thursday at 2:00 PM EST with our founder, Bhumit Goyal. A calendar invite and pre-audit intake brief have been dispatched to your email.",
        timestamp: "00:23",
        highlight: true,
      },
    ],
  },
  {
    id: "real-estate",
    name: "Property Inquiries",
    tag: "LISTING · DISPATCH",
    industry: "Real Estate & Property",
    caller: "High-Intent Buyer",
    audioDuration: "0:38",
    latencyMs: 690,
    tokensPerSec: 96,
    model: "Nuvero-RealEstate-v1 (GPT-4o)",
    toolCall: {
      name: "MLS_INVENTORY_AND_SCHEDULE_VIEWING",
      payload: '{"property_ref": "DOWNTOWN-PENTHOUSE-4A", "slot": "Saturday 11:00 AM"}',
      result: '{"viewing_confirmed": true, "agent_notified": "Sarah K.", "sms_passcode": "VIP-992"}',
    },
    turns: [
      {
        speaker: "caller",
        text: "Hi, I am calling about the 3-bedroom unit listed on Marina View. Is it still available for purchase, and can I tour it this weekend?",
        timestamp: "00:05",
      },
      {
        speaker: "agent",
        text: "Yes, Unit 4A on Marina View is active at $1.45M with vacant possession. I have open private viewing slots this Saturday at 11:00 AM or 3:30 PM. Which works best for you?",
        timestamp: "00:12",
        highlight: true,
      },
      {
        speaker: "caller",
        text: "Saturday at 11:00 AM sounds great. Please book that for Robert Vance.",
        timestamp: "00:20",
      },
      {
        speaker: "agent",
        text: "Viewing confirmed for Saturday at 11:00 AM with our senior agent Sarah. I have sent the entry pass and brochure PDF directly to your WhatsApp number.",
        timestamp: "00:27",
        highlight: true,
      },
    ],
  },
  {
    id: "support-triage",
    name: "Multilingual Triage",
    tag: "SUPPORT · CACHED",
    industry: "D2C & E-Commerce",
    caller: "Customer (Hinglish Query)",
    audioDuration: "0:30",
    latencyMs: 48,
    tokensPerSec: 140,
    model: "Nuvero-Edge-Cache (Sub-50ms)",
    toolCall: {
      name: "CACHE_HIT_AND_DISPATCH_TRACKING",
      payload: '{"order_id": "GHC-99210", "intent": "order_tracking_multilingual"}',
      result: '{"cache_status": "HIT", "carrier": "Bluedart", "out_for_delivery": true}',
    },
    turns: [
      {
        speaker: "caller",
        text: "Mera order GHC-99210 kab tak deliver hoga? Kal tak aayega kya?",
        timestamp: "00:03",
      },
      {
        speaker: "agent",
        text: "Aapka order GHC-99210 out for delivery hai aur aaj shaam 6:00 PM tak aapke address par deliver ho jayega. Live tracking link SMS par bhej diya gaya hai.",
        timestamp: "00:06",
        highlight: true,
      },
      {
        speaker: "caller",
        text: "Great, thank you so much for the quick response!",
        timestamp: "00:13",
      },
      {
        speaker: "agent",
        text: "You are welcome! Have a great day ahead.",
        timestamp: "00:17",
        highlight: true,
      },
    ],
  },
];

export function InteractiveAgentDemo() {
  const [activeTab, setActiveTab] = useState<string>("voice-concierge");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTurnIndex, setActiveTurnIndex] = useState<number>(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) ?? SCENARIOS[0];

  const handleSelectTab = (id: string) => {
    setActiveTab(id);
    setIsPlaying(false);
    setActiveTurnIndex(3);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleReplay = () => {
    setIsPlaying(true);
    setActiveTurnIndex(0);
    if (timerRef.current) clearInterval(timerRef.current);

    let current = 0;
    timerRef.current = setInterval(() => {
      current += 1;
      if (current < scenario.turns.length) {
        setActiveTurnIndex(current);
      } else {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="interactive-demo" className="border-t-2 border-[var(--color-border)] bg-[var(--color-bg)] py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Interactive System Inspection"
          title="See how our agents think, route, and execute in real time."
          subtitle="Inspect real production dialogues across our voice, triage, and dispatch systems. Zero slide-ware: sub-second latency, deterministic guardrails, and live tool calls."
        />

        <Reveal delay={0.1}>
          {/* Scenario Tabs */}
          <div className="mt-12 flex flex-wrap gap-0 border border-[var(--color-border)] bg-[var(--color-bg-elev)]">
            {SCENARIOS.map((s) => {
              const active = s.id === activeTab;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectTab(s.id)}
                  className={`flex flex-1 min-w-[160px] items-center justify-between gap-3 border-r border-b md:border-b-0 border-[var(--color-border)] px-5 py-4 text-left transition-colors last:border-r-0 ${
                    active
                      ? "bg-[var(--color-brand)] text-white"
                      : "text-[var(--color-fg)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-mono font-semibold uppercase tracking-[0.18em] ${
                      active ? "text-white/80" : "text-[var(--color-fg-subtle)]"
                    }`}>
                      {s.tag.split("·")[0]}
                    </span>
                    <span className="font-display text-sm font-semibold tracking-tight">
                      {s.name}
                    </span>
                  </div>
                  {active && (
                    <span className="size-2 bg-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Inspection Grid */}
          <div className="mt-0 grid grid-cols-1 border-x border-b border-[var(--color-border)] lg:grid-cols-12 bg-[var(--color-bg-elev)]">
            
            {/* Conversation Log (7 cols) */}
            <div className="flex flex-col justify-between border-b border-[var(--color-border)] p-6 md:p-8 lg:col-span-7 lg:border-b-0 lg:border-r">
              <div className="flex flex-col gap-5">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block size-2.5 bg-[#2D7A4F] animate-pulse" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fg)]">
                      LIVE DIALOGUE TRACE · {scenario.caller}
                    </span>
                  </div>
                  <button
                    onClick={handleReplay}
                    className="flex items-center gap-1.5 border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 font-mono text-xs text-[var(--color-fg)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    {isPlaying ? <Activity className="size-3 text-[var(--color-brand)] animate-spin" /> : <RotateCcw className="size-3" />}
                    <span>{isPlaying ? "Streaming..." : "Replay Sequence"}</span>
                  </button>
                </div>

                {/* Dialog Messages */}
                <div className="flex flex-col gap-4 py-2">
                  {scenario.turns.slice(0, activeTurnIndex + 1).map((turn, idx) => {
                    const isAgent = turn.speaker === "agent";
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col gap-1.5 p-4 border transition-all ${
                          isAgent
                            ? "border-[var(--color-brand)] bg-[var(--color-bg)] shadow-[3px_3px_0_var(--color-brand)]"
                            : "border-[var(--color-border)] bg-[var(--color-surface)]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`size-2 ${isAgent ? "bg-[var(--color-brand)]" : "bg-[var(--color-fg-muted)]"}`} />
                            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-fg)]">
                              {isAgent ? "Nuvero Agent" : "Customer / Inbound"}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-[var(--color-fg-subtle)]">
                            {turn.timestamp}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-[var(--color-fg)]">
                          {turn.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom footer status */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4 text-xs font-mono text-[var(--color-fg-muted)]">
                <div className="flex items-center gap-3">
                  <span>Latency: <strong className="text-[var(--color-brand)] font-bold">{scenario.latencyMs}ms</strong></span>
                  <span>·</span>
                  <span>Throughput: <strong className="text-[var(--color-fg)]">{scenario.tokensPerSec} t/s</strong></span>
                </div>
                <span className="text-[11px] text-[var(--color-fg-subtle)]">Zero human intervention required</span>
              </div>
            </div>

            {/* Technical Telemetry & Tool Call Visualizer (5 cols) */}
            <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-5 bg-[var(--color-bg)]">
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-fg-subtle)]">
                    ■ System Telemetry & Tool Call
                  </h4>
                  <p className="mt-1 font-display text-base font-semibold text-[var(--color-fg)]">
                    Autonomous Database Mutation
                  </p>
                </div>

                {/* Model and guardrail specs */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3">
                    <span className="block font-mono text-[10px] uppercase text-[var(--color-fg-subtle)]">Engine</span>
                    <span className="mt-1 block font-mono text-xs font-bold text-[var(--color-fg)]">{scenario.model}</span>
                  </div>
                  <div className="border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3">
                    <span className="block font-mono text-[10px] uppercase text-[var(--color-fg-subtle)]">Guardrails</span>
                    <span className="mt-1 flex items-center gap-1.5 font-mono text-xs font-bold text-[#2D7A4F]">
                      <ShieldCheck className="size-3.5" /> Deterministic
                    </span>
                  </div>
                </div>

                {/* Tool call execution block */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-[var(--color-brand)]">
                      EXEC: {scenario.toolCall.name}
                    </span>
                    <span className="font-mono text-[10px] bg-[#2D7A4F]/15 text-[#2D7A4F] px-2 py-0.5 font-bold">
                      200 OK
                    </span>
                  </div>

                  {/* Code / JSON inspection */}
                  <div className="border border-[var(--color-border)] bg-[#003049] p-3 text-[11px] font-mono text-[#FDF0D5] leading-relaxed overflow-x-auto">
                    <div className="text-[var(--color-accent)] font-semibold">// Payload dispatched to CRM/ERP</div>
                    <div className="text-[#EDD89D] mt-1">{scenario.toolCall.payload}</div>
                    <div className="mt-2 text-[#2D7A4F] font-semibold">// Server response received</div>
                    <div className="text-white/80 mt-1">{scenario.toolCall.result}</div>
                  </div>
                </div>

                {/* Real-world impact block */}
                <div className="border-l-2 border-[var(--color-brand)] bg-[var(--color-bg-elev)] p-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    Operational Guarantee
                  </span>
                  <p className="mt-1 text-xs text-[var(--color-fg-muted)] leading-relaxed">
                    Trained directly on your SOPs, edge-case trees, and brand voice. Every transaction logs full auditable state to your database.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                <Link
                  href="/contact"
                  className="flex items-center justify-between border border-[var(--color-border)] bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-strong)]"
                >
                  <span>Build an agent for your stack</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
