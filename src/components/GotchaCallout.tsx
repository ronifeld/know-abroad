// Highlighted callout box for a scenario's "gotcha" section on the country
// detail page. Reads as a caution notice, not a marketing badge.
export default function GotchaCallout({
  text,
  label = "The Gotcha",
}: {
  text: string;
  label?: string;
}) {
  return (
    <div className="rounded-md border border-gotcha-border/40 border-l-4 border-l-gotcha-border bg-gotcha-bg px-5 py-4">
      <p className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-gotcha-text">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4 flex-shrink-0"
        >
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 6Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
          />
        </svg>
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-gotcha-text">{text}</p>
    </div>
  );
}
