// Local Laws & Customs scenario. Content drafted from official / authoritative
// sources as of each country's `lastVerified` date; re-check before relying
// on any of it, especially drug penalties and medicine restrictions, where
// getting it wrong has real consequences. Written for U.S. citizens traveling
// on a U.S. passport. Section names deliberately echo the structure the U.S.
// State Department already uses on travel.state.gov country pages under
// "Local Laws & Special Circumstances."
import type { CountryContent } from "@/types/scenario";

const STATE_DEPT_SOURCE = (country: string, slug: string) => ({
  label: `${country} International Travel Information`,
  publisher: "U.S. Department of State, Bureau of Consular Affairs",
  url: `https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/${slug}.html`,
});

export const localLawsCountries: CountryContent[] = [
  {
    slug: "mexico",
    name: "Mexico",
    flagEmoji: "🇲🇽",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Drinking in public spaces, streets, parks, outside licensed premises, is banned in most Mexican states and municipalities, and can get you fined or briefly detained even if it feels like normal tourist behavior.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Certain prescription medications common in the U.S. (some ADHD stimulants and other controlled substances) can be treated as illegal narcotics under Mexican law if you don't have the original prescription and packaging with you. Carry medications in their original, labeled containers.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military installations, government buildings, and personnel; this can draw unwanted attention even where it's not explicitly posted as forbidden.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, and photo ID is commonly requested if you look under 25.",
            "Drug possession and use, including marijuana, is illegal in Mexico and can lead to long jail sentences or steep fines, regardless of what's legal where you live in the U.S.",
            "Bringing firearms or ammunition into Mexico without proper Mexican government permits is a serious crime with severe penalties, including prison time, even for a single round of ammunition left in a bag by accident.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carrying your passport or a government-issued photo ID is the safest practice; it's what you'll be asked for if stopped or if buying alcohol.",
          ],
        },
      },
    ],
    gotcha:
      "The firearms/ammunition rule catches Americans off guard specifically because it's so easy to violate by accident: a single stray round left in a bag, backpack, or vehicle from a domestic trip can result in serious criminal charges at the Mexican border, regardless of intent. Double-check bags and vehicles thoroughly before crossing, this isn't a 'declare it and pay a fine' situation.",
    sources: [
      STATE_DEPT_SOURCE("Mexico", "Mexico"),
      {
        label: "Driving to Mexico (Local Laws)",
        publisher: "U.S. Embassy & Consulates in Mexico",
        url: "https://mx.usembassy.gov/driving-to-mexico/",
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    flagEmoji: "🇯🇵",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Smoking is restricted to designated areas in most cities (Tokyo has banned street smoking outside marked zones citywide), while vaping regulations vary by product; nicotine-containing e-cigarettes without a prescription are effectively restricted.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Stimulant medications including Adderall and Vyvanse are strictly prohibited, even with a valid foreign prescription and a customs declaration. There are no exceptions, and possession can result in arrest and detention.",
            "Common U.S. OTC cold/allergy medicines containing pseudoephedrine or certain other stimulant ingredients above Japan's threshold, including original-formula Sudafed, Actifed, Vicks Inhaler, and NyQuil, are also prohibited.",
            "Legal alternatives for ADHD exist locally (methylphenidate, atomoxetine), but check your specific medication's status with Japan's Narcotics Control Department well before you travel, not after you land.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones require permission to fly over densely populated areas (essentially all of central Tokyo and most other cities) and near airports; casual recreational flying in urban Japan is more restricted than many tourists expect.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 20. Japan enforces drug laws strictly and with near-zero cultural tolerance; penalties apply even for small personal amounts and at lower blood-alcohol thresholds for driving than most U.S. states use.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Foreign nationals are legally required to carry their passport at all times in Japan; you can be asked to produce it during a routine police check.",
          ],
        },
      },
    ],
    gotcha:
      "The stimulant-medication ban is the single most consequence-heavy item on this page for many American travelers, because it applies with zero exceptions, a valid U.S. prescription and honest customs declaration do not protect you. If you take Adderall, Vyvanse, or a similar medication, you need a genuinely different plan for Japan (a doctor-approved substitute or a legal import certificate for an allowed medication), not just 'bring the prescription.'",
    sources: [
      STATE_DEPT_SOURCE("Japan", "Japan"),
      {
        label: "Bringing Medicine to Japan for Personal Use",
        publisher: "Ministry of Health, Labour and Welfare, Japan",
        url: "https://www.mhlw.go.jp/english/policy/health-medical/pharmaceuticals/01.html",
      },
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flagEmoji: "🇬🇧",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Smoking is banned in enclosed public spaces and workplaces nationwide; most pubs and bars enforce outdoor-only smoking areas.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Some strong prescription painkillers and ADHD medications are controlled drugs under UK law; bring the original prescription and, for larger supplies, consider a doctor's letter confirming it's for personal use.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Photography is generally permitted at most tourist sites, though museums, galleries, and some private venues set their own restrictions. Drones must be registered with the Civil Aviation Authority if they weigh 250g or more, and flying near airports or over crowds is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18 across England, Wales, Scotland, and Northern Ireland, no exceptions for tourists.",
            "Possession of recreational drugs is illegal; penalties can include up to 7 years in prison and/or a fine, even for drugs that are legal or decriminalized in parts of the U.S.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "There's no general legal requirement to carry ID in the UK, but you'll need photo ID with a hologram or UV feature (a passport works) to buy alcohol if you look under 25.",
          ],
        },
      },
    ],
    gotcha:
      "The UK is one of the more relaxed countries on this page about carrying ID day-to-day, there's no 'stopped and asked to produce it' law the way there is in much of continental Europe or Japan, but that relaxed approach doesn't extend to drug penalties, which are genuinely serious (up to 7 years) for substances that carry little to no consequence in parts of the U.S.",
    sources: [
      STATE_DEPT_SOURCE("United Kingdom", "UnitedKingdom"),
      {
        label: "Drugs Penalties",
        publisher: "GOV.UK",
        url: "https://www.gov.uk/penalties-drug-possession-dealing",
      },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    flagEmoji: "🇪🇸",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Smoking is banned in enclosed public spaces, on public transport, and at some outdoor areas like beaches and playgrounds in various municipalities.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring prescription medications in original, labeled packaging with a copy of the prescription; some U.S. stimulant medications require prior notification or documentation to bring into Spain legally.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones require registration with Spain's aviation authority (AESA) if they weigh over 250g, and flying over crowds, near airports, or in many urban centers and historic sites is restricted or banned outright.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18. Drinking in the street, squares, parks, and other public spaces is banned across most of Spain under local 'ley antibotellón' ordinances, with fines typically €300–€600.",
            "Cannabis possession for personal use in private spaces is decriminalized (an administrative offense, not a crime), but public consumption or possession is a fineable administrative offense carrying €601–€30,000 penalties, a much wider range than most tourists expect.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carrying a valid ID (your passport) is advisable; bars and shops routinely ask for photo ID if you look under 25.",
          ],
        },
      },
    ],
    gotcha:
      "The gap between 'decriminalized' and 'legal' trips people up in Spain specifically: possessing cannabis for personal use in a private space is genuinely low-risk, but the same amount in public, on a street or in a park, is a fineable offense that can run into the thousands of euros. 'It's basically legal here' is not accurate the way it might be assumed from secondhand travel advice.",
    sources: [
      STATE_DEPT_SOURCE("Spain", "Spain"),
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flagEmoji: "🇸🇬",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Import, sale, and possession of chewing gum are banned; you can be fined at least S$500 for it. Smoking is banned in nearly all indoor public places and most outdoor public areas unless specifically marked as a smoking area.",
            "Vaping (e-cigarettes) is strictly prohibited under the Tobacco Act, purchase, use, possession, or distribution can mean heavy fines and possible imprisonment, not just confiscation.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Some common U.S. medications (including certain stimulants, sedatives, and codeine-containing products) are controlled substances in Singapore requiring an import permit. Check with the Health Sciences Authority before traveling if you take a controlled medication.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones require a permit from the Civil Aviation Authority of Singapore for most recreational flying, given how dense and built-up the city-state is; casual, permit-free drone flying is much more limited here than in many other countries on this page.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18. Public alcohol consumption is banned nationwide from 10:30pm to 7am, and takeaway alcohol sales are barred during those hours too.",
            "Singapore has some of the strictest drug laws in the world: the death penalty is mandatory for trafficking, manufacturing, importing, or exporting amounts as low as 15g of heroin, 30g of cocaine, or 500g of cannabis. Personal possession alone can mean up to 10 years in prison and a S$20,000 fine.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Foreign visitors should carry their passport; it's your primary form of ID and what you'll be asked for by authorities.",
          ],
        },
      },
    ],
    gotcha:
      "Singapore's drug thresholds for the mandatory death penalty are genuinely low by global standards, 15g of heroin is a small, easily-hidden amount, not a trafficking-scale quantity in most people's mental model. This isn't a country where 'I only had a little' is a meaningful legal distinction once you're over the threshold; the law treats the amount, not your intent, as decisive.",
    sources: [
      {
        label: "Singapore's Anti-Drug Laws",
        publisher: "Central Narcotics Bureau (CNB), Singapore",
        url: "https://www.cnb.gov.sg/singapore-drug-situation/misuse-of-drugs-act/",
      },
      STATE_DEPT_SOURCE("Singapore", "Singapore"),
    ],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flagEmoji: "🇦🇪",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Public decency and morality laws are much stricter than in the U.S.; public displays of affection can draw penalties, and dressing modestly (covering shoulders and knees) is expected in public spaces, mosques, and government buildings.",
            "Sexual relations outside marriage are illegal, and pregnancy outside marriage can result in arrest and detention, a genuinely serious legal exposure for unmarried couples, not just a cultural norm to respect.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Codeine-containing medications (including common combination painkillers) require prior Ministry of Health approval to bring in; many ADHD stimulants, benzodiazepines, and other psychotropics need a MOHAP import permit even with a valid prescription.",
            "Possessing a controlled medication without proper documentation is treated as a criminal matter under UAE federal drug law, not a customs inconvenience.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Photographing government buildings, military sites, ports, and some infrastructure is prohibited. Photographing people, especially women, without their consent can also lead to legal trouble under UAE privacy law.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "Alcohol possession and consumption is entirely prohibited in the emirate of Sharjah; other emirates allow it in licensed venues.",
            "UAE law imposes the death penalty for convicted drug traffickers, and critically, you can be charged and convicted even if a controlled substance was consumed entirely outside the UAE, as long as trace amounts are still detectable in your bloodstream on arrival.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport or a copy of it; visitors are expected to be able to produce ID if asked by authorities.",
          ],
        },
      },
    ],
    gotcha:
      "The zero-tolerance rule for drug traces already in your bloodstream on arrival is the single most important thing on this page for the UAE, it means something legally consumed in the U.S. days before your flight (certain prescription drugs, or drugs legal in parts of the U.S. but not federally) can still result in prosecution once you land, based purely on a blood or urine test, regardless of where or when you actually used it.",
    sources: [
      STATE_DEPT_SOURCE("United Arab Emirates", "UnitedArabEmirates"),
      {
        label: "Handling Emergencies / Laws & Culture",
        publisher: "The Official Portal of the UAE Government (u.ae)",
        url: "https://u.ae/en/information-and-services/justice-safety-and-the-law",
      },
    ],
  },
  {
    slug: "france",
    name: "France",
    flagEmoji: "🇫🇷",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Since July 2025, smoking tobacco is banned in a wide range of public places (parks, beaches, near schools) to protect children specifically; violators can be fined. Vaping is more permissive but still restricted indoors in many venues.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring prescription medications in original packaging with a copy of the prescription; certain codeine-based and stimulant medications require additional documentation for quantities beyond a short personal supply.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones over 250g must be registered with France's civil aviation authority (DGAC); flying over Paris, near airports, and around many historic and government sites is restricted or banned.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "Drug offenses can lead to long jail sentences and heavy fines. Driving under the influence of drugs or alcohol can mean immediate arrest and detention.",
            "The State Department specifically warns about 'date-rape' drugs being present in French bars and clubs; don't leave drinks unattended or accept drinks from strangers.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "There's no blanket legal requirement for tourists to carry ID at all times, but French police can request identification, and a passport is the simplest way to satisfy that on the spot.",
          ],
        },
      },
    ],
    gotcha:
      "The date-rape-drug warning is specific enough (and repeated directly by the State Department, not just generic travel-safety boilerplate) that it's worth taking seriously in nightlife settings specifically, watch your drink the way you would anywhere, but don't assume France's overall low-crime reputation means this particular risk doesn't apply.",
    sources: [
      STATE_DEPT_SOURCE("France", "France"),
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flagEmoji: "🇨🇦",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Open-container laws are enforced provincially; walking down the street or sitting on a beach with an open beer typically draws a fine ($100–$300 CAD depending on the municipality), even though Canada otherwise feels very similar to the U.S.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Amphetamine-based medications without a valid prescription fall under Canada's most heavily regulated drug schedule; travel with the original prescription and enough (but not excessive) supply for your trip.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones over 250g require registration with Transport Canada, and flying near airports or over crowds is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18 in Alberta, Manitoba, and Quebec, and 19 everywhere else, so it genuinely varies by province, not a single national number.",
            "Cannabis is legal nationally for adults (19 in most provinces, 18 in Alberta, 21 in Quebec), and adults may carry up to 30g in public. But it is a serious federal crime to carry cannabis across the Canadian border in either direction, even between two places where it's legal on both sides.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "No special ID requirement beyond proving your age when buying alcohol or cannabis; a passport is the most reliable option since a foreign driver's license isn't always accepted.",
          ],
        },
      },
    ],
    gotcha:
      "The cannabis border rule is the one that genuinely trips people up given how normalized legal cannabis feels on both sides of the U.S.-Canada border in many states/provinces: crossing with any amount, even a small personal quantity from a state where it's fully legal, is a federal offense at the Canadian border (and separately, a federal offense re-entering the U.S., since cannabis remains federally illegal there too). Don't carry it across, full stop, buy or consume locally instead.",
    sources: [
      STATE_DEPT_SOURCE("Canada", "Canada"),
      {
        label: "Drugs, alcohol and travel outside Canada",
        publisher: "Government of Canada",
        url: "https://travel.gc.ca/travelling/health-safety/drugs",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flagEmoji: "🇦🇺",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Drinking in public spaces, streets, parks, beaches, is illegal in most Australian states under local 'Alcohol Free Zone' rules.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Some U.S. prescription medications (certain stimulants and strong painkillers) require a Traveller's Exemption or prior approval through the Therapeutic Goods Administration to bring in legally; check before you pack more than a short personal supply.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Photographing around any military base is highly illegal. There's no general prohibition on street photography, but it's expected practice not to photograph individuals without consent.",
            "Recreational drone flying doesn't require registration, a license, or accreditation regardless of drone weight, genuinely more permissive than most countries on this page, though restricted zones (airports, prisons, military areas, protected nature reserves) still apply.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, and a passport works as proof of age.",
            "Australia has a zero-tolerance policy on entering the country with any illicit drugs, expect drug-sniffing dogs at major airports, train stations, and festivals, and don't assume something legal or decriminalized in parts of the U.S. is fine to bring in.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "No legal requirement to carry ID at all times, but if you're not carrying your passport, carry a certified copy or other accepted photo ID, it's worth the minor hassle if you're stopped or need to prove your age.",
          ],
        },
      },
    ],
    gotcha:
      "Australia's drone rules are unusually permissive here (no registration or license needed for recreational tourist flying, full stop), which is the opposite of the pattern on most of this page, but that permissiveness doesn't extend even slightly to drugs: the zero-tolerance entry policy with active dog searches at major transit points means 'I brought a small personal amount' is exactly the kind of thing this specific enforcement is built to catch.",
    sources: [
      {
        label: "Following the law when you travel overseas",
        publisher: "Smartraveller, Department of Foreign Affairs and Trade, Australia",
        url: "https://www.smartraveller.gov.au/before-you-go/laws",
      },
      STATE_DEPT_SOURCE("Australia", "Australia"),
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flagEmoji: "🇮🇪",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Dublin, Cork, Galway, and other cities have designated alcohol-free zones, particularly in busy town centers and tourist areas; Gardaí (police) can confiscate alcohol from anyone drinking in a restricted zone, and being drunk and disorderly in public is a criminal offense.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Carry prescription medications in original packaging with the prescription itself; controlled substances like certain ADHD stimulants may require additional documentation for larger quantities.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones must be registered with the Irish Aviation Authority if they weigh 250g or more, with a small operator competency requirement for heavier drones.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, no exceptions for visitors. Off-license and shop alcohol sales are restricted to set hours (generally 10:30am–10pm Mon–Sat, later start on Sunday).",
            "Using or altering a fake ID to get around age limits is a serious offense: fines up to €3,000 or up to a year in jail.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport if you plan to drink; it's the most universally accepted form of ID, alongside an EU/EEA national ID card or driving license, which a U.S. license doesn't substitute for as reliably.",
          ],
        },
      },
    ],
    gotcha:
      "The fake-ID penalty (up to a year in jail, not just a confiscated card) is stiffer than a lot of American visitors, especially younger ones traveling with friends, expect coming from a context where a fake ID mostly just gets taken away. Don't treat it as a low-stakes workaround here.",
    sources: [
      STATE_DEPT_SOURCE("Ireland", "Ireland"),
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    flagEmoji: "🇵🇹",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Consuming alcohol in public places like streets and parks is generally prohibited outside of authorized events.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original, labeled packaging with your prescription; some stimulant and opioid-based medications require prior documentation for larger supplies.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones require registration with Portugal's civil aviation authority (ANAC) above certain weight thresholds, and flying in Lisbon and Porto's historic centers is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, strictly enforced with ID checks.",
            "Portugal decriminalized personal possession of all drugs (not just cannabis) in 2001: possessing up to roughly a 10-day personal supply is an administrative matter (referred to a panel that can recommend treatment, fines, or warnings), not a criminal one. Selling and trafficking remain serious criminal offenses.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry ID if you plan to purchase alcohol; bars and stores strictly enforce age verification.",
          ],
        },
      },
    ],
    gotcha:
      "Portugal's drug decriminalization is genuinely famous, but it's easy to over-read: it applies to personal-use quantities and treats possession as an administrative matter, not that drugs are legal. Selling, trafficking, or possessing beyond the personal-supply threshold is still a real criminal matter, and being a foreign tourist doesn't change how the administrative process treats you.",
    sources: [
      STATE_DEPT_SOURCE("Portugal", "Portugal"),
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flagEmoji: "🇩🇪",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Displaying Nazi symbols (including the swastika), wearing Nazi uniforms, or making Nazi salutes in public is a criminal offense under Germany's Criminal Code (§86a), punishable by up to 3 years in prison, this includes tourists, and includes seemingly casual gestures made as a joke.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring prescription medications with the original prescription and packaging; hard-drug-adjacent controlled medications may need extra documentation for quantities beyond a short personal supply under the Narcotics Act (BtMG).",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones must be registered if they weigh 250g or more, and flying near airports, government buildings, or crowds is restricted under German and broader EU rules.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "Germany uses a tiered drinking age: beer and wine from 16, spirits from 18.",
            "Germany legalized recreational cannabis for adult residents in April 2024, but the law's residency requirement effectively excludes tourists; as a visitor, possessing or using cannabis can still mean fines or prosecution even though German residents next to you may be doing so legally.",
            "Hard drugs (cocaine, MDMA, heroin, amphetamines, LSD) remain fully illegal with real prison penalties under the Narcotics Act.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Germany doesn't legally require tourists to carry ID at all times the way it does for German residents, but carrying your passport is strongly recommended; police can request ID, and having it avoids an inconvenient trip to a station to produce it later.",
          ],
        },
      },
    ],
    gotcha:
      "Germany's cannabis legalization is a real trap for tourists specifically: the law was written around residency, so seeing German residents around you legally possessing and using cannabis doesn't mean you, as a visitor, are covered by the same legal protection. It's easy to assume 'it's legal here now' applies to you when it doesn't.",
    sources: [
      STATE_DEPT_SOURCE("Germany", "Germany"),
      {
        label: "Strafgesetzbuch (Criminal Code) Section 86a",
        publisher: "Bundesministerium der Justiz (Federal Ministry of Justice, Germany)",
        url: "https://www.gesetze-im-internet.de/englisch_stgb/englisch_stgb.html",
      },
    ],
  },
  {
    slug: "brazil",
    name: "Brazil",
    flagEmoji: "🇧🇷",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Public consumption of cannabis remains prohibited even where possession itself has been decriminalized (see Drugs & Alcohol below); using it openly in public can still draw police attention.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring prescription medications in original packaging with the prescription; stimulant medications and other controlled substances can require additional import documentation (ANVISA, Brazil's health regulatory agency) for larger quantities.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones must be registered with ANAC (Brazil's civil aviation authority) above certain weight thresholds, and flying near airports, government buildings, and large public events is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, enforced nationwide.",
            "Brazil's 'Lei Seca' (Dry Law) prohibits driving with any measurable blood-alcohol level at all, a zero-tolerance standard, not the 0.08% threshold common in the U.S.",
            "In 2024, Brazil's Supreme Court decriminalized cannabis possession of up to 40g or cultivation of up to 6 plants (administrative penalty only, no arrest or criminal record); other drugs (cocaine, MDMA, amphetamines, opioids) remain fully illegal with serious trafficking sentences of 5–15 years.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry a photocopy of your passport (and ideally a driver's license) with you; ID is required if your age is in question and generally useful if stopped by police.",
          ],
        },
      },
    ],
    gotcha:
      "Lei Seca's true zero-tolerance driving standard is stricter than what most Americans expect walking in, there's no 'one beer is probably fine' buffer the way there effectively is under a 0.08% BAC limit. If you're driving in Brazil at all, plan on zero alcohol, not 'under the limit.'",
    sources: [
      STATE_DEPT_SOURCE("Brazil", "Brazil"),
    ],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    flagEmoji: "🇨🇷",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Drinking alcohol on public streets or inside parked vehicles is prohibited; tourists caught drinking in unauthorized public spaces face fines around ₡180,000 (roughly $360).",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original, labeled packaging with a copy of the prescription; some controlled stimulant and opioid medications may draw scrutiny at customs without it.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones require registration with Costa Rica's civil aviation authority (DGAC) for most recreational and all commercial use, and flying in national parks or protected areas is generally restricted without a permit.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18.",
            "Costa Rica has a zero-tolerance policy toward drugs for tourists specifically: even though marijuana enforcement is relatively relaxed for personal use among locals, buying, selling, or carrying it as a foreigner risks police trouble and potential deportation, not just a local warning.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport (or a clear copy) when going out, especially if you look close to the drinking age; it's what bars, restaurants, and liquor stores will ask for.",
          ],
        },
      },
    ],
    gotcha:
      "Costa Rica's laid-back reputation for cannabis (locals often smoking relatively openly) doesn't extend to tourists in practice, foreigners specifically risk deportation for the same conduct that draws little attention from a local. Don't read the general vibe as permission; the actual legal exposure for a visitor is meaningfully higher.",
    sources: [
      STATE_DEPT_SOURCE("Costa Rica", "CostaRica"),
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    flagEmoji: "🇹🇭",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Dress modestly at temples (shoulders and knees covered) and remove shoes before entering; insulting the monarchy (lèse-majesté) is a serious criminal offense, including online posts, taken far more seriously than casual political commentary would be treated in the U.S.",
            "Alcohol sales are completely banned on major Buddhist holidays (Makha Bucha, Visakha Bucha, Asanha Bucha), and retail sales are restricted between midnight and 11am generally.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Some ADHD stimulants and strong painkillers require prior notification or import documentation through Thailand's FDA; bring the original prescription and a doctor's letter for anything beyond a short personal supply.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military installations and government buildings. Drones require registration with Thailand's NBTC and CAAT for most tourist use, and flying near airports, royal palaces, and government buildings is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 20, higher than most countries on this page.",
            "Vaping (e-cigarettes and vape juice) is completely illegal in Thailand, importing, possessing, or using one carries fines up to 30,000 THB (roughly $900) and potential jail time, this surprises a lot of travelers coming from places where vaping is normalized.",
            "Thailand has strict drug laws with harsh punishments; possession can mean heavy fines or imprisonment, and trafficking can carry the death penalty (in practice, long-term imprisonment of 15–20 years is more common than execution, but the exposure is real).",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport; officers may check it alongside your TDAC (Thailand Digital Arrival Card) QR code, so keep both accessible, not just packed away.",
          ],
        },
      },
    ],
    gotcha:
      "Vaping being fully illegal (not just restricted) is a genuine surprise for a lot of American travelers, given how normalized it's become at home; it's treated closer to a drug offense than a smoking regulation, with real fines and jail exposure. Leave vapes at home rather than assuming Thailand treats them the way most U.S. states do.",
    sources: [
      STATE_DEPT_SOURCE("Thailand", "Thailand"),
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flagEmoji: "🇰🇷",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Smoking is banned in most indoor public spaces and many outdoor areas near building entrances, schools, and parks; designated smoking areas are common in cities.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Some ADHD stimulants and codeine-based medications require prior approval or documentation through Korea's Ministry of Food and Drug Safety; bring the original prescription and check status before traveling with a controlled medication.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military installations, especially near the DMZ, where restrictions are actively enforced. Drones over 250g require registration, and flying near airports, military zones, and the DMZ is heavily restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 19 by international reckoning, but South Korea calculates it by birth year, not exact birthdate, so someone turns legal on January 1st of the relevant year regardless of their actual birthday.",
            "South Korea enforces one of the strictest zero-tolerance drug policies in the world, applying equally to foreign nationals and citizens. This extends to cannabis and CBD products that may be legal where you live; getting caught can mean immediate arrest, months in detention, and a permanent entry ban.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport (specifically the passport, not just a copy) since it's the standard form of ID checked when buying alcohol or if stopped by police.",
          ],
        },
      },
    ],
    gotcha:
      "South Korea's zero-tolerance drug policy extends to CBD, which trips people up because CBD products are widely available and federally legal-adjacent in much of the U.S. In Korea, CBD possession is treated the same as any other controlled substance, don't assume 'it's just CBD' is a meaningful defense.",
    sources: [
      STATE_DEPT_SOURCE("South Korea", "SouthKorea"),
    ],
  },
  {
    slug: "italy",
    name: "Italy",
    flagEmoji: "🇮🇹",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Rome, Florence, and Venice have local ordinances restricting public alcohol consumption, typically after 10–11pm in designated nightlife and historic center zones; there's no national ban on public drinking otherwise.",
            "Dress modestly (shoulders and knees covered) when visiting churches and religious sites; some will turn away visitors in shorts or sleeveless tops.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; controlled stimulant and opioid medications may need additional documentation for larger quantities under Italian drug law.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drone flying is restricted or requires authorization in historic centers like Rome, Venice, and Florence, popular tourist photo spots are often exactly where drone rules are strictest, not an incidental overlap.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, though ID checks happen less often in practice than in the U.S.",
            "Cannabis possession in small personal amounts is decriminalized as an administrative offense (typically a suspension of your driver's license, passport, or ID for 1–12 months, not a criminal record), but amounts above roughly 5 grams, or anything suggesting distribution, shift to criminal trafficking charges carrying 6–20 years in prison.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "A passport is the safest form of ID to carry; some venues accept a foreign driver's license for age verification but it's not guaranteed.",
          ],
        },
      },
    ],
    gotcha:
      "The jump from 'administrative offense' to '6–20 years in prison' happens at a genuinely low quantity threshold (around 5 grams) for cannabis in Italy, closer to what a casual user might carry than what most people associate with 'trafficking.' The line between decriminalized and seriously criminal here is thinner than the country's relaxed reputation suggests.",
    sources: [
      STATE_DEPT_SOURCE("Italy", "Italy"),
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flagEmoji: "🇳🇱",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Coffeeshops are legally prohibited from selling alcohol, don't expect beer or wine on a coffeeshop menu, it's cannabis products only under Dutch tolerance policy.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring prescription medications with the original prescription and packaging; controlled stimulant medications may need additional documentation for larger supplies under Dutch (and broader EU) drug regulations.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones must be registered if they weigh 250g or more, and flying over Amsterdam's historic center and near Schiphol Airport is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "Cannabis remains technically illegal but is formally tolerated in licensed 'coffeeshops' under a specific government toleration policy, not a blanket legalization. You must be 18+ and show ID to enter a coffeeshop; a passport or national ID card is expected, a driver's license is often refused, especially for non-EU visitors.",
            "You can buy a maximum of 5 grams per coffeeshop visit, and cannot carry more than 5 grams total on your person, this cap applies across all cannabis products combined (flower, hash, edibles), not per product.",
            "A few cities and border municipalities (notably Maastricht) enforce a residency requirement barring non-residents from buying at coffeeshops; this doesn't currently apply in Amsterdam despite periodic headlines about it, but it's worth checking current status before relying on it in a specific city.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry a valid passport or national ID card; it's specifically required (not just recommended) to enter a coffeeshop, and a driver's license often won't be accepted as a substitute.",
          ],
        },
      },
    ],
    gotcha:
      "The Netherlands' cannabis policy is 'tolerated,' not 'legal,' a real legal distinction: coffeeshops themselves operate in a specific regulatory gray zone, and the 5-gram personal carrying limit is a hard cap that applies to you individually, not per purchase. Buying at multiple coffeeshops in one day and carrying it all at once can put you over that limit even if each individual purchase was within bounds.",
    sources: [
      {
        label: "Toleration policy regarding soft drugs and coffee shops",
        publisher: "Government of the Netherlands (Rijksoverheid)",
        url: "https://www.government.nl/topics/drugs/toleration-policy-regarding-soft-drugs-and-coffee-shops",
      },
      STATE_DEPT_SOURCE("Netherlands", "Netherlands"),
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flagEmoji: "🇨🇭",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Public alcohol consumption is generally permitted, but individual cantons and municipalities can set their own local restrictions, particularly around late-night hours in city centers.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; controlled stimulant and opioid medications may require additional documentation for quantities beyond a short personal supply.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones must be registered if they weigh 250g or more (matching the broader EASA/EU framework Switzerland participates in), and flying near airports and over crowds is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "Switzerland uses a tiered drinking age like Germany: beer and wine from 16, spirits from 18. Fines up to CHF 10,000 apply to businesses that sell to someone underage, regardless of the specific age limit violated.",
            "Drug penalties are severe, convicted offenders can expect long jail sentences and heavy fines, and merely transiting through a Swiss airport (Zurich, for example) with drugs in your luggage can trigger trafficking charges, not just possession.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "You're expected to carry ID or your passport in Switzerland; you can be taken in for questioning if you don't have it on you when asked.",
          ],
        },
      },
    ],
    gotcha:
      "The transit-trafficking-charge risk is worth knowing if you're connecting through Zurich rather than actually visiting Switzerland: simply having drugs in checked or carry-on luggage while passing through can be treated as trafficking, not personal possession, a much more serious charge than you might expect for something you never intended to bring into the country substantively.",
    sources: [
      STATE_DEPT_SOURCE("Switzerland", "Switzerland"),
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flagEmoji: "🇳🇿",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "New Zealand has some of the world's strictest biosecurity laws: undeclared food, plant material, animal products, and even dirty hiking boots can result in an on-the-spot fine (up to NZD 400) at the border, this is enforced far more aggressively than most tourists expect from a customs check.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; some stimulant and opioid-based medications require a Medsafe import permit for quantities beyond a short personal supply.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Drones must follow Civil Aviation Authority rules, generally no permit needed for recreational flying under 25kg if you stay under 120m altitude and away from airports and people, but many national parks and Māori cultural sites restrict or ban drones entirely.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18. A passport, NZ driver's license, or the Hospitality NZ 18+ / Kiwi Access Card all work as accepted proof of age.",
            "Presenting a fake ID or buying alcohol underage both carry a NZD 250 fine.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "No blanket requirement to carry ID, but carry proof of age if you plan to drink; the Kiwi Access Card (available to visitors, not just residents) is a lighter-weight alternative to carrying your passport around at night.",
          ],
        },
      },
    ],
    gotcha:
      "Biosecurity, not drugs or alcohol, is the thing most likely to actually cost an American tourist money at the New Zealand border. Hiking boots with visible dirt, a piece of fruit forgotten in a bag, or an undeclared wooden souvenir can each trigger real fines; declare everything biological, even if you're sure it's fine, since NZ's enforcement here is unusually strict by global standards.",
    sources: [
      STATE_DEPT_SOURCE("New Zealand", "NewZealand"),
      {
        label: "Bringing food, plants and animal products into New Zealand",
        publisher: "Ministry for Primary Industries, New Zealand",
        url: "https://www.mpi.govt.nz/travel-and-recreation/travellers-and-tourists/what-you-cannot-bring-or-mail-into-new-zealand/",
      },
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    flagEmoji: "🇻🇳",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Dress modestly at temples and pagodas (shoulders and knees covered); public criticism of the government or Communist Party, including online posts, can carry real legal risk, more so than casual political commentary would in the U.S.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; stimulant and opioid-based medications can draw serious scrutiny given Vietnam's strict overall drug enforcement, verify status before traveling with a controlled medication.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military installations and government buildings. Drone flights require approval from the Ministry of Defense's Operations Bureau, submitted at least 14 days in advance, on top of Civil Aviation Authority registration; this is a genuinely heavier process than in most other countries on this page, and casual, permit-free drone tourism doesn't really exist here.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18. A 2019 law imposes an absolute zero-tolerance rule on drink-driving, including motorbikes, any detectable blood or breath alcohol while driving is an offense.",
            "Vietnam imposes the death penalty for drug trafficking above threshold quantities (roughly 100g or more of heroin, cocaine, methamphetamine, or MDMA under the 2015 Penal Code). Cannabis is fully illegal with no medical or recreational exception, and larger amounts fall under the same trafficking laws.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport or a copy of your visa; you may be taken in for questioning if you can't produce proper ID when asked.",
          ],
        },
      },
    ],
    gotcha:
      "The military-approval requirement for drones is a genuine outlier on this page, most countries just require aviation-authority registration, but Vietnam layers a separate Ministry of Defense approval process on top, submitted weeks in advance. If a drone is central to your trip plans, this isn't something you can sort out after you land; plan for it well before you travel or leave the drone at home.",
    sources: [
      STATE_DEPT_SOURCE("Vietnam", "Vietnam"),
      {
        label: "Arrest or Detention of a U.S. Citizen in Vietnam",
        publisher: "U.S. Embassy & Consulate in Vietnam",
        url: "https://vn.usembassy.gov/arrest-or-detention-of-a-u-s-citizen-in-vietnam/",
      },
    ],
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flagEmoji: "🇮🇩",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Dress modestly when visiting temples (a crop top and shorts won't be acceptable); many upscale bars and rooftop lounges, especially in Bali, enforce a smart-casual dress code of their own.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; given how severely Indonesia treats controlled substances generally (see below), it's worth confirming any stimulant or opioid-based medication's status before you travel, not assuming a prescription alone is sufficient protection.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing government and military facilities. Flying a drone above 150 meters requires a permit, and no-fly zones cover airports, military areas, and national parks.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 21, higher than most countries on this page; carry a copy of your passport since you may be asked for ID.",
            "Indonesia has some of the strictest drug laws in the world. Cannabis possession for personal use alone can mean 4–12 years in prison; trafficking or importation can mean life imprisonment or the death penalty. If the quantity exceeds 1 kilogram of raw drugs (or 5 grams of processed drugs), the death penalty becomes a real possibility, not a rare theoretical maximum. Undercover police actively operate in popular tourist nightlife areas like Kuta, Seminyak, and Canggu.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry a copy of your passport; it's what you'll be asked for when purchasing alcohol or if stopped.",
          ],
        },
      },
    ],
    gotcha:
      "The 4-12 years for personal cannabis possession alone (before even getting into trafficking-level penalties) is a genuinely severe baseline that catches tourists who assume 'personal use' means lenient treatment the way it might in parts of the U.S. Combined with active undercover policing specifically in the nightlife areas most tourists frequent, this is one of the highest-stakes categories on this entire page.",
    sources: [
      {
        label: "Local Law",
        publisher: "Ministry of Tourism, Republic of Indonesia (Wonderful Indonesia)",
        url: "https://www.indonesia.travel/gb/en/general-information/local-law",
      },
      STATE_DEPT_SOURCE("Indonesia", "Indonesia"),
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    flagEmoji: "🇵🇭",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Local-government ordinances can restrict alcohol sales during elections or in specific areas ('dry' periods and zones), which vary by city and aren't always obvious to visitors in advance.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; given how aggressively the Philippines enforces drug law generally (see below), verify any controlled or stimulant medication's status with the FDA Philippines before traveling.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military and government facilities. Drones require registration with the Civil Aviation Authority of the Philippines (CAAP) for most uses, and flying near airports and government buildings is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, and tourists follow the same rule as residents.",
            "Possessing, using, or trafficking controlled drugs carries severe penalties up to life imprisonment, and enforcement is genuinely aggressive, a legacy of the country's intensive anti-drug campaign. Cannabis is illegal in all forms, including with a foreign medical-marijuana prescription; bringing it in can be charged as non-bailable drug trafficking, not a minor possession offense.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Always carry a valid photo ID, a passport or driver's license, it's what you'll be asked for if you look under 18 or if stopped by police.",
          ],
        },
      },
    ],
    gotcha:
      "The Philippines charging cannabis possession as non-bailable trafficking, even for a small personal amount and even with a legitimate foreign medical prescription, is a significantly harsher framework than most Americans expect from a country otherwise popular with U.S. tourists. 'Non-bailable' specifically means you can't simply post bail and wait for trial outside detention, don't bring any cannabis product here under any circumstances.",
    sources: [
      STATE_DEPT_SOURCE("Philippines", "Philippines"),
    ],
  },
  {
    slug: "india",
    name: "India",
    flagEmoji: "🇮🇳",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Dress modestly, especially at religious sites (shoulders and legs covered, shoes off before entering temples); public displays of affection beyond hand-holding can draw unwanted attention or, in rare cases, police involvement in more conservative areas.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; stimulant and opioid-based medications fall under India's Narcotic Drugs and Psychotropic Substances (NDPS) Act and may require additional documentation for larger quantities.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Photography is generally allowed in public places, but avoid government buildings, military installations, airports, and some religious sites without explicit permission; look for posted signs. Drones require registration through India's Digital Sky platform, and flying near airports, the border, and government facilities is heavily restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age genuinely varies by state, from 18 (Goa, Sikkim, Himachal Pradesh, Puducherry, Rajasthan) to as high as 25 (Delhi, Maharashtra), there's no single national number the way there is in most countries on this page.",
            "Five states/union territories enforce total alcohol prohibition: Gujarat, Bihar, Nagaland, Manipur (partial), and Lakshadweep. Possessing or consuming alcohol there can mean arrest without bail and prison sentences of 5–10 years, a dramatically different legal environment from the rest of the country.",
            "Some states require tourists to obtain a short-term (often 30-day) liquor permit before drinking legally; this isn't automatic just because you're a foreign visitor.",
            "Drug penalties under the NDPS Act are severe and enforcement is strict, including for cannabis, despite bhang (a cannabis-based drink) being culturally and, in some contexts, legally distinct and tolerated during specific festivals.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Keep a government-issued photo ID (your passport) accessible; police can ask for age or identity proof at any time, and it's genuinely useful given how much local law varies state to state.",
          ],
        },
      },
    ],
    gotcha:
      "India is the one country on this page where you can't give a single national answer for drinking age or even whether alcohol is legal at all, it depends entirely on which state you're in, and prohibition states carry genuinely serious criminal penalties (5-10 years, no bail) rather than a fine. Research the specific state you're visiting rather than assuming a rule that applied in one Indian city applies in the next.",
    sources: [
      STATE_DEPT_SOURCE("India", "India"),
    ],
  },
  {
    slug: "panama",
    name: "Panama",
    flagEmoji: "🇵🇦",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Panama bans drinking in public areas completely (not just certain zones); anyone caught faces fines or arrest, a stricter default than the 'no drinking in some public spaces' rule common elsewhere on this page.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; given how strictly Panama treats controlled substances overall (see below), it's worth confirming any stimulant or opioid medication's status before traveling.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military and government facilities, including around the Panama Canal's operational areas. Drones require registration with Panama's Aeronáutica Civil, and flying near the Canal, airports, and government buildings is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18, enforced equally for locals and tourists.",
            "Panama has a strict, genuinely zero-tolerance policy on illegal drugs: even small possession amounts can mean substantial fines or prison sentences up to 15 years, and merely being in the company of someone using drugs can be grounds for arrest, association alone, not just possession, carries legal exposure here.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry a form of ID (passport or copy) at all times; retailers and bars check ID for alcohol purchases, and the requirement applies equally to locals and visitors.",
          ],
        },
      },
    ],
    gotcha:
      "The 'mere association' rule is the standout risk here: being physically present while someone else is using drugs, even if you personally aren't using anything, can be grounds for your own arrest under Panama's zero-tolerance approach. This is a meaningfully different (and stricter) standard than 'don't do drugs yourself,' and it's worth actively removing yourself from a situation where others are using, not just declining to participate.",
    sources: [
      STATE_DEPT_SOURCE("Panama", "Panama"),
    ],
  },
  {
    slug: "colombia",
    name: "Colombia",
    flagEmoji: "🇨🇴",
    lastVerified: "2026-08-21",
    sections: [
      {
        title: "Public Conduct",
        content: {
          kind: "list",
          items: [
            "Public drinking is technically illegal, though enforcement is discretionary and varies significantly by officer and location; don't assume seeing others drink openly means it's actually sanctioned.",
          ],
        },
      },
      {
        title: "Medicines You Can't Bring",
        content: {
          kind: "list",
          items: [
            "Bring medications in original packaging with the prescription; controlled stimulant and opioid medications may require additional documentation for larger quantities given Colombia's strict overall drug enforcement framework.",
          ],
        },
      },
      {
        title: "Photography & Drones",
        content: {
          kind: "list",
          items: [
            "Avoid photographing military and government facilities. Drones require registration with Colombia's Aerocivil, and flying near airports, government buildings, and some tourist sites (particularly in Cartagena's historic center) is restricted.",
          ],
        },
      },
      {
        title: "Drugs & Alcohol",
        content: {
          kind: "list",
          items: [
            "The legal drinking age is 18.",
            "Personal possession of small amounts (a 'personal dose,' roughly 1 gram or less for cocaine) generally isn't criminally prosecuted, but production, sale, and distribution of cocaine and other drugs are serious criminal offenses under Colombian law (Articles 376–385 of the Penal Code), with trafficking or possession above personal-dose limits carrying 8–20 years in prison.",
            "Being caught buying or using cocaine as a foreign tourist can still result in swift arrest even at levels near the personal-dose threshold; the legal gray zone here is not the same as a safe zone.",
          ],
        },
      },
      {
        title: "Carrying ID",
        content: {
          kind: "list",
          items: [
            "Carry your passport or a copy; it's useful for age verification and if stopped by police, particularly since English-speaking officers are the exception rather than the norm.",
          ],
        },
      },
    ],
    gotcha:
      "Colombia's association with cocaine tourism creates a dangerous false sense of safety for some visitors, the 'personal dose' threshold that shields locals from prosecution in practice doesn't mean buying or using it as a foreign tourist is low-risk. Enforcement against foreigners specifically, and the risk of encountering product that's been adulterated or is far more potent than expected, both make this a genuinely bad idea regardless of the technical legal gray zone.",
    sources: [
      STATE_DEPT_SOURCE("Colombia", "Colombia"),
    ],
  },
];
