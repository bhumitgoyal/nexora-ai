import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-h-11 items-center gap-2.5 font-display text-base font-semibold tracking-tight",
        className,
      )}
    >
      <Image
        src="/brand/mark-red.png"
        alt=""
        width={448}
        height={440}
        priority={priority}
        sizes="32px"
        className="h-8 w-auto"
      />
      <span className="text-[var(--color-fg)]">
        Nuvero <span className="text-[var(--color-brand)]">AI</span>
      </span>
    </Link>
  );
}
