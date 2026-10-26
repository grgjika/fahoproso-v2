import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import type { LocationData, LocationSlug } from "./types";

const nearbyLabels: Record<LocationSlug, { label: string; text: string }> = {
  "sell-my-house-michigan": {
    label: "Selling in Michigan",
    text: "How disclosure, closing, taxes and probate work across the state.",
  },
  "sell-my-house-grand-rapids": {
    label: "Grand Rapids",
    text: "Neighborhoods, older homes and rentals inside the city.",
  },
  "sell-my-house-kent-county": {
    label: "Kent County",
    text: "The city, its suburbs and the surrounding townships.",
  },
  "sell-my-house-ottawa-county": {
    label: "Ottawa County",
    text: "Lakeshore towns, Holland, Zeeland and Hudsonville.",
  },
  "sell-my-house-troy": {
    label: "Troy",
    text: "Oakland County and the Detroit suburbs.",
  },
};

const steps = [
  {
    title: "Contact Us",
    text: "Send us the address and a few details, or call us.",
  },
  {
    title: "We Look at the House",
    text: "We look at its condition, where it is and what you want.",
  },
  {
    title: "Talk About Your Options",
    text: "We explain what we can offer and answer your questions.",
  },
  {
    title: "Decide When You're Ready",
    text: "You choose if you want to move forward, and when.",
  },
];

const guides = [
  ["Selling a house as-is", "/resources/sell-house-as-is"],
  ["Selling a house that needs repairs", "/resources/selling-house-needs-repairs"],
  ["Selling an inherited house", "/resources/sell-inherited-house"],
  ["Understanding probate", "/resources/probate-guide"],
  ["Selling a fire-damaged house", "/resources/sell-fire-damaged-house"],
] as const;

export function locationMetadata(data: LocationData): Metadata {
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `https://www.fahoproso.com/${data.slug}/`,
    },
  };
}

export default function LocationPage({ data }: { data: LocationData }) {
  const others = data.nearby.filter((slug) => slug !== data.slug);

  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative flex min-h-[620px] items-center overflow-hidden">
          <Image
            src={data.heroImage}
            alt={data.heroAlt}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/85 to-[#14213D]/40" />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <MapPin className="h-4 w-4 text-[#C9A227]" />
                <span className="text-sm font-medium">{data.badge}</span>
              </div>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
                Sell Your House
                <span className="block text-[#C9A227]">in {data.place}</span>
              </h1>

              <div className="mt-6 h-1 w-24 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
                {data.leadA}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {data.leadB}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
                >
                  Ask for a Free Offer
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#14213D]"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                {data.overview.eyebrow}
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                {data.overview.title}
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                {data.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                {data.overview.asideTitle}
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                {data.overview.asideItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A227]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SITUATIONS */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Why People Sell
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                {data.situations.title}
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 text-lg leading-8 text-slate-600">
                {data.situations.intro}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.situations.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT TO KNOW */}
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Good to Know
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                {data.know.title}
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 text-lg leading-8 text-slate-300">
                {data.know.intro}
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {data.know.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Simple Process With No Pressure
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227] text-lg font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#14213D]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITIES */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Where We Work
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
              {data.communities.title}
            </h2>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              {data.communities.text}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {data.communities.list.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Questions About Selling in {data.place}
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mt-14 space-y-6">
              {data.faqs.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
                >
                  <h3 className="text-xl font-bold text-[#14213D]">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-slate-100 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#14213D]">
                Other Areas We Serve
              </h2>

              <ul className="mt-6 space-y-3">
                {others.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${slug}`}
                      className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white px-5 py-4 transition hover:border-[#C9A227]"
                    >
                      <span>
                        <span className="block font-semibold text-[#14213D]">
                          {nearbyLabels[slug].label}
                        </span>
                        <span className="block text-sm text-slate-500">
                          {nearbyLabels[slug].text}
                        </span>
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A227] transition group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#14213D]">
                Helpful Guides
              </h2>

              <ul className="mt-6 space-y-3">
                {guides.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-center justify-between rounded-xl border border-slate-300 bg-white px-5 py-4 font-medium text-slate-800 transition hover:border-[#C9A227]"
                    >
                      {label}
                      <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A227] transition group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Thinking About Selling in {data.place}?
            </h2>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about your house. There is no obligation, and you
              decide what happens next.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
            >
              Contact FAHOPROSO
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
