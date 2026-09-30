import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "AI Infrastructure for Your Business",
  description:
    "Nuvero AI builds the AI infrastructure your business runs on. Agents trained on your workflows, wired into your stack, running your operations 24/7. Any manual work, automated. You own the whole layer.",
};
import dynamic from "next/dynamic";
import { OpsLedger } from "@/components/home/OpsLedger";
import { StatsBar } from "@/components/home/StatsBar";
import { LayerAssembly } from "@/components/home/LayerAssembly";
import { Switchboard } from "@/components/home/Switchboard";
import { AgentRoster } from "@/components/home/AgentRoster";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { PullQuote } from "@/components/home/PullQuote";
import { ProcessSnapshot } from "@/components/home/ProcessSnapshot";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Perforation } from "@/components/shared/Perforation";

// Below-the-fold, interaction-heavy sections chunked out of the initial payload
const RoiEstimator = dynamic(() => import("@/components/home/RoiEstimator").then((m) => m.RoiEstimator));
const GlassBox = dynamic(() => import("@/components/home/GlassBox").then((m) => m.GlassBox));
const FaqStrip = dynamic(() => import("@/components/home/FaqStrip").then((m) => m.FaqStrip));

export default function HomePage() {
  return (
    <>
      {/* One argument, one question per section (HIG "Purpose": every section
          costs attention). What is it → proof → why care → how it works →
          what it prints → what you get → your industry → has it worked →
          what happens next → is it safe → is it worth it → anything else → act.
          Moved off home: ComparisonTable + WiringDiagram → /what-we-offer,
          Governance + AuditDeliverables → /process. Retired: the testimonial
          marquee (one PullQuote here, the rest on /reviews), ServicesPreview
          (duplicated /services), FromTheWorkshop (duplicated /briefings) and
          TrustStrip (covered by GlassBox). */}
      <Hero />
      <StatsBar />
      <OpsLedger />
      <LayerAssembly />
      <Switchboard />
      <Perforation label="The record continues" />
      <AgentRoster />
      <WhatWeOffer />
      <FeaturedWork />
      <PullQuote />
      <ProcessSnapshot />
      <GlassBox />
      <RoiEstimator />
      <FaqStrip />
      <CtaBanner />
    </>
  );
}
