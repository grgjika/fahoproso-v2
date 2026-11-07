"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";

import { content as aboutContent, icons as aboutIcons } from "@/components/About";
import {
  content as servicesContent,
  serviceDetails,
} from "@/components/Services";
import { content as footerContent } from "@/components/Footer";
import {
  content as whyContent,
  benefitDetails,
} from "@/components/WhyChooseUs";
import { content as faqContent } from "@/components/FAQ";

type Locale = "en" | "es" | "el" | "sq";

const labels = {
  en: {
    aboutLink: "Learn more about us",
    servicesLink: "View all services",
    whyLink: "More about FAHOPROSO",
    faqLink: "See all questions",
  },
  es: {
    aboutLink: "Conozca más sobre nosotros",
    servicesLink: "Ver todos los servicios",
    whyLink: "Más sobre FAHOPROSO",
    faqLink: "Ver todas las preguntas",
  },
  el: {
    aboutLink: "Μάθετε περισσότερα για εμάς",
    servicesLink: "Δείτε όλες τις υπηρεσίες",
    whyLink: "Περισσότερα για τη FAHOPROSO",
    faqLink: "Δείτε όλες τις ερωτήσεις",
  },
  sq: {
    aboutLink: "Mësoni më shumë për ne",
    servicesLink: "Shikoni të gjitha shërbimet",
    whyLink: "Më shumë për FAHOPROSO",
    faqLink: "Shikoni të gjitha pyetjet",
  },
} as const;

function TextLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-semibold text-[#14213D] underline-offset-4 hover:underline"
    >
      {children}
      <ArrowRight className="h-4 w-4 text-[#C9A227] transition group-hover:translate-x-1" />
    </Link>
  );
}

export default function HomeSections({ locale = "en" }: { locale?: Locale }) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  const l = labels[locale];
  const about = aboutContent[locale];
  const services = servicesContent[locale];
  const footer = footerContent[locale];
  const why = whyContent[locale];
  const faq = faqContent[locale];
  const areas = [
    { href: "/sell-my-house-kent-county", label: footer.kent },
    { href: "/sell-my-house-grand-rapids", label: footer.grandRapids },
    { href: "/sell-my-house-ottawa-county", label: footer.ottawa },
    { href: "/sell-my-house-troy", label: footer.troy },
    { href: "/sell-my-house-michigan", label: footer.michigan },
  ];

  return (
    <>
      {/* ABOUT SUMMARY */}
      <section id="about" className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <m.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, rotateY: -18, x: -30 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl border-2 border-[#C9A227]/70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/property1.jpg"
                alt="Bright, modern living room"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 max-w-[15rem] rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  FAHOPROSO
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-[#14213D]">
                  Faithful Home &amp; Property Solutions, LLC
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Grand Rapids, Michigan
                </p>
              </div>
            </div>
          </m.div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              {about.eyebrow}
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              {about.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {about.description.split(". ").slice(0, 2).join(". ").replace(/\.?$/, ".")}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {about.cards.map((card, index) => {
                const Icon = aboutIcons[index];
                return (
                  <li
                    key={card.title}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#14213D] to-[#2b3f6e] shadow-lg shadow-slate-900/20">
                      <Icon className="h-5 w-5 text-[#E5C766]" />
                    </span>
                    <span className="font-semibold text-slate-800">
                      {card.title}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <TextLink href={`${prefix}/about`}>{l.aboutLink}</TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-32 bg-slate-50 py-24"
        style={{ perspective: 1400 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              {services.eyebrow}
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />
            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {services.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.services.map((service, index) => {
              const detail = serviceDetails[index];
              const Icon = detail.icon;

              return (
                <m.article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
                  initial={{ opacity: 0, y: 40, rotateX: 18 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={detail.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E5C766] to-[#B8901F] shadow-lg shadow-black/30 ring-2 ring-white/40">
                      <Icon className="h-6 w-6 text-white" />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </m.article>
              );
            })}
          </div>

          <div className="mt-10">
            <TextLink href={`${prefix}/services`}>{l.servicesLink}</TextLink>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section
        id="areas"
        className="relative overflow-hidden bg-[#0e1a33] py-24 text-white"
        style={{ perspective: 1400 }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.2),transparent_55%)]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <MapPin className="mx-auto h-9 w-9 text-[#E5C766]" />
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {footer.serviceAreas}
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((area, index) => (
              <m.div
                key={area.href}
                initial={{ opacity: 0, y: 60, rotateX: 28 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                whileHover={{ y: -10, rotateX: -4 }}
              >
                <Link
                  href={area.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-slate-800/60 p-6 shadow-2xl shadow-black/30 backdrop-blur-md transition hover:border-[#C9A227]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E5C766] to-[#B8901F] shadow-lg shadow-black/40">
                    <MapPin className="h-6 w-6 text-white" />
                  </span>
                  <span className="mt-8 block text-lg font-bold leading-snug">
                    {area.label}
                  </span>
                  <ArrowRight className="mt-4 h-5 w-5 text-[#E5C766] transition group-hover:translate-x-1" />
                </Link>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="bg-white py-24" style={{ perspective: 1400 }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              {why.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {why.titleLine1}
              <br className="hidden sm:block" />
              {why.titleLine2}
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {why.benefits.slice(0, 3).map((benefit, index) => {
              const Icon = benefitDetails[index].icon;
              return (
                <m.article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md"
                  initial={{ opacity: 0, y: 40, rotateX: 18 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14213D] to-[#2b3f6e] shadow-lg shadow-slate-900/20">
                    <Icon className="h-7 w-7 text-[#E5C766]" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </m.article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <TextLink href={`${prefix}/about`}>{l.whyLink}</TextLink>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="scroll-mt-32 bg-[#F5F5F0] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              {faq.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl md:text-5xl">
              {faq.title}
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
          </div>

          <div className="mt-12 space-y-4">
            {faq.faqs.slice(0, 4).map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-[#C9A227] open:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-semibold text-[#14213D]">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#C9A227] transition group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 leading-8 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <TextLink href={`${prefix}/faq`}>{l.faqLink}</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
