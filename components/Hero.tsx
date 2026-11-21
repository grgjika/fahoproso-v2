import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

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
    sellerLine:
      "We buy houses in Grand Rapids and across Michigan. Fair cash offer, any condition, no repairs, no fees.",
    callButton: "Call (616) 275-4443",
  },

  el: {
    line1: "Επενδύουμε στα",
    highlight: " Ακίνητα",
    line2: "Δημιουργούμε Ευκαιρίες.",
    description:
      "Επενδύουμε σε οικιστικά και επαγγελματικά ακίνητα, βοηθώντας παράλληλα τους ιδιοκτήτες να βρουν πρακτικές λύσεις για τα ακίνητά τους σε όλο το Michigan.",
    primaryButton: "Ζητήστε Προσφορά",
    secondaryButton: "Δείτε τις Υπηρεσίες μας",
    sellerLine:
      "Αγοράζουμε σπίτια στο Grand Rapids και σε όλο το Michigan. Δίκαιη προσφορά τοις μετρητοίς, σε οποιαδήποτε κατάσταση, χωρίς επισκευές και χωρίς χρεώσεις.",
    callButton: "Καλέστε (616) 275-4443",
  },

  es: {
    line1: "Invertimos en",
    highlight: " Bienes Raíces",
    line2: "Creamos Oportunidades.",
    description:
      "Invertimos en propiedades residenciales y comerciales mientras ayudamos a los propietarios a encontrar soluciones inmobiliarias prácticas en todo Michigan.",
    primaryButton: "Solicite una Oferta",
    secondaryButton: "Explore Nuestros Servicios",
    sellerLine:
      "Compramos casas en Grand Rapids y en todo Michigan. Oferta justa en efectivo, en cualquier condición, sin reparaciones y sin cargos.",
    callButton: "Llame al (616) 275-4443",
  },

  sq: {
    line1: "Investojmë në",
    highlight: " Pasuri të Paluajtshme",
    line2: "Krijojmë Mundësi.",
    description:
      "Investojmë në prona rezidenciale dhe komerciale, duke ndihmuar njëkohësisht pronarët të gjejnë zgjidhje praktike për pronat e tyre në të gjithë Michigan-in.",
    primaryButton: "Kërkoni një Ofertë",
    secondaryButton: "Shikoni Shërbimet Tona",
    sellerLine:
      "Blejmë shtëpi në Grand Rapids dhe në të gjithë Michigan-in. Ofertë e drejtë me para në dorë, në çdo gjendje, pa riparime dhe pa tarifa.",
    callButton: "Telefononi (616) 275-4443",
  },
};

export default function Hero({ locale = "en" }: HeroProps) {
  const text = content[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Still photo (no motion). Plain <img> so phones download a small version. */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-sunset-1100.jpg"
          srcSet="/images/hero-sunset-640.jpg 640w, /images/hero-sunset-1100.jpg 1100w, /images/hero-sunset.jpg 1920w"
          sizes="100vw"
          alt="Modern home terrace at sunset"
          width={1920}
          height={1080}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[35%_50%]"
        />
      </div>

      {/* Light, warm grade so the navy copy stays crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-slate-900/25" />

      <div className="relative z-10 flex -translate-y-4 flex-col items-center px-6 text-center sm:-translate-y-8">
        <div className="hero-logo-wrap">
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO Real Estate Investment"
            width={620}
            height={413}
            priority
            fetchPriority="high"
            className="hero-logo h-auto w-[min(600px,86vw)]"
          />
        </div>

        <h1 className="hero-tagline -mt-10 font-serif text-2xl font-semibold leading-snug text-[#14213D] sm:-mt-20 sm:text-4xl">
          {text.line1}
          {text.highlight}.
          <br />
          <span className="text-[#7A5A08]">{text.line2}</span>
        </h1>

        <p className="hero-tagline mt-4 max-w-2xl text-base font-medium leading-7 text-[#14213D] sm:text-lg">
          {text.sellerLine}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`${prefix}/contact`}
            className="hero-cta inline-flex items-center justify-center rounded-full px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#14213D]"
          >
            {text.primaryButton}
          </a>
          <a
            href="tel:+16162754443"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14213D] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#C9A227] hover:text-[#14213D]"
          >
            <Phone className="h-4 w-4" />
            {text.callButton}
          </a>
        </div>
      </div>

      <a
        href="#services"
        aria-label={text.secondaryButton}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white drop-shadow"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
