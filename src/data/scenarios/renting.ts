// Renting & Tenant Rights scenario. Content drafted from official /
// authoritative sources as of each country's `lastVerified` date; re-check
// before relying on any of it. Written for U.S. citizens renting abroad.
import type { CountryContent } from "@/types/scenario";

export const rentingCountries: CountryContent[] = [
  {
    slug: "spain",
    name: "Spain",
    flagEmoji: "🇪🇸",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "The security deposit (fianza) is capped by law at one month's rent for a standard residential lease (two months for non-housing/commercial premises).",
            "The landlord is legally required to deposit your fianza with the relevant regional housing authority (e.g. Comunidad de Madrid, INCASÒL in Catalonia) rather than simply keeping it themselves; ask for proof it was deposited.",
            "The deposit does not accrue interest for you, and must be returned within one month of the lease ending and keys being handed back.",
          ],
        },
      },
      {
        title: "Lease Length & Renewal",
        content: {
          kind: "list",
          items: [
            "Under Article 9 of the Ley de Arrendamientos Urbanos (LAU), a residential lease has a legal minimum duration of 5 years if your landlord is an individual, or 7 years if the landlord is a company, even if your signed contract states a shorter term.",
            "If the contract term is shorter than that legal minimum, it is automatically extended year by year until it reaches the minimum, unless you (the tenant) give at least 30 days' notice that you don't want to renew.",
            "After the minimum term, the contract can tacitly extend for up to 3 more years (Article 10 LAU) unless either side gives proper notice: 4 months for the landlord, 2 months for the tenant.",
          ],
        },
      },
      {
        title: "Rent Increases",
        content: {
          kind: "list",
          items: [
            "Mid-lease rent increases must follow whatever index is specified in your contract; landlords cannot raise rent arbitrarily outside the agreed terms.",
            "In areas designated as 'tensioned market zones' under Spain's 2023 Housing Law, additional caps apply to how much rent can rise, including on renewal.",
          ],
        },
      },
    ],
    gotcha:
      "Spanish tenant protections run the opposite direction from the usual 'watch out' gotcha: once you sign a residential lease, the law effectively guarantees you up to 5 years of tenancy (7 if your landlord is a company), even if the contract itself says something shorter. Your landlord can't simply decline to renew year to year during that window. Combined with the deposit legally having to sit with a regional government agency rather than the landlord's own account, tenant protections in Spain are considerably stronger than most Americans expect coming from an at-will rental market.",
    sources: [
      {
        label: "Depósito de fianzas",
        publisher: "Ministerio de Vivienda y Agenda Urbana",
        url: "https://www.mivau.gob.es/vivienda/alquila-bien-es-tu-derecho/alquiler/deposito-de-fianzas",
      },
      {
        label: "Ley 29/1994, de Arrendamientos Urbanos (LAU), incl. Art. 9 y 10",
        publisher: "Boletín Oficial del Estado (BOE)",
        url: "https://www.boe.es/buscar/act.php?id=BOE-A-1994-26003",
      },
      {
        label: "Ley 13/1996, del Registro y el Depósito de Fianzas",
        publisher: "Boletín Oficial del Estado (BOE)",
        url: "https://www.boe.es/buscar/pdf/1996/BOE-A-1996-19382-consolidado.pdf",
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
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "The security deposit (Kaution) is capped by law at 3 months' cold rent (Kaltmiete, i.e. rent excluding utilities) under §551 of the German Civil Code (BGB).",
            "You're legally entitled to pay it in 3 equal monthly installments rather than all at once.",
            "The landlord must hold it in an account separate from their own assets, generally interest-bearing, and typically has a reasonable period after move-out (commonly cited as up to 3–6 months) to return it, deducting only for legitimate damage claims.",
          ],
        },
      },
      {
        title: "Notice & Eviction Protections",
        content: {
          kind: "list",
          items: [
            "As a tenant, your own notice period to end an indefinite lease is a flat 3 months, no matter how long you've lived there.",
            "Your landlord's notice period is longer and scales with how long you've rented: at least 3 months, rising to 6 months once you've lived there 5+ years, and 9 months at 8+ years.",
            "A landlord cannot terminate an indefinite lease without a legally recognized reason ('berechtigtes Interesse'), most commonly personal use (Eigenbedarf) for themselves or close family, a serious contract breach, or significant economic hardship. Simply wanting the unit back with no stated reason is not legally valid grounds.",
            "All termination notices, from either side, must be in writing with a physical signature. Email, text, or a scanned PDF does not legally count.",
          ],
        },
      },
      {
        title: "Rent Increases",
        content: {
          kind: "list",
          items: [
            "For an existing tenancy, rent increases are capped at 20% over any 3-year period (Kappungsgrenze), 15% in some designated tight-market states/cities.",
            "For a brand-new lease in a designated tight-housing area, the Mietpreisbremse ('rent brake') caps the starting rent at no more than 10% above the local reference rent (Mietspiegel).",
          ],
        },
      },
    ],
    gotcha:
      "Unlike an American month-to-month or easily-non-renewed lease, a German landlord generally cannot end an indefinite tenancy just by choosing not to renew it. They need a legally recognized reason, most commonly Eigenbedarf (needing the unit for themselves or close family). 'I've decided not to renew your lease' isn't valid on its own the way it commonly is in the U.S. If you're used to at-will rental norms, this level of protection is worth understanding before you assume you have less security than you actually do.",
    sources: [
      {
        label: "§551 BGB: Limits on and treatment of the security deposit",
        publisher: "Bundesministerium der Justiz (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/bgb/__551.html",
      },
      {
        label: "§573c BGB: Notice periods for ordinary termination",
        publisher: "Bundesministerium der Justiz (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/bgb/__573c.html",
      },
      {
        label: "§573 BGB: Landlord's termination for legitimate interest",
        publisher: "Bundesministerium der Justiz (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/bgb/__573.html",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    flagEmoji: "🇫🇷",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "The security deposit (dépôt de garantie) is capped at 1 month's rent (excluding charges) for an unfurnished lease, or 2 months' rent for a furnished lease.",
            "It must be returned within 1 month of you handing back the keys if the property is in the agreed condition, or within 2 months if the landlord documents deductions for damage.",
          ],
        },
      },
      {
        title: "Notice Periods",
        content: {
          kind: "list",
          items: [
            "As a tenant in a furnished rental, you can give notice to leave with just 1 month's notice, with no need to justify why.",
            "As a tenant in an unfurnished rental, standard notice is 3 months, but it drops to 1 month if the property is in a designated 'zone tendue' (tight housing market, including Paris) or in certain other legally defined situations (e.g. job loss, health reasons).",
          ],
        },
      },
      {
        title: "Eviction Protections",
        content: {
          kind: "list",
          items: [
            "France runs a 'trêve hivernale' (winter truce) from November 1 to March 31 each year, during which a landlord generally cannot physically carry out an eviction, even with a court order already in hand, for any reason, including unpaid rent.",
            "The winter truce doesn't cancel accumulated rent debt; a tenant is still expected to keep working out repayment, and any court eviction process can resume and be carried out once the truce period ends on March 31.",
            "A small list of exceptions exists (e.g. squatters, domestic-violence-related expulsion orders, condemned/unsafe buildings), but they don't apply to an ordinary rent dispute.",
          ],
        },
      },
    ],
    gotcha:
      "France's 'trêve hivernale' has no real U.S. equivalent: between November 1 and March 31, a landlord generally can't carry out an eviction even with a signed court order already in hand. It doesn't erase unpaid rent or make a lawsuit go away, but it does mean an 'out by next week or else' threat from a landlord during those months often isn't actually enforceable the way it would be back home.",
    sources: [
      {
        label: "Expulsions locatives: Trêve hivernale",
        publisher: "Service-Public.fr (French government)",
        url: "https://www.service-public.fr/particuliers/actualites/A14632",
      },
      {
        label: "Prévention des expulsions et trêve hivernale",
        publisher: "Ministère de la Transition écologique, de l'Aménagement du Territoire, des Transports et du Logement",
        url: "https://www.ecologie.gouv.fr/politiques-publiques/prevention-expulsions-treve-hivernale",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flagEmoji: "🇸🇬",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "Singapore has no single residential tenancy statute. Deposit amounts are a market convention, not a legal cap: typically 1 month's rent per year of a lease (so 2 months for a 2-year lease).",
            "Deposits are refundable, minus documented damage, and are governed by the terms written into your tenancy agreement plus general contract law, not a dedicated landlord-tenant act.",
            "For HDB flat rentals specifically, additional government rules apply on top of the private-market conventions (e.g. minimum lease length, eligibility to rent at all).",
          ],
        },
      },
      {
        title: "Lease Length & Eviction",
        content: {
          kind: "list",
          items: [
            "Minimum lease length is 3 consecutive months for a private residential property, or 6 months for an HDB flat.",
            "Eviction for non-payment or breach generally requires the landlord to issue a formal notice and, if unresolved, apply to the State Courts for a Writ of Possession. A landlord can't simply change the locks.",
            "URA rules cap private residential units at 6 unrelated occupants; breaching this risks fines up to S$200,000 or eviction, which can catch renters sharing a unit informally.",
          ],
        },
      },
    ],
    gotcha:
      "Singapore has no single 'Residential Tenancies Act' the way many countries do. Your protections come almost entirely from whatever you actually signed and general contract law, not a statutory floor. That makes reading your tenancy agreement closely (not just skimming it) far more consequential in Singapore than in a country with strong baseline statutory tenant protections.",
    sources: [
      {
        label: "Renting or renting out a private residential property",
        publisher: "Council for Estate Agencies (CEA), Singapore",
        url: "https://www.cea.gov.sg/consumers/transacting-on-your-own/renting-or-renting-out-a-private-residential-property/",
      },
      {
        label: "Renting an HDB flat/bedroom (Tenant)",
        publisher: "Council for Estate Agencies (CEA), Singapore",
        url: "https://www.cea.gov.sg/consumers/transacting-on-your-own/renting-an-hdb-flat-or-bedroom/",
      },
    ],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flagEmoji: "🇦🇪",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Rent Increases",
        content: {
          kind: "list",
          items: [
            "In Dubai, any rent increase on renewal is capped by the official RERA Rental Index calculator (under Decree No. 43 of 2013), the maximum lawful increase depends on how far your current rent sits below the index average for comparable units, not a flat percentage a landlord can pick.",
            "A landlord must give at least 90 days' notice before the lease expiry if they intend to raise the rent or change other contract terms.",
            "Landlords are barred from charging any separate 'lease renewal fee,' and can't evict a tenant simply for refusing to pay one.",
          ],
        },
      },
      {
        title: "Eviction Protections",
        content: {
          kind: "list",
          items: [
            "For non-payment, the landlord must give notice via notary public or registered mail with at least 30 days to pay before pursuing eviction.",
            "For eviction to redevelop, substantially renovate, sell, or personally use the property, the landlord must give 12 months' written notice by notary public or registered mail, not a casual heads-up.",
          ],
        },
      },
    ],
    gotcha:
      "Dubai's rent increase cap isn't a simple percentage: it's calculated against the official RERA Rental Index for your specific area and unit type, so 'how much can my rent legally go up' genuinely depends on how your current rent compares to the local index average. Run your address through the official RERA calculator before accepting a renewal increase at face value.",
    sources: [
      {
        label: "Dubai Rental Increase Decree No. 43 of 2013",
        publisher: "Dubai Land Department",
        url: "https://dubailand.gov.ae/media/z2dn3gtr/rental-increase-decree-43-in-dubai.pdf",
      },
      {
        label: "Tenancy Guide",
        publisher: "Dubai Land Department",
        url: "https://dubailand.gov.ae/media/051bem5a/tenancyguideen.pdf",
      },
    ],
  },
  {
    slug: "mexico",
    name: "Mexico",
    flagEmoji: "🇲🇽",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "Mexico has no federal residential tenancy law. Rental rules are set by each state's civil code, so specifics vary by where you're renting (Mexico City/CDMX, Jalisco, and Nuevo León each have their own particularities).",
            "There is generally no legal cap on the security deposit in most states; one to two months' rent is the common market practice, not a legal requirement.",
            "The deposit must be returned at the end of the lease, minus provable damage or unpaid rent.",
          ],
        },
      },
      {
        title: "Eviction (Desalojo)",
        content: {
          kind: "list",
          items: [
            "Eviction ('lanzamiento') legally requires a judicial order. A landlord cannot lock you out or remove your belongings without going through the courts, regardless of the reason.",
            "Falling two or more months behind on rent gives the landlord grounds to seek contract rescission and file an eviction lawsuit, but it still has to go through that judicial process.",
          ],
        },
      },
    ],
    gotcha:
      "There's no national 'Mexican tenant law': what actually applies to you depends on which state's civil code governs your lease, so advice calibrated to Mexico City won't necessarily hold in Jalisco or elsewhere. Always confirm the specific rules for your state rather than assuming a blanket national standard.",
    sources: [
      {
        label: "Ley de Vivienda para la Ciudad de México",
        publisher: "Congreso de la Ciudad de México",
        url: "https://www.congresocdmx.gob.mx/archivos/transparencia/LEY_DE_VIVIENDA_PARA_LA_CIUDAD_DE_MEXICO.pdf",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flagEmoji: "🇯🇵",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Deposit & Key Money",
        content: {
          kind: "list",
          items: [
            "Security deposit (shikikin) is typically 1–2 months' rent, refundable at move-out minus documented damage beyond normal wear and tear; a 2020 Civil Code revision explicitly clarified that ordinary wear and tear is the landlord's cost, not the tenant's.",
            "Key money (reikin) is a separate, one-time payment to the landlord, commonly 1–3 months' rent, that is never returned under any circumstances. It's a market custom, not a legal requirement, and isn't charged everywhere (Hokkaido and Okinawa rentals often skip it; Tokyo, Kyoto, and Osaka commonly still charge it).",
          ],
        },
      },
      {
        title: "Move-Out Disputes",
        content: {
          kind: "list",
          items: [
            "The most common dispute is over 'genjo kaifuku' (restoration to original condition): whether the tenant or landlord pays for a given repair at move-out. The government has published official guidelines specifically to reduce these disputes.",
            "Normal wear and tear (fading, minor scuffs from ordinary living) is legally the landlord's responsibility; damage from negligence or misuse is the tenant's.",
          ],
        },
      },
    ],
    gotcha:
      "Key money (reikin) is genuinely different from a deposit: it's not held as insurance against damage, it's a one-time non-refundable payment to the landlord, essentially built into the cost of moving in, and it's easy for a first-time renter in Japan to assume it works like a deposit and expect some of it back. It doesn't, and you won't get any of it back, regardless of how well you take care of the place.",
    sources: [
      {
        label: "Points for Restoring Rental Housing to Its Original Condition",
        publisher: "Ministry of Land, Infrastructure, Transport and Tourism (MLIT), Japan",
        url: "https://www.mlit.go.jp/jutakukentiku/house/content/001595135.pdf",
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
        title: "Deposit Protection",
        content: {
          kind: "list",
          items: [
            "If your tenancy started after April 6, 2007, your landlord is legally required to put your deposit into a government-approved tenancy deposit protection (TDP) scheme within 30 days of receiving it, and give you the scheme's 'Prescribed Information.'",
            "If a landlord fails to protect your deposit properly, you can take them to court and be awarded your deposit back plus up to 3x the deposit amount as a penalty.",
          ],
        },
      },
      {
        title: "Eviction Rules",
        content: {
          kind: "list",
          items: [
            "Until the Renters' Rights Act 2025 took effect, 'no-fault' Section 21 evictions were common in England; as of May 1, 2026, Section 21 is abolished. Landlords must now cite a specific legal ground to end a tenancy.",
            "An unprotected deposit already blocked a landlord's ability to serve a valid Section 21 notice before the 2026 change, and that same principle (deposit must be properly protected) still constrains most Section 8 grounds for possession now.",
          ],
        },
      },
    ],
    gotcha:
      "UK eviction rules changed substantially on May 1, 2026. 'No-fault' Section 21 evictions, long a defining feature of English renting that a lot of online advice still describes as normal, are gone. If you're reading guidance written before 2026, double-check it against the current Renters' Rights Act 2025 rules rather than assuming the old Section 21 process still applies.",
    sources: [
      {
        label: "Tenancy deposit protection: Overview",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/tenancy-deposit-protection",
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
        title: "Deposit Rules (Ontario)",
        content: {
          kind: "list",
          items: [
            "Rental law is provincial, not federal. This reflects Ontario's Residential Tenancies Act specifically; other provinces set their own rules.",
            "In Ontario, landlords cannot charge a security/damage deposit at all. They can only collect a 'last month's rent' deposit, capped at one month's rent, which must earn annual interest and be applied to your final month.",
          ],
        },
      },
      {
        title: "Rent Increases & Eviction",
        content: {
          kind: "list",
          items: [
            "Rent can only be raised once every 12 months, and only up to Ontario's annual rent increase guideline (1.9% for 2027) for units first occupied on or before November 15, 2018, with at least 90 days' written notice on the official LTB form.",
            "Self-help eviction (changing locks, removing belongings) is illegal; landlords must obtain an order from the Landlord and Tenant Board (LTB) before a tenant can be evicted.",
          ],
        },
      },
    ],
    gotcha:
      "Ontario landlords legally cannot charge a security deposit at all, only a capped 'last month's rent' deposit that earns interest. If a landlord asks for an extra damage deposit on top of first and last month's rent, that request itself is against Ontario law, not just something you can negotiate down.",
    sources: [
      {
        label: "Renting in Ontario: Your rights",
        publisher: "Government of Ontario",
        url: "https://www.ontario.ca/page/renting-ontario-your-rights",
      },
      {
        label: "Residential rent increases",
        publisher: "Government of Ontario",
        url: "https://www.ontario.ca/page/residential-rent-increases",
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
        title: "Bond Rules (New South Wales)",
        content: {
          kind: "list",
          items: [
            "Rental law is state-based, not federal. This reflects New South Wales specifically; other states (Victoria, Queensland, etc.) set their own rules and caps.",
            "In NSW, the bond is capped at 4 weeks' rent and must be lodged with NSW Fair Trading's Rental Bonds Online service. Landlords cannot simply hold your bond themselves.",
          ],
        },
      },
      {
        title: "Rent Increases & Eviction",
        content: {
          kind: "list",
          items: [
            "As of October 31, 2024, rent can be increased no more than once every 12 months in NSW.",
            "As of May 19, 2025, NSW banned 'no-grounds' evictions outright. A landlord must have and be able to show a valid legal reason to end a tenancy, not just decline to renew.",
          ],
        },
      },
    ],
    gotcha:
      "Two of the biggest tenant protections in NSW, the once-a-year cap on rent increases and the ban on 'no-grounds' evictions, are both very recent (late 2024 and mid-2025). Older advice about Australian renting, or advice calibrated to a different state, can easily be out of date or inapplicable to where you actually are.",
    sources: [
      {
        label: "New residential tenancy laws",
        publisher: "NSW Fair Trading, NSW Government",
        url: "https://www.fairtrading.nsw.gov.au/housing-and-property/renting/new-residential-tenancy-laws",
      },
      {
        label: "Rental Bonds Online for tenants",
        publisher: "NSW Fair Trading, NSW Government",
        url: "https://www.fairtrading.nsw.gov.au/housing-and-property/renting/rental-bonds-online",
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
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "The deposit is capped at 1 month's rent, and must be returned at the end of the tenancy unless there's damage beyond normal wear and tear, unpaid rent, or you left before a fixed term ended.",
            "Disputes over deposits (and most other tenancy issues) go through the Residential Tenancies Board (RTB), which offers free dispute resolution.",
          ],
        },
      },
      {
        title: "Rent Increases & Notice",
        content: {
          kind: "list",
          items: [
            "As of March 1, 2026, Ireland replaced its old 'Rent Pressure Zone' patchwork with a single national rent control system covering all private tenancies. Increases are capped at 2% or the rate of CPI inflation, whichever is lower.",
            "A landlord must give at least 90 days' written notice of a rent increase, stating the new rent, effective date, and how it was calculated.",
            "As of March 2026, ending a tenancy requires 90 to 224 days' notice (scaling with how long you've lived there) and a specific legal reason. A landlord can no longer simply decline to renew without cause.",
          ],
        },
      },
    ],
    gotcha:
      "Ireland's rent control system changed nationally in March 2026. The old 'Rent Pressure Zone' system, which only capped increases in specific designated areas, is gone, replaced by a single 2%-or-CPI cap covering every private tenancy in the country. If you're reading pre-2026 material about Irish renting, the geographic patchwork it describes no longer exists.",
    sources: [
      {
        label: "Rent Pressure Zones",
        publisher: "Department of Housing, Local Government and Heritage, Ireland",
        url: "https://www.gov.ie/en/department-of-housing-local-government-and-heritage/publications/rent-pressure-zones/",
      },
      {
        label: "A Guide to the Residential Tenancies Act",
        publisher: "Residential Tenancies Board (RTB), Ireland",
        url: "https://rtb.ie/wp-content/uploads/2025/06/Good_Landlord_Tenant_Guide_V4.pdf",
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
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "Under the NRAU (Novo Regime do Arrendamento Urbano), the deposit (caução) is capped at 2 months' rent for both residential and non-residential leases.",
            "The deposit guarantees compliance with the contract (unpaid rent, damage, or end-of-lease cleaning) and must be returned if there's nothing to deduct.",
          ],
        },
      },
      {
        title: "Notice Periods & Eviction Protections",
        content: {
          kind: "list",
          items: [
            "As a tenant ending a lease early, required notice is 120 days for contracts longer than 1 year, or 60 days for contracts of 1 year or less.",
            "If a landlord wants the property back for personal/family use or major renovation, they must give at least 6 months' notice and, in some cases, pay compensation equivalent to 2 years' rent.",
            "Tenants over 65 or with serious disabilities have added protection against arbitrary eviction beyond the general rules.",
          ],
        },
      },
    ],
    gotcha:
      "Portugal gives real teeth to a landlord's ability to reclaim a property for personal use, but only if they follow the process: minimum 6 months' notice, and potentially owing you 2 years' rent in compensation. A landlord vaguely saying they 'need the place back' with short notice isn't automatically entitled to it under Portuguese law.",
    sources: [
      {
        label: "Legislação sobre o Arrendamento Urbano (NRAU)",
        publisher: "Portal da Habitação, Portugal",
        url: "https://www.portaldahabitacao.pt/pt/nrau/home/Legislacao_arrendamento_urbano.html",
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
        title: "Deposit & Guarantee Rules",
        content: {
          kind: "list",
          items: [
            "A cash security deposit (caução) is capped at 3 months' rent by the Lei do Inquilinato (Law 8.245/91), must be placed in a savings account, and is returned with interest at the end of the lease.",
            "A landlord cannot require more than one type of guarantee on the same contract. A cash deposit and a guarantor (fiador) together is not legally allowed; it's one or the other.",
          ],
        },
      },
      {
        title: "Eviction (Despejo)",
        content: {
          kind: "list",
          items: [
            "Eviction requires a judicial order, a court process, not a landlord's own decision, even for unpaid rent.",
            "If you fall behind on rent and have no guarantee in place (deposit or guarantor), the landlord can pursue an expedited eviction process with as little as 15 days' notice before the initial hearing; with a guarantee in place, the standard process typically allows 30 days for voluntary move-out.",
          ],
        },
      },
    ],
    gotcha:
      "Whether you have a guarantor or paid a cash deposit genuinely changes how fast a Brazilian eviction can move if you fall behind on rent; no guarantee at all shortens the timeline considerably. It's not just a formality landlords ask for; it materially affects your legal runway if things go wrong.",
    sources: [
      {
        label: "Lei nº 8.245, de 18 de Outubro de 1991 (Lei do Inquilinato)",
        publisher: "Presidência da República (Planalto), Brazil",
        url: "https://www.planalto.gov.br/ccivil_03/leis/l8245.htm",
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
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "Under the Ley General de Arrendamientos Urbanos y Suburbanos (Law No. 7527), the security deposit is capped at 1 month's rent; any contract clause demanding more is legally void.",
          ],
        },
      },
      {
        title: "Eviction (Desalojo)",
        content: {
          kind: "list",
          items: [
            "Eviction runs through an administrative process, not self-help: notification to the tenant, a hearing, and then execution of any eviction order. A landlord can't remove you or your belongings unilaterally.",
          ],
        },
      },
    ],
    gotcha:
      "A landlord in Costa Rica asking for more than one month's rent as a security deposit is asking for something the law explicitly voids. That clause has no legal force even if you signed it, since Law 7527 sets a hard 1-month cap regardless of what the contract says.",
    sources: [
      {
        label: "Ley General de Arrendamientos Urbanos y Suburbanos, Nº 7527",
        publisher: "Sistema Costarricense de Información Jurídica (SCIJ), Procuraduría General de la República",
        url: "http://www.pgrweb.go.cr/scij/busqueda/normativa/normas/nrm_texto_completo.aspx?nValor1=1&nValor2=23655",
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
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "For residential leases, the security deposit is capped at 2 months' rent, on top of 1 month's rent paid in advance.",
            "A 2025 Office of Consumer Protection Board (OCPB) notification adds real teeth for professional/business landlords (those with 3+ rental units): they must return the deposit within 15 days of move-out or face statutory penalties.",
            "If you end the lease before completing the first year, the deposit is generally forfeited under standard lease terms.",
          ],
        },
      },
      {
        title: "Eviction Protections",
        content: {
          kind: "list",
          items: [
            "Self-help eviction (changing locks, removing belongings, cutting utilities) is illegal in Thailand and can expose the landlord to criminal charges, even if you've stopped paying rent.",
            "A landlord must go through the legal process: written notice (commonly at least 30 days) with a stated cause, and formal court action if you don't leave voluntarily.",
          ],
        },
      },
    ],
    gotcha:
      "A landlord in Thailand cutting your utilities or changing the locks because you're behind on rent isn't a legal gray area: it's illegal self-help eviction, a criminal matter, regardless of whether you actually owe money. Owing rent doesn't waive your right to a proper legal eviction process.",
    sources: [
      {
        label: "Office of the Consumer Protection Board (OCPB)",
        publisher: "Office of the Consumer Protection Board, Thailand",
        url: "https://www.ocpb.go.th/ewtadmin/ewt/ocpb_en/main.php?filename=index___EN",
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
        title: "Two Very Different Rental Systems",
        content: {
          kind: "namedList",
          items: [
            {
              name: "Jeonse (전세)",
              description:
                "You pay a massive upfront lump sum, often 50–80% of the property's market value, instead of monthly rent. It functions as an interest-free loan to the landlord for the lease term and is returned in full at the end, assuming the landlord can repay it.",
            },
            {
              name: "Wolse (월세)",
              description:
                "The system most familiar to foreigners: a smaller upfront deposit plus ordinary monthly rent, typically on a 1–2 year contract.",
            },
          ],
        },
      },
      {
        title: "Tenant Protections",
        content: {
          kind: "list",
          items: [
            "The Housing Lease Protection Act gives tenants a one-time right to unilaterally renew for an additional 2 years after an initial 2-year lease (4 years total), with any rent increase on that renewal capped at 5%.",
            "To protect a jeonse or wolse deposit, tenants can register a fixed-date claim ('확정일자') on the lease, which establishes their priority to be repaid from the property if it's ever sold or foreclosed on; skipping this step leaves a large deposit much more exposed.",
          ],
        },
      },
    ],
    gotcha:
      "Jeonse is genuinely unlike anything in U.S. renting: handing a landlord an amount equal to half or more of a property's value, with no monthly rent, is normal in Korea and alarming everywhere else. If you go this route, registering your fixed-date claim (확정일자) isn't optional paperwork: it's what actually protects a deposit that size if the property changes hands or goes into foreclosure.",
    sources: [
      {
        label: "Housing Lease Protection Act (English)",
        publisher: "Korea Ministry of Government Legislation, National Law Information Center",
        url: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=220619&chrClsCd=010203&urlMode=engLsInfoR&viewCls=engLsInfoR",
      },
    ],
  },
  {
    slug: "italy",
    name: "Italy",
    flagEmoji: "🇮🇹",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "The security deposit (cauzione) is capped by law at 3 months' rent.",
            "The deposit legally accrues interest for the tenant every year; a contract clause stating it's interest-free is void even if you signed it.",
            "The landlord must return the deposit after the final walkthrough unless they can document specific damage; they can't simply keep it without justification.",
          ],
        },
      },
      {
        title: "Lease Length (the '4+4' Rule)",
        content: {
          kind: "list",
          items: [
            "Under Article 2 of Law 431/1998, an ordinary residential lease has a legal minimum term of 4 years, automatically renewed for another 4 years, commonly called '4+4.' This minimum is set by law and isn't something you or the landlord can contract around to something shorter.",
            "A separate, shorter 'canone concordato' (agreed-rent) lease type exists with different terms, typically 3 years renewable for 2 ('3+2'), tied to local rent agreements.",
          ],
        },
      },
    ],
    gotcha:
      "Italy's standard residential lease has a legally mandated minimum term of 4 years, automatically renewing for another 4 ('4+4') under Law 431/1998, regardless of what a shorter written contract might say. If you're renting long-term in Italy, this default duration is baked into the law itself, not just a landlord's preference, so it's worth understanding before you sign anything that looks like a shorter fixed term.",
    sources: [
      {
        label: "Legge 9 dicembre 1998, n. 431 (Disciplina delle locazioni)",
        publisher: "Parlamento Italiano",
        url: "https://www.parlamento.it/parlam/leggi/98431l.htm",
      },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flagEmoji: "🇳🇱",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "As of July 1, 2023, the security deposit (waarborgsom) is capped at 2 months' base rent (excluding service costs).",
            "Under Article 7:261b of the Dutch Civil Code, the landlord must repay the deposit within 14 days of the lease ending, provided the property is returned as agreed and undamaged.",
            "If there's damage or unpaid rent, the landlord must specifically itemize what's being deducted; they can't just withhold a vague lump sum.",
          ],
        },
      },
      {
        title: "Lease Type & Notice",
        content: {
          kind: "list",
          items: [
            "As of July 1, 2024 (Wet vaste huurcontracten), landlords can generally only offer indefinite-term leases for new rentals, not fixed-term contracts, with limited exceptions for specific groups like students.",
            "Fixed-term leases signed before July 1, 2024 aren't affected and still end automatically at their agreed date.",
            "With an indefinite lease, a landlord can't simply decline to renew or end it without a legally valid reason and, in most cases, a court's involvement.",
          ],
        },
      },
    ],
    gotcha:
      "A lot of general advice about renting in the Netherlands still assumes fixed-term leases are normal; as of July 1, 2024, they mostly aren't anymore for new rentals. Landlords are now required to offer indefinite contracts by default, which is a real, recent legal shift that changes how much notice-based protection you actually have compared to older guidance.",
    sources: [
      {
        label: "Woning huren: waarborgsom",
        publisher: "Rijksoverheid (Government of the Netherlands)",
        url: "https://www.rijksoverheid.nl/onderwerpen/woning-huren/vraag-en-antwoord/woning-huren-waarborgsom",
      },
      {
        label: "Wet vaste huurcontracten vanaf 1 juli 2024 van kracht",
        publisher: "Rijksoverheid (Government of the Netherlands)",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2024/06/07/wet-vaste-huurcontracten-vanaf-1-juli-2024-van-kracht",
      },
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flagEmoji: "🇨🇭",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "Under Article 257e of the Swiss Code of Obligations, the security deposit (Mietkaution) is capped at 3 months' rent and must be held in a dedicated bank account in the tenant's own name, not just kept by the landlord.",
            "After you move out, the landlord has 30 days to release the deposit or formally raise a claim against it. If they don't assert a claim within 1 year of the tenancy ending, you can demand the bank release the deposit to you directly.",
          ],
        },
      },
      {
        title: "Notice Periods",
        content: {
          kind: "list",
          items: [
            "Standard notice is 3 months, and Swiss practice is notably strict about it: notice periods are usually tied to specific calendar termination dates (commonly March 31, June 30, or September 30), and a termination letter delivered even one day late can reset the entire notice period.",
            "You can't be evicted without formal, properly served written notice. If a landlord's notice looks improper or retaliatory, you can contest it for free through the cantonal Schlichtungsbehörde (conciliation authority).",
          ],
        },
      },
    ],
    gotcha:
      "Swiss notice periods are rigid in a way that actually tends to favor tenants who know the rules: because termination has to hit an exact calendar date and be properly delivered, a landlord's notice that's even slightly late or improperly served can be voided by a Swiss court, potentially locking them into the lease for months longer than they intended. It's worth knowing this cuts both ways if you're the one trying to give notice too.",
    sources: [
      {
        label: "Schweizerisches Obligationenrecht (Code of Obligations), incl. Art. 257e",
        publisher: "Fedlex (Swiss Federal Council)",
        url: "https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flagEmoji: "🇳🇿",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Bond Rules",
        content: {
          kind: "list",
          items: [
            "The bond (deposit) is capped at 4 weeks' rent.",
            "Landlords must lodge the bond with Tenancy Services (a government body) within 23 working days of receiving it; they can't simply hold it themselves.",
            "At the end of the tenancy, both parties apply online for the refund. If you and the landlord disagree on the amount, Tenancy Services holds the bond until the Tenancy Tribunal decides.",
          ],
        },
      },
      {
        title: "Ending a Tenancy",
        content: {
          kind: "list",
          items: [
            "As of January 30, 2025, landlords can end a periodic (rolling) tenancy 'no cause,' with 90 days' notice, or with just 42 days' notice for specific grounds like the owner needing the property as their own home or an unconditional sale.",
            "As a tenant, your own notice period to end a periodic tenancy is 21 days (reduced from 28 days by the same 2025 amendment).",
            "A fixed-term tenancy automatically converts to a periodic (rolling) tenancy at the end of its term unless either side gives notice between 90 and 21 days before it ends.",
          ],
        },
      },
    ],
    gotcha:
      "New Zealand actually reversed course on tenant protections: 'no cause' terminations, where a landlord doesn't have to give any specific reason, were reintroduced in January 2025 with 90 days' notice. If you're reading older guidance describing New Zealand as having ended no-cause terminations, that's now out of date, it's back, in the opposite direction from what the UK did around the same time.",
    sources: [
      {
        label: "Changes to tenancy terminations now in force",
        publisher: "Tenancy Services, New Zealand Government",
        url: "https://www.tenancy.govt.nz/about-tenancy-services/news/changes-to-tenancy-terminations-now-in-force/",
      },
      {
        label: "About lodging a bond",
        publisher: "Tenancy Services, New Zealand Government",
        url: "https://www.tenancy.govt.nz/rent-bond-and-bills/bond/about-lodging-a-bond/",
      },
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    flagEmoji: "🇻🇳",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Deposit Rules",
        content: {
          kind: "list",
          items: [
            "There's no single national cap on the deposit amount; it's set by the lease agreement itself, though it's meant to cover unpaid rent or damage and be returned (minus deductions) at the end of the lease.",
            "Lease agreements aren't required to be notarized in most cases, but notarizing one is commonly recommended to reduce legal risk, since an unnotarized private agreement can be harder to enforce.",
          ],
        },
      },
      {
        title: "Mandatory Residence Registration",
        content: {
          kind: "list",
          items: [
            "Whoever manages your accommodation (your landlord, or the property manager) is legally required to declare your temporary residence to the local Commune/Ward Police, generally within 12 hours of you moving in (up to 24 hours in remote or isolated areas).",
            "This can be done online through the provincial Immigration Division's portal or the Ministry of Public Security's public service portal, or in person at the local police station.",
          ],
        },
      },
    ],
    gotcha:
      "This isn't a landlord courtesy, it's a legal requirement tied to Vietnam's residence-declaration system, and it applies within hours of you moving in, not weeks. If you're renting privately (not through a hotel, which handles this automatically), confirm your landlord has actually filed the declaration, since it's their legal responsibility, not yours, but you're the one who can face problems with authorities if it wasn't done.",
    sources: [
      {
        label: "Guidance on Declaration of Foreigners' Temporary Residence in Vietnam",
        publisher: "Vietnam Immigration Department",
        url: "https://xuatnhapcanh.gov.vn/en/tin-tuc/guidance-declaration-foreigners%E2%80%99-temporary-residence-vietnam-commune-level",
      },
    ],
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flagEmoji: "🇮🇩",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "No Dedicated Tenant-Protection Statute",
        content: {
          kind: "list",
          items: [
            "Unlike most countries on this site, Indonesia doesn't have a dedicated residential tenancy law with statutory caps on deposits or standardized notice periods. Rental relationships are governed mainly by Indonesia's general Civil Code (KUHPerdata) contract provisions and whatever you actually sign.",
            "This means the specific written lease agreement carries even more weight than usual: deposit amount, notice period, and renewal terms are whatever the contract says, not a legal floor you can fall back on.",
          ],
        },
      },
      {
        title: "Payment Rules",
        content: {
          kind: "list",
          items: [
            "Under Indonesia's foreign exchange regulations, financial transactions within Indonesia, including rent, are required to be conducted in Indonesian Rupiah (IDR), not foreign currency, even if a listing was advertised in USD.",
          ],
        },
      },
    ],
    gotcha:
      "Indonesia is a genuine outlier among the countries on this site: there's no dedicated statutory tenant-protection law setting deposit caps or minimum notice periods the way Spain, Germany, or Portugal have. Whatever you sign really is close to the whole deal, so reading your actual lease contract carefully matters even more here than in places with a strong legal floor underneath it.",
    sources: [
      {
        label: "Peraturan Bank Indonesia Nomor 17/3/PBI/2015 (Kewajiban Penggunaan Rupiah)",
        publisher: "Bank Indonesia",
        url: "https://www.bi.go.id/id/publikasi/peraturan/Pages/pbi_170315.aspx",
      },
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    flagEmoji: "🇵🇭",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Rent Control Only Covers Cheaper Units",
        content: {
          kind: "list",
          items: [
            "The Rent Control Act (RA 9653) caps annual rent increases at 7% for an occupied unit, but only for units renting at or below ₱10,000/month in Metro Manila or ₱5,000/month elsewhere; the coverage thresholds are periodically renewed by government resolution rather than being permanent.",
            "Most housing marketed to foreigners, condos and serviced apartments in Manila, Cebu, or other expat hubs, rents well above those thresholds, which puts it outside rent control entirely and back under ordinary Civil Code freedom-of-contract rules.",
          ],
        },
      },
      {
        title: "Deposits and Advance Rent",
        content: {
          kind: "list",
          items: [
            "For units that do fall under RA 9653's rent-control coverage, advance rent is capped at 1 month and the security deposit at 2 months.",
            "Outside that coverage (which, again, is where most foreign renters end up), deposit and advance-rent amounts are whatever you and the landlord agree to in the contract; there's no statutory cap.",
          ],
        },
      },
    ],
    gotcha:
      "The deposit caps, rent-increase limits, and eviction-notice protections that make Philippine rental law sound tenant-friendly almost all live inside the Rent Control Act, and that Act only reaches units renting below roughly ₱10,000 (Metro Manila) or ₱5,000 (elsewhere) a month. A typical expat-oriented condo lease is priced well above that line, so in practice you're relying on the Civil Code's general lease provisions and whatever your specific contract says, not the stronger protections you might read about first.",
    sources: [
      {
        label: "Republic Act No. 9653 (Rent Control Act of 2009)",
        publisher: "Republic of the Philippines (via LawPhil Project statute archive)",
        url: "https://www.lawphil.net/statutes/repacts/ra2009/ra_9653_2009.html",
      },
    ],
  },
  {
    slug: "india",
    name: "India",
    flagEmoji: "🇮🇳",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "No Single National Rental Law",
        content: {
          kind: "list",
          items: [
            "Housing falls under the State List in India's Constitution, so there's no single nationwide rent-control or tenancy law; each state has its own Rent Control Act, and the rules that actually apply to you depend entirely on which state (and sometimes city) you're renting in.",
            "In 2021, the central government approved the Model Tenancy Act as a suggested framework for states to adopt, but it's non-binding. Only a handful of states (including Andhra Pradesh, Assam, Tamil Nadu, and Uttar Pradesh) have updated their laws along its lines; many others, including Maharashtra, Karnataka, and West Bengal, still run on their older, separate Rent Control Acts.",
          ],
        },
      },
      {
        title: "What This Means Practically",
        content: {
          kind: "list",
          items: [
            "Deposit limits, notice periods, and eviction protections that hold in one Indian state may simply not exist, or work completely differently, in the next state over. There's no way to give one accurate national answer the way you can for a single-country civil code system.",
            "Before signing, it's worth specifically checking which Rent Control Act (or Model Tenancy Act-based law) applies in the state and city where you're actually renting, rather than relying on general advice about 'India.'",
          ],
        },
      },
    ],
    gotcha:
      "This is the one entry on this site where the honest answer to 'what are the rules' is: it depends on which state you're in. India's rent laws are genuinely fragmented at the state level, and a rule you read about (say, from a Delhi-focused blog) may not apply at all if you're renting in Bangalore or Mumbai. Confirm the specific state law before assuming anything general applies to your lease.",
    sources: [
      {
        label: "The Model Tenancy Act, 2021",
        publisher: "Ministry of Housing and Urban Affairs, Government of India",
        url: "https://mohua.gov.in/cms/modeltenancyact.php",
      },
    ],
  },
  {
    slug: "panama",
    name: "Panama",
    flagEmoji: "🇵🇦",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Security Deposit Goes to the Government, Not the Landlord",
        content: {
          kind: "list",
          items: [
            "Under Panama's Ley 93 de 1973 (the general rental law), a landlord who collects a security deposit (typically one month's rent) is required to deposit those funds with the Ministry of Housing and Land Use Planning (MIVIOT), not just hold onto them personally, and give the tenant the deposit receipt.",
            "Landlords are also required to file a copy of the signed rental contract with MIVIOT's General Directorate of Rentals within 5 business days of signing.",
          ],
        },
      },
      {
        title: "Rent Increase Controls Only Apply to Cheap Units",
        content: {
          kind: "list",
          items: [
            "Rent-increase restrictions under Ley 93 only bind housing renting for around $150/month or less; any increase on those units needs MIVIOT's express authorization.",
            "Typical expat-oriented apartments in Panama City or other popular areas rent far above that figure, so in practice you're negotiating rent increases directly with your landlord rather than relying on a statutory cap.",
          ],
        },
      },
    ],
    gotcha:
      "The deposit-with-MIVIOT and contract-filing requirements technically apply across the board, not just to cheap units, but enforcement in practice is inconsistent, and plenty of landlords (especially for higher-end expat rentals) skip the government filing step entirely. Don't assume your deposit is sitting with the Ministry of Housing just because the law says it should be; ask directly and get the receipt in your own name.",
    sources: [
      {
        label: "Ley 93 de 1973 (Ley de Arrendamientos)",
        publisher: "Órgano Judicial de Panamá",
        url: "https://www.organojudicial.gob.pa/cendoj/documentacion-cendoj/ordenamiento-juridico/area-jurisdiccional/civil/ley-93-de-1973",
      },
    ],
  },
  {
    slug: "colombia",
    name: "Colombia",
    flagEmoji: "🇨🇴",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "No Cash Security Deposits",
        content: {
          kind: "list",
          items: [
            "Colombia's Ley 820 de 2003 (the national urban housing rental law) specifically prohibits landlords from requiring a cash deposit as a guarantee. Instead, landlords can require a rental insurance policy (póliza de arrendamiento), a CD/certificate of deposit (CDT) in the tenant's name, or advance payment of a few months' rent.",
            "If a landlord asks you for a plain cash deposit as security, that specific arrangement isn't actually what the law contemplates, even though it's still common informal practice.",
          ],
        },
      },
      {
        title: "Rent Increases",
        content: {
          kind: "list",
          items: [
            "Annual rent increases are capped at the prior year's CPI/IPC (Colombia's consumer price index), not an arbitrary landlord-set number.",
          ],
        },
      },
      {
        title: "Ending a Lease",
        content: {
          kind: "list",
          items: [
            "If a landlord wants to end the lease at a renewal date rather than continuing it, they must give at least 3 months' written notice before that renewal date, and pay the tenant compensation equal to 3 months' rent, deposited with an authorized entity (Banco Agrario de Colombia).",
          ],
        },
      },
    ],
    gotcha:
      "The plain-cash-deposit ban is worth knowing specifically because it cuts against what a lot of foreign renters expect coming from countries where a cash deposit is completely normal. If your prospective landlord in Colombia is asking for cash upfront as a 'deposit' rather than one of the legally contemplated alternatives (insurance policy, CDT, or rent prepayment), that's worth a conversation, not just an assumption that it's standard.",
    sources: [
      {
        label: "Ley 820 de 2003 (Régimen de Arrendamiento de Vivienda Urbana)",
        publisher: "Departamento Administrativo de la Función Pública, Colombia",
        url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8738",
      },
    ],
  },
];
