import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChromeShell } from "@/components/layout/ChromeShell";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { ClientOverlays } from "@/components/layout/ClientOverlays";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { InkCursor } from "@/components/fx/InkCursor";
import { SectionIndex } from "@/components/fx/SectionIndex";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DotGridWrapper } from "@/components/shared/DotGridWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import { getSearchIndex } from "@/lib/searchIndex";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI infrastructure",
    "agentic infrastructure",
    "AI systems",
    "AI voice agents",
    "conversational AI",
    "agentic AI",
    "AI workflow automation",
    "marketing automation AI",
    "LinkedIn lead generation",
    "RAG chatbots",
    "AI infrastructure for business",
    "Bhumit Goyal",
  ],
  authors: [{ name: site.founder.name, url: `${site.url}/about` }],
  creator: site.founder.name,
  publisher: site.name,
  category: "technology",
  // Fallbacks only: every route overrides openGraph/twitter via pageMetadata()
  // in src/lib/seo.ts (Next merges these objects shallowly, so a page that
  // doesn't would otherwise inherit the homepage's og:url and title).
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    creator: "@bhumitgoyal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF0D5",
  width: "device-width",
  initialScale: 1,
};

const PREPAINT = `try{var d=document.documentElement;if(localStorage.getItem("nuvero_motion")==="paused")d.dataset.motion="paused";if(!sessionStorage.getItem("nuvero_loaded")&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&!location.pathname.startsWith("/booklet"))d.classList.add("nv-first-visit")}catch(e){}`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchIndex = await getSearchIndex();
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen antialiased">
        {/* Runs before first paint (beforeInteractive is inlined into <head>):
            restores the pause-motion preference and decides whether the
            first-visit preloader shows at all, so it can never flash for
            returning visitors, reduced motion, or no-JS. */}
        <Script id="nv-prepaint" strategy="beforeInteractive">
          {PREPAINT}
        </Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <Analytics />
        <SpeedInsights />
        <SmoothScroll />
        <DotGridWrapper />
        <MotionProvider>
        <TooltipProvider delayDuration={300}>
          {/* scroll progress — CSS scroll-driven timeline, zero JS */}
          <div aria-hidden className="reading-progress" />
          <LoadingScreen />
          <ChromeShell navbar={<Navbar />} footer={<Footer />}>
            {children}
          </ChromeShell>
          <ClientOverlays searchIndex={searchIndex} />
          <SectionIndex />
          <InkCursor />
          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast: "!bg-[var(--color-bg-elev)] !border-[var(--color-border)] !text-[var(--color-fg)] !rounded-none !shadow-[4px_4px_0_var(--color-brand)]",
                title: "!font-display !font-semibold",
                description: "!text-[var(--color-fg-muted)]",
                success: "!border-[var(--color-success)]",
                error: "!border-[var(--color-brand)]",
                actionButton: "!bg-[var(--color-brand)] !text-white",
              },
            }}
          />
        </TooltipProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
