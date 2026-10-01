import { cn } from "@/lib/utils";

// Link label that rolls up to an identical copy on hover (pure CSS, .roll in
// globals.css). The copy is aria-hidden so it's announced once.
export function RollText({ children, className }: { children: string; className?: string }) {
  return (
    <span className={cn("roll", className)}>
      <span className="roll-a">{children}</span>
      <span aria-hidden className="roll-b">
        {children}
      </span>
    </span>
  );
}
