// Visa & Immigration scenario. Content drafted from official / authoritative
// sources as of each country's `lastVerified` date; re-check before relying
// on any of it (see the disclaimer banner). Written for U.S. passport
// holders specifically — see PassportScopeBadge.
import type { CountryContent } from "@/types/scenario";

export const visaImmigrationCountries: CountryContent[] = [
  {
    slug: "spain",
    name: "Spain",
    flagEmoji: "🇪🇸",
    lastVerified: "2026-08-06",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Schengen short stay (visa-free)",
              description:
                "As a U.S. citizen, you can enter Spain for tourism or business without a visa, for up to 90 days within any rolling 180-day period, counted across the entire Schengen Area, not reset by border crossings or per country. Heads up: the EU's ETIAS pre-travel authorization will eventually apply to U.S. citizens using this visa-free entry, but its launch has been repeatedly delayed (most recently pushed past 2026) and it is not required yet.",
            },
            {
              name: "National Type D (long-stay) visa",
              description:
                "Required for stays longer than 90 days (work, study, family reunification, non-lucrative residency, etc.). As a U.S. citizen, you must obtain this from a Spanish consulate in the U.S. before traveling. It cannot be arranged after you've already entered on a visa-free tourist stay.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Fines typically range from €501 to €10,000 depending on the length and circumstances of the overstay.",
            "An expulsion order can carry an automatic Schengen-wide entry ban of 3 to 10 years, though recent EU court precedent favors fines over deportation for simple, non-aggravated overstays.",
            "The EU's Entry/Exit System (EES) now digitally logs every border crossing, so overstays are automatically flagged rather than relying on passport stamps.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "There is no in-country renewal for a short Schengen stay. Once your 90 days are used, you must leave the Schengen Area and wait out the rest of the 180-day window before you're eligible to re-enter.",
            "If you'll need more than 90 days, apply for the national Type D visa at a Spanish consulate in the U.S. before you travel.",
            "Since Royal Decree 1155/2024 (in force since May 2025), converting a tourist/Schengen entry into a long-stay authorization from inside Spain is no longer permitted for non-EU nationals, including U.S. citizens. This route, previously available in limited cases, is now closed.",
          ],
        },
      },
    ],
    gotcha:
      "As of May 2025, you, as a U.S. citizen, can no longer enter Spain as a tourist and then apply in-country to convert to a long-stay residency authorization; that option has been closed off. If there's any chance you'll need more than 90 days, you must apply for the national Type D visa at a Spanish consulate in the U.S. before you ever leave home.",
    sources: [
      {
        label: "Schengen border-crossing rules (90/180-day rule)",
        publisher: "European Commission, Migration and Home Affairs",
        url: "https://home-affairs.ec.europa.eu/policies/schengen/border-crossing_en",
      },
      {
        label: "Real Decreto 1155/2024 (Reglamento de Extranjería)",
        publisher: "Boletín Oficial del Estado (BOE)",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099",
      },
      {
        label: "Autorización de residencia de larga duración nacional",
        publisher: "Ministerio de Inclusión, Seguridad Social y Migraciones",
        url: "https://www.inclusion.gob.es/en/web/migraciones/w/49.-autorizacion-de-residencia-de-larga-duracion-nacional",
      },
      {
        label: "Revised timeline for EES and ETIAS",
        publisher: "European Commission, Travel to Europe (official ETIAS portal)",
        url: "https://travel-europe.europa.eu/en/etias/about-etias/news-corner/revised-timeline-ees-and-etias",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flagEmoji: "🇸🇬",
    lastVerified: "2026-08-06",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa-free entry + Short-Term Visit Pass",
              description:
                "As a U.S. citizen, you can enter Singapore without a visa. On arrival, an immigration officer issues an electronic Short-Term Visit Pass (e-Pass). U.S. passport holders are typically granted up to 90 days, but the officer decides your actual permitted stay at the checkpoint, independent of that norm and of any visa.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Overstaying is an offence under the Immigration Act.",
            "Overstay of fewer than 90 days: typically a composition fine of up to S$4,000.",
            "Overstay of more than 90 days: a criminal offence carrying a mandatory jail term of up to 6 months, with caning also a legally possible penalty.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Apply online through ICA's e-Service once your Short-Term Visit Pass has 14 days or less of remaining validity; walk-in applications are not accepted.",
            "Extension fee is S$40, charged again for each additional 90-day period your total stay reaches (U.S. citizens don't pay the separate S$30 visa fee, since you entered visa-free).",
            "There is no guaranteed extension length: ICA reviews every application individually based on your circumstances, and approval and duration are entirely discretionary.",
            "Processing typically takes about 5 working days.",
          ],
        },
      },
    ],
    gotcha:
      "As a U.S. citizen you'll typically be granted a 90-day Short-Term Visit Pass, but that number isn't guaranteed just by holding a U.S. passport. It's the immigration officer at the checkpoint who decides your actual permitted stay, and it's that e-Pass date, not an assumed 90 days, that determines whether you've overstayed. Confirm the exact date on your e-Pass as soon as you clear immigration rather than assuming.",
    sources: [
      {
        label: "Seeking Extension of Visit Pass",
        publisher: "Immigration & Checkpoints Authority (ICA)",
        url: "https://www.ica.gov.sg/enter-depart/extend_short_stay",
      },
      {
        label: "Check if You Need an Entry Visa",
        publisher: "Immigration & Checkpoints Authority (ICA)",
        url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements",
      },
      {
        label: "What will happen if I overstay in Singapore?",
        publisher: "Immigration & Checkpoints Authority (ICA)",
        url: "https://ask.gov.sg/ica/questions/clos83fvu01kh5k0w71sey268",
      },
    ],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flagEmoji: "🇦🇪",
    lastVerified: "2026-08-06",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Free visa on arrival (default for U.S. citizens)",
              description:
                "As a U.S. citizen, you're issued a free, multiple-entry visa on arrival automatically at any UAE port of entry. No advance application needed. It allows stays of up to 90 days per visit, non-renewable, within any 180-day period counted from your first entry.",
            },
            {
              name: "Paid tourist visa or 5-year multi-entry visa (optional alternative)",
              description:
                "If you want the ability to extend your stay while in the UAE, arrange a paid tourist visa (30/60/90 days, extendable to 120 days total) or the self-sponsored 5-year multiple-entry tourist visa in advance. The free visa on arrival you'd otherwise get automatically cannot be extended at all.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Since a unified fine system took effect on 11 February 2026, all visa types (tourist, visit, residence, and recently cancelled residence permits) carry a single flat fine of AED 50 per day of overstay.",
            "The free 90-day visa on arrival issued to U.S. citizens has no grace period. The fine starts accruing the day after your 90th day, calculated from your first entry within the 180-day window.",
            "Fines accrue automatically in ICP and GDRFA systems and are flagged at smart-gate immigration checkpoints; unpaid fines can trigger a 'technical block' at departure.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "The free visa on arrival is explicitly non-renewable. As a U.S. citizen, you cannot extend it while in the UAE, and leaving and re-entering doesn't reset your day count within the same 180-day window from first entry.",
            "If you anticipate needing more than 90 days, arrange a paid tourist visa or the 5-year multi-entry visa in advance instead of relying on the automatic free entry. Those types can be extended through the ICP Smart Services portal, the GDRFA Dubai website, or the UAE Pass app.",
            "If you've already overstayed, settle the fine online before departure, ideally at least 48 hours ahead, to avoid an airport hold.",
          ],
        },
      },
    ],
    gotcha:
      "The 90-day visa you're automatically issued as a U.S. citizen at the border is completely non-renewable. Unlike other UAE visa types, there's no extension option for it at all, no matter the reason. If there's any chance you'll want more time, you need to arrange a different, paid tourist visa in advance rather than count on extending the free one once you're there.",
    sources: [
      {
        label: "Tourist visa",
        publisher: "The Official Portal of the UAE Government (u.ae)",
        url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/tourist-visa",
      },
      {
        label: "Visa on arrival",
        publisher: "The Official Portal of the UAE Government (u.ae)",
        url: "https://u.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae/visa-on-arrival",
      },
      {
        label: "Visas for US Citizens",
        publisher: "Embassy of the United Arab Emirates, Washington, DC",
        url: "https://www.uae-embassy.org/visas-us-citizens",
      },
      {
        label: "FAQ (incl. Unified Fine System)",
        publisher: "Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)",
        url: "https://icp.gov.ae/en/faq/",
      },
    ],
  },
  {
    slug: "mexico",
    name: "Mexico",
    flagEmoji: "🇲🇽",
    lastVerified: "2026-08-06",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "FMM (Forma Migratoria Múltiple) tourist permit",
              description:
                "As a U.S. citizen, you don't need a visa in advance. You'll be issued an FMM at entry for tourism or business, with a legal maximum of 180 days. The number of days actually granted is at the discretion of the immigration officer at entry (Ley de Migración, Art. 43); it is not automatically 180.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "You must pay a fine, calculated using Mexico's UMA (Unit of Measure and Update) index, at an INM office or an airport immigration kiosk before you're able to leave the country.",
            "The fine scales with how many days you overstayed and can reach the equivalent of thousands of pesos for longer overstays.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Standard tourist FMMs generally cannot be extended or renewed beyond what was originally granted.",
            "If your FMM was issued for fewer than 180 days, you can request an extension up to the 180-day ceiling at an INM (Instituto Nacional de Migración) office.",
            "Extensions beyond 180 days are only available in exceptional circumstances (e.g., documented medical emergencies) submitted to INM.",
          ],
        },
      },
    ],
    gotcha:
      "The '180 days' widely quoted for Mexico is a ceiling, not a guarantee, even for U.S. citizens, who are visa-exempt but not exempt from officer discretion. The immigration officer at your port of entry decides how many days to actually grant, sometimes just 30, 60, or 90, based on your stated purpose and documentation. Whatever number ends up printed on your FMM is what controls your overstay date, not 180.",
    sources: [
      {
        label: "Forma Migratoria Múltiple Digital (FMMd)",
        publisher: "Instituto Nacional de Migración (INM)",
        url: "https://www.gob.mx/inm/articulos/forma-migratoria-multiple-digital-fmmd",
      },
      {
        label: "Solicitud de FMM",
        publisher: "Instituto Nacional de Migración (INM)",
        url: "https://www.inm.gob.mx/fmme/publico/en/solicitud.html",
      },
      {
        label: "Ley de Migración (official text, incl. Art. 43)",
        publisher: "Cámara de Diputados del H. Congreso de la Unión",
        url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LMigra.pdf",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    flagEmoji: "🇫🇷",
    lastVerified: "2026-08-06",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Schengen short stay (visa-free)",
              description:
                "As a U.S. citizen, you can enter France without a visa, for up to 90 days within any rolling 180-day period, the same Schengen-wide rule as Spain. Heads up: the EU's ETIAS pre-travel authorization will eventually apply to U.S. citizens using this visa-free entry, but its launch has been repeatedly delayed (most recently pushed past 2026) and it is not required yet.",
            },
            {
              name: "VLS-TS (long-stay visa acting as residence permit)",
              description:
                "For stays of 90 days up to one year (study, work, family, or long-stay visitor). As a U.S. citizen you'd apply for this before traveling; it functions as both visa and residence permit once you validate it online within 3 months of arrival. No separate residence-permit application needed at that point.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Short-stay (Schengen) overstays face the same consequences as elsewhere in the Schengen Area: fines, a possible entry ban, and automatic tracking via the EU's Entry/Exit System (EES).",
            "Overstaying a VLS-TS puts you in irregular status and can trigger an OQTF (Obligation de Quitter le Territoire Français), a formal order to leave France, which can also carry a re-entry ban to France and the wider Schengen Area.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Short-stay Schengen entries cannot be renewed in-country. You must leave the Schengen Area and wait out the remainder of the 180-day window, or apply for a longer-stay visa.",
            "VLS-TS holders apply for renewal online, at the latest 3 months before the visa expires.",
            "Applying after expiration (outside cases of force majeure) adds a €180 regularisation fee on top of the standard renewal fee.",
          ],
        },
      },
    ],
    gotcha:
      "The VLS-TS renewal window isn't a casual grace period. You're expected to apply at least 3 months before it expires. Miss that window and apply late, and France charges an extra €180 regularisation fee on top of the normal renewal cost, even for a short lapse.",
    sources: [
      {
        label: "Schengen border-crossing rules (90/180-day rule)",
        publisher: "European Commission, Migration and Home Affairs",
        url: "https://home-affairs.ec.europa.eu/policies/schengen/border-crossing_en",
      },
      {
        label: "Obligation de quitter le territoire français (OQTF)",
        publisher: "Service-Public.fr (French government)",
        url: "https://www.service-public.fr/particuliers/vosdroits/F18362",
      },
      {
        label: 'Carte de séjour temporaire "visiteur" d\'un étranger en France',
        publisher: "Service-Public.fr (French government)",
        url: "https://www.service-public.fr/particuliers/vosdroits/F302",
      },
      {
        label: "Revised timeline for EES and ETIAS",
        publisher: "European Commission, Travel to Europe (official ETIAS portal)",
        url: "https://travel-europe.europa.eu/en/etias/about-etias/news-corner/revised-timeline-ees-and-etias",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flagEmoji: "🇯🇵",
    lastVerified: "2026-08-06",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa exemption (Temporary Visitor status)",
              description:
                "As a U.S. citizen, you can enter Japan visa-free for tourism or business (no income-earning activity) for up to 90 days.",
            },
            {
              name: "Standard visa (issued abroad)",
              description:
                "For purposes beyond short tourism/business: work, study, long-term stay. As a U.S. citizen you'd obtain this from a Japanese embassy or consulate in the U.S. before travel; it isn't needed for ordinary tourism.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Overstaying ('illegal residing') is punishable by up to 3 years imprisonment or a fine of up to ¥300,000.",
            "Working without authorization while overstaying adds separate penalties: up to 1 year imprisonment or a fine of up to ¥2,000,000.",
            "Departure following a deportation order or other compulsory disposition normally carries a re-entry ban of at least 5 years.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Temporary Visitor (visa-exempt) status generally cannot be extended for tourism purposes. You're expected to leave before it expires.",
            "If you genuinely cannot leave on time, apply proactively at a Regional Immigration Services Bureau before you overstay.",
            "Voluntarily reporting yourself under the Departure Order System, before authorities detect the overstay, typically reduces the re-entry ban to about 1 year instead of the standard 5.",
          ],
        },
      },
    ],
    gotcha:
      "You don't need a visa to visit Japan today, but that's changing: a 2026 law creates JESTA, a new pre-travel electronic authorization for visa-exempt visitors, including U.S. citizens, modeled on the U.S.'s own ESTA. It isn't required yet (rollout is expected by around March 2029), but once it launches, showing up without one will be the same kind of mistake as showing up to the U.S. without an ESTA is today.",
    sources: [
      {
        label: "Exemption of Visa (Short-Term Stay)",
        publisher: "Ministry of Foreign Affairs of Japan (MOFA)",
        url: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html",
      },
      {
        label: "令和8年入管法等改正法について (2026 Immigration Act amendment, incl. JESTA)",
        publisher: "Immigration Services Agency of Japan (ISA), Ministry of Justice",
        url: "https://www.moj.go.jp/isa/01_00643.html",
      },
      {
        label: "Immigration Services Agency support portal",
        publisher: "Immigration Services Agency of Japan (ISA), Ministry of Justice",
        url: "https://www.moj.go.jp/isa/support/portal/index.html",
      },
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flagEmoji: "🇬🇧",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Electronic Travel Authorisation (ETA)",
              description:
                "As a U.S. citizen, since 25 February 2026 you need an ETA before you travel to the UK, for tourism, visiting family, business meetings, or short-term study of 6 months or less. Apply via the UK ETA app or gov.uk before you go; most applications are approved within minutes. It costs about £16–£20 and covers multiple trips of up to 6 months each, valid for 2 years or until your passport expires, whichever comes first.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Staying past your permitted 6 months can trigger an automatic re-entry ban once the overstay reaches 90 days. The ban can run from 1 to 10 years depending on circumstances.",
            "Leaving voluntarily within 30 days of your permitted stay expiring can avoid an immediate ban, but you must still declare the overstay on any future UK application.",
            "Overstaying without a reasonable excuse can lead to a fine or up to 6 months' imprisonment; deliberately overstaying to deceive immigration authorities can carry up to 4 years.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "An ETA itself doesn't extend anything. It's pre-travel authorization, not a visa, and it doesn't grant leave to remain beyond your permitted 6-month stay.",
            "If you need more than 6 months, you must apply for and be granted the relevant UK visa before your permitted stay runs out. There's no in-country renewal for a standard ETA-based visit.",
            "Any prior overstay has to be declared on every future ETA or visa application, both in and outside the UK.",
          ],
        },
      },
    ],
    gotcha:
      "Until February 2026, U.S. citizens could show up to the UK with nothing but a passport. That's over. You now need an ETA before you fly, even for a two-day trip, and airlines can and do deny boarding to travelers without one. It's fast and cheap to get, but it's no longer optional.",
    sources: [
      {
        label: "Get an ETA",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/eta",
      },
      {
        label: "When you do not need an ETA",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/eta/when-not-need-eta",
      },
      {
        label: "Important changes to UK entry requirements as of February 25, 2026",
        publisher: "U.S. Embassy & Consulates in the United Kingdom",
        url: "https://uk.usembassy.gov/routine-message-important-changes-to-uk-entry-requirements-as-of-february-25-2026/",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flagEmoji: "🇨🇦",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa-exempt entry (no eTA needed)",
              description:
                "As a U.S. citizen, you don't need a visa or an eTA to visit Canada, regardless of whether you arrive by air, land, or sea, an exemption most other eTA-exempt-adjacent nationalities don't fully get (they still need one to fly in). A Canada Border Services Agency officer decides your actual permitted stay at entry, typically up to 6 months.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Once your authorized stay expires you become unlawfully present, which creates a permanent negative mark in Canada's immigration records.",
            "An overstay must be explained on every future Canadian visa or travel application, and can lead to future applications being denied.",
            "You get a 90-day window after losing status to apply for 'Restoration of Status,' acknowledging the overstay and requesting permission to regularize and leave properly.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Apply for a Visitor Record from inside Canada before your current authorized stay expires.",
            "Applying before expiry gives you 'implied status': you can stay under your prior conditions while IRCC processes the extension, even past your original departure date.",
            "Applying after your stay has already expired forfeits implied status and is treated as out-of-status, which carries its own consequences for future applications.",
          ],
        },
      },
    ],
    gotcha:
      "Most eTA-required nationalities only need Canada's eTA when flying in. U.S. citizens don't need one at all, by air, land, or sea. It's easy to read that as 'no immigration check needed,' but you still get a discretionary permitted-stay length decided by the border officer at entry, exactly like every other visitor. There's just no separate pre-travel authorization step to remind you of that.",
    sources: [
      {
        label: "Electronic travel authorization (eTA)",
        publisher: "Immigration, Refugees and Citizenship Canada (IRCC)",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html",
      },
      {
        label: "eTA: Who can apply",
        publisher: "IRCC",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility.html",
      },
      {
        label: "Extend your stay in Canada (visitor record)",
        publisher: "IRCC",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay.html",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flagEmoji: "🇦🇺",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Electronic Travel Authority (subclass 601)",
              description:
                "As a U.S. citizen, you need an ETA (subclass 601) before you travel, even though entry otherwise feels visa-free. Apply through the Australian ETA app for an AUD 20 service fee; most are approved within 24 hours, though applying at least 4 weeks ahead is recommended. It allows multiple entries over 12 months, with stays of up to 3 months each visit.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "There is no grace period. You become an 'unlawful non-citizen' the moment your permitted stay expires, even by a single day.",
            "The Department of Home Affairs can detain and remove unlawful non-citizens from Australia.",
            "Leaving within 28 days of your visa expiring can help you avoid a 3-year re-entry exclusion period, but you were still unlawfully present during that window. The 28 days is not a grace period for the overstay itself.",
            "An ETA (subclass 601) cannot be extended while you're in Australia, and an overstay record can affect your eligibility for a future ETA.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "You can't extend an ETA-based stay from inside Australia. If you want to stay longer, you need to apply for and be granted a different visa before your permitted stay runs out.",
            "There is no in-country renewal path for ETA holders wanting more time on the same authorization.",
            "If your status has already lapsed, Home Affairs' Immigration Status Resolution Service can advise on next steps, including voluntary departure.",
          ],
        },
      },
    ],
    gotcha:
      "There's a widely repeated myth of a '28-day grace period' for overstaying in Australia. There isn't one. You're classified as an unlawful non-citizen from day one of overstaying, with zero leeway. The 28-day window only affects whether you get hit with a 3-year re-entry ban when you eventually leave, not whether the overstay itself was legal.",
    sources: [
      {
        label: "Subclass 601 Electronic Travel Authority",
        publisher: "Department of Home Affairs, Australian Government",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601",
      },
      {
        label: "Immigration Status Resolution Service",
        publisher: "Department of Home Affairs, Australian Government",
        url: "https://immi.homeaffairs.gov.au/what-we-do/status-resolution-service",
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flagEmoji: "🇮🇪",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa-free entry (not Schengen)",
              description:
                "As a U.S. citizen, you can enter Ireland visa-free for tourism or business for up to 90 days. Ireland is in the EU but is not part of the Schengen Area. It runs its own visa policy tied to the Common Travel Area it shares with the UK, entirely separate from the Schengen 90/180 system used by Spain, France, Portugal, and Germany.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Staying beyond your granted permission can lead to prosecution and/or deportation.",
            "Consequences can include fines, deportation, and being barred from future travel to Ireland.",
            "Not being able to show evidence of departing on time can affect future visa or re-entry applications to Ireland.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "You can apply for a one-time temporary extension of your visitor permission, up to a further 90 days, at a local immigration office. The application must be made while your current permission is still valid.",
            "A €300 registration fee applies if the extension is granted.",
            "No extension is possible once your original permission has already expired.",
          ],
        },
      },
    ],
    gotcha:
      "Ireland is in the EU but not in the Schengen Area. A Schengen visa or Schengen residence permit does not let you enter Ireland, and time spent in Ireland doesn't count toward (or against) your separate 90-day Schengen clock elsewhere in Europe. The two systems are entirely independent, which trips up a lot of people combining an Ireland trip with mainland Europe.",
    sources: [
      {
        label: "Extension of Visitor Permission",
        publisher: "Immigration Service Delivery (Ireland)",
        url: "https://www.irishimmigration.ie/extension-of-visitor-permission/",
      },
      {
        label: "Visas for Ireland",
        publisher: "Embassy of Ireland, USA",
        url: "https://www.ireland.ie/en/usa/washington/services/visas/visas-for-ireland/",
      },
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    flagEmoji: "🇵🇹",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Schengen short stay (visa-free)",
              description:
                "As a U.S. citizen, you can enter Portugal without a visa, for up to 90 days within any rolling 180-day period, the same Schengen-wide rule as Spain and France. The same ETIAS heads-up applies here too: it will eventually apply to U.S. citizens, but remains delayed past 2026 and is not required yet.",
            },
            {
              name: "National long-stay visa (often called D7 or D8)",
              description:
                "For stays longer than 90 days. The D7 route is aimed at retirees/passive-income holders; a separate remote-work/freelancer residency route (commonly marketed as the 'D8' or digital nomad visa, though Portugal's own visa-code naming for it varies by source) requires foreign-sourced income of roughly 4x the Portuguese minimum wage. Both must be applied for at a Portuguese consulate in the U.S. before you travel.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Consequences follow the general Schengen pattern: fines, deportation, and an entry ban ranging from 1 to 10 years for significant overstays.",
            "Reported enforcement fines for simple overstays have recently run lower than the statutory maximum (roughly €40–€250 in practice against a legal ceiling nearer €700 under Portugal's Foreigners Law), but this varies by case.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Short Schengen stays follow the same rule as Spain and France: no in-country renewal. You must leave the Schengen Area and wait out the rest of the 180-day window.",
            "D7/D8 (long-stay) applicants apply at a Portuguese consulate in the U.S. before traveling; once in Portugal, you register with AIMA (Agência para a Integração, Migrações e Asilo) for your residence permit.",
          ],
        },
      },
    ],
    gotcha:
      "Portugal runs on the same 90/180 Schengen rule as Spain and France, but it's also one of the most popular digital-nomad destinations, and people often assume the remote-work visa is a formality layered on top of that 90 days. It isn't: it has real foreign-income thresholds and has to be arranged at a consulate before you travel. You can't enter on a tourist stamp and 'switch' to remote-work status once you're already there.",
    sources: [
      {
        label: "Vistos: national visas, general information",
        publisher: "Ministério dos Negócios Estrangeiros (Portuguese Ministry of Foreign Affairs)",
        url: "https://vistos.mne.gov.pt/en/national-visas/general-information",
      },
      {
        label: "Visa information",
        publisher: "Embassy of Portugal in Washington, D.C.",
        url: "https://washingtondc.embaixadaportugal.mne.gov.pt/en/consular-services/visa-information",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flagEmoji: "🇩🇪",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Schengen short stay (visa-free)",
              description:
                "As a U.S. citizen, you can enter Germany without a visa for up to 90 days within any rolling 180-day period, the same Schengen-wide rule as Spain, France, and Portugal.",
            },
            {
              name: "Freelance/self-employment residence permit (Freiberufler)",
              description:
                "For independent professionals (IT, design, writing, consulting, art, and similar fields). Unusually among Schengen countries, as a U.S. citizen you can enter on the standard 90-day visa-free stay and apply for this permit from inside Germany at your local Ausländerbehörde (Foreigners' Authority), instead of arranging it at a consulate beforehand.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "In practice, most simple overstays are punished with a fine, typically cited in the roughly €500–€3,000 range for a negligent (non-criminal) overstay.",
            "Remaining without a valid residence permit can also be prosecuted as a criminal or administrative offense depending on circumstances.",
            "An entry ban logs your biometric data into the Schengen Information System (SIS), affecting travel across the whole Schengen Area, not just Germany. Forced deportation costs can run €5,000–€20,000 and may be billed to the deportee.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Short Schengen stays follow the standard rule: no in-country renewal. Leave the Schengen Area and wait out the rest of the 180-day window, or apply for a longer-stay visa.",
            "Freelance permit applicants: request an appointment with your local Ausländerbehörde while still within your 90 days.",
            "While you wait for that appointment or a decision, your legal stay is automatically extended under German law's 'Fiktionswirkung' (fiction effect), but you are still not permitted to work or invoice clients until the permit itself is actually granted.",
          ],
        },
      },
    ],
    gotcha:
      "Unlike Spain, which closed off in-country conversion entirely, Germany still lets U.S. citizens enter on a plain 90-day tourist stay and apply for the self-employment/freelance residence permit from inside the country. The catch: your legal stay is automatically extended while you wait for a decision (Fiktionswirkung), but you're still not legally allowed to work or invoice clients during that wait, a distinction that trips people up.",
    sources: [
      {
        label: "Employment in Germany (incl. residence permits for work purposes)",
        publisher: "Federal Foreign Office (Auswärtiges Amt), German Missions in the United States",
        url: "https://www.germany.info/us-en/service/visa/employment-visa-922292",
      },
      {
        label: "Residence Visa (over 90 days, incl. work/self-employment)",
        publisher: "Federal Foreign Office (Auswärtiges Amt), German Missions in the United States",
        url: "https://www.germany.info/us-en/service/visa/residence-visa-922288",
      },
    ],
  },
  {
    slug: "brazil",
    name: "Brazil",
    flagEmoji: "🇧🇷",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "eVisa (mandatory as of April 2025)",
              description:
                "As a U.S. citizen, you now need an eVisa before you travel. Brazil ended visa-free entry for U.S., Canadian, and Australian passport holders in April 2025, on a reciprocity basis. Apply online through the government-authorized portal (about $80.90, roughly 48–72 hours to process). Each entry allows a stay of up to 90 days; the eVisa itself is valid for multiple entries over several years.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Daily fines apply, historically around R$100/day (roughly $18–20), capped at a total of R$10,000.",
            "After losing tourist status, you're notified to regularize your situation or leave the country within 60 days.",
            "Overstaying can also lead to deportation and a re-entry ban.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "A one-time extension of up to 90 additional days (180 days total per 12-month period) is possible, but it is not automatic. You must apply in person at a Polícia Federal office, generally only in the final stretch of your original 90 days, and pay a fee (around R$200/~$40).",
            "Reports through 2026 indicate Polícia Federal has been denying tourist-stay extensions more often than in the past. Confirm current practice with a local Polícia Federal office rather than assuming an extension will be granted.",
          ],
        },
      },
    ],
    gotcha:
      "Brazil's visa-free entry for U.S. citizens is gone. Since April 2025 you need an eVisa before you fly, arranged in advance online, not something you can sort out on arrival. And don't count on the once-reliable 90-day extension at Polícia Federal: recent reports say it's being refused more often than it used to be, so a 90-day trip should be planned to actually fit in 90 days.",
    sources: [
      {
        label: "Prorrogar Estada como Turista no Brasil",
        publisher: "Polícia Federal / Portal gov.br",
        url: "https://www.gov.br/pt-br/servicos/prorrogar-estada-no-brasil",
      },
      {
        label: "Brazil eVisa & eTA (Official Portal)",
        publisher: "VFS Global, authorized by the Government of Brazil",
        url: "https://brazil.vfsevisa.com/",
      },
    ],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    flagEmoji: "🇨🇷",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa-free entry",
              description:
                "As a U.S. citizen, you don't need a visa to enter Costa Rica for tourism. Costa Rican regulations set a legal ceiling of up to 180 days for your nationality group, but (much like Mexico's FMM) the number of days actually stamped in your passport is decided by the immigration officer at entry, and in practice is often fewer than 180. Check the date stamped on entry rather than assuming any specific number.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Under Costa Rica's Ley General de Migración y Extranjería (Ley 8764), an irregular stay carries a fine of US$100 per month (or part of a month) of overstay.",
            "If the fine isn't paid, the alternative penalty is a re-entry ban lasting three times the length of the overstay: for example, a 3-month overstay unpaid can mean a 9-month bar from re-entering.",
            "Significant or repeated overstays can also lead to administrative deportation.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "There is no general in-country extension for a standard tourist stay. If you want more time, the standard advice is to leave the country and re-enter, which restarts the process at the border (subject, again, to officer discretion on days granted).",
          ],
        },
      },
    ],
    gotcha:
      "The '180 days' widely quoted for Costa Rica is a ceiling that officially applies to your nationality group, not a number you're guaranteed at the border. Exactly like Mexico's FMM, the immigration officer decides how many days to actually stamp into your passport at entry, so check what's actually stamped rather than assuming 180.",
    sources: [
      {
        label: "Ley General de Migración y Extranjería, Nº 8764 (official text)",
        publisher: "Sistema Costarricense de Información Jurídica (SCIJ), Procuraduría General de la República",
        url: "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=66139",
      },
      {
        label: "Visas: general information",
        publisher: "Dirección General de Migración y Extranjería, Costa Rica",
        url: "https://migracion.go.cr/",
      },
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    flagEmoji: "🇹🇭",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa exemption",
              description:
                "As a U.S. citizen, you can enter Thailand visa-free for tourism. As of this writing, U.S. passport holders are still granted 60 days at the border, but Thailand's Cabinet approved cutting this to 30 days for most nationalities back in May 2026, pending publication in the Royal Gazette (the change takes effect 15 days after that publication). Check immigration.go.th immediately before you travel. This is a genuinely live-changing rule, not a settled one.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "The overstay fine is 500 Baht per day, capped at a maximum of 20,000 Baht.",
            "Longer or repeated overstays can lead to detention, deportation, and being blacklisted from re-entry.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "A visa-exemption stay can be extended once, for an additional 30 days, at a Thai immigration office (fee applies), commonly cited around 1,900 Baht.",
            "Extensions and status changes are handled at the Immigration Bureau office for the province where you're staying.",
          ],
        },
      },
    ],
    gotcha:
      "Thailand's 'famous' 60-day visa-free stay for Americans is mid-change as of this writing: the Cabinet approved cutting it to 30 days back in May 2026, and it becomes law 15 days after formal publication in the Royal Gazette, which could happen at any time. This is exactly the kind of rule that can flip while you're mid-trip-planning, so check immigration.go.th directly before you book anything around a specific day count.",
    sources: [
      {
        label: "Extension of temporary stay under Section 15",
        publisher: "Immigration Bureau, Royal Thai Police",
        url: "https://www.immigration.go.th/en/?page_id=2324",
      },
      {
        label: "Visa",
        publisher: "Immigration Bureau, Royal Thai Police",
        url: "https://www.immigration.go.th/en/?page_id=2771",
      },
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flagEmoji: "🇰🇷",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Common Entry Types",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Visa exemption (K-ETA currently suspended)",
              description:
                "As a U.S. citizen, you can enter South Korea visa-free for tourism or short-term business, for up to 90 days. South Korea normally requires K-ETA (a pre-travel authorization) for visa-exempt visitors, but that requirement is temporarily suspended for U.S. citizens through December 31, 2026. You still need to complete the free e-Arrival Card online within 72 hours of arrival, even while K-ETA itself is suspended.",
            },
          ],
        },
      },
      {
        title: "Overstay Consequences",
        content: {
          kind: "list",
          items: [
            "Overstaying is an offense that can lead to fines, and in more serious or repeated cases, detention and deportation.",
            "An overstay record can affect eligibility for future entry, including future K-ETA approval once that requirement resumes.",
          ],
        },
      },
      {
        title: "Renewal Path",
        content: {
          kind: "orderedList",
          items: [
            "Extensions of a short-term visa-exempt stay are handled by the Korea Immigration Service and are not routine. Approval depends on your circumstances and generally requires applying before your permitted stay expires.",
            "K-ETA becomes mandatory again on January 1, 2027, at which point airlines will enforce it at check-in. A fresh application will be required for any trip after that date.",
          ],
        },
      },
    ],
    gotcha:
      "Right now, U.S. citizens don't need K-ETA to visit South Korea, but that's a temporary suspension, not a permanent policy change, and it's currently scheduled to end December 31, 2026. If you're planning a trip for early 2027, don't assume the current 'no K-ETA needed' status still applies. Check k-eta.go.kr before you travel.",
    sources: [
      {
        label: "Official Korea Electronic Travel Authorization",
        publisher: "Korea Immigration Service",
        url: "https://www.k-eta.go.kr/",
      },
      {
        label: "Notice on Extension of K-ETA Temporary Exemption (through 12/31/2026)",
        publisher: "Consulate General of the Republic of Korea in Atlanta",
        url: "https://atlanta.mofa.go.kr/us-atlanta-en/brd/m_24389/view.do?seq=28",
      },
    ],
  },
];
