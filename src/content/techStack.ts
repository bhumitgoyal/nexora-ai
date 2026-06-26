export type TechLogo = {
  name: string;
  category: "ops" | "sales" | "marketing" | "finance" | "support" | "comms";
};

export const techStack: TechLogo[] = [
  { name: "Customer Support", category: "support" },
  { name: "Lead Generation", category: "sales" },
  { name: "Email Marketing", category: "marketing" },
  { name: "Invoice Processing", category: "finance" },
  { name: "Appointment Booking", category: "ops" },
  { name: "Inventory Management", category: "ops" },
  { name: "Sales Follow-ups", category: "sales" },
  { name: "Social Media Posting", category: "marketing" },
  { name: "Report Generation", category: "ops" },
  { name: "Order Processing", category: "ops" },
  { name: "Employee Onboarding", category: "ops" },
  { name: "Customer Onboarding", category: "support" },
  { name: "Supplier Follow-ups", category: "comms" },
  { name: "Complaint Handling", category: "support" },
  { name: "Campaign Monitoring", category: "marketing" },
  { name: "Quote Generation", category: "sales" },
  { name: "Delivery Notifications", category: "comms" },
  { name: "Review Collection", category: "marketing" },
  { name: "Data Entry", category: "ops" },
  { name: "Meeting Scheduling", category: "ops" },
  { name: "Contract Reminders", category: "finance" },
  { name: "Stock Replenishment", category: "ops" },
  { name: "Client Reporting", category: "comms" },
  { name: "Cold Outreach", category: "sales" },
];

export const principles = [
  {
    title: "Pragmatism over hype",
    body: "We pick the model, framework, and pattern that works, not whatever's trending on X this week.",
  },
  {
    title: "Ship in weeks, not quarters",
    body: "Tight cycles, working software every week, ruthlessly cut scope that doesn't compound.",
  },
  {
    title: "You own the system",
    body: "Code, data, models, and infra all live with you. No vendor lock-in, no per-seat tax.",
  },
  {
    title: "Measured impact only",
    body: "We instrument every build with KPIs upfront. If it's not moving a number, it's not done.",
  },
];

export const aboutStats = [
  { metric: "47+", label: "AI systems shipped to production" },
  { metric: "1.4M+", label: "AI interactions handled monthly" },
  { metric: "11", label: "industries served" },
  { metric: "94%", label: "client retention rate" },
];
