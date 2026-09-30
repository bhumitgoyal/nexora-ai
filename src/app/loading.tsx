export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="size-10 animate-spin border-2 border-[var(--color-border-strong)] border-t-[var(--color-accent)]" />
        <span className="eyebrow text-[var(--color-fg-muted)]">
          loading_agent…
        </span>
      </div>
    </div>
  );
}
