import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { WhatWeOfferContent } from "./PageContent";

export const metadata: Metadata = pageMetadata({
  title: "AI Infrastructure for Your Operations",
  description:
    "AI infrastructure for agencies, e-commerce, real estate, hospitality and clinics: agents trained on your workflows, wired into your stack, doing manual work.",
  path: "/what-we-offer",
});

export default function WhatWeOfferPage() {
  return <WhatWeOfferContent />;
}
