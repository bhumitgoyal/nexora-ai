import Link from "next/link";
import { Lock, Database, Brain } from "lucide-react";

const items = [
  {
    icon: Lock,
    label: "AES-256 encryption",
    detail: "Data in transit (TLS 1.2+) and at rest",
  },
  {
    icon: Database,
    label: "You own all code & data",
    detail: "No retained copies. No lock-in. Ever.",
  },
  {
    icon: Brain,
    label: "We never train on your data",
    detail: "API inference only. Explicit consent required.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elev)] py-10">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-0 md:divide-x md:divide-[var(--color-border)]">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-1 items-start gap-3 px-0 md:px-8 first:pl-0 last:pr-0">
                <Icon className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[var(--color-fg)]">{item.label}</span>
                  <span className="text-xs text-[var(--color-fg-muted)]">{item.detail}</span>
                </div>
              </div>
            );
          })}
          <div className="flex items-center pl-0 md:pl-8">
            <Link
              href="/security"
              className="whitespace-nowrap text-xs font-semibold text-[var(--color-brand)] hover:underline hover:underline-offset-4"
            >
              Full security details →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
