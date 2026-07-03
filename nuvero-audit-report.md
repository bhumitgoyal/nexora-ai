# Nuvero AI — Website Audit Report

**Site audited:** http://nuvero.space/
**Audit date:** 26 June 2026
**Scope:** Full site — `/`, `/what-we-offer`, `/services`, `/work`, `/process`, `/about`, `/contact`, `/booklet` plus booklet variants, case-study sub-pages, `/industries`, `sitemap.xml`, `robots.txt`
**Method:** Four parallel specialist audits — (1) Copy & Proofreading, (2) Sales & Conversion (CRO), (3) Trust & Credibility, (4) UX / SEO / Technical — consolidated and de-duplicated into this report.

---

## Table of Contents

1. [Executive Summary & Verdict](#1-executive-summary--verdict)
2. [Important Accuracy Caveat (read before acting)](#2-important-accuracy-caveat-read-before-acting)
3. [P0 — Fix This Week](#3-p0--fix-this-week)
4. [Trust & Credibility](#4-trust--credibility)
5. [Sales & Conversion](#5-sales--conversion)
6. [Copy & Proofreading](#6-copy--proofreading)
7. [UX, SEO & Technical](#7-ux-seo--technical)
8. [Rewritten Hero Section](#8-rewritten-hero-section)
9. [Recommended Site Architecture](#9-recommended-site-architecture)
10. [Sequenced Action Plan](#10-sequenced-action-plan)
11. [Appendix A — Crawl Status](#appendix-a--crawl-status)
12. [Appendix B — All CTAs Found](#appendix-b--all-ctas-found)
13. [Appendix C — Full Proofreading Log](#appendix-c--full-proofreading-log)

---

## 1. Executive Summary & Verdict

**The bones are good. The wrapper is costing you customers.**

Nuvero AI is a custom AI-agent / workflow-automation agency targeting e-commerce brands, marketing agencies, hospitality, real estate, and healthcare. The strategic copy is genuinely strong — the problem-framing, the case-study metrics ($184k saved, ₹2.4 Cr GMV, $0.11/lead, 10× content output), and the five-phase process narrative are sharper than most agency sites.

But that quality is wrapped in a layer of **credibility risk** and **conversion friction** that would make a serious B2B buyer hesitate or bounce. Three problems are actively losing you business right now:

| # | Problem | One-line summary |
|---|---------|------------------|
| 1 | **Trust signals say "solo freelancer," not "agency."** | Gmail address, personal social handles, no legal pages, unverifiable testimonials, broken stat counters. |
| 2 | **The hero and funnel don't sell.** | "You run it, we handle it" means nothing; best proof is buried; no price anchor, no risk reversal. |
| 3 | **The site argues with itself.** | "No jargon" then "KPI-instrumented agentic systems"; three pages answer the same question; an orphaned page; broken booklet links. |

**Overall grade:** Promising content, undermined by execution. Fixing the P0 list (Section 3) moves the site from "promising but risky" to "credible and conversion-ready" — most of it is a few hours of work.

### Credibility Scorecard

| Dimension | Rating |
|-----------|--------|
| Value-proof (case studies, metrics, ROI) | **Weak** — strong numbers, zero external corroboration |
| Social proof (testimonials, reviews, press) | **Weak** — no photos, logos, or verifiable links |
| Team transparency | **Weak** — single founder, personal handles, unnamed "bench" |
| Contact professionalism | **Weak** — Gmail, personal mobile, non-standard TLD |
| Risk / compliance | **Missing** — no privacy policy, ToS, GDPR, or HIPAA |

---

## 2. Important Accuracy Caveat (read before acting)

**The zero stats and the "run-together" text are JavaScript render-state artifacts — not necessarily what a human sees.**

The site is a JS-heavy Next.js app with animated counters and animated/letter-spaced text. Automated crawlers (including this audit) read the page *before* its animations run, so they capture:

- Counters at their `0` starting value → `0+ systems shipped`, `0% client retention rate`
- Animated text mid-state → `customproblemsrequirecustomizedsoftware`, `<60sfollow-up`

**What this means for you:**

- In a modern browser with JS enabled, the counters very likely animate up to real numbers, and the spaced text very likely renders correctly. **Verify in your own browser first.**
- **However**, the no-JS / slow-connection / social-media-scraper / link-preview fallback genuinely *is* `0` and *is* the run-together text. When someone shares your link on LinkedIn/WhatsApp, or loads on a weak connection, that broken state is what they see. **That is a real, fixable problem regardless of the live animation.**

Throughout this report, render-state issues are labeled **[RENDER]** and genuine content issues are labeled **[CONTENT]** so you don't chase ghosts.

---

## 3. P0 — Fix This Week

Highest impact, lowest effort. Do these first.

| # | Fix | Why it matters | Effort |
|---|-----|----------------|--------|
| 1 | **Set non-zero static fallbacks on all stat counters.** Start the count-up animation at ~80% of target so the no-JS state never shows `0`. Same fix on the About-page stats. | Scrapers, link previews, and slow loads currently render "**0% client retention rate**." Flagged by all four audits. | 1 hr |
| 2 | **Replace `nuveroai@gmail.com` with `hello@nuvero.space`** and create a **Nuvero AI company LinkedIn page** separate from @bhumitgoyal. | Gmail is an instant trust-disqualifier for Western SMB buyers. ~$2/month fix, large upside. | 1 hr |
| 3 | **Publish a Privacy Policy + Terms of Service.** Decide on Healthcare: add a HIPAA-readiness line or drop it as a vertical. | No legal pages = fails every procurement/vendor review; illegal under GDPR for EU visitors; Healthcare vertical with zero compliance copy is a liability. | 1 day |
| 4 | **Rewrite the hero** to lead with transformation + a number + audience, not "You run it, we handle it." (See Section 8.) | Every visitor starts here; the current line is meaning-free. | 2 hr |
| 5 | **Fix the booklet links.** Manufacturing and Restaurant booklets both point to `/booklet/view`; several deep links 404. Remove "Booklet" from nav until live. | A broken link in your nav is worse than no link — a dead end for warm prospects. | 2 hr |
| 6 | **Give every page a unique H1 + meta description.** Currently every page uses "You run it, we handle it" as its H1 and **no page has a meta description.** | Biggest single SEO miss on the site; kills organic click-through and per-page relevance. | 3 hr |

---

## 4. Trust & Credibility

> **Buyer's core question:** *Would I hand this company my operational data and my money?* Today, the honest answer for a cautious B2B buyer is "not yet."

### 4.1 Stat counters display literal zeros — **CRITICAL** **[RENDER]**
**Homepage & About page.** Evidence (verbatim): `0+ Custom AI systems shipped`, `0.0M+ AI interactions handled per month`, `0% client retention rate`, `0 industries served end-to-end`.
The most damaging element on the site in its broken state. `0% client retention rate` reads as "every client left."
**Fix:** Hardcode real fallback numbers in the HTML; animate from a visible baseline; never start a credibility metric at zero. Even modest real numbers ("12+ systems shipped · 5 industries · 100% retention on completed projects") beat visible zeros.

### 4.2 Testimonials are unverifiable and read as templated — **HIGH** **[CONTENT]**
Six testimonials (Ravi Sharma/Southwest Gases, Anil Rastogi/GoHappy Club, Greg Patterson/Welders Supply USA, Rehan Khan/Marketrz Agency, Rajesh Goyal/CarBuddy Delhi, Shreya Bhatia/Velocity Watches). All are polished to the same marketing-literate cadence, each landing a clean pain-point + ROI claim. **No photos, no company logos, no LinkedIn links, no clickable companies.**
*Note: this is an authenticity concern, not proof of fabrication — but a buyer cannot verify them, so they add near-zero trust.*
**Fix:** Add headshots, link each name to a real LinkedIn profile, add client logos linking to client sites. If a client wants anonymity, "name withheld on request" reads more honestly than unverifiable polish. One video testimonial would outweigh all six text ones.

### 4.3 "Signature Global" — real company name, legal/reputational risk — **HIGH** **[CONTENT]**
`/work` lists Signature Global as a case study. Signature Global is a real, publicly-traded Indian real-estate developer. Using a recognizable company name without a documented, verified relationship is a genuine legal and reputational risk.
**Fix:** Confirm-and-link the real relationship, or rename/anonymize the case study.

### 4.4 Case-study metrics are precise but unanchored — **MEDIUM** **[CONTENT]**
Hyper-specific numbers ($184k, ₹2.4 Cr, 480k+ verified emails, 97% call resolution) appear with no baseline ("before" state), no methodology, and no client confirmation. One case study is dated **"2024–2026"** — a future-spanning range on a single engagement reads as fabricated.
**Fix:** Add baseline + measurement method per metric; remove or explain future-dated ranges; link client confirmation where possible.

### 4.5 Solo-operator signals stack up — **HIGH** **[CONTENT]**
Single named person ("Bhumit Goyal — Founder & Principal AI Engineer"); all four socials are personal `@bhumitgoyal`; a vaguely referenced "small bench of senior engineers" with no names; no founding year; no legal entity suffix on "© 2026 Nuvero AI." Against case studies claiming enterprise-scale savings, this signals freelancer-level vendor risk (what happens if one person is unavailable?).
**Fix:** Name 1–2 collaborators with LinkedIn links and credentials, **or** own the solo model explicitly ("a focused one-person studio — here's why that's faster for you"). Add founding year and project count.

### 4.6 Gmail address + personal mobile — **HIGH** **[CONTENT]**
`nuveroai@gmail.com` (not a domain email), `+91 98186 46823` mobile, WhatsApp on the same personal number, "Remote · India," on a non-standard `.space` TLD. For a Western SMB comparing vendors, the Gmail address alone is often a silent disqualifier.
**Fix:** Custom domain email (P0 #2). Consider acquiring `nuvero.ai` or a `.com`. Use a business WhatsApp identity.

### 4.7 Zero security / compliance / legal content — **CRITICAL** **[CONTENT]**
Across all pages: no Privacy Policy, no Terms, no DPA, no GDPR/CCPA, **no HIPAA despite Healthcare being a named vertical**, no SOC 2 / ISO mention, no data-residency statement, no SLA, no refund/guarantee, no legal entity name. The only compliance-adjacent text is the marketing phrase "Security + compliance baked in, not bolted on" — with nothing behind it. The only guarantee on the site is a "bounce-rate under 3%" line for lead-gen.
**Fix (priority after the counters):** Publish Privacy Policy + ToS; add a Security/Trust page (data handling, subprocessors, ownership, incident response); resolve Healthcare/HIPAA; add a legal entity name to the footer.

### 4.8 Missing standard trust furniture — **HIGH** **[CONTENT]**
Absent: privacy policy, ToS, company registration/legal name, custom email, named team, client logos, third-party reviews (Clutch/G2/Trustpilot), certifications, press mentions, physical address, company LinkedIn, pricing transparency, refund/guarantee, partnership badges (Twilio/Vapi/OpenAI — the stack is named but not badged). A buyer who Googles "Nuvero AI reviews" finds nothing.
**Fix priority order:** (1) Privacy + ToS, (2) custom email, (3) company LinkedIn, (4) a Clutch/G2 profile with even 3 reviews, (5) partnership badges, (6) client logos with permission.

---

## 5. Sales & Conversion

> **The site has the ingredients of a high-converting page but assembles them in the wrong order, with no price anchor and no risk reversal.**

### 5.1 Hero has no value proposition — **CRITICAL**
The hero on every page is "**You run it, we handle it.**" with subhead "Custom AI · Built for your problem." It could describe a dry cleaner or a staffing firm. It names no outcome, no number, no audience. The subhead describes the *input* (custom AI), not the *output* (revenue, hours saved, leads booked).
**Fix:** See the rewritten hero in Section 8.

### 5.2 Best proof is buried — **HIGH**
The strongest assets — `$184k annual ops savings`, `10× content output`, `$0.11/verified lead`, `₹2.4 Cr GMV`, `+$420k ARR` — live on `/work`, one click from the homepage. Homepage testimonials carry **zero hard numbers** ("conversion rate's up," "I get my weekends back").
**Fix:** Add an above-the-fold proof strip with 3 metrics + client logos. Rewrite each testimonial to anchor one number ("4-hour lead response → under 60 seconds, zero dropped leads since").

### 5.3 No pricing anchor, no risk reversal — **CRITICAL**
The only pricing signal is the contact-form budget dropdown — **INR-only, ₹8,000–₹1,70,000+** (~$95–$2,000). This (a) confuses the US/UK clients in your own case studies and (b) signals "freelancer" against outcomes worth tens of thousands. There is no guarantee, no free-audit deliverable, no "starting at" anywhere. The buyer carries 100% of the risk — the #1 reason AI projects get deferred.
**Fix:** Add a price anchor ("custom builds from ₹X / $Y for a 6-week engagement; retainers from ₹Z/mo"). Add one risk-reversal line ("if we don't hit the agreed KPI by go-live, we rebuild it free"). Make the discovery call a deliverable ("we'll map your top 3 automation opportunities — whether you hire us or not").

### 5.4 CTA proliferation — **HIGH**
~12 distinct CTA labels on the homepage alone — "Get a custom AI solution," "See problems we've solved," "Describe your problem," "See what we'd automate for you," "Open services booklet," "Book a discovery call," "Ask anything," etc. They compete instead of compounding. "Open services booklet" in particular pulls warm prospects into a PDF flow instead of a conversation.
**Fix:** Collapse to **one primary** ("Book a free 30-min call") and **one secondary** ("See our work"), identical wording in every section footer. Demote the booklet to a text link.

### 5.5 No urgency or scarcity — **HIGH**
Nothing anywhere gives a reason to act now. A custom-build shop has genuinely limited capacity — true, usable scarcity that's currently unused. (The "Bhumit replies personally to every inquiry" line actually signals *high* availability.)
**Fix:** Add an honest capacity signal ("booking 3–4 new clients for Q3 2026") and a cost-of-delay frame ("start in July, your first agent is live before peak season").

### 5.6 Objections unhandled in-flow — **HIGH**
The obvious B2B-AI objections — hallucinations giving customers wrong info, integration effort ("will it work with my Salesforce/HubSpot/ERP?"), "what happens when it breaks at 2am," data security — are either absent or buried in a JS FAQ accordion that doesn't render to crawlers.
**Fix:** Add a short "How we keep it safe" block (data handling, model ownership, incident SLA). Add a "what if it breaks" line to the process (human-in-the-loop checkpoints, documented rollback). Surface FAQ answers as static text.

### 5.7 Offer is unclear — eleven services, no entry point — **CRITICAL**
The Services page lists 11 services; the homepage lists 24 automation categories; What We Offer covers 4–5 industries. There's no answer to "what do I actually buy — a project, a retainer, a fixed-scope build?" The prospect can't self-qualify or self-scope before committing to a call.
**Fix:** Lead with ONE primary offer ("We build your first AI agent in 6 weeks — fixed scope, fixed price, measurable result") and let breadth be discovered deeper. Add one line on engagement model.

### 5.8 Lead-capture friction — **MEDIUM**
The contact form has 7 fields including a premature budget question (budget disclosure should follow trust, not gate it). No embedded calendar. INR-only budgets with no USD.
**Fix:** Drop to 4 fields (name, email, company, "what's slowing you down?"); embed a Cal.com/Calendly widget as the primary action; move budget to the call; add a "we reply within 1 business day" note.

### Top 5 Highest-Impact Sales Fixes
1. **Fix the hero headline** — every visitor starts here.
2. **Fix the zero stats** — a P0 trust bug masquerading as a design tweak.
3. **Add one price anchor + one guarantee** — removes the biggest hesitation.
4. **Surface hard numbers above the fold** — proof at first impression.
5. **Kill the broken booklet links and consolidate to 2 CTAs** — lowest effort, highest certainty.

---

## 6. Copy & Proofreading

Genuine content issues separated from render artifacts.

### Real content problems — fix these **[CONTENT]**

| Severity | Page | Issue | Fix |
|----------|------|-------|-----|
| High | Sitewide | **"No jargon" promise contradicted** by IVR, SDR, RAG, "KPI-instrumented," "agentic systems," "engagement model" — all undefined. | Define acronyms on first use, or drop the "no jargon" claim. |
| High | Work | **"₹2.4C" / "₹1.1C"** — Indian "Crore" shorthand, illegible internationally. | Write "₹2.4 Cr" or convert to USD. |
| High | Services | **"Buying lists is a graveyard"** (category error); **"your NPS pays for it"** (NPS can't pay); **"where the ROI compounds"** (ROI isn't a place). | Rework the mixed metaphors. |
| High | About | **"An AI agency built like a product team, not a consultancy"** contradicts the Services page, which sells "AI Strategy & Consulting." | Rename the service to "Advisory," or soften the About line. |
| Medium | Booklet | **British/American split:** "personalised" vs "personalized" elsewhere. | Standardize on American English. |
| Medium | Booklet | **"Manufacturing Agency"** — "Agency" doesn't apply to manufacturing; looks like a template error. | "Manufacturing" or "Manufacturing Operations." |
| Medium | Home, Process | **Run-on sentences missing em-dashes**, duplicated across pages: *"…what's slowing you down no jargon…"*, *"…another AI vendor they need a small, senior team…"* | Insert em-dashes between the independent clauses. |
| Medium | Sitewide | **"Compound" is a verbal tic** — the hero value word in 5+ places (hero, contact, about, process, services). | Reserve it for one location; vary with "scales," "grows," "builds on itself." |
| Medium | Booklet | **Page-title bug:** `/booklet/view` renders "Services Booklet · Nuvero AI · Nuvero AI" (doubled brand). | Fix title template so the brand suffix appends once. |
| Low | Sitewide | **CTA wording varies:** "Book a call" / "Book a discovery call" / "Book a 30-minute discovery call." | Standardize on one primary label. |
| Low | Sitewide | **"Ready to put AI on payroll?"** repeated verbatim on multiple pages — feels templated. | Vary per page. |

### Render artifacts — verify visually, likely not real visual bugs **[RENDER]**
- "No-space" metric callouts: `<60sfollow-up time`, `100%consistent brand voice`, `70%+cache hit rate` — almost certainly animated/letter-spaced text captured mid-animation.
- `customproblemsrequirecustomizedsoftware.` — likely a type-on animation's resting state as seen by a crawler.
- Footer `…while you sleep.shipping_at_velocity()` missing space — check whether it's a styled code element.

*Full per-page proofreading log in [Appendix C](#appendix-c--full-proofreading-log).*

---

## 7. UX, SEO & Technical

### 7.1 Three pages answer one question — **HIGH**
`/what-we-offer` (industries), `/services` (service lines), and an **orphaned `/industries` page** overlap heavily. To a first-time visitor, "What We Offer" vs "Services" is the same question answered twice.
**Fix:** Consolidate into one page with "By service" / "By industry" tabs. Prefer the SEO-friendlier `/industries` or `/solutions` slug.

### 7.2 Orphaned `/industries` page — **HIGH**
`/industries` is fully built, live, and in the sitemap at priority 0.8 — but linked from **nowhere** in nav, footer, or CTAs. Unreachable by a human; a direct content duplicate of `/what-we-offer`.
**Fix:** Delete and 301-redirect to the canonical industry page, or swap it into the nav and remove `/what-we-offer`.

### 7.3 Duplicate H1 across every page — **CRITICAL (SEO)**
Every page carries the same H1: "You run it, we handle it." Worse, several pages have **multiple H1s** (About has ~8). The persistent hero tagline is marked up as H1 sitewide.
**Fix:** Exactly one unique, keyword-relevant H1 per page (e.g., Services → "AI Automation Services for Growing Businesses"; Process → "How We Build Your Custom AI System"). Demote the tagline to a styled `<p>`/`<span>`.

### 7.4 No meta descriptions, keyword-free titles — **HIGH (SEO)**
**Not one page has a meta description.** Titles are generic ("Services · Nuvero AI") with no searchable keywords — you signal nothing for "AI automation agency," "custom AI agents," etc.
**Fix:** Write a unique 140–160 char meta description per page; rework titles to include primary keywords (e.g., "Nuvero AI | Custom AI Automation Agency — Ships in Weeks").

### 7.5 Sitemap ↔ navigation mismatch — **HIGH**
The sitemap lists the orphaned `/industries` but **omits `/what-we-offer`** (which is in the nav). Booklet pages aren't in the sitemap either, though they're live and indexable.
**Fix:** Resolve the page duplication first, then sync the sitemap to the real structure.

### 7.6 Booklet links broken / duplicated — **HIGH**
On `/booklet`, the Manufacturing and Restaurant booklets both point to `/booklet/view` (one is wrong, or both serve a generic doc). Several deep links 404 or redirect home.
**Fix:** Distinct URLs per booklet (`/booklet/manufacturing`, `/booklet/restaurant`); fix or remove dead links; remove "Booklet" from nav until stable.

### 7.7 Homepage duplicates the whole site — **MEDIUM**
The homepage includes full Process, Selected Work, and Services sections that duplicate their dedicated pages — bloated and semantically redundant.
**Fix:** Tighten the homepage to hero → proof strip → service hooks → CTA, each linking out to the full page.

### 7.8 Work index may not link to case-study pages — **MEDIUM**
Eight individual case-study pages exist in the sitemap and load well, but the `/work` index doesn't appear to link into them (cards show as text, not anchors).
**Fix:** Make each case-study card link to its sub-page (UX + internal-linking + SEO).

### 7.9 Images appear to lack alt text — **MEDIUM (A11y/SEO)**
No alt text surfaced in any crawl, including the founder photo (`/_next/image?url=%2Fbhumit.png`).
**Fix:** Add descriptive alt text to every image; audit sitewide.

### 7.10 Booklets ungated — **MEDIUM**
The booklets are web pages with browser "print to PDF," not gated lead magnets — a missed email-capture opportunity. The `/booklet` selector also lacks the main nav/footer.
**Fix:** Gate behind an email form (preferred) or add a real "Download PDF"; restore nav/footer.

### 7.11 Performance / mobile signals — **MEDIUM**
JS-heavy Next.js app: ⌘K command palette, slider-based "Automation Audit" tool, animated counters, carousels. Command palette is a desktop affordance (non-functional on mobile). Viewport meta tag not confirmed in crawl.
**Fix:** Run PageSpeed Insights; lazy-load the audit tool and below-fold images; set explicit image dimensions to avoid layout shift; hide/replace ⌘K on mobile; confirm the viewport meta tag.

### 7.12 Consistency — **MEDIUM**
Footer socials all point to personal `@bhumitgoyal`; contact is Gmail; phone is a personal mobile. (Overlaps with Trust §4.5–4.6.)
**Fix:** Custom domain email; Nuvero AI company LinkedIn; GitHub org instead of personal account.

---

## 8. Rewritten Hero Section

**Current**
> "You run it, we handle it."
> "Custom AI · Built for your problem"
> CTA: "Get a custom AI solution"

**Proposed**
> **Headline:** Your team should be closing deals and serving customers — not pulling reports, chasing leads, and answering the same question for the hundredth time.
>
> **Subhead:** Nuvero builds custom AI agents that follow up leads in under 60 seconds, generate campaign reports in 15 minutes, and answer inbound calls at 3am. Built in your stack. Shipped in 6 weeks. You own it forever.
>
> **Proof strip:** $184k ops saved · 10× content output · $0.11 per verified lead — real clients, real numbers
>
> **Primary CTA:** Book a free 30-min workflow audit →
> **Secondary CTA (text link):** See the systems we've shipped

**Why it works:** opens with the *cost of the status quo* (activates pain before solution); the subhead names method + timeline + ownership (the three things a serious buyer needs); the proof strip moves real numbers above the fold; the CTA promises a concrete deliverable ("workflow audit") instead of a generic "discovery call."

---

## 9. Recommended Site Architecture

**Problem:** 13 routes (8 nav pages + 1 orphan + 4 booklet variants) for a one-person agency with essentially one offering. "What We Offer," "Services," and "Industries" are three answers to the same question; the homepage re-presents Process/Work/Services inline, so the site feels redundant rather than deep.

**Consolidate to ~5 pages:**

| Keep | Notes |
|------|-------|
| `/services` | Merge "What We Offer" + orphaned "Industries" in as tabs: *By Service* / *By Industry*. |
| `/work` | Strong — keep. Ensure cards link to case-study sub-pages. |
| `/process` | Clean and distinct — keep. |
| `/about` (+ contact) | Add credentials, team, founding year; optional inline contact form. |
| `/booklet` | Keep as a gated lead magnet; restore nav/footer; fix links. |
| Homepage | Tighten to hero → proof → service hooks → CTA only. |

This cuts nav items from 5 to 4, eliminates the orphan, fixes the sitemap conflict, and makes the site's purpose legible to both visitors and search engines.

---

## 10. Sequenced Action Plan

### Today (a few hours)
- [ ] Set non-zero fallbacks on stat counters (home + about)
- [ ] Switch to `hello@nuvero.space`; create Nuvero AI company LinkedIn
- [ ] Fix or remove booklet links; pull "Booklet" from nav if unstable

### This week
- [ ] Publish Privacy Policy + Terms; resolve Healthcare/HIPAA
- [ ] Unique H1 + meta description per page
- [ ] Rewrite hero; add proof strip
- [ ] Add a price anchor + one guarantee line

### This sprint
- [ ] Consolidate What We Offer + Services + orphaned Industries
- [ ] Add verifiable testimonial proof (photos / logos / LinkedIn links)
- [ ] De-risk "Signature Global" (confirm-and-link or rename)
- [ ] Trim to 2 CTAs sitewide; embed a booking calendar
- [ ] Make `/work` cards link to case-study pages
- [ ] Surface FAQ + objection-handling as static text

### Backlog
- [ ] USD pricing alongside INR
- [ ] Gate booklets with email capture
- [ ] Add alt text sitewide
- [ ] PageSpeed pass (lazy-load, image dimensions, mobile ⌘K)
- [ ] Keyword-optimized titles
- [ ] Fix "compound" overuse, mixed metaphors, British/American split

---

## Appendix A — Crawl Status

| URL | Status |
|-----|--------|
| `/` | OK |
| `/what-we-offer` | OK (but absent from sitemap) |
| `/services` | OK |
| `/work` | OK |
| `/process` | OK |
| `/about` | OK |
| `/contact` | OK |
| `/booklet` | OK (selector) |
| `/bookletmarketing` | OK (full booklet) |
| `/booklet/view` | OK (generic booklet; title shows doubled "Nuvero AI") |
| `/bookletD2C` | OK |
| `/industries` | OK — **orphaned** (in sitemap, not in nav) |
| `/work/southwest-gases-voice-concierge` | OK |
| `/work/gohappy-club-member-assistant` | OK |
| `/work/gohappy-club-member-ai` | Redirects to homepage (broken deep link) |
| `/work/signature-global` | Redirects to homepage (broken deep link) |
| `/booklet/marketing-agency` | 404 |
| `/services/ai-voice-agents` | 404 |
| `sitemap.xml` | OK |
| `robots.txt` | OK |

---

## Appendix B — All CTAs Found (homepage)

`Get a custom AI solution` · `See problems we've solved` · `Get a custom solution` (×5) · `See what we'd automate for you` · `Describe your problem` · `See all sectors` · `View all work` · `Book a discovery call` · `Open services booklet` · `Ask anything` · `Book a call` (nav) · `Send message` (contact form)

→ **Recommendation:** collapse to one primary (`Book a free 30-min call`) + one secondary (`See our work`).

---

## Appendix C — Full Proofreading Log

Severity key: Critical / High / Medium / Low. Items marked **[RENDER]** are likely crawler artifacts — verify visually before editing.

### Homepage
- **[RENDER] Critical** — `customproblemsrequirecustomizedsoftware.` → "Custom problems require custom software."
- **[RENDER] High** — metric callouts with no spaces: `<60sfollow-up time`, `100%follow-up consistency`, `0manual call notes`; `70%+cache hit rate`, `~60%lower LLM inference cost`, `<50msresponse time`; `<15 mincampaign creation`, `6+channels`, `100%consistent`; `0daily ops…`, `100%route visibility`, `Fullaudit trail`; `100%automated…`, `Zeromanual…`, `$0.11average`; `Hours → minresearch time`, `1000sof SMBs`, `$0recurring`.
- **High [CONTENT]** — "compounding revenue, cutting manual ops, and scaling…" — gerund chain doesn't parallel cleanly → "to compound revenue, cut manual ops, and scale…"
- **High [CONTENT]** — "what's slowing you down no jargon, just a straight look…" — run-on; insert em-dash.
- **Medium [CONTENT]** — "it actually listens' that's not easy…" — missing opening quote + comma splice.
- **Medium [CONTENT]** — "Repeat purchases went up didn't expect…" — fused sentence.
- **Medium [CONTENT]** — "Clients haven't noticed which is the point." — missing dash.
- **Medium [CONTENT]** — "We're not selling a product and we're not generalists." — missing comma before "and."
- **Medium [CONTENT]** — "tell you whether we're the right fit no slides, no sales theatre." — fused; insert em-dash.
- **[RENDER] Medium** — footer "…while you sleep.shipping_at_velocity()" — missing space / styled-code artifact.

### What We Offer
- **High [CONTENT]** — "personalized AI solutions" — "personalized" reads consumer-marketing; "tailored"/"bespoke" fits B2B.
- **Medium [CONTENT]** — "Agency growth hits a wall…" — cliché; "stalls."
- **Medium [CONTENT]** — "Find and reach clients…" ambiguous (new prospects vs existing).
- **Medium [CONTENT]** — inconsistent pain-point grammar (gerund vs noun fragments).

### Services
- **High [CONTENT]** — "Buying lists is a graveyard." — category error → "Bought lists are a graveyard."
- **High [CONTENT]** — "fill a CRM with bounces and dead numbers" — awkward.
- **High [CONTENT]** — "moves the needle" — cliché that recurs sitewide.
- **Medium [CONTENT]** — "your NPS pays for it" — mixed metaphor → "takes the hit."
- **Medium [CONTENT]** — "IVRs" — undefined acronym for a broad audience.
- **Medium [CONTENT]** — "a deal slipped" — sales jargon.
- **Medium [CONTENT]** — "slow, expensive, manual slog" — one adjective too many.
- **Medium [CONTENT]** — "locked inside Slack threads… and one senior employee's head" — mixes tool + person without signal.
- **Medium [CONTENT]** — "where the ROI actually compounds" — ROI isn't a place.
- **Low [CONTENT]** — "automate it with AI" redundant on an AI page.

### Work
- **High [CONTENT]** — "₹2.4C GMV" / "₹1.1C recovered" — Crore shorthand, unclear internationally.
- **High [CONTENT]** — "4.8/5 member CSAT" — undefined acronym.
- **Medium [CONTENT]** — "Numbers moved." — direction unclear.
- **Medium [CONTENT]** — "books outbound pitches in its spare time" — flippant anthropomorphism.
- **Medium [CONTENT]** — "AI SDR" — undefined acronym.
- **Low [CONTENT]** — "1,800 hours recovered" — no timeframe.

### Process
- **High [CONTENT]** — "what's slowing you down no jargon…" — same run-on as homepage.
- **High [CONTENT]** — "No slide-ware." — non-standard coinage → "slideware" / "slide decks."
- **Medium [CONTENT]** — "engagement model," "KPI-instrumented," "baked in, not bolted on" — jargon/clichés that undercut the "no jargon" promise two lines later.
- **Low [CONTENT]** — "Quarterly business review + roadmap refresh" — "+" used as conjunction inconsistently.

### About
- **[RENDER] Critical** — stats render `0+`, `0.0M+`, `0`, `0%` (same counter bug).
- **High [CONTENT]** — "another AI vendor they need a small, senior team" — run-on.
- **High [CONTENT]** — "the pattern that works not whatever's trending on X" — run-on.
- **High [CONTENT]** — "built like a product team, not a consultancy" — contradicts the Services consulting line.
- **Medium [CONTENT]** — "Tight cycles, working software every week, ruthlessly cut scope…" — broken parallelism.
- **Medium [CONTENT]** — "agentic systems" — jargon for the target market.
- **Medium [CONTENT]** — "workflows that actually compound" — misplaced modifier.
- **Low [CONTENT]** — "infra" — informal vs "infrastructure" elsewhere.

### Contact
- **High [CONTENT]** — "the workflow you want AI to own" — "own" can read as loss of control; cuts against "You run it, we handle it."
- **Medium [CONTENT]** — "Let's build something that compounds." — vague; "compound" overuse.
- **Low [CONTENT]** — "whether and how we can help" — clunky order.

### Booklet
- **High [CONTENT]** — "Manufacturing Agency" — mislabel.
- **Medium [CONTENT]** — "personalised commerce" — British spelling vs American elsewhere.
- **Medium [CONTENT]** — "Production ops" — informal register vs sibling cards.
- **Low [CONTENT]** — title "Select Agency Nuvero AI · Nuvero AI" — stray template word + doubled brand.

### Cross-site
- **High [CONTENT]** — "no jargon" promise vs IVR / SDR / RAG / KPI-instrumented / agentic.
- **High [CONTENT]** — "compound/compounds/compounding" overused (5+ locations).
- **Medium [CONTENT]** — "moves the needle" / "move real business metrics" / "moving a number" — same metaphor thrice.
- **Medium [CONTENT]** — "e-commerce" vs "E-commerce" capitalization drift.
- **Low [CONTENT]** — "Book a call" vs "Book a discovery call" vs "Book a 30-minute discovery call."
- **Low [CONTENT]** — "Ready to put AI on payroll?" repeated verbatim across pages.

---

*End of report.*
