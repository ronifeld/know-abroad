// Dynamic country detail page, scoped to a scenario. All (scenario, country)
// pairs are known ahead of time, so we prerender via generateStaticParams.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import SectionRenderer from "@/components/SectionRenderer";
import GotchaCallout from "@/components/GotchaCallout";
import SourcesList from "@/components/SourcesList";
import PassportScopeBadge from "@/components/PassportScopeBadge";
import CountryFlag from "@/components/CountryFlag";
import { getAllScenarios, getCountryInScenario } from "@/lib/scenarios";

export async function generateStaticParams() {
  return getAllScenarios().flatMap((scenario) =>
    scenario.countries.map((country) => ({
      scenario: scenario.slug,
      country: country.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ scenario: string; country: string }>;
}): Promise<Metadata> {
  const { scenario: scenarioSlug, country: countrySlug } = await params;
  const match = getCountryInScenario(scenarioSlug, countrySlug);
  return {
    title: match
      ? `${match.country.name} | ${match.scenario.title} | Know Abroad`
      : "Not found",
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ scenario: string; country: string }>;
}) {
  const { scenario: scenarioSlug, country: countrySlug } = await params;
  const match = getCountryInScenario(scenarioSlug, countrySlug);

  if (!match) {
    notFound();
  }

  const { scenario, country } = match;

  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: scenario.shortLabel, href: `/${scenario.slug}` },
            { label: country.name },
          ]}
        />

        <div className="mt-4 mb-8 border-b border-border pb-6">
          <h1 className="flex items-center gap-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            <CountryFlag slug={country.slug} name={country.name} className="h-8 w-[2.667rem] rounded-md sm:h-9 sm:w-12" />
            {country.name}
          </h1>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4c0 .2.08.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V6.75Z"
                clipRule="evenodd"
              />
            </svg>
            Last verified {formatDate(country.lastVerified)}
          </p>
          <div className="mt-2">
            <PassportScopeBadge />
          </div>
        </div>

        <div>
          {country.sections.map((section) => (
            <SectionRenderer key={section.title} section={section} />
          ))}

          <div className="pt-8">
            <GotchaCallout text={country.gotcha} label={scenario.gotchaLabel} />
          </div>

          <SourcesList sources={country.sources} />
        </div>
      </Container>
    </main>
  );
}
