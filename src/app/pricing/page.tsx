import type { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/schemas";
import { pricingFaqs } from "@/content/pricing";
import { pageMetadata } from "@/lib/seo";
import { PricingContent } from "./PricingContent";
import { CtaBanner } from "@/components/home/CtaBanner";
import { TechStackMarquee } from "@/components/home/TechStackMarquee";

export const metadata: Metadata = pageMetadata({
  title: "Pricing & Engagement Models",
  description:
    "How Nuvero scopes and prices AI infrastructure: fixed-price sprints, core system deployments and full custom builds, with 100% code and IP ownership for you.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd items={pricingFaqs} path="/pricing" />
      <PricingContent />
      <TechStackMarquee />
      <CtaBanner />
    </>
  );
}
