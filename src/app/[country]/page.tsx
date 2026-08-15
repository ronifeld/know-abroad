// Topic picker for a given country (e.g. /spain, /japan): lists the
// scenarios (Visa & Immigration, Renting, Driving, Remote Work) that have
// content for that country.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import ScenarioCard from "@/components/ScenarioCard";
import PassportScopeBadge from "@/components/PassportScopeBadge";
import CountryFlag from "@/components/CountryFlag";
import { getAllCountries, getCountrySummary, getScenariosForCountry } from "@/lib/scenarios";

export async function generateStaticParams() {
  return getAllCountries().map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountrySummary(countrySlug);
  return {
    title: country ? `${country.name} | Know Abroad` : "Not found",
  };
}

export default async function CountryTopicsPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: countrySlug } = await params;
  const country = getCountrySummary(countrySlug);

  if (!country) {
    notFound();
  }

  const scenarios = getScenariosForCountry(countrySlug);

  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: country.name }]} />
        <div className="mt-4 mb-8 max-w-xl">
          <h1 className="flex items-center gap-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            <CountryFlag slug={country.slug} name={country.name} className="h-7 w-[2.333rem] rounded-md sm:h-8 sm:w-[2.667rem]" />
            {country.name}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Choose a topic to see plain-language legal information for{" "}
            {country.name}.
          </p>
          <div className="mt-3">
            <PassportScopeBadge />
          </div>
        </div>
        {scenarios.length === 0 ? (
          <p className="text-sm text-muted">
            No topics added for this country yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.slug}
                title={scenario.title}
                description={scenario.description}
                href={`/${country.slug}/${scenario.slug}`}
              />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
