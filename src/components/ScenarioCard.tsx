// Card on the home page linking to a scenario (e.g. "Visa & Immigration").
// More scenarios will be appended later; this component stays generic.
import Link from "next/link";

interface ScenarioCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ScenarioCard({ title, description, href }: ScenarioCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-[var(--card-shadow)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--card-shadow-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          {title}
        </h2>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="mt-1 h-5 w-5 flex-shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </Link>
  );
}
