// Health & Medical Emergencies scenario. Content drafted from official /
// authoritative sources as of each country's `lastVerified` date; re-check
// before relying on any of it, especially the phone numbers themselves.
// Written for U.S. citizens traveling on a U.S. passport. Every entry leads
// with the actual number(s) to call, since that's the one thing you need
// instantly in an emergency, not after reading three paragraphs of context.
import type { CountryContent } from "@/types/scenario";

const OCS_SOURCE = {
  label: "Help Abroad (Overseas Citizens Services)",
  publisher: "U.S. Department of State, Bureau of Consular Affairs",
  url: "https://travel.state.gov/en/international-travel/help-abroad.html",
};

const OCS_BULLET =
  "For U.S. consular emergency assistance (a detained or hospitalized American, coordinating care, notifying family), call the State Department's Overseas Citizens Services from anywhere in the world: +1-888-407-4747 (from the U.S. or Canada) or +1-202-501-4444 (from overseas). This is separate from the local emergency number and won't dispatch an ambulance itself, but it's the number that gets the U.S. government involved.";

export const healthEmergenciesCountries: CountryContent[] = [
  {
    slug: "mexico",
    name: "Mexico",
    flagEmoji: "🇲🇽",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 911 for ambulance, police, or fire. Mexico unified its emergency lines under a single nationwide 911 system, replacing the old patchwork of local numbers (066, 089, and 240+ others), so you don't need to know a separate number for medical help.",
            "911 dispatchers are Spanish-speaking by default; English-speaking assistance isn't guaranteed, especially outside major tourist areas.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As a tourist, you'll typically end up at a private hospital rather than a public one (IMSS/ISSSTE are for enrolled Mexican workers), since private care is faster and more likely to have English-speaking staff.",
            "Private hospitals commonly require payment upfront or proof of insurance before non-emergency treatment, and most won't discharge you until your bill is paid in full, even after emergency treatment.",
            "The U.S. Embassy specifically recommends travel insurance with medical evacuation coverage, since a serious injury and a medevac flight back to the U.S. can run well into six figures out of pocket.",
          ],
        },
      },
    ],
    gotcha:
      "The Embassy is blunt about this one: Mexican hospitals generally will not release you (or a family member) until the bill is paid in full, regardless of whether you were the one who called 911 or whether you're insured. It's worth knowing before you're the one negotiating this from a hospital bed rather than reading it in advance.",
    sources: [
      {
        label: "Emergency Numbers in Mexico City",
        publisher: "Gobierno de la Ciudad de México",
        url: "https://mexicocity.cdmx.gob.mx/e/emergency/?lang=en",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flagEmoji: "🇯🇵",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 119 for an ambulance or fire. Dial 110 separately for police, Japan doesn't use one unified number the way many other countries on this site do.",
            "Both lines are free to call, staffed 24/7, and increasingly have English-speaking operators available, though a Japanese speaker on the line still helps things move faster.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Japan's ambulance service itself is free regardless of nationality or insurance status; the bill comes later, from the hospital that treats you, not from the ambulance ride.",
            "Without Japanese national health insurance (which tourists don't have), you're billed the full, un-subsidized rate for hospital care, which can be substantially higher than what a Japanese resident with insurance would pay for the same treatment.",
          ],
        },
      },
    ],
    gotcha:
      "Calling for an ambulance in Japan is genuinely free, no bill for the ride itself, which surprises a lot of Americans used to a per-transport ambulance charge back home. The actual hospital treatment afterward is a different story: as a foreign tourist without Japanese insurance, you're paying the full rate, not a subsidized one, so travel insurance still matters even though the ambulance itself won't cost you anything.",
    sources: [
      {
        label: "Calling for Help",
        publisher: "U.S. Embassy & Consulates in Japan",
        url: "https://jp.usembassy.gov/services/calling-for-help/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flagEmoji: "🇬🇧",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 999 (the traditional UK number) or 112 (the EU-wide number, which also works here) for ambulance, police, fire, or coastguard. Both reach the same dispatchers; neither is more 'correct' than the other.",
            "If it's not life-threatening but you still need medical guidance, NHS 111 is a free 24/7 helpline that can tell you whether you actually need 999 or can be seen elsewhere.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "This is a genuine exception on this site: initial emergency treatment at an NHS Accident & Emergency (A&E) department is free at the point of use for everyone, regardless of nationality, residency, or insurance status. You will not be asked for a credit card in the A&E waiting room.",
            "That said, 'free at A&E' doesn't extend to everything, follow-up care, non-emergency treatment, or being admitted as an inpatient can trigger charges for overseas visitors, so travel insurance still matters for anything beyond the initial emergency response.",
          ],
        },
      },
    ],
    gotcha:
      "The UK is one of the only countries on this site where the emergency care itself is unambiguously free for a U.S. tourist, not billed later, not contingent on insurance. Don't let that lull you into skipping travel insurance entirely, though: it's specifically the initial A&E treatment that's free, and anything beyond that (an inpatient stay, ongoing treatment) can still generate a bill for a non-resident.",
    sources: [
      {
        label: "When to call 999",
        publisher: "National Health Service (NHS), United Kingdom",
        url: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    flagEmoji: "🇪🇸",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 for ambulance, police, or fire, a single free number that works throughout Spain and the rest of the EU. The operator triages your call and dispatches whichever service you actually need.",
            "112 operators generally speak English as well as Spanish, and calls from a mobile phone automatically transmit your location, which speeds up response.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Spain's public healthcare system (Sistema Nacional de Salud) will treat genuine emergencies, but the reciprocal free-care arrangements that cover EU nationals traveling within the EU don't extend to U.S. citizens. As an American, you should expect a bill for treatment received, even in a true emergency.",
            "Private hospitals and clinics are common in tourist areas and generally expect payment or insurance verification upfront for anything that isn't an active emergency.",
          ],
        },
      },
    ],
    gotcha:
      "It's easy to see EU citizens getting reciprocal free healthcare across Europe and assume something similar applies to you as a tourist. It doesn't. That reciprocal arrangement (the EHIC/GHIC system) is specifically for EU/EEA nationals; a U.S. passport doesn't plug into it at all, so you're relying entirely on your own travel insurance, not a Spain-U.S. equivalent of that system, because none exists.",
    sources: [
      {
        label: "Servicios prestados a través del número único de emergencias (112)",
        publisher: "Gobierno de España (Tu Espacio Europeo)",
        url: "https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia.html",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flagEmoji: "🇸🇬",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 995 for an ambulance or fire. Dial 999 separately for police, these are two different numbers, not one unified line.",
            "If your situation isn't a true emergency but you still want an SCDF ambulance, there's a separate non-emergency line (1777) so you don't tie up the 995 line.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "The SCDF ambulance itself is free if it's for a genuine medical emergency, regardless of your nationality or insurance status.",
            "Hospital treatment is a separate matter: Singapore's subsidized public healthcare rates are for citizens and permanent residents, so as a foreign tourist you'll be billed at the full, unsubsidized rate, which at Singapore's private and even public hospitals can add up quickly.",
          ],
        },
      },
    ],
    gotcha:
      "Singapore's reputation for excellent healthcare is well earned, but it's also genuinely expensive if you're paying the unsubsidized foreigner rate out of pocket. The ambulance ride itself won't cost you anything in a real emergency, but don't extrapolate from that to assume the rest of your care will be similarly free; it isn't, and travel insurance is worth having here specifically because the quality of care (and its price tag) both run high.",
    sources: [
      {
        label: "Emergency Medical Services",
        publisher: "Singapore Civil Defence Force (SCDF)",
        url: "https://www.scdf.gov.sg/home/about-scdf/emergency-medical-services",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flagEmoji: "🇦🇪",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 998 for an ambulance. Police are 999 and fire/civil defence is 997, three separate numbers rather than one unified line.",
            "112 also works from any mobile phone (even with no SIM, signal, or a locked screen) and routes to the police dispatcher, who can connect you onward.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Genuine emergencies are treated first and billed after, but private hospitals (which most tourists end up at, for speed and English-speaking staff) commonly ask for insurance details or a payment guarantee once you're stabilized.",
            "Health insurance is mandatory for UAE residents, but that requirement doesn't extend to short-term visitors; as a U.S. tourist, you're not automatically covered by anything local, and you should assume you're paying out of pocket without your own travel insurance.",
          ],
        },
      },
    ],
    gotcha:
      "998, 999, and 997 are genuinely three different numbers for three different services here, unlike the single unified line you'd dial in much of Europe or North America. Save all three in your phone before you need them rather than trying to remember which is which in the moment; 112 is the fallback if you blank, since it'll always get you connected to a dispatcher who can redirect you.",
    sources: [
      {
        label: "Handling Emergencies",
        publisher: "The Official Portal of the UAE Government (u.ae)",
        url: "https://u.ae/en/information-and-services/justice-safety-and-the-law/handling-emergencies",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "france",
    name: "France",
    flagEmoji: "🇫🇷",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 (works throughout the EU) or 15 (SAMU, France's dedicated medical emergency line) for an ambulance. Police is 17, fire is 18. All of these route through operators trained to answer in English before transferring you.",
            "SAMU's model is distinctive: a qualified doctor is on the line to assess your situation and decide what kind of response you actually need, not just a dispatcher taking down an address.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As with the rest of the EU, the reciprocal free-care system that covers EU nationals doesn't extend to U.S. citizens. Expect a bill for treatment, even for a genuine emergency, and expect it to be handled through your own travel insurance rather than any France-U.S. reciprocal arrangement, because there isn't one.",
          ],
        },
      },
    ],
    gotcha:
      "SAMU's doctor-on-the-line model (calling 15 specifically) means the response you get is genuinely triaged by a physician rather than a generic dispatcher, which is worth knowing if you're deciding between 15 and 112 for a medical situation specifically. Either number gets you help, but 15 is the one built around medical judgment first.",
    sources: [
      {
        label: "Emergency Services in France",
        publisher: "U.S. Embassy & Consulates in France",
        url: "https://fr.usembassy.gov/services/medical-assistance/emergency-services-in-france/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flagEmoji: "🇨🇦",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 911 for ambulance, police, or fire, a single unified number covering nearly all of Canada (a handful of extremely remote areas are the rare exception).",
            "It's free to call, available 24/7, and the operator will ask which service you need once connected.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Canada's public healthcare (Medicare) covers Canadian residents, not visitors. As a U.S. tourist, you're not covered by it at all, and Canadian hospitals bill out-of-country visitors directly, at rates that can be surprisingly high precisely because the system isn't built around out-of-pocket, uninsured billing the way U.S. hospitals are.",
            "Travel insurance is genuinely important here despite how similar Canada otherwise feels to the U.S.; 'universal healthcare' describes coverage for residents, not a guarantee of free or cheap care for an American tourist.",
          ],
        },
      },
    ],
    gotcha:
      "The most common assumption trips people up here: Canada having 'free healthcare' is true for Canadians, not for visiting Americans. Because the system isn't designed around billing uninsured out-of-country patients efficiently, a Canadian hospital bill for a foreign tourist can end up costing more than the equivalent visit would in some U.S. markets, not less. Don't skip travel insurance just because you're staying within North America.",
    sources: [
      {
        label: "9-1-1 Services for Traditional Wireline, VoIP and Wireless Phone Services",
        publisher: "Canadian Radio-television and Telecommunications Commission (CRTC)",
        url: "https://crtc.gc.ca/eng/phone/911/can.htm",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flagEmoji: "🇦🇺",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 000 (Triple Zero) for ambulance, police, or fire, a single unified number. From a mobile phone, 112 also works and routes to the same service.",
            "You'll hear a recorded message confirming your call is connecting, then a live operator asks which service you need and stays on the line until you're connected.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Australia has Reciprocal Health Care Agreements covering medically necessary treatment for visitors from 11 specific countries (the UK, Ireland, New Zealand, and several EU countries among them). The United States is not on that list.",
            "As a U.S. tourist, you're not covered by Medicare or any reciprocal arrangement; you're paying out of pocket or through your own travel insurance for any treatment, including ambulance transport in some states, which isn't automatically free the way it is in a few other countries on this site.",
          ],
        },
      },
    ],
    gotcha:
      "It's worth knowing specifically that the U.S. is not one of the 11 countries with a Reciprocal Health Care Agreement with Australia (the UK, Ireland, and New Zealand, among others, are), so don't assume some background 'Australia and the U.S. are close allies' logic extends to healthcare access. It doesn't; you're in the same position as a tourist from any other non-agreement country, fully reliant on your own insurance.",
    sources: [
      {
        label: "How to Call Triple Zero (000)",
        publisher: "Department of Infrastructure, Transport, Regional Development, Communications, Sport and the Arts, Australia",
        url: "https://www.triplezero.gov.au/triple-zero/How-to-Call-000",
      },
      {
        label: "Reciprocal Health Care Agreements",
        publisher: "Services Australia",
        url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flagEmoji: "🇮🇪",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 (the EU-wide number) or 999 (the older Irish number) for ambulance, police (An Garda Síochána), fire, or coastguard. Both route through the same Emergency Call Answering Service (ECAS) and work identically.",
            "Calls are free from any phone, including a mobile with no credit.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As with the rest of the EU, the reciprocal free-care system covering EU nationals doesn't apply to U.S. citizens. Expect to be billed for hospital treatment, including emergency care, and expect to handle that through your own travel insurance.",
          ],
        },
      },
    ],
    gotcha:
      "112 and 999 genuinely do the same thing here, so don't waste time trying to remember which one is 'correct' for Ireland specifically; either gets you the same dispatcher. The thing actually worth remembering is that, like everywhere else in the EU on this site, being a U.S. citizen means you're outside the reciprocal free-care system entirely, so travel insurance is doing real work here, not just a formality.",
    sources: [
      {
        label: "Ireland's Emergency Call Answering Service (ECAS)",
        publisher: "Commission for Communications Regulation (ComReg) / ECAS, Ireland",
        url: "https://112.ie/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    flagEmoji: "🇵🇹",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 for ambulance, police, or fire, Portugal's only national emergency number, free from any phone, 24/7.",
            "Medical calls are routed to INEM (Instituto Nacional de Emergência Médica), the national medical emergency institute, through its CODU coordination centers.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As with the rest of the EU, the reciprocal free-care arrangement that covers EU nationals doesn't extend to U.S. citizens. Expect a bill for hospital treatment and plan to handle it through your own travel insurance rather than any Portugal-U.S. equivalent, since none exists.",
          ],
        },
      },
    ],
    gotcha:
      "Portugal's 112 system is genuinely simple, one number, no separate lines to remember, which is easy to appreciate given how fragmented emergency numbers are in several other countries on this site. Don't let that simplicity translate into assuming the care itself is free for you, though; it's the same reciprocal-coverage gap that applies to every EU country here.",
    sources: [
      {
        label: "Contactos de emergência em Portugal",
        publisher: "Portal do Governo de Portugal (gov.pt)",
        url: "https://www2.gov.pt/cidadaos-europeus-viajar-viver-e-fazer-negocios-em-portugal/cuidados-de-saude-em-portugal/contactos-de-emergencia-em-portugal",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flagEmoji: "🇩🇪",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 for ambulance or fire. Dial 110 separately for police, these are two different numbers.",
            "Both are free, available 24/7, and operators generally speak German and English.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As with the rest of the EU, the reciprocal free-care system covering EU nationals doesn't apply to U.S. citizens. Expect to be billed for hospital treatment, including emergency care, and plan to handle it through your own travel insurance.",
          ],
        },
      },
    ],
    gotcha:
      "112 for medical/fire and 110 for police is the reverse of what some travelers expect coming from a single-number country; mixing them up in the moment (calling 110 for a medical emergency) will still get you help since German dispatchers coordinate across services, but knowing 112 is your default for anything medical saves a step.",
    sources: [
      {
        label: "Im Notfall: 112, die Notrufnummer für Europa",
        publisher: "Bundesregierung (Federal Government of Germany)",
        url: "https://www.bundesregierung.de/breg-de/leichte-sprache/112-euro-notrufnummer-2260296",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "brazil",
    name: "Brazil",
    flagEmoji: "🇧🇷",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 192 for SAMU (Serviço de Atendimento Móvel de Urgência), Brazil's ambulance service. Police is 190 and fire is 193, all separate numbers.",
            "All three are toll-free and staffed 24/7, reachable from any phone.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "SAMU is a public service under Brazil's national health system (SUS) and dispatches an ambulance regardless of your nationality or insurance status for a genuine emergency.",
            "Once you're at a hospital, though, expect private facilities (generally the better option for a foreign tourist, for speed and language) to request insurance verification or payment upfront for anything beyond immediate stabilization.",
          ],
        },
      },
    ],
    gotcha:
      "192, 190, and 193 are three genuinely separate numbers here, not a single dispatcher who redirects you, so it's worth knowing 192 specifically gets you SAMU rather than police or fire showing up first. Save it under a name you'll actually remember in a panic, not just '192.'",
    sources: [
      {
        label: "SAMU 192",
        publisher: "Ministério da Saúde, Brasil",
        url: "https://www.gov.br/saude/pt-br/campanhas-da-saude/2025/samu-192",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    flagEmoji: "🇨🇷",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 911 for ambulance, police, or fire, a single unified number covering the whole country.",
            "911 call-takers are predominantly Spanish-speaking, though bilingual English-Spanish responders are frequently available given how many foreign tourists call in.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Costa Rica has both a public system (Caja/CCSS) and a well-regarded private hospital network; as a tourist without CCSS enrollment, you'll generally end up at (and be billed by) a private facility, which typically expects payment or insurance verification before non-emergency treatment.",
          ],
        },
      },
    ],
    gotcha:
      "Costa Rica's private hospitals (particularly in San José) are genuinely well regarded and used to treating foreign tourists, but 'well regarded' doesn't mean cheap without insurance. Travel insurance that specifically covers Costa Rica's private facilities is worth having rather than assuming the public system will simply absorb you the way it does Costa Rican residents enrolled in the CCSS system.",
    sources: [
      {
        label: "Sistema de Emergencias 9-1-1",
        publisher: "Sistema de Emergencias 9-1-1, Costa Rica",
        url: "https://www.911.go.cr/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    flagEmoji: "🇹🇭",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 1669 for an ambulance nationwide. Police is 191, fire is 199, and the Tourist Police (specifically set up with English-speaking officers) is 1155.",
            "1669 response times run around 10 minutes in cities like Bangkok, but can stretch to 30 minutes or more in rural areas, worth factoring in if you're somewhere remote.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Thailand has a large, well-developed private hospital sector, especially in Bangkok and tourist areas, that's used to treating foreign patients and commonly has English-speaking staff, but these hospitals generally expect payment upfront or a credit card guarantee before non-emergency treatment.",
            "Public hospitals are less expensive but more variable in English-language support; the U.S. Embassy maintains lists of hospitals it's aware of that regularly serve foreign patients.",
          ],
        },
      },
    ],
    gotcha:
      "1155, the Tourist Police number, is genuinely worth saving alongside 1669 and 191, it's specifically staffed with English-speaking officers and set up to help foreign visitors navigate a system that otherwise runs primarily in Thai. It won't dispatch an ambulance itself, but it can help you communicate with the services that do.",
    sources: [
      {
        label: "Medical Emergency",
        publisher: "U.S. Embassy & Consulate in Thailand",
        url: "https://th.usembassy.gov/medical-emergency/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flagEmoji: "🇰🇷",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 119 for ambulance or fire. Dial 112 separately for police, two different numbers.",
            "Both lines have interpretation services available, including English, so language shouldn't be a hard blocker even if the initial responder isn't bilingual.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "South Korea's ambulance and initial emergency response is generally provided regardless of nationality or insurance, but as a foreign tourist without National Health Insurance coverage, you'll be billed the full, unsubsidized rate for hospital treatment.",
            "South Korea's healthcare system is well regarded and, even at unsubsidized foreigner rates, is often less expensive than equivalent U.S. private care, but it's still an out-of-pocket cost without your own travel insurance.",
          ],
        },
      },
    ],
    gotcha:
      "119 (medical/fire) and 112 (police) is the same split you'll see in Japan and Germany on this site, so if you're doing a multi-country Asia trip, don't let Japan's numbers bleed into your memory of Korea's, they happen to share the 119, but Korea's police line (112) is different from Japan's (110).",
    sources: [
      {
        label: "Emergency Preparedness for U.S. Citizens in the Republic of Korea",
        publisher: "U.S. Embassy & Consulate in the Republic of Korea",
        url: "https://kr.usembassy.gov/services-emergency-preparedness/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "italy",
    name: "Italy",
    flagEmoji: "🇮🇹",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 for ambulance, police, or fire, the EU-wide number, which works throughout Italy and routes to the right service. 118 is the older, still-commonly-used direct line specifically for ambulance and medical coordination.",
            "Operators generally answer in Italian and English, with English support especially reliable in major cities and tourist areas.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As with the rest of the EU, the reciprocal free-care system covering EU nationals doesn't extend to U.S. citizens. Expect a bill for hospital treatment and plan to handle it through your own travel insurance.",
          ],
        },
      },
    ],
    gotcha:
      "112 and 118 both work for a medical emergency in Italy, and you'll see both numbers referenced depending on the source, 112 as the newer EU-wide standard, 118 as the older, still-active dedicated ambulance line. Either one gets you help, so don't waste time deciding between them if you can only remember one.",
    sources: [
      {
        label: "Medical Emergencies while in Italy",
        publisher: "U.S. Embassy & Consulates in Italy",
        url: "https://it.usembassy.gov/medical-emergencies-while-in-italy/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flagEmoji: "🇳🇱",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112 for ambulance, police, or fire, a single unified number, the same EU-wide standard used across most of this list.",
            "Dispatchers are available around the clock and can communicate in multiple languages.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As with the rest of the EU, the reciprocal free-care system covering EU nationals doesn't extend to U.S. citizens. Expect a bill for hospital treatment and plan to handle it through your own travel insurance.",
          ],
        },
      },
    ],
    gotcha:
      "There's no real trap in the Netherlands' emergency number itself, 112 is as simple as it gets, but the same reciprocal-coverage gap that applies across the rest of the EU on this site applies here too: being a U.S. citizen means you're outside that system entirely, regardless of how straightforward the phone call is.",
    sources: [
      {
        label: "Emergency number 112",
        publisher: "Government of the Netherlands (Rijksoverheid)",
        url: "https://www.government.nl/topics/emergency-number-112",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flagEmoji: "🇨🇭",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 144 for an ambulance. Police is 117, fire is 118, all separate numbers. 112, the general European emergency number, also works and connects you to the police dispatch center, who can redirect you.",
            "All of these are free from any phone, landline, mobile, or public payphone.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Switzerland isn't in the EU, and it's not part of the reciprocal free-care system either, so as a U.S. tourist you're paying out of pocket (or through your own travel insurance) for treatment, the same as you would in most non-EU countries on this site.",
            "Swiss healthcare is excellent but genuinely expensive, even for Swiss residents, who are legally required to carry private health insurance themselves. Without insurance of your own, a serious incident here can be very costly.",
          ],
        },
      },
    ],
    gotcha:
      "Switzerland's famously high cost of living extends directly to healthcare: because even Swiss residents are required to carry private insurance rather than relying on a single national system, there's no subsidized 'public rate' floor the way there is in some EU countries. As a tourist, you're paying market rate, and Swiss market rate for healthcare is not cheap.",
    sources: [
      {
        label: "Emergencies and danger",
        publisher: "ch.ch (Swiss Confederation official information portal)",
        url: "https://www.ch.ch/en/safety-and-justice/emergencies-and-danger/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flagEmoji: "🇳🇿",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 111 for ambulance, police, or fire, a single unified number covering the whole country.",
            "It's free to call, including from a mobile phone with no credit left; the operator asks which service you need and connects you.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "New Zealand has an unusual, genuinely visitor-friendly system for accidents specifically: the Accident Compensation Corporation (ACC) provides no-fault injury cover to everyone in New Zealand, residents and visitors alike, for accidental injuries (not illness).",
            "ACC can help cover treatment, rehabilitation, and related costs for a covered injury regardless of your nationality or who was at fault, though it doesn't cover illness, medical conditions unrelated to an accident, or getting you home, so travel insurance still fills real gaps.",
          ],
        },
      },
    ],
    gotcha:
      "ACC is a real, distinctive advantage for visitors: if you're injured in an accident in New Zealand (a fall, a car crash, a sports injury), you're covered by the same no-fault national scheme that covers New Zealanders, not left entirely to your own insurance the way you would be almost everywhere else on this site. The catch is that ACC only covers accidental injury, not illness, so it's a real safety net with a specific, limited shape, not a substitute for travel insurance.",
    sources: [
      {
        label: "111 Emergency Services",
        publisher: "New Zealand Police",
        url: "https://www.police.govt.nz/call-111",
      },
      {
        label: "If you're a visitor injured in New Zealand",
        publisher: "Accident Compensation Corporation (ACC), New Zealand",
        url: "https://www.acc.co.nz/im-injured/what-we-cover/if-youre-a-visitor-injured-in-new-zealand",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    flagEmoji: "🇻🇳",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 115 for an ambulance. Police is 113, fire is 114, all separate numbers; Vietnam doesn't have a single unified emergency line.",
            "For consular help specifically, the U.S. Embassy/Consulate emergency lines are (024) 3850-5000 in Hanoi or (028) 3520-4200 in Ho Chi Minh City, the same numbers work outside office hours too.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As a foreign tourist, you'll generally be better served by a private, international-standard hospital (concentrated in Hanoi and Ho Chi Minh City) than a public one, but private facilities typically expect payment upfront or insurance verification.",
            "The U.S. Embassy strongly recommends comprehensive travel medical insurance that specifically includes medevac coverage, since serious cases are sometimes better treated by evacuating to a hospital outside Vietnam entirely.",
          ],
        },
      },
    ],
    gotcha:
      "The Embassy's recommendation to carry medevac-inclusive insurance is worth taking seriously here specifically, unlike some countries on this list where local private hospitals are considered adequate for nearly anything, Vietnam is one where serious cases sometimes genuinely warrant evacuation to Bangkok, Singapore, or elsewhere rather than staying for treatment. That's an expensive flight to be paying for out of pocket.",
    sources: [
      {
        label: "Medical Assistance",
        publisher: "U.S. Embassy & Consulate in Vietnam",
        url: "https://vn.usembassy.gov/medical-assistance-2/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flagEmoji: "🇮🇩",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112, the general emergency number, from any phone (including satellite and mobile) for police, medical, or fire assistance; coverage and response can vary across the archipelago. 118 and 119 are also used specifically for ambulance dispatch.",
            "Police-specific is 110, fire-specific is 113. Given the overlap, 112 is the simplest default to remember if you're unsure which number applies.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "Emergency response quality and speed vary significantly between major cities/tourist hubs (Bali, Jakarta) and more remote areas; response times and available equipment shouldn't be assumed to match what you'd expect at home.",
            "Private hospitals in tourist areas generally expect payment upfront or insurance verification, and given the response-time variability, many tourists in remote areas rely on private medical evacuation/assistance services rather than waiting on the public system.",
          ],
        },
      },
    ],
    gotcha:
      "Indonesia's emergency numbers are genuinely less standardized in practice than most countries on this site, 112 is the nominal general number, but implementation and response quality vary a lot by region, and dedicated ambulance lines (118/119) exist alongside it. If you're heading somewhere remote (a smaller island, rural Bali), it's worth researching the nearest private clinic or medevac provider in advance rather than assuming a quick 112 call solves everything the way it might in a dense European city.",
    sources: [
      {
        label: "Staying Safe in Indonesia",
        publisher: "Ministry of Tourism, Republic of Indonesia (Wonderful Indonesia)",
        url: "https://www.indonesia.travel/gb/en/general-information/staying-safe-in-indonesia",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    flagEmoji: "🇵🇭",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 911 for ambulance, police, or fire, a single nationwide number established by Executive Order No. 56 in 2018, replacing over 30 separate local emergency lines.",
            "The service is designed to be language-sensitive, calls can be handled not just in English/Tagalog but in Cebuano, Ilocano, Waray, and other regional languages, useful context even though it's not directly relevant to an English-speaking tourist.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As a foreign tourist, you'll generally be routed to (or should specifically ask for) a private hospital rather than a public one; private facilities in major cities are more consistently equipped and staffed with English speakers.",
            "Private hospitals commonly expect payment upfront or insurance verification before non-emergency treatment, and response times/facility quality can vary significantly if you're outside Metro Manila or other major cities.",
          ],
        },
      },
    ],
    gotcha:
      "911 here is a relatively recent unification (2018), replacing a genuinely fragmented patchwork of over 30 local numbers, so don't be surprised if older travel advice or even some locals still reference the pre-2018 system. 911 is the current, correct answer nationwide.",
    sources: [
      {
        label: "Executive Order No. 56, s. 2018 (Institutionalizing the Emergency 911 Hotline)",
        publisher: "Official Gazette of the Republic of the Philippines",
        url: "https://www.officialgazette.gov.ph/2018/05/25/executive-order-no-56-s-2018/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "india",
    name: "India",
    flagEmoji: "🇮🇳",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 112, India's unified national emergency number (launched under the Emergency Response Support System, ERSS), for police, fire, or ambulance. It works even from a phone with no SIM, no signal, or a locked screen.",
            "The older single-service numbers are still active and commonly used: 108 for medical/ambulance in most states, 102 for basic ambulance transport, 100 for police, and 101 for fire.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "As a foreign tourist, you'll generally be better served seeking out a private hospital directly (India has a large, well-regarded private hospital sector in major cities) rather than relying on the public ambulance/hospital system, which is built primarily around Indian residents and can vary widely in quality and wait times by region.",
            "Private hospitals commonly expect payment upfront, a deposit, or insurance verification before non-emergency treatment begins.",
          ],
        },
      },
    ],
    gotcha:
      "112 is the current unified number, but 108 (medical) remains extremely well known and widely used in practice, in many states you'll get just as fast a response calling 108 directly for an ambulance as you would going through 112 first. Either works; 108 is worth knowing specifically if you want the most direct route to medical help.",
    sources: [
      {
        label: "Emergency numbers",
        publisher: "Incredible India, Ministry of Tourism, Government of India",
        url: "https://www.incredibleindia.gov.in/en/emergency",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "panama",
    name: "Panama",
    flagEmoji: "🇵🇦",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 911 for ambulance, police, or fire. Panama's Ministry of Public Security unified emergency response under SUME 911 (Sistema Único de Manejo de Emergencias), which replaced the older separate numbers (103, 104, 335) entirely.",
            "The service is free from any mobile or landline phone.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "SUME 911 dispatches paramedics and ambulances from posts around the country, but coverage is more limited outside Panama City; if you're in a remote area, response can take longer than you'd expect based on the service's urban performance.",
            "As with most of Latin America on this site, private hospitals in Panama City generally expect payment upfront or insurance verification for non-emergency treatment, and are typically the better option for a foreign tourist over the public system.",
          ],
        },
      },
    ],
    gotcha:
      "If you find older information describing separate 103 (fire) and 104 (police) numbers for Panama, that's now outdated: those numbers were formally eliminated when Panama consolidated everything under a single 911 system. 911 alone is the current, correct number for anything, ambulance included.",
    sources: [
      {
        label: "SUME 911: respuesta inmediata para salvar vidas",
        publisher: "Ministerio de Seguridad Pública, Panamá",
        url: "https://www.minseg.gob.pa/2024/07/sume-911-respuesta-inmediata-para-salvar-vidas/",
      },
      OCS_SOURCE,
    ],
  },
  {
    slug: "colombia",
    name: "Colombia",
    flagEmoji: "🇨🇴",
    lastVerified: "2026-08-15",
    sections: [
      {
        title: "Emergency Numbers",
        content: {
          kind: "list",
          items: [
            "Dial 123, Colombia's Número Único de Seguridad y Emergencias, for ambulance, police, fire, or rescue, a single free number covering the whole country, staffed 24/7.",
            "Dedicated direct lines also exist if you already know exactly what you need: 125 for medical emergencies specifically, 112 for police, and 119 for the fire department (Bomberos), but 123 is the simplest default.",
            OCS_BULLET,
          ],
        },
      },
      {
        title: "Getting Treated as a Foreigner",
        content: {
          kind: "list",
          items: [
            "The overwhelming majority of 123 operators work in Spanish; the U.S. Embassy has specifically noted that Colombian government offices rarely have multilingual staff on hand. The Tourist Police unit is more likely to have English speakers, for non-life-threatening situations where you have a moment to ask for them.",
            "Private hospitals (concentrated in Bogotá, Medellín, and other major cities) generally expect payment upfront or insurance verification for non-emergency care, and are typically the better option for a foreign tourist over the public system.",
          ],
        },
      },
    ],
    gotcha:
      "Don't assume an English-speaking operator will pick up when you call 123; the U.S. Embassy is explicit that multilingual staff is the exception, not the norm, across Colombian government services generally. If you can, have someone Spanish-speaking nearby make the call, or at minimum have your location and the word 'ambulancia' ready before you dial.",
    sources: [
      {
        label: "Línea única de emergencias Nacional 123",
        publisher: "Departamento Administrativo de la Función Pública, Colombia",
        url: "https://www1.funcionpublica.gov.co/preguntas-frecuentes/-/asset_publisher/sqxafjubsrEu/content/linea-unica-de-emergencias-nacional-123/28585938",
      },
      OCS_SOURCE,
    ],
  },
];
