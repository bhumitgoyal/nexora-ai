export type SectorService = {
  name: string;
  tagline: string;
  how: string;
};

export type Sector = {
  id: string;
  label: string;
  description: string;
  services: SectorService[];
};

export const sectors: Sector[] = [
  {
    id: "marketing",
    label: "Marketing Agencies",
    description:
      "Custom AI tools that eliminate the operational grind so your team ships better work, faster — and takes on more clients without burning out.",
    services: [
      {
        name: "Unified AI Reporting Engine",
        tagline: "One automated report. Every channel. Zero manual pulling.",
        how: "Connects to Google Ads, Meta, HubSpot, GA4, and your other ad platforms via API. On a schedule you define, it pulls the latest performance data, runs it through a custom calculation layer (ROAS, CAC, attribution), formats everything into a branded report, and emails it to your client — automatically. Anomalies like a sudden CTR drop or budget spike are flagged in plain English before your client notices.",
      },
      {
        name: "AI SEO Engine",
        tagline: "Keyword gaps found, content created, rankings compounded — on autopilot.",
        how: "Continuously mines keyword clusters, search intent gaps, and competitor content using live data from DataForSEO and Ahrefs. Generates optimized content briefs and, where approved, programmatic pages from your content templates. Monitors rank changes weekly and triggers AI rewrites for pages losing position — turning SEO from a sprint into a compounding growth loop.",
      },
      {
        name: "AI Ad Campaign Optimizer",
        tagline: "Real-time budget reallocation and creative refresh — without the manual babysitting.",
        how: "Monitors campaign performance every few hours. When a creative hits fatigue thresholds (declining CTR, rising CPM), it generates replacement ad copy and image briefs for review. Auto-reallocates budget across ad sets toward the current top performers. Sends a daily Slack summary so your team always knows what changed and why.",
      },
      {
        name: "AI Onboarding Agent",
        tagline: "New client intake automated from first email to structured brief.",
        how: "Triggers on a new contract signed (or a Calendly booking). Sends a structured intake form, collects brand assets, and guides the client through a short async Q&A. Assembles everything into a structured onboarding doc and drops it in your project management tool. Your team walks into kickoff already fully briefed — no back-and-forth email chains.",
      },
      {
        name: "Client Outreach Automation",
        tagline: "Find and reach clients with personalized messages automatically — without pressing a single button.",
        how: "Identifies your ideal client profile from LinkedIn, company databases, and intent data. Builds a personalized outreach sequence — email, LinkedIn DM, or both — and sends it automatically. Tracks opens, replies, and conversions. Integrates with your CRM so every prospect is followed up at the right time with the right message. No manual prospecting required.",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "AI automation for Shopify stores, DTC brands, and Amazon sellers — built to compound revenue, cut manual ops, and scale efficiently without scaling headcount.",
    services: [
      {
        name: "Workflow Automation",
        tagline: "Build custom AI workflows that complete repetitive work for you — without manual intervention.",
        how: "Maps your exact order-to-fulfillment workflow and automates every manual step — from order confirmation emails and CRM updates to inventory alerts and customer follow-ups. Connects to Shopify, WooCommerce, Amazon, or your custom stack. New orders trigger the full sequence automatically. Your team handles exceptions only. Result: hours saved daily, zero dropped balls.",
      },
      {
        name: "Cart Recovery Automation",
        tagline: "Don't let visitors forget what they were about to buy. Automatically send personalized reminders featuring the exact products they viewed.",
        how: "Tracks abandoned carts and exit intent in real time. Automatically sends a personalized recovery sequence — email, SMS, or push — featuring the exact products the visitor viewed, with dynamic pricing, social proof, and a time-limited incentive if needed. Recovery messages are timed and personalized based on cart value, customer history, and browsing behavior. Integrates with Klaviyo, Omnisend, or your existing ESP.",
      },
      {
        name: "Confirmation Call Automation",
        tagline: "Automated voice calls for order confirmations, delivery updates, and follow-ups.",
        how: "Deploys a voice AI agent that places confirmation calls on your behalf — confirming orders within minutes of purchase, updating customers on delivery status, and following up on high-value or at-risk orders. Fully personalized with customer name, order details, and your brand voice. Escalates to a human agent if the customer wants to speak with someone. Dramatically reduces inbound support volume.",
      },
      {
        name: "Personalized AI Chatbot",
        tagline: "24/7 support that converts browsers into buyers — using your product catalog and brand tone.",
        how: "Trained on your product catalog, FAQs, return policy, and past support conversations. Answers customer questions instantly, recommends products based on browsing behavior and purchase history, and handles routine support tickets without a human. Integrates with Shopify, Gorgias, or your existing helpdesk. Escalation to human agents happens seamlessly when needed.",
      },
      {
        name: "Lead Generation System",
        tagline: "Automated lead capture, qualification, and CRM enrichment — conversion-focused from day one.",
        how: "Captures leads from your website, social channels, and ad campaigns and routes them through an automated qualification flow. Enriches each lead with company data, intent signals, and behavioral context. High-intent leads are immediately notified to your sales team with a full brief — lower-intent leads enter an automated nurture sequence. Every lead is followed up. None slip through.",
      },
      {
        name: "Instagram Comment Automation",
        tagline: "Reply instantly to Instagram comments that would otherwise go unnoticed, using your brand's unique tone of voice.",
        how: "Monitors every comment on your Instagram posts and reels in real time. Automatically drafts and posts brand-voice replies — answering product questions, handling complaints, and engaging positively with your audience — within seconds of the comment landing. You set the tone, keywords to escalate, and topics to avoid. Every interaction is logged for your team to review. Converts passive engagement into active customer relationships without lifting a finger.",
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    description:
      "Problem-specific AI automation built for the production floor — not generic tools bolted onto factory ops.",
    services: [
      {
        name: "AI Inventory Reconciliation Agent",
        tagline: "POs, GRNs, and stock counts cross-referenced in real time — no spreadsheet required.",
        how: "Connects to your ERP or inventory system and pulls purchase orders, goods-received notes, and current stock levels on a set schedule. Automatically cross-references all three, calculates discrepancies, and generates a daily reconciliation report. Shortfalls trigger automated reorder requests to suppliers. Exceptions that require human review are escalated with full context — not a raw data dump.",
      },
      {
        name: "AI SOP / Internal Knowledge Copilot",
        tagline: "All your SOPs, safety manuals, and training docs — instantly searchable by your team.",
        how: "Indexes your standard operating procedures, safety docs, maintenance manuals, and quality guidelines into a retrieval-augmented knowledge base. Workers ask questions in plain language — 'what's the torque spec for Line 3 press?' — and get accurate, cited answers in seconds. New docs are automatically ingested. Gaps in coverage are surfaced in a monthly report.",
      },
      {
        name: "Production & Quality Reports",
        tagline: "Automated shift reports, yield metrics, and defect summaries — delivered without manual effort.",
        how: "Pulls production line data from your MES, IoT sensors, or manual entry forms. Calculates throughput, yield rate, defect rate, and downtime KPIs automatically. Formats them into clean shift and daily reports and distributes to relevant managers at the end of each shift. Trend anomalies are flagged automatically.",
      },
      {
        name: "Maintenance Scheduling",
        tagline: "Predict service needs before breakdowns happen. Never miss a maintenance window.",
        how: "Ingests equipment usage logs, past maintenance records, and manufacturer service intervals. Uses historical failure patterns to predict when each asset is likely to need servicing. Generates a forward-looking maintenance calendar, assigns the right technician based on skills and availability, and sends automated alerts before the window is missed.",
      },
      {
        name: "Vendor Communication Logs",
        tagline: "Every supplier interaction tracked, summarized, and filed — automatically.",
        how: "Monitors your email inbox and messaging channels for supplier communications. Extracts commitments, delivery promises, pricing agreements, and action items. Structures them into a per-vendor log in your CRM or shared workspace. Surfaces overdue responses and broken commitments with daily alerts — so nothing slips through the cracks when you're running hot.",
      },
    ],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    description:
      "Custom AI systems that cut food waste, fill covers, and keep operations running — so you can focus on the food.",
    services: [
      {
        name: "AI Marketing Automation",
        tagline: "Targeted promotions that fill quiet covers — sent automatically, without manual effort.",
        how: "Connects to your POS and reservation system to identify slow periods, seasonal patterns, and guest segments. Automatically generates and sends personalized promotions — 'your favourite table is free Thursday evening' — to the right guests via email or SMS. Tracks which campaigns drive reservations and iterates the messaging based on what converts.",
      },
      {
        name: "Reconciliation Agent",
        tagline: "POS, payment gateways, and delivery platforms reconciled daily — discrepancies surfaced instantly.",
        how: "Pulls end-of-day data from your POS, Stripe/Square, and third-party delivery platforms (Uber Eats, Zomato, Swiggy). Matches revenue records across all three, calculates net takings, and flags any discrepancies — wrong commission rates, missing settlements, void errors. Delivers a clean daily reconciliation report to your manager before they start the next shift.",
      },
      {
        name: "Review & Feedback Mining Agent",
        tagline: "Every review across every platform, monitored and summarized — with draft responses ready.",
        how: "Monitors Google, Yelp, Zomato, TripAdvisor, and your internal feedback forms in real time. Categorizes sentiment, extracts recurring themes (slow service on Friday evenings, a specific dish consistently praised), and surfaces a weekly digest. For each new review, it drafts a manager response that matches your brand tone — one click to send, full control over the final words.",
      },
      {
        name: "AI Staff Scheduling Agent",
        tagline: "Optimal shift schedules built from footfall data, bookings, and local events.",
        how: "Analyzes historical cover data, current reservations, local events calendar, and seasonal patterns to predict each shift's demand. Generates a staffing schedule that matches predicted footfall — minimizing labor cost during quiet periods and ensuring you're never understaffed on a busy night. Handles shift swap requests and notifies affected staff automatically.",
      },
      {
        name: "Demand Forecasting Model",
        tagline: "Predict daily covers and top dishes — reduce food waste, prep smarter.",
        how: "Uses your historical sales data, reservation patterns, weather forecasts, and local events to predict next-day and next-week demand at the dish level. Your kitchen gets a prep guide each morning — exactly how much of each ingredient to prep and which dishes to feature. Continuously retrains on actual sales to improve accuracy week on week.",
      },
      {
        name: "Reservation & Table Optimization Agent",
        tagline: "Maximum covers, minimum no-shows — without a reservations manager.",
        how: "Consolidates reservations from all your booking platforms (OpenTable, Resy, direct bookings) into a single intelligent layer. Assigns tables dynamically to maximize cover capacity. Sends automated reminders at 48h and 2h before to cut no-shows. Waitlist management and walk-in integration included.",
      },
    ],
  },
];
