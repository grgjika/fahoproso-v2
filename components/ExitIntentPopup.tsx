"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, X } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

const content = {
  en: {
    label: "Before you go",
    offerBadge: "Free · No Obligation",
    offerTitle: "Get Your Free Cash Offer",
    offerText:
      "Tell us about your house. We'll look at it and explain your options, with no pressure.",
    offerButton: "Ask for My Free Offer",
    callBadge: "Prefer to Talk?",
    callTitle: "Call Us Now",
    callText: "Speak with a real person about your property.",
    hours: "Mon–Fri 9 AM–5 PM · Sat 10 AM–2 PM",
    callButton: "Call (616) 275-4443",
    continue: "No thanks, keep browsing",
    close: "Close",
  },

  es: {
    label: "Antes de irse",
    offerBadge: "Gratis · Sin Obligación",
    offerTitle: "Solicite su Oferta en Efectivo Gratis",
    offerText:
      "Cuéntenos sobre su casa. La revisaremos y le explicaremos sus opciones, sin presión.",
    offerButton: "Pedir mi Oferta Gratis",
    callBadge: "¿Prefiere Hablar?",
    callTitle: "Llámenos Ahora",
    callText: "Hable con una persona real sobre su propiedad.",
    hours: "Lun–Vie 9 AM–5 PM · Sáb 10 AM–2 PM",
    callButton: "Llamar (616) 275-4443",
    continue: "No, gracias, seguir navegando",
    close: "Cerrar",
  },

  el: {
    label: "Πριν φύγετε",
    offerBadge: "Δωρεάν · Χωρίς Υποχρέωση",
    offerTitle: "Ζητήστε Δωρεάν Προσφορά",
    offerText:
      "Πείτε μας για το σπίτι σας. Θα το εξετάσουμε και θα σας εξηγήσουμε τις επιλογές σας, χωρίς πίεση.",
    offerButton: "Ζητήστε τη Δωρεάν Προσφορά",
    callBadge: "Προτιμάτε να Μιλήσουμε;",
    callTitle: "Καλέστε μας Τώρα",
    callText: "Μιλήστε με έναν άνθρωπο για το ακίνητό σας.",
    hours: "Δευ–Παρ 9 π.μ.–5 μ.μ. · Σάβ 10 π.μ.–2 μ.μ.",
    callButton: "Κλήση (616) 275-4443",
    continue: "Όχι, συνέχεια στην περιήγηση",
    close: "Κλείσιμο",
  },

  sq: {
    label: "Para se të largoheni",
    offerBadge: "Falas · Pa Detyrim",
    offerTitle: "Merrni Ofertën Falas",
    offerText:
      "Na tregoni për shtëpinë tuaj. Do ta shohim dhe do t'ju shpjegojmë opsionet, pa presion.",
    offerButton: "Kërkoni Ofertën Falas",
    callBadge: "Preferoni të Flisni?",
    callTitle: "Na Telefononi Tani",
    callText: "Flisni me një person real për pronën tuaj.",
    hours: "E Hën–E Premte 9–17 · E Shtunë 10–14",
    callButton: "Telefono (616) 275-4443",
    continue: "Jo, faleminderit, vazhdo shfletimin",
    close: "Mbyll",
  },
} satisfies Record<
  Locale,
  {
    label: string;
    offerBadge: string;
    offerTitle: string;
    offerText: string;
    offerButton: string;
    callBadge: string;
    callTitle: string;
    callText: string;
    hours: string;
    callButton: string;
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

  const onContactPage = /^(\/(es|el|sq))?\/contact\/?$/.test(pathname);

  useEffect(() => {
  if (onContactPage) return;

  const alreadyShown = sessionStorage.getItem(
    "fahoproso-exit-popup"
  );

  if (alreadyShown) return;

  let hasScrolled = false;
  let timeRequirementMet = false;

  const handleScroll = () => {
    if (window.scrollY > 300) {
      hasScrolled = true;
    }
  };

  const handleMouseLeave = (event: MouseEvent) => {
    if (
      event.clientY <= 0 &&
      hasScrolled &&
      timeRequirementMet
    ) {
      setIsOpen(true);

      sessionStorage.setItem(
        "fahoproso-exit-popup",
        "shown"
      );

      document.removeEventListener(
        "mouseout",
        handleMouseLeave
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    }
  };

  window.addEventListener("scroll", handleScroll);

  const timer = window.setTimeout(() => {
    timeRequirementMet = true;

    document.addEventListener(
      "mouseout",
      handleMouseLeave
    );
  }, 15000);

  return () => {
    window.clearTimeout(timer);

    window.removeEventListener(
      "scroll",
      handleScroll
    );

    document.removeEventListener(
      "mouseout",
      handleMouseLeave
    );
  };
}, [onContactPage]);

  // Close with the Escape key, and lock page scrolling while the popup is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="exit-overlay fixed inset-0 z-[3000] flex overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={text.offerTitle}
        className="relative m-auto w-full max-w-4xl"
        style={{ perspective: 1600 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label={text.close}
          className="absolute -top-3 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100 sm:-right-3"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
          {text.label}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Offer card */}
          <article className="exit-card exit-card-left flex flex-col overflow-hidden rounded-3xl bg-[#14213D] text-white shadow-2xl ring-2 ring-[#C9A227]">
            <div className="relative h-24 sm:h-44">
              <Image
                src="/images/service-cash-home.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 450px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-[#14213D]/30 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-[#C9A227] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#14213D] shadow-lg">
                {text.offerBadge}
              </span>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-2 sm:px-8">
              <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
                {text.offerTitle}
              </h2>

              <p className="mt-3 leading-7 text-slate-200">
                {text.offerText}
              </p>

              <Link
                href={contactHref}
                onClick={() => setIsOpen(false)}
                className="exit-cta mt-6 inline-flex items-center justify-center rounded-xl bg-[#C9A227] px-6 py-4 text-center text-lg font-bold text-[#14213D] md:mt-auto"
              >
                {text.offerButton}
              </Link>
            </div>
          </article>

          {/* Call card */}
          <article className="exit-card exit-card-right flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#E5C766] via-[#C9A227] to-[#A8851C] text-[#14213D] shadow-2xl ring-2 ring-white/40">
            <div className="flex h-24 items-center justify-center sm:h-44">
              <span className="exit-ring flex h-16 w-16 items-center justify-center rounded-full bg-[#14213D] shadow-2xl sm:h-24 sm:w-24">
                <Phone className="h-8 w-8 text-[#E5C766] sm:h-11 sm:w-11" />
              </span>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-2 sm:px-8">
              <span className="w-fit rounded-full bg-[#14213D] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E5C766]">
                {text.callBadge}
              </span>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:mt-4 sm:text-4xl">
                {text.callTitle}
              </h2>

              <p className="mt-3 font-medium leading-7">{text.callText}</p>

              <p className="mt-2 text-sm font-semibold opacity-80">
                {text.hours}
              </p>

              <a
                href="tel:+16162754443"
                onClick={() => setIsOpen(false)}
                className="exit-cta mt-6 inline-flex items-center justify-center rounded-xl bg-[#14213D] px-6 py-4 text-center text-lg font-bold text-white md:mt-auto"
              >
                {text.callButton}
              </a>
            </div>
          </article>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mx-auto mt-4 block rounded-lg px-4 py-2 text-sm font-medium text-slate-200 underline-offset-4 transition hover:text-white hover:underline"
        >
          {text.continue}
        </button>
      </div>
    </div>
  );
}
