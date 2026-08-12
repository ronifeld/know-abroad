import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About — Know Abroad",
  description:
    "Why Know Abroad exists, from Roni, who has lived in 3 (soon 4) countries and dealt with the complexity firsthand.",
};

export default function AboutPage() {
  return (
    <main className="py-10 sm:py-14">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <div className="mt-4 mb-8 max-w-2xl">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About this project
          </h1>
        </div>

        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            I&apos;m Roni. At 18 years old, I packed my bags and left the US.
            Currently, I&apos;m a university student in Spain. I&apos;ve lived
            in three (soon to be four) countries and traveled to many more,
            and at some point during almost every move I&apos;ve found myself
            squinting at a government website, trying to figure out how long
            I can stay in a country, whether my landlord is actually allowed
            to do that, or what a form printed only in the local language is
            asking me to sign.
          </p>

          <p>
            None of that should be as hard as it is. Experiencing new places
            is one of the best parts of life; it should be easy and
            stress-free. But the laws that actually govern daily life abroad
            are written by lawyers, for lawyers, published across dozens of
            agency websites, and often only in the country&apos;s own
            language. Most people abroad don&apos;t have a lawyer on call,
            and can&apos;t get a straight answer to a simple question like
            &ldquo;what happens if I stay a few days too long?&rdquo; or
            &ldquo;can they actually keep my deposit for that?&rdquo; The gap
            between rules that genuinely matter and information that&apos;s
            genuinely accessible is what makes life abroad unnecessarily
            stressful. I&apos;ve even seen it deter people from traveling,
            simply because the unknowns felt too intimidating. That&apos;s
            why I created Know Abroad.
          </p>

          <p>
            Know Abroad takes these inordinately common questions and answers
            them in plain language, sourced from official government
            material, one topic and one destination at a time. It won&apos;t
            replace a lawyer or an official source, and it isn&apos;t trying
            to. It&apos;s meant to be the first stop before you go read the
            primary source yourself, which is linked to every page on this
            site. You get an overview of what to do and how to do it.
          </p>

          <p>
            The rules listed on Know Abroad change often and without much
            warning. I watched two of the immigration rules on this site
            change while I was researching them. If something here is out of
            date or you think it&apos;s wrong, don&apos;t hesitate to{" "}
            <Link href="/contact" className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent">
              reach out
            </Link>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}
