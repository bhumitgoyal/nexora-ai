import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "AI Infrastructure for Your Business",
  description:
    "Nuvero AI builds the AI infrastructure your business runs on — agents trained on your workflows, wired into your stack, running your operations 24/7. Any manual work, automated. You own the whole layer.",
};
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { OpsLedger } from "@/components/home/OpsLedger";
import { AgentRoster } from "@/components/home/AgentRoster";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { StatsBar } from "@/components/home/StatsBar";
import { ProcessSnapshot } from "@/components/home/ProcessSnapshot";
import { RoiEstimator } from "@/components/home/RoiEstimator";
import { Testimonials } from "@/components/home/Testimonials";
import { Switchboard } from "@/components/home/Switchboard";
import { WiringDiagram } from "@/components/home/WiringDiagram";
import { FaqStrip } from "@/components/home/FaqStrip";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Perforation } from "@/components/shared/Perforation";

export default function HomePage() {
  return (
    <>
      {/* Narrative: promise → what it takes over → live proof → what a
          deployment is → how it wires in → your industry → the systems →
          the difference → evidence → how we build → estimate → voices → act */}
      <Hero />
      <OpsLedger />
      <Switchboard />
      <Perforation label="The record continues" />
      <AgentRoster />
      <WiringDiagram />
      <WhatWeOffer />
      <ServicesPreview />
      <ComparisonTable />
      <FeaturedWork />
      <StatsBar />
      <TrustStrip />
      <ProcessSnapshot />
      <RoiEstimator />
      <Testimonials />
      <FaqStrip />
      <CtaBanner />
    </>
  );
}
