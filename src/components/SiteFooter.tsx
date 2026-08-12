import Link from "next/link";
import Container from "@/components/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="max-w-5xl">
        <div className="flex flex-col gap-2 py-8 text-xs leading-relaxed text-muted sm:text-sm">
          <p>
            Know Abroad is a portfolio project. Content is informational only
            and not legal advice — immigration rules change frequently and
            vary by individual circumstances. Always verify with an official
            government source or a licensed immigration professional before
            making travel or visa decisions.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Know Abroad.{" "}
            <Link href="/about" className="underline hover:text-accent">
              About this project
            </Link>{" "}
            &middot;{" "}
            <Link href="/contact" className="underline hover:text-accent">
              Contact
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
