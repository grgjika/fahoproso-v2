"use client";

import {
  BadgeDollarSign,
  CalendarCheck,
  Building2,
  Handshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type WhyChooseUsProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "Why Choose FAHOPROSO",
    titleLine1: "A Trusted Partner for Your",
    titleLine2: "Real Estate Goals",
    description:
      "We combine local market knowledge, transparent communication, and practical property solutions to make every transaction clear and straightforward.",
    benefits: [
      {
        title: "Fair Cash Offers",
        description:
          "We provide clear and competitive offers based on the property's condition, location, and market potential.",
      },
      {
        title: "Flexible Closing Dates",
        description:
          "Choose a closing timeline that works for you, whether you need to move quickly or need more time.",
      },
      {
        title: "No Hidden Fees",
        description:
          "We believe in transparent transactions with no unexpected commissions, fees, or last-minute surprises.",
      },
      {
        title: "Residential & Commercial",
        description:
          "Our investment focus includes residential properties, rental opportunities, and commercial real estate.",
      },
      {
        title: "Honest Communication",
        description:
          "You receive straightforward information, dependable guidance, and respectful communication throughout the process.",
      },
      {
        title: "Locally Focused",
        description:
          "We understand the Grand Rapids market and are committed to creating opportunities throughout surrounding communities.",
      },
    ],
  },

  es: {
    eyebrow: "Por Qué Elegir FAHOPROSO",
    titleLine1: "Un Socio de Confianza para sus",
    titleLine2: "Objetivos Inmobiliarios",
    description:
      "Combinamos conocimiento del mercado local, comunicación transparente y soluciones inmobiliarias prácticas para que cada transacción sea clara y sencilla.",
    benefits: [
      {
        title: "Ofertas Justas en Efectivo",
        description:
          "Ofrecemos propuestas claras y competitivas basadas en la condición, ubicación y potencial de mercado de la propiedad.",
      },
      {
        title: "Fechas de Cierre Flexibles",
        description:
          "Elija un plazo de cierre que funcione para usted, ya sea que necesite vender rápidamente o prefiera disponer de más tiempo.",
      },
      {
        title: "Sin Cargos Ocultos",
        description:
          "Creemos en transacciones transparentes, sin comisiones inesperadas, cargos ocultos ni sorpresas de último momento.",
      },
      {
        title: "Residencial y Comercial",
        description:
          "Nuestro enfoque de inversión incluye propiedades residenciales, oportunidades de alquiler y bienes raíces comerciales.",
      },
      {
        title: "Comunicación Honesta",
        description:
          "Recibirá información clara, orientación confiable y una comunicación respetuosa durante todo el proceso.",
      },
      {
        title: "Enfoque Local",
        description:
          "Conocemos el mercado de Grand Rapids y estamos comprometidos con la creación de oportunidades en las comunidades cercanas.",
      },
    ],
  },

  el: {
    eyebrow: "Γιατί να Επιλέξετε τη FAHOPROSO",
    titleLine1: "Ένας Αξιόπιστος Συνεργάτης για τους",
    titleLine2: "Στόχους σας στα Ακίνητα",
    description:
      "Συνδυάζουμε γνώση της τοπικής αγοράς, διαφανή επικοινωνία και πρακτικές λύσεις ακινήτων, ώστε κάθε συναλλαγή να είναι ξεκάθαρη και απλή.",
    benefits: [
      {
        title: "Δίκαιες Προσφορές Μετρητοίς",
        description:
          "Παρέχουμε ξεκάθαρες και ανταγωνιστικές προσφορές με βάση την κατάσταση, την τοποθεσία και τις δυνατότητες του ακινήτου στην αγορά.",
      },
      {
        title: "Ευέλικτες Ημερομηνίες Ολοκλήρωσης",
        description:
          "Επιλέξτε το χρονοδιάγραμμα που σας εξυπηρετεί, είτε χρειάζεστε γρήγορη ολοκλήρωση είτε περισσότερο χρόνο.",
      },
      {
        title: "Χωρίς Κρυφές Χρεώσεις",
        description:
          "Πιστεύουμε στις διαφανείς συναλλαγές, χωρίς απρόβλεπτες προμήθειες, κρυφές χρεώσεις ή εκπλήξεις της τελευταίας στιγμής.",
      },
      {
        title: "Οικιστικά & Επαγγελματικά Ακίνητα",
        description:
          "Η επενδυτική μας δραστηριότητα περιλαμβάνει οικιστικά ακίνητα, ακίνητα προς ενοικίαση και επαγγελματικά ακίνητα.",
      },
      {
        title: "Ειλικρινής Επικοινωνία",
        description:
          "Παρέχουμε ξεκάθαρη ενημέρωση, αξιόπιστη καθοδήγηση και επαγγελματική επικοινωνία σε όλη τη διάρκεια της διαδικασίας.",
      },
      {
        title: "Τοπική Εξειδίκευση",
        description:
          "Γνωρίζουμε την αγορά του Grand Rapids και επιδιώκουμε να δημιουργούμε ευκαιρίες στις γύρω κοινότητες.",
      },
    ],
  },

  sq: {
    eyebrow: "Pse të Zgjidhni FAHOPROSO",
    titleLine1: "Një Partner i Besueshëm për",
    titleLine2: "Objektivat Tuaja në Pasuri të Paluajtshme",
    description:
      "Kombinojmë njohuritë e tregut lokal, komunikimin transparent dhe zgjidhjet praktike për pronat, në mënyrë që çdo transaksion të jetë i qartë dhe i drejtpërdrejtë.",
    benefits: [
      {
        title: "Oferta të Drejta në Para",
        description:
          "Ofrojmë oferta të qarta dhe konkurruese bazuar në gjendjen, vendndodhjen dhe potencialin e pronës në treg.",
      },
      {
        title: "Data Fleksibël për Mbylljen",
        description:
          "Zgjidhni afatin e mbylljes që ju përshtatet, pavarësisht nëse duhet të veproni shpejt apo ju nevojitet më shumë kohë.",
      },
      {
        title: "Pa Tarifa të Fshehura",
        description:
          "Besojmë në transaksione transparente, pa komisione të papritura, tarifa të fshehura apo surpriza në momentin e fundit.",
      },
      {
        title: "Rezidenciale & Komerciale",
        description:
          "Fokusi ynë i investimeve përfshin prona rezidenciale, mundësi për prona me qira dhe pasuri të paluajtshme komerciale.",
      },
      {
        title: "Komunikim i Sinqertë",
        description:
          "Merrni informacion të qartë, udhëzim të besueshëm dhe komunikim me respekt gjatë gjithë procesit.",
      },
      {
        title: "Fokus Lokal",
        description:
          "Ne e njohim tregun e Grand Rapids dhe jemi të përkushtuar të krijojmë mundësi në komunitetet përreth.",
      },
    ],
  },
};

const benefitDetails = [
  {
    icon: BadgeDollarSign,
    color: "bg-gray-300",
  },
  {
    icon: CalendarCheck,
    color: "bg-gray-300",
  },
  {
    icon: ShieldCheck,
    color: "bg-gray-300",
  },
  {
    icon: Building2,
    color: "bg-[#009B4D]",
  },
  {
    icon: Handshake,
    color: "bg-[#009B4D]",
  },
  {
    icon: MapPin,
    color: "bg-[#009B4D]",
  },
];

export default function WhyChooseUs({
  locale = "en",
}: WhyChooseUsProps) {
  const text = content[locale];

  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            {text.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {text.titleLine1}
            <br className="hidden sm:block" />
            {text.titleLine2}
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {text.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {text.benefits.map((benefit, index) => {
            const detail = benefitDetails[index];
            const Icon = detail.icon;

            return (
              <article
                key={benefit.title}
                className={`group rounded-2xl border border-slate-200 ${detail.color} p-8 transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-[#C9A227] hover:bg-white hover:shadow-xl`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A227]/10 transition-all duration-300 group-hover:bg-[#C9A227]">
                  <Icon className="h-7 w-7 text-[#C9A227] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#C9A227] transition-all duration-300 group-hover:w-20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}