// Renders an actual SVG flag instead of a flag emoji. Emoji flags (built from
// regional-indicator character pairs) silently fall back to monochrome glyphs
// on systems without full color-emoji font support; those fallback glyphs
// inherit the surrounding text color, which can make them nearly invisible in
// dark mode. SVG flags render identically everywhere, regardless of OS,
// browser, or theme.
import {
  ES,
  SG,
  AE,
  MX,
  FR,
  JP,
  GB,
  CA,
  AU,
  IE,
  PT,
  DE,
  BR,
  CR,
  TH,
  KR,
} from "country-flag-icons/react/3x2";

const FLAGS: Record<string, React.ComponentType<{ className?: string; title?: string }>> = {
  spain: ES,
  singapore: SG,
  uae: AE,
  mexico: MX,
  france: FR,
  japan: JP,
  uk: GB,
  canada: CA,
  australia: AU,
  ireland: IE,
  portugal: PT,
  germany: DE,
  brazil: BR,
  "costa-rica": CR,
  thailand: TH,
  "south-korea": KR,
};

export default function CountryFlag({
  slug,
  name,
  className = "h-5 w-[1.667rem]",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const Flag = FLAGS[slug];
  if (!Flag) return null;

  return (
    <Flag
      title={name}
      className={`inline-block flex-shrink-0 rounded-[3px] object-cover ${className}`}
    />
  );
}
