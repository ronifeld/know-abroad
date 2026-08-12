// Card on a scenario's country picker page, linking to /[scenario]/[country].
import Link from "next/link";
import type { CountryContent } from "@/types/scenario";

export default function CountryCard({
  country,
  scenarioSlug,
}: {
  country: CountryContent;
  scenarioSlug: string;
}) {
  return (
    <Link
      href={`/${scenarioSlug}/${country.slug}`}
      className="group flex items-center gap-4 rounded-md border border-border bg-surface p-5 transition-colors hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="text-2xl leading-none" aria-hidden="true">
        {country.flagEmoji}
      </span>
      <span className="font-heading text-base font-semibold text-foreground">
        {country.name}
      </span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="ml-auto h-5 w-5 flex-shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
