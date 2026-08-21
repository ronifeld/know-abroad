// A single collapsible FAQ entry. Uses native <details>/<summary> so it's
// accessible and keyboard-operable with zero JS.
export default function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-border bg-surface p-5 shadow-[var(--card-shadow)] transition-all duration-200 open:shadow-[var(--card-shadow-hover)] sm:p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg">
        {question}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {answer}
      </p>
    </details>
  );
}
