import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HeartPulse,
  Banknote,
  ShoppingBag,
  Cloud,
  Truck,
  GraduationCap,
  Megaphone,
  Users,
  Briefcase,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  useCases: string[];
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    headline: "Capture every inbound lead the moment interest peaks.",
    useCases: [
      "Inbound qualifier agents (voice + chat)",
      "Property-matching engines with MLS sync",
      "Automated showing scheduling and follow-ups",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Wellness",
    icon: HeartPulse,
    headline: "Patient-facing AI that's empathetic, multilingual, and HIPAA-aware.",
    useCases: [
      "Appointment booking and triage assistants",
      "Post-visit follow-up and medication reminders",
      "Internal clinical knowledge copilots",
    ],
  },
  {
    slug: "fintech",
    name: "FinTech & Banking",
    icon: Banknote,
    headline: "Compliance-grade AI for high-stakes financial conversations.",
    useCases: [
      "Underwriting assistants with audit trails",
      "Fraud-pattern detection copilots",
      "Customer dispute and refund automation",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce & D2C",
    icon: ShoppingBag,
    headline: "Concierge shopping experiences that lift AOV and slash returns.",
    useCases: [
      "Product recommendation chat on WhatsApp + web",
      "Returns and order-status automation",
      "Cart-recovery sequences with personalized offers",
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    icon: Cloud,
    headline: "AI features your customers ask for — without burning your roadmap.",
    useCases: [
      "Embedded copilots in your product",
      "Customer success agents that prevent churn",
      "Self-serve onboarding tours powered by AI",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    headline: "Ops copilots that turn institutional knowledge into instant answers.",
    useCases: [
      "Internal SOP and contract Q&A",
      "Carrier and route-selection assistants",
      "Exception-handling agents for delayed shipments",
    ],
  },
  {
    slug: "education",
    name: "Education & EdTech",
    icon: GraduationCap,
    headline: "Personalized learning assistants that scale to every student.",
    useCases: [
      "Tutoring agents with curriculum awareness",
      "Admissions inquiry and counselling bots",
      "Internal copilots for faculty and admin",
    ],
  },
  {
    slug: "marketing-media",
    name: "Marketing & Media",
    icon: Megaphone,
    headline: "AI content engines and campaign systems that ship at agency-killing velocity.",
    useCases: [
      "Brand-voice content production at scale",
      "Multi-channel campaign orchestration",
      "Asset repurposing across formats",
    ],
  },
  {
    slug: "recruiting-hr",
    name: "Recruiting & People Ops",
    icon: Users,
    headline: "Source, screen, and schedule before competitors finish posting the job.",
    useCases: [
      "Passive sourcing agents for LinkedIn and GitHub",
      "Conversational pre-screen interviewers",
      "Interview scheduling + feedback automation",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services & VC",
    icon: Briefcase,
    headline: "Copilots that turn your firm's tribal knowledge into an institutional advantage.",
    useCases: [
      "Portfolio + deal-room knowledge copilots",
      "Proposal and pitch-deck automation",
      "Internal research and due-diligence agents",
    ],
  },
];
