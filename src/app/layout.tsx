import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChromeShell } from "@/components/layout/ChromeShell";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CommandPalette } from "@/components/shared/CommandPalette";
import { QuickContact } from "@/components/shared/QuickContact";
import { DotGridWrapper } from "@/components/shared/DotGridWrapper";
import { site } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
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
    default: `${site.name} ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI agency",
    "AI consultancy",
    "AI voice agents",
    "conversational AI",
    "agentic AI",
    "AI workflow automation",
    "marketing automation AI",
    "LinkedIn lead generation",
    "RAG chatbots",
    "AI strategy consulting",
    "Bhumit Goyal",
  ],
  authors: [{ name: site.founder.name }],
  creator: site.founder.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} ${site.tagline}`,
    description: site.description,
    creator: "@bhumitgoyal",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FDF0D5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="relative min-h-screen antialiased">
        <DotGridWrapper />
        <TooltipProvider delayDuration={300}>
          <ScrollProgressBar />
          <LoadingScreen />
          <NoiseOverlay />
          <ChromeShell navbar={<Navbar />} footer={<Footer />}>
            {children}
          </ChromeShell>
          <CommandPalette />
          <QuickContact />
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
      </body>
    </html>
  );
}
