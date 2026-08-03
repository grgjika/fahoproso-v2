import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Selling Your House As-Is in Michigan | FAHOPROSO",
  description:
    "Learn what it means to sell your house as-is in Michigan, understand your options, and make an informed decision with this complete guide from FAHOPROSO.",
};

export default function SellHouseAsIsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* HERO */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Michigan Homeowner Guide
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
                Selling Your House
                <span className="block text-[#C9A227]">
                  As-Is in Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Selling your house as-is allows you to market the property in
                its current condition without completing major repairs or
                renovations first. This guide explains the process, your
                options, and what to consider before making a decision.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Contact FAHOPROSO
              </Link>

            </div>

            <div>

              <Image
                src="/images/house-as-is.jpg"
                alt="Selling a house as-is in Michigan"
                width={1200}
                height={800}
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />

            </div>

          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="bg-white py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Understanding As-Is Sales
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Selling As-Is Doesn't Mean Selling Without Options
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  Selling a home as-is means offering the property in its
                  present condition. Buyers understand that repairs or updates
                  may be needed after closing.
                </p>

                <p>
                  Homeowners often choose this option because of relocation,
                  financial considerations, inherited maintenance, aging
                  properties, or simply because they prefer not to complete
                  repairs before selling.
                </p>

                <p>
                  Understanding your available options before making a decision
                  can help you choose the approach that best fits your goals.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#14213D]">
                Before You Sell
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">

                <li>✓ Understand your home's current condition.</li>

                <li>✓ Estimate possible repair costs.</li>

                <li>✓ Review your selling timeline.</li>

                <li>✓ Compare your available options.</li>

                <li>✓ Decide what best supports your goals.</li>

              </ul>

            </div>

          </div>

        </section>

                {/* IMPORTANT GUIDANCE */}

        <section className="bg-[#FFF9EC] py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#C9A227]/30 bg-white p-10 shadow-lg">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Important Guidance
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#14213D]">
              Selling As-Is Is Not Always the Same as Selling Quickly
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every property is different. Before investing money into repairs,
              compare the potential cost, timeline, and expected return. In some
              situations, selling the home in its current condition may be the
              most practical solution.
            </p>

          </div>
        </section>

        {/* COMMON CHALLENGES */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Challenges
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Why Homeowners Sell As-Is
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Major Repairs",
                "Outdated Interior",
                "Roof or Foundation Issues",
                "Limited Budget",
                "Relocation",
                "Time Constraints",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl bg-white p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    Every homeowner's situation is unique. Understanding your
                    options before investing additional time or money can help
                    you make an informed decision.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SIMPLE PROCESS */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Selling Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Simple Four-Step Process
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">

              {[
                "Evaluate Property",
                "Review Your Options",
                "Choose Your Timeline",
                "Complete the Sale",
              ].map((step, index) => (

                <div
                  key={step}
                  className="rounded-3xl bg-slate-100 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#14213D]">
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SELLING OPTIONS */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Compare Your Options
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Which Option Fits Your Situation?
              </h2>

            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Repair Before Selling
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Completing repairs may improve presentation, but it also
                  requires additional time, planning, and investment.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell As-Is
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Selling in the property's current condition may be a practical
                  choice when repairs are not part of your plan.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Keep the Property
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Some owners decide to keep the property for personal use or as
                  a long-term investment.
                </p>
              </div>

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
                Common Questions
              </h2>

            </div>

            <div className="mt-14 space-y-8">

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  What does selling a house as-is mean?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  It generally means offering the property in its current
                  condition without completing repairs before the sale.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Can I sell if my house needs repairs?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Yes. Many homeowners explore selling without making major
                  improvements first.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Do I have to renovate before selling?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Not necessarily. Every situation is different, and your
                  decision depends on your goals, budget, and timeline.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Need More Information?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let's Discuss Your Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Every property is unique. Contact FAHOPROSO to discuss your
              situation and explore the options available to you.
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