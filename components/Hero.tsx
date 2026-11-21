import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import HeroSlides from "@/components/HeroSlides";

type Locale = "en" | "el" | "es" | "sq";

type HeroProps = {
  locale?: Locale;
};

const content = {
  en: {
    line1: "Sell Your House",
    highlight: " Fast",
    line2: "We Buy Houses in Michigan.",
    description:
      "We invest in residential and commercial properties while helping property owners find practical real estate solutions throughout Michigan.",
    primaryButton: "Get a Cash Offer",
    secondaryButton: "Explore Our Services",
    sellerLine:
      "Fair cash offer for your house in any condition. No repairs, no fees, no commissions. You choose the closing date.",
    callButton: "Call (616) 275-4443",
  },

  el: {
    line1: "Πουλήστε το σπίτι σας",
    highlight: " γρήγορα",
    line2: "Αγοράζουμε σπίτια στο Michigan.",
    description:
      "Επενδύουμε σε οικιστικά και επαγγελματικά ακίνητα, βοηθώντας παράλληλα τους ιδιοκτήτες να βρουν πρακτικές λύσεις για τα ακίνητά τους σε όλο το Michigan.",
    primaryButton: "Ζητήστε Προσφορά",
    secondaryButton: "Δείτε τις Υπηρεσίες μας",
    sellerLine:
      "Δίκαιη προσφορά τοις μετρητοίς για το σπίτι σας, σε οποιαδήποτε κατάσταση. Χωρίς επισκευές, χωρίς χρεώσεις, χωρίς προμήθειες. Εσείς επιλέγετε την ημερομηνία κλεισίματος.",
    callButton: "Καλέστε (616) 275-4443",
  },

  es: {
    line1: "Venda su casa",
    highlight: " rápido",
    line2: "Compramos casas en Michigan.",
    description:
      "Invertimos en propiedades residenciales y comerciales mientras ayudamos a los propietarios a encontrar soluciones inmobiliarias prácticas en todo Michigan.",
    primaryButton: "Solicite una Oferta",
    secondaryButton: "Explore Nuestros Servicios",
    sellerLine:
      "Oferta justa en efectivo por su casa, en cualquier condición. Sin reparaciones, sin cargos y sin comisiones. Usted elige la fecha de cierre.",
    callButton: "Llame al (616) 275-4443",
  },

  sq: {
    line1: "Shisni shtëpinë tuaj",
    highlight: " shpejt",
    line2: "Blejmë shtëpi në Michigan.",
    description:
      "Investojmë në prona rezidenciale dhe komerciale, duke ndihmuar njëkohësisht pronarët të gjejnë zgjidhje praktike për pronat e tyre në të gjithë Michigan-in.",
    primaryButton: "Kërkoni një Ofertë",
    secondaryButton: "Shikoni Shërbimet Tona",
    sellerLine:
      "Ofertë e drejtë me para në dorë për shtëpinë tuaj, në çdo gjendje. Pa riparime, pa tarifa, pa komisione. Ju zgjidhni datën e mbylljes.",
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
      {/* Four Michigan homes that change by themselves */}
      <HeroSlides />

      {/* Light, warm grade so the navy copy stays crisp */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/25 to-slate-900/20" />

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
