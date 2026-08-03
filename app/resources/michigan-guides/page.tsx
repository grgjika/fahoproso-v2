import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Home,
  MapPin,
  MapPinned,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Michigan Real Estate Guides | FAHOPROSO",
  description:
    "Explore FAHOPROSO real estate guides for Kent County, Ottawa County, Grand Rapids, Troy, and communities across Michigan.",
};

const westMichiganGuides = [
  {
    title: "Kent County",
    description:
      "Explore property solutions throughout Grand Rapids, Wyoming, Kentwood, Walker, Grandville, Rockford, Ada, and surrounding communities.",
    href: "/sell-my-house-kent-county",
  },
  {
    title: "Ottawa County",
    description:
      "Learn about property solutions throughout Holland, Grand Haven, Hudsonville, Jenison, Zeeland, Allendale, and nearby communities.",
    href: "/sell-my-house-ottawa-county",
  },
  {
    title: "Grand Rapids",
    description:
      "Explore homeowner information and professional property solutions throughout Grand Rapids.",
    href: "/sell-my-house-grand-rapids",
  },
];

const southeastMichiganGuides = [
  {
    title: "Troy",
    description:
      "Learn about selected residential and investment opportunities in Troy, Michigan.",
    href: "/sell-my-house-troy",
  },
];

export default function MichiganGuidesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}

        <section className="overflow-hidden bg-[#14213D] text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <MapPinned className="h-5 w-5 text-[#C9A227]" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Michigan Resources
                </span>
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Real Estate Guides
                <span className="block text-[#C9A227]">
                  Across Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Explore local homeowner information, service areas, and
                professional property solutions for the Michigan communities
                FAHOPROSO currently serves.
              </p>

              <Link
                href="/service-areas"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white sm:w-auto"
              >
                View Service Areas
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative h-[340px] overflow-hidden rounded-3xl border border-white/15 sm:h-[430px]">
              <Image
                src="/images/process-background.jpg"
                alt="Michigan real estate and property guides"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/90 via-[#14213D]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  Local Knowledge
                </p>

                <p className="mt-3 max-w-md text-2xl font-bold">
                  Helpful information for homeowners and property owners
                  throughout Michigan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statewide Featured Guide */}

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 lg:grid-cols-2">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/hero.jpg"
                  alt="Michigan property solutions"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#14213D]/20" />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]">
                  <Home className="h-7 w-7 text-[#14213D]" />
                </div>

                <p className="mt-7 font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                  Statewide Guide
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#14213D] sm:text-4xl">
                  Sell Your House in Michigan
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Explore FAHOPROSO&apos;s statewide property guide and learn
                  more about our professional approach, expanding service
                  areas, and homeowner resources.
                </p>

                <Link
                  href="/sell-my-house-michigan"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                >
                  Explore Michigan Guide
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* West Michigan */}

        <section className="bg-slate-100 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                West Michigan
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] sm:text-4xl lg:text-5xl">
                Our Primary Service Region
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Explore guides for the West Michigan communities where
                FAHOPROSO currently maintains its strongest local focus.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {westMichiganGuides.map((guide) => (
                <article
                  key={guide.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]/10 transition group-hover:bg-[#C9A227]">
                    <MapPin className="h-7 w-7 text-[#C9A227] transition group-hover:text-[#14213D]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#14213D]">
                    {guide.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {guide.description}
                  </p>

                  <Link
                    href={guide.href}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                  >
                    Explore Guide
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Southeast Michigan */}

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="rounded-3xl bg-[#14213D] p-8 text-white sm:p-10">
              <Building2 className="h-12 w-12 text-[#C9A227]" />

              <p className="mt-7 font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                Southeast Michigan
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Growing Into Selected Markets
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                FAHOPROSO is expanding thoughtfully into selected Michigan
                communities while maintaining a professional and
                location-specific approach.
              </p>
            </div>

            <div className="grid gap-7">
              {southeastMichiganGuides.map((guide) => (
                <article
                  key={guide.title}
                  className="rounded-3xl border border-[#C9A227]/30 bg-[#FFF9EC] p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C9A227]">
                      <MapPin className="h-7 w-7 text-[#14213D]" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-[#14213D]">
                        {guide.title}
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {guide.description}
                      </p>

                      <Link
                        href={guide.href}
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                      >
                        Explore Troy Guide
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}

        <section className="bg-[#14213D] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <MapPinned className="mx-auto h-14 w-14 text-[#C9A227]" />

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Don&apos;t See Your Location?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              FAHOPROSO continues to evaluate selected opportunities across
              Michigan. Tell us where your property is located and what you
              hope to accomplish.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white sm:w-auto"
            >
              Contact FAHOPROSO
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}