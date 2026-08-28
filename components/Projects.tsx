import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Building2,
  Handshake,
  Home,
  MapPin,
  TrendingUp,
} from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type ProjectsProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "Investment Projects",
    title: "Investing in Properties. Building Stronger Communities.",
    description:
      "FAHOPROSO is building its portfolio through carefully selected residential, rental, and commercial real estate opportunities across Michigan.",
    shareOpportunity: "Share an Opportunity",
    learnMore: "Learn More",

    areas: [
      {
        title: "Residential Acquisitions",
        label: "Buy • Improve • Create Value",
        description:
          "We evaluate residential properties where thoughtful improvements and responsible ownership can create long-term value.",
      },
      {
        title: "Rental Investments",
        label: "Long-Term Ownership",
        description:
          "We pursue rental opportunities with a focus on stable operations, responsible maintenance, and sustainable portfolio growth.",
      },
      {
        title: "Commercial Real Estate",
        label: "Strategic Expansion",
        description:
          "We are expanding carefully into selected commercial opportunities, partnerships, and long-term investments.",
      },
    ],

    visionEyebrow: "Our Vision",
    visionTitle: "More Than Acquisitions",
    visionParagraph1:
      "Our goal is to improve properties thoughtfully, create stronger investment opportunities, and contribute positively to the communities where we operate.",
    visionParagraph2:
      "As our portfolio grows, this page will feature acquisitions, renovations, rental properties, commercial projects, and before-and-after stories from across Michigan.",

    comingSoon: "Coming Soon",
    journeyTitle: "Follow the FAHOPROSO Journey",
    journeyItems: [
      "New property acquisitions",
      "Renovation progress",
      "Rental portfolio growth",
      "Commercial opportunities",
      "Community impact stories",
    ],

    focus: "Michigan Focus",
    focusTitle:
      "Growing Through Careful Acquisitions and Partnerships",
    focusDescription:
      "We welcome conversations with property owners, real estate professionals, contractors, investors, and community partners who share our commitment to responsible growth.",
    workWithUs: "Work With Us",
  },

  es: {
    eyebrow: "Proyectos de Inversión",
    title:
      "Invertimos en Propiedades. Fortalecemos Comunidades.",
    description:
      "FAHOPROSO está desarrollando su portafolio mediante oportunidades cuidadosamente seleccionadas en propiedades residenciales, de alquiler y comerciales en Michigan.",
    shareOpportunity: "Comparta una Oportunidad",
    learnMore: "Más Información",

    areas: [
      {
        title: "Adquisiciones Residenciales",
        label: "Comprar • Mejorar • Crear Valor",
        description:
          "Evaluamos propiedades residenciales donde las mejoras bien planificadas y una administración responsable pueden crear valor a largo plazo.",
      },
      {
        title: "Inversiones en Propiedades de Alquiler",
        label: "Propiedad a Largo Plazo",
        description:
          "Buscamos oportunidades de alquiler con un enfoque en operaciones estables, mantenimiento responsable y crecimiento sostenible del portafolio.",
      },
      {
        title: "Bienes Raíces Comerciales",
        label: "Expansión Estratégica",
        description:
          "Nos expandimos cuidadosamente hacia oportunidades comerciales seleccionadas, colaboraciones e inversiones a largo plazo.",
      },
    ],

    visionEyebrow: "Nuestra Visión",
    visionTitle: "Más que Adquisiciones",
    visionParagraph1:
      "Nuestro objetivo es mejorar las propiedades de manera responsable, crear mejores oportunidades de inversión y contribuir positivamente a las comunidades donde operamos.",
    visionParagraph2:
      "A medida que crezca nuestro portafolio, esta página mostrará adquisiciones, renovaciones, propiedades de alquiler, proyectos comerciales e historias de antes y después en Michigan.",

    comingSoon: "Próximamente",
    journeyTitle: "Siga el Camino de FAHOPROSO",
    journeyItems: [
      "Nuevas adquisiciones de propiedades",
      "Progreso de renovaciones",
      "Crecimiento del portafolio de alquiler",
      "Oportunidades comerciales",
      "Historias de impacto en la comunidad",
    ],

    focus: "Enfoque en Michigan",
    focusTitle:
      "Creciendo Mediante Adquisiciones Cuidadosas y Colaboraciones",
    focusDescription:
      "Estamos abiertos a conversar con propietarios, profesionales inmobiliarios, contratistas, inversionistas y socios comunitarios que compartan nuestro compromiso con un crecimiento responsable.",
    workWithUs: "Trabaje con Nosotros",
  },

  el: {
    eyebrow: "Επενδυτικά Έργα",
    title:
      "Επενδύουμε σε Ακίνητα. Ενισχύουμε τις Κοινότητες.",
    description:
      "Η FAHOPROSO αναπτύσσει το χαρτοφυλάκιό της μέσα από προσεκτικά επιλεγμένες ευκαιρίες σε οικιστικά, ενοικιαζόμενα και επαγγελματικά ακίνητα σε όλο το Michigan.",
    shareOpportunity: "Μοιραστείτε μια Ευκαιρία",
    learnMore: "Μάθετε Περισσότερα",

    areas: [
      {
        title: "Απόκτηση Οικιστικών Ακινήτων",
        label: "Αγορά • Βελτίωση • Δημιουργία Αξίας",
        description:
          "Αξιολογούμε οικιστικά ακίνητα όπου οι προσεκτικές βελτιώσεις και η υπεύθυνη ιδιοκτησία μπορούν να δημιουργήσουν μακροπρόθεσμη αξία.",
      },
      {
        title: "Επενδύσεις σε Ακίνητα προς Ενοικίαση",
        label: "Μακροπρόθεσμη Ιδιοκτησία",
        description:
          "Αναζητούμε ευκαιρίες σε ακίνητα προς ενοικίαση με έμφαση στη σταθερή λειτουργία, την υπεύθυνη συντήρηση και τη βιώσιμη ανάπτυξη του χαρτοφυλακίου.",
      },
      {
        title: "Επαγγελματικά Ακίνητα",
        label: "Στρατηγική Επέκταση",
        description:
          "Επεκτεινόμαστε προσεκτικά σε επιλεγμένες επαγγελματικές ευκαιρίες, συνεργασίες και μακροπρόθεσμες επενδύσεις.",
      },
    ],

    visionEyebrow: "Το Όραμά μας",
    visionTitle: "Περισσότερο από Απλές Αγορές Ακινήτων",
    visionParagraph1:
      "Στόχος μας είναι να βελτιώνουμε τα ακίνητα με προσοχή, να δημιουργούμε ισχυρότερες επενδυτικές ευκαιρίες και να συμβάλλουμε θετικά στις κοινότητες όπου δραστηριοποιούμαστε.",
    visionParagraph2:
      "Καθώς το χαρτοφυλάκιό μας αναπτύσσεται, αυτή η σελίδα θα παρουσιάζει αγορές, ανακαινίσεις, ακίνητα προς ενοικίαση, επαγγελματικά έργα και ιστορίες πριν και μετά από όλο το Michigan.",

    comingSoon: "Σύντομα",
    journeyTitle: "Ακολουθήστε την Πορεία της FAHOPROSO",
    journeyItems: [
      "Νέες αγορές ακινήτων",
      "Πρόοδος ανακαινίσεων",
      "Ανάπτυξη χαρτοφυλακίου ενοικιάσεων",
      "Επαγγελματικές ευκαιρίες",
      "Ιστορίες θετικού αντίκτυπου στις κοινότητες",
    ],

    focus: "Εστίαση στο Michigan",
    focusTitle:
      "Ανάπτυξη Μέσα από Προσεκτικές Αγορές και Συνεργασίες",
    focusDescription:
      "Είμαστε ανοιχτοί σε συζητήσεις με ιδιοκτήτες ακινήτων, επαγγελματίες του real estate, εργολάβους, επενδυτές και συνεργάτες που μοιράζονται τη δέσμευσή μας για υπεύθυνη ανάπτυξη.",
    workWithUs: "Συνεργαστείτε Μαζί μας",
  },

  sq: {
    eyebrow: "Projektet e Investimeve",
    title:
      "Investojmë në Prona. Ndërtojmë Komunitete më të Forta.",
    description:
      "FAHOPROSO po ndërton portofolin e saj përmes mundësive të përzgjedhura me kujdes në prona rezidenciale, me qira dhe komerciale në të gjithë Michigan-in.",
    shareOpportunity: "Ndani një Mundësi",
    learnMore: "Mësoni Më Shumë",

    areas: [
      {
        title: "Blerje të Pronave Rezidenciale",
        label: "Bli • Përmirëso • Krijo Vlerë",
        description:
          "Vlerësojmë prona rezidenciale ku përmirësimet e menduara mirë dhe pronësia e përgjegjshme mund të krijojnë vlerë afatgjatë.",
      },
      {
        title: "Investime në Prona me Qira",
        label: "Pronësi Afatgjatë",
        description:
          "Kërkojmë mundësi në prona me qira me fokus në operacione të qëndrueshme, mirëmbajtje të përgjegjshme dhe rritje të qëndrueshme të portofolit.",
      },
      {
        title: "Pasuri të Paluajtshme Komerciale",
        label: "Zgjerim Strategjik",
        description:
          "Po zgjerohemi me kujdes në mundësi të përzgjedhura komerciale, partneritete dhe investime afatgjata.",
      },
    ],

    visionEyebrow: "Vizioni Ynë",
    visionTitle: "Më Shumë se Blerje Pronash",
    visionParagraph1:
      "Qëllimi ynë është të përmirësojmë pronat me kujdes, të krijojmë mundësi më të forta investimi dhe të kontribuojmë pozitivisht në komunitetet ku operojmë.",
    visionParagraph2:
      "Ndërsa portofoli ynë rritet, kjo faqe do të paraqesë blerje, rinovime, prona me qira, projekte komerciale dhe histori para dhe pas nga i gjithë Michigan-i.",

    comingSoon: "Së Shpejti",
    journeyTitle: "Ndiqni Rrugëtimin e FAHOPROSO",
    journeyItems: [
      "Blerje të reja pronash",
      "Progresi i rinovimeve",
      "Rritja e portofolit të pronave me qira",
      "Mundësi komerciale",
      "Histori të ndikimit në komunitet",
    ],

    focus: "Fokus në Michigan",
    focusTitle:
      "Rritje Përmes Blerjeve të Kujdesshme dhe Partneriteteve",
    focusDescription:
      "Mirëpresim biseda me pronarë, profesionistë të pasurive të paluajtshme, kontraktorë, investitorë dhe partnerë të komunitetit që ndajnë angazhimin tonë për rritje të përgjegjshme.",
    workWithUs: "Bashkëpunoni me Ne",
  },
};

const investmentDetails = [
  {
    icon: Home,
    image: "/images/property1.jpg",
    href: "/investment-focus/residential",
  },
  {
    icon: TrendingUp,
    image: "/images/property2.jpg",
    href: "/investment-focus/rentals",
  },
  {
    icon: Building2,
    image: "/images/property3.jpg",
    href: "/investment-focus/commercial",
  },
];

export default function Projects({
  locale = "en",
}: ProjectsProps) {
  const text = content[locale];

 const contactHref =
  locale === "en" ? "/contact" : `/${locale}/contact`;

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              {text.eyebrow}
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl lg:text-5xl">
              {text.title}
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {text.description}
            </p>
          </div>

          <Link
            href={contactHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14213D] px-7 py-4 font-semibold text-white transition hover:bg-[#C9A227] hover:text-[#14213D] sm:w-auto"
          >
            {text.shareOpportunity}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {text.areas.map((area, index) => {
            const detail = investmentDetails[index];
            const Icon = detail.icon;

            return (
              <article
                key={area.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <Image
                    src={detail.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/85 via-[#14213D]/15 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
                    {area.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#14213D]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <Link
                    href={detail.href}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                  >
                    {text.learnMore}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-100 p-8 sm:p-10">
            <p className="font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
              {text.visionEyebrow}
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#14213D] sm:text-4xl">
              {text.visionTitle}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {text.visionParagraph1}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {text.visionParagraph2}
            </p>
          </div>

          <div className="rounded-3xl border border-[#C9A227]/30 bg-[#FFF9EC] p-8 sm:p-10">
            <p className="font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
              {text.comingSoon}
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#14213D] sm:text-4xl">
              {text.journeyTitle}
            </h3>

            <div className="mt-7 space-y-4 text-slate-700">
              {text.journeyItems.map((item) => (
                <p key={item}>✓ {item}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-16 overflow-hidden rounded-3xl bg-[#14213D] text-white">
          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <MapPin className="h-7 w-7 text-[#C9A227]" />

                <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  {text.focus}
                </p>
              </div>

              <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                {text.focusTitle}
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {text.focusDescription}
              </p>
            </div>

            <Link
              href={contactHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white sm:w-auto"
            >
              <Handshake className="h-5 w-5" />
              {text.workWithUs}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}