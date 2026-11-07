"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, X } from "lucide-react";

type Target = "es" | "el" | "sq";

const STORAGE_KEY = "fahoproso-language-choice";

const copy: Record<
  Target,
  { message: string; go: string; stay: string; close: string }
> = {
  es: {
    message: "Esta página también está disponible en español.",
    go: "Ir a español",
    stay: "Seguir en inglés",
    close: "Cerrar",
  },
  el: {
    message: "Αυτή η σελίδα είναι διαθέσιμη και στα ελληνικά.",
    go: "Μετάβαση στα ελληνικά",
    stay: "Παραμονή στα αγγλικά",
    close: "Κλείσιμο",
  },
  sq: {
    message: "Kjo faqe është e disponueshme edhe në shqip.",
    go: "Kalo në shqip",
    stay: "Qëndro në anglisht",
    close: "Mbyll",
  },
};

function readChoice() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(value: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage can be blocked; the banner simply may show again */
  }
}

/** The first of the visitor's browser languages that we have a version for. */
function detectTarget(): Target | null {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const language of languages) {
    const code = language.toLowerCase().split("-")[0];
    if (code === "el" || code === "sq" || code === "es") return code;
    if (code === "en") return null; // English comes first: nothing to offer
  }
  return null;
}

/**
 * Offers (never forces) the Spanish, Greek or Albanian home page to visitors
 * whose browser language is one of those. English home page only.
 */
export default function LanguageBanner() {
  const pathname = usePathname();
  const [target, setTarget] = useState<Target | null>(null);

  const isEnglishHome = pathname === "/" || pathname === "";

  useEffect(() => {
    if (!isEnglishHome || readChoice()) return;

    const detected = detectTarget();
    if (!detected) return;

    const timer = window.setTimeout(() => setTarget(detected), 1200);
    return () => window.clearTimeout(timer);
  }, [isEnglishHome]);

  if (!target || !isEnglishHome) return null;

  const text = copy[target];

  return (
    <div
      role="region"
      aria-label="Language"
      lang={target}
      className="fixed bottom-20 left-4 right-4 sm:bottom-4 z-[1500] mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:left-6 sm:right-auto sm:w-[44rem] sm:max-w-[calc(100vw-3rem)] sm:flex-row sm:items-center"
      style={{ position: "fixed" }}
    >
      <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#14213D] to-[#2b3f6e] sm:flex">
        <Globe className="h-5 w-5 text-[#E5C766]" />
      </span>

      <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-[#14213D]">
        {text.message}
      </p>

      <div className="flex flex-wrap items-center gap-2 sm:shrink-0 sm:flex-nowrap">
        <Link
          href={`/${target}`}
          onClick={() => saveChoice("go")}
          className="whitespace-nowrap rounded-lg bg-[#C9A227] px-4 py-2 text-sm font-semibold text-[#14213D] transition hover:bg-[#b8901f]"
        >
          {text.go}
        </Link>

        <button
          type="button"
          onClick={() => {
            saveChoice("stay");
            setTarget(null);
          }}
          className="whitespace-nowrap rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          {text.stay}
        </button>

        <button
          type="button"
          aria-label={text.close}
          onClick={() => {
            saveChoice("stay");
            setTarget(null);
          }}
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
