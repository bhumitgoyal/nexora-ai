import type { LucideIcon } from "lucide-react";
import {
  PhoneCall,
  MessageSquareText,
  Radar,
  Megaphone,
  Workflow,
  Compass,
  PenTool,
  TrendingUp,
  LineChart,
  Users,
  BookOpen,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string[];
  deliverables: string[];
  tech: string[];
  icon: LucideIcon;
  accent: "brand" | "accent" | "mixed";
};

export const services: Service[] = [
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    tagline: "Human-grade voice concierges that never sleep.",
    problem:
      "Missed calls leak revenue. Hiring round-the-clock reps is brutal on margins, and IVRs frustrate the customers you fought hardest to win.",
    solution: [
      "Inbound voice agents that handle FAQs, troubleshoot, and route smartly with zero hold-music.",
      "Outbound campaign agents that pitch, qualify, and book meetings in natural conversation.",
      "Domain-trained on your SOPs, product catalog, and customer history with secure retrieval.",
      "Full transcripts, sentiment, and outcomes piped to your CRM, Sheets, or ticketing tool.",
    ],
    deliverables: [
      "Custom voice persona + scripted fallbacks",
      "Bi-directional CRM sync (HubSpot, Salesforce, Zoho)",
      "Real-time dashboards + daily ops digest",
      "Human-handoff escalation playbooks",
    ],
    tech: ["Vapi", "Twilio", "ElevenLabs", "Deepgram", "OpenAI Realtime"],
    icon: PhoneCall,
    accent: "brand",
  },
  {
    slug: "conversational-ai-chatbots",
    title: "Conversational AI & Chatbots",
    tagline: "Omnichannel assistants with memory, context, and taste.",
    problem:
      "Generic bots break the moment a real customer asks a real question. Support teams drown in repeats and your NPS pays for it.",
    solution: [
      "WhatsApp, web, in-app, and Instagram DM assistants on a unified brain.",
      "Per-user long-term memory so the next chat feels like the last one continued.",
      "Multilingual + tone-matched replies that mirror how your customers actually talk.",
      "Smart escalation to humans when the bot detects high-stakes or low-confidence intents.",
    ],
    deliverables: [
      "RAG knowledge base over docs, SOPs, and product data",
      "Tool-use for orders, refunds, bookings, and account actions",
      "Conversation analytics + intent clustering",
      "Weekly retraining loop from real chats",
    ],
    tech: ["LangChain", "Pinecone", "Supabase", "WhatsApp Cloud API", "Claude", "GPT-4o"],
    icon: MessageSquareText,
    accent: "accent",
  },
  {
    slug: "ai-lead-generation",
    title: "AI-Powered Lead Generation",
    tagline: "Pipeline on tap — enriched, verified, ready to close.",
    problem:
      "Buying lists is a graveyard. Manual prospecting is the most expensive way to fill a CRM with bounces and dead numbers.",
    solution: [
      "Targeted LinkedIn scraping aligned to your ICP signals.",
      "Multi-source enrichment (firmographics, tech stack, hiring intent, news triggers).",
      "Cascade email-verification across providers — pay pennies, ship validated lists.",
      "Auto-drafted, personalized first-touch emails ready for your sequencer.",
    ],
    deliverables: [
      "Custom ICP scoring model",
      "Daily enriched lead drops to Sheets or your CRM",
      "Personalized opener variants per lead",
      "Bounce-rate guarantee under 3%",
    ],
    tech: ["Apollo", "Apify", "Clearbit", "NeverBounce", "ZeroBounce", "OpenAI"],
    icon: Radar,
    accent: "mixed",
  },
  {
    slug: "ai-marketing-automation",
    title: "AI Marketing Automation",
    tagline: "Campaigns that write, test, and optimize themselves.",
    problem:
      "Your team spends 80% of the week on busywork — drafting variants, chasing replies, repackaging assets — and 20% on the strategy that actually moves the needle.",
    solution: [
      "End-to-end campaign generation: copy, subject lines, landing pages, follow-ups.",
      "AI reply-handling that triages, drafts, and books meetings from your inbox.",
      "Repurposing engine: one long-form asset → 12 channel-ready cuts.",
      "Continuous A/B/n testing with auto-promotion of the winning variant.",
    ],
    deliverables: [
      "Multi-channel campaign blueprint",
      "Inbox copilot for reply triage + drafting",
      "Asset repurposing pipeline",
      "Weekly performance + iteration report",
    ],
    tech: ["n8n", "Make", "Instantly", "Smartlead", "HubSpot", "Claude"],
    icon: Megaphone,
    accent: "brand",
  },
  {
    slug: "custom-ai-workflows",
    title: "Custom AI Workflows & Integrations",
    tagline: "Tailored agentic systems wired into the tools you already pay for.",
    problem:
      "Off-the-shelf SaaS handles 70%. The last 30% — the part that's actually unique to your business — is where the leverage hides.",
    solution: [
      "Bespoke agents for ops, finance, recruiting, supply chain, and beyond.",
      "Tool-use across Slack, Notion, Sheets, Drive, Jira, Stripe, and your internal APIs.",
      "Event-driven orchestration with retries, observability, and human-in-the-loop checkpoints.",
      "Built on your stack, owned by you — no vendor lock-in, no per-seat tax.",
    ],
    deliverables: [
      "Discovery + workflow map",
      "Production-ready agent deployment",
      "Observability dashboard + on-call runbooks",
      "30-day post-launch optimization",
    ],
    tech: ["LangGraph", "Temporal", "n8n", "Supabase", "Vercel", "AWS Lambda"],
    icon: Workflow,
    accent: "accent",
  },
  {
    slug: "ai-content-engine",
    title: "AI Content Production Engine",
    tagline: "Blogs, scripts, social, and ad creative shipped at 10x the velocity.",
    problem:
      "Your content calendar is a graveyard of half-finished briefs. Writers cost a fortune, agencies are slow, and your competitors are publishing while you're still in draft #3.",
    solution: [
      "Brand-voice training so every piece sounds unmistakably like you — not a generic AI.",
      "End-to-end pipelines: brief \u2192 outline \u2192 draft \u2192 SEO pass \u2192 internal review \u2192 publish.",
      "Multi-format repurposing: one long-form piece becomes 12 channel-ready cuts (LinkedIn, X, Instagram, YouTube Shorts, newsletter).",
      "Editorial guardrails + fact-check layer so quality holds at scale.",
    ],
    deliverables: [
      "Brand voice + style guide encoded as a prompt library",
      "Editorial workflow with human review checkpoints",
      "Asset repurposing pipeline across 6+ channels",
      "Performance dashboard tying content to pipeline and revenue",
    ],
    tech: ["Claude", "GPT-4o", "Notion", "Webflow", "Buffer", "Descript"],
    icon: PenTool,
    accent: "brand",
  },
  {
    slug: "ai-seo-programmatic",
    title: "AI-Driven SEO & Programmatic Growth",
    tagline: "Rank for thousands of long-tail intents your competitors never noticed.",
    problem:
      "Traditional SEO doesn't scale. Manually writing one page at a time means missing 95% of the long-tail queries your buyers are actually searching.",
    solution: [
      "Keyword discovery engine that mines clusters, gaps, and untapped intents from your category.",
      "Programmatic page generation \u2014 hundreds to thousands of high-quality pages templated from your data.",
      "Automatic internal linking, schema markup, and on-page optimization at publish time.",
      "Continuous monitoring + AI rewrites for pages losing rank.",
    ],
    deliverables: [
      "Topical authority map for your category",
      "Programmatic page templates with QA pipeline",
      "Internal linking + schema automation",
      "Monthly rank, traffic, and revenue attribution report",
    ],
    tech: ["Ahrefs", "DataForSEO", "GPT-4o", "Claude", "Webflow", "Next.js"],
    icon: TrendingUp,
    accent: "accent",
  },
  {
    slug: "sales-ops-copilot",
    title: "Sales Operations Copilot",
    tagline: "Pipeline hygiene, forecasts, and deal intelligence \u2014 on autopilot.",
    problem:
      "Your CRM is a swamp. Reps don't log calls, forecasts are guesses, and leadership only learns a deal slipped after it's already gone.",
    solution: [
      "Auto-enrichment of every deal with notes, next steps, risk score, and competitive context.",
      "Conversation intelligence \u2014 every call transcribed, summarized, and tagged for objections, MEDDIC fields, and follow-ups.",
      "AI forecasts with confidence intervals that your CFO will actually trust.",
      "Slack nudges to reps the moment a deal goes stale or shows risk signals.",
    ],
    deliverables: [
      "CRM auto-hygiene agent (Salesforce, HubSpot, Pipedrive)",
      "Conversation intelligence integrated with Gong / Fathom / Fireflies",
      "Weekly forecast + pipeline health dashboard",
      "Per-rep coaching insights",
    ],
    tech: ["Salesforce", "HubSpot", "Gong", "Fathom", "Claude", "Slack"],
    icon: LineChart,
    accent: "mixed",
  },
  {
    slug: "ai-recruiting-hr",
    title: "AI Recruiting & People Operations",
    tagline: "Source, screen, and schedule \u2014 faster than your competitors can post the job.",
    problem:
      "Hiring is a slow, expensive, manual slog. Recruiters drown in resumes, candidates ghost from slow processes, and the best people sign somewhere else.",
    solution: [
      "Inbound resume triage that scores candidates against your ICP in seconds, not days.",
      "Outbound sourcing agent that finds and personally messages passive candidates on LinkedIn and GitHub.",
      "Conversational pre-screening bot that does intake interviews 24/7.",
      "Auto-scheduling across interviewer calendars with timezone smarts and rescheduling logic.",
    ],
    deliverables: [
      "Candidate scoring + ranking pipeline",
      "Passive sourcing agent with personalized outreach",
      "Pre-screen conversational interviewer",
      "Interview scheduling + feedback collection automation",
    ],
    tech: ["Greenhouse", "Lever", "LinkedIn", "Calendly", "Claude", "Whisper"],
    icon: Users,
    accent: "brand",
  },
  {
    slug: "knowledge-management-rag",
    title: "Internal Knowledge Copilots",
    tagline: "Turn your tribal knowledge into an instant, searchable company brain.",
    problem:
      "Your best answers are locked inside Slack threads, Notion pages, PDFs, and one senior employee's head. New hires ramp slowly and the same questions get re-asked every week.",
    solution: [
      "Unified retrieval over Notion, Confluence, Google Drive, Slack, GitHub, and your wiki of choice.",
      "Slack and Teams copilots that answer with citations \u2014 not just summaries you can't verify.",
      "Permission-aware access so finance docs stay with finance.",
      "Content gap detection \u2014 we tell you which questions your docs can't answer yet.",
    ],
    deliverables: [
      "Unified knowledge index across all your tools",
      "Slack / Teams copilot with citation-linked answers",
      "Role-based access controls + audit logging",
      "Quarterly docs-gap report",
    ],
    tech: ["LangChain", "Pinecone", "Notion API", "Slack", "Claude", "Supabase"],
    icon: BookOpen,
    accent: "accent",
  },
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy & Consulting",
    tagline: "From shiny-object overwhelm to a roadmap your CFO signs off on.",
    problem:
      "Every vendor pitches AI. Your team isn't sure what to build, what to buy, or where the ROI actually compounds. Decisions get deferred.",
    solution: [
      "AI opportunity audit across your top revenue and cost centers.",
      "Prioritized roadmap with effort, cost, risk, and expected payback per initiative.",
      "Build vs. buy vs. partner recommendations with vendor shortlists.",
      "Org enablement: training, governance, prompt libraries, and review processes.",
    ],
    deliverables: [
      "AI maturity scorecard",
      "12-month phased roadmap",
      "Build/buy matrix with vendor evaluations",
      "Internal enablement playbook",
    ],
    tech: ["Frameworks", "Workshops", "Benchmarks", "Vendor RFPs"],
    icon: Compass,
    accent: "mixed",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
