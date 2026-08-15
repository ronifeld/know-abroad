import type { Source } from "@/types/scenario";

// Renders the official/primary sources a country page's content was drafted
// from. Each source links out, deliberately the last thing on the page,
// framed as "verify this yourself," not as a trust badge.
export default function SourcesList({ sources }: { sources: Source[] }) {
  return (
    <section className="border-t border-border py-8">
      <h2 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
        Sources
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        This page was drafted from the primary sources below. Rules change,
        so check the linked page directly before relying on any of this.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.url} className="text-sm leading-relaxed">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
            >
              {source.label}
            </a>
            <span className="text-muted"> ({source.publisher})</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
