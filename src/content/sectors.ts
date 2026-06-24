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
      "Custom AI tools that eliminate the operational grind so your team ships better work, faster and takes on more clients without burning out.",
    services: [
      {
        name: "Unified AI Reporting Engine",
        tagline: "One automated report. Every channel. Zero manual pulling.",
        how: "Connects to Google Ads, Meta, HubSpot, GA4, and your other ad platforms via API. On a schedule you define, it pulls the latest performance data, runs it through a custom calculation layer (ROAS, CAC, attribution), formats everything into a branded report, and emails it to your client automatically. Anomalies like a sudden CTR drop or budget spike are flagged in plain English before your client notices.",
      },
      {
        name: "AI SEO Engine",
        tagline: "Keyword gaps found, content created, rankings compounded on autopilot.",
        how: "Continuously mines keyword clusters, search intent gaps, and competitor content using live data from DataForSEO and Ahrefs. Generates optimized content briefs and, where approved, programmatic pages from your content templates. Monitors rank changes weekly and triggers AI rewrites for pages losing position turning SEO from a sprint into a compounding growth loop.",
      },
      {
        name: "AI Ad Campaign Optimizer",
        tagline: "Real-time budget reallocation and creative refresh without the manual babysitting.",
        how: "Monitors campaign performance every few hours. When a creative hits fatigue thresholds (declining CTR, rising CPM), it generates replacement ad copy and image briefs for review. Auto-reallocates budget across ad sets toward the current top performers. Sends a daily Slack summary so your team always knows what changed and why.",
      },
      {
        name: "AI Onboarding Agent",
        tagline: "New client intake automated from first email to structured brief.",
        how: "Triggers on a new contract signed (or a Calendly booking). Sends a structured intake form, collects brand assets, and guides the client through a short async Q&A. Assembles everything into a structured onboarding doc and drops it in your project management tool. Your team walks into kickoff already fully briefed no back-and-forth email chains.",
      },
      {
        name: "Client Outreach Automation",
        tagline: "Find and reach clients with personalized messages automatically without pressing a single button.",
        how: "Identifies your ideal client profile from LinkedIn, company databases, and intent data. Builds a personalized outreach sequence email, LinkedIn DM, or both and sends it automatically. Tracks opens, replies, and conversions. Integrates with your CRM so every prospect is followed up at the right time with the right message. No manual prospecting required.",
      },
      {
        name: "AI Content Engine",
        tagline: "Turn one brief into a full campaign across every format without a single copy-paste.",
        how: "Takes your campaign brief and brand guidelines, then generates channel-specific copy for email, LinkedIn, Instagram, Google Ads, and WhatsApp in your client's voice. Repurposes long-form content into short-form cuts, carousel scripts, and ad variants automatically. Editors review and approve from a single dashboard. Ships 10x the output with the same team size.",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    description:
      "AI automation for Shopify stores, DTC brands, and Amazon sellers built to compound revenue, cut manual ops, and scale efficiently without scaling headcount.",
    services: [
      {
        name: "Workflow Automation",
        tagline: "Build custom AI workflows that complete repetitive work for you without manual intervention.",
        how: "Maps your exact order-to-fulfillment workflow and automates every manual step from order confirmation emails and CRM updates to inventory alerts and customer follow-ups. Connects to Shopify, WooCommerce, Amazon, or your custom stack. New orders trigger the full sequence automatically. Your team handles exceptions only. Result: hours saved daily, zero dropped balls.",
      },
      {
        name: "Cart Recovery Automation",
        tagline: "Don't let visitors forget what they were about to buy. Automatically send personalized reminders featuring the exact products they viewed.",
        how: "Tracks abandoned carts and exit intent in real time. Automatically sends a personalized recovery sequence email, SMS, or push featuring the exact products the visitor viewed, with dynamic pricing, social proof, and a time-limited incentive if needed. Recovery messages are timed and personalized based on cart value, customer history, and browsing behavior. Integrates with Klaviyo, Omnisend, or your existing ESP.",
      },
      {
        name: "Confirmation Call Automation",
        tagline: "Automated voice calls for order confirmations, delivery updates, and follow-ups.",
        how: "Deploys a voice AI agent that places confirmation calls on your behalf confirming orders within minutes of purchase, updating customers on delivery status, and following up on high-value or at-risk orders. Fully personalized with customer name, order details, and your brand voice. Escalates to a human agent if the customer wants to speak with someone. Dramatically reduces inbound support volume.",
      },
      {
        name: "Personalized AI Chatbot",
        tagline: "24/7 support that converts browsers into buyers using your product catalog and brand tone.",
        how: "Trained on your product catalog, FAQs, return policy, and past support conversations. Answers customer questions instantly, recommends products based on browsing behavior and purchase history, and handles routine support tickets without a human. Integrates with Shopify, Gorgias, or your existing helpdesk. Escalation to human agents happens seamlessly when needed.",
      },
      {
        name: "Lead Generation System",
        tagline: "Automated lead capture, qualification, and CRM enrichment conversion-focused from day one.",
        how: "Captures leads from your website, social channels, and ad campaigns and routes them through an automated qualification flow. Enriches each lead with company data, intent signals, and behavioral context. High-intent leads are immediately notified to your sales team with a full brief lower-intent leads enter an automated nurture sequence. Every lead is followed up. None slip through.",
      },
      {
        name: "Instagram Comment Automation",
        tagline: "Reply instantly to Instagram comments that would otherwise go unnoticed, using your brand's unique tone of voice.",
        how: "Monitors every comment on your Instagram posts and reels in real time. Automatically drafts and posts brand-voice replies answering product questions, handling complaints, and engaging positively with your audience within seconds of the comment landing. You set the tone, keywords to escalate, and topics to avoid. Every interaction is logged for your team to review. Converts passive engagement into active customer relationships without lifting a finger.",
      },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    description:
      "AI automation for property developers, agents, and managers built to close deals faster, reduce vacancy gaps, and handle every tenant touchpoint without manual effort.",
    services: [
      {
        name: "AI Lead Nurturing Agent",
        tagline: "Every inbound inquiry followed up instantly across WhatsApp, email, and voice.",
        how: "Responds to every new property inquiry within 60 seconds across WhatsApp, your website, and Instagram DMs. Qualifies the lead by budget, location preference, and timeline. Books site visits directly into agent calendars. Hot leads are immediately escalated to your team with a full conversation brief. Cold leads enter an automated drip sequence. Not a single inquiry slips through.",
      },
      {
        name: "Listing Description Generator",
        tagline: "Compelling, SEO-optimized property listings written in seconds from basic inputs.",
        how: "Takes a simple set of property inputs, bedrooms, location, amenities, price, and generates a full listing description in your brand voice optimized for portals, your website, and social media. Variants for different platforms are created in one run. Saves 30 to 45 minutes per listing and ensures every property goes live faster.",
      },
      {
        name: "Lease Renewal and Reminder Automation",
        tagline: "Catch renewals 90 days out. Reduce vacancy gaps without manual tracking.",
        how: "Monitors all lease expiry dates and automatically sends personalized renewal offers at 90, 60, and 30 days before expiry. If there is no response, it follows up via WhatsApp and voice call. Accepted renewals trigger the e-sign workflow automatically. Declined renewals trigger the re-listing sequence. Vacancy gaps close faster and your team never chases a date again.",
      },
      {
        name: "Tenant Communication Bot",
        tagline: "24/7 inbound handling for maintenance, payments, and queries without a single manual reply.",
        how: "Handles all inbound tenant messages on WhatsApp and your portal. Answers common questions on lease terms, payment schedules, and building rules instantly. Logs and routes maintenance requests to the right vendor with severity-based priority. Sends status updates to tenants automatically at each stage. Your team only steps in for escalations that genuinely need a human.",
      },
      {
        name: "Maintenance Request Routing System",
        tagline: "Every ticket triaged, assigned, and tracked from submission to completion automatically.",
        how: "Tenants submit requests via WhatsApp or your portal. The system classifies severity, assigns the right vendor from your approved list, confirms the job, and sends automated status updates to the tenant at each stage. Overdue jobs are flagged for manager review. A weekly digest gives your team full visibility across all open and closed tickets with zero manual coordination.",
      },
      {
        name: "Monthly Property Performance Reports",
        tagline: "Occupancy, revenue, renewals, and maintenance costs summarized automatically every month.",
        how: "Pulls data from your property management system, Google Sheets, or CRM at the end of each month. Calculates occupancy rate, total rent collected, overdue payments, maintenance spend, upcoming renewals, and vacancy count per project. Formats everything into a clean report and emails it to the owner or investor group automatically. No manual pulling, no missed numbers.",
      },
    ],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    description:
      "Custom AI systems that cut food waste, fill covers, and keep operations running so you can focus on the food.",
    services: [
      {
        name: "AI Marketing Automation",
        tagline: "Targeted promotions that fill quiet covers sent automatically, without manual effort.",
        how: "Connects to your POS and reservation system to identify slow periods, seasonal patterns, and guest segments. Automatically generates and sends personalized promotions 'your favourite table is free Thursday evening' to the right guests via email or SMS. Tracks which campaigns drive reservations and iterates the messaging based on what converts.",
      },
      {
        name: "Reconciliation Agent",
        tagline: "POS, payment gateways, and delivery platforms reconciled daily discrepancies surfaced instantly.",
        how: "Pulls end-of-day data from your POS, Stripe/Square, and third-party delivery platforms (Uber Eats, Zomato, Swiggy). Matches revenue records across all three, calculates net takings, and flags any discrepancies wrong commission rates, missing settlements, void errors. Delivers a clean daily reconciliation report to your manager before they start the next shift.",
      },
      {
        name: "Review & Feedback Mining Agent",
        tagline: "Every review across every platform, monitored and summarized with draft responses ready.",
        how: "Monitors Google, Yelp, Zomato, TripAdvisor, and your internal feedback forms in real time. Categorizes sentiment, extracts recurring themes (slow service on Friday evenings, a specific dish consistently praised), and surfaces a weekly digest. For each new review, it drafts a manager response that matches your brand tone one click to send, full control over the final words.",
      },
      {
        name: "AI Staff Scheduling Agent",
        tagline: "Optimal shift schedules built from footfall data, bookings, and local events.",
        how: "Analyzes historical cover data, current reservations, local events calendar, and seasonal patterns to predict each shift's demand. Generates a staffing schedule that matches predicted footfall minimizing labor cost during quiet periods and ensuring you're never understaffed on a busy night. Handles shift swap requests and notifies affected staff automatically.",
      },
      {
        name: "Demand Forecasting Model",
        tagline: "Predict daily covers and top dishes reduce food waste, prep smarter.",
        how: "Uses your historical sales data, reservation patterns, weather forecasts, and local events to predict next-day and next-week demand at the dish level. Your kitchen gets a prep guide each morning exactly how much of each ingredient to prep and which dishes to feature. Continuously retrains on actual sales to improve accuracy week on week.",
      },
      {
        name: "Reservation & Table Optimization Agent",
        tagline: "Maximum covers, minimum no-shows without a reservations manager.",
        how: "Consolidates reservations from all your booking platforms (OpenTable, Resy, direct bookings) into a single intelligent layer. Assigns tables dynamically to maximize cover capacity. Sends automated reminders at 48h and 2h before to cut no-shows. Waitlist management and walk-in integration included.",
      },
    ],
  },
];
