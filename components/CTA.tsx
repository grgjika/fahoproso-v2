type Locale = "en" | "es" | "el" | "sq";

type CTAProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "Let's Work Together",
    title: "Ready to Sell, Invest, or Partner?",
    description:
      "Whether you're selling a property, looking for your next investment, or exploring commercial opportunities, FAHOPROSO is ready to help.",
    button: "Contact Us Today",
  },

  es: {
    eyebrow: "Trabajemos Juntos",
    title: "¿Listo para Vender, Invertir o Colaborar?",
    description:
      "Ya sea que esté vendiendo una propiedad, buscando su próxima inversión o explorando oportunidades comerciales, FAHOPROSO está listo para ayudarle.",
    button: "Contáctenos Hoy",
  },

  el: {
    eyebrow: "Ας Συνεργαστούμε",
    title: "Έτοιμοι να Πουλήσετε, να Επενδύσετε ή να Συνεργαστείτε;",
    description:
      "Είτε θέλετε να πουλήσετε ένα ακίνητο, είτε αναζητάτε την επόμενη επένδυσή σας είτε εξετάζετε επαγγελματικές ευκαιρίες, η FAHOPROSO είναι έτοιμη να σας βοηθήσει.",
    button: "Επικοινωνήστε Μαζί μας",
  },

  sq: {
    eyebrow: "Le të Bashkëpunojmë",
    title: "Gati për të Shitur, Investuar ose Bashkëpunuar?",
    description:
      "Nëse po shisni një pronë, po kërkoni investimin tuaj të ardhshëm ose po eksploroni mundësi komerciale, FAHOPROSO është gati t'ju ndihmojë.",
    button: "Na Kontaktoni Sot",
  },
};

export default function CTA({ locale = "en" }: CTAProps) {
  const text = content[locale];

  const contactHref =
    locale === "en" ? "/contact" : `/${locale}/contact`;

  return (
    <section className="bg-stone-200 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
          {text.eyebrow}
        </p>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

        <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
          {text.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {text.description}
        </p>

        <a
          href={contactHref}
          className="mt-10 inline-flex rounded-lg bg-[#C9A227] px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
        >
          {text.button}
        </a>
      </div>
    </section>
  );
}