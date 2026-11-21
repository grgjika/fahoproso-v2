import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

const learnMore: Record<Locale, string> = {
  en: "Learn more",
  es: "Saber más",
  el: "Μάθετε περισσότερα",
  sq: "Mëso më shumë",
};

/** Page for a locale: English path as given; other languages use the fallback
 *  (only pages that exist in that language). */
export function localized(locale: Locale, enPath: string, fallbackPath: string) {
  return locale === "en" ? enPath : `/${locale}${fallbackPath}`;
}

/**
 * A real button inside a card. Its link area is stretched over the whole card
 * (the card must be `relative`), so the picture, title and text are all
 * clickable, while screen readers and keyboards get one clear link.
 */
export default function CardLink({
  href,
  locale,
  title,
  className = "",
}: {
  href: string;
  locale: Locale;
  title: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group/btn inline-flex items-center gap-2 rounded-lg border-2 border-[#14213D] px-4 py-2 text-sm font-bold text-[#14213D] transition hover:bg-[#14213D] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227] after:absolute after:inset-0 after:content-[''] ${className}`}
    >
      {learnMore[locale]}
      <span className="sr-only">: {title}</span>
      <ArrowRight className="h-4 w-4 text-[#C9A227] transition group-hover/btn:translate-x-1" />
    </Link>
  );
}

/** Same stretched-link idea for tiles that only have a title. */
export function TileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-semibold text-slate-800 after:absolute after:inset-0 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
    >
      {children}
    </Link>
  );
}
