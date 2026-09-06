export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  duration: string;
  year: string;
  challenge: string;
  approach: string[];
  solution: string[];
  results: { metric: string; label: string }[];
  tech: string[];
  gradient: string;
  image?: string;
  featured?: boolean;
  /** Passcode-gated live demo running on sample data (one-click unlock link). */
  demoUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "southwest-gases-voice-concierge",
    client: "Southwest Gases",
    industry: "Energy & Utilities",
    title: "An always-on voice concierge that handles every inbound call and books outbound pitches in its spare time.",
    summary:
      "A natural-language voice agent that fields every customer call, navigates account-specific data, and runs outbound campaigns for the marketing team without ever sounding like a bot.",
    duration: "9 weeks",
    year: "2025",
    featured: true,
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-cyan-500/30",
    image: "/proj-southwest-voice.jpeg",
    challenge:
      "Southwest Gases was losing 22% of inbound calls to abandonment during peak hours and burning ops budget on after-hours staffing. The marketing team also had a backlog of warm leads that nobody had time to call.",
    approach: [
      "Mapped every inbound call type billing, outages, new connections, complaints into a tiered intent model.",
      "Indexed customer records, plan documents, and SOPs into a secure retrieval layer the agent could query at sub-second latency.",
      "Designed a brand-aligned voice persona with regional accent calibration and explicit fallbacks for sensitive intents (medical hardship, payment disputes).",
      "Wired a parallel outbound mode for the marketing team same brain, different objective, full opt-out compliance.",
    ],
    solution: [
      "24/7 inbound voice agent answering on the first ring across all 18 service regions.",
      "Per-call transcripts, recordings, sentiment, and outcomes synced to Google Sheets and routed by department.",
      "Automatic email digest to the ops lead every morning with flagged escalations.",
      "Outbound dialer that pitches new gas plans to qualified leads, books site surveys, and logs every objection.",
    ],
    results: [
      { metric: "97%", label: "of inbound calls resolved without human handoff" },
      { metric: "31%", label: "lift in qualified outbound conversions" },
      { metric: "6,200+", label: "staff hours automated per year" },
    ],
    tech: ["Vapi", "Twilio", "ElevenLabs", "GPT-4o", "Google Sheets API", "n8n"],
  },
  {
    slug: "southwest-gases-erp",
    client: "Southwest Gases",
    industry: "Energy & Utilities",
    title: "A full order-to-cash ERP that runs the whole gas business, from the delivery board to the QuickBooks invoice.",
    summary:
      "A custom operations system for a packaged and bulk gas distributor: order entry, a drag-and-drop delivery and pickup board, cylinder rent ledgers, and invoices that generate on delivery and sync straight to QuickBooks, with role-based views that keep every price off the drivers' screens.",
    duration: "16 weeks",
    year: "2026",
    featured: true,
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-cyan-500/30",
    image: "/proj-southwest-voice.jpeg",
    demoUrl: "https://swg-erp-demo-629748840531.us-central1.run.app/?k=swg2026",
    challenge:
      "The business ran on spreadsheets, paper bills of lading, and manual QuickBooks entry. Deliveries were scheduled by phone, cylinder rents were tracked by hand, and every invoice was retyped, so numbers drifted, month-end dragged on for days, and drivers routinely saw pricing they were never meant to.",
    approach: [
      "Mapped the real order-to-cash flow with the team, from a phoned-in order to a paid invoice, and turned it into one delivery-first workflow.",
      "Built role-based access from the ground up so office staff see everything and drivers see documents with no price, rate, or balance anywhere, enforced on the server rather than hidden in the UI.",
      "Modelled cylinder rents as an append-only ledger with derived balances, so a count is never typed twice and history can never be edited away.",
      "Wired real QuickBooks Online sync with a working fallback, so the system runs end to end in a demo and flips to live accounting with a single connection.",
    ],
    solution: [
      "Order entry with type-ahead customers, inline product creation, and below-list price overrides that log themselves.",
      "A day and week delivery board with cross-day drag-and-drop, recurring deliveries, drawn signature capture, and auto-generated BOL and shipping-paper PDFs.",
      "Invoices that build themselves on delivery, carry hazmat and tax correctly, email through the office, and push to QuickBooks under the same number both systems agree on.",
      "A dashboard of live KPIs, a FIFO cylinder-aging alert, and nightly cron jobs that pull payment status and reconcile anything that failed to sync.",
    ],
    results: [
      { metric: "Days → min", label: "month-end invoicing and reconciliation" },
      { metric: "0", label: "prices, rates, or balances visible to any driver" },
      { metric: "100%", label: "of invoices reconciled against QuickBooks automatically" },
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "QuickBooks Online", "Firebase Auth", "SendGrid", "Google Cloud"],
  },
  {
    slug: "southwest-gases-delivery-schedule",
    client: "Southwest Gases",
    industry: "Energy & Utilities",
    title: "A shared delivery board the whole team runs on, wired to an AI connector that answers 'is it scheduled?' without opening the app.",
    summary:
      "A live delivery schedule the office and drivers share in real time, plus a read-only AI connector so anyone can ask ChatGPT or Claude whether an order is on the board or a delivery is done, and get the answer straight from the schedule without touching the app.",
    duration: "5 weeks",
    year: "2026",
    gradient: "from-fuchsia-500/25 via-violet-500/20 to-cyan-500/20",
    image: "/proj-southwest-voice.jpeg",
    demoUrl: "https://swg-delivery-demo-629748840531.us-central1.run.app/?k=swg2026",
    challenge:
      "Before every route, the office and the drivers burned the morning on phone calls: is this order on today's board, did that delivery actually go out, what changed since yesterday. The answers lived in one person's head and a paper sheet, so nothing was auditable and nobody could check without interrupting someone.",
    approach: [
      "Built a single shared board on a real-time database, so a change one person makes shows up instantly for everyone, with no login to slow the team down.",
      "Kept the whole thing deliberately lightweight, so drivers could open it on a phone and the office could run the day from one screen.",
      "Layered a read-only AI connector on top that exposes just two questions, whether an order has been entered and whether a delivery has been completed, so the schedule can answer for itself.",
      "Locked the connector to read-only behind a shared passcode, so an assistant can look but nothing outside the app can ever change a delivery.",
    ],
    solution: [
      "A real-time delivery board shared across the office and drivers, with full status and a change history behind every stop.",
      "A hosted ChatGPT and Claude connector that answers scheduling questions in plain language, pulling live from the same board.",
      "Partial, case-insensitive customer search, so a half-remembered name still finds the delivery.",
      "One central portal for routes, live driver status, and weekly performance summaries that generate on their own.",
    ],
    results: [
      { metric: "0", label: "daily ops coordination calls needed" },
      { metric: "100%", label: "route visibility in real time" },
      { metric: "24/7", label: "schedule answers straight from ChatGPT or Claude" },
    ],
    tech: ["React", "Vite", "Firebase Realtime Database", "Vercel", "Model Context Protocol", "ChatGPT", "Claude"],
  },
  {
    slug: "gohappy-club-member-assistant",
    client: "GoHappy Club",
    industry: "Senior Wellness · D2C",
    title: "An omnichannel WhatsApp + in-app assistant that knows every member by name and when to escalate.",
    summary:
      "A multilingual conversational AI for a senior-citizen membership club, delivering tailored answers across WhatsApp and in-app, with memory, tone-matching, and clean escalation to humans for finance and medical questions.",
    duration: "12 weeks",
    year: "2025",
    featured: true,
    gradient: "from-cyan-500/40 via-teal-500/20 to-violet-500/30",
    image: "/proj-gohappy.jpeg",
    challenge:
      "GoHappy's members range from 55 to 92, message in 6 different languages, and ask everything from event RSVPs to insurance claim status. The support team was overwhelmed and response times were creeping past 8 hours.",
    approach: [
      "Built a unified brain over the club's CRM, event calendar, knowledge base, and member profiles.",
      "Per-member long-term memory so the bot remembered last week's questions, preferences, and family details.",
      "Tone-detection layer that mirrored each member's pace, language, and formality.",
      "Strict escalation rules: any finance, insurance, or medical query routes to a named human within 2 minutes.",
    ],
    solution: [
      "Live across WhatsApp Business and the in-app inbox with a shared conversation history.",
      "Replies in Hindi, English, Marathi, Tamil, Bengali, and Telugu with code-switching support.",
      "Voice-note transcription so members can speak instead of type.",
      "Weekly retraining loop using flagged conversations and CSAT signals.",
    ],
    results: [
      { metric: "92%", label: "of first-touch queries resolved by AI" },
      { metric: "4.8/5", label: "member CSAT, up from 3.9" },
      { metric: "<45s", label: "median response time, 24/7" },
    ],
    tech: ["WhatsApp Cloud API", "Claude", "Pinecone", "Supabase", "LangChain", "Whisper"],
  },
  {
    slug: "linkedin-lead-intelligence-engine",
    client: "Multi-tenant",
    industry: "B2B SaaS & Agencies",
    title: "A LinkedIn lead-intelligence engine that delivers verified, enriched, ready-to-pitch prospects for cents on the dollar.",
    summary:
      "A custom lead-gen system that scrapes targeted LinkedIn audiences, enriches via 6 data sources, cascades email verification across cheap APIs, and outputs personalized openers all in one script tailored per client.",
    duration: "Ongoing",
    year: "2024–2026",
    featured: true,
    gradient: "from-fuchsia-500/40 via-violet-500/20 to-cyan-500/30",
    image: "/proj-multi-client.jpeg",
    challenge:
      "Agency and SaaS clients were paying a significant premium per verified B2B lead and still getting 18% bounce rates. The cost of pipeline was eating their unit economics alive.",
    approach: [
      "Built modular ICP filters per client (industry, headcount, tech stack, funding, hiring signals).",
      "Cascaded enrichment across Apollo, Clearbit, and proprietary scrapers fall through only when needed.",
      "Verified emails through a price-aware waterfall (NeverBounce → ZeroBounce → MailboxValidator) that picked the cheapest API likely to succeed.",
      "Generated 3 personalized opener variants per lead using contextual signals (recent posts, mutual connections, news).",
    ],
    solution: [
      "Per-client tailored script with their ICP baked in.",
      "Daily lead drops to Google Sheets, Airtable, or directly to Instantly/Smartlead.",
      "Real-time cost dashboard showing $/verified-lead per campaign.",
      "Monthly ICP tuning based on which leads actually converted to meetings.",
    ],
    results: [
      { metric: "94%", label: "lower cost per verified lead vs. prior vendors" },
      { metric: "2.4%", label: "bounce rate across 480k+ verified emails" },
      { metric: "7×", label: "pipeline efficiency vs. previous vendors" },
    ],
    tech: ["Apify", "Apollo", "Clearbit", "NeverBounce", "ZeroBounce", "OpenAI", "Google Sheets"],
  },
  {
    slug: "ai-marketing-campaign-orchestrator",
    client: "Marketrz Agency",
    industry: "Marketing Agencies · DTC",
    title: "Campaign orchestrator that cuts setup time by 80% and lifts reply quality across every channel.",
    summary:
      "An AI-powered campaign engine that drafts copy, generates assets, handles replies, and continuously A/B tests across email, LinkedIn, and SMS turning a week of campaign setup into an afternoon.",
    duration: "Ongoing",
    year: "2024–2026",
    gradient: "from-violet-500/40 via-cyan-500/20 to-fuchsia-500/30",
    image: "/proj-marketing.jpeg",
    challenge:
      "Marketing teams were spending 4–5 days per campaign on copy variants, asset cuts, sequence wiring, and reply triage. Quality varied wildly between SDRs and conversion data took weeks to make sense of.",
    approach: [
      "Centralized brand voice, offers, and case studies in a single prompt library.",
      "Auto-generation of channel-specific variants from a single campaign brief.",
      "Reply triage agent that classifies, drafts a reply, and either auto-sends or queues for human review.",
      "Continuous experimentation: every campaign launches with 4–6 variants, winners auto-promote.",
    ],
    solution: [
      "Campaign builder that takes a brief and outputs a sequenced, multi-channel campaign in under an hour.",
      "Reply copilot embedded in Gmail and LinkedIn that drafts contextual responses.",
      "Asset repurposing: one case study → email, LinkedIn post, ad copy, landing page, video script.",
      "Weekly digest with what worked, what didn't, and the next experiment to run.",
    ],
    results: [
      { metric: "80%", label: "reduction in campaign setup time" },
      { metric: "3.1×", label: "lift in positive reply rate" },
      { metric: "12hrs", label: "saved per SDR per week on reply handling" },
    ],
    tech: ["n8n", "Instantly", "Smartlead", "Claude", "GPT-4o", "Webflow"],
  },
  {
    slug: "adfactors-pr-wire-booking",
    client: "Adfactors PR",
    industry: "PR & Communications",
    title: "A single-window wire-booking platform that turns 178 rate cards into a client-ready quote in minutes.",
    summary:
      "An internal platform for PR consultants to browse domestic and international press-release wire rate cards, build a single-window booking request, and generate a client-ready PDF quote, with a backend console where Partnerships edits every rate and catalogue item in real time.",
    duration: "7 weeks",
    year: "2026",
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-cyan-500/30",
    image: "/proj-adfactors.jpeg",
    challenge:
      "Consultants hand-built every quote from dozens of regional rate-card spreadsheets, so quotes were slow, error-prone, and inconsistent between people. Partnerships had no single source of truth for rates, and updating a price meant re-sending files to the whole team.",
    approach: [
      "Sat with the Partnerships and Operations team and turned the 2026 rate cards, 178 line items across domestic and international wires, into one structured catalogue.",
      "Designed a single-window request flow so a consultant picks wires, quantities, and add-ons in one place instead of stitching spreadsheets together.",
      "Built a backend console where Partnerships edits any rate or catalogue item live, so the price a consultant sees is always the current one.",
      "Generated the quote as a branded, client-ready PDF on the spot, matching the format clients already expect.",
    ],
    solution: [
      "One catalogue of every domestic and international wire, searchable and always current.",
      "A single-window builder that assembles a full request and prices it as you go.",
      "Client-ready PDF quotes generated in the browser, with no manual formatting.",
      "A passcode-gated admin console for Partnerships to manage rates and catalogue items without touching code.",
    ],
    results: [
      { metric: "178", label: "wire rate cards unified into one live catalogue" },
      { metric: "Minutes", label: "to build a client-ready PDF quote, down from hours" },
      { metric: "1", label: "source of truth Partnerships edits in real time" },
    ],
    tech: ["Next.js", "React", "Tailwind", "PostgreSQL", "Prisma", "jsPDF", "Google Cloud"],
  },
  {
    slug: "nuvero-outreach-engine",
    client: "Nuvero AI",
    industry: "Sales & Outreach",
    title: "An outreach engine that finds prospects, resolves verified contacts, and drafts every email, with a human approving each send.",
    summary:
      "Nuvero's own end-to-end outreach engine: it discovers leads across sources, dedupes and scores them, resolves verified contacts with provenance, drafts a personalized email for each under strict no-invented-facts rules, holds every send behind a one-click human approval, then paces delivery to protect the sending domain.",
    duration: "Ongoing",
    year: "2025–2026",
    gradient: "from-cyan-500/40 via-teal-500/20 to-violet-500/30",
    image: "/proj-nuvero-outreach.jpeg",
    challenge:
      "The bottleneck in outreach was never writing the email. It was discovery, deduplication, and finding a real contact you could trust, then doing it again every day without burning the domain or emailing the wrong person.",
    approach: [
      "Built a daily pipeline that collects, normalizes, dedupes, filters, and scores leads before a human ever looks at them.",
      "Resolved contacts from multiple sources and attached provenance and a confidence score to every address, so nothing is a guess.",
      "Composed a personalized email per lead under strict no-invented-facts guards, so the model never fabricates a detail to fill a sentence.",
      "Put a human approval gate in front of every send, then drained an auto-send queue that is throttled and capped to keep the domain healthy.",
    ],
    solution: [
      "A one-command daily run that turns raw sources into scored, contactable leads.",
      "An approvals view where each drafted email is read in full with the contact's provenance and confidence before it can go out.",
      "Deliverability-safe sending that is throttled and capped, with suppression and bounce tracking built in.",
      "A server-rendered dashboard for run health, contacts, and a live log of every send.",
    ],
    results: [
      { metric: "~10 min", label: "daily review to run the whole outreach pipeline" },
      { metric: "0", label: "emails sent without a human approving the draft" },
      { metric: "100%", label: "of contacts carry provenance and a confidence score" },
    ],
    tech: ["Python", "OpenAI", "Gmail API", "PostgreSQL", "SSE Dashboard"],
  },
  {
    slug: "meridian-realty-inbound-qualifier",
    client: "Meridian Realty",
    industry: "Real Estate",
    title: "An AI SDR that qualifies every inbound lead in 90 seconds and books the showing while interest is hot.",
    summary:
      "A voice + chat hybrid that responds to inbound property inquiries the moment they land, qualifies budget and timeline, and books site visits directly into agent calendars.",
    duration: "6 weeks",
    year: "2026",
    gradient: "from-cyan-500/40 via-violet-500/20 to-fuchsia-500/30",
    image: "/proj-meridian.jpeg",
    challenge:
      "Meridian was losing 60% of inbound leads to slow response times. By the time an agent called back, the buyer had already toured a competitor's listing.",
    approach: [
      "Instant chat response on website, WhatsApp, and Instagram DMs the moment a lead lands.",
      "Voice agent fallback that calls the lead within 60 seconds if chat goes unanswered.",
      "Property-matching engine that surfaces 3 best-fit listings based on stated needs.",
      "Calendar integration that books the showing without human involvement.",
    ],
    solution: [
      "Multi-channel first response in under 60 seconds, 24/7.",
      "Live property recommendations pulled from the MLS feed in real time.",
      "Agent calendar sync with auto-rescheduling on cancellations.",
      "Post-showing follow-up sequence with offer-pressure messaging.",
    ],
    results: [
      { metric: "4×", label: "increase in showings booked per month" },
      { metric: "58s", label: "median first-response time" },
      { metric: "23%", label: "GMV uplift in the first quarter" },
    ],
    tech: ["Vapi", "WhatsApp Cloud API", "Cal.com", "OpenAI", "Supabase", "n8n"],
  },
  {
    slug: "northwind-logistics-ops-copilot",
    client: "Northwind Logistics",
    industry: "Logistics & Supply Chain",
    title: "An internal ops copilot that turns 800 pages of SOPs into instant, accurate answers in Slack.",
    summary:
      "A retrieval-augmented copilot that ingests SOPs, vendor contracts, and tariff schedules, then answers ops questions in Slack with citations slashing onboarding time and reducing costly routing errors.",
    duration: "8 weeks",
    year: "2025",
    gradient: "from-violet-500/40 via-fuchsia-500/30 to-cyan-500/40",
    image: "/proj-northwind.jpeg",
    challenge:
      "Northwind's ops team handled 4,000+ shipments a week across 17 jurisdictions. New hires took 4 months to ramp, and routing mistakes carried a significant cost per incident.",
    approach: [
      "Ingested SOPs, vendor contracts, tariff documents, and incident postmortems into a vector store.",
      "Built a Slack-native copilot with citation-linked answers and confidence scoring.",
      "Added a 'risk flag' feature for queries involving hazmat, customs, and time-sensitive cargo.",
      "Set up a feedback loop where ops leads upvote/correct answers to retrain weekly.",
    ],
    solution: [
      "Slack copilot answering 500+ ops queries per week with citations.",
      "Risk-flagging on sensitive shipment categories with mandatory human review.",
      "Onboarding 'tour' that walks new hires through the SOP corpus interactively.",
      "Quarterly content audit dashboard for SOP gaps and contradictions.",
    ],
    results: [
      { metric: "62%", label: "faster ramp time for new ops hires" },
      { metric: "78%", label: "drop in routing-related incidents" },
      { metric: "1,800hrs", label: "annual ops time recovered" },
    ],
    tech: ["LangChain", "Pinecone", "Slack API", "GPT-4o", "Supabase", "Temporal"],
  },
  {
    slug: "lumina-studios-content-engine",
    client: "Lumina Studios",
    industry: "Marketing & Media",
    title: "A content engine that 10x'd a creative agency's output without diluting the brand voice.",
    summary:
      "An end-to-end AI content pipeline for a boutique creative agency blog posts, video scripts, ad creative, and social cuts shipped in brand voice, with human editors orchestrating instead of typing.",
    duration: "10 weeks",
    year: "2025",
    gradient: "from-fuchsia-500/40 via-cyan-500/20 to-violet-500/30",
    image: "/proj-lumina.jpeg",
    challenge:
      "Lumina was turning down retainer expansions because their senior writers were maxed out. Hiring more was slow, expensive, and risked diluting the distinctive voice clients paid premiums for.",
    approach: [
      "Reverse-engineered Lumina's voice into a prompt library tone, cadence, signature phrases, and forbidden words.",
      "Built per-client style profiles layered on top of the house voice so each brand still felt unmistakably theirs.",
      "Designed a brief → outline → draft → fact-check → editorial review pipeline with humans only on the high-leverage steps.",
      "Wired a repurposing engine that turned every long-form asset into a LinkedIn carousel, X thread, IG reel script, and newsletter blurb.",
    ],
    solution: [
      "AI-assisted production line shipping 80+ content pieces per week across 14 client brands.",
      "Editor dashboard with review queues, voice-drift alerts, and one-click rewrites.",
      "Auto-repurposing into 6 formats per long-form piece.",
      "Performance attribution tying each asset back to leads, demos, and revenue.",
    ],
    results: [
      { metric: "10×", label: "increase in monthly content output" },
      { metric: "0", label: "drop in client retention or NPS" },
      { metric: "+2.3×", label: "average retainer size after expansion" },
    ],
    tech: ["Claude", "GPT-4o", "Notion", "Webflow", "Descript", "n8n"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const allIndustries = Array.from(
  new Set(caseStudies.map((c) => c.industry)),
);
