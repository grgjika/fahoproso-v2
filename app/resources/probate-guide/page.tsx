import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Michigan Probate Guide | FAHOPROSO",
  description:
    "Learn how probate works in Michigan, when a property can be sold, and understand the probate process with this homeowner guide from FAHOPROSO.",
};

export default function ProbateGuidePage() {
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
                Understanding
                <span className="block text-[#C9A227]">
                  Probate in Michigan
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Probate is the legal process used to settle a person's estate.
                This guide explains what probate is, when it may be required,
                and how it can affect the sale of real estate in Michigan.
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
                src="/images/probate-guide.jpg"
                alt="Michigan Probate Guide"
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
                Understanding Probate
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                What Is Probate?
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  Probate is the legal process of administering a person's
                  estate after they pass away. Depending on the circumstances,
                  the court may oversee the distribution of assets and the
                  payment of debts.
                </p>

                <p>
                  Not every estate requires probate. Whether probate is needed
                  depends on factors such as ownership, beneficiary
                  designations, trusts, and Michigan law.
                </p>

                <p>
                  If real estate is involved, understanding the probate process
                  before making decisions can help avoid unnecessary delays.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#14213D]">
                Before You Begin
              </h3>

              <ul className="mt-8 space-y-5 text-slate-700">

                <li>✓ Locate the will or estate documents.</li>

                <li>✓ Identify who owns the property.</li>

                <li>✓ Determine whether probate is required.</li>

                <li>✓ Review mortgages, liens, and taxes.</li>

                <li>✓ Understand your legal authority.</li>

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
              Probate Is a Legal Process
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every estate is unique. Before selling, transferring, or making
              major decisions about inherited real estate, understand who has
              legal authority to act on behalf of the estate.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Questions about probate, taxes, or legal rights should be
              discussed with a qualified Michigan attorney or estate
              professional.
            </p>

          </div>

        </section>

        {/* COMMON QUESTIONS */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Probate Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Situations Families Often Face
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "Who Can Sell the Property?",
                  text: "The authority to sell depends on the estate documents, ownership, and Michigan law.",
                },
                {
                  title: "Is Probate Always Required?",
                  text: "Not every estate goes through probate. Requirements vary depending on how assets are owned.",
                },
                {
                  title: "Can Multiple Heirs Be Involved?",
                  text: "Yes. When several heirs inherit a property, additional coordination may be necessary.",
                },
                {
                  title: "Outstanding Debts",
                  text: "Mortgages, taxes, or liens may need to be addressed during estate administration.",
                },
                {
                  title: "Property Maintenance",
                  text: "Utilities, insurance, lawn care, and repairs often continue while the estate is settled.",
                },
                {
                  title: "Selling the Home",
                  text: "The timing of a sale depends on the specific circumstances of the estate and legal authority.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-8 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* PROBATE TIMELINE */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Probate Timeline
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Typical Probate Process
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-5">

              {[
                "Estate Opens",
                "Assets Reviewed",
                "Debts Addressed",
                "Property Decisions",
                "Estate Closed",
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

        {/* SELLING DURING PROBATE */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Selling During Probate
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Understand Your Available Options
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Every estate is different. Before selling inherited real estate,
                verify who has legal authority and understand any probate
                requirements that may apply.
              </p>

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
                Probate FAQs
              </h2>

            </div>

            <div className="mt-14 space-y-8">

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Does every estate go through probate?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  No. Whether probate is required depends on how assets are
                  owned, beneficiary designations, trusts, and other legal
                  factors.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  Can a house be sold during probate?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  In some situations, yes. The ability to sell depends on who
                  has legal authority and the requirements of the probate
                  process.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#14213D]">
                  How long does probate take?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Every estate is different. The timeline depends on the size
                  and complexity of the estate and any legal issues that may
                  arise.
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
              We're Here to Help
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              If you're dealing with a probate property in Michigan and want to
              better understand your options, contact FAHOPROSO for a
              conversation about your situation.
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