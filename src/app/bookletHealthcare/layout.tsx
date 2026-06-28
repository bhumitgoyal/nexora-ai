import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Healthcare & Clinics Booklet · ${site.name}`,
  description:
    "A printable AI booklet for doctors, clinics, and healthcare operators. Appointment automation, patient intake, reminders, and AI-driven care workflows from Nuvero AI.",
  robots: { index: false, follow: false },
};

export default function BookletHealthcareLayout({ children }: { children: React.ReactNode }) {
  return <div className="booklet-shell">{children}</div>;
}
