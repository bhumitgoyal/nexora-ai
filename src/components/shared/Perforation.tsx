type PerforationProps = {
  label?: string;
};

// Tear-off perforation between sections — punched holes on a feed edge.
export function Perforation({ label }: PerforationProps) {
  return (
    <div aria-hidden className="relative flex h-8 items-center overflow-hidden">
      <div className="perforation w-full" />
      {label ? (
        <span className="absolute left-1/2 -translate-x-1/2 bg-[var(--color-bg)] px-3 font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--color-fg-subtle)]">
          {label}
        </span>
      ) : null}
    </div>
  );
}
