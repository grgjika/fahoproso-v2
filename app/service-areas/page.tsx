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
  title: "Service Areas",
  description:
    "Explore the Michigan communities served by FAHOPROSO, including Kent County, Ottawa County, Grand Rapids, Troy, and additional markets across the state.",
};

const secondaryAreas = [
  {
    name: "Ottawa County",
    description:
      "Serving homeowners in Holland, Grand Haven, Hudsonville, Jenison, Zeeland, Allendale, and surrounding communities.",
    href: "/sell-my-house-ottawa-county",
    image: "/images/property2.jpg",
  },
  {
    name: "Grand Rapids",
    description:
      "Professional property solutions for homeowners across Grand Rapids and its established residential neighborhoods.",
    href: "/sell-my-house-grand-rapids",
    image: "/images/hero.jpg",
  },
  {
    name: "Troy",
    description:
      "Evaluating selected residential and investment opportunities in Troy as FAHOPROSO expands across Michigan.",
    href: "/sell-my-house-troy",
    image: "/images/service-commercial.jpg",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Split Hero */}
        <section className="bg-[#14213D] text-white">
          <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <MapPinned className="h-5 w-5 text-[#C9A227]" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Michigan Service Areas
                </span>
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
                Local Property Solutions
                <span className="block text-[#C9A227]">
                  Across Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">
                FAHOPROSO is based in West Michigan and continues to expand
                thoughtfully into selected markets across the state. Explore
                our current focus areas and learn how we help property owners.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss Your Property
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative h-[430px] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <Image
                src="/images/process-background.jpg"
                alt="Michigan real estate service areas"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/85 via-[#14213D]/15 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  Growing With Purpose
                </p>

                <p className="mt-2 max-w-md text-2xl font-bold">
                  Serving West Michigan while expanding into carefully selected
                  communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Area */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid overflow-hidden rounded-3xl border border-slate-300 bg-slate-100 shadow-lg lg:grid-cols-2">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/property1.jpg"
                  alt="Kent County real estate"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#14213D]/15" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]">
                  <Home className="h-7 w-7 text-white" />
                </div>

                <p className="mt-7 font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                  Primary Market
                </p>

                <h2 className="mt-3 text-4xl font-bold text-[#14213D]">
                  Kent County
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Kent County is one of FAHOPROSO&apos;s primary service areas.
                  We work with homeowners throughout Grand Rapids, Wyoming,
                  Kentwood, Walker, Grandville, Rockford, Ada, and surrounding
                  communities.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Whether the property needs repairs, is inherited, vacant,
                  occupied, or simply no longer fits your goals, we are available
                  to discuss practical options.
                </p>

                <Link
                  href="/sell-my-house-kent-county"
                  className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                >
                  Explore Kent County
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Areas */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Additional Markets
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Explore Our Growing Service Network
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are expanding carefully into communities where our approach,
                resources, and investment strategy are a strong fit.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {secondaryAreas.map((area) => (
                <article
                  key={area.name}
                  className="group overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={area.image}
                      alt={`${area.name} real estate service area`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-6 flex items-center gap-2 text-white">
                      <MapPin className="h-5 w-5 text-[#C9A227]" />

                      <h3 className="text-2xl font-bold">{area.name}</h3>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="leading-8 text-slate-600">
                      {area.description}
                    </p>

                    <Link
                      href={area.href}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                    >
                      View Service Area
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Michigan Coverage */}
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Statewide Opportunities
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Have a Property Elsewhere in Michigan?
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                Even if your property is outside one of our primary markets,
                contact us. FAHOPROSO reviews selected opportunities throughout
                Michigan and may be able to assist based on the location,
                property type, condition, and your goals.
              </p>

              <Link
                href="/sell-my-house-michigan"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Explore Michigan Coverage
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-800/60 p-8">
              <Building2 className="h-12 w-12 text-[#C9A227]" />

              <h3 className="mt-6 text-2xl font-bold">
                Residential and Investment Properties
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                We review residential homes, rental properties, multifamily
                opportunities, and selected commercial real estate throughout
                Michigan.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-4xl font-bold text-[#14213D] md:text-5xl">
              Let&apos;s Talk About Your Property
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Tell us where your property is located and what you are hoping to
              accomplish. We will review the information and contact you about
              possible next steps.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#14213D] px-8 py-4 font-semibold text-white transition hover:bg-[#C9A227] hover:text-[#14213D]"
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