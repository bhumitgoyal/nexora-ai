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
    return <main id="main" tabIndex={-1} className="relative z-10 outline-none">{children}</main>;
  }

  return (
    <>
      {navbar}
      <main id="main" tabIndex={-1} className="relative z-10 pt-header outline-none lg:pt-header-lg">{children}</main>
      {footer}
    </>
  );
}
