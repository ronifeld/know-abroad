// Home page: country picker, alphabetical, driven by src/data/scenarios.
import Container from "@/components/Container";
import CountryCard from "@/components/CountryCard";
import { getAllCountries } from "@/lib/scenarios";

export default function Home() {
  const countries = getAllCountries();

  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-10">
          <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:whitespace-nowrap sm:text-4xl">
            Know your rights, wherever you land.
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            Choose a country to get plain-language legal information across
            visas, renting, driving, and remote work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {countries.map((country) => (
            <CountryCard
              key={country.slug}
              country={country}
              href={`/${country.slug}`}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
