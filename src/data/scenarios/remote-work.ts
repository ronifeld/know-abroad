// Working Remotely on a Tourist Stay scenario. Content drafted from official
// / authoritative sources as of each country's `lastVerified` date; re-check
// before relying on any of it. Written for U.S. citizens working remotely
// for a U.S. employer/clients while on a tourist stay abroad.
import type { CountryContent } from "@/types/scenario";

export const remoteWorkCountries: CountryContent[] = [
  {
    slug: "portugal",
    name: "Portugal",
    flagEmoji: "🇵🇹",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Working on a Tourist Stay",
        content: {
          kind: "list",
          items: [
            "A Schengen tourist stay does not authorize 'gainful activity' — immigration law generally defines work by where it's physically performed, not by where your employer or clients are based, so logging into a U.S. job from Lisbon is technically outside what a tourist stay permits.",
            "In practice, enforcement against quiet remote workers on a tourist stay is essentially nonexistent — but if it's ever discovered (a visa interview, an inspection, even social media), consequences can include visa cancellation, deportation, and future entry bans.",
            "The actual authorized path is Portugal's remote-work/digital-nomad residency route (see the Visa & Immigration page for Portugal), which requires foreign-sourced income of roughly 4x Portugal's minimum wage and must be arranged before you travel.",
          ],
        },
      },
      {
        title: "Tax Residency Trigger",
        content: {
          kind: "list",
          items: [
            "You become a Portuguese tax resident once you've spent more than 183 days — consecutive or not — in Portugal within any 12-month period.",
            "Once you're a tax resident, Portugal taxes your worldwide income, not just what's Portugal-sourced.",
          ],
        },
      },
      {
        title: "The Old NHR Tax Break Is Gone",
        content: {
          kind: "list",
          items: [
            "Portugal's well-known NHR (Non-Habitual Resident) tax regime closed to new applicants as of 2024, with a final cutoff around March 2025.",
            "Its replacement, IFICI ('NHR 2.0'), is much narrower — aimed at scientific research, higher education, and innovation-related roles — and doesn't cover most ordinary remote workers or freelancers the way NHR did.",
            "You must apply for IFICI (if you qualify) through the Portal das Finanças by January 15 of the year after you become tax resident — miss that window and you lose it for that year.",
          ],
        },
      },
    ],
    gotcha:
      "A lot of digital-nomad advice about Portugal still references the old NHR tax break as if it's available to any remote worker who moves there — it isn't. NHR closed to new applicants back in 2024/2025, and its replacement (IFICI) is a much narrower program for research and innovation roles, not general remote work. If you cross 183 days in Portugal today, you become a tax resident on your full worldwide income at ordinary Portuguese rates, full stop, unless you separately qualify for something like IFICI.",
    sources: [
      {
        label: "Código do IRS — Artigo 16.º (Residência)",
        publisher: "Autoridade Tributária e Aduaneira (Portuguese Tax Authority)",
        url: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs16.aspx",
      },
      {
        label: "IFICI — Incentivo Fiscal à Investigação Científica e Inovação",
        publisher: "Autoridade Tributária e Aduaneira (Portuguese Tax Authority)",
        url: "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/incentivos_investigacao.pdf",
      },
      {
        label: "Schengen Visa (Business/Tourism) — 'provided that no economic activity is being pursued'",
        publisher: "Federal Foreign Office (Auswärtiges Amt) — German Missions in the United States (general Schengen-wide rule, illustrated for U.S. citizens)",
        url: "https://www.germany.info/us-en/service/visa/business-visa-963542",
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
        title: "Working on a Visa-Exempt Stay",
        content: {
          kind: "list",
          items: [
            "Thai law defines 'work' broadly — generally any exertion of effort or skill for income while physically present in Thailand counts, even if your employer and clients are entirely outside the country.",
            "This means working remotely on a plain tourist/visa-exempt stay sits in a genuine legal gray zone: widely done, rarely enforced against quiet remote workers historically, but not actually authorized by the visa-exempt entry itself.",
          ],
        },
      },
      {
        title: "Destination Thailand Visa (DTV) — the actual legal path",
        content: {
          kind: "list",
          items: [
            "Launched to formalize remote work, the DTV lets remote employees of foreign companies and freelancers with foreign clients stay in Thailand for up to 180 days per entry (extendable once for another 180), on a visa valid for multiple entries over 5 years.",
            "Financial requirement: bank statements showing a balance of at least 500,000 THB.",
            "You must apply from outside Thailand — it can't be arranged once you're already in the country.",
            "The DTV explicitly does not authorize working for Thai companies or invoicing Thai clients — it only legalizes remote work for employers/clients based outside Thailand, and it isn't a general work permit.",
          ],
        },
      },
      {
        title: "Tax Residency Trigger",
        content: {
          kind: "list",
          items: [
            "You become a Thai tax resident once you've spent 180 days or more in Thailand in a calendar year.",
            "Since a Revenue Department rule change effective January 1, 2024 (Instruction Por. 161/2566), foreign-sourced income you remit into Thailand is taxable in the year you remit it, regardless of what year you earned it — previously, income only avoided tax if remitted in a later calendar year than it was earned.",
            "A further easing has been proposed (expected around the 2026 filing period) that would exempt foreign income remitted in the same year it's earned or the year after — but as of this writing that change is still a proposal, not settled law.",
          ],
        },
      },
    ],
    gotcha:
      "Before the DTV existed, remote work in Thailand ran entirely on quiet, unenforced tolerance of tourist-visa work — genuinely not authorized, just not policed. The DTV is Thailand's real answer: a legitimate way to work remotely there for up to 180 days per entry, renewable — but it explicitly still doesn't let you work for Thai companies or bill Thai clients, and separately, Thailand's 2024 tax rule change means remitted foreign income is now taxed the year you bring it in, not shielded just by waiting a year like the old rule allowed.",
    sources: [
      {
        label: "Checklist of Destination Thailand Visa (DTV)",
        publisher: "Ministry of Foreign Affairs of Thailand",
        url: "https://image.mfa.go.th/mfa/0/n3gTFT2TOE/Visa_Requirements/Checklist_DTV.pdf",
      },
      {
        label: "How Do Foreigners Living in Thailand Pay Tax (incl. foreign-sourced income remittance rule)",
        publisher: "The Revenue Department, Thailand",
        url: "https://www.rd.go.th/fileadmin/user_upload/lorkhor/newspr/2024/FOREIGNERS_PAY_TAX2024.pdf",
      },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    flagEmoji: "🇪🇸",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "Working on a Tourist Stay",
        content: {
          kind: "list",
          items: [
            "As in the rest of the Schengen Area, a visa-free tourist stay in Spain does not authorize 'actividad lucrativa' (gainful/paid activity) — the restriction applies regardless of whether your employer or clients are Spanish or foreign.",
            "The actual authorized route for remote work is Spain's digital nomad visa (introduced under the 2023 Startups Law), for employees of non-Spanish companies or freelancers earning primarily from non-Spanish clients — see the Visa & Immigration page for Spain for entry-type details.",
          ],
        },
      },
      {
        title: "Tax Residency Trigger",
        content: {
          kind: "list",
          items: [
            "You're a Spanish tax resident for a given calendar year if you spend more than 183 days in Spain, whether or not those days are consecutive — sporadic absences still count toward the total unless you can prove tax residency elsewhere.",
            "Once resident, Spain taxes your worldwide income on progressive rates reaching up to 47%, a significant jump from the flat 19–24% non-resident rate that applies only to Spanish-source income.",
          ],
        },
      },
      {
        title: "The Digital Nomad Tax Break (Beckham Law)",
        content: {
          kind: "list",
          items: [
            "Digital nomad visa holders who become Spanish tax residents can opt into Spain's special expat tax regime (informally the 'Beckham Law'): a flat 24% rate on qualifying income up to €600,000/year (47% above that), instead of ordinary progressive rates, for up to 6 tax years.",
            "This flat-rate option is generally available to remote employees of a non-Spanish company; self-employed/freelance digital nomad visa holders typically do not qualify for it.",
            "You must actively apply for this regime (Modelo 149) within 6 months of your move to Spain — it is not automatic, and you must not have been a Spanish tax resident in the prior 5 years to qualify.",
          ],
        },
      },
    ],
    gotcha:
      "Spain's digital nomad visa comes with a genuinely good tax perk most people don't know about: a flat 24% rate on income up to €600,000 instead of Spain's ordinary progressive rates (up to 47%) — but only if you're an employee (not self-employed) and only if you actively file for it within 6 months of moving. Miss that 6-month window, or freelance instead of being on payroll, and you default straight into full progressive Spanish taxation on your worldwide income the moment you cross 183 days.",
    sources: [
      {
        label: "Residencia habitual en territorio español (183-day rule)",
        publisher: "Agencia Tributaria (Spanish Tax Agency)",
        url: "https://sede.agenciatributaria.gob.es/Sede/no-residentes/residencia-personas-fisicas-juridicas/persona-fisica-residente-espana.html",
      },
      {
        label: "Régimen fiscal aplicable a los trabajadores desplazados (Beckham Law)",
        publisher: "Agencia Tributaria (Spanish Tax Agency)",
        url: "https://sede.agenciatributaria.gob.es/Sede/irpf/tengo-que-presentar-declaracion/regimen-fiscal-aplicable-trabajadores-desplazados.html",
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
        title: "Working on a Visit Pass",
        content: {
          kind: "list",
          items: [
            "A tourist Short-Term Visit Pass doesn't formally authorize employment, following the same general pattern as most countries — but in practice, enforcement against quiet remote work for a foreign employer is essentially nonexistent.",
            "A visit pass alone (not a work pass) does not by itself make you a Singapore tax resident, regardless of how it's used.",
          ],
        },
      },
      {
        title: "Tax Residency & Foreign Income",
        content: {
          kind: "list",
          items: [
            "You become a Singapore tax resident if you're physically present or working in Singapore for 183 days or more in a calendar year, or hold a work pass valid for at least a year — a tourist pass doesn't meet either condition on its own.",
            "Even if you do become a tax resident, Singapore runs a territorial tax system: foreign-sourced income (like pay from a U.S. employer or U.S. clients) that you remit into Singapore is generally tax-exempt for individuals.",
          ],
        },
      },
    ],
    gotcha:
      "Singapore is a genuine exception to the usual warning on this page: even in the unlikely event you did trip Singapore's 183-day tax residency threshold, your foreign-sourced remote income remitted into Singapore is generally still tax-exempt under its territorial system. Most other stops on this list tax your full worldwide income once you cross their residency line — Singapore, notably, usually doesn't for this kind of income.",
    sources: [
      {
        label: "Working out my tax residency",
        publisher: "Inland Revenue Authority of Singapore (IRAS)",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency",
      },
      {
        label: "I am working for a Foreign Employer",
        publisher: "Inland Revenue Authority of Singapore (IRAS)",
        url: "https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/i-am-working-for-a-foreign-employer",
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
        title: "Working on a Tourist Visa",
        content: {
          kind: "list",
          items: [
            "A UAE tourist visa does not permit employment of any kind, including remote work for a foreign employer — the actual authorized route is the UAE's Remote Work (Virtual Working) Programme, a 1-year residence visa specifically for people employed by, or freelancing for, companies based outside the UAE.",
            "Working for a UAE-based employer or client while on a tourist or remote-work visa is a violation that can lead to fines, visa cancellation, and deportation.",
          ],
        },
      },
      {
        title: "Tax Residency",
        content: {
          kind: "list",
          items: [
            "The UAE has no personal income tax, so 'UAE tax residency' mostly matters for proving you're not tax-resident elsewhere, or for treaty purposes — not for owing UAE tax itself.",
            "Neither the tourist visa nor the Remote Work visa automatically makes you a UAE tax resident. You have to separately meet the criteria (generally 183+ days of physical presence) and apply for a formal Tax Residency Certificate — simply holding the visa or being physically present isn't enough on its own.",
          ],
        },
      },
    ],
    gotcha:
      "People chasing UAE tax residency to reduce their home-country tax bill often assume the Remote Work visa hands them that status automatically — it doesn't. You still have to separately apply for and be granted a Tax Residency Certificate, meeting the UAE's own presence and documentation criteria, regardless of what visa you're holding.",
    sources: [
      {
        label: "Visa Issuance (Virtual Work)",
        publisher: "General Directorate of Residency and Foreigners Affairs (GDRFA), Dubai",
        url: "https://www.gdrfad.gov.ae/en/services/64154a31-ec6d-11ec-140b-0050569629e8",
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
        title: "Working on a Tourist Stay",
        content: {
          kind: "list",
          items: [
            "A 180-day FMM tourist permit does not authorize employment — remote work for a U.S. employer or clients is not, strictly speaking, legal on a tourist entry, though enforcement against quiet remote workers is minimal in practice.",
          ],
        },
      },
      {
        title: "Tax Residency Isn't Just a Day Count",
        content: {
          kind: "list",
          items: [
            "Mexico's Federal Tax Code (Article 9) does not actually use a simple 183-day test — it looks at where you've 'established your home,' and if you have homes in two countries, at your 'center of vital interests.'",
            "You can be classified as a Mexican tax resident by SAT even with fewer than 183 days present, if Mexico is genuinely your center of vital interests (for example, more than 50% of your total income comes from Mexican sources).",
            "Conversely, temporarily occupying a property purely for tourist purposes generally does not, on its own, count as 'establishing a home' in Mexico — even over an extended stay — as long as your actual center of vital interests stays elsewhere.",
            "SAT has been reported to be tightening scrutiny of long-staying foreigners, cross-referencing migration and tax data, particularly around Americans and digital nomads earning in dollars without paying local tax.",
          ],
        },
      },
    ],
    gotcha:
      "The '183 days' figure that gets repeated everywhere for Mexico isn't actually how Mexican tax residency works — there's no day-count test in the law itself. SAT looks at where your 'center of vital interests' is, which means someone with most of their income Mexican-sourced could become a tax resident well before 183 days, while someone genuinely just staying in tourist housing might not trigger residency even after a long stay, as long as their real center of life stays elsewhere.",
    sources: [
      {
        label: "Código Fiscal de la Federación (incl. Art. 9)",
        publisher: "Servicio de Administración Tributaria (SAT), Mexico",
        url: "https://www.sat.gob.mx/cs/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1461172423392&ssbinary=true",
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
        title: "Working on a Tourist Stay",
        content: {
          kind: "list",
          items: [
            "A Schengen visa-free entry doesn't authorize professional activity — the safest legal interpretation is that remote work for a foreign employer isn't permitted on a plain tourist/visitor stay, even though enforcement against quiet remote workers is rare.",
            "France's tax authority (DGFiP) takes the position that work is considered 'carried out in France' when it's physically performed on French territory, regardless of where your employer or clients are based.",
          ],
        },
      },
      {
        title: "Tax Residency — Four Separate Tests",
        content: {
          kind: "list",
          items: [
            "You're a French tax resident if you meet ANY ONE of four independent criteria: France is your main home (foyer), you spend more than 183 days/year in France, France is the base of your main professional activity, or France is the center of your economic interests.",
            "This means the 183-day count is only one of four ways to trip into residency — someone who stays fewer than 183 days but has their main home or family in France can still be a tax resident, and someone who stays longer isn't automatically safe just because they think 183 days is the only rule.",
          ],
        },
      },
    ],
    gotcha:
      "A lot of advice about French tax residency treats the 183-day rule as the whole story — it's only one of four completely independent tests, any one of which triggers residency on its own. Someone spending 100 days a year in France but keeping their main home and family there can be a French tax resident regardless of the day count, while someone assuming 'I'm under 183 days so I'm fine' can be wrong for a completely different reason.",
    sources: [
      {
        label: "Résident de France",
        publisher: "Direction Générale des Finances Publiques (DGFiP), France",
        url: "https://www.impots.gouv.fr/resident-de-france",
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
        title: "Working on a Visa-Exempt Stay",
        content: {
          kind: "list",
          items: [
            "Temporary Visitor (visa-exempt) status explicitly does not authorize income-earning activity of any kind — this is stricter on paper than several other countries, which sometimes at least leave the question ambiguous.",
            "Japan launched an official Digital Nomad visa in March 2024 — a genuine legal path allowing eligible remote workers to live in Japan and work for foreign employers/clients for up to 6 months, with its own income and insurance requirements.",
          ],
        },
      },
    ],
    gotcha:
      "Japan's Temporary Visitor status is explicitly clear that it doesn't cover income-earning activity — there's less ambiguity here than in countries where the restriction is more of an unenforced technicality. If you're planning to actually work while in Japan for more than a short trip, the Digital Nomad visa launched in 2024 is a real, purpose-built legal option most people don't realize exists as an alternative to just risking it on a tourist entry.",
    sources: [
      {
        label: "Exemption of Visa (Short-Term Stay)",
        publisher: "Ministry of Foreign Affairs of Japan (MOFA)",
        url: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html",
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
        title: "Working While Visiting",
        content: {
          kind: "list",
          items: [
            "Since January 2024, UK Standard Visitor rules explicitly permit 'incidental' remote work for an overseas employer while visiting — responding to emails, joining calls, that sort of thing.",
            "What's not permitted is remote work being the primary purpose of your visit, or ongoing full-time remote employment for the duration of your stay. Home Office caseworkers assess this partly by whether a trip of that length would be financially viable without the remote income.",
          ],
        },
      },
      {
        title: "Tax Residency",
        content: {
          kind: "list",
          items: [
            "The UK's Statutory Residence Test (SRT) is more than a simple day count: spending more than 183 days in a tax year makes you UK tax resident automatically, but the SRT also has separate 'automatic' and 'sufficient ties' tests that can make you resident with far fewer days present, depending on your connections to the UK.",
          ],
        },
      },
    ],
    gotcha:
      "The UK is unusually explicit compared to most countries on this list — official Home Office guidance literally permits some remote work while visiting, rather than leaving it as an unspoken gray area. The catch is that the line is 'incidental' versus 'primary purpose,' a judgment call partly based on whether your trip would make financial sense without the remote income — not a clean number of hours or days you can point to.",
    sources: [
      {
        label: "Visit caseworker guidance",
        publisher: "UK Home Office",
        url: "https://www.gov.uk/government/publications/visit-guidance/visit-caseworker-guidance-accessible--2",
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
        title: "Visitor Status vs. Tax Residency",
        content: {
          kind: "list",
          items: [
            "Being a 'visitor' for immigration purposes and being a tax resident for CRA purposes are entirely separate determinations — you can retain ordinary visitor status the whole time and still become a deemed tax resident purely by day count.",
            "If you sojourn (are temporarily present) in Canada for 183 days or more in a calendar year, you're deemed a tax resident for that entire year under the Income Tax Act, taxed on worldwide income, even without any change in your immigration status.",
          ],
        },
      },
      {
        title: "Residential Ties Can Matter Even Sooner",
        content: {
          kind: "list",
          items: [
            "Beyond the 183-day sojourner rule, the CRA also looks at 'significant residential ties' — a home available to you, a spouse/partner, or dependents in Canada — which can result in Canada treating you as a resident for tax purposes even well short of 183 days.",
          ],
        },
      },
    ],
    gotcha:
      "Nothing about your Canadian immigration paperwork changes when you trip the 183-day tax threshold — you can be a perfectly ordinary 'visitor' the entire time and still become a deemed tax resident purely by day count, taxed on your full worldwide income for that year, with no visa or status change to tip you off that it happened.",
    sources: [
      {
        label: "Determining an Individual's Residence Status (Income Tax Folio S5-F1-C1)",
        publisher: "Canada Revenue Agency (CRA)",
        url: "https://www.canada.ca/en/revenue-agency/services/tax/technical-information/income-tax/income-tax-folios-index/series-5-international-residency/folio-1-residency/income-tax-folio-s5-f1-c1-determining-individual-s-residence-status.html",
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
        title: "Working on a Visitor Visa",
        content: {
          kind: "list",
          items: [
            "The Visitor visa (subclass 600) doesn't permit working for an Australian employer, but is commonly used by remote workers who are paid by an employer or clients based outside Australia.",
          ],
        },
      },
      {
        title: "Tax Residency",
        content: {
          kind: "list",
          items: [
            "The ATO uses several tests (the resides test, domicile test, 183-day test, and a superannuation test) — meeting any one can make you an Australian tax resident.",
            "Despite that multi-test framework sounding strict, the ATO's own guidance is that someone in Australia temporarily on a visa like the Visitor (600), working remotely for an overseas employer, generally won't be treated as an Australian tax resident.",
          ],
        },
      },
    ],
    gotcha:
      "Australia's tax residency framework reads as intimidating on paper — four separate tests, any one of which can trigger residency — but the ATO's own published guidance for this exact situation (temporary visa, remote work for an overseas employer) is more reassuring than the technical rules suggest: it generally doesn't make you a resident. Worth confirming against your specific circumstances, but don't assume the multi-test list alone means you're automatically caught.",
    sources: [
      {
        label: "Australian residency if you're on a working holiday or visit",
        publisher: "Australian Taxation Office (ATO)",
        url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/australian-residency-if-you-re-on-a-working-holiday-or-visit",
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
        title: "No Dedicated Remote-Work Visa",
        content: {
          kind: "list",
          items: [
            "Unlike Portugal, Spain, or Costa Rica, Ireland has no dedicated digital nomad or remote-work visa — there's no formal legal status built for this specific situation.",
            "Visitors and Stamp 0 holders cannot work for Irish employers or enter the local job market; income has to come from non-Irish sources (foreign salary, freelance clients, etc.), and working for an Irish employer/client can put your visa status at risk.",
          ],
        },
      },
      {
        title: "Tax Residency",
        content: {
          kind: "list",
          items: [
            "You're an Irish tax resident if you're present 183+ days in a single tax year, or 280+ days combined across two consecutive years (with at least 30 days in each).",
            "Once resident, your worldwide income — including salary paid by a non-Irish employer — is generally taxable in Ireland. Being paid abroad does not exempt you once residency is triggered.",
          ],
        },
      },
    ],
    gotcha:
      "If you're specifically looking for a legal 'digital nomad visa' path like Portugal's or Spain's, Ireland doesn't have one — there's no dedicated status to formalize remote work there. And a lot of remote workers assume that being paid by a company outside Ireland keeps them out of the Irish tax net; it doesn't, once you cross the 183-day (or 280-over-2-years) residency threshold.",
    sources: [
      {
        label: "How to know if you are resident for tax purposes",
        publisher: "Revenue (Irish Tax and Customs)",
        url: "https://www.revenue.ie/en/jobs-and-pensions/tax-residence/resident-for-tax-purposes.aspx",
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
        title: "Working on a Tourist Stay",
        content: {
          kind: "list",
          items: [
            "As in the rest of the Schengen Area, Germany's visa-free entry is conditioned on 'no economic activity being pursued' — remote work for a U.S. employer or clients isn't authorized by the plain 90-day tourist stay.",
          ],
        },
      },
      {
        title: "Tax Residency — the 6-Month Rule and Its Carve-Out",
        content: {
          kind: "list",
          items: [
            "Under §9 of Germany's Fiscal Code (Abgabenordnung), a continuous stay of more than 6 months is automatically treated as your 'ordinary residence' (gewöhnlicher Aufenthalt) for tax purposes.",
            "There's a specific carve-out: a stay of up to a year taken exclusively for visiting, recreational, health, or similar private purposes doesn't count toward that 6-month trigger. Working remotely during the stay is exactly the kind of activity that could disqualify you from that carve-out, since the stay is no longer 'exclusively' private.",
            "Separately, simply maintaining a 'Wohnsitz' (a home available for your own use) in Germany can establish tax residency on its own, regardless of how many days you're actually present.",
          ],
        },
      },
    ],
    gotcha:
      "Germany's tax law has a genuine carve-out for stays under a year taken purely for private/recreational reasons — but that protection is specifically for people who aren't working. If you're logging into a U.S. job the whole time, that's exactly the kind of activity that can knock you out of the private-purposes exemption and pull you into the standard 6-month residency rule instead.",
    sources: [
      {
        label: "Schengen Visa (Business/Tourism) — 'provided that no economic activity is being pursued'",
        publisher: "Federal Foreign Office (Auswärtiges Amt) — German Missions in the United States",
        url: "https://www.germany.info/us-en/service/visa/business-visa-963542",
      },
      {
        label: "§ 9 Abgabenordnung (Gewöhnlicher Aufenthalt)",
        publisher: "Bundesministerium der Justiz (gesetze-im-internet.de)",
        url: "https://www.gesetze-im-internet.de/ao_1977/__9.html",
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
        title: "Working on a Tourist Entry",
        content: {
          kind: "list",
          items: [
            "Working remotely on a Brazilian eVisa/tourist entry is not considered compliant by immigration practitioners — the eVisa doesn't authorize employment, foreign-sourced or otherwise.",
          ],
        },
      },
      {
        title: "Tax Residency — Day 184, Not 183",
        content: {
          kind: "list",
          items: [
            "Brazil's threshold is specifically completing 184 days present within a 12-month period — one day past the '183 days' figure commonly (and incorrectly) quoted for Brazil.",
            "This applies automatically to temporary-visa/tourist entrants too, not just people on work-authorized status — you don't need a work visa to trip it.",
            "Once triggered, you're taxed on worldwide income under Brazil's progressive IRPF table (top rate 27.5%).",
          ],
        },
      },
    ],
    gotcha:
      "Nearly every country on this list uses some version of '183 days' — Brazil doesn't. Its actual threshold is completing 184 days, and it applies automatically the moment you cross it even on a plain tourist/eVisa entry, no work authorization required for the tax consequence to kick in.",
    sources: [
      {
        label: "Residentes no Brasil Ausentes no Exterior",
        publisher: "Receita Federal do Brasil",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/irpf/2004/ResidentesExteriorPerguntaseRespostas.pdf",
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
        title: "Digital Nomad Visa (Law 10008)",
        content: {
          kind: "list",
          items: [
            "Costa Rica's Law 10008 created a formal 'Stay for Remote Workers and Service Providers' status — not a tourist-stay workaround, but its own immigration category — for people earning income exclusively from sources outside Costa Rica.",
            "Income requirement: at least USD $3,000/month individually, or $4,000/month for a family unit, demonstrated by bank statements or a certified accountant's statement.",
            "Valid for 1 year, renewable for a second year if you stayed at least 180 days during the first year. You must complete 'migratory accreditation' within 90 days of entry to make the status official.",
          ],
        },
      },
      {
        title: "Tax Treatment",
        content: {
          kind: "list",
          items: [
            "Approved digital nomad visa holders are explicitly exempt from Costa Rican income tax on their foreign earnings, and are not required to contribute to Costa Rica's social security system (CCSS) on that income.",
          ],
        },
      },
    ],
    gotcha:
      "Costa Rica's digital nomad visa is unusually generous compared to most of the other formal programs on this list — it doesn't just grant legal status, it explicitly exempts your foreign income from local income tax and from social security contributions. Very few of the other countries here offer that combination through their equivalent visa.",
    sources: [
      {
        label: "Nómadas Digitales",
        publisher: "Dirección General de Migración y Extranjería, Costa Rica",
        url: "https://migracion.go.cr/nomadas-digitales/",
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
        title: "F-1-D Workation Visa — Now Permanent",
        content: {
          kind: "list",
          items: [
            "Before mid-2026, remote work in Korea generally happened on a plain tourist stay, which was explicitly not an officially permitted use of that status — just a common, loosely-enforced practice.",
            "The F-1-D 'workation' visa ran as a pilot from January 2024 and was made a permanent program by the Ministry of Justice, announced July 7, 2026 — allowing up to a 3-year stay, with income thresholds as low as roughly 1x Korea's Gross National Income for younger applicants outside Seoul, and dependents included.",
          ],
        },
      },
      {
        title: "Tax Residency",
        content: {
          kind: "list",
          items: [
            "Under 183 days present, Korea generally has no claim on your foreign-sourced remote income.",
            "Past 183 days, the treatment is less clear-cut in practice — some F-1-D holders report being taxed only on Korea-sourced income, even though the law technically subjects tax residents to worldwide income taxation.",
          ],
        },
      },
    ],
    gotcha:
      "The legal landscape for remote work in Korea changed substantially and recently — the F-1-D visa only became a permanent program in mid-2026, after running as a pilot since 2024. A lot of 'how to be a digital nomad in Korea' content still describes the earlier era, when working remotely there meant relying on an unofficial tourist-visa workaround rather than an actual formal legal status.",
    sources: [
      {
        label: "(F-1-D) Workation (Digital Nomad) Pilot Program",
        publisher: "Consulate General of the Republic of Korea in Los Angeles",
        url: "https://overseas.mofa.go.kr/us-losangeles-en/brd/m_26385/view.do?seq=12&page=1",
      },
    ],
  },
];
