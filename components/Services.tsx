import Image from "next/image";

import {
  Home,
  Hammer,
  KeyRound,
  Building2,
} from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type ServicesProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "Our Services",
    title: "Real Estate Solutions You Can Trust",
    description:
      "We provide practical real estate solutions for property owners, investors, and partners throughout West Michigan.",
    services: [
      {
        title: "Buy Houses for Cash",
        description:
          "We purchase properties in any condition and provide fast, fair cash offers with no hidden fees.",
      },
      {
        title: "Fix & Flip Investments",
        description:
          "We identify, renovate, and transform properties to maximize their value and strengthen communities.",
      },
      {
        title: "Rental Investments",
        description:
          "We acquire quality rental properties that generate long-term income and lasting value.",
      },
      {
        title: "Commercial Real Estate",
        description:
          "We invest in commercial properties and partner on opportunities that support long-term growth.",
      },
    ],
  },

  es: {
    eyebrow: "Nuestros Servicios",
    title: "Soluciones Inmobiliarias en las que Puede Confiar",
    description:
      "Ofrecemos soluciones inmobiliarias prácticas para propietarios, inversionistas y socios en todo West Michigan.",
    services: [
      {
        title: "Compramos Casas en Efectivo",
        description:
          "Compramos propiedades en cualquier condición y ofrecemos propuestas rápidas y justas en efectivo, sin cargos ocultos.",
      },
      {
        title: "Inversiones de Renovación y Reventa",
        description:
          "Identificamos, renovamos y transformamos propiedades para maximizar su valor y fortalecer las comunidades.",
      },
      {
        title: "Inversiones en Propiedades de Alquiler",
        description:
          "Adquirimos propiedades de alquiler de calidad que generan ingresos a largo plazo y valor duradero.",
      },
      {
        title: "Bienes Raíces Comerciales",
        description:
          "Invertimos en propiedades comerciales y colaboramos en oportunidades que apoyan el crecimiento a largo plazo.",
      },
    ],
  },

  el: {
    eyebrow: "Οι Υπηρεσίες μας",
    title: "Λύσεις Ακινήτων που Μπορείτε να Εμπιστευτείτε",
    description:
      "Παρέχουμε πρακτικές λύσεις ακινήτων για ιδιοκτήτες, επενδυτές και συνεργάτες σε όλο το West Michigan.",
    services: [
      {
        title: "Αγοράζουμε Ακίνητα με Μετρητά",
        description:
          "Αγοράζουμε ακίνητα σε οποιαδήποτε κατάσταση και προσφέρουμε γρήγορες και δίκαιες προσφορές μετρητοίς, χωρίς κρυφές χρεώσεις.",
      },
      {
        title: "Επενδύσεις Ανακαίνισης & Μεταπώλησης",
        description:
          "Εντοπίζουμε, ανακαινίζουμε και αναβαθμίζουμε ακίνητα με στόχο τη μεγιστοποίηση της αξίας τους και την ενίσχυση των κοινοτήτων.",
      },
      {
        title: "Επενδύσεις σε Ακίνητα προς Ενοικίαση",
        description:
          "Αποκτούμε ποιοτικά ακίνητα προς ενοικίαση που μπορούν να δημιουργήσουν μακροπρόθεσμο εισόδημα και διαχρονική αξία.",
      },
      {
        title: "Επαγγελματικά Ακίνητα",
        description:
          "Επενδύουμε σε επαγγελματικά ακίνητα και συνεργαζόμαστε σε ευκαιρίες που υποστηρίζουν τη μακροπρόθεσμη ανάπτυξη.",
      },
    ],
  },

  sq: {
    eyebrow: "Shërbimet Tona",
    title: "Zgjidhje për Pasuri të Paluajtshme që Mund t'u Besoni",
    description:
      "Ofrojmë zgjidhje praktike për pronarë, investitorë dhe partnerë në të gjithë West Michigan.",
    services: [
      {
        title: "Blejmë Shtëpi me Para në Dorë",
        description:
          "Blejmë prona në çdo gjendje dhe ofrojmë oferta të shpejta dhe të drejta në para, pa tarifa të fshehura.",
      },
      {
        title: "Investime në Rinovim dhe Rishitje",
        description:
          "Identifikojmë, rinovojmë dhe transformojmë prona për të maksimizuar vlerën e tyre dhe për të forcuar komunitetet.",
      },
      {
        title: "Investime në Prona me Qira",
        description:
          "Blejmë prona cilësore me qira që krijojnë të ardhura afatgjata dhe vlerë të qëndrueshme.",
      },
      {
        title: "Pasuri të Paluajtshme Komerciale",
        description:
          "Investojmë në prona komerciale dhe bashkëpunojmë në mundësi që mbështesin rritjen afatgjatë.",
      },
    ],
  },
};

const serviceDetails = [
  {
    icon: Home,
    image: "/images/service-cash-home.jpg",
  },
  {
    icon: Hammer,
    image: "/images/service-renovation.jpg",
  },
  {
    icon: KeyRound,
    image: "/images/service-rental2.jpg",
  },
  {
    icon: Building2,
    image: "/images/service-commercial.jpg",
  },
];

export default function Services({ locale = "en" }: ServicesProps) {
  const text = content[locale];

  return (
    <section
      id="services"
      className="scroll-mt-32 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
            {text.eyebrow}
          </p>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

          <h2 className="mt-6 whitespace-normal text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:whitespace-nowrap lg:text-5xl">
            {text.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {text.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {text.services.map((service, index) => {
            const Icon = serviceDetails[index].icon;
            const image = serviceDetails[index].image;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />

                  <div className="absolute bottom-5 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A227]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 h-0.5 w-12 bg-[#C9A227] transition-all duration-300 group-hover:w-24" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}