// Home page — scenario picker, driven by src/data/scenarios.
import Container from "@/components/Container";
import ScenarioCard from "@/components/ScenarioCard";
import { getAllScenarios } from "@/lib/scenarios";

export default function Home() {
  const scenarios = getAllScenarios();

  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-10">
          <h1 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground sm:whitespace-nowrap sm:text-4xl">
            Know your rights, wherever you land.
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            Choose a topic to get plain-language legal information for a
            specific country.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {scenarios.map((s) => (
            <ScenarioCard
              key={s.slug}
              title={s.title}
              description={s.description}
              href={`/${s.slug}`}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
