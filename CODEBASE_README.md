# Nuvero AI — Website Codebase

> **Production URL:** https://nuvero.space
> **Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · shadcn/ui
> **Deployment:** Google Cloud Run (Dockerised standalone build)

This is the marketing and portfolio website for **Nuvero AI** — a custom AI automation studio. The site showcases services, case studies, intelligence briefings, client reviews, and printable sales booklets, all driven by static TypeScript content files with two live API feeds (deployments and reviews) pulled from the outreach backend.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Pages and Routes](#pages-and-routes)
- [Component Architecture](#component-architecture)
- [Content Layer](#content-layer)
- [Library Utilities](#library-utilities)
- [API Routes](#api-routes)
- [Design System](#design-system)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Scripts and Tooling](#scripts-and-tooling)
- [Image Assets](#image-assets)
- [Deployment](#deployment)
- [SEO and Metadata](#seo-and-metadata)
- [Key Patterns and Conventions](#key-patterns-and-conventions)

---

## Quick Start

```bash
# 1. Install dependencies (Node.js 20+ required)
npm install

# 2. Copy and fill in environment variables
cp .env.local.example .env.local

# 3. Run the dev server
npm run dev
# -> http://localhost:3000

# 4. Production build
npm run build

# 5. Run linter
npm run lint
```

---

## Project Structure

```
nexora-ai/
├── src/
│   ├── app/                          # Next.js App Router pages and API
│   │   ├── layout.tsx                # Root layout (fonts, global providers, analytics)
│   │   ├── page.tsx                  # Home page (/)
│   │   ├── globals.css               # Global CSS and design tokens
│   │   ├── about/page.tsx            # About / founder page
│   │   ├── contact/page.tsx          # Contact form page
│   │   ├── work/
│   │   │   ├── page.tsx              # Work grid — all case studies
│   │   │   └── [slug]/page.tsx       # Individual case study detail
│   │   ├── briefings/
│   │   │   ├── page.tsx              # Intelligence briefings index
│   │   │   └── [slug]/page.tsx       # Individual briefing article
│   │   ├── services/page.tsx         # AI Systems catalogue
│   │   ├── what-we-offer/            # Infrastructure overview page
│   │   ├── process/page.tsx          # Engagement process page
│   │   ├── reviews/page.tsx          # Client reviews (ISR, 5 min revalidate)
│   │   ├── industries/page.tsx       # Industries served
│   │   ├── booklet/                  # General sales booklet (print-ready)
│   │   ├── bookletD2C/               # D2C/e-commerce booklet
│   │   ├── bookletHealthcare/        # Healthcare booklet
│   │   ├── bookletmarketing/         # Marketing agencies booklet
│   │   ├── security/page.tsx         # Security and compliance page
│   │   ├── privacy/page.tsx          # Privacy policy
│   │   ├── terms/page.tsx            # Terms of service
│   │   ├── api/contact/route.ts      # Contact form email API (Resend)
│   │   ├── sitemap.ts                # Auto-generated XML sitemap
│   │   ├── robots.ts                 # robots.txt
│   │   ├── opengraph-image.tsx       # Dynamic OG image
│   │   └── twitter-image.tsx         # Twitter card image
│   │
│   ├── components/
│   │   ├── home/                     # 23 homepage section components
│   │   ├── layout/                   # Navbar, Footer, ChromeShell, Logo, ScrollProgressBar
│   │   ├── shared/                   # 22 reusable primitive components
│   │   ├── work/                     # WorkGrid card component
│   │   ├── services/                 # SystemIndex component
│   │   ├── process/                  # BuildSheet component
│   │   ├── seo/                      # JsonLd structured-data component
│   │   ├── booklet/                  # 16 general booklet poster components
│   │   ├── bookletD2C/               # 8 D2C booklet components
│   │   ├── bookletHealthcare/        # 8 Healthcare booklet components
│   │   ├── bookletMarketing/         # 8 Marketing booklet components
│   │   └── ui/                       # 13 active shadcn/ui primitive components
│   │
│   ├── content/                      # All static site content (TypeScript)
│   │   ├── site.ts                   # Global config (name, URL, contacts, nav)
│   │   ├── caseStudies.ts            # 14 case study records
│   │   ├── services.ts               # 12 service definitions
│   │   ├── briefings.ts              # 3 intelligence briefing articles
│   │   ├── industries.ts             # 10 industry verticals
│   │   ├── testimonials.ts           # 6 client testimonials
│   │   ├── faqs.ts                   # 9 FAQ entries
│   │   ├── process.ts                # 5-step engagement process
│   │   ├── techStack.ts              # 24 workflow categories + stats
│   │   └── sectors.ts                # Sector-specific booklet copy
│   │
│   └── lib/                          # Utility and data-fetching helpers
│       ├── deployments.ts            # Fetches live deployments from outreach API
│       ├── reviews.ts                # Fetches live reviews from outreach API
│       ├── motion.ts                 # Shared GSAP/Framer Motion easing constants
│       └── utils.ts                  # cn() helper (clsx + tailwind-merge)
│
├── public/
│   ├── bhumit.webp                   # Founder photo (78 KB, optimized)
│   ├── bhumit.png                    # Founder photo original (1.1 MB source)
│   ├── logo.svg / logo.jpg           # Brand logo variants
│   ├── llms.txt                      # LLM-readable site summary
│   ├── brand/                        # mark-red.png, mark-white.png
│   ├── workflows/                    # 11 workflow diagrams (WebP, ~100 KB each)
│   ├── demos/                        # 7 demo screenshots (WebP, ~65 KB each)
│   └── downloads/                    # Downloadable HTML interactive overviews
│
├── scripts/
│   ├── optimize-images.mjs           # WebP conversion + resize (uses sharp)
│   └── update-content-paths.mjs      # Batch-updates .png to .webp in caseStudies.ts
│
├── next.config.mjs                   # Next.js config (AVIF/WebP, remote patterns, redirects)
├── tsconfig.json                     # TypeScript config (strict, ES2022, @/* alias)
├── postcss.config.mjs                # PostCSS config (Tailwind CSS v4)
├── components.json                   # shadcn/ui config
├── Dockerfile                        # Multi-stage Docker build for Cloud Run
├── .env.local.example                # Environment variable template
└── .dockerignore
```

---

## Pages and Routes

| Route | Render Type | Description |
|---|---|---|
| `/` | Static | Home page — full narrative scroll with 18+ sections |
| `/what-we-offer` | Static | AI infrastructure overview |
| `/services` | Static | Catalogue of 12 AI service offerings |
| `/work` | ISR (5 min) | Work grid, fetches live deployments from backend |
| `/work/[slug]` | Dynamic SSR | Case study detail with demo, metrics, workflow image |
| `/process` | Static | 5-step engagement process |
| `/about` | Static | Founder profile, principles, company stats |
| `/contact` | Static | Contact form (sends via Resend API) |
| `/reviews` | ISR (5 min) | Client reviews from outreach backend |
| `/briefings` | Static | Intelligence briefings index |
| `/briefings/[slug]` | SSG | Individual briefing article |
| `/industries` | Static | Industries served |
| `/security` | Static | Security and compliance |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of service |
| `/booklet/view` | Static | General sales booklet (print-ready A4) |
| `/bookletD2C` | Static | D2C / e-commerce booklet |
| `/bookletHealthcare` | Static | Healthcare booklet |
| `/bookletmarketing` | Static | Marketing agencies booklet |
| `/api/contact` | API Route | POST — contact form via Resend |
| `/sitemap.xml` | Generated | Full XML sitemap |
| `/robots.txt` | Generated | Allows all crawlers |
| `/opengraph-image` | Generated | Dynamic OG image |

> **Redirect:** `/demos` permanently redirects to `/work` (in `next.config.mjs`)

---

## Component Architecture

### Layout (`src/components/layout/`)

| Component | Purpose |
|---|---|
| `Navbar.tsx` | Scroll-aware navbar with auto-hide on scroll-down, mobile drawer, Cmd+K hint, active-route indicator |
| `Footer.tsx` | Site footer with nav links, socials, legal links |
| `ChromeShell.tsx` | Layout wrapper composing Navbar + children + Footer |
| `Logo.tsx` | Nuvero brandmark (mark-red.png) with wordmark |
| `ScrollProgressBar.tsx` | Thin red progress indicator at top of viewport |

### Home Page Sections (`src/components/home/`)

| Component | Description |
|---|---|
| `Hero.tsx` | Full-screen animated hero with tagline and CTA |
| `OpsLedger.tsx` | Ledger-style list of manual operations AI replaces |
| `Switchboard.tsx` | Interactive tabbed system showcase |
| `AgentRoster.tsx` | Grid of AI agent types Nuvero deploys |
| `WiringDiagram.tsx` | Animated diagram showing how systems interconnect |
| `WhatWeOffer.tsx` | Infrastructure layer overview cards |
| `ServicesPreview.tsx` | Preview cards for all 12 service offerings |
| `ComparisonTable.tsx` | Nuvero vs. alternatives comparison table |
| `FeaturedWork.tsx` | Featured case study highlight cards |
| `FromTheWorkshop.tsx` | Intelligence briefings teaser section |
| `StatsBar.tsx` | Key stats: 47+ systems, 1.4M+ interactions, etc. |
| `TrustStrip.tsx` | Client trust strip |
| `ProcessSnapshot.tsx` | Condensed 5-step process overview |
| `Governance.tsx` | Security and governance callout |
| `AuditDeliverables.tsx` | AI audit deliverables list |
| `RoiEstimator.tsx` | Interactive ROI calculator with Radix sliders |
| `Testimonials.tsx` | Client testimonial cards |
| `GlassBox.tsx` | Feature highlight glass-style box |
| `FaqStrip.tsx` | Inline FAQ accordion |
| `CtaBanner.tsx` | Bottom call-to-action banner |
| `NetworkField.tsx` | Animated connection network visual |
| `ScrollWordHighlight.tsx` | Scroll-triggered word highlight animation |
| `TechStackMarquee.tsx` | Infinite scrolling marquee of workflow categories |

### Shared Primitives (`src/components/shared/`)

| Component | Purpose |
|---|---|
| `Reveal.tsx` | Framer Motion scroll-reveal wrapper (respects prefers-reduced-motion) |
| `SmoothScroll.tsx` | Lenis smooth scroll + GSAP ScrollTrigger (desktop pointer only) |
| `CommandPalette.tsx` | Cmd+K / Ctrl+K palette with all pages, case studies, services, briefings |
| `LoadingScreen.tsx` | Full-screen branded loading animation on first visit |
| `ContactForm.tsx` | Multi-field contact form with validation and toast feedback |
| `QuickContact.tsx` | Floating quick-contact slide-in panel |
| `GridBackground.tsx` | Subtle CSS grid overlay for section backgrounds |
| `DotGridBackground.tsx` | Radial dot pattern background |
| `DotGridWrapper.tsx` | Fixed full-page dot grid wrapper |
| `GradientOrb.tsx` | Decorative blurred gradient orb element |
| `Marquee.tsx` | Infinite CSS marquee with pause-on-hover |
| `MaskReveal.tsx` | Clip-path mask reveal animation |
| `SchematicBeam.tsx` | Animated schematic beam visual element |
| `GlowButton.tsx` | Branded button with glow/shadow hover effect |
| `Magnetic.tsx` | Cursor-magnetic hover effect wrapper |
| `CountUp.tsx` | Animated number count-up on scroll into view |
| `SectionHeader.tsx` | Consistent eyebrow + heading section header |
| `SocialLinks.tsx` | Branded social media link pills |
| `AvailabilityBanner.tsx` | "Currently taking on new clients" banner strip |
| `FaqAccordion.tsx` | Radix UI accordion for FAQs |
| `NoiseOverlay.tsx` | Subtle CSS noise texture overlay |
| `Perforation.tsx` | Dotted tear-line decorative separator |

### UI Primitives (`src/components/ui/`)

All generated via shadcn/ui, mapped to the site's design tokens:

`accordion`, `badge`, `breadcrumb`, `command`, `dialog`, `kbd`, `navigation-menu`, `progress`, `slider`, `sonner` (toast), `table`, `tabs`, `tooltip`

### Booklet System (`src/components/booklet*/`)

Four print-ready A4 booklet variants for different verticals:

| Booklet | Route | Target Audience |
|---|---|---|
| General | `/booklet/view` | All industries |
| D2C | `/bookletD2C` | E-commerce / D2C brands |
| Healthcare | `/bookletHealthcare` | Healthcare and clinics |
| Marketing | `/bookletmarketing` | Marketing agencies |

Each booklet is composed of 8-16 "poster" components using the `.poster` CSS class for A4 sizing (210mm x 297mm). They render correctly in-browser and via `window.print()`.

---

## Content Layer

All content is static TypeScript in `src/content/`. No CMS is used. To update content, edit these files and redeploy.

### `site.ts`
Global config: site name, tagline, URL, founder details, contact info (email, phone, WhatsApp), social links, and navigation structure. Used throughout the app and exported as `const site`.

### `caseStudies.ts`
14 case study records. Each has:
- `slug` — used for `/work/[slug]` routing
- `client`, `industry`, `year`, `duration`, `featured`, `gradient`
- `image` — workflow diagram path (`/workflows/*.webp`)
- `snapshot` — demo screenshot path (`/demos/*.webp`)
- `demoUrl`, `demoPasscode`, `runningCost` — for live demo panel
- `challenge`, `approach[]`, `solution[]` — narrative copy sections
- `results[]` — `{ metric, label }` pairs for metric cards
- `tech[]` — technology badge list

> **Live feed:** `/work` and `/work/[slug]` also pull from `DEPLOYMENTS_API_URL` with 5-min ISR revalidation. Local `caseStudies.ts` is the fallback.

### `services.ts`
12 AI service offerings with `slug`, `title`, `tagline`, `problem`, `solution[]`, `deliverables[]`, `tech[]`, `icon` (Lucide), `accent`, and optional `overviewUrl`.

### `briefings.ts`
3 long-form thought-leadership articles. Body is a typed block array: `p`, `h`, `list`, `callout`, `ledger` (structured table).

### `industries.ts`
10 industry verticals with Lucide icon, headline, and 3 use cases each.

### `testimonials.ts`
6 curated client testimonials. The `/reviews` page augments these with a live feed from the outreach backend API.

### `faqs.ts`
9 FAQ entries used in the `FaqStrip` home section and `/contact` page.

### `process.ts`
5 named engagement phases (Understand > Design > Build > Integrate > Scale) with duration, summary, and bullet points.

### `techStack.ts`
- `techStack[]` — 24 automatable workflow categories for the infinite marquee
- `principles[]` — 4 company operating principles
- `aboutStats[]` — key metrics (47+ systems, 94% retention, 1.4M+ interactions, 11 industries)

### `sectors.ts`
Sector-specific copy used by the four booklet variants.

---

## Library Utilities

### `lib/deployments.ts`
Fetches the live deployments feed from `DEPLOYMENTS_API_URL` (defaults to the GCP Cloud Run endpoint). Validates all URL fields via `safeLink` and `safeAsset` helpers before using them in `next/image` or `<a href>`. Merges feed records with local content (local fills in `demoUrl`, `passcode`, `snapshot` the feed may not carry). Falls back entirely to `caseStudies.ts` if the feed is empty or unreachable.

### `lib/reviews.ts`
Same architecture as `deployments.ts`. Fetches live reviews from `REVIEWS_API_URL`. Falls back to `testimonials.ts`.

### `lib/motion.ts`
Single source of truth for animation constants used across GSAP and Framer Motion:
- `EASE` — `[0.22, 1, 0.36, 1]` cubic-bezier (for Framer Motion)
- `EASE_CSS`, `EASE_GSAP`, `EASE_OUT_GSAP` — string variants for CSS and GSAP
- `DURATION` — `{ fast: 0.3, base: 0.6, slow: 1.1 }` seconds
- `useIsomorphicLayoutEffect` — SSR-safe layout effect for GSAP pin cleanup (avoids crash on client-side navigation)

### `lib/utils.ts`
`cn(...inputs)` — Merges Tailwind class strings using `clsx` + `tailwind-merge` to resolve conflicting utilities.

---

## API Routes

### `POST /api/contact`

Handles contact form submissions with multiple security layers:

- **Rate limiting:** Max 5 requests per IP per 5 minutes (in-memory Map, resets per window)
- **Input sanitization:** All fields trimmed and capped at 2000 characters
- **HTML escaping:** User values entity-escaped before interpolation into the email HTML body
- **IP spoofing protection:** Reads `X-Forwarded-For` correctly for GCP Cloud Run's double-hop header chain (reads second-to-last entry — the first is attacker-controlled, the last is the load balancer)
- **Email delivery:** Via Resend with branded HTML template

**Required env var:** `RESEND_API_KEY`
**Optional:** `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`

---

## Design System

Defined in `src/app/globals.css` as Tailwind v4 `@theme` CSS custom properties.

### Color Palette

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FDF0D5` | Page background (warm cream) |
| `--color-bg-elev` | `#F5E4C0` | Elevated surface / cards |
| `--color-surface` | `#EDD89D` | Deeper surface |
| `--color-border` | `#003049` | Default border (dark navy) |
| `--color-fg` | `#003049` | Primary text |
| `--color-fg-muted` | `#1a4a66` | Secondary text |
| `--color-fg-subtle` | `#4a6a80` | Tertiary text / labels |
| `--color-brand` | `#C1121F` | Primary brand red |
| `--color-brand-strong` | `#780000` | Deep brand red |
| `--color-accent` | `#669BBC` | Accent blue |
| `--color-success` | `#2D7A4F` | Success green |

Design language: warm parchment background + navy borders + red accents — a deliberate "field journal" / analogue aesthetic. No dark mode.

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-sans` / `--font-display` | DM Sans (Google Fonts) | Body text and headings |
| `--font-mono` | Space Mono (Google Fonts) | Labels, tags, eyebrows, code |

Both loaded via `next/font/google` with `display: swap`.

### Utility Classes

| Class | Purpose |
|---|---|
| `.container-x` | Max-width 7xl with responsive horizontal padding |
| `.card-surface` | Elevated card with brand-red hover box-shadow |
| `.glass` | Flat glass card (solid elevated surface, no blur) |
| `.grid-bg` | Subtle 48px CSS grid overlay |
| `.dot-bg` | 24px radial dot pattern |
| `.perforation` | Dotted tear-strip decorative border |
| `.border-beam` | Animated conic-gradient border sweep |
| `.shimmer` | Horizontal shimmer animation |
| `.text-stroke-fg` / `.text-stroke-brand` | Outlined / stroke text treatment |
| `.glow-brand` / `.glow-accent` | Offset box-shadow glows |
| `.scrollbar-hide` | Hidden scrollbar (webkit + standard) |

### CSS Animations

| Name | Duration | Purpose |
|---|---|---|
| `marquee` / `marquee-reverse` | 40s | Tech stack infinite scroll |
| `shimmer` | 3s | Loading shimmer |
| `pulse-glow` | 4s | Breathing glow |
| `beam-spin` | 5s | Border beam rotation |
| `accordion-down` / `accordion-up` | 0.2s | Radix accordion height |
| `orbFloat` | 12-18s | Decorative orb float |
| `tab-fade-in` | 0.25s | Tab content fade-in |

All CSS animations are fully disabled by the `prefers-reduced-motion: reduce` media query.

---

## Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | ^15.1.0 | App Router framework |
| `react` / `react-dom` | ^19.0.0 | UI rendering |
| `tailwindcss` | ^4.0.0 | Utility-first CSS |
| `motion` | ^12.0.0 | Framer Motion animations |
| `gsap` | ^3.15.0 | GSAP + ScrollTrigger for scroll sequences |
| `lenis` | ^1.3.25 | Smooth scroll (desktop pointer devices only) |
| `lucide-react` | ^0.469.0 | Icon library (400+ icons) |
| `resend` | ^6.14.0 | Transactional email API for contact form |
| `sonner` | ^2.0.7 | Toast notifications |
| `@vercel/analytics` | ^2.0.1 | Vercel Web Analytics |
| `@vercel/speed-insights` | ^2.0.0 | Vercel Speed Insights (Core Web Vitals) |
| `cmdk` | ^1.1.1 | Command palette (Cmd+K) |
| `clsx` | ^2.1.1 | Conditional class name construction |
| `tailwind-merge` | ^2.6.0 | Resolves conflicting Tailwind utilities |
| `class-variance-authority` | ^0.7.1 | Component variant system (shadcn/ui pattern) |

### Radix UI Primitives

Headless, accessible UI primitives consumed by shadcn/ui components:

| Package | Used For |
|---|---|
| `@radix-ui/react-accordion` | FAQ accordion |
| `@radix-ui/react-dialog` | Modal dialogs, command palette overlay |
| `@radix-ui/react-navigation-menu` | Navbar navigation menu |
| `@radix-ui/react-progress` | Progress bars on case study metrics |
| `@radix-ui/react-slider` | ROI estimator range sliders |
| `@radix-ui/react-slot` | Polymorphic slot (shadcn/ui pattern) |
| `@radix-ui/react-tabs` | Switchboard tabs |
| `@radix-ui/react-tooltip` | Tooltip primitive |

### Dev Dependencies

| Package | Purpose |
|---|---|
| `@tailwindcss/postcss` | Tailwind v4 PostCSS integration |
| `@types/node` | Node.js TypeScript type declarations |
| `@types/react` / `@types/react-dom` | React TypeScript type declarations |
| `typescript` | ^5.7.0 — type checking (strict mode) |
| `shadcn` | CLI for adding / updating shadcn/ui components |
| `sharp` | Native C++ image processing for next/image (enables AVIF/WebP, fast resizing) |

---

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```env
# Required — get your key at resend.com
RESEND_API_KEY=your_resend_api_key_here

# Optional — contact form routing (from address must be on a Resend-verified domain)
CONTACT_FROM_EMAIL="Nuvero AI <noreply@nuvero.space>"
CONTACT_TO_EMAIL=nuveroai@gmail.com

# Optional — live deployments feed (has a working production default)
DEPLOYMENTS_API_URL=https://your-backend.run.app/api/deployments/public

# Optional — live reviews feed (has a working production default)
REVIEWS_API_URL=https://your-backend.run.app/api/reviews/public
```

Without `RESEND_API_KEY` the contact form returns HTTP 500. All other variables have working defaults for development.

---

## Scripts and Tooling

### npm Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at http://localhost:3000 |
| `npm run build` | Build for production (standalone Next.js output) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint via Next.js built-in lint config |

### Custom Utility Scripts (`scripts/`)

**`scripts/optimize-images.mjs`**
`node scripts/optimize-images.mjs`

Converts `public/bhumit.png`, all `public/workflows/*.png`, and all `public/demos/*.png` to WebP format using `sharp`. Automatically resizes 4K (3840px) source images to 1920px width. Logs the size delta and percentage reduction for each image. Run once whenever new raw PNG images are added to `public/`.

**`scripts/update-content-paths.mjs`**
`node scripts/update-content-paths.mjs`

Batch-replaces `.png` file extensions with `.webp` in `src/content/caseStudies.ts` so code references stay in sync after running `optimize-images.mjs`.

---

## Image Assets

All production images have been optimized to WebP format.

| Directory | Content | Typical File Size |
|---|---|---|
| `public/` | `bhumit.webp` (founder photo), logos | 78 KB |
| `public/workflows/` | 11 n8n workflow diagrams at 1920px width | ~100 KB each |
| `public/demos/` | 7 live demo screenshots at 1920px width | ~65 KB each |
| `public/brand/` | `mark-red.png`, `mark-white.png` logo marks | ~20 KB each |

**Total before optimization:** ~10.73 MB
**Total after optimization:** ~1.59 MB (**-85.2%, saving 9.14 MB**)

### Next.js Image Configuration (`next.config.mjs`)

```js
images: {
  formats: ['image/avif', 'image/webp'],  // serve AVIF to capable browsers, WebP otherwise
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'storage.googleapis.com',
      pathname: '/nuveroai-deployment-images/**',
    },
  ],
},
```

`sharp` is installed to enable native-speed image resizing and conversion in the `/_next/image` optimization endpoint.

---

## Deployment

### Docker / Google Cloud Run

Multi-stage Dockerfile:

1. **`deps` stage** — installs all `node_modules`
2. **`builder` stage** — runs `npm run build` producing a standalone output
3. **`runner` stage** — minimal Alpine production image, runs on port 8080

```bash
# Build the image
docker build -t nexora-ai .

# Run locally
docker run -p 8080:8080 -e RESEND_API_KEY=your_key nexora-ai
```

| Setting | Value |
|---|---|
| Base image | node:20-alpine |
| Exposed port | 8080 (Google Cloud Run default) |
| Next.js output | standalone |
| Telemetry | Disabled (NEXT_TELEMETRY_DISABLED=1) |
| Runs as | non-root `nextjs` user (uid 1001) |

---

## SEO and Metadata

### Global Metadata (`src/app/layout.tsx`)
- Title template: `%s · Nuvero AI`
- Full Open Graph tags (type, locale, URL, siteName, description)
- Twitter card: `summary_large_image`
- Keywords: AI infrastructure, agentic AI, voice agents, RAG, automation, etc.
- Theme color: `#FDF0D5` (matches brand background)
- Robots: `index: true, follow: true`

### Per-Page Metadata
Every page file exports a `metadata` object with `title`, `description`, and `alternates.canonical`.

### Structured Data (`src/components/seo/JsonLd.tsx`)
Schema.org JSON-LD injected in the root layout via `<script type="application/ld+json">`:
- `Organization` — name, URL, logo, description, email, founder, social profiles (`sameAs`)
- `WebSite` — name, URL, publisher reference

### Sitemap (`src/app/sitemap.ts`)
Auto-generated at build time including:
- 10 static routes
- All case study slugs from `caseStudies.ts`
- All briefing slugs from `briefings.ts`

### `public/llms.txt`
An LLM-readable plain-text summary following the `llms.txt` convention. Covers company identity, product categories, key stats, industries, security posture, and contact info. Useful for AI crawlers and assistants that reference websites.

---

## Key Patterns and Conventions

### Path Alias
All source imports use the `@/*` alias mapping to `./src/*`, configured in `tsconfig.json`:
```ts
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";
```

### Server vs. Client Components
- **Server components (default):** All page files, data-fetching logic, and static layouts
- **Client components (`"use client"`):** Any component using React hooks, browser APIs, or animation libraries — e.g., `Navbar.tsx`, `CommandPalette.tsx`, `SmoothScroll.tsx`, `RoiEstimator.tsx`, `Reveal.tsx`

### ISR (Incremental Static Regeneration)
`/work` and `/reviews` use `fetch(..., { next: { revalidate: 300 } })`, regenerating the page every 5 minutes in production without requiring a full redeploy.

### Content as Code
No headless CMS is used. All copy, case studies, services, FAQs, testimonials, etc. are TypeScript objects in `src/content/`. Benefits: full type safety, easy refactoring, zero runtime CMS latency or dependency.

### Animation Philosophy
Three animation systems are layered together:
- **Framer Motion** (`motion` package) — scroll-reveal (`Reveal.tsx`), navbar slide, page entry animations. Simple and declarative.
- **GSAP + ScrollTrigger** — complex pinned sequences, progress-driven animations in `Hero.tsx` and advanced sections. Used where Framer Motion's viewport API is insufficient.
- **Lenis** — smooth scroll momentum on desktop pointer devices. Automatically disabled on touch devices and when `prefers-reduced-motion` is active.

All animations degrade gracefully — the site is fully usable with JavaScript disabled or animations turned off.

### Booklets as Print Documents
The four booklet routes render as A4 (210mm x 297mm) "poster" pages using the `.poster` CSS class with `break-after: page` for correct print pagination. "Print / Save as PDF" in-browser produces clean, branded sales collateral. Print-specific styles strip shadows, animations, and decorative elements (`@media print`).

### Contact Form Security
The `/api/contact` route implements four security layers:
1. **Rate limiting** — 5 requests per IP per 5-minute window (in-memory Map)
2. **Sanitization** — all fields trimmed and capped at 2000 characters via `sanitize()`
3. **HTML escaping** — user values entity-escaped via `esc()` before email template interpolation (prevents HTML injection into the notification inbox)
4. **IP header parsing** — correct `X-Forwarded-For` handling for GCP Cloud Run's double-hop setup: reads the second-to-last entry (the load balancer appends its own IP last; the first entry is attacker-controlled and trivially spoofable)

---

*Last updated: September 2026*
