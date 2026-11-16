"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, X } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      callback: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
    }
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const copy: Record<
  Locale,
  {
    title: string;
    text: string;
    cancel: string;
    failed: string;
    call: string;
  }
> = {
  en: {
    title: "One quick check",
    text: "This keeps spam out and makes sure your message reaches us.",
    cancel: "Cancel",
    failed:
      "We couldn't load the security check. Please turn off any blocker for this page and try again, or call us instead:",
    call: "Call (616) 275-4443",
  },
  es: {
    title: "Una verificación rápida",
    text: "Esto evita el spam y asegura que su mensaje nos llegue.",
    cancel: "Cancelar",
    failed:
      "No pudimos cargar la verificación. Desactive cualquier bloqueador en esta página e inténtelo de nuevo, o llámenos:",
    call: "Llamar (616) 275-4443",
  },
  el: {
    title: "Ένας γρήγορος έλεγχος",
    text: "Έτσι αποφεύγουμε το spam και διασφαλίζουμε ότι το μήνυμά σας θα φτάσει σε εμάς.",
    cancel: "Ακύρωση",
    failed:
      "Δεν φορτώθηκε ο έλεγχος ασφαλείας. Απενεργοποιήστε τυχόν αποκλεισμό σε αυτή τη σελίδα και δοκιμάστε ξανά ή καλέστε μας:",
    call: "Κλήση (616) 275-4443",
  },
  sq: {
    title: "Një kontroll i shpejtë",
    text: "Kjo ndalon mesazhet e padëshiruara dhe siguron që mesazhi juaj të na arrijë.",
    cancel: "Anulo",
    failed:
      "Kontrolli i sigurisë nuk u ngarkua. Çaktivizoni çdo bllokues në këtë faqe dhe provoni përsëri, ose na telefononi:",
    call: "Telefono (616) 275-4443",
  },
};

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src^="https://challenges.cloudflare.com/turnstile"]`
    );
    const script = existing ?? document.createElement("script");

    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("load failed")));

    if (!existing) {
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

/**
 * Pop-up shown after "Send": runs a Cloudflare Turnstile check, then hands the
 * token back. Formspree verifies the token on its side.
 */
export default function HumanCheckModal({
  siteKey,
  locale,
  onVerified,
  onCancel,
}: {
  siteKey: string;
  locale: Locale;
  onVerified: (token: string) => void;
  onCancel: () => void;
}) {
  const text = copy[locale];
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let widgetId: string | undefined;
    let cancelled = false;

    loadScript()
      .then(() => {
        if (cancelled || !container.current || !window.turnstile) return;
        widgetId = window.turnstile.render(container.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (token) => onVerified(token),
          "error-callback": () => setFailed(true),
        });
      })
      .catch(() => setFailed(true));

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelled = true;
      document.removeEventListener("keydown", onKey);
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
    // onVerified/onCancel are stable enough for one run of the check
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey]);

  return (
    <div
      className="fixed inset-0 z-[3100] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={text.title}
        className="relative w-full max-w-md rounded-3xl bg-[#14213D] p-8 text-center text-white shadow-2xl ring-2 ring-[#C9A227]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onCancel}
          aria-label={text.cancel}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5C766] to-[#B8901F] shadow-lg">
          <ShieldCheck className="h-7 w-7 text-[#14213D]" />
        </span>

        <h2 className="mt-5 text-2xl font-bold">{text.title}</h2>
        <p className="mt-2 text-slate-300">{text.text}</p>

        {failed ? (
          <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm leading-6">
            <p>{text.failed}</p>
            <a
              href="tel:+16162754443"
              className="mt-3 inline-block rounded-lg bg-[#C9A227] px-4 py-2 font-bold text-[#14213D]"
            >
              {text.call}
            </a>
          </div>
        ) : (
          <div
            ref={container}
            className="mt-6 flex min-h-[70px] justify-center"
          />
        )}

        <button
          type="button"
          onClick={onCancel}
          className="mt-5 text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
        >
          {text.cancel}
        </button>
      </div>
    </div>
  );
}
