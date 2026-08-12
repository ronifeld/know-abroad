import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <Container className="max-w-5xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Know Abroad — home">
            <Logo />
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
