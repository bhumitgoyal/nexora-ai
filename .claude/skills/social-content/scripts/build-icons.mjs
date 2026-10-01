#!/usr/bin/env node
/**
 * Builds assets/icons.svg — an SVG <symbol> sprite of Lucide icons, read straight
 * out of the repo's own lucide-react install so the sprite can never drift from
 * the icon set the website uses.
 *
 *   node .claude/skills/social-content/scripts/build-icons.mjs
 *   node .claude/skills/social-content/scripts/build-icons.mjs brain radar send
 *
 * Extra names passed as args are added to the default set. Run it any time a
 * slide needs an icon the sprite doesn't have yet.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../../..");
const iconDir = resolve(repoRoot, "node_modules/lucide-react/dist/esm/icons");
const out = resolve(here, "../assets/icons.svg");

const DEFAULT = [
  "zap", "bot", "brain", "cpu", "radar", "workflow", "layers", "network",
  "mail", "mail-check", "send", "inbox", "message-square", "phone-call",
  "calendar-check", "clock", "timer", "moon", "sun",
  "search", "filter", "target", "crosshair", "database", "plug", "link",
  "check", "check-check", "circle-check-big", "x", "circle-slash", "triangle-alert",
  "arrow-right", "arrow-down", "corner-down-right", "repeat", "refresh-cw",
  "trending-up", "gauge", "chart-no-axes-column", "users", "user-round-check",
  "handshake", "shield-check", "badge-check", "sparkles", "rocket", "file-text",
  "list-checks", "git-branch", "settings", "pen-line", "eye", "thumbs-up",
];

const names = [...new Set([...DEFAULT, ...process.argv.slice(2)])].sort();
const symbols = [];
const missing = [];

for (const name of names) {
  const file = resolve(iconDir, `${name}.js`);
  if (!existsSync(file)) { missing.push(name); continue; }
  const src = readFileSync(file, "utf8");

  // Each icon module is: createLucideIcon("Name", [ ["tag", {attrs}], ... ])
  const body = src.slice(src.indexOf("createLucideIcon("));
  const nodes = [...body.matchAll(/\[\s*"([a-zA-Z]+)",\s*\{([\s\S]*?)\}\s*\]/g)];
  const parts = nodes.map(([, tag, attrBlock]) => {
    const attrs = [...attrBlock.matchAll(/([a-zA-Z0-9-]+|"[^"]+"):\s*"([^"]*)"/g)]
      .map(([, k, v]) => [k.replace(/"/g, ""), v])
      .filter(([k]) => k !== "key");
    return `<${tag} ${attrs.map(([k, v]) => `${k}="${v}"`).join(" ")}/>`;
  });
  if (!parts.length) { missing.push(name); continue; }

  symbols.push(
    `  <symbol id="i-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
    `stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${parts.join("")}</symbol>`
  );
}

writeFileSync(out, `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
${symbols.join("\n")}
</svg>
`);

console.log(`icons.svg → ${symbols.length} symbols`);
if (missing.length) console.warn(`not found in lucide-react: ${missing.join(", ")}`);
