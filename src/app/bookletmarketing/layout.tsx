import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  // absolute: the root template would otherwise append the brand a second time.
  title: { absolute: `Agency Services Booklet · ${site.name}` },
  description:
    "A printable marketing & digital agency AI booklet from Nuvero AI. White-label dashboards, workflow automation, content engines, and resellable AI products for agencies.",
  robots: { index: false, follow: false },
};

export default function BookletMarketingLayout({ children }: { children: React.ReactNode }) {
  return <div className="booklet-shell">{children}</div>;
}
