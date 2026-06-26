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
      { metric: "$184k", label: "annual ops savings in year one" },
    ],
    tech: ["Vapi", "Twilio", "ElevenLabs", "GPT-4o", "Google Sheets API", "n8n"],
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
      "Agency and SaaS clients were paying $2–4 per verified B2B lead and still getting 18% bounce rates. The cost of pipeline was eating their unit economics alive.",
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
      { metric: "$0.11", label: "average cost per verified lead" },
      { metric: "2.4%", label: "bounce rate across 480k+ verified emails" },
      { metric: "7×", label: "pipeline efficiency vs. previous vendors" },
    ],
    tech: ["Apify", "Apollo", "Clearbit", "NeverBounce", "ZeroBounce", "OpenAI", "Google Sheets"],
  },
  {
    slug: "ai-marketing-campaign-orchestrator",
    client: "Multi-tenant",
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
    slug: "meridian-realty-inbound-qualifier",
    client: "Meridian Realty",
    industry: "Real Estate",
    title: "An AI SDR that qualifies every inbound lead in 90 seconds and books the showing while interest is hot.",
    summary:
      "A voice + chat hybrid that responds to inbound property inquiries the moment they land, qualifies budget and timeline, and books site visits directly into agent calendars.",
    duration: "6 weeks",
    year: "2026",
    gradient: "from-cyan-500/40 via-violet-500/20 to-fuchsia-500/30",
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
      { metric: "₹2.4 Cr", label: "additional GMV in the first quarter (~$290k)" },
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
    challenge:
      "Northwind's ops team handled 4,000+ shipments a week across 17 jurisdictions. New hires took 4 months to ramp, and routing mistakes cost an average of $11k per incident.",
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
      { metric: "+$420k", label: "ARR unlocked from retainer expansions" },
    ],
    tech: ["Claude", "GPT-4o", "Notion", "Webflow", "Descript", "n8n"],
  },
  {
    slug: "signature-global-tenant-ops",
    client: "Signature Global",
    industry: "Real Estate",
    title: "Full-stack real estate automation that eliminated manual ops across 1,200 units and recovered crores in lease revenue.",
    summary:
      "A complete AI operations layer for a large residential developer covering inbound lead nurturing, tenant communication, lease renewals, maintenance routing, and payment reminders. Built to run without a dedicated ops team.",
    duration: "10 weeks",
    year: "2026",
    gradient: "from-teal-500/40 via-cyan-500/20 to-violet-500/30",
    challenge:
      "Signature Global managed 1,200+ residential units across 6 projects with a three-person property team. Inbound buyer leads went cold within hours due to slow follow-up, renewal windows were missed because tracking was manual, WhatsApp messages from tenants piled up unanswered, and maintenance tickets regularly fell through the cracks.",
    approach: [
      "Built an AI lead response layer that replied to every inbound inquiry on WhatsApp, the website, and Instagram within 60 seconds and qualified buyers by budget and timeline.",
      "Mapped every tenant lifecycle stage (onboarding, maintenance, renewals, payment reminders, move-out) into automated WhatsApp sequences.",
      "Designed a lease renewal engine that triggered personalized offers at 90, 60, and 30 days before expiry with auto e-sign on acceptance.",
      "Wired a vendor dispatch system that triaged maintenance requests by severity, assigned from an approved vendor list, and sent tenants live status updates at every stage.",
    ],
    solution: [
      "AI lead agent responding to buyer inquiries 24/7 across WhatsApp, website chat, and Instagram, booking site visits directly into agent calendars.",
      "Automated tenant communication handling all inbound queries, payment reminders, and maintenance updates without manual replies.",
      "Lease renewal sequences with e-sign integration triggering 90 days before expiry, reducing vacancy windows from 90 days to under 30.",
      "Maintenance routing system assigning vendors, tracking completion, and keeping tenants informed from ticket to resolution.",
      "Weekly ops digest for the property manager showing open tickets, upcoming renewals, payment status, and flagged escalations.",
    ],
    results: [
      { metric: "52%", label: "reduction in vacancy turnaround time" },
      { metric: "89%", label: "of tenant queries resolved without human involvement" },
      { metric: "₹1.1 Cr", label: "in recovered lease revenue in Q1 (~$130k)" },
    ],
    tech: ["WhatsApp Cloud API", "n8n", "Supabase", "Claude", "Cal.com", "Google Sheets"],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const allIndustries = Array.from(
  new Set(caseStudies.map((c) => c.industry)),
);
