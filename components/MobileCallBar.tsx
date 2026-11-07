"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

const labels: Record<Locale, { call: string; offer: string }> = {
  en: { call: "Call Us", offer: "Get a Cash Offer" },
  es: { call: "Llámenos", offer: "Solicitar Oferta" },
  el: { call: "Καλέστε", offer: "Ζητήστε Προσφορά" },
  sq: { call: "Telefononi", offer: "Kërkoni Ofertë" },
};

/** Always-visible call and offer buttons on phones (hidden from tablet up). */
export default function MobileCallBar() {
  const pathname = usePathname();
  const match = pathname.match(/^\/(es|el|sq)(\/|$)/);
  const locale: Locale = match ? (match[1] as Locale) : "en";
  const text = labels[locale];
  const contactHref = locale === "en" ? "/contact" : `/${locale}/contact`;

  if (pathname.startsWith("/login")) return null;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-[1400] grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur md:hidden"
    >
      <a
        href="tel:+16162754443"
        className="flex items-center justify-center gap-2 rounded-xl border border-[#14213D] bg-white px-3 py-3 text-sm font-bold text-[#14213D]"
      >
        <Phone className="h-4 w-4" />
        {text.call}
      </a>

      <Link
        href={contactHref}
        className="flex items-center justify-center rounded-xl bg-[#C9A227] px-3 py-3 text-sm font-bold text-[#14213D]"
      >
        {text.offer}
      </Link>
    </nav>
  );
}
