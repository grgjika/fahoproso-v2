"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Skyline3D from "@/components/Skyline3D";
import { Banknote, Clock, ShieldCheck } from "lucide-react";

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
    addressPlaceholder: "Enter your property address",
    addressButton: "Get My Offer",
    features: [
      { title: "Any Condition", text: "Buy homes as-is" },
      { title: "Fast Cash Offers", text: "Clear, fair terms" },
      { title: "No Hidden Fees", text: "Straightforward process" },
    ],
  },

  el: {
    line1: "Επενδύουμε στα",
    highlight: " Ακίνητα",
    line2: "Δημιουργούμε Ευκαιρίες.",
    description:
      "Επενδύουμε σε οικιστικά και επαγγελματικά ακίνητα, βοηθώντας παράλληλα τους ιδιοκτήτες να βρουν πρακτικές λύσεις για τα ακίνητά τους σε όλο το Michigan.",
    primaryButton: "Ζητήστε Προσφορά",
    secondaryButton: "Δείτε τις Υπηρεσίες μας",
    addressPlaceholder: "Εισάγετε τη διεύθυνση του ακινήτου",
    addressButton: "Η Προσφορά μου",
    features: [
      { title: "Σε Οποιαδήποτε Κατάσταση", text: "Αγορά ακινήτων ως έχουν" },
      { title: "Γρήγορες Προσφορές", text: "Σαφείς, δίκαιοι όροι" },
      { title: "Χωρίς Κρυφές Χρεώσεις", text: "Απλή διαδικασία" },
    ],
  },

  es: {
    line1: "Invertimos en",
    highlight: " Bienes Raíces",
    line2: "Creamos Oportunidades.",
    description:
      "Invertimos en propiedades residenciales y comerciales mientras ayudamos a los propietarios a encontrar soluciones inmobiliarias prácticas en todo Michigan.",
    primaryButton: "Solicite una Oferta",
    secondaryButton: "Explore Nuestros Servicios",
    addressPlaceholder: "Ingrese la dirección de su propiedad",
    addressButton: "Obtener Mi Oferta",
    features: [
      { title: "Cualquier Condición", text: "Compramos tal como está" },
      { title: "Ofertas Rápidas en Efectivo", text: "Términos claros y justos" },
      { title: "Sin Cargos Ocultos", text: "Proceso sencillo" },
    ],
  },

  sq: {
    line1: "Investojmë në",
    highlight: " Pasuri të Paluajtshme",
    line2: "Krijojmë Mundësi.",
    description:
      "Investojmë në prona rezidenciale dhe komerciale, duke ndihmuar njëkohësisht pronarët të gjejnë zgjidhje praktike për pronat e tyre në të gjithë Michigan-in.",
    primaryButton: "Kërkoni një Ofertë",
    secondaryButton: "Shikoni Shërbimet Tona",
    addressPlaceholder: "Shkruani adresën e pronës",
    addressButton: "Merr Ofertën Time",
    features: [
      { title: "Në Çdo Gjendje", text: "Blejmë pronat siç janë" },
      { title: "Oferta të Shpejta", text: "Kushte të qarta dhe të drejta" },
      { title: "Pa Tarifa të Fshehura", text: "Proces i thjeshtë" },
    ],
  },
};

const featureIcons = [ShieldCheck, Clock, Banknote];

export default function Hero({ locale = "en" }: HeroProps) {
  const text = content[locale];
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleOffer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = String(
      new FormData(event.currentTarget).get("address") ?? ""
    ).trim();
    window.dispatchEvent(
      new CustomEvent("fahoproso:prefill-address", { detail: address })
    );
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleLeave() {
    setHovering(false);
    mx.set(0);
    my.set(0);
  }

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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 text-white sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
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

        <motion.form
          onSubmit={handleOffer}
          className="hero-input mt-8 flex w-full max-w-xl flex-col gap-2 rounded-2xl p-2 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <input
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder={text.addressPlaceholder}
            aria-label={text.addressPlaceholder}
            className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            {text.addressButton}
          </button>
        </motion.form>
        </div>

        <motion.div
          className="hidden lg:block"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          onPointerMove={handleMove}
          onPointerEnter={() => setHovering(true)}
          onPointerLeave={handleLeave}
          aria-hidden="true"
        >
          <motion.div
            className="relative mx-auto h-[460px] w-full max-w-md"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute left-1/2 top-[110px] -ml-[150px]"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(58deg) rotateZ(45deg) scale(1.15)",
              }}
            >
              <Skyline3D />
            </div>

            {text.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={feature.title}
                  className="absolute"
                  style={{
                    top: [10, 190, 400][i],
                    left: [-70, 250, -40][i],
                    transform: `translateZ(${220 + i * 30 + (hovering ? 30 : 0)}px)`,
                    transition: "transform 0.4s ease",
                  }}
                >
                  <div
                    className="hero-float hero-glass flex items-center gap-3 rounded-2xl p-3 pr-5"
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-700 shadow-lg shadow-blue-900/50">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold">
                        {feature.title}
                      </span>
                      <span className="block text-xs text-slate-200">
                        {feature.text}
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}