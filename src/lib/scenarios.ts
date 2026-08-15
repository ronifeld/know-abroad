import { scenarios } from "@/data/scenarios";
import type { CountryContent, Scenario } from "@/types/scenario";

export function getAllScenarios(): Scenario[] {
  return scenarios;
}

export function getScenarioBySlug(slug: string): Scenario | undefined {
  return scenarios.find((s) => s.slug === slug);
}

export function getCountryInScenario(
  scenarioSlug: string,
  countrySlug: string
): { scenario: Scenario; country: CountryContent } | undefined {
  const scenario = getScenarioBySlug(scenarioSlug);
  if (!scenario) return undefined;
  const country = scenario.countries.find((c) => c.slug === countrySlug);
  if (!country) return undefined;
  return { scenario, country };
}

// A country's identity (slug/name/flag), independent of any one scenario.
// The site is organized country-first, but the underlying data is still
// stored per-scenario, so this is derived by scanning every scenario once.
export interface CountrySummary {
  slug: string;
  name: string;
  flagEmoji: string;
}

// Every distinct country across all scenarios, alphabetical by name.
export function getAllCountries(): CountrySummary[] {
  const bySlug = new Map<string, CountrySummary>();
  for (const scenario of scenarios) {
    for (const country of scenario.countries) {
      if (!bySlug.has(country.slug)) {
        bySlug.set(country.slug, {
          slug: country.slug,
          name: country.name,
          flagEmoji: country.flagEmoji,
        });
      }
    }
  }
  return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getCountrySummary(countrySlug: string): CountrySummary | undefined {
  return getAllCountries().find((c) => c.slug === countrySlug);
}

// The scenarios that have content for a given country, in canonical order.
export function getScenariosForCountry(countrySlug: string): Scenario[] {
  return scenarios.filter((s) => s.countries.some((c) => c.slug === countrySlug));
}
