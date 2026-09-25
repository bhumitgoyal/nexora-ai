import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "AI Infrastructure for Your Business",
  description:
    "Nuvero AI builds the AI infrastructure your business runs on. Agents trained on your workflows, wired into your stack, running your operations 24/7. Any manual work, automated. You own the whole layer.",
};
import dynamic from "next/dynamic";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { OpsLedger } from "@/components/home/OpsLedger";
import { AgentRoster } from "@/components/home/AgentRoster";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FromTheWorkshop } from "@/components/home/FromTheWorkshop";
import { StatsBar } from "@/components/home/StatsBar";
import { Governance } from "@/components/home/Governance";
import { ProcessSnapshot } from "@/components/home/ProcessSnapshot";
import { Testimonials } from "@/components/home/Testimonials";
import { Switchboard } from "@/components/home/Switchboard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Perforation } from "@/components/shared/Perforation";
import { InteractiveAgentDemo } from "@/components/home/InteractiveAgentDemo";
import { FounderTrust } from "@/components/home/FounderTrust";
import { PricingSection } from "@/components/home/PricingSection";

// Below-the-fold heavy components chunked for smaller initial JS payload
const WiringDiagram = dynamic(() => import("@/components/home/WiringDiagram").then((m) => m.WiringDiagram));
const ComparisonTable = dynamic(() => import("@/components/home/ComparisonTable").then((m) => m.ComparisonTable));
const AuditDeliverables = dynamic(() => import("@/components/home/AuditDeliverables").then((m) => m.AuditDeliverables));
const RoiEstimator = dynamic(() => import("@/components/home/RoiEstimator").then((m) => m.RoiEstimator));
const GlassBox = dynamic(() => import("@/components/home/GlassBox").then((m) => m.GlassBox));
const FaqStrip = dynamic(() => import("@/components/home/FaqStrip").then((m) => m.FaqStrip));

export default function HomePage() {
  return (
    <>
      {/* Narrative: promise -> what it takes over -> live proof -> interactive inspection ->
          what a deployment is -> how it wires in -> your industry -> the systems ->
          the difference -> evidence -> founder engineering -> how we build ->
          transparent pricing -> estimate -> voices -> act */}
      <Hero />
      <OpsLedger />
      <Switchboard />
      <InteractiveAgentDemo />
      <Perforation label="The record continues" />
      <AgentRoster />
      <WiringDiagram />
      <WhatWeOffer />
      <ServicesPreview />
      <ComparisonTable />
      <FeaturedWork />
      <FromTheWorkshop />
      <StatsBar />
      <TrustStrip />
      <FounderTrust />
      <ProcessSnapshot />
      <Governance />
      <AuditDeliverables />
      <PricingSection />
      <RoiEstimator />
      <Testimonials />
      <GlassBox />
      <FaqStrip />
      <CtaBanner />
    </>
  );
}
