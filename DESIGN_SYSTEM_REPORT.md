# Nexora AI — Complete Design System Report
### For use with any LLM to generate brand-matched PDFs

---

## HOW TO USE THIS DOCUMENT

Paste this entire document into any LLM (Claude, GPT-4o, Gemini, etc.) followed by your content instructions. Example prompt:

> "Using the design system below, structure the following content into a PDF proposal for [client name]. Apply all colors, fonts, spacing, and component patterns exactly as specified."

---

## 1. BRAND IDENTITY OVERVIEW

**Company name:** Nexora AI  
**Brand voice:** Direct, no-fluff, technically credible. Speaks to operators and founders. Never uses jargon without explaining it. Confident but not arrogant.  
**Design philosophy:** 2D flat design with sharp angles. No rounded corners, no gradients, no blur effects, no drop shadows. Everything is crisp, geometric, and editorial — like a high-end printed document.  
**Mood:** Modern industrial. Think engineering drawing meets editorial design. Clean grids, strong borders, deliberate color use.

---

## 2. COLOR SYSTEM

Use these exact hex codes. Every color has a defined role — do not swap them.

### Primary Palette

| Token | Hex | Role |
|---|---|---|
| Background | `#FDF0D5` | Page/canvas background. Cream/warm white. Use as the base of every page. |
| Background Elevated | `#F5E4C0` | Slightly darker cream. Use for cards, sidebars, headers, alternating rows. |
| Surface | `#EDD89D` | Deepest cream. Use for active states, pressed states, highlighted cells. |
| Brand | `#C1121F` | Primary red. Main action color — CTAs, key headlines, accent lines, bullets, active states. |
| Brand Strong | `#780000` | Dark red. Use for hover states on red elements, strong borders, emphasis. |
| Accent | `#669BBC` | Steel blue. Secondary accent — icons, links, subtle highlights, secondary info. |
| Accent Strong | `#4A7FA0` | Darker steel blue. Use for hover states on blue elements. |

### Text Colors

| Token | Hex | Role |
|---|---|---|
| Foreground | `#003049` | Primary text. Navy. Use for all body copy, headings, labels. |
| Foreground Muted | `#1A4A66` | Secondary text. Lighter navy. Use for descriptions, subtitles, supporting copy. |
| Foreground Subtle | `#4A6A80` | Tertiary text. Use for captions, timestamps, metadata, placeholder text. |

### Semantic Colors

| Token | Hex | Role |
|---|---|---|
| Border | `#003049` | Default border color — same as primary text. Creates strong, legible borders. |
| Border Strong | `#780000` | Emphasis border — same as brand strong. Use sparingly for important dividers. |
| Success | `#2D7A4F` | Green. Positive indicators, completed states, tick marks. |
| Danger | `#C1121F` | Same as brand red. Error states, warnings. |

### Color Usage Rules

1. **Never** use gradients between colors. All fills are flat/solid.
2. **White** (`#FFFFFF`) can be used for text on red backgrounds and for icon fills on colored elements.
3. **Black** is never used — use `#003049` (navy) instead.
4. The **cream background** (#FDF0D5) should dominate. Red is an accent, not a background.
5. Red backgrounds (`#C1121F`) are reserved for: the logo mark, primary CTA buttons, active tab selectors, and key highlight boxes.
6. Alternate page/section backgrounds between `#FDF0D5` and `#F5E4C0` for visual rhythm.

---

## 3. TYPOGRAPHY SYSTEM

### Font Stack

| Role | Font Family | Fallback |
|---|---|---|
| Display / Headings | **Space Grotesk** | system-ui, sans-serif |
| Body / UI Text | **Inter** | system-ui, sans-serif |
| Monospace / Code / Labels | **JetBrains Mono** | ui-monospace, monospace |

> **PDF note:** If Space Grotesk is unavailable, use **DM Sans** or **Plus Jakarta Sans**. If Inter is unavailable, use **Helvetica Neue** or **Arial**. If JetBrains Mono is unavailable, use **Courier New**.

### Type Scale

| Level | Font | Size | Weight | Letter Spacing | Line Height | Use |
|---|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 56–80pt | 600 (SemiBold) | -0.02em | 1.0 | Hero headline, cover page title |
| H2 | Space Grotesk | 36–48pt | 600 | -0.02em | 1.05 | Section headings |
| H3 | Space Grotesk | 24–32pt | 600 | -0.02em | 1.1 | Sub-section headings, card titles |
| H4 | Space Grotesk | 18–22pt | 600 | -0.02em | 1.2 | Card labels, table headers |
| Body Large | Inter | 16–18pt | 400 | 0 | 1.6 | Section descriptions, intro paragraphs |
| Body | Inter | 13–14pt | 400 | 0 | 1.6 | Standard body copy |
| Body Small | Inter | 11–12pt | 400 | 0 | 1.55 | Supporting copy, footnotes |
| Label / Eyebrow | JetBrains Mono | 9–10pt | 500 | 0.18em | 1.4 | Section labels, eyebrow text above headings (ALL CAPS) |
| Caption | JetBrains Mono | 8–9pt | 400 | 0.22em | 1.4 | Page numbers, watermarks, metadata (ALL CAPS) |
| Tag / Chip | JetBrains Mono | 8–10pt | 500 | 0.12em | 1.2 | Badges, tech tags, status chips |

### Typography Rules

1. All headings (H1–H4) use **Space Grotesk SemiBold (600)**, letter-spacing **-0.02em**.
2. Eyebrow labels above headings are **ALL CAPS**, in **JetBrains Mono**, with **tracking 0.18–0.22em**, and are set in Foreground Subtle (`#4A6A80`) or Brand red (`#C1121F`).
3. Body text uses **Inter Regular (400)** at 1.6 line height.
4. Never use font weights below 400 or above 700.
5. The **red** (`#C1121F`) can be applied to specific words within a heading for emphasis — do not apply it to entire paragraphs.
6. Text hierarchy: H2 in navy → Eyebrow label above it in mono caps → Body in muted navy below it.

---

## 4. LOGO SPECIFICATION

### Logo Mark (Icon)

- **Shape:** Square. No border radius. Exact size in logo lockup: 32×32px (scale proportionally for print).
- **Background fill:** `#C1121F` (Brand red).
- **Border:** 2px solid `#C1121F`.
- **Icon inside:** White SVG path on red background. The path traces a stylized "N" letterform.

**SVG path (exact):**
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.4"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 20V4l16 16V4" />
</svg>
```

The path reads: Start bottom-left → go straight up → diagonal to bottom-right → go straight up. This creates an angular "N" shape in white stroke on the red square.

### Logo Wordmark

- **"Nexora"** — Space Grotesk SemiBold (600), color: `#003049` (navy)
- **" AI"** — Space Grotesk SemiBold (600), color: `#C1121F` (red)
- Gap between icon and wordmark: ~10px at standard size.
- The icon and wordmark always appear side by side horizontally. Never stack them vertically.

### Logo Clear Space

Maintain a minimum clear space of 1× the icon height on all sides of the full logo lockup.

### Logo on Dark Surfaces

If a PDF page requires a dark background, invert: use cream (`#FDF0D5`) for "Nexora" and keep "AI" in red. The logo mark square stays red with white icon.

---

## 5. LAYOUT SYSTEM

### Page Dimensions (PDF)

- **A4:** 210mm × 297mm (primary format)
- **US Letter:** 8.5in × 11in (alternate)
- **Margins:** 16–18mm on all sides (equivalent to ~45–51pt)

### Grid

- **Columns:** 12-column grid
- **Content max-width:** 1280px equivalent (for web); scaled proportionally for print
- **Gutters:** 24pt between columns
- **Margins:** 48pt left/right, 64pt top/bottom for standard pages

### Spacing Scale

All spacing follows a base-8 system:

| Token | Value | Use |
|---|---|---|
| XS | 4pt | Tight gaps between inline elements |
| SM | 8pt | Between label and title, icon and text |
| MD | 16pt | Between items in a list |
| LG | 24pt | Between card sections |
| XL | 32pt | Between major blocks within a section |
| 2XL | 48pt | Between sections |
| 3XL | 64pt | Top/bottom section padding |
| 4XL | 96pt | Hero section padding |

### Section Anatomy

Every major section on the website (and PDF) follows this vertical rhythm:

```
[Section Top Border — 1.5pt solid #003049]
[64pt top padding]
  [Eyebrow label — MONO CAPS, #4A6A80]       ← 8pt gap
  [Section Heading — Space Grotesk SemiBold]  ← 16pt gap
  [Subtitle body text — Inter Regular]        ← 48pt gap
  [Content area]
[64pt bottom padding]
[Section Bottom Border — 1.5pt solid #003049, optional]
```

---

## 6. UI COMPONENTS

### Cards

**Standard card:**
- Background: `#F5E4C0` (elevated cream)
- Border: 1.5pt solid `#003049` (navy)
- Border radius: **0** (sharp corners, no rounding)
- Padding: 24pt inside
- Hover/active state: border becomes `#C1121F` (red), and a 4pt solid red offset shadow appears bottom-right: `box-shadow: 4px 4px 0 #C1121F`

**Feature card (highlighted):**
- Same as standard card but with a 2pt red left border accent: `border-left: 4pt solid #C1121F`
- Or: red border on all sides when it's the primary/featured item.

**Card with "corner mark" decoration (used in CTA/highlight boxes):**
- Small L-shaped marks in red at all four corners, 2pt stroke, 20–24pt long each side.
- Creates a "targeting reticle" visual around the box.
- The marks are purely decorative geometric accents.

### Buttons

**Primary button:**
- Background: `#C1121F`
- Border: 2pt solid `#C1121F`
- Text: White (`#FFFFFF`), Inter SemiBold (600), 13–14pt
- Border radius: **0**
- Padding: 12pt vertical, 24pt horizontal
- Hover: background shifts to `#780000`, border to `#780000`
- Arrow icon (→) appears after label text

**Secondary / Outlined button:**
- Background: transparent
- Border: 2pt solid `#003049` (navy)
- Text: `#003049`, Inter SemiBold (600)
- Border radius: **0**
- Padding: 12pt vertical, 24pt horizontal
- Hover: border shifts to `#C1121F`, text shifts to `#C1121F`

### Badges / Eyebrow Labels

- Background: `#F5E4C0`
- Border: 1.5pt solid `#003049`
- Border radius: **0**
- Text: JetBrains Mono, 9–10pt, ALL CAPS, letter-spacing 0.18em, color `#1A4A66`
- Left element: a 6×6pt filled red square (`#C1121F`) — the brand "dot" marker
- Padding: 4pt vertical, 12pt horizontal

**Example appearance:**  
`■ WHAT WE OFFER` — small red square, then the label in mono caps

### Dividers / Rules

- Weight: 1.5pt (standard), 2pt (emphasis)
- Color: `#003049` for standard, `#780000` for strong emphasis
- Never use decorative dividers — always straight horizontal or vertical lines

### Tags / Tech Chips

- Background: `#F5E4C0`
- Border: 1.5pt solid `#003049`
- Border radius: **0**
- Text: JetBrains Mono, 8–9pt, ALL CAPS, letter-spacing 0.12em, color `#4A6A80`
- Left dot: 4×4pt filled red square

### Tables

- Header row: background `#003049`, text white, font Space Grotesk SemiBold, 11pt
- Alternating rows: `#FDF0D5` / `#F5E4C0`
- Border: 1.5pt solid `#003049` on all cells
- No rounded corners anywhere
- Padding: 10pt vertical, 12pt horizontal per cell

### Lists (Bulleted)

- Bullet: a 6×6pt solid red square (`#C1121F`) — not a circle, not a dash
- Indent: 16pt from left margin
- Item spacing: 8pt between items
- Text: Inter Regular, 13–14pt, `#1A4A66`

---

## 7. BACKGROUND TEXTURES

Two subtle textures are used as overlays on page backgrounds:

### Dot Grid
- Pattern: radial dots, `rgba(0, 48, 73, 0.12)` at 1px diameter
- Spacing: 24×24pt grid
- Opacity: 40–60%
- Use: Hero sections, cover pages, intro areas

### Line Grid
- Pattern: `rgba(0, 48, 73, 0.07)` horizontal and vertical lines, 1px
- Spacing: 48×48pt grid
- Opacity: 100% (the lines are already very faint)
- Use: Data sections, tables, structured content areas

**PDF note:** These textures are optional but add authenticity. If your PDF tool supports SVG backgrounds or pattern fills, apply them at very low opacity. If not, omit — the design holds without them.

---

## 8. GEOMETRY AND SHAPE LANGUAGE

This is critical to the aesthetic:

1. **No circles** anywhere in the design (except the brand dot marker, which is a 6×6pt square, not a circle).
2. **No rounded corners** on any element — buttons, cards, images, tags — all sharp.
3. **Right angles only.** The design language is completely orthogonal.
4. **Borders are structural**, not decorative. Every border has a purpose.
5. **Corner accent marks** — the L-shaped red corner marks — are the only permitted geometric decoration. They appear on featured/CTA boxes.
6. **Images** (if used) should be in rectangular crops. No circles, no masks with curves.
7. **Dividing elements** between sections are solid horizontal rules — never wave shapes, diagonals, or decorative cuts.
8. **Icons** should be from a consistent set (Lucide Icons recommended) at 2px stroke weight. They should be set in the same color as surrounding text, or in red for emphasis. Never filled/solid style.

---

## 9. PAGE TEMPLATES FOR PDF

### Template A: Cover Page

```
[Full cream background #FDF0D5 with dot-grid texture at 40% opacity]
[Top: Logo lockup — 32×32pt red square icon + "Nexora AI" wordmark, top-left corner]
[48pt from top, full-width red rule — 2pt solid #C1121F]

[Center of page — vertically centered block:]
  [Eyebrow label in mono caps: e.g., "COMPANY OVERVIEW · 2025"]
  [12pt gap]
  [H1: Main document title in Space Grotesk SemiBold, 56–64pt, navy #003049]
  [Red word emphasis on key phrase — e.g., "Custom AI" in #C1121F]
  [24pt gap]
  [Subtitle in Inter Regular, 16–18pt, muted navy #1A4A66, max 2 lines]

[Bottom 48pt from base:]
  [Left: Company name + contact email in mono, 9pt, subtle navy]
  [Right: Date / version number in mono, 9pt, subtle navy]
  [Full-width 2pt navy rule above this footer]
```

---

### Template B: Section / Chapter Opener

```
[Alternating background: #F5E4C0]
[Top-left: section number in Space Grotesk, 64pt, color #EDD89D (very faint, like a watermark behind content)]
[Eyebrow label in mono caps, red #C1121F: e.g., "■ SECTION 02"]
[16pt gap]
[H2 heading: Space Grotesk SemiBold, 40pt, navy]
[24pt gap]
[Body intro: Inter Regular, 16pt, muted navy, max 3 lines]
[48pt gap]
[Content begins — cards/list/table/etc.]
```

---

### Template C: Content Page (Standard)

```
[Background: #FDF0D5]
[Left margin: thin 1.5pt navy vertical rule, full page height]
[Top: page header — section title in mono caps, 8pt, subtle, right-aligned]

[Content area: 2-column grid or single column depending on content type]

[Cards use card-surface style: #F5E4C0 background, 1.5pt navy border, 0 border radius, 24pt padding]

[Bottom: page number in mono caps, centered — format: "/ 03"]
[Bottom footer rule: 1.5pt navy horizontal line, 8pt above page number]
```

---

### Template D: Service/Product Spotlight

```
[Background: alternating #FDF0D5 or #F5E4C0]
[2-column layout: 45% left / 55% right]

[LEFT COLUMN:]
  [Eyebrow label: "■ FOR [SECTOR NAME]" in mono caps, red]
  [H3 service name: Space Grotesk SemiBold, 28pt, navy]
  [Short tagline: Inter Regular, 15pt, muted navy, italic]
  [24pt gap]
  [4pt solid red left border block containing 3–4 bullet points]
  [Each bullet: red square + Inter body, 13pt]
  [32pt gap]
  [Primary CTA button: "Build this for us →"]
  [Secondary: "Learn more" underlined in red]

[RIGHT COLUMN:]
  [Card with 1.5pt navy border, 0 radius, 24pt padding]
  ["HOW IT WORKS" eyebrow in mono caps]
  [12pt gap]
  [Explanation paragraph in Inter Regular, 13pt, muted navy, 1.6 line height]
```

---

### Template E: Metrics / Stats Page

```
[Background: #F5E4C0]
[H2 heading: "By the numbers" or equivalent]
[48pt gap]
[4-column grid of stat blocks:]

  Each stat block:
  [1.5pt navy border, 0 radius, 32pt padding]
  [Large number: Space Grotesk SemiBold, 48pt, #C1121F (red)]
  [Label: Inter Regular, 13pt, muted navy]

[Below grid — full-width 2pt navy rule]
[Supporting note: "Based on deployed systems as of [date]." — mono caps, 9pt, subtle navy]
```

---

### Template F: Team / About Page

```
[Background: #FDF0D5]
[Section: centered]
[H2: "Built by [Name]" or "About Nexora AI"]
[Sub line: role title in mono caps, 10pt, muted]
[32pt gap]
[2-column grid: left = photo placeholder (rectangle), right = bio text]
  Photo placeholder: 1.5pt navy border, 0 radius, #F5E4C0 fill, aspect ratio 4:5
  Bio text: Inter Regular, 14pt, 1.6 line height, navy
[32pt gap]
[3 stat chips in a row — bordered tags: "47+ systems shipped", "94% retention", "11 industries"]
```

---

### Template G: Proposal / CTA Closing Page

```
[Background: #FDF0D5 with corner accent marks in red]
[Corner marks: 4 L-shaped red marks, 2pt stroke, 28pt × 28pt, at all 4 corners]
[Center content:]
  [Eyebrow: "■ READY TO START?" in mono caps, red]
  [H2: "Your problem is still solvable." — Space Grotesk, 40pt, navy]
  ["solvable." or a key word in red]
  [24pt gap]
  [Body text: invitation to contact, 16pt, muted navy]
  [32pt gap]
  [Primary CTA button: red, "Describe your problem →"]
  [Secondary: "bhumitgoyal.bg@gmail.com" in mono, underlined, navy]
[Bottom: full logo lockup + "nexora-ai.vercel.app" in mono]
```

---

## 10. DECORATIVE ELEMENTS

### The Red Dot / Square Marker
Used as a bullet, list marker, or eyebrow prefix. Always a **filled solid square**, 6×6pt, color `#C1121F`. Never a circle.

### Corner Accent Marks
Used on featured/CTA boxes. 4 L-shaped marks in red (`#C1121F`), 2pt stroke, 24–32pt long per arm, positioned at all four corners outside the box border. Gives the impression of a targeting frame or engineering blueprint callout.

```
┌── ─ ─ ─ ─ ─ ──┐
│                │
│                │
└── ─ ─ ─ ─ ─ ──┘
↑ The ┌ and ┘ shapes are the corner marks, in red, 2pt stroke
```

### Section Number Watermark
On section opener pages, place the section number (01, 02, 03...) in Space Grotesk, 96–120pt, color `#EDD89D` (lightest surface color), behind all other content. Acts as a subtle background element.

### Left-column Vertical Rule
On standard content pages, a 1.5pt `#003049` vertical line runs the full height of the left margin. This grounds the page and references the strict grid system.

---

## 11. EXACT COLOR COMBINATIONS TO USE

| Context | Background | Text | Border | Accent |
|---|---|---|---|---|
| Page background | `#FDF0D5` | `#003049` | `#003049` | `#C1121F` |
| Elevated card | `#F5E4C0` | `#003049` | `#003049` | — |
| Surface element | `#EDD89D` | `#003049` | `#003049` | — |
| Primary button | `#C1121F` | `#FFFFFF` | `#C1121F` | — |
| Outline button | `#FDF0D5` | `#003049` | `#003049` | — |
| Active/selected | `#C1121F` | `#FFFFFF` | `#C1121F` | — |
| Table header | `#003049` | `#FFFFFF` | `#003049` | — |
| Table row (odd) | `#FDF0D5` | `#003049` | `#003049` | — |
| Table row (even) | `#F5E4C0` | `#003049` | `#003049` | — |
| Eyebrow label | `#F5E4C0` | `#4A6A80` | `#003049` | `#C1121F` (dot) |
| Stat highlight | `#F5E4C0` | `#C1121F` | `#003049` | — |
| Success indicator | — | `#2D7A4F` | `#2D7A4F` | — |
| Footer / metadata | `#F5E4C0` | `#4A6A80` | `#003049` | — |

---

## 12. SAMPLE LLM PROMPT TEMPLATE

Copy this, fill in the `[CONTENT]` placeholder, and send to any LLM:

---

```
You are a professional PDF document designer. I will give you content to structure into a 
well-designed PDF document that exactly matches the Nexora AI brand design system below.

DESIGN SYSTEM:
[paste this entire document here]

DOCUMENT TYPE: [e.g., "Client Proposal", "Service Brochure", "Case Study"]

CONTENT TO STRUCTURE:
[paste your content here]

INSTRUCTIONS:
1. Use the exact hex colors specified. Never introduce new colors.
2. All borders and shapes must be sharp (0 border radius).
3. Apply the correct font for each element: Space Grotesk for headings, 
   Inter for body, JetBrains Mono for labels/captions.
4. Use the appropriate page template for each page (see Section 9).
5. Every heading should have an eyebrow label above it in mono caps.
6. Use the red square (■) as the bullet/list marker, not circles or dashes.
7. Alternate page backgrounds between #FDF0D5 and #F5E4C0.
8. Include page numbers in mono caps format: "/ 01", "/ 02", etc.
9. The logo (red square icon + "Nexora AI" wordmark) goes on every page header or footer.
10. Any call-to-action section should use the corner accent marks decoration.

Please output the content structured page by page, describing exactly what appears on 
each page, its layout, colors, and typography — ready for a designer or tool to implement.
```

---

## 13. FONT EMBEDDING CHECKLIST (for PDF tools)

When generating the actual PDF file, embed these fonts:

- [ ] **Space Grotesk** — download from Google Fonts (open source, SIL OFL license)
  - Weights needed: 600 (SemiBold) only
  - URL: fonts.google.com/specimen/Space+Grotesk

- [ ] **Inter** — download from Google Fonts (open source, SIL OFL license)
  - Weights needed: 400 (Regular), 600 (SemiBold)
  - URL: fonts.google.com/specimen/Inter

- [ ] **JetBrains Mono** — download from Google Fonts (open source, SIL OFL license)
  - Weights needed: 400 (Regular), 500 (Medium)
  - URL: fonts.google.com/specimen/JetBrains+Mono

---

## 14. BRAND VOICE FOR PDF COPY

When writing or editing copy for PDFs, follow these rules:

**Do:**
- Lead with the problem, then the solution
- Use short, declarative sentences: "We build custom AI tools. They run your ops."
- Use specific numbers: "47+ systems shipped", "94% client retention"
- Use lowercase for stylistic effect in hero/display headings when appropriate: "custom problems require customized software."
- Use em dashes (—) for parenthetical asides

**Don't:**
- Use buzzwords without explanation (no "synergy", "leverage", "disruptive" without context)
- Use passive voice: not "solutions are built" but "we build solutions"
- Use rounded, corporate language: "We are a leading provider of..."
- Use exclamation marks
- Use more than 2 sentences in any bullet point

**Typical Nexora AI copy patterns:**
- Eyebrow: `■ PROBLEMS WE HAVE ALREADY SOLVED`
- Heading: "Custom AI tools, built around your problem."
- Sub: "Either choose from existing solved problems, or contact us for custom AI tools."
- CTA: "Describe your problem →"
- Footer note: "Custom problems require customized software."

---

## 15. CONTACT & BRAND DETAILS

| Field | Value |
|---|---|
| Company | Nexora AI |
| Founder | Bhumit Goyal |
| Role | Founder & Principal AI Engineer |
| Email | bhumitgoyal.bg@gmail.com |
| Phone | +91 98186 46823 |
| WhatsApp | +919818646823 |
| LinkedIn | linkedin.com/in/bhumitgoyal |
| GitHub | github.com/bhumitgoyal |
| Instagram | instagram.com/bhumitgoyal |
| Location | Remote · India |
| Website | nexora-ai-1002470110590.us-central1.run.app |
| Tagline | "You run it, we handle it." |
| Sub-tagline | "Custom problems require customized software." |

---

*Document version: 1.0 · Generated: June 2026 · Nexora AI Design System*
