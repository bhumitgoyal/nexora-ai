import type { Metadata } from "next";
import { WhatWeOfferContent } from "./PageContent";
import { LayerAssembly } from "@/components/home/LayerAssembly";

export const metadata: Metadata = {
  alternates: { canonical: "/what-we-offer" },
  title: "Infrastructure",
  description:
    "AI infrastructure for marketing agencies, e-commerce brands, real estate operators, hospitality businesses, and healthcare clinics. Agents trained on your exact workflows, wired into your stack, running your manual work 24/7.",
};

export default function WhatWeOfferPage() {
  return (
    <>
      <WhatWeOfferContent />
      <LayerAssembly />
    </>
  );
}
