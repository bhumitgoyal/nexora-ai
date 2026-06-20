import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Services Booklet · ${site.name}`,
  description:
    "A printable, animated services booklet from Nexora AI. Built to be sent to clients and saved as a PDF.",
  robots: { index: false, follow: false },
};

export default function BookletLayout({ children }: { children: React.ReactNode }) {
  return <div className="booklet-shell">{children}</div>;
}
