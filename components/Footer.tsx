"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { FaStar } from "react-icons/fa";

type Locale = "en" | "es" | "el" | "sq";

type FooterProps = {
  locale?: Locale;
};

const content = {
  en: {
    tagline1: "Investing in Real Estate.",
    tagline2: "Creating Opportunities.",
    showPhone: "Show phone number",

    navigation: "Navigation",
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    faq: "FAQ",
    contact: "Contact",

    servicesTitle: "Services",
    residential: "Residential Investments",
    commercial: "Commercial Real Estate",
    rentals: "Rental Properties",
    solutions: "Property Solutions",

    serviceAreas: "Service Areas",
    kent: "Sell Your House in Kent County",
    ottawa: "Sell Your House in Ottawa County",
    grandRapids: "Sell Your House in Grand Rapids",
    troy: "Sell Your House in Troy",
    michigan: "Sell Your House in Michigan",

    connect: "Connect",
    call: "Call FAHOPROSO",

    rights: "All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },

  es: {
    tagline1: "Invirtiendo en Bienes Raíces.",
    tagline2: "Creando Oportunidades.",
    showPhone: "Mostrar número de teléfono",

    navigation: "Navegación",
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    faq: "Preguntas Frecuentes",
    contact: "Contacto",

    servicesTitle: "Servicios",
    residential: "Inversiones Residenciales",
    commercial: "Bienes Raíces Comerciales",
    rentals: "Propiedades de Alquiler",
    solutions: "Soluciones Inmobiliarias",

    serviceAreas: "Áreas de Servicio",
    kent: "Venda su Casa en Kent County",
    ottawa: "Venda su Casa en Ottawa County",
    grandRapids: "Venda su Casa en Grand Rapids",
    troy: "Venda su Casa en Troy",
    michigan: "Venda su Casa en Michigan",

    connect: "Conéctese",
    call: "Llame a FAHOPROSO",

    rights: "Todos los Derechos Reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
  },

  el: {
    tagline1: "Επενδύουμε στα Ακίνητα.",
    tagline2: "Δημιουργούμε Ευκαιρίες.",
    showPhone: "Εμφάνιση τηλεφώνου",

    navigation: "Πλοήγηση",
    home: "Αρχική",
    about: "Σχετικά με Εμάς",
    services: "Υπηρεσίες",
    projects: "Έργα",
    faq: "Συχνές Ερωτήσεις",
    contact: "Επικοινωνία",

    servicesTitle: "Υπηρεσίες",
    residential: "Επενδύσεις σε Κατοικίες",
    commercial: "Επαγγελματικά Ακίνητα",
    rentals: "Ακίνητα προς Ενοικίαση",
    solutions: "Λύσεις Ακινήτων",

    serviceAreas: "Περιοχές Εξυπηρέτησης",
    kent: "Πουλήστε το Σπίτι σας στο Kent County",
    ottawa: "Πουλήστε το Σπίτι σας στο Ottawa County",
    grandRapids: "Πουλήστε το Σπίτι σας στο Grand Rapids",
    troy: "Πουλήστε το Σπίτι σας στο Troy",
    michigan: "Πουλήστε το Σπίτι σας στο Michigan",

    connect: "Συνδεθείτε",
    call: "Καλέστε τη FAHOPROSO",

    rights: "Με Επιφύλαξη Παντός Δικαιώματος.",
    privacy: "Πολιτική Απορρήτου",
    terms: "Όροι & Προϋποθέσεις",
  },

  sq: {
    tagline1: "Investojmë në Pasuri të Paluajtshme.",
    tagline2: "Krijojmë Mundësi.",
    showPhone: "Shfaq numrin e telefonit",

    navigation: "Navigimi",
    home: "Kryefaqja",
    about: "Rreth Nesh",
    services: "Shërbimet",
    projects: "Projektet",
    faq: "Pyetje të Shpeshta",
    contact: "Kontakt",

    servicesTitle: "Shërbimet",
    residential: "Investime Rezidenciale",
    commercial: "Pasuri të Paluajtshme Komerciale",
    rentals: "Prona me Qira",
    solutions: "Zgjidhje për Pronat",

    serviceAreas: "Zonat e Shërbimit",
    kent: "Shisni Shtëpinë Tuaj në Kent County",
    ottawa: "Shisni Shtëpinë Tuaj në Ottawa County",
    grandRapids: "Shisni Shtëpinë Tuaj në Grand Rapids",
    troy: "Shisni Shtëpinë Tuaj në Troy",
    michigan: "Shisni Shtëpinë Tuaj në Michigan",

    connect: "Lidhuni me Ne",
    call: "Telefononi FAHOPROSO",

    rights: "Të Gjitha të Drejtat e Rezervuara.",
    privacy: "Politika e Privatësisë",
    terms: "Termat & Kushtet",
  },
};

export default function Footer({ locale = "en" }: FooterProps) {
  const text = content[locale];

  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer className="border-t border-slate-200 bg-neutral-200 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">

        {/* Company */}
        <div>
          <Image
            src="/images/logo-transparent.png"
            alt="FAHOPROSO"
            width={250}
            height={70}
            className="mb-6 h-auto"
          />

          <p className="leading-7 text-slate-600">
            {text.tagline1}
            <br />
            {text.tagline2}
          </p>

          <div className="mt-6 h-1 w-16 rounded-full bg-[#C9A227]" />

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#C9A227]" />
              <span>Grand Rapids, Michigan</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#C9A227]" />

              <button
                type="button"
                onClick={() => setShowPhone((current) => !current)}
                className="transition hover:text-[#C9A227]"
              >
                {text.showPhone}
              </button>
            </div>

            {showPhone && (
              <div className="ml-8 rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm">
                <a
                  href="tel:+16162754443"
                  className="font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                >
                  (616) 275-4443
                </a>
              </div>
            )}

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#C9A227]" />

              <a
                href="mailto:offers@fahoproso.com"
                className="transition hover:text-[#C9A227]"
              >
                offers@fahoproso.com
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {text.navigation}
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/" className="transition hover:text-[#C9A227]">
                {text.home}
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="transition hover:text-[#C9A227]"
              >
                {text.about}
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="transition hover:text-[#C9A227]"
              >
                {text.services}
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="transition hover:text-[#C9A227]"
              >
                {text.projects}
              </Link>
            </li>

            <li>
              <Link
                href="/faq"
                className="transition hover:text-[#C9A227]"
              >
                {text.faq}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition hover:text-[#C9A227]"
              >
                {text.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {text.servicesTitle}
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

          <ul className="mt-6 space-y-3">
            <li>{text.residential}</li>
            <li>{text.commercial}</li>
            <li>{text.rentals}</li>
            <li>{text.solutions}</li>
          </ul>
        </div>

        {/* Service Areas */}
<div>
  <h3 className="text-xl font-bold text-slate-900">
    {text.serviceAreas}
  </h3>

  <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

  <ul className="mt-6 space-y-3">
    <li>
      <Link
        href="/sell-my-house-kent-county"
        className="transition hover:text-[#C9A227]"
      >
        {text.kent}
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-ottawa-county"
        className="transition hover:text-[#C9A227]"
      >
        {text.ottawa}
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-grand-rapids"
        className="transition hover:text-[#C9A227]"
      >
        {text.grandRapids}
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-troy"
        className="transition hover:text-[#C9A227]"
      >
        {text.troy}
      </Link>
    </li>

    <li>
      <Link
        href="/sell-my-house-michigan"
        className="transition hover:text-[#C9A227]"
      >
        {text.michigan}
      </Link>
    </li>
  </ul>
</div>

        {/* Connect */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {text.connect}
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#C9A227]" />

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/Fahoproso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit FAHOPROSO on Facebook"
              className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
            >
              <Globe className="h-5 w-5" />
            </a>
            

                <a
                href="https://g.page/r/Cdu7vBWv41J6EBM/review"
                  aria-label="Leave a review for FAHOPROSO on Google"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex flex-col items-center gap-2"
                >
                 <div className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white">
                 <FaStar className="text-2xl text-[#C9A227] group-hover:text-white" />
                 </div>
                </a>
              

             <Link
               href="/contact"
               aria-label="Contact FAHOPROSO"
               className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
>
               <Mail className="h-5 w-5" />
             </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPhone((current) => !current)}
                aria-label="Show FAHOPROSO phone number"
                aria-expanded={showPhone}
                className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:border-[#C9A227] hover:bg-[#C9A227] hover:text-white"
              >
                <Phone className="h-5 w-5" />
                
              </button>
              
              {showPhone && (
                <div className="absolute bottom-14 right-0 w-52 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {text.call}
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
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">
  <p>
    © 2026 FAHOPROSO | Faithfull Home & Property Solutions, LLC.
    {text.rights}
  </p>

  <div className="flex gap-6">
    <Link
      href="/privacy"
      className="transition hover:text-[#C9A227]"
    >
      {text.privacy}
    </Link>

    <Link
      href="/terms"
      className="transition hover:text-[#C9A227]"
    >
      {text.terms}
    </Link>
  </div>
</div>
    </footer>
  );
}