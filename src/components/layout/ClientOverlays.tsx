"use client";

import dynamic from "next/dynamic";

const CommandPalette = dynamic(
  () => import("@/components/shared/CommandPalette").then((m) => m.CommandPalette),
  { ssr: false }
);

const QuickContact = dynamic(
  () => import("@/components/shared/QuickContact").then((m) => m.QuickContact),
  { ssr: false }
);

export function ClientOverlays() {
  return (
    <>
      <CommandPalette />
      <QuickContact />
    </>
  );
}
