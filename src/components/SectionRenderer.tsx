import CountrySection from "@/components/CountrySection";
import type { ContentSection } from "@/types/scenario";

// Renders one country-page section generically based on its content kind —
// this is what lets every scenario define its own section titles/shapes
// without touching any component code.
export default function SectionRenderer({ section }: { section: ContentSection }) {
  const { title, content } = section;

  return (
    <CountrySection title={title}>
      {content.kind === "namedList" && (
        <dl className="space-y-4">
          {content.items.map((entry) => (
            <div key={entry.name}>
              <dt className="font-heading text-sm font-semibold text-foreground">
                {entry.name}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted">
                {entry.description}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {content.kind === "list" && (
        <ul className="space-y-2.5">
          {content.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      )}

      {content.kind === "orderedList" && (
        <ol className="space-y-2.5">
          {content.items.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-border font-heading text-xs font-semibold text-foreground">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      )}
    </CountrySection>
  );
}
