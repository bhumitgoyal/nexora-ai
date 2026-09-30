type PerforationProps = {
  label?: string;
};

// Tear-off perforation between sections - punched holes on a feed edge.
export function Perforation({ label }: PerforationProps) {
  return (
    <div aria-hidden className="relative flex h-8 items-center overflow-hidden">
      <div className="perforation w-full" />
      {label ? (
        <span className="eyebrow absolute left-1/2 -translate-x-1/2 bg-[var(--color-bg)] px-3 text-[var(--color-fg-muted)]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
