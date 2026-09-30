import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Engagement Models & Scoping",
  description:
    "Tailored AI infrastructure engagements. Sprints, custom voice agents, CRM workflows, and full enterprise ops systems with 100% code ownership.",
};

export default function PricingPage() {
  return (
    <>
      <PricingContent />
      <TechStackMarquee />
      <CtaBanner />
    </>
  );
}
