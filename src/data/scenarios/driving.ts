// Driving Abroad scenario. Content drafted from official / authoritative
// sources as of each country's `lastVerified` date; re-check before relying
// on any of it. Written for U.S. citizens driving abroad on a U.S. license.
import type { CountryContent } from "@/types/scenario";

export const drivingCountries: CountryContent[] = [
  {
    slug: "mexico",
    name: "Mexico",
    flagEmoji: "🇲🇽",
    lastVerified: "2026-08-07",
    sections: [
      {
        title: "License & Insurance Requirements",
        content: {
          kind: "list",
          items: [
            "A driver's license issued by any U.S. state is recognized by the Mexican government. No International Driving Permit is required for an ordinary tourist visit.",
            "Your U.S. auto insurance policy is not valid in Mexico, including any collision or comprehensive coverage. Mexican law does not recognize U.S. or Canadian insurers, full stop.",
            "You're legally required to have a separate Mexican auto liability insurance policy before driving in Mexico; short-term 'tourist' policies are widely available from U.S. and Mexican insurers specifically for this.",
          ],
        },
      },
      {
        title: "After an Accident",
        content: {
          kind: "list",
          items: [
            "Mexican authorities can detain people involved in an accident, especially one involving injuries, until fault/liability is established. This applies even if you're not ultimately found at fault.",
            "If you're found at fault and can't show valid Mexican liability coverage, you can be held longer, until compensation for the other party is arranged.",
            "A Mexican insurance policy with a bail-bond component can materially shorten this process, since it demonstrates you can cover the other party's damages without having to negotiate that on the spot.",
          ],
        },
      },
      {
        title: "Common Situations",
        content: {
          kind: "list",
          items: [
            "Toll roads (cuotas) are common on major highways between cities; carrying cash is useful since not every booth accepts foreign cards.",
            "Checkpoints (retenes), including military and sobriety checkpoints, are a normal part of driving in many regions. Stopping and cooperating is standard practice.",
          ],
        },
      },
    ],
    gotcha:
      "The most consequential thing most Americans don't realize before driving into Mexico: your U.S. auto insurance is worthless there, no exceptions, and Mexican authorities can legally detain everyone involved in a serious accident, including you, even if you're not at fault, until liability and compensation are sorted out. A Mexican liability policy with bail-bond coverage isn't a nice-to-have; it's what keeps a bad day from turning into days spent in a Mexican police station.",
    sources: [
      {
        label: "Driving to Mexico",
        publisher: "U.S. Embassy & Consulates in Mexico",
        url: "https://mx.usembassy.gov/driving-to-mexico/",
      },
      {
        label: "Mexico Travel Advisory",
        publisher: "U.S. Department of State, Bureau of Consular Affairs",
        url: "https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Mexico.html",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a U.S. citizen, you need both your valid U.S. license and an International Driving Permit (IDP) issued under the 1949 Geneva Convention. Japan is a party to that convention and only accepts IDPs issued under it, in the small booklet format (not a card or printed sheet).",
            "In the U.S., only two organizations are authorized by the State Department to issue a legitimate IDP: AAA (American Automobile Association) and AATA (American Automobile Touring Alliance). The FTC has specifically warned that other 'apply for your IDP online' websites are scams selling permits that aren't legally valid.",
            "You must get the IDP before you travel. It has to be obtained in the U.S. and brought with you; Japan doesn't issue them to visitors on arrival.",
          ],
        },
      },
      {
        title: "Validity Period",
        content: {
          kind: "list",
          items: [
            "Your IDP is valid in Japan for 1 year from the date it was issued, OR 1 year from the date you arrive in Japan, whichever comes first.",
            "This means if your IDP is already close to its own 1-year mark when you land, it can expire well before you've been in Japan a full year, even though the sticker says '1 year.'",
          ],
        },
      },
      {
        title: "Driving Rules",
        content: {
          kind: "list",
          items: [
            "Japan drives on the left, with the driver's seat on the right side of the vehicle.",
            "Drunk-driving enforcement is strict and culturally near-zero-tolerance; penalties apply at a lower blood alcohol level than in most U.S. states.",
            "Expressways are toll roads; electronic toll (ETC) systems are common in rental cars, but always confirm how tolls are billed with your rental company.",
          ],
        },
      },
    ],
    gotcha:
      "Two things trip up Americans specifically: first, only AAA and AATA can legally issue a valid IDP for a U.S. license. The FTC has explicitly flagged other 'international driving permit' websites as scams selling permits Japan won't accept. Second, your IDP's 1-year validity is measured from whichever comes first, its own issue date or your arrival in Japan, not simply '1 year from when I got here,' which catches people who got their IDP months before their trip.",
    sources: [
      {
        label: "Driving in Japan",
        publisher: "U.S. Embassy & Consulates in Japan",
        url: "https://jp.usembassy.gov/services/driving-in-japan/",
      },
      {
        label: "Valid International Driving Permit in Japan",
        publisher: "Tokyo Metropolitan Police Department",
        url: "https://www.keishicho.metro.tokyo.lg.jp/multilingual/english/traffic_safety/drivers_licenses/index.files/kokusaimenkyo_english.pdf",
      },
      {
        label: "Planning to drive in another country? Here's how to avoid international driver's permit scams",
        publisher: "Federal Trade Commission (FTC), U.S. Government",
        url: "https://consumer.ftc.gov/consumer-alerts/2024/06/planning-drive-another-country-heres-how-avoid-international-drivers-permit-scams",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a visitor, your valid U.S. license lets you drive cars and motorcycles in Great Britain (England, Scotland, Wales) for up to 12 months from the date you last entered the country. No International Driving Permit is legally required, since U.S. licenses are already printed in English.",
            "If your stay turns into residency (e.g. you start working or settle long-term) before that 12 months is up, the visitor allowance stops applying, and you'd need to exchange your license for a British one or pass UK driving tests.",
            "An IDP isn't legally required but is sometimes requested by rental car desks or during a police check; worth carrying if you have one, but not a legal blocker without it.",
          ],
        },
      },
      {
        title: "Driving Rules",
        content: {
          kind: "list",
          items: [
            "The UK drives on the left, with the driver's seat on the right side of the vehicle.",
            "You must be at least 17 to drive a standard car.",
          ],
        },
      },
      {
        title: "Fines & Enforcement",
        content: {
          kind: "list",
          items: [
            "Speed cameras and congestion-charge cameras typically don't stop you on the spot. The fine is mailed to whoever owns the vehicle, which for a rental car means the rental company.",
            "The rental company forwards the fine to you (or charges your card directly) and adds its own administrative fee, commonly in the £30–£50 range, on top of the fine itself.",
            "It's usually cheapest to pay promptly, since UK fines often have an early-payment discount window that closes after a set number of days.",
          ],
        },
      },
    ],
    gotcha:
      "A lot of Americans don't get caught by a UK traffic law in the moment. They get caught by the mail weeks after they're already home. Speed and congestion-charge cameras bill the vehicle's registered owner, which for a rental is the rental company; the company then forwards you the fine plus its own £30–£50 admin fee, charged straight to the card on file, often well after you've forgotten about the trip.",
    sources: [
      {
        label: "Driving in Great Britain on a non-GB licence",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/driving-nongb-licence",
      },
      {
        label: "Driving abroad: Check if you need an international driving permit (IDP)",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/driving-abroad/international-driving-permit",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "Because the U.S. is not an EU/EEA country, Spanish traffic authorities (DGT) treat a U.S. license as needing an International Driving Permit (IDP) alongside it. Carry both, not just the U.S. license.",
            "You cannot get an IDP once you're in Spain; it has to come from AAA or AATA before you leave the U.S.",
          ],
        },
      },
      {
        title: "Enforcement",
        content: {
          kind: "list",
          items: [
            "Reports from travelers describe on-the-spot fines around €200 or more from the Guardia Civil for driving without an IDP when one was required.",
            "Rental car companies in Spain commonly require an IDP as a condition of the rental regardless of the legal minimum, so you'll likely need one either way.",
          ],
        },
      },
    ],
    gotcha:
      "There's a lot of conflicting advice online claiming an IDP is 'not really required' in Spain for U.S. license holders. Spanish law treats the U.S. as a non-EU/EEA country specifically because it is one, and that puts you in the category that's supposed to carry an IDP alongside your U.S. license. Getting pulled over without one risks a real fine, not just an inconvenience.",
    sources: [
      {
        label: "Permiso Internacional de Conducir",
        publisher: "Dirección General de Tráfico (DGT), Spain",
        url: "https://www.dgt.es/nuestros-servicios/permisos-de-conducir/validez-de-tu-permiso-permiso-internacional/",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "If you're staying under 12 months, you need both your valid U.S. license and an International Driving Permit, or, if you don't have an IDP, an official English translation of your U.S. license (English generally satisfies this on its own since U.S. licenses are already in English).",
            "The IDP is valid for 1 year from its issue date and cannot be renewed. You'd need a brand-new one for a longer trip.",
          ],
        },
      },
      {
        title: "If You Stay Longer",
        content: {
          kind: "list",
          items: [
            "Once you've been in Singapore more than 12 months, you can no longer rely on your foreign license and IDP. You're required to hold a valid Singapore driving license to rent or drive a car.",
          ],
        },
      },
    ],
    gotcha:
      "Singapore's IDP isn't renewable. It's simply valid for exactly 1 year from issue, full stop. If your trip (or a series of trips) stretches past that, you can't extend the same permit; you need a fresh one, and once you personally cross the 12-month mark of being in Singapore, an IDP won't help at all. You need an actual Singapore license.",
    sources: [
      {
        label: "Singapore Driving Licence",
        publisher: "Singapore Police Force (SPF)",
        url: "https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a short-term visitor, you can legally drive in the UAE on your valid U.S. license, but in practice you need an International Driving Permit (IDP) to actually rent a car. Most rental companies won't hand over keys without one.",
            "You must get the IDP before you travel; it has to come from an authorized U.S. issuer (AAA or AATA), since it can't be issued to you once you're in the UAE (though a same-day paid IDP service exists locally for travelers caught without one).",
          ],
        },
      },
    ],
    gotcha:
      "Technically you may be allowed to drive in the UAE on just your U.S. license, but that's mostly theoretical. In practice, no IDP means no rental car, since agencies enforce the IDP requirement themselves regardless of the strict legal minimum. Don't count on sorting this out after you land; get the IDP from AAA/AATA before you leave the U.S.",
    sources: [
      {
        label: "International Driving Permit",
        publisher: "The Official Portal of the UAE Government (u.ae)",
        url: "https://u.ae/en/information-and-services/passports-and-traveling/driving-abroad/international-driving-permit",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "For a short visit, French rules require a foreign license to either be in French, be accompanied by an official French translation, or be accompanied by an International Driving Permit.",
            "In practice, since a U.S. license is in English rather than French, carrying an IDP is the simplest way to satisfy this. It's effectively a standardized translation of your license, recognized without needing a separate certified translation.",
          ],
        },
      },
    ],
    gotcha:
      "A U.S. license by itself doesn't automatically satisfy French requirements the way an English-language license does in some other countries. France specifically wants either a French translation or an IDP alongside it. Since getting a certified French translation is more hassle than getting an IDP from AAA before you leave, the IDP is the practical answer even where it's technically optional.",
    sources: [
      {
        label: "Permis de conduire international",
        publisher: "France Titres (ANTS)",
        url: "https://permisdeconduire.ants.gouv.fr/aide-et-contact/permis-de-conduire-international",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a visitor, your valid U.S. license is fully accepted across all Canadian provinces and territories for the length of your authorized stay, commonly up to 6 months.",
            "No International Driving Permit is required at all. Canada explicitly doesn't require one for U.S. licenses, since English is already one of Canada's two official languages.",
          ],
        },
      },
      {
        title: "If You Become a Resident",
        content: {
          kind: "list",
          items: [
            "The visitor allowance shrinks once you actually settle in a province (get a lease, a job, provincial health coverage), the grace period before you must get a provincial license then drops to as little as 60 days in Ontario, 90 days in BC/Alberta, or up to 6 months in Quebec, depending on the province.",
          ],
        },
      },
    ],
    gotcha:
      "Canada is the one country on this list where you genuinely don't need to think about an IDP at all as a tourist: no permit, no translation, nothing beyond your ordinary U.S. license. The thing to actually track is the date you stop being 'just visiting' and start being a resident, since that's what quietly shortens your window to switch to a provincial license.",
    sources: [
      {
        label: "Driving in Canada",
        publisher: "Immigration, Refugees and Citizenship Canada (IRCC)",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/driving.html",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a temporary visitor, you can drive on your valid U.S. license for up to 6 months, as long as you remain a temporary visitor, haven't been disqualified from driving anywhere, and carry the license at all times.",
            "No International Driving Permit is legally required if your license is in English (a U.S. license already qualifies), though some rental companies or specific states may still ask for one anyway.",
          ],
        },
      },
    ],
    gotcha:
      "Australia doesn't legally require an IDP for an English-language license like a U.S. one, but that's a legal minimum, not a guarantee a rental counter will actually accept your booking without one. Carrying an IDP anyway avoids an awkward argument at the pickup desk even when you're technically in the clear without it.",
    sources: [
      {
        label: "Drivers Visiting Australia or New Zealand",
        publisher: "Austroads (national transport agencies of Australia and New Zealand)",
        url: "https://austroads.gov.au/drivers-and-vehicles/overseas-drivers/visiting-drivers",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a visitor, you can drive on a current, valid license from outside the EU/EEA, including a U.S. license, for up to 12 months, no International Driving Permit required.",
          ],
        },
      },
      {
        title: "If You Take Up Residence",
        content: {
          kind: "list",
          items: [
            "Once you take up normal residence in Ireland rather than just visiting, you must exchange your U.S. license for an Irish one or apply for a new one through the National Driver Licence Service (NDLS). The 12-month tourist allowance doesn't apply once you're a resident.",
          ],
        },
      },
    ],
    gotcha:
      "Ireland's 12-month visitor allowance for a U.S. license is generous by comparison to most of Europe, and doesn't need an IDP, but the moment your stay shifts from 'visiting' to 'residing' (a lease, a job, that sort of thing), that allowance stops applying, regardless of how much of the 12 months you have left.",
    sources: [
      {
        label: "Driving in Ireland",
        publisher: "U.S. Mission Ireland",
        url: "https://ie.usembassy.gov/driving-in-ireland/",
      },
      {
        label: "Foreign driving licences in Ireland",
        publisher: "Citizens Information (Government of Ireland)",
        url: "https://www.citizensinformation.ie/en/travel-and-recreation/motoring/driver-licensing/exchanging-foreign-driving-permit/",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "Short-term visitors from the U.S. can generally drive on their state-issued license alone for up to 185 days. An International Driving Permit is not strictly required by Portuguese law for a short stay.",
            "In practice, most car rental agencies in Portugal require an IDP anyway as their own condition of rental, regardless of the legal minimum.",
          ],
        },
      },
    ],
    gotcha:
      "Whether you 'need' an IDP in Portugal depends on who's asking. The law is more lenient than most of Europe for a short stay, but the rental counter isn't the law, and most agencies simply won't rent to you without one. Get the IDP before you go if you're renting a car, even though it isn't strictly a legal requirement for driving itself.",
    sources: [
      {
        label: "Tenho Carta de Condução Estrangeira",
        publisher: "Instituto da Mobilidade e dos Transportes (IMT), Portugal",
        url: "https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/tenho-carta-de-conducao-estrangeira/",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a tourist, you can drive in Germany on a valid U.S. license for up to 6 months without needing to obtain a German license.",
            "An International Driving Permit isn't strictly required if your license is already in German or English (a U.S. license qualifies), but it's still commonly recommended and often requested by rental agencies and in the event of a police stop or accident.",
          ],
        },
      },
    ],
    gotcha:
      "Because a U.S. license is already in English, Germany's legal minimum for tourists is genuinely lighter than several of its Schengen neighbors, but 'not legally required' and 'won't be asked for one' aren't the same thing, especially at a rental counter or after an accident, where having the IDP on hand avoids friction even when it isn't strictly mandatory.",
    sources: [
      {
        label: "Übersicht über die Fahrerlaubnisklassen",
        publisher: "Bundesministerium für Digitales und Verkehr (BMDV), Germany",
        url: "https://bmdv.bund.de/SharedDocs/DE/Artikel/StV/Strassenverkehr/fuehrerschein.html",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a foreign visitor, you can drive in Brazil for up to 180 days on a valid foreign license, but it must be accompanied by an International Permission to Drive recognized under an international convention Brazil has ratified.",
            "Brazil's official guidance references the 1968 Vienna Convention on Road Traffic, but the U.S. never ratified that convention; the U.S. is party to the 1949 Geneva Convention (and, separately, the 1943 Inter-American Convention). This mismatch is why some sources specifically recommend U.S. drivers get an Inter-American Driving Permit (IADP) rather than the standard Geneva-convention IDP, or carry a certified Portuguese translation of their license as an alternative.",
          ],
        },
      },
      {
        title: "If You Stay Longer",
        content: {
          kind: "list",
          items: [
            "Past 180 days, you're expected to exchange your foreign license for a Brazilian CNH (Carteira Nacional de Habilitação) at your state's DETRAN office.",
          ],
        },
      },
    ],
    gotcha:
      "Brazil is the one country here where the 'standard' AAA International Driving Permit most Americans get for Europe genuinely might not be the right document. Brazil's framework is built around the 1968 Vienna Convention, which the U.S. never joined, unlike most of the countries on this list. A certified Portuguese translation of your U.S. license, or specifically an Inter-American Driving Permit, is the safer bet.",
    sources: [
      {
        label: "Carteira Internacional",
        publisher: "Ministério dos Transportes (SENATRAN), Brazil",
        url: "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-Senatran/carteira-internacional",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "As a tourist, you can drive on your valid U.S. license alone for up to 3 months. No International Driving Permit is required, since Costa Rica accepts licenses in the Latin alphabet without a separate translation or permit.",
            "Always carry your passport alongside your license, since it's what documents your tourist status.",
          ],
        },
      },
      {
        title: "If You Stay Longer",
        content: {
          kind: "list",
          items: [
            "Past 3 months, a foreign license is no longer sufficient. You're required to 'homologate' it (formally validate it as a Costa Rican license) through MOPT's Conductor Accreditation System, or you risk penalties for driving on an unconverted foreign license.",
          ],
        },
      },
    ],
    gotcha:
      "Costa Rica is unusually simple for a short trip, no IDP, just your U.S. license and passport, but that simplicity has a hard deadline: 3 months, not 90 days measured some other way, and not renewable by leaving and re-entering the way some visa rules work elsewhere on this site. Past that point you need to have already started the homologation process.",
    sources: [
      {
        label: "Extranjeros en condición de turistas podrán utilizar su licencia de conducir",
        publisher: "Ministerio de Obras Públicas y Transportes (MOPT), Costa Rica",
        url: "https://www.mopt.go.cr/wps/portal/Home/noticias/1a124792-aeb2-4c90-9057-2d5ac696cfe2",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "A U.S. license alone is not accepted for driving in Thailand. You must carry both your valid U.S. license and an International Driving Permit recognized under international convention at all times.",
            "Get the IDP from AAA or AATA before you travel; it's valid for 1 year from its issue date.",
          ],
        },
      },
    ],
    gotcha:
      "Unlike some destinations where an IDP is a recommended backstop, Thailand treats a foreign license on its own as simply insufficient. You need the IDP alongside it as a baseline requirement, not an extra precaution, and that applies from your very first day driving there.",
    sources: [
      {
        label: "Driving in Thailand",
        publisher: "U.S. Embassy & Consulate in Thailand",
        url: "https://th.usembassy.gov/driving-in-thailand/",
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
        title: "License Requirements",
        content: {
          kind: "list",
          items: [
            "You need both a valid U.S. license and an International Driving Permit to drive or rent a car in South Korea. A U.S. license alone isn't accepted at rental counters or in a roadside check.",
            "South Korea recognizes IDPs issued under the 1949 Geneva Convention, which is exactly the format AAA and AATA issue in the U.S., so the standard American IDP works here without the complication seen in Brazil.",
            "The IDP is valid for up to 1 year from its issue date.",
          ],
        },
      },
    ],
    gotcha:
      "Unlike Brazil, South Korea is a clean case: it recognizes the same 1949-Geneva-Convention IDP that AAA/AATA already issue by default in the U.S., so there's no special document to track down. Just remember that both the license and the IDP are required together, and that the 1-year validity clock starts on the IDP's issue date.",
    sources: [
      {
        label: "Driving in Korea",
        publisher: "U.S. Embassy & Consulate in the Republic of Korea",
        url: "https://kr.usembassy.gov/services-driving-in-korea/",
      },
    ],
  },
];
