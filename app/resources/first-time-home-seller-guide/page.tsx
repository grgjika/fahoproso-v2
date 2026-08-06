import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "First-Time Home Seller Guide in Michigan | FAHOPROSO",
  description:
    "A helpful guide for first-time home sellers in Michigan covering preparation, property evaluation, offers, closing, and common mistakes.",
};

export default function FirstTimeHomeSellerGuidePage() {
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
                First-Time Home
                <span className="block text-[#C9A227]">Seller Guide</span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Selling a home for the first time can feel overwhelming. This
                guide explains the main steps, important decisions, and common
                mistakes to avoid during the selling process.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss Your Property
              </Link>
            </div>

            <div>
              <Image
                src="/images/first-home.webp"
                alt="First-time home seller guide in Michigan"
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
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Preparing to Sell
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Start With a Clear Plan
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Before selling your home, take time to understand your goals,
                  preferred timeline, financial needs, and the condition of the
                  property.
                </p>

                <p>
                  You should also review your mortgage balance, possible repair
                  costs, moving plans, and the different ways the property may
                  be sold.
                </p>

                <p>
                  A clear plan can help you avoid rushed decisions and make the
                  process easier to understand.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#14213D]">
                Questions to Consider
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Why are you selling the property?</li>
                <li>How quickly would you like to move?</li>
                <li>Does the home need repairs or updates?</li>
                <li>What expenses may be involved?</li>
                <li>Which selling option fits your situation?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GUIDANCE */}

        <section className="bg-white pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-[#C9A227]/40 bg-[#FFF9EC] p-8 shadow-sm">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Helpful Guidance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#14213D]">
                Understand Your Options Before Making a Decision
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                You do not have to choose the first selling option presented to
                you. Compare the potential timeline, costs, responsibilities,
                and expected outcome of each path.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Consider speaking with qualified real estate, legal, tax, or
                financial professionals when your situation requires specific
                advice.
              </p>
            </div>
          </div>
        </section>

        {/* SELLING PROCESS */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Selling Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                What First-Time Sellers Can Expect
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Review the Property",
                  text: "Understand the home's condition, features, repair needs, and current market position.",
                },
                {
                  title: "Choose a Selling Path",
                  text: "Compare listing traditionally, selling directly, or making improvements before selling.",
                },
                {
                  title: "Prepare the Property",
                  text: "Decide whether cleaning, repairs, staging, or other preparation is necessary.",
                },
                {
                  title: "Review Offers",
                  text: "Compare price, contingencies, financing, closing dates, and other important terms.",
                },
                {
                  title: "Complete Title Work",
                  text: "Ownership, liens, taxes, and required documents are reviewed before closing.",
                },
                {
                  title: "Close the Sale",
                  text: "Sign the final documents, transfer ownership, and complete the transaction.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm"
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

        {/* QUICK STEPS */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Quick Overview
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                The Process at a Glance
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "1",
                  title: "Set Your Goals",
                  text: "Understand your timeline, needs, and reason for selling.",
                },
                {
                  number: "2",
                  title: "Evaluate the Home",
                  text: "Review the property's condition and market position.",
                },
                {
                  number: "3",
                  title: "Compare Options",
                  text: "Choose the selling method that fits your situation.",
                },
                {
                  number: "4",
                  title: "Complete the Sale",
                  text: "Review documents and move through the closing process.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Mistakes
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Mistakes First-Time Sellers Should Avoid
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Making Decisions Too Quickly
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Take time to understand the process, compare options, and ask
                  questions before signing an agreement.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Spending Too Much on Repairs
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Not every improvement will produce a strong return. Review the
                  costs and likely benefit before starting major work.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Looking Only at the Price
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Closing dates, contingencies, financing, fees, and other terms
                  can be just as important as the offer price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                First-Time Seller FAQs
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {[
                {
                  question: "Do I need to repair my home before selling?",
                  answer:
                    "Not always. The best choice depends on the condition of the home, repair costs, your timeline, and the selling option you choose.",
                },
                {
                  question: "How long does the selling process take?",
                  answer:
                    "The timeline varies depending on the property, selling method, buyer financing, title work, and other transaction details.",
                },
                {
                  question: "How is my property's value determined?",
                  answer:
                    "Location, condition, size, features, comparable sales, and current market activity can all influence value.",
                },
                {
                  question: "What costs should I expect?",
                  answer:
                    "Possible costs may include repairs, commissions, closing costs, taxes, moving expenses, and other transaction-related charges.",
                },
                {
                  question: "Am I required to accept an offer?",
                  answer:
                    "No. You can review the offer and decide whether its price, timeline, and terms work for your situation.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-[#14213D]">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Need More Guidance?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let&apos;s Discuss Your Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              If you are preparing to sell your first home, FAHOPROSO can help
              you better understand your property and the options available.
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