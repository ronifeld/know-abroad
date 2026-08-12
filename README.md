# Know Abroad

**Know your rights, wherever you land.**

Plain-language legal information for travelers and expats — visa & immigration rules, tenant rights, driving requirements, and remote-work legal status — across 16 countries, sourced directly from official government material.

## Why this exists

I've lived in three (soon four) countries and traveled to many more, and at some point during almost every move I've found myself squinting at a government website trying to figure out how long I can stay, whether my landlord is actually allowed to do that, or what a form printed only in the local language is asking me to sign.

Know Abroad takes that kind of question and answers it in plain language, sourced from official government material, one topic and one destination at a time. It isn't a replacement for a lawyer or the primary source — every page links out to exactly what it was drafted from, and says when it was last checked.

Full story on the [About page](src/app/about/page.tsx) — link will point to the live site once deployed.

## What's here

- **4 scenarios**: Visa & Immigration, Renting & Tenant Rights, Driving Abroad, Working Remotely on a Tourist Stay
- **16 countries** per scenario: Spain, Singapore, UAE, Mexico, France, Japan, UK, Canada, Australia, Ireland, Portugal, Germany, Brazil, Costa Rica, Thailand, South Korea
- Every country page cites the primary/official source(s) it was drafted from, plus a "last verified" date
- A working contact form for reporting outdated or incorrect content

Content is currently written from the perspective of a U.S. passport holder — other passports are a planned addition, not yet built.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, static generation via `generateStaticParams`)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript throughout
- No database — content lives in structured, typed data files (`src/data/scenarios/`), not hardcoded in components

## Project structure

```
src/
├─ app/
│  ├─ [scenario]/            # country picker for a scenario, e.g. /renting
│  ├─ [scenario]/[country]/  # country detail page, e.g. /renting/spain
│  ├─ about/
│  └─ contact/
├─ components/                # generic, scenario-agnostic UI (SectionRenderer,
│                              # GotchaCallout, SourcesList, etc.)
├─ data/scenarios/             # the actual content — one file per scenario
├─ lib/                        # data-access helpers
└─ types/scenario.ts           # the content model every scenario/country follows
```

Adding a new scenario is a data change, not a UI change: define a `Scenario` with its own section labels in `src/data/scenarios/`, register it in `src/data/scenarios/index.ts`, done.

## Running locally

```bash
npm install
npm run dev
```

## Disclaimer

Informational only, not legal advice. Immigration, tenancy, and tax rules change frequently and vary by individual circumstance — verify with an official government source or a licensed professional before making a decision based on anything here.
