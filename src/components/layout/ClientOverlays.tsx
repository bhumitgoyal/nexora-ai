"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { SearchEntry } from "@/lib/searchIndex";

// The palette (cmdk + dialog) is only downloaded the first time someone asks
// for it — ⌘K / Ctrl K, or the header search button.
const CommandPalette = dynamic(
  () => import("@/components/shared/CommandPalette").then((m) => m.CommandPalette),
  { ssr: false },
);

const QuickContact = dynamic(
  () => import("@/components/shared/QuickContact").then((m) => m.QuickContact),
  { ssr: false },
);

export function ClientOverlays({ searchIndex }: { searchIndex: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setLoaded(true);
      setOpen((o) => !o);
    };
    const onKey = (e: KeyboardEvent) => {
      // e.key is typed as string but is undefined for some synthesized keydowns
      // (browser autofill, IME composition, certain extensions) - guard it.
      if (e.key?.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("nuvero:command-palette", toggle);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("nuvero:command-palette", toggle);
    };
  }, []);

  return (
    <>
      {loaded ? <CommandPalette open={open} onOpenChange={setOpen} entries={searchIndex} /> : null}
      <QuickContact />
    </>
  );
}
