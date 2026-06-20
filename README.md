# Nexora AI

> Agentic systems that run your business while you sleep.

The marketing site for **Nexora AI** — an AI consultancy by Bhumit Goyal that designs, builds, and ships agentic systems, voice agents, and AI workflows for businesses.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion (Framer Motion)**.

## Quick start

```powershell
# Install dependencies
npm install

# Copy env template and fill in your Web3Forms key
Copy-Item .env.local.example .env.local

# Start the dev server
npm run dev
```

Open <http://localhost:3000>.

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | optional in dev, required in prod | Public access key for the contact form. Grab one free at <https://web3forms.com>. If unset, the form simulates a successful send for local testing. |

## Scripts

- `npm run dev` — start dev server with HMR
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — Next.js / ESLint check

## Project structure

```
src/
  app/                 # Next.js App Router pages
    layout.tsx
    page.tsx           # /
    services/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    industries/page.tsx
    process/page.tsx
    about/page.tsx
    contact/page.tsx
    not-found.tsx
    loading.tsx
    sitemap.ts
    robots.ts
    globals.css
  components/
    layout/            # Navbar, Footer, Logo
    shared/            # Reusable primitives (Reveal, Marquee, GlowButton, ContactForm, …)
    home/              # Home-page sections
    work/              # WorkGrid (filterable list)
  content/             # All copy + case studies in typed TS
  lib/utils.ts
```

## Editing content

All site copy lives in `src/content/`:

| File | Edits |
| --- | --- |
| `site.ts` | Brand name, tagline, contact info, social URLs, nav |
| `services.ts` | The six service offerings |
| `caseStudies.ts` | Portfolio entries — add/remove/edit case studies here |
| `industries.ts` | Industries served |
| `testimonials.ts` | Client quotes |
| `process.ts` | Engagement process steps |
| `faqs.ts` | Frequently asked questions |
| `techStack.ts` | Tech logos in the marquee + principles + about stats |

Add a case study by appending to `caseStudies` — the dynamic route `/work/[slug]` and the sitemap update automatically.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. In **Project Settings → Environment Variables**, add `NEXT_PUBLIC_WEB3FORMS_KEY`.
4. Deploy. Future pushes to `main` deploy automatically.

Update `site.url` in `src/content/site.ts` to your real domain once you have one — it drives canonical URLs, OG tags, and the sitemap.

## Tech stack

- **Next.js 15** — App Router + React Server Components
- **TypeScript** — strict mode
- **Tailwind CSS v4** — CSS-first, no config file (tokens live in `globals.css`)
- **Motion** — animations (`import { motion } from "motion/react"`)
- **lucide-react** — icons
- **Web3Forms** — contact form delivery (no backend required)

## License

© Bhumit Goyal. All rights reserved.
