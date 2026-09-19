// Generate on-brand /work thumbnails in the "Newish" poster style: dark charcoal
// ground with an accent radial glow, an accent rounded-tile Lucide icon, the
// client wordmark, a subtitle, an accent underline, and a mono capability line.
// Renders 1600x900 webp into public/posters/<slug>.webp via sharp.
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { mkdirSync } from "node:fs";

const ICON_DIR = "node_modules/lucide-react/dist/esm/icons";

// Pull a Lucide icon's inner SVG markup (white stroke) from its react module.
function lucideInner(name) {
  const src = readFileSync(`${ICON_DIR}/${name}.js`, "utf8");
  const start = src.indexOf("[", src.indexOf("createLucideIcon("));
  // find matching bracket for the children array
  let depth = 0, end = -1;
  for (let i = start; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  const arr = eval("(" + src.slice(start, end + 1) + ")");
  return arr.map(([tag, attrs]) => {
    const a = Object.entries(attrs)
      .filter(([k]) => k !== "key")
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");
    return `<${tag} ${a} />`;
  }).join("");
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Rough width-fit for the wordmark so long names don't overrun the card.
function fitSize(text, maxWidth, cap = 128, floor = 60, factor = 0.6) {
  const s = Math.floor(maxWidth / (text.length * factor));
  return Math.max(floor, Math.min(cap, s));
}

function poster({ slug, name, subtitle, caps, accent, icon }) {
  const W = 1600, H = 900;
  const inner = lucideInner(icon);
  const nameSize = fitSize(name, 1000, 128, 62);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="78%" cy="28%" r="62%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#141416"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="150" y="300" width="300" height="300" rx="52" fill="${accent}"/>
  <g transform="translate(300 450) scale(6.2) translate(-12 -12)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
  <text x="524" y="${subtitle ? 400 : 470}" font-family="Helvetica, Arial, sans-serif" font-size="${nameSize}" font-weight="700" fill="#ffffff" letter-spacing="-3">${esc(name)}</text>
  <text x="528" y="486" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="700" fill="${accent}" letter-spacing="-1">${esc(subtitle)}</text>
  <rect x="530" y="524" width="150" height="7" fill="${accent}"/>
  <text x="528" y="590" font-family="Menlo, monospace" font-size="29" font-weight="400" fill="#9a9298" letter-spacing="2.5">${esc(caps)}</text>
</svg>`;
  return sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(`public/posters/${slug}.webp`);
}

const DEPLOYMENTS = [
  { slug: "southwest-gases-voice-concierge", name: "Southwest Gases", subtitle: "Voice Concierge", caps: "INBOUND  ·  OUTBOUND  ·  24/7", accent: "#E4572E", icon: "phone" },
  { slug: "southwest-gases-erp", name: "Southwest Gases", subtitle: "Order-to-Cash ERP", caps: "ORDERS  ·  DELIVERY  ·  INVOICING", accent: "#C1121F", icon: "receipt-text" },
  { slug: "southwest-gases-delivery-schedule", name: "Southwest Gases", subtitle: "Delivery Board", caps: "SCHEDULE  ·  DRIVERS  ·  REAL-TIME", accent: "#F2683C", icon: "truck" },
  { slug: "gohappy-club-member-assistant", name: "GoHappy Club", subtitle: "Member Assistant", caps: "WHATSAPP  ·  IN-APP  ·  MULTILINGUAL", accent: "#16A34A", icon: "heart-handshake" },
  { slug: "linkedin-lead-intelligence-engine", name: "Lead Engine", subtitle: "Lead Intelligence", caps: "SCRAPE  ·  ENRICH  ·  VERIFY", accent: "#2563EB", icon: "users" },
  { slug: "ai-marketing-campaign-orchestrator", name: "Marketrz", subtitle: "Campaign Orchestrator", caps: "COPY  ·  ASSETS  ·  A/B TESTS", accent: "#7C3AED", icon: "megaphone" },
  { slug: "adfactors-pr-wire-booking", name: "Adfactors PR", subtitle: "Wire Booking", caps: "178 RATE CARDS  ·  QUOTES  ·  ADMIN", accent: "#0E7C86", icon: "newspaper" },
  { slug: "nuvero-outreach-engine", name: "Nuvero AI", subtitle: "Outreach Engine", caps: "DISCOVER  ·  DRAFT  ·  APPROVE", accent: "#C1121F", icon: "send" },
  { slug: "meridian-realty-inbound-qualifier", name: "Meridian Realty", subtitle: "Inbound Qualifier", caps: "CHAT  ·  VOICE  ·  BOOKINGS", accent: "#0891B2", icon: "building-2" },
  { slug: "northwind-logistics-ops-copilot", name: "Northwind", subtitle: "Ops Copilot", caps: "SOPS  ·  SLACK  ·  CITATIONS", accent: "#EA580C", icon: "package" },
  { slug: "lumina-studios-content-engine", name: "Lumina Studios", subtitle: "Content Engine", caps: "DRAFT  ·  REPURPOSE  ·  SHIP", accent: "#DB2777", icon: "pen-tool" },
  { slug: "vitopia-campus-assistant", name: "VITopia", subtitle: "Campus Assistant", caps: "FFCS  ·  EXAMS  ·  HOSTEL", accent: "#0D9488", icon: "graduation-cap" },
  { slug: "swg-delivery-connector", name: "Southwest Gases", subtitle: "AI Connector (MCP)", caps: "READ-ONLY  ·  CHATGPT  ·  CLAUDE", accent: "#6366F1", icon: "plug" },
  { slug: "nuvero-automation-workflows", name: "Nuvero AI", subtitle: "Automation Workflows", caps: "CONTENT  ·  DISTRIBUTION  ·  FOLLOW-UPS", accent: "#DB2777", icon: "workflow" },
];

mkdirSync("public/posters", { recursive: true });
const res = await Promise.all(DEPLOYMENTS.map((d) => poster(d).then((i) => `${d.slug}: ${i.width}x${i.height}`)));
res.forEach((r) => console.log("  " + r));
console.log(`done. ${res.length} posters written to public/posters/`);
