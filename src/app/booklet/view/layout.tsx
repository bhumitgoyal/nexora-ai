import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  // absolute: the root template would otherwise append the brand a second time.
  title: { absolute: `Services Booklet · ${site.name}` },
  description:
    "A printable, animated services booklet from Nuvero AI. Built to be sent to clients and saved as a PDF.",
  robots: { index: false, follow: false },
};

export default function BookletViewLayout({ children }: { children: React.ReactNode }) {
  return <div className="booklet-shell">{children}</div>;
}
