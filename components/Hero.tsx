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
      {/* Background photo: slow push-in + mouse parallax */}
      <motion.div
        className="absolute -inset-10"
        style={{ x: bgX, y: bgY }}
      >
        <div className="hero-kenburns absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="FAHOPROSO Real Estate"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Soft, airy haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-slate-900/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_60%)]" />

      {/* Copy floats above the photo */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        style={{
          x: fgX,
          y: fgY,
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ transform: "translateZ(80px)" }}
        >
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO"
            width={520}
            height={347}
            priority
            className="h-auto w-[min(440px,72vw)] drop-shadow-[0_18px_30px_rgba(255,255,255,0.7)]"
          />
        </motion.div>

        <motion.h1
          className="mt-2 text-xl font-light tracking-[0.12em] text-slate-900 sm:text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          style={{ transform: "translateZ(50px)" }}
        >
          {text.line1}
          <span className="font-normal text-blue-700">{text.highlight}</span>
          <span className="mx-3 hidden text-slate-500 sm:inline">·</span>
          <br className="sm:hidden" />
          {text.line2}
        </motion.h1>

        <motion.a
          href="#contact"
          className="hero-cta mt-10 inline-flex items-center justify-center rounded-full px-9 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-slate-900"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ transform: "translateZ(40px)" }}
        >
          {text.primaryButton}
        </motion.a>
      </motion.div>

      <a
        href="#services"
        aria-label={text.secondaryButton}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/90"
      >
        <ChevronDown className="hero-bounce h-8 w-8" />
      </a>
    </section>
  );
}
