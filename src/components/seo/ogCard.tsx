import { ImageResponse } from "next/og";

// Shared renderer for the per-route 1200x630 share cards. Same visual language
// as src/app/opengraph-image.tsx: cream paper, ink type, red accent bar, square
// corners, hard offset shadow on the eyebrow stamp. Uses next/og's built-in
// font (no network fetch at build) so a card can never fail on a font download.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const CREAM = "#FDF0D5";
const INK = "#003049";
const RED = "#C1121F";
const MUTED = "#3a5a6a";

type OgCardProps = {
  /** Mono stamp above the headline, e.g. "BRIEFING · REPORT". */
  eyebrow: string;
  title: string;
  /** One supporting line under the headline. */
  subtitle?: string;
  /** Bottom-left label, e.g. "nuvero.space/work". */
  footer?: string;
  /** Optional big red stat on the right, e.g. { value: "97%", label: "calls resolved" }. */
  stat?: { value: string; label: string };
};

function clip(text: string, max: number) {
  return text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

export function ogCard({ eyebrow, title, subtitle, footer = "nuvero.space", stat }: OgCardProps) {
  const headline = clip(title, 90);
  const fontSize = headline.length > 60 ? 58 : headline.length > 36 ? 68 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: CREAM,
          color: INK,
          backgroundImage: "radial-gradient(rgba(0,48,73,0.22) 1.4px, transparent 1.4px)",
          backgroundSize: "40px 40px",
          padding: "64px 76px",
          borderBottom: `14px solid ${RED}`,
        }}
      >
        {/* top row: wordmark + eyebrow stamp */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", width: 16, height: 38, backgroundColor: RED, marginRight: 18 }} />
            <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>Nuvero</span>
            <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1, color: RED, marginLeft: 10 }}>AI</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: INK,
              backgroundColor: CREAM,
              border: `3px solid ${INK}`,
              boxShadow: `6px 6px 0 ${INK}`,
              padding: "8px 16px",
            }}
          >
            {clip(eyebrow, 42)}
          </div>
        </div>

        {/* headline + subtitle (+ optional stat) */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: stat ? 760 : 1040 }}>
            <div style={{ display: "flex", fontSize, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2 }}>
              {headline}
            </div>
            {subtitle ? (
              <div style={{ display: "flex", marginTop: 22, fontSize: 26, lineHeight: 1.35, color: MUTED }}>
                {clip(subtitle, 120)}
              </div>
            ) : null}
          </div>
          {stat ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                border: `3px solid ${INK}`,
                boxShadow: `8px 8px 0 ${RED}`,
                backgroundColor: CREAM,
                padding: "18px 24px",
                width: 280,
              }}
            >
              <span style={{ fontSize: 72, fontWeight: 800, color: RED, letterSpacing: -2, lineHeight: 1 }}>
                {clip(stat.value, 8)}
              </span>
              <span style={{ display: "flex", marginTop: 8, fontSize: 20, color: INK, lineHeight: 1.3 }}>
                {clip(stat.label, 60)}
              </span>
            </div>
          ) : null}
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontFamily: "monospace", fontSize: 22, letterSpacing: 1, color: MUTED }}>
            {footer}
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 600 }}>The AI infrastructure your business runs on.</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
