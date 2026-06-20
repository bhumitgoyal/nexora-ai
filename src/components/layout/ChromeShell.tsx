"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type ChromeShellProps = {
  navbar: ReactNode;
  footer: ReactNode;
  children: ReactNode;
};

/**
 * Renders the global navbar/footer chrome around the page. Hidden on the
 * /booklet route so the printable booklet renders edge-to-edge.
 */
export function ChromeShell({ navbar, footer, children }: ChromeShellProps) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/booklet") ?? false;

  if (bare) {
    return <main className="relative z-10">{children}</main>;
  }

  return (
    <>
      {navbar}
      <main className="relative z-10 pt-16 md:pt-20">{children}</main>
      {footer}
    </>
  );
}
