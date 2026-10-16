"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type Entry = {
  path: string;
  popular?: boolean;
  // label + extra search words per locale; a locale is omitted when that page has no translation
  en: [string, string];
  es?: [string, string];
  el?: [string, string];
  sq?: [string, string];
};

const entries: Entry[] = [
  {
    path: "/sell-my-house-grand-rapids",
    popular: true,
    en: ["Sell My House in Grand Rapids", "cash offer sell fast west michigan kent"],
  },
  {
    path: "/sell-my-house-kent-county",
    popular: true,
    en: ["Sell My House in Kent County", "wyoming kentwood walker grandville rockford cash offer"],
  },
  {
    path: "/sell-my-house-ottawa-county",
    en: ["Sell My House in Ottawa County", "holland grand haven hudsonville jenison zeeland allendale"],
  },
  {
    path: "/sell-my-house-troy",
    en: ["Sell My House in Troy, Michigan", "oakland county troy mi"],
  },
  {
    path: "/sell-my-house-michigan",
    en: ["Sell My House in Michigan", "statewide cash offer"],
  },
  {
    path: "/service-areas",
    en: ["Service Areas", "locations cities counties where"],
  },
  {
    path: "/resources/sell-house-as-is",
    popular: true,
    en: ["Selling Your House As-Is", "as is without repairs cash buyer fast"],
  },
  {
    path: "/resources/sell-inherited-house",
    popular: true,
    en: ["Selling an Inherited House", "inheritance estate heirs family death"],
  },
  {
    path: "/resources/probate-guide",
    popular: true,
    en: ["Understanding Probate Sales", "probate estate court inherited legal"],
    es: ["Guía de Sucesiones y Propiedades Heredadas", "sucesión heredada herencia testamento juzgado"],
    el: ["Οδηγός Κληρονομημένων Ακινήτων και Probate", "κληρονομιά κληρονομημένο probate κληρονόμοι"],
    sq: ["Udhëzues për Pronat e Trashëguara dhe Probate", "trashëgimi pronë e trashëguar probate"],
  },
  {
    path: "/resources/selling-house-needs-repairs",
    popular: true,
    en: ["Selling a House That Needs Repairs", "repair roof foundation water mold damaged"],
  },
  {
    path: "/resources/sell-fire-damaged-house",
    popular: true,
    en: ["Selling a Fire-Damaged House", "fire smoke damage insurance burned"],
  },
  {
    path: "/resources/selling-vacant-house",
    en: ["Selling a Vacant House", "empty unoccupied abandoned"],
  },
  {
    path: "/resources/sell-rental-property",
    en: ["Selling a Rental Property", "landlord tenants lease investment property"],
  },
  {
    path: "/resources/downsizing-your-home",
    popular: true,
    en: ["Downsizing Your Home", "smaller home retire move"],
    es: ["Guía para Mudarse a una Vivienda Más Pequeña", "reducir mudanza vivienda pequeña jubilación"],
    el: ["Οδηγός Μετακόμισης σε Μικρότερο Σπίτι", "μικρότερο σπίτι μετακόμιση συνταξιοδότηση"],
    sq: ["Udhëzues për Kalimin në një Shtëpi më të Vogël", "shtëpi më e vogël zhvendosje pension"],
  },
  {
    path: "/resources/first-time-home-seller-guide",
    popular: true,
    en: ["First-Time Home Seller Guide", "first time selling beginner steps mistakes"],
    es: ["Guía para Vendedores de Vivienda por Primera Vez", "primera vez vender vivienda pasos errores"],
    el: ["Οδηγός για Πωλητές Κατοικίας Πρώτης Φοράς", "πρώτη φορά πώληση σπίτι βήματα"],
    sq: ["Udhëzues për Shitësit e Shtëpisë për Herë të Parë", "herë e parë shitje shtëpi hapa"],
  },
  {
    path: "/resources/property-evaluation",
    en: ["Property Evaluation Guide", "value appraisal offer how determined"],
  },
  {
    path: "/resources/residential-investments",
    en: ["Residential Investments", "invest homes buy hold"],
    es: ["Guía de Inversiones Residenciales", "invertir inversión residencial casas"],
    el: ["Οδηγός Επενδύσεων σε Κατοικίες", "επενδύσεις κατοικίες σπίτια"],
    sq: ["Udhëzues për Investimet Rezidenciale", "investime rezidenciale shtëpi"],
  },
  {
    path: "/resources/commercial-investments",
    en: ["Commercial Investments", "commercial office retail industrial invest"],
  },
  {
    path: "/resources/rental-strategies",
    en: ["Rental Property Strategies", "rent landlord income cash flow"],
  },
  {
    path: "/resources/michigan-guides",
    en: ["Michigan Real Estate Guides", "michigan communities local guides"],
    es: ["Guías de Bienes Raíces de Michigan", "michigan guías comunidades"],
    el: ["Οδηγοί Ακινήτων Michigan", "michigan οδηγοί περιοχές"],
    sq: ["Udhëzues për Pasuritë e Paluajtshme në Michigan", "michigan udhëzues komunitete"],
  },
  {
    path: "/resources/homeowner-guides",
    popular: true,
    en: ["Homeowner Guides", "all guides articles selling"],
    es: ["Guías para Propietarios", "guías propietarios vender artículos"],
    el: ["Οδηγοί για Ιδιοκτήτες", "οδηγοί ιδιοκτήτες πώληση"],
    sq: ["Udhëzues për Pronarët", "udhëzues pronarë shitje"],
  },
  {
    path: "/resources",
    en: ["Resource Center", "guides learn information"],
    es: ["Recursos", "recursos guías información"],
    el: ["Πληροφορίες", "οδηγοί πληροφορίες"],
    sq: ["Burime", "burime udhëzues informacion"],
  },
  {
    path: "/services",
    popular: true,
    en: ["Our Services", "buy houses cash renovate rental commercial"],
    es: ["Servicios", "servicios comprar casas efectivo renovación"],
    el: ["Υπηρεσίες", "υπηρεσίες αγορά σπιτιών μετρητά"],
    sq: ["Shërbimet", "shërbime blerje shtëpish para në dorë"],
  },
  {
    path: "/projects",
    en: ["Projects", "portfolio properties investments"],
    es: ["Proyectos", "proyectos propiedades portafolio"],
    el: ["Έργα", "έργα ακίνητα χαρτοφυλάκιο"],
    sq: ["Projektet", "projekte prona portofol"],
  },
  {
    path: "/investment-focus/residential",
    en: ["Residential Investment Focus", "homes single family townhomes"],
  },
  {
    path: "/investment-focus/rentals",
    en: ["Rental Investment Focus", "duplex multifamily landlord"],
  },
  {
    path: "/investment-focus/commercial",
    en: ["Commercial Investment Focus", "office retail industrial"],
  },
  {
    path: "/about",
    en: ["About FAHOPROSO", "company who we are team"],
    es: ["Nosotros", "quiénes somos empresa equipo"],
    el: ["Σχετικά με Εμάς", "εταιρεία ποιοι είμαστε ομάδα"],
    sq: ["Rreth Nesh", "kompania kush jemi ekipi"],
  },
  {
    path: "/faq",
    en: ["Frequently Asked Questions", "faq questions answers fees closing"],
    es: ["Preguntas Frecuentes", "preguntas respuestas cierre comisiones"],
    el: ["Συχνές Ερωτήσεις", "ερωτήσεις απαντήσεις κλείσιμο"],
    sq: ["Pyetje të Shpeshta", "pyetje përgjigje mbyllje"],
  },
  {
    path: "/contact",
    popular: true,
    en: ["Contact Us / Get a Cash Offer", "phone email offer message address"],
    es: ["Contacto / Solicite una Oferta", "contacto teléfono oferta mensaje"],
    el: ["Επικοινωνία / Ζητήστε Προσφορά", "επικοινωνία τηλέφωνο προσφορά"],
    sq: ["Kontakt / Kërkoni një Ofertë", "kontakt telefon ofertë mesazh"],
  },
  {
    path: "/reviews",
    en: ["Customer Reviews", "testimonials feedback google"],
  },
];

const copy = {
  en: {
    title: "What are you looking for?",
    sub: "Search our guides and pages, or start with a popular topic.",
    placeholder: "Try: probate, repairs, fire damage, Grand Rapids",
    popular: "Popular topics",
    empty: "We couldn't find a match. Contact us and we'll be glad to help.",
    contact: "Contact us",
    label: "Search the website",
  },
  es: {
    title: "¿Qué está buscando?",
    sub: "Busque en nuestras guías y páginas, o empiece con un tema popular.",
    placeholder: "Pruebe: sucesión, reparaciones, herencia",
    popular: "Temas populares",
    empty: "No encontramos resultados. Contáctenos y con gusto le ayudamos.",
    contact: "Contáctenos",
    label: "Buscar en el sitio web",
  },
  el: {
    title: "Τι ψάχνετε;",
    sub: "Αναζητήστε στους οδηγούς και τις σελίδες μας ή ξεκινήστε από ένα δημοφιλές θέμα.",
    placeholder: "Δοκιμάστε: κληρονομιά, επισκευές, υπηρεσίες",
    popular: "Δημοφιλή θέματα",
    empty: "Δεν βρέθηκαν αποτελέσματα. Επικοινωνήστε μαζί μας και θα χαρούμε να βοηθήσουμε.",
    contact: "Επικοινωνήστε μαζί μας",
    label: "Αναζήτηση στον ιστότοπο",
  },
  sq: {
    title: "Çfarë po kërkoni?",
    sub: "Kërkoni në udhëzuesit dhe faqet tona ose filloni me një temë të njohur.",
    placeholder: "Provoni: trashëgimi, riparime, shërbime",
    popular: "Tema të njohura",
    empty: "Nuk u gjet asgjë. Na kontaktoni dhe do t'ju ndihmojmë me kënaqësi.",
    contact: "Na kontaktoni",
    label: "Kërko në faqe",
  },
} as const;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export default function SiteFinder({ locale = "en" }: { locale?: Locale }) {
  const [query, setQuery] = useState("");
  const text = copy[locale];

  const pages = useMemo(
    () =>
      entries.flatMap((entry) => {
        const data = entry[locale];
        if (!data) return [];
        return [
          {
            href: locale === "en" ? entry.path : `/${locale}${entry.path}`,
            label: data[0],
            haystack: normalize(`${data[0]} ${data[1]}`),
            popular: Boolean(entry.popular),
          },
        ];
      }),
    [locale]
  );

  const terms = normalize(query).split(/\s+/).filter(Boolean);
  // Rank pages by how many search words they match; show best matches first.
  const results = terms.length
    ? pages
        .map((page) => ({
          page,
          score: terms.filter((term) => page.haystack.includes(term)).length,
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.page)
    : pages.filter((page) => page.popular);

  const contactHref = locale === "en" ? "/contact" : `/${locale}/contact`;

  return (
    <section
      aria-labelledby="site-finder-title"
      className="border-t border-slate-200 bg-slate-50 py-14"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          id="site-finder-title"
          className="text-3xl font-bold text-[#14213D]"
        >
          {text.title}
        </h2>

        <p className="mt-3 text-slate-600">{text.sub}</p>

        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="relative mx-auto mt-8 max-w-2xl"
        >
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C9A227]"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={text.placeholder}
            aria-label={text.label}
            autoComplete="off"
            className="w-full rounded-full border border-slate-300 bg-white py-4 pl-14 pr-6 text-base text-slate-900 shadow-sm outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
          />
        </form>

        <p
          className={`mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A227] ${
            terms.length ? "invisible" : ""
          }`}
        >
          {text.popular}
        </p>

        <ul
          aria-live="polite"
          className="mt-4 flex flex-wrap justify-center gap-3"
        >
          {results.slice(0, 10).map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-[#C9A227] hover:text-[#14213D]"
              >
                {page.label}
                <ArrowRight className="h-4 w-4 text-[#C9A227] transition group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>

        {terms.length > 0 && results.length === 0 && (
          <p className="mt-6 text-slate-600">
            {text.empty}{" "}
            <Link
              href={contactHref}
              className="font-semibold text-[#14213D] underline"
            >
              {text.contact}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
