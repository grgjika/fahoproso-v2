"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  CircleHelp,
  FolderKanban,
  Globe2,
  Home,
  LockKeyhole,
  MapPinned,
  Menu,
  Phone,
  X,
} from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type NavbarProps = {
  locale?: Locale;
};

const navText = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    resources: "Resources",

    explore: "Explore FAHOPROSO",
    exploreDescription:
      "Guides, answers, projects, and service areas.",

    allResources: "All Resources",
    allResourcesDescription: "Explore every guide and article",

    homeownerGuides: "Homeowner Guides",
    homeownerGuidesDescription:
      "Helpful information for property owners",

    investmentInsights: "Investment Insights",
    investmentInsightsDescription:
      "Residential and commercial investing",

    michiganGuides: "Michigan Guides",
    michiganGuidesDescription:
      "Explore the areas we currently serve",

    faqs: "FAQs",
    faqsDescription:
      "Answers to common property questions",

    projects: "Projects",
    serviceAreas: "Service Areas",

    contactUs: "Contact Us",
    callUs: "Call Us",
    language: "Language",
  },

  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    resources: "Recursos",

    explore: "Explore FAHOPROSO",
    exploreDescription:
      "Guías, respuestas, proyectos y áreas de servicio.",

    allResources: "Todos los Recursos",
    allResourcesDescription:
      "Explore todas nuestras guías y artículos",

    homeownerGuides: "Guías para Propietarios",
    homeownerGuidesDescription:
      "Información útil para propietarios de inmuebles",

    investmentInsights: "Información para Inversionistas",
    investmentInsightsDescription:
      "Inversiones residenciales y comerciales",

    michiganGuides: "Guías de Michigan",
    michiganGuidesDescription:
      "Explore las áreas que actualmente atendemos",

    faqs: "Preguntas Frecuentes",
    faqsDescription:
      "Respuestas a preguntas comunes sobre propiedades",

    projects: "Proyectos",
    serviceAreas: "Áreas de Servicio",

    contactUs: "Contáctenos",
    callUs: "Llámenos",
    language: "Idioma",
  },

  el: {
    home: "Αρχική",
    about: "Σχετικά με Εμάς",
    services: "Υπηρεσίες",
    resources: "Πληροφορίες",

    explore: "Εξερευνήστε τη FAHOPROSO",
    exploreDescription:
      "Οδηγοί, απαντήσεις, έργα και περιοχές εξυπηρέτησης.",

    allResources: "Όλες οι Πληροφορίες",
    allResourcesDescription:
      "Εξερευνήστε όλους τους οδηγούς και τα άρθρα μας",

    homeownerGuides: "Οδηγοί για Ιδιοκτήτες",
    homeownerGuidesDescription:
      "Χρήσιμες πληροφορίες για ιδιοκτήτες ακινήτων",

    investmentInsights: "Επενδυτικές Πληροφορίες",
    investmentInsightsDescription:
      "Επενδύσεις σε οικιστικά και επαγγελματικά ακίνητα",

    michiganGuides: "Οδηγοί Michigan",
    michiganGuidesDescription:
      "Εξερευνήστε τις περιοχές που εξυπηρετούμε",

    faqs: "Συχνές Ερωτήσεις",
    faqsDescription:
      "Απαντήσεις σε συχνές ερωτήσεις σχετικά με ακίνητα",

    projects: "Έργα",
    serviceAreas: "Περιοχές Εξυπηρέτησης",

    contactUs: "Επικοινωνήστε Μαζί μας",
    callUs: "Καλέστε μας",
    language: "Γλώσσα",
  },

  sq: {
    home: "Kryefaqja",
    about: "Rreth Nesh",
    services: "Shërbimet",
    resources: "Burime",

    explore: "Eksploroni FAHOPROSO",
    exploreDescription:
      "Udhëzues, përgjigje, projekte dhe zona shërbimi.",

    allResources: "Të Gjitha Burimet",
    allResourcesDescription:
      "Eksploroni të gjithë udhëzuesit dhe artikujt",

    homeownerGuides: "Udhëzues për Pronarët",
    homeownerGuidesDescription:
      "Informacion i dobishëm për pronarët e pronave",

    investmentInsights: "Informacion për Investime",
    investmentInsightsDescription:
      "Investime rezidenciale dhe komerciale",

    michiganGuides: "Udhëzues për Michigan",
    michiganGuidesDescription:
      "Eksploroni zonat që aktualisht shërbejmë",

    faqs: "Pyetje të Shpeshta",
    faqsDescription:
      "Përgjigje për pyetjet e zakonshme rreth pronave",

    projects: "Projektet",
    serviceAreas: "Zonat e Shërbimit",

    contactUs: "Na Kontaktoni",
    callUs: "Na Telefononi",
    language: "Gjuha",
  },
};

export default function Navbar({ locale = "en" }: NavbarProps) {
  const pathname = usePathname();
  const text = navText[locale];

  const [showLanguage, setShowLanguage] = useState(false);
  const [showMobileLanguage, setShowMobileLanguage] =
    useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showMobileResources, setShowMobileResources] =
    useState(false);

  const localePrefix = locale === "en" ? "" : `/${locale}`;

   const mainNavigation = [
  {
    name: text.home,
    href: locale === "en" ? "/" : `/${locale}`,
  },
  {
    name: text.about,
    href: `${localePrefix}/about`,
  },
  {
    name: text.services,
    href: `${localePrefix}/services`,
  },
  ];

  const resourceNavigation = [
    {
      name: text.allResources,
      description: text.allResourcesDescription,
      href: `${localePrefix}/resources`,
      icon: BookOpen,
    },
    {
      name: text.homeownerGuides,
      description: text.homeownerGuidesDescription,
      href: `${localePrefix}/resources/homeowner-guides`,
      icon: Home,
    },
   {
      name: text.investmentInsights,
      description: text.investmentInsightsDescription,
      href: `${localePrefix}/resources/residential-investments`,
      icon: BriefcaseBusiness,
    },
    
    {
      name: text.faqs,
      description: text.faqsDescription,
      href: `${localePrefix}/faq`,
      icon: CircleHelp,
    },
  ];

  const additionalNavigation = [
    {
      name: text.projects,
      href: `${localePrefix}/projects`,
      icon: FolderKanban,
    },
    {
      name: text.serviceAreas,
      href: "/service-areas",
      icon: MapPinned,
    },
  ];

  const closeMenu = () => {
    setShowLanguage(false);
    setShowMobileLanguage(false);
    setIsOpen(false);
    setShowPhone(false);
    setShowResources(false);
    setShowMobileResources(false);
  };

  const currentLanguage =
    pathname === "/el" || pathname.startsWith("/el/")
      ? "EL"
      : pathname === "/es" || pathname.startsWith("/es/")
        ? "ES"
        : pathname === "/sq" || pathname.startsWith("/sq/")
          ? "SQ"
          : "EN";

  const languages = [
    {
      code: "EN",
      label: "English",
      href: "/",
    },
    {
      code: "ES",
      label: "Español",
      href: "/es",
    },
    {
      code: "EL",
      label: "Ελληνικά",
      href: "/el",
    },
    {
      code: "SQ",
      label: "Shqip",
      href: "/sq",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href={locale === "en" ? "/" : `/${locale}`}
          onClick={closeMenu}
          aria-label="FAHOPROSO homepage"
          className="shrink-0"
        >
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO"
            width={290}
            height={70}
            priority
            className="h-auto w-[195px] sm:w-[220px] md:w-[245px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-slate-700 transition hover:text-[#C9A227] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button
              type="button"
              onClick={() =>
                setShowResources((current) => !current)
              }
              aria-expanded={showResources}
              aria-haspopup="true"
              className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-[#C9A227]"
            >
              {text.resources}

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  showResources ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-[390px] -translate-x-1/2 pt-5 transition-all duration-200 ${
                showResources
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">

                <div className="px-3 pb-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                    {text.explore}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {text.exploreDescription}
                  </p>
                </div>

                <div className="space-y-1">
                  {resourceNavigation.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/40 hover:bg-[#FFF9EC] hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-[#C9A227]">
                          <Icon className="h-5 w-5 text-[#14213D]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-[#14213D]">
                            {item.name}
                          </p>

                          <p className="mt-0.5 text-sm text-slate-500">
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight className="h-4 w-4 shrink-0 text-[#C9A227] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    );
                  })}
                </div>

                <div className="my-3 border-t border-slate-200" />

                <div className="grid grid-cols-2 gap-2">
                  {additionalNavigation.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227] hover:bg-slate-50 hover:text-[#14213D] hover:shadow-sm"
                      >
                        <Icon className="h-5 w-5 text-[#C9A227]" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                {/* Team Login */}
                <div className="mt-3 border-t border-slate-200 pt-3">
                  <a
                    href="https://fahoproso-app.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-[#14213D]"
                  >
                    <span className="flex items-center gap-3">
                      <LockKeyhole className="h-4 w-4 text-[#C9A227]" />
                      Login
                    </span>

                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Language Selector */}
          <div
            className="relative"
            onMouseEnter={() => setShowLanguage(true)}
            onMouseLeave={() => setShowLanguage(false)}
          >
            <button
              type="button"
              onClick={() =>
                setShowLanguage((current) => !current)
              }
              aria-expanded={showLanguage}
              aria-haspopup="true"
              aria-label="Choose language"
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3 py-2.5 font-semibold text-slate-700 transition hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              <Globe2 className="h-4 w-4" />

              {currentLanguage}

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showLanguage ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-full w-44 pt-3 transition-all duration-200 ${
                showLanguage
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={language.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                      currentLanguage === language.code
                        ? "bg-[#FFF9EC] text-[#14213D]"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{language.label}</span>

                    <span className="text-xs font-bold text-[#C9A227]">
                      {language.code}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <Link
            href={`${localePrefix}/contact`}
            className="rounded-xl bg-[#C9A227] px-5 py-3 font-semibold text-[#14213D] transition hover:bg-[#b89220] hover:shadow-lg"
          >
            {text.contactUs}
          </Link>

          {/* Phone Popup */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setShowPhone((current) => !current)
              }
              aria-label="Show FAHOPROSO phone number"
              aria-expanded={showPhone}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
            >
              <Phone className="h-5 w-5" />
            </button>

            {showPhone && (
              <div className="absolute right-0 top-14 w-56 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {text.callUs}
                </p>

                <a
                  href="tel:+16162754443"
                  className="mt-2 block text-lg font-bold text-[#14213D] transition hover:text-[#C9A227]"
                >
                  (616) 275-4443
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setIsOpen((current) => !current)
          }
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-900 transition hover:border-[#C9A227] hover:text-[#C9A227] lg:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[950px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:px-6">

          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#C9A227]"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Resources */}
          <button
            type="button"
            onClick={() =>
              setShowMobileResources(
                (current) => !current
              )
            }
            aria-expanded={showMobileResources}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#C9A227]"
          >
            {text.resources}

            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${
                showMobileResources ? "rotate-180" : ""
              }`}
            />
          </button>

          {showMobileResources && (
            <div className="ml-2 space-y-2 border-l-2 border-[#C9A227]/40 pl-3">

              {resourceNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-slate-600 transition hover:border-[#C9A227]/30 hover:bg-[#FFF9EC] hover:text-[#14213D]"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#C9A227]" />
                    {item.name}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-slate-200" />

              {additionalNavigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#C9A227]"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#C9A227]" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Mobile Language Selector */}
          <div className="mt-2">
            <button
              type="button"
              onClick={() =>
                setShowMobileLanguage(
                  (current) => !current
                )
              }
              aria-expanded={showMobileLanguage}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-700"
            >
              <span className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-[#C9A227]" />
                {text.language}
              </span>

              <span className="flex items-center gap-2">
                {currentLanguage}

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    showMobileLanguage
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </span>
            </button>

            {showMobileLanguage && (
              <div className="mt-2 space-y-1 rounded-xl bg-slate-50 p-2">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={language.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium ${
                      currentLanguage === language.code
                        ? "bg-[#FFF9EC] text-[#14213D]"
                        : "text-slate-600 hover:bg-white"
                    }`}
                  >
                    {language.label}

                    <span className="font-bold text-[#C9A227]">
                      {language.code}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`${localePrefix}/contact`}
            onClick={closeMenu}
            className="mt-3 rounded-xl bg-[#C9A227] px-5 py-3 text-center font-semibold text-[#14213D] transition hover:bg-[#b89220]"
          >
            {text.contactUs}
          </Link>

          <a
            href="tel:+16162754443"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-[#C9A227] hover:text-[#C9A227]"
          >
            <Phone className="h-5 w-5" />
            (616) 275-4443
          </a>
        </div>
      </div>
    </header>
  );
}