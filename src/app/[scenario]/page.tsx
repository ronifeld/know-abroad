// Country picker for a given scenario (e.g. /visa-immigration, /renting).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import CountryCard from "@/components/CountryCard";
import PassportScopeBadge from "@/components/PassportScopeBadge";
import { getAllScenarios, getScenarioBySlug } from "@/lib/scenarios";

export async function generateStaticParams() {
  return getAllScenarios().map((s) => ({ scenario: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ scenario: string }>;
}): Promise<Metadata> {
  const { scenario: scenarioSlug } = await params;
  const scenario = getScenarioBySlug(scenarioSlug);
  return {
    title: scenario ? `${scenario.title} | Know Abroad` : "Not found",
  };
}

export default async function ScenarioCountriesPage({
  params,
}: {
  params: Promise<{ scenario: string }>;
}) {
  const { scenario: scenarioSlug } = await params;
  const scenario = getScenarioBySlug(scenarioSlug);

  if (!scenario) {
    notFound();
  }

  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: scenario.shortLabel }]} />
        <div className="mt-4 mb-8 max-w-xl">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Choose a country
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {scenario.description}
          </p>
          <div className="mt-3">
            <PassportScopeBadge />
          </div>
        </div>
        {scenario.countries.length === 0 ? (
          <p className="text-sm text-muted">
            No countries added for this topic yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {scenario.countries.map((country) => (
              <CountryCard key={country.slug} country={country} scenarioSlug={scenario.slug} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
