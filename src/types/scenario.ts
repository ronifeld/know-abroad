// Generalized content model. A Scenario (e.g. "Visa & Immigration",
// "Renting & Tenant Rights") is a topic; each scenario has its own set of
// countries, and each country page renders whatever sections that scenario
// defines — section titles are NOT hardcoded to visa language anywhere in
// the components, so a new scenario just needs new data, not new UI code.

export interface NamedItem {
  name: string;
  description: string;
}

// A section holds one of three shapes, rendered generically by the country
// page: a bulleted list of points, a numbered list of steps (for procedural
// content like a renewal path), or a list of named items with their own
// descriptions (e.g. "Common Entry Types", "Deposit Rules by Region").
export type SectionContent =
  | { kind: "list"; items: string[] }
  | { kind: "orderedList"; items: string[] }
  | { kind: "namedList"; items: NamedItem[] };

export interface ContentSection {
  title: string;
  content: SectionContent;
}

export interface Source {
  label: string; // what the linked page/document covers
  publisher: string; // issuing authority, e.g. "USCIS" or "Ministry of Foreign Affairs of Japan"
  url: string;
}

export interface CountryContent {
  slug: string;
  name: string;
  flagEmoji: string;
  lastVerified: string; // ISO date, e.g. "2026-07-01"
  sections: ContentSection[];
  gotcha: string;
  sources: Source[];
}

export interface Scenario {
  slug: string;
  title: string; // e.g. "Visa & Immigration"
  shortLabel: string; // used in breadcrumbs / cards — usually same as title
  description: string;
  gotchaLabel: string; // e.g. "The Gotcha" — scenario can rename this if useful later
  countries: CountryContent[];
}
