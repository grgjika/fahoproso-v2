import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Commercial Real Estate Investing in Michigan | FAHOPROSO",
  description:
    "Explore commercial real estate investing in Michigan, including office, retail, industrial, mixed-use properties, due diligence, and long-term investment strategy.",
};

export default function CommercialInvestmentsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* HERO */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Investment Insights
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                Commercial Real Estate
                <span className="block text-[#C9A227]">
                  Investing in Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Commercial real estate can provide income, diversification, and
                long-term value. This guide explains common property types,
                investment goals, and the factors investors should review before
                pursuing an opportunity.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss an Opportunity
              </Link>
            </div>

            <div>
              <Image
                src="/images/commercial-investments.jpg"
                alt="Commercial real estate investing in Michigan"
                width={1200}
                height={800}
                priority
                className="rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Building a Strategy
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Start With the Property&apos;s Purpose
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Commercial real estate includes office, retail, industrial,
                  mixed-use, multifamily, and specialized properties.
                </p>

                <p>
                  Each asset type has different tenants, operating costs,
                  financing requirements, lease structures, and market risks.
                </p>

                <p>
                  Before moving forward, investors should understand the local
                  market, tenant demand, property condition, projected income,
                  and long-term exit strategy.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                Key Questions to Review
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">
                <li>✓ What is the intended use of the property?</li>
                <li>✓ Who are the current or potential tenants?</li>
                <li>✓ What lease terms are in place?</li>
                <li>✓ What repairs or capital improvements are needed?</li>
                <li>✓ What is the long-term investment plan?</li>
              </ul>
            </div>
          </div>
        </section>
                {/* PROPERTY TYPES */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Property Types
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Common Commercial Investment Options
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Office Properties",
                  text: "Buildings designed for professional services, corporate users, and medical or administrative tenants.",
                },
                {
                  title: "Retail Properties",
                  text: "Storefronts, shopping centers, and neighborhood retail serving local customers and businesses.",
                },
                {
                  title: "Industrial Properties",
                  text: "Warehouses, distribution centers, manufacturing facilities, and flex-space buildings.",
                },
                {
                  title: "Mixed-Use Properties",
                  text: "Buildings that combine residential, office, retail, or other uses within one investment.",
                },
                {
                  title: "Multifamily Properties",
                  text: "Larger apartment communities that can provide multiple rental income streams.",
                },
                {
                  title: "Special-Purpose Properties",
                  text: "Hotels, self-storage, senior housing, and other properties designed for a specific use.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE DRIVERS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Value Drivers
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                What Can Influence Commercial Property Performance?
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Tenant Quality
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Reliable tenants, strong lease terms, and stable occupancy can
                  support consistent property income.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Location and Demand
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Access, visibility, nearby development, and local business
                  demand can significantly affect performance.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Property Operations
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Effective management, maintenance, and capital planning can
                  protect and improve long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DUE DILIGENCE */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Due Diligence
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Review the Details Before Moving Forward
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Lease Review",
                "Property Condition",
                "Operating Expenses",
                "Market and Exit Strategy",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    Verify the documents, financial assumptions, and physical
                    condition before committing to an acquisition.
                  </p>
                </div>
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

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Commercial Investment FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  What types of commercial properties can investors purchase?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Commercial investments may include office buildings, retail
                  centers, industrial facilities, mixed-use developments,
                  apartment communities, and specialty properties.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Is commercial investing different from residential investing?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Yes. Commercial properties often involve different lease
                  structures, financing, operating expenses, tenant
                  relationships, and investment analysis.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Why is due diligence important?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Reviewing leases, financial information, physical condition,
                  environmental considerations, and market conditions helps
                  investors make informed decisions.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Commercial Opportunities
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let's Talk About Your Investment Goals
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              FAHOPROSO is actively building long-term relationships with
              property owners, investors, and commercial real estate
              professionals throughout Michigan.
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