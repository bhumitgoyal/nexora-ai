import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  // absolute: the root template would otherwise append the brand a second time.
  title: { absolute: `D2C Services Booklet · ${site.name}` },
  description:
    "A printable D2C & e-commerce AI booklet from Nuvero AI. Brand-aware chatbots, AI stylists, cart recovery, and voice order-confirmation agents for Shopify and DTC brands.",
  robots: { index: false, follow: false },
};

export default function BookletD2CLayout({ children }: { children: React.ReactNode }) {
  return <div className="booklet-shell">{children}</div>;
}
