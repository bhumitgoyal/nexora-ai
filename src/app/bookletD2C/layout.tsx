import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `D2C Services Booklet · ${site.name}`,
  description:
    "A printable D2C & e-commerce AI booklet from Nexora AI. Brand-aware chatbots, AI stylists, cart recovery, and voice order-confirmation agents for Shopify and DTC brands.",
  robots: { index: false, follow: false },
};

export default function BookletD2CLayout({ children }: { children: React.ReactNode }) {
  return <div className="booklet-shell">{children}</div>;
}
