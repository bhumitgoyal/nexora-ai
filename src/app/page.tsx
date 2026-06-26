import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Custom AI Agents Built for Your Business",
  description:
    "Nuvero AI builds custom AI agents that follow up leads in 60 seconds, generate campaign reports in 15 minutes, and run your ops 24/7. Shipped in 6 weeks. Built in your stack.",
};
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ScrollWordHighlight } from "@/components/home/ScrollWordHighlight";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { StatsBar } from "@/components/home/StatsBar";
import { ProcessSnapshot } from "@/components/home/ProcessSnapshot";
import { RoiEstimator } from "@/components/home/RoiEstimator";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";
import { FaqStrip } from "@/components/home/FaqStrip";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <ComparisonTable />
      <ScrollWordHighlight />
      <ServicesPreview />
      <FeaturedWork />
      <StatsBar />
      <ProcessSnapshot />
      <RoiEstimator />
      <Testimonials />
      <TechStackMarquee />
      <FaqStrip />
      <CtaBanner />
    </>
  );
}
