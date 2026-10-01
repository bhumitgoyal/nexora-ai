// Oversized outlined wordmark that fills with ink as the footer scrolls into
// view — a CSS scroll-driven animation (animation-timeline: view()), zero JS.
// Browsers without it (and reduced motion) just show the filled word.
export function FooterWordmark() {
  return (
    <div aria-hidden className="footer-wordmark relative select-none overflow-hidden border-t-2 border-[var(--color-border)]">
      <div className="container-x relative py-4 md:py-6">
        <span className="wm-outline block font-display text-[clamp(4rem,19vw,17rem)] font-bold leading-[0.8] tracking-[-0.05em]">
          NUVERO
        </span>
        <span className="wm-fill absolute inset-x-6 top-4 block font-display text-[clamp(4rem,19vw,17rem)] font-bold leading-[0.8] tracking-[-0.05em] text-[var(--color-fg)] md:inset-x-10 md:top-6">
          NUVERO
        </span>
      </div>
    </div>
  );
}
