import {
  Home,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type AboutProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "About FAHOPROSO",
    title: "Our Real Estate Investment Approach",
    description:
      "FAHOPROSO is a real estate investment company focused on acquiring, improving, and managing residential and commercial properties. We help homeowners find practical solutions while creating long-term value for investors and the communities we serve. If you're looking to sell your property, we can evaluate it and, if it's a good fit, provide a fair, no-obligation cash offer.",
    cards: [
      {
        title: "Residential",
        description:
          "Acquiring, renovating, and managing residential properties.",
      },
      {
        title: "Commercial",
        description:
          "Investing in commercial opportunities that create lasting value.",
      },
      {
        title: "Partnerships",
        description:
          "Building trusted relationships with sellers, investors, and communities.",
      },
      {
        title: "Long-Term Value",
        description:
          "Creating sustainable growth through strategic real estate investments.",
      },
    ],
  },

  es: {
    eyebrow: "Sobre FAHOPROSO",
    title: "Nuestro Enfoque de Inversión Inmobiliaria",
    description:
      "FAHOPROSO es una empresa de inversión inmobiliaria enfocada en adquirir, mejorar y administrar propiedades residenciales y comerciales. Ayudamos a los propietarios a encontrar soluciones prácticas mientras creamos valor a largo plazo para inversionistas y las comunidades que servimos. Si está pensando en vender su propiedad, podemos evaluarla y, si es una buena opción, ofrecerle una oferta en efectivo justa y sin compromiso.",
    cards: [
      {
        title: "Residencial",
        description:
          "Adquirimos, renovamos y administramos propiedades residenciales.",
      },
      {
        title: "Comercial",
        description:
          "Invertimos en oportunidades comerciales con potencial de valor duradero.",
      },
      {
        title: "Colaboraciones",
        description:
          "Construimos relaciones de confianza con vendedores, inversionistas y comunidades.",
      },
      {
        title: "Valor a Largo Plazo",
        description:
          "Creamos crecimiento sostenible mediante inversiones inmobiliarias estratégicas.",
      },
    ],
  },

  el: {
    eyebrow: "Σχετικά με τη FAHOPROSO",
    title: "Η Προσέγγισή μας στις Επενδύσεις Ακινήτων",
    description:
      "Η FAHOPROSO είναι μια εταιρεία επενδύσεων ακινήτων που επικεντρώνεται στην απόκτηση, αναβάθμιση και διαχείριση οικιστικών και επαγγελματικών ακινήτων. Βοηθάμε τους ιδιοκτήτες να βρουν πρακτικές λύσεις, δημιουργώντας παράλληλα μακροπρόθεσμη αξία για επενδυτές και τις κοινότητες που εξυπηρετούμε. Αν σκέφτεστε να πουλήσετε το ακίνητό σας, μπορούμε να το αξιολογήσουμε και, αν ταιριάζει στα κριτήριά μας, να σας προσφέρουμε μια δίκαιη προσφορά μετρητοίς χωρίς υποχρέωση.",
    cards: [
      {
        title: "Κατοικίες",
        description:
          "Αποκτούμε, ανακαινίζουμε και διαχειριζόμαστε οικιστικά ακίνητα.",
      },
      {
        title: "Επαγγελματικά Ακίνητα",
        description:
          "Επενδύουμε σε επαγγελματικές ευκαιρίες που μπορούν να δημιουργήσουν διαχρονική αξία.",
      },
      {
        title: "Συνεργασίες",
        description:
          "Χτίζουμε σχέσεις εμπιστοσύνης με πωλητές, επενδυτές και κοινότητες.",
      },
      {
        title: "Μακροπρόθεσμη Αξία",
        description:
          "Δημιουργούμε βιώσιμη ανάπτυξη μέσα από στρατηγικές επενδύσεις ακινήτων.",
      },
    ],
  },

  sq: {
    eyebrow: "Rreth FAHOPROSO",
    title: "Qasja Jonë ndaj Investimeve në Pasuri të Paluajtshme",
    description:
      "FAHOPROSO është një kompani investimesh në pasuri të paluajtshme e fokusuar në blerjen, përmirësimin dhe menaxhimin e pronave rezidenciale dhe komerciale. Ne ndihmojmë pronarët të gjejnë zgjidhje praktike, ndërsa krijojmë vlerë afatgjatë për investitorët dhe komunitetet që shërbejmë. Nëse po mendoni të shisni pronën tuaj, mund ta vlerësojmë dhe, nëse është e përshtatshme për ne, t'ju ofrojmë një ofertë të drejtë në para pa detyrim.",
    cards: [
      {
        title: "Rezidenciale",
        description:
          "Blejmë, rinovojmë dhe menaxhojmë prona rezidenciale.",
      },
      {
        title: "Komerciale",
        description:
          "Investojmë në mundësi komerciale që krijojnë vlerë afatgjatë.",
      },
      {
        title: "Partneritete",
        description:
          "Ndërtojmë marrëdhënie të besueshme me shitës, investitorë dhe komunitete.",
      },
      {
        title: "Vlerë Afatgjatë",
        description:
          "Krijojmë rritje të qëndrueshme përmes investimeve strategjike në pasuri të paluajtshme.",
      },
    ],
  },
};

const icons = [Home, Building2, Handshake, TrendingUp];

const backgrounds = [
  "bg-stone-100",
  "bg-stone-200",
  "bg-stone-300",
  "bg-stone-400",
];

export default function About({ locale = "en" }: AboutProps) {
  const text = content[locale];

  return (
    <section
      id="about"
      className="scroll-mt-32 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
          {text.eyebrow}
        </p>

        <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          {text.title}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          {text.description}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {text.cards.map((card, index) => {
            const Icon = icons[index];

            return (
              <div
                key={card.title}
                className={`rounded-2xl border border-slate-200 ${backgrounds[index]} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <Icon className="mb-4 h-10 w-10 text-blue-600" />

                <h3 className="text-xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}