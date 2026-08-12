// Generic labeled section used for Common Entry Types / Overstay Consequences /
// Renewal Path on the country detail page.
export default function CountrySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
