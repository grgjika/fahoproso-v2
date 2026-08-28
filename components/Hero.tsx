"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Locale = "en" | "el" | "es" | "sq";

type HeroProps = {
  locale?: Locale;
};

const content = {
  en: {
    line1: "Investing in",
    highlight: " Real Estate",
    line2: "Creating Opportunities.",
    description:
      "We invest in residential and commercial properties while helping property owners find practical real estate solutions throughout Michigan.",
    primaryButton: "Get a Cash Offer",
    secondaryButton: "Explore Our Services",
  },

  el: {
    line1: "Επενδύουμε στα",
    highlight: " Ακίνητα",
    line2: "Δημιουργούμε Ευκαιρίες.",
    description:
      "Επενδύουμε σε οικιστικά και επαγγελματικά ακίνητα, βοηθώντας παράλληλα τους ιδιοκτήτες να βρουν πρακτικές λύσεις για τα ακίνητά τους σε όλο το Michigan.",
    primaryButton: "Ζητήστε Προσφορά",
    secondaryButton: "Δείτε τις Υπηρεσίες μας",
  },

  es: {
    line1: "Invertimos en",
    highlight: " Bienes Raíces",
    line2: "Creamos Oportunidades.",
    description:
      "Invertimos en propiedades residenciales y comerciales mientras ayudamos a los propietarios a encontrar soluciones inmobiliarias prácticas en todo Michigan.",
    primaryButton: "Solicite una Oferta",
    secondaryButton: "Explore Nuestros Servicios",
  },

  sq: {
    line1: "Investojmë në",
    highlight: " Pasuri të Paluajtshme",
    line2: "Krijojmë Mundësi.",
    description:
      "Investojmë në prona rezidenciale dhe komerciale, duke ndihmuar njëkohësisht pronarët të gjejnë zgjidhje praktike për pronat e tyre në të gjithë Michigan-in.",
    primaryButton: "Kërkoni një Ofertë",
    secondaryButton: "Shikoni Shërbimet Tona",
  },
};

export default function Hero({ locale = "en" }: HeroProps) {
  const text = content[locale];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24"
    >
      <Image
        src="/images/hero.jpg"
        alt="FAHOPROSO Real Estate"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text.line1}
          <span className="text-blue-500">{text.highlight}</span>
          <br />
          {text.line2}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {text.description}
        </motion.p>

        <motion.div
          className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:w-auto sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            {text.primaryButton}
          </a>

          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto"
          >
            {text.secondaryButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}