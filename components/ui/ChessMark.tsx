type ChessMarkProps = {
  className?: string;
  /** true = scrolled (white bg → gold pieces), false = transparent (dark bg → white pieces), undefined = currentColor */
  scrolled?: boolean;
};

/**
 * King + Queen chess piece silhouettes, side by side.
 * ViewBox 44×28 → use h-7 w-11 in Tailwind (28px × 44px).
 * King on left (cross at top), Queen on right (3-point crown).
 */
export function ChessMark({ className, scrolled }: ChessMarkProps) {
  const color =
    scrolled === true
      ? "var(--color-accent)"
      : scrolled === false
      ? "#ffffff"
      : "currentColor";

  return (
    <svg
      viewBox="0 0 44 28"
      className={className}
      role="img"
      aria-label="King and queen chess pieces"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transition: "fill 300ms ease" }}
    >
      {/* ── KING (left, centered ~x=10) ─────────────────────── */}
      {/* Cross — vertical bar */}
      <rect x="8.5" y="0" width="3" height="9" rx="0.5" />
      {/* Cross — horizontal bar */}
      <rect x="3" y="2.5" width="14" height="3" rx="0.5" />
      {/* Body — trapezoid widens toward base */}
      <polygon points="4,9 16,9 18,18 2,18" />
      {/* Base band */}
      <rect x="2" y="18" width="16" height="2.5" rx="0.5" />
      {/* Foot */}
      <rect x="1" y="20.5" width="18" height="7" rx="0.5" />

      {/* ── QUEEN (right, centered ~x=34) ───────────────────── */}
      {/* Crown — 3-point silhouette */}
      <polygon points="26,9 27.5,2 31,7 35,0 39,7 42.5,2 44,9" />
      {/* Body — slight trapezoid */}
      <polygon points="27,9 43,9 44,18 26,18" />
      {/* Base band */}
      <rect x="25" y="18" width="19" height="2.5" rx="0.5" />
      {/* Foot */}
      <rect x="24" y="20.5" width="20" height="7" rx="0.5" />
    </svg>
  );
}
