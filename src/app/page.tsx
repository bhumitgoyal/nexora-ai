import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { OpsLedger } from "@/components/home/OpsLedger";
import { Switchboard } from "@/components/home/Switchboard";
import { InteractiveAgentDemo } from "@/components/home/InteractiveAgentDemo";
import { AgentRoster } from "@/components/home/AgentRoster";
import { LayerAssembly } from "@/components/home/LayerAssembly";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FromTheWorkshop } from "@/components/home/FromTheWorkshop";
import { FounderTrust } from "@/components/home/FounderTrust";
import { ProcessSnapshot } from "@/components/home/ProcessSnapshot";
import { Governance } from "@/components/home/Governance";
import { PricingSection } from "@/components/home/PricingSection";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Perforation } from "@/components/shared/Perforation";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "AI Infrastructure for Your Business",
  description:
    "Nuvero AI builds the AI infrastructure your business runs on. Agents trained on your workflows, wired into your stack, running your operations 24/7. Any manual work, automated. You own the whole layer.",
};

// Below-the-fold heavy components chunked for smaller initial JS payload
const WiringDiagram = dynamic(() => import("@/components/home/WiringDiagram").then((m) => m.WiringDiagram));
const ComparisonTable = dynamic(() => import("@/components/home/ComparisonTable").then((m) => m.ComparisonTable));
const RoiEstimator = dynamic(() => import("@/components/home/RoiEstimator").then((m) => m.RoiEstimator));
const GlassBox = dynamic(() => import("@/components/home/GlassBox").then((m) => m.GlassBox));
const FaqStrip = dynamic(() => import("@/components/home/FaqStrip").then((m) => m.FaqStrip));

export default function HomePage() {
  return (
    <>
      {/* promise → proof → what it takes over → live feed → inspect it →
          what a deployment is → how it wires in → your industry → the systems →
          the difference → evidence → our own stack → who builds it → how →
          controls → pricing → estimate → voices → safety → questions → act.
          Off home: TrustStrip (GlassBox covers it), AuditDeliverables (/process). */}
      <Hero />
      <StatsBar />
      <OpsLedger />
      <Switchboard />
      <InteractiveAgentDemo />
      <Perforation label="The record continues" />
      <AgentRoster />
      <LayerAssembly />
      <WiringDiagram />
      <WhatWeOffer />
      <ServicesPreview />
      <ComparisonTable />
      <FeaturedWork />
      <FromTheWorkshop />
      <FounderTrust />
      <ProcessSnapshot />
      <Governance />
      <PricingSection />
      <RoiEstimator />
      <Testimonials />
      <GlassBox />
      <FaqStrip />
      <CtaBanner />
    </>
  );
}
