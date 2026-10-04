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

const LAYERS = 14;

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
            src="/images/property3.jpg"
            alt="Modern townhomes"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Depth grade: deep navy at the edges, clear in the middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/30 to-slate-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.0)_30%,rgba(2,6,23,0.55)_100%)]" />

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
        {/* Extruded 3D wordmark: stacked layers give true depth when tilted */}
        <motion.div
          className="hero-wordmark relative"
          initial={{ opacity: 0, y: 30, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {Array.from({ length: LAYERS }, (_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="hero-wordmark-layer absolute inset-0"
              style={{
                transform: `translateZ(${-(LAYERS - i) * 3}px)`,
                color: `hsl(${215 + i} 70% ${18 + i * 2}%)`,
              }}
            >
              FAHOPROSO
            </span>
          ))}
          <h1 className="hero-wordmark-front relative">FAHOPROSO</h1>
        </motion.div>

        <motion.div
          className="mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transform: "translateZ(40px)" }}
        />

        <motion.p
          className="mt-5 text-base font-light uppercase tracking-[0.28em] text-white/90 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ transform: "translateZ(50px)" }}
        >
          {text.line1}
          <span className="font-medium text-[#E5C766]">{text.highlight}</span>
          <br />
          {text.line2}
        </motion.p>

        <motion.a
          href="#contact"
          className="hero-cta mt-10 inline-flex items-center justify-center rounded-full px-9 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ transform: "translateZ(70px)" }}
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
