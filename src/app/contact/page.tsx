import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Know Abroad",
  description: "Report something outdated, suggest a country, or just say hi.",
};

export default function ContactPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <div className="mt-4 mb-8 max-w-xl">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Get in touch
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            Spotted something out of date, found a mistake, or want to
            suggest a country or topic? Send it my way.
          </p>
        </div>

        <div className="max-w-xl">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
