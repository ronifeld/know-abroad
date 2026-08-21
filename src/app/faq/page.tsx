import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import FaqItem from "@/components/FaqItem";
import PassportScopeBadge from "@/components/PassportScopeBadge";
import { faqEntries } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Know Abroad",
  description:
    "General questions about travel abroad, Schengen vs. the EU, dual nationality, travel insurance, and more, answered for U.S. passport holders.",
};

export default function FaqPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

        <div className="mt-4 mb-8 max-w-xl">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Frequently asked questions
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            General concepts that come up across countries and topics on this
            site, answered once instead of repeated on every page.
          </p>
          <div className="mt-3">
            <PassportScopeBadge />
          </div>
        </div>

        <div className="max-w-2xl space-y-3">
          {faqEntries.map((entry) => (
            <FaqItem key={entry.question} question={entry.question} answer={entry.answer} />
          ))}
        </div>
      </Container>
    </main>
  );
}
