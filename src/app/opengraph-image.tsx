import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Branded 1200x630 social-share card, rendered at build via next/og. Next's
// file convention wires this into og:image / twitter:image automatically, so
// every share (LinkedIn, X, WhatsApp, Slack) gets a real preview with no
// external asset to maintain. Uses the built-in font (no fetch) on purpose.
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FDF0D5",
          color: "#003049",
          backgroundImage: "radial-gradient(#003049 1.4px, transparent 1.4px)",
          backgroundSize: "40px 40px",
          padding: "76px 84px",
        }}
      >
        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", width: 20, height: 46, backgroundColor: "#C1121F", marginRight: 22 }} />
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Nuvero</span>
            <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1, color: "#C1121F", marginLeft: 12 }}>AI</span>
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: -2.5,
            maxWidth: 1000,
          }}
        >
          {site.tagline}
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 27, color: "#3a5a6a", maxWidth: 780 }}>
            The intelligence layer your operations run on.
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600 }}>nuvero.space</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
