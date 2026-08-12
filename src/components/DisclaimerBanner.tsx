import Container from "@/components/Container";

// Persistent, non-dismissible banner shown above the header on every page.
export default function DisclaimerBanner() {
  return (
    <div className="border-b border-banner-border bg-banner-bg">
      <Container className="max-w-5xl">
        <p className="flex items-start gap-2 py-2 text-xs leading-snug text-banner-text sm:items-center sm:text-sm">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 flex-shrink-0 sm:mt-0"
          >
            <path
              fillRule="evenodd"
              d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0Zm-8-4.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 10 5.75ZM10 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <strong className="font-semibold">Informational only, not legal advice.</strong>{" "}
            Verify with official sources before relying on this.
          </span>
        </p>
      </Container>
    </div>
  );
}
