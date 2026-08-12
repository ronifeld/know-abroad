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
