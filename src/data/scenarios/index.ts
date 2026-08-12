import type { Scenario } from "@/types/scenario";
import { visaImmigrationCountries } from "./visa-immigration";
import { rentingCountries } from "./renting";
import { drivingCountries } from "./driving";
import { remoteWorkCountries } from "./remote-work";

export const scenarios: Scenario[] = [
  {
    slug: "visa-immigration",
    title: "Visa & Immigration",
    shortLabel: "Visa & Immigration",
    description:
      "Common entry types, overstay consequences, and renewal paths for a set of destination countries — explained in plain language.",
    gotchaLabel: "The Gotcha",
    countries: visaImmigrationCountries,
  },
  {
    slug: "renting",
    title: "Renting & Tenant Rights",
    shortLabel: "Renting & Tenant Rights",
    description:
      "Deposit rules, notice periods, and eviction protections for renters abroad — explained in plain language.",
    gotchaLabel: "The Gotcha",
    countries: rentingCountries,
  },
  {
    slug: "driving",
    title: "Driving Abroad",
    shortLabel: "Driving Abroad",
    description:
      "License requirements, insurance rules, and common tourist driving fines — explained in plain language.",
    gotchaLabel: "The Gotcha",
    countries: drivingCountries,
  },
  {
    slug: "remote-work",
    title: "Working Remotely on a Tourist Stay",
    shortLabel: "Remote Work Legal Status",
    description:
      "Whether logging into your U.S. job counts as illegal work abroad, tax-residency triggers, and when you're expected to switch to a proper remote-work visa — explained in plain language.",
    gotchaLabel: "The Gotcha",
    countries: remoteWorkCountries,
  },
];
