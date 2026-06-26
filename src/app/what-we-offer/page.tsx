import type { Metadata } from "next";
import { WhatWeOfferContent } from "./PageContent";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "Custom AI automation for marketing agencies, e-commerce brands, real estate operators, hospitality businesses, and healthcare clinics — built for your exact workflow, not a generic template.",
};

export default function WhatWeOfferPage() {
  return <WhatWeOfferContent />;
}
