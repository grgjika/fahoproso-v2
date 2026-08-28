"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

const content = {
  en: {
    eyebrow: "Before You Go...",
    title: "Have Questions About",
    highlight: " Your Property?",
    description:
      "We're happy to help. Tell us a little about your property and situation, and we'll see how we may be able to help.",
    reassurance: "No pressure. No obligation.",
    button: "Tell Us About Your Property",
    continue: "Continue Browsing",
    close: "Close",
  },

  es: {
    eyebrow: "Antes de Irse...",
    title: "¿Tiene Preguntas Sobre",
    highlight: " Su Propiedad?",
    description:
      "Estamos aquí para ayudarle. Cuéntenos un poco sobre su propiedad y su situación, y veremos cómo podemos ayudarle.",
    reassurance: "Sin presión. Sin obligación.",
    button: "Cuéntenos Sobre Su Propiedad",
    continue: "Continuar Navegando",
    close: "Cerrar",
  },

  el: {
    eyebrow: "Πριν Φύγετε...",
    title: "Έχετε Ερωτήσεις για",
    highlight: " το Ακίνητό σας;",
    description:
      "Είμαστε εδώ για να βοηθήσουμε. Πείτε μας λίγα πράγματα για το ακίνητο και την περίπτωσή σας και θα δούμε πώς μπορούμε να σας βοηθήσουμε.",
    reassurance: "Χωρίς πίεση. Χωρίς υποχρέωση.",
    button: "Πείτε μας για το Ακίνητό σας",
    continue: "Συνέχεια στην Περιήγηση",
    close: "Κλείσιμο",
  },

  sq: {
    eyebrow: "Para se të Largoheni...",
    title: "Keni Pyetje Rreth",
    highlight: " Pronës Suaj?",
    description:
      "Jemi këtu për t'ju ndihmuar. Na tregoni pak për pronën dhe situatën tuaj dhe do të shohim se si mund t'ju ndihmojmë.",
    reassurance: "Pa presion. Pa detyrim.",
    button: "Na Tregoni për Pronën Tuaj",
    continue: "Vazhdo Shfletimin",
    close: "Mbyll",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    reassurance: string;
    button: string;
    continue: string;
    close: string;
  }
>;

export default function ExitIntentPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const locale: Locale =
    pathname === "/es" || pathname.startsWith("/es/")
      ? "es"
      : pathname === "/el" || pathname.startsWith("/el/")
        ? "el"
        : pathname === "/sq" || pathname.startsWith("/sq/")
          ? "sq"
          : "en";

  const text = content[locale];

  const contactHref =
    locale === "en" ? "/contact" : `/${locale}/contact`;

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(
      "fahoproso-exit-popup"
    );

    if (alreadyShown) return;

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setIsOpen(true);

        sessionStorage.setItem(
          "fahoproso-exit-popup",
          "shown"
        );

        document.removeEventListener(
          "mouseout",
          handleMouseLeave
        );
      }
    };

    const timer = window.setTimeout(() => {
      document.addEventListener(
        "mouseout",
        handleMouseLeave
      );
    }, 1000);

    return () => {
      window.clearTimeout(timer);

      document.removeEventListener(
        "mouseout",
        handleMouseLeave
      );
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-[#C9A227]/40 bg-[#14213D] p-8 shadow-2xl sm:p-10">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label={text.close}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#C9A227]">
          {text.eyebrow}
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {text.title}
          <span className="text-[#C9A227]">
            {text.highlight}
          </span>
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-200">
          {text.description}
        </p>

        <p className="mt-4 font-semibold text-[#C9A227]">
          {text.reassurance}
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href={contactHref}
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-6 py-4 text-center font-bold text-[#14213D] transition hover:bg-white"
          >
            {text.button}
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-6 py-3 font-medium text-slate-300 transition hover:text-white"
          >
            {text.continue}
          </button>
        </div>
      </div>
    </div>
  );
}