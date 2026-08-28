"use client";

import Image from "next/image";

import {
  PhoneCall,
  BadgeDollarSign,
  Handshake,
} from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type HowItWorksProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "HOW IT WORKS",
    titleLine1: "A Simple and Straightforward",
    titleLine2: "Selling Process",
    description:
      "Selling your property doesn't have to be stressful. Our process is designed to be fast, transparent, and tailored to your timeline.",
    stepLabel: "Step",
    steps: [
      {
        title: "Contact Us",
        description:
          "Reach out by phone or complete our property form. We'll gather a few details about your property and goals.",
      },
      {
        title: "Receive a Fair Cash Offer",
        description:
          "We evaluate your property and present a fair, no-obligation cash offer with complete transparency.",
      },
      {
        title: "Close on Your Schedule",
        description:
          "Choose the closing date that works best for you. We handle the paperwork for a smooth and stress-free transaction.",
      },
    ],
  },

  es: {
    eyebrow: "CÓMO FUNCIONA",
    titleLine1: "Un Proceso Simple y Directo",
    titleLine2: "para Vender su Propiedad",
    description:
      "Vender su propiedad no tiene por qué ser estresante. Nuestro proceso está diseñado para ser rápido, transparente y adaptado a su calendario.",
    stepLabel: "Paso",
    steps: [
      {
        title: "Contáctenos",
        description:
          "Llámenos o complete nuestro formulario de propiedad. Recopilaremos algunos detalles sobre su propiedad y sus objetivos.",
      },
      {
        title: "Reciba una Oferta Justa en Efectivo",
        description:
          "Evaluamos su propiedad y le presentamos una oferta justa en efectivo, sin compromiso y con total transparencia.",
      },
      {
        title: "Cierre Cuando le Convenga",
        description:
          "Elija la fecha de cierre que mejor se adapte a sus necesidades. Nosotros nos encargamos del papeleo para que la transacción sea sencilla y sin estrés.",
      },
    ],
  },

  el: {
    eyebrow: "ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ",
    titleLine1: "Μια Απλή και Ξεκάθαρη",
    titleLine2: "Διαδικασία Πώλησης",
    description:
      "Η πώληση του ακινήτου σας δεν χρειάζεται να είναι αγχωτική. Η διαδικασία μας έχει σχεδιαστεί ώστε να είναι γρήγορη, διαφανής και προσαρμοσμένη στο δικό σας χρονοδιάγραμμα.",
    stepLabel: "Βήμα",
    steps: [
      {
        title: "Επικοινωνήστε Μαζί μας",
        description:
          "Καλέστε μας ή συμπληρώστε τη φόρμα ακινήτου. Θα χρειαστούμε μερικές βασικές πληροφορίες σχετικά με το ακίνητο και τους στόχους σας.",
      },
      {
        title: "Λάβετε μια Δίκαιη Προσφορά Μετρητοίς",
        description:
          "Αξιολογούμε το ακίνητό σας και σας παρουσιάζουμε μια δίκαιη προσφορά μετρητοίς, χωρίς υποχρέωση και με πλήρη διαφάνεια.",
      },
      {
        title: "Ολοκληρώστε την Πώληση Όταν σας Εξυπηρετεί",
        description:
          "Επιλέξτε την ημερομηνία ολοκλήρωσης που σας εξυπηρετεί καλύτερα. Εμείς αναλαμβάνουμε τη γραφειοκρατία για μια ομαλή διαδικασία χωρίς περιττό άγχος.",
      },
    ],
  },

  sq: {
    eyebrow: "SI FUNKSIONON",
    titleLine1: "Një Proces i Thjeshtë dhe i Qartë",
    titleLine2: "për Shitjen e Pronës",
    description:
      "Shitja e pronës suaj nuk duhet të jetë stresuese. Procesi ynë është krijuar për të qenë i shpejtë, transparent dhe i përshtatur me afatin tuaj.",
    stepLabel: "Hapi",
    steps: [
      {
        title: "Na Kontaktoni",
        description:
          "Na telefononi ose plotësoni formularin e pronës. Do të marrim disa informacione bazë rreth pronës dhe objektivave tuaja.",
      },
      {
        title: "Merrni një Ofertë të Drejtë në Para",
        description:
          "Ne vlerësojmë pronën tuaj dhe ju paraqesim një ofertë të drejtë në para, pa detyrim dhe me transparencë të plotë.",
      },
      {
        title: "Mbylleni Marrëveshjen Sipas Afatit Tuaj",
        description:
          "Zgjidhni datën e mbylljes që ju përshtatet më mirë. Ne kujdesemi për dokumentacionin për një transaksion sa më të thjeshtë dhe pa stres.",
      },
    ],
  },
};

const icons = [
  PhoneCall,
  BadgeDollarSign,
  Handshake,
];

export default function HowItWorks({
  locale = "en",
}: HowItWorksProps) {
  const text = content[locale];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <Image
        src="/images/process-background.jpg"
        alt=""
        fill
        priority={false}
        className="object-cover opacity-[0.05]"
      />

      <div className="absolute inset-0 bg-white/90" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            {text.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            {text.titleLine1}
            <br />
            {text.titleLine2}
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            {text.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {text.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.title}
                className="group rounded-2xl border bg-white/95 p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#C9A227]/10 transition-all duration-300 group-hover:bg-[#C9A227]">
                  <Icon className="h-8 w-8 text-[#C9A227] group-hover:text-white" />
                </div>

                <span className="mt-6 block text-sm font-bold uppercase tracking-[0.25em] text-[#C9A227]">
                  {text.stepLabel} {index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-24" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}