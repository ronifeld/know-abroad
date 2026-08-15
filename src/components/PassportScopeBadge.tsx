// Makes explicit which passport this content assumes. Entry types, visa-free
// durations, and required documents differ by nationality, so this scope
// needs to be visible, not just implied by copy. Other passports are a
// planned addition, not yet built.
export default function PassportScopeBadge() {
  return (
    <p className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm6 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-4.5 7c.34-1.657 2.121-2.5 4.5-2.5s4.16.843 4.5 2.5H5.5Z" />
      </svg>
      Written for U.S. passport holders
    </p>
  );
}
