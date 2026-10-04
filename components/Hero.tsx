"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 70, damping: 20, mass: 0.8 };

  // Three depth layers: background drifts most, copy least, so the scene
  // reads as real parallax depth rather than a flat photo.
  const bgX = useSpring(useTransform(mx, [-0.5, 0.5], [28, -28]), spring);
  const bgY = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), spring);
  const fgX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), spring);
  const fgY = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), spring);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), spring);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), spring);

  function handleMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ perspective: 1400 }}
    >
      {/* Sunset villa: slow push-in + mouse parallax */}
      <motion.div
        className="absolute -inset-10"
        style={{ x: bgX, y: bgY }}
      >
        <div className="hero-kenburns absolute inset-0">
          <Image
            src="/images/hero-sunset.jpg"
            alt="Modern villa terrace overlooking the sea at sunset"
            fill
            priority
            className="object-cover object-[35%_50%]"
          />
        </div>
      </motion.div>

      {/* Light, warm grade so the navy copy stays crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-slate-900/25" />
      <div className="hero-sun absolute inset-0" aria-hidden="true" />

      <motion.div
        className="relative z-10 flex -translate-y-6 flex-col items-center px-6 text-center sm:-translate-y-10"
        style={{
          x: fgX,
          y: fgY,
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="hero-logo-wrap"
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ transform: "translateZ(90px)" }}
        >
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO Real Estate Investment"
            width={620}
            height={413}
            priority
            className="hero-logo h-auto w-[min(600px,86vw)]"
          />
        </motion.div>

        <motion.h1
          className="hero-tagline -mt-10 font-serif text-2xl font-semibold leading-snug text-[#14213D] sm:-mt-20 sm:text-4xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ transform: "translateZ(55px)" }}
        >
          {text.line1}
          {text.highlight}.
          <br />
          <span className="text-[#7A5A08]">{text.line2}</span>
        </motion.h1>

        <motion.a
          href="#contact"
          className="hero-cta mt-9 inline-flex items-center justify-center rounded-full px-9 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-[#14213D]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ transform: "translateZ(75px)" }}
        >
          {text.primaryButton}
        </motion.a>
      </motion.div>

      <a
        href="#services"
        aria-label={text.secondaryButton}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white drop-shadow"
      >
        <ChevronDown className="hero-bounce h-8 w-8" />
      </a>
    </section>
  );
}
