// Know Abroad wordmark: globe-with-checkmark icon + two-tone "Know Abroad"
// text, matching the brand mark. Built as SVG/CSS (not an image) so it stays
// crisp at any size and adapts to light/dark theme via the accent tokens.
export default function Logo({
  showTagline = false,
}: {
  showTagline?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="h-8 w-8 flex-shrink-0"
      >
        <circle cx="18" cy="18" r="14" stroke="var(--accent)" strokeWidth="1.75" />
        <ellipse
          cx="18"
          cy="18"
          rx="6"
          ry="14"
          stroke="var(--accent)"
          strokeOpacity="0.55"
          strokeWidth="1.25"
        />
        <path
          d="M4 18h28"
          stroke="var(--accent)"
          strokeOpacity="0.55"
          strokeWidth="1.25"
        />
        <path
          d="M6 11h24M6 25h24"
          stroke="var(--accent)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <circle cx="28" cy="28" r="8" fill="#1d3f7a" />
        <path
          d="M24.2 28.1l2.6 2.6 5-5.4"
          stroke="white"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-extrabold tracking-tight">
          <span style={{ color: "var(--brand-dark)" }}>Know</span>{" "}
          <span style={{ color: "var(--brand-light)" }}>Abroad</span>
        </span>
        {showTagline && (
          <span className="mt-1 text-sm font-medium text-muted">
            Know your rights, wherever you land
          </span>
        )}
      </span>
    </span>
  );
}
