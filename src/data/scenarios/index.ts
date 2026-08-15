import type { Scenario } from "@/types/scenario";
import { visaImmigrationCountries } from "./visa-immigration";
import { rentingCountries } from "./renting";
import { drivingCountries } from "./driving";
import { remoteWorkCountries } from "./remote-work";
import { healthEmergenciesCountries } from "./health-emergencies";

export const scenarios: Scenario[] = [
  {
    slug: "visa-immigration",
    title: "Visa & Immigration",
    shortLabel: "Visa & Immigration",
    description:
      "Common entry types, overstay consequences, and renewal paths for a set of destination countries.",
    gotchaLabel: "The Gotcha",
    countries: visaImmigrationCountries,
  },
  {
    slug: "renting",
    title: "Renting & Tenant Rights",
    shortLabel: "Renting & Tenant Rights",
    description:
      "Deposit rules, notice periods, and eviction protections for renters abroad.",
    gotchaLabel: "The Gotcha",
    countries: rentingCountries,
  },
  {
    slug: "driving",
    title: "Driving Abroad",
    shortLabel: "Driving Abroad",
    description:
      "License requirements, insurance rules, and common tourist driving fines.",
    gotchaLabel: "The Gotcha",
    countries: drivingCountries,
  },
  {
    slug: "remote-work",
    title: "Working Remotely on a Tourist Stay",
    shortLabel: "Remote Work Legal Status",
    description:
      "Whether logging into your U.S. job counts as illegal work abroad, tax-residency triggers, and when you're expected to switch to a proper remote-work visa.",
    gotchaLabel: "The Gotcha",
    countries: remoteWorkCountries,
  },
  {
    slug: "health-emergencies",
    title: "Health & Medical Emergencies",
    shortLabel: "Health Emergencies",
    description:
      "Who to call for an ambulance, and what to actually expect at a hospital as a foreigner.",
    gotchaLabel: "The Gotcha",
    countries: healthEmergenciesCountries,
  },
];
