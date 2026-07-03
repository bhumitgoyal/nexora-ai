# Nuvero AI — Remaining Recommendations
**Consolidated from:** Website Audit Report + Competitive Analysis  
**Date compiled:** June 26, 2026  
**Status:** All P0 fixes and Quick Wins A/B/C completed. Everything below is still open.

---

## What's Already Done ✅

| Item | What was done |
|------|---------------|
| Stat counters | Fixed to 45 systems / 92% retention |
| Privacy Policy + Terms | New pages at /privacy and /terms |
| Security & Data page | New page at /security, linked from footer |
| Hero headline | Rewritten: "Your team closes deals. AI handles the rest." |
| Hero subhead | Updated with outcome + number: "8+ hours/person/week cut" |
| Primary CTA | Changed to "Get your free automation audit" → scrolls to ROI tool |
| ROI estimator | Added ₹/yr money output alongside hours/score |
| E-commerce + Healthcare taglines | Outcome-led rewrites with specific numbers |
| H1 per page | Every page now has a unique H1 |
| Meta descriptions | Unique, keyword-focused descriptions on all pages |
| Email everywhere | Changed to nuveroai@gmail.com |
| Integration badges | Built (hidden) — ready to unhide when needed |

---

## Priority 1 — High Impact, Mostly Code

### 1.1 Add a proof strip above the fold on the homepage
**What:** A tight 3-metric row directly below the hero — real numbers from case studies, visible without scrolling.  
**How:** Add a new component between `Hero` and `WhatWeOffer`. Three stat chips: e.g. `$184k ops saved · 10× content output · $0.11/verified lead — real clients, real numbers`. Style like a marquee or a simple flex row.  
**Keep in mind:** These should be real, verified numbers from your case studies only. Do not round up or generalise. The source case study slug should be findable if anyone asks.

---

### 1.2 Fix CTA proliferation — collapse to 2 sitewide
**What:** The homepage has ~12 different CTA labels competing. They dilute each other.  
**How:** Standardise to one primary (`Book a free 30-min call` → /contact) and one secondary (`See our work` → /work). Every section footer should use these exact labels. Demote "Open services booklet" to a plain text link.  
**Keep in mind:** The audit tool CTA (`See what we'd automate for you`) is a good exception — it has specific intent. Everything else should collapse. "Ask anything" in the FAQ strip is fine as-is.

---

### 1.3 Add a pricing anchor (not a pricing page)
**What:** Not a full pricing page — just a one-liner on the contact page or in the hero area that gives the buyer a number to anchor to.  
**How:** On the contact page or below the hero CTA, add something like: `Custom builds from ₹1,20,000 for a 6-week engagement. Retainers from ₹40,000/mo.` Optionally a one-line guarantee: `If we don't hit the agreed KPI by go-live, we rebuild it free.`  
**Keep in mind:** The goal is to remove the "I have no idea what this costs" hesitation, not to close on price. Set a floor that qualifies the right buyers and filters out those who aren't serious.

---

### 1.4 Unhide integration logo wall
**What:** Already built — just commented out in `TechStackMarquee.tsx`.  
**How:** Remove the comment wrapper in `src/components/home/TechStackMarquee.tsx` around the integration partners `<div>`.  
**Keep in mind:** Only do this when you're confident the listed platforms (OpenAI, Vapi, Twilio, etc.) are ones you actually use. Don't list platforms you've never shipped a project on — if a technical buyer asks during a call, it should be verifiable.

---

### 1.5 Surface FAQ answers as static text (not JS-only accordion)
**What:** The FAQ accordion doesn't render for crawlers or no-JS visitors. Objection answers are invisible to search.  
**How:** Render the FAQ as plain HTML with `<details>/<summary>` or just as static expanded text. Animation can still be applied on top. The key is that the text must be in the HTML source — not injected by JS after load.  
**Keep in mind:** The audit identified "data security" as a FAQ topic that raises the question but never answers it. The new /security page handles this — make sure one FAQ entry links there explicitly.

---

### 1.6 Add urgency / capacity signal
**What:** Nothing on the site gives a reason to act now. True scarcity exists (limited capacity as a small team) — it's just not used.  
**How:** Add a small signal near the primary CTA or contact form: e.g. `Booking 3–4 new clients for Q3 2026 — 2 slots remaining.` Update it manually each quarter.  
**Keep in mind:** This only works if it's true. A false scarcity claim spotted by a returning visitor destroys trust faster than having no urgency at all. Keep the number conservative and real.

---

### 1.7 Fix images — add alt text sitewide
**What:** No alt text on any images, including the founder photo. SEO and accessibility issue.  
**How:** Check every `<Image>` component across the codebase. Grep for `alt=""` or missing `alt`. The founder photo at `/bhumit.png` should have `alt="Bhumit Goyal, Founder of Nuvero AI"`. Case study workflow images should describe the workflow.  
**Keep in mind:** Alt text should describe what the image contains, not what you want it to say for SEO. Screen readers read it aloud — write it for a person who can't see the image.

---

## Priority 2 — Content Work (You Write, Dev Is Simple)

### 2.1 Testimonials — add verifiable proof
**What:** All 6 testimonials are text-only. No headshots, no company logos, no LinkedIn links. They look templated even if genuine.  
**How:** For each testimonial, try to get: (a) a headshot, or (b) their LinkedIn URL, or (c) permission to use their company logo. Even one of the three transforms credibility. One video testimonial would outweigh all six text ones.  
**Keep in mind:** If a client wants anonymity, `"Name withheld on request — [Industry], [Country]"` reads more honestly than an unverifiable polished quote. Do not fabricate or use stock photos.

---

### 2.2 De-risk "Signature Global" case study
**What:** Signature Global is a real, publicly-traded Indian real estate developer. Using their name in a case study without documented authorisation is a legal and reputational risk.  
**How:** Either (a) get written confirmation from the client that they're happy to be named, and link their website, or (b) rename the case study to something like `"A Top-3 Indian Real Estate Developer"` and remove the company name from all references in `caseStudies.ts`.  
**Keep in mind:** If you do anonymise, also check the slug (`/work/signature-global-tenant-ops`) — it should be updated too, with a redirect from the old URL.

---

### 2.3 Fix the future-dated case study range
**What:** One case study is dated "2024–2026" — a range that spans into the future. It reads as fabricated or ongoing-but-claimed.  
**How:** Find which case study has this range in `caseStudies.ts` and correct the `year`/`duration` field to the actual completed window. If it's genuinely ongoing, say "Ongoing since 2024" rather than spanning to the future.  
**Keep in mind:** Precision matters for credibility. A buyer who notices a future date will question every metric on the page.

---

### 2.4 Fix "compound" overuse
**What:** The word "compound/compounds/compounding" appears in 5+ places: hero, contact, about, process, services. It's become invisible.  
**How:** Keep it in one high-value location (the ScrollWordHighlight "Built to compound" section is ideal). Replace the others with: "scales," "grows," "builds on itself," "stacks," "multiplies."  
**Keep in mind:** This is a low-effort copy pass. Do a site-wide search for "compound" and decide per instance. Don't remove it everywhere — it's a good word when not diluted.

---

### 2.5 Fix mixed metaphors and copy errors in Services page
**What:** Several lines are broken: "Buying lists is a graveyard" (category error), "your NPS pays for it" (NPS can't pay), "where the ROI compounds" (ROI isn't a place).  
**How:**  
- "Buying lists is a graveyard" → "Bought lists are a graveyard"  
- "your NPS takes the hit" instead of "pays for it"  
- "where ROI actually stacks" instead of "where ROI compounds"  
**Keep in mind:** The Services page is where warm prospects self-qualify. Bad copy here costs conversions. A quick pass with fresh eyes catches most of it.

---

### 2.6 Fix run-on sentences (Homepage, About, Process)
**What:** Several sentences fuse two independent clauses without punctuation.  
**How:** Key fixes:
- "what's slowing you down no jargon, just a straight look..." → "what's slowing you down — no jargon, just a straight look..."
- "another AI vendor they need a small, senior team" → "another AI vendor — they need a small, senior team"
- "the pattern that works not whatever's trending on X" → "the pattern that works, not whatever's trending on X"
- "tell you whether we're the right fit no slides, no sales theatre" → "tell you whether we're the right fit — no slides, no sales theatre"  
**Keep in mind:** Do a read-aloud pass on the homepage and about page. Anywhere you'd naturally pause but there's no punctuation — add an em dash or full stop.

---

### 2.7 Standardise CTA label across the site
**What:** "Book a call" / "Book a discovery call" / "Book a 30-minute discovery call" are three labels for the same action.  
**How:** Pick one: `Book a free 30-min call` and use it everywhere. Find and replace in all page components.  
**Keep in mind:** Consistency in CTA wording reduces cognitive load. The buyer shouldn't have to figure out whether these CTAs go to different places.

---

### 2.8 Fix "₹2.4C" Crore shorthand on Work page
**What:** "₹2.4C GMV" and "₹1.1C recovered" — "C" for Crore is Indian shorthand that's illegible to international readers.  
**How:** Write "₹2.4 Cr" or convert to USD ("~$290k") in the case study cards and detail pages.  
**Keep in mind:** Your case studies mention US clients (Welders Supply USA, Greg Patterson). Indian shorthand creates a bad impression for non-Indian readers. Either add the USD equivalent or use the full "Crore" spelling.

---

## Priority 3 — Strategic / Bigger Lifts

### 3.1 Own the solo / founder-led model explicitly
**What:** The site has signals of a solo operator (personal @bhumitgoyal handles, "Bhumit replies personally," no named team) but tries to read like an agency. The tension undermines both.  
**How (Path A — recommended):** On the About page and in the hero area, own the model: `"A focused founder-led studio — the person who scopes your project builds it and answers your emails."` Add founding year. Mention 1–2 named collaborators with their roles (even if freelance/part-time), or be explicit that you work solo with external specialists.  
**Keep in mind:** For SMB/mid-market buyers, founder-led is a *selling point* — it means faster decisions, no account manager overhead, direct access to expertise. Enterprise procurement will screen this out regardless of how you frame it, so optimising for enterprise here is wasted energy.

---

### 3.2 Consolidate What We Offer / Services / Industries
**What:** Three pages answer the same question. `/industries` is fully built but linked from nowhere. `/what-we-offer` and `/services` heavily overlap.  
**How:** Merge into one page with two tab views: *By service* and *By industry*. Redirect `/industries` → `/what-we-offer` (or `/services`). Remove the duplicate from the sitemap.  
**Keep in mind:** This is a meaningful restructure — do it in one go and update all internal links, the sitemap, and the nav. The `/industries` page currently has priority 0.8 in the sitemap but is unreachable from the UI.

---

### 3.3 Fix sitemap / nav mismatch
**What:** `/what-we-offer` is in the nav but absent from `sitemap.ts`. `/industries` is in the sitemap but not in the nav.  
**How:** Check `src/app/sitemap.ts` and ensure it lists every page in the nav (and vice versa). After resolving 3.2 above, this becomes a one-pass cleanup.  
**Keep in mind:** Google uses the sitemap as a crawl hint. A page in the nav but not the sitemap may rank slower. A page in the sitemap but not the nav is confusing to Googlebot and gets lower authority.

---

### 3.4 Embed a booking calendar on the contact page
**What:** Currently the contact page has a 7-field form. Adding a Cal.com or Calendly widget gives the buyer the option to skip the form and book directly.  
**How:** Sign up for Cal.com (free), create a "30-min Discovery Call" event, embed the widget using the Cal.com embed script in the contact page. Make the form an *alternative* path, not the only one.  
**Keep in mind:** Move the budget question off the form — it creates friction before trust is established. Ask it on the call instead. Reduce the form to: name, email, company, "what's slowing you down."

---

### 3.5 Add an on-site AI chat agent
**What:** You sell AI agents that reply in seconds. Your own site has no chat — a prospect has to email and wait.  
**How:** Build or embed a simple WhatsApp-based or web chat agent powered by your own stack. Even a basic FAQ bot that can answer "what services do you offer" / "how long does it take" / "book a call" routes correctly.  
**Keep in mind:** This is the highest-credibility dogfood signal on the site. But only do it when the agent is genuinely good — a broken or unhelpful bot is worse than no bot. Set it up as a WhatsApp widget first (lower barrier) and upgrade later.

---

### 3.6 Add a demo video / Loom
**What:** All competitors have a video. You have none. A 60–90s recording of a real workflow beats three paragraphs of copy.  
**How:** Record a screen share of one live workflow — ideally the voice agent (Southwest Gases) or the marketing automation (Marketrz) since these have the most visceral before/after. Embed it on the Work page or in the About section.  
**Keep in mind:** Don't over-produce it. A clean Loom with a good audio mic and real client output is more credible than a slick animated explainer with fake data. Blur or narrate over any sensitive client info.

---

### 3.7 Create Clutch and/or G2 profiles
**What:** A prospect Googling "Nuvero AI reviews" finds nothing. Self-claims < independent proof.  
**How:** Create a Clutch.co profile (free), add your case study clients, and invite 3–5 clients to leave a review. Once you have 3+ reviews, add the Clutch badge to the footer or testimonials section.  
**Keep in mind:** Clutch reviews require the reviewer to verify their identity — this actually makes them more trustworthy than website testimonials. Start with your most satisfied clients (GoHappy, Southwest Gases) and ask personally, not via a mass email.

---

### 3.8 Content / SEO engine (blog)
**What:** You're fully dependent on outbound and referral — invisible to organic search for queries like "AI automation agency India," "custom AI agents for e-commerce," etc.  
**How:** Start with 6 problem-led posts: one per industry you serve. Format: `[Industry] problem → how AI fixes it → what we built for a client`. The ROI estimator page is already a strong lead magnet — make sure it's indexable and link to it from posts.  
**Keep in mind:** Don't write generic "what is AI" posts — they won't rank and they won't convert. Write about problems your target clients search for. E.g. "How to automate lead follow-up for a real estate agency in India" will rank and pre-qualify a reader far better than "5 benefits of AI automation."

---

### 3.9 Decide: SMB/mid-market or enterprise?
**What:** The site tries to speak to both. It weakens both pitches.  
**How:** The competitive analysis recommends Path A (SMB/mid-market) as the near-term default because your proof is already credible at that level. If enterprise is the goal, the trust layer required is a 6–12 month build: SOC 2, ISO 27001, DPA, SSO, SLA/uptime page, legal entity registration, and named references at scale.  
**Keep in mind:** You don't have to choose forever — but you should choose for the next 6 months. Pick the buyer whose problem you already solve, write the whole site for them, and don't hedge.

---

## Quick Reference: What's Left by Effort

| Effort | Items |
|--------|-------|
| < 1 hr (code) | 1.4 Unhide integration logos · 1.7 Alt text pass |
| 2–4 hrs (code) | 1.1 Proof strip above fold · 1.2 CTA collapse · 1.5 FAQ as static HTML · 1.6 Urgency signal |
| Half day (code) | 1.3 Pricing anchor + guarantee · 3.3 Sitemap fix · 3.4 Calendar embed |
| Copy pass (you write) | 2.4 Fix "compound" · 2.5 Services metaphors · 2.6 Run-on sentences · 2.7 CTA label · 2.8 Crore shorthand |
| Content work (you write) | 2.1 Testimonial proof · 2.2 Signature Global · 2.3 Future date fix |
| Big lift | 3.2 Consolidate pages · 3.5 Chat agent · 3.6 Demo video · 3.7 Clutch/G2 · 3.8 Blog · 3.9 Positioning |
| Your call | 3.1 Own the solo model (content + framing decision) |
