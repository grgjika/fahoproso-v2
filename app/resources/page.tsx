import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Home, Building2, MapPinned, ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Real Estate Resources | FAHOPROSO",
  description:
    "Helpful real estate resources, homeowner guides, investment insights, and Michigan market information from FAHOPROSO.",
};

const homeownerResources = [
  {
    title: "Selling an Inherited House",
    href: "/resources/sell-inherited-house",
  },
  {
    title: "Selling Your House As-Is",
    href: "/resources/sell-house-as-is",
  },
  {
    title: "Understanding Probate Sales",
    href: "/resources/probate-guide",
  },
  {
    title: "View All Homeowner Guides",
    href: "/resources/homeowner-guides",
  },
];

const investingResources = [
  {
    title: "Residential Investments",
    href: "/resources/residential-investments",
  },
  {
    title: "Commercial Investments",
    href: "/resources/commercial-investments",
  },
  {
    title: "Rental Property Strategies",
    href: "/resources/rental-strategies",
  },
  {
    title: "Property Evaluation Guide",
    href: "/resources/property-evaluation",
  },
];

const michiganResources = [
  {
    title: "Sell Your House in Kent County",
    href: "/sell-my-house-kent-county",
  },
  {
    title: "Sell Your House in Ottawa County",
    href: "/sell-my-house-ottawa-county",
  },
  {
    title: "Sell Your House in Grand Rapids",
    href: "/sell-my-house-grand-rapids",
  },
  {
    title: "Sell Your House in Troy",
    href: "/sell-my-house-troy",
  },
  {
  title: "View All Michigan Guides",
  href: "/resources/michigan-guides",
},
];

export const dynamic = "force-static";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* HERO */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Resource Center
            </p>

            <h1 className="mt-5 text-5xl font-extrabold md:text-6xl">
              Knowledge Builds Better Decisions
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Whether you're preparing to sell your home, exploring investment
              opportunities, or simply learning about Michigan real estate,
              you'll find practical information and helpful guides here.
            </p>

          </div>
        </section>

        {/* INTRO */}

        <section className="bg-white py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <BookOpen className="mx-auto h-16 w-16 text-[#C9A227]" />

            <h2 className="mt-8 text-4xl font-bold text-[#14213D]">
              Learn Before You Decide
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Selling or investing in real estate is an important decision.
              Our goal is to provide educational resources that help homeowners
              and investors better understand the process before making any
              commitments.
            </p>

          </div>

        </section>

        {/* GRID */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">

            {/* HOMEOWNERS */}

            <div className="rounded-3xl bg-white p-10 shadow-lg">

              <Home className="h-12 w-12 text-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
                Homeowner Guides
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Helpful articles for homeowners preparing to sell.
              </p>

              <ul className="mt-8 space-y-4">

                {homeownerResources.map((item) => (

                  <li key={item.title}>

                   <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-[#C9A227] hover:bg-slate-50"
                  >
                   <span>{item.title}</span>

                   <span className="flex shrink-0 items-center gap-2 font-semibold text-[#14213D]">
                  Learn More
                   <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                   </span>
                   </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* INVESTORS */}

            <div className="rounded-3xl bg-white p-10 shadow-lg">

              <Building2 className="h-12 w-12 text-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
                Investment Insights
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Resources for residential and commercial investing.
              </p>

              <ul className="mt-8 space-y-4">

                {investingResources.map((item) => (

                  <li key={item.title}>

                    <Link
                      href={item.href}
                      className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#C9A227]"
                    >
                      {item.title}

                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* MICHIGAN */}

            <div className="rounded-3xl bg-white p-10 shadow-lg">

              <MapPinned className="h-12 w-12 text-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
                Michigan Guides
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Explore our growing Michigan service areas.
              </p>

              <ul className="mt-8 space-y-4">

                {michiganResources.map((item) => (

                  <li key={item.title}>

                    <Link
                      href={item.href}
                      className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#C9A227]"
                    >
                      {item.title}

                      <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </section>
       
        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="text-5xl font-bold">
              Have Questions About Your Property?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Every homeowner's situation is different.
              If you can't find the answer you're looking for,
              contact FAHOPROSO and we'll be happy to discuss
              your property and your goals.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
            >
              Contact FAHOPROSO
            </Link>

          </div>

        </section>
        
{/* Mentorship Section */}

<section className="bg-[#14213D] py-20 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
      Mentorship & Education
    </p>

    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
      Built Through Mentorship
    </h2>

    <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-200">
  FAHOPROSO is where it is today because of the mentorship and guidance of{" "}
  <span className="font-semibold text-[#C9A227]">
    Kingdom320
  </span>.
  Their knowledge and support helped us to build a strong foundation in faith and real
  estate investing.
</p>

  </div>
</section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}