import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Rental Property Strategies in Michigan | FAHOPROSO",
  description:
    "Explore rental property strategies in Michigan, including cash flow, tenant quality, maintenance, reserves, and long-term portfolio planning.",
};

export default function RentalStrategiesPage() {
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
                Rental Property
                <span className="block text-[#C9A227]">
                  Strategies in Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Successful rental ownership requires more than purchasing a
                property. This guide explains the operational, financial, and
                long-term strategies that can support a stronger portfolio.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss a Rental Opportunity
              </Link>
            </div>

            <div>
              <Image
                src="/images/rental-strategies.jpg"
                alt="Rental property strategies in Michigan"
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
                Portfolio Planning
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Build a Strategy Before You Scale
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Rental properties can provide recurring income and long-term
                  value, but performance depends on careful planning and
                  consistent management.
                </p>

                <p>
                  Investors should review financing, market rent, tenant demand,
                  maintenance needs, reserves, and expected operating expenses
                  before acquiring a property.
                </p>

                <p>
                  A clear strategy helps investors make decisions that support
                  both current cash flow and long-term portfolio goals.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                Key Areas to Review
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">
                <li>✓ Market rent and tenant demand</li>
                <li>✓ Property condition and maintenance</li>
                <li>✓ Financing and operating expenses</li>
                <li>✓ Vacancy and reserve planning</li>
                <li>✓ Long-term ownership goals</li>
              </ul>
            </div>
          </div>
        </section>
                {/* CORE STRATEGIES */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Core Strategies
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Build Stronger Rental Operations
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Buy for Cash Flow",
                  text: "Review realistic rent, expenses, reserves, and financing before relying on projected income.",
                },
                {
                  title: "Choose the Right Market",
                  text: "Tenant demand, employment, transportation, and neighborhood stability can influence long-term performance.",
                },
                {
                  title: "Maintain the Property",
                  text: "Consistent maintenance can protect the asset, reduce larger repairs, and support tenant satisfaction.",
                },
                {
                  title: "Plan for Vacancy",
                  text: "Healthy reserves can help cover mortgage payments, utilities, repairs, and turnover periods.",
                },
                {
                  title: "Screen Carefully",
                  text: "A consistent, lawful screening process can help identify qualified tenants and reduce avoidable risk.",
                },
                {
                  title: "Track Performance",
                  text: "Review income, expenses, maintenance, occupancy, and return against the original investment plan.",
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

        {/* FINANCIAL DISCIPLINE */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Financial Discipline
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Understand the Numbers Behind the Property
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Gross Income
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Start with realistic rental income based on current market
                  conditions and expected occupancy.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Operating Expenses
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Include taxes, insurance, maintenance, management, utilities,
                  vacancy, and reserves.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Net Performance
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Compare actual results with projections and adjust the
                  strategy when assumptions change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPERATING PROCESS */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Operating Process
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Four Areas to Manage Consistently
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Tenant Relations",
                "Property Maintenance",
                "Financial Tracking",
                "Portfolio Review",
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
                    Use consistent systems, clear records, and regular reviews
                    to support long-term performance.
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
                Rental Strategy FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  What should I evaluate before buying a rental property?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Review market rent, property condition, operating expenses,
                  financing, vacancy assumptions, and your long-term investment
                  objectives before making a purchase.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Why are cash reserves important?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Reserves can help cover unexpected repairs, vacancies,
                  maintenance, insurance, taxes, and other operating expenses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Should every rental property have the same strategy?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  No. Property type, location, financing, tenant demand, and
                  investment goals all influence the appropriate strategy.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Rental Property Planning
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Build a Stronger Investment Portfolio
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Whether you're purchasing your first rental property or expanding
              an existing portfolio, FAHOPROSO is committed to thoughtful,
              long-term real estate investing throughout Michigan.
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