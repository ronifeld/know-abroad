// General FAQ content, independent of any single country or scenario.
// Written for U.S. passport holders, same as the rest of the site.
export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqEntries: FaqEntry[] = [
  {
    question: "What is the Schengen Area, and how is it different from the EU?",
    answer:
      "They're not the same thing. Schengen is a group of European countries that have abolished passport checks at their shared borders, so crossing between them feels like crossing a U.S. state line. The EU is a political and economic union. Some EU countries aren't in Schengen (Ireland, Cyprus), and some Schengen countries aren't in the EU (Norway, Iceland, Switzerland, Liechtenstein). What actually matters for a U.S. tourist: Schengen's 90/180-day rule applies across all Schengen countries combined, not per country you visit.",
  },
  {
    question: "I have dual nationality. Which passport do I travel on?",
    answer:
      "U.S. law requires U.S. citizens to enter and exit the United States on a U.S. passport. For other countries, it depends: entering the country of your other nationality on that country's passport is common (sometimes required), but doing so can mean you're treated purely as a local national while there, including not getting U.S. consular help if something goes wrong. Worth researching per-country before you travel, not assuming one rule covers every trip.",
  },
  {
    question: "What is travel insurance, and do I actually need it?",
    answer:
      "A policy covering costs like trip cancellation, lost luggage, and, most relevant to this site, emergency medical treatment and medical evacuation abroad. It's rarely legally required (a few countries check for it at entry), but as covered on this site's Health & Medical Emergencies pages, almost no country gives U.S. tourists free healthcare. Practically, it's often the only thing between you and a bill running into tens of thousands of dollars.",
  },
  {
    question: "What's the difference between a visa, a visa waiver, and \"visa-free\" entry?",
    answer:
      "A visa is a formal authorization you apply for in advance. A visa waiver (like ESTA-style programs) skips that application because of an agreement between countries, but usually still needs online pre-registration, a fee, and comes with real limits (short stays, tourism/business only). \"Visa-free\" entry skips even that step. Three different tiers of how much paperwork stands between you and the border.",
  },
  {
    question: "What actually counts as \"overstaying,\" and why does it matter?",
    answer:
      "Staying past your authorized entry date, even by one day. Nearly every country on this site treats it as a real legal violation, not a formality, consequences range from fines to future entry bans to detention, and severity varies a lot by country. It's tracked from your entry stamp or visa's actual dates, not from when a trip starts to feel long.",
  },
  {
    question: "What is an International Driving Permit (IDP), and is it the same as a license?",
    answer:
      "No, it's not a license by itself. It's a standardized, multi-language translation of your existing U.S. license, recognized under international agreements, and you carry it alongside your real license, never instead of it. In the U.S., only AAA and AATA can legally issue one; other \"apply online\" IDP sites are frequently scams (the FTC has warned about this directly). Some countries only recognize IDPs issued under a specific 1949 or 1968 convention, which is why the standard American IDP doesn't work everywhere.",
  },
  {
    question: "Does my passport need extra validity beyond my actual trip dates?",
    answer:
      "Often, yes. Many countries require 3–6 months of passport validity beyond your departure date, and airlines will deny boarding over this even if the destination's real rule is more lenient. The exact requirement varies by country, so \"my passport doesn't expire for another year\" isn't automatically a safe assumption.",
  },
  {
    question: "What's the \"90/180-day rule\" I keep seeing?",
    answer:
      "Most associated with Schengen: you can stay up to 90 days within any rolling 180-day window. \"Rolling\" is the key word, it's not a fixed calendar block, so days from a trip five months ago can still count against your total today. It also applies across every Schengen country combined, not per country.",
  },
  {
    question: "Can I actually get in trouble for working remotely for my U.S. job while traveling?",
    answer:
      "Technically, in most countries on this site, yes, see each country's Remote Work Legal Status page. Ordinary tourist entry generally doesn't authorize any paid work, even remote work with zero connection to the local economy. Enforcement against quiet remote workers is rare in practice, but it happens, and it's exactly why several countries now offer dedicated digital nomad visas.",
  },
  {
    question: "What should I do if I lose my passport abroad?",
    answer:
      "Contact the nearest U.S. embassy or consulate; they can issue an emergency passport to get you home, but it takes time and usually needs proof of citizenship plus a local police report of the loss/theft. Prepare before you travel: keep a photo of your passport's photo page somewhere other than just your phone, and know the nearest embassy's location and after-hours line in advance.",
  },
  {
    question: "What's the difference between a U.S. embassy and a U.S. consulate?",
    answer:
      "The embassy is the main diplomatic mission, always in the capital. Consulates are smaller offices, often in other major cities, handling most of the same day-to-day citizen services (passports, emergency help) without being the main diplomatic presence. For an American in trouble, whichever is physically closer is generally the right one to call.",
  },
  {
    question: "What is \"tax residency,\" and could I trigger it by accident?",
    answer:
      "It's what determines which country can tax your income, and it's often triggered automatically, commonly around 183 days present in a country within a set period, though the exact test varies. Once triggered, that country generally gets to tax your worldwide income, on top of whatever the U.S. still requires from you as a citizen. Very possible to trigger unintentionally on an extended stay, which is why it comes up throughout the Remote Work Legal Status pages.",
  },
  {
    question: "Do I need to worry about my prescription medications when traveling?",
    answer:
      "Yes, depending on the country and the specific medication. Some common U.S. prescriptions and even OTC drugs (certain ADHD stimulants, strong painkillers, some cold medicines) are controlled or fully banned elsewhere, regardless of your valid U.S. prescription, covered per-country on the Local Laws & Customs pages. General practice: original labeled containers, a copy of the prescription, and check specific medications in advance rather than assuming a U.S. prescription travels with you.",
  },
  {
    question: "When should I call the State Department's emergency number instead of local emergency services?",
    answer:
      "Call local emergency services first (911, 112, or whatever it is locally, covered per-country on the Health & Medical Emergencies pages) for anything needing an immediate physical response. The State Department's Overseas Citizens Services line (+1-888-407-4747 from the U.S./Canada, +1-202-501-4444 from overseas) is separate, for consular help: a detained or hospitalized American, a lost passport, coordinating with family. It won't send an ambulance.",
  },
  {
    question: "What does \"informational only, not legal advice\" actually mean here?",
    answer:
      "This content is a starting point for understanding a country's general rules, not a substitute for checking the current official source or consulting a licensed professional for your specific situation. Laws change and exceptions exist that a general resource can't account for. Every page links to the official sources it was drafted from specifically so you can verify anything that actually matters before you rely on it.",
  },
];
