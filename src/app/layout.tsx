import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChromeShell } from "@/components/layout/ChromeShell";
import { NoiseOverlay } from "@/components/shared/NoiseOverlay";
import { LoadingScreen } from "@/components/shared/LoadingScreen";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
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
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="relative min-h-screen antialiased">
        <LoadingScreen />
        <NoiseOverlay />
        <ChromeShell navbar={<Navbar />} footer={<Footer />}>
          {children}
        </ChromeShell>
      </body>
    </html>
  );
}
