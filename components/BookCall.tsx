"use client";

import { CalendarClock, Video } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

/**
 * Booking page of the calendar service (Google Calendar appointment schedule:
 * Calendar > the schedule > Share > Website embed, copy the address inside
 * src="..."). Leave empty to hide this section. Availability is edited in the
 * calendar service, not in this site.
 */
const BOOKING_URL = "";

const copy: Record<
  Locale,
  { label: string; title: string; text: string; open: string; frame: string }
> = {
  en: {
    label: "Book a video call",
    title: "Pick a time that works for you",
    text: "Choose an open time for a free 30-minute video call with our team. You will get a confirmation by email with the video link.",
    open: "Open the calendar in a new tab",
    frame: "Available times for a 30-minute video call",
  },
  es: {
    label: "Reserve una videollamada",
    title: "Elija la hora que le convenga",
    text: "Elija un horario disponible para una videollamada gratuita de 30 minutos con nuestro equipo. Recibirá una confirmación por correo con el enlace de la videollamada.",
    open: "Abrir el calendario en una pestaña nueva",
    frame: "Horarios disponibles para una videollamada de 30 minutos",
  },
  el: {
    label: "Κλείστε βιντεοκλήση",
    title: "Επιλέξτε την ώρα που σας βολεύει",
    text: "Διαλέξτε μια διαθέσιμη ώρα για δωρεάν βιντεοκλήση 30 λεπτών με την ομάδα μας. Θα λάβετε επιβεβαίωση με email και τον σύνδεσμο της κλήσης.",
    open: "Άνοιγμα του ημερολογίου σε νέα καρτέλα",
    frame: "Διαθέσιμες ώρες για βιντεοκλήση 30 λεπτών",
  },
  sq: {
    label: "Rezervoni një video thirrje",
    title: "Zgjidhni orarin që ju përshtatet",
    text: "Zgjidhni një orar të lirë për një video thirrje falas 30-minutëshe me ekipin tonë. Do të merrni konfirmim me email me lidhjen e thirrjes.",
    open: "Hap kalendarin në një skedë të re",
    frame: "Orët e lira për një video thirrje 30-minutëshe",
  },
};

export default function BookCall({ locale }: { locale: Locale }) {
  if (!BOOKING_URL) return null;
  const text = copy[locale];

  return (
    <section
      id="book-a-call"
      aria-labelledby="book-a-call-title"
      className="mt-16 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200"
    >
      <div className="bg-[#14213D] px-8 py-8 text-center text-white">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5C766] to-[#B8901F]">
          <Video className="h-6 w-6 text-[#14213D]" />
        </span>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E5C766]">
          <CalendarClock className="h-4 w-4" /> {text.label}
        </p>
        <h3 id="book-a-call-title" className="mt-2 text-2xl font-bold md:text-3xl">
          {text.title}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">{text.text}</p>
      </div>

      <iframe
        src={BOOKING_URL}
        title={text.frame}
        loading="lazy"
        className="block h-[720px] w-full border-0 sm:h-[640px]"
      />

      <p className="px-6 py-4 text-center text-sm">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#14213D] underline underline-offset-4 hover:text-[#C9A227]"
        >
          {text.open}
        </a>
      </p>
    </section>
  );
}
