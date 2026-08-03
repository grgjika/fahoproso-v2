import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Residential Real Estate Investing in Michigan | FAHOPROSO",
  description:
    "Explore residential real estate investing in Michigan, including single-family homes, multifamily properties, cash flow, appreciation, and long-term investment strategy.",
};

export default function ResidentialInvestmentsPage() {
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
                Residential Real Estate
                <span className="block text-[#C9A227]">
                  Investing in Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Residential real estate can provide income, appreciation, and
                long-term portfolio growth. This guide explains the main
                property types, investment goals, and factors investors should
                review before moving forward.
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
                src="/images/residential-investments.jpg"
                alt="Residential real estate investing in Michigan"
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
                Start With Clear Investment Goals
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Residential investing can include single-family homes,
                  duplexes, small multifamily properties, renovation projects,
                  and long-term rentals.
                </p>

                <p>
                  The right strategy depends on your capital, experience,
                  timeline, risk tolerance, financing, and desired level of
                  involvement.
                </p>

                <p>
                  Before acquiring a property, investors should understand the
                  local market, expected expenses, potential income, and the
                  condition of the asset.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                Key Questions to Review
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">
                <li>✓ What is the investment objective?</li>
                <li>✓ What return is realistic?</li>
                <li>✓ What repairs or improvements are needed?</li>
                <li>✓ What are the operating expenses?</li>
                <li>✓ How does the property fit the overall portfolio?</li>
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
                Common Residential Investment Options
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Single-Family Homes",
                  text: "Often simpler to manage and easier to understand for newer investors.",
                },
                {
                  title: "Small Multifamily",
                  text: "Duplexes, triplexes, and four-unit properties can provide multiple income streams.",
                },
                {
                  title: "Renovation Projects",
                  text: "Properties needing improvements may offer value-creation opportunities when the numbers support the work.",
                },
                {
                  title: "Long-Term Rentals",
                  text: "Designed to provide recurring rental income and potential appreciation over time.",
                },
                {
                  title: "Value-Add Properties",
                  text: "Properties where operational or physical improvements may increase income or long-term value.",
                },
                {
                  title: "Owner-Occupied Investments",
                  text: "Some investors begin by living in one unit while renting the others.",
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

        {/* RETURN DRIVERS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Return Drivers
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                How Residential Investments Can Create Value
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Cash Flow
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Rental income remaining after operating expenses, reserves,
                  and financing costs.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Appreciation
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  The property may increase in value over time, although market
                  appreciation is never guaranteed.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Forced Value
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Strategic renovations, better management, or improved
                  operations may increase the property&apos;s performance.
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
                Review the Property Before You Commit
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Property Condition",
                "Market Rent",
                "Operating Expenses",
                "Exit Strategy",
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
                    Review reliable information and verify assumptions before
                    moving forward with an acquisition.
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
                Residential Investment FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  What type of residential property is best for investing?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  The best property depends on your goals, available capital,
                  experience, risk tolerance, and desired level of involvement.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Is cash flow more important than appreciation?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Both can matter. Some investors prioritize immediate income,
                  while others focus more heavily on long-term value growth.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Should I renovate before renting or selling?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Renovations should support the investment plan. Review the
                  cost, expected return, property condition, and local market
                  before moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Explore Opportunities
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let&apos;s Discuss Residential Real Estate
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              FAHOPROSO evaluates selected residential investment opportunities
              throughout Michigan. Contact us to discuss a property, partnership,
              or potential acquisition.
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