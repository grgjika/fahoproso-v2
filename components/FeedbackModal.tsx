"use client";

import { useEffect, useState } from "react";
import { Star, X, CheckCircle2 } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

const copy: Record<
  Locale,
  {
    title: string;
    intro: string;
    rating: string;
    stars: string[];
    how: string;
    howOptions: string[];
    difficulty: string;
    placeholder: string;
    send: string;
    skip: string;
    sending: string;
    thanks: string;
    close: string;
    error: string;
  }
> = {
  en: {
    title: "Your message was sent. Thank you!",
    intro: "Two quick questions to help us improve. This is optional.",
    rating: "How easy was it to send your request?",
    stars: ["Very hard", "Hard", "OK", "Easy", "Very easy"],
    how: "How did you find us?",
    howOptions: ["Google search", "Facebook", "Friend or family", "Sign or flyer", "Other"],
    difficulty: "Was anything difficult or confusing?",
    placeholder: "Tell us what was hard, or what we could do better...",
    send: "Send feedback",
    skip: "Skip",
    sending: "Sending...",
    thanks: "Thank you for your feedback!",
    close: "Close",
    error: "Sorry, the feedback did not send. You can skip it. Your request was already received.",
  },
  es: {
    title: "Su mensaje fue enviado. ¡Gracias!",
    intro: "Dos preguntas rápidas para ayudarnos a mejorar. Es opcional.",
    rating: "¿Qué tan fácil fue enviar su solicitud?",
    stars: ["Muy difícil", "Difícil", "Regular", "Fácil", "Muy fácil"],
    how: "¿Cómo nos encontró?",
    howOptions: ["Búsqueda en Google", "Facebook", "Amigo o familiar", "Letrero o volante", "Otro"],
    difficulty: "¿Algo fue difícil o confuso?",
    placeholder: "Cuéntenos qué fue difícil o qué podemos mejorar...",
    send: "Enviar comentarios",
    skip: "Omitir",
    sending: "Enviando...",
    thanks: "¡Gracias por sus comentarios!",
    close: "Cerrar",
    error: "Lo sentimos, no se envió. Puede omitirlo. Su solicitud ya fue recibida.",
  },
  el: {
    title: "Το μήνυμά σας στάλθηκε. Ευχαριστούμε!",
    intro: "Δύο γρήγορες ερωτήσεις για να βελτιωθούμε. Είναι προαιρετικό.",
    rating: "Πόσο εύκολο ήταν να στείλετε το αίτημά σας;",
    stars: ["Πολύ δύσκολο", "Δύσκολο", "Μέτριο", "Εύκολο", "Πολύ εύκολο"],
    how: "Πώς μας βρήκατε;",
    howOptions: ["Αναζήτηση Google", "Facebook", "Φίλος ή συγγενής", "Πινακίδα ή φυλλάδιο", "Άλλο"],
    difficulty: "Ήταν κάτι δύσκολο ή μπερδεμένο;",
    placeholder: "Πείτε μας τι ήταν δύσκολο ή τι μπορούμε να βελτιώσουμε...",
    send: "Αποστολή σχολίων",
    skip: "Παράλειψη",
    sending: "Αποστολή...",
    thanks: "Ευχαριστούμε για τα σχόλιά σας!",
    close: "Κλείσιμο",
    error: "Λυπούμαστε, δεν στάλθηκε. Μπορείτε να το παραλείψετε. Το αίτημά σας ελήφθη.",
  },
  sq: {
    title: "Mesazhi juaj u dërgua. Faleminderit!",
    intro: "Dy pyetje të shpejta për të na ndihmuar të përmirësohemi. Është opsionale.",
    rating: "Sa e lehtë ishte të dërgonit kërkesën tuaj?",
    stars: ["Shumë e vështirë", "E vështirë", "Në rregull", "E lehtë", "Shumë e lehtë"],
    how: "Si na gjetët?",
    howOptions: ["Kërkim në Google", "Facebook", "Shok ose familjar", "Tabelë ose fletushkë", "Tjetër"],
    difficulty: "A ishte diçka e vështirë ose e paqartë?",
    placeholder: "Na tregoni çfarë ishte e vështirë ose çfarë mund të bëjmë më mirë...",
    send: "Dërgo komentin",
    skip: "Kalo",
    sending: "Duke dërguar...",
    thanks: "Faleminderit për komentin tuaj!",
    close: "Mbyll",
    error: "Na vjen keq, nuk u dërgua. Mund ta kaloni. Kërkesa juaj u mor.",
  },
};

/**
 * Shown after the inquiry has been sent. The answers go to the same Formspree
 * form as a separate, clearly labelled email, so a skipped or failed feedback
 * never affects the inquiry itself.
 */
export default function FeedbackModal({
  locale,
  contact,
  onClose,
}: {
  locale: Locale;
  contact: { name: string; phone: string };
  onClose: () => void;
}) {
  const text = copy[locale];
  const [rating, setRating] = useState(0);
  const [how, setHow] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (state !== "done") return;
    const t = window.setTimeout(onClose, 2200);
    return () => window.clearTimeout(t);
  }, [state, onClose]);

  async function submit() {
    // Nothing filled in: treat it like Skip. Nothing is ever required.
    if (!rating && !how && !difficulty.trim()) {
      onClose();
      return;
    }
    setState("sending");
    const data = new FormData();
    data.set(
      "_subject",
      rating ? `Website feedback: ${rating}/5 stars` : "Website feedback (no rating)"
    );
    data.set("formType", "Website feedback (after inquiry)");
    data.set(
      "rating",
      rating ? `${rating} / 5 (${text.stars[rating - 1]})` : "(not rated)"
    );
    data.set("howTheyFoundUs", how || "(not answered)");
    data.set("whatWasDifficult", difficulty.trim() || "(nothing written)");
    data.set("fromVisitor", `${contact.name} ${contact.phone}`.trim());
    data.set("language", locale);
    try {
      const res = await fetch("https://formspree.io/f/mjgzkoap", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[3100] flex overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={text.title}
        className="relative m-auto w-full max-w-md rounded-3xl bg-[#14213D] p-6 text-white shadow-2xl ring-2 ring-[#C9A227] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={text.close}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {state === "done" ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#E5C766]" />
            <p className="mt-4 text-xl font-bold">{text.thanks}</p>
          </div>
        ) : (
          <>
            <h2 className="pr-8 text-xl font-bold sm:text-2xl">{text.title}</h2>
            <p className="mt-1 text-sm text-slate-300">{text.intro}</p>

            <p className="mt-5 font-semibold">{text.rating}</p>
            <div className="mt-2 flex items-center gap-1" role="radiogroup" aria-label={text.rating}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={rating === n}
                  aria-label={`${n} - ${text.stars[n - 1]}`}
                  onClick={() => setRating(rating === n ? 0 : n)}
                  className="rounded-md p-1 transition hover:scale-110"
                >
                  <Star
                    className={`h-9 w-9 ${
                      n <= rating ? "fill-[#E5C766] text-[#E5C766]" : "text-slate-500"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-slate-300">
                {rating ? text.stars[rating - 1] : ""}
              </span>
            </div>

            <label className="mt-5 block font-semibold" htmlFor="fb-how">
              {text.how}
            </label>
            <select
              id="fb-how"
              value={how}
              onChange={(e) => setHow(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-white px-3 py-2 text-slate-900"
            >
              <option value="">—</option>
              {text.howOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>

            <label className="mt-5 block font-semibold" htmlFor="fb-diff">
              {text.difficulty}
            </label>
            <textarea
              id="fb-diff"
              rows={3}
              maxLength={1500}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              placeholder={text.placeholder}
              className="mt-2 w-full rounded-lg border border-slate-500 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-500"
            />

            {state === "error" && (
              <p role="alert" className="mt-3 text-sm text-[#E5C766]">
                {text.error}
              </p>
            )}

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={submit}
                disabled={state === "sending"}
                className="flex-1 rounded-lg bg-[#C9A227] px-4 py-3 font-bold text-[#14213D] transition hover:bg-[#E5C766] disabled:opacity-60"
              >
                {state === "sending" ? text.sending : text.send}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-3 text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                {text.skip}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
