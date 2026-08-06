import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Downsizing Your Home in Michigan | FAHOPROSO",
  description:
    "Learn about downsizing your home in Michigan, including planning, organizing, selling options, and preparing for your next chapter.",
};

export default function DownsizingYourHomePage() {
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
                Downsizing
                <span className="block text-[#C9A227]">
                  Your Home
                </span>
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Downsizing can reduce maintenance, simplify your lifestyle,
                and help you prepare for the next chapter. This guide explains
                the process and the options available.
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
                src="/images/downsizing-home.png"
                alt="Downsizing your home in Michigan"
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
                Understanding Your Situation
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                A Smaller Home Can Mean Greater Freedom
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">

                <p>
                  Many homeowners choose to downsize after retirement,
                  lifestyle changes, or when maintaining a larger home is
                  no longer practical.
                </p>

                <p>
                  Downsizing may reduce maintenance, monthly expenses,
                  and provide an opportunity to simplify daily life.
                </p>

                <p>
                  Planning ahead helps make the transition smoother and
                  allows you to compare your selling options.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg">

              <h3 className="text-2xl font-bold text-[#14213D]">
                Before You Begin
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Determine your future housing needs.</li>
                <li>Organize personal belongings.</li>
                <li>Estimate moving expenses.</li>
                <li>Review your home's condition.</li>
                <li>Compare your selling options.</li>
              </ul>

            </div>

          </div>

        </section>

        {/* GUIDANCE */}

        <section className="bg-white pb-24">

          <div className="mx-auto max-w-5xl px-6">

            <div className="rounded-3xl border border-[#C9A227]/40 bg-[#FFF9EC] p-8 shadow-sm">

              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Important Guidance
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#14213D]">
                Plan Before You Move
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                Downsizing takes planning. Organizing belongings,
                understanding your timeline, and comparing your options
                before selling can reduce stress.
              </p>

            </div>

          </div>

        </section>

        {/* COMMON REASONS */}

        <section className="bg-slate-100 py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-3xl text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Common Reasons
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Why Homeowners Downsize
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "Retirement",
                  text: "Many retirees choose a smaller, easier-to-maintain home.",
                },
                {
                  title: "Lower Expenses",
                  text: "Reduce utilities, taxes, maintenance, and other monthly costs.",
                },
                {
                  title: "Less Maintenance",
                  text: "Smaller homes often require less upkeep throughout the year.",
                },
                {
                  title: "Lifestyle Changes",
                  text: "A move closer to family or a different community may better fit your needs.",
                },
                {
                  title: "Simplify Life",
                  text: "Owning less space can make daily life easier and more manageable.",
                },
                {
                  title: "Future Planning",
                  text: "Some homeowners downsize to better prepare for the years ahead.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-300 bg-white p-8 shadow-sm"
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
                {/* QUICK FACTS */}

        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Quick Facts
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Downsizing at a Glance
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "1",
                  title: "Create a Plan",
                  text: "Determine your goals and future housing needs.",
                },
                {
                  number: "2",
                  title: "Organize",
                  text: "Sort belongings and decide what to keep, donate, or sell.",
                },
                {
                  number: "3",
                  title: "Prepare",
                  text: "Review the home's condition and compare selling options.",
                },
                {
                  number: "4",
                  title: "Move Forward",
                  text: "Complete your move with confidence.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-2xl font-bold">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* TIMELINE */}

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-6xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Downsizing Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                A Simple Timeline
              </h2>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-5">

              {[
                "Planning",
                "Organizing",
                "Preparing",
                "Selling",
                "Moving",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl bg-white p-8 text-center shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A227] text-xl font-bold text-white">
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

        {/* OPTIONS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Your Options
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D]">
                Explore Your Next Step
              </h2>

            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Buy a Smaller Home
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Many homeowners choose a smaller property that better fits
                  their current lifestyle.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Rent
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Renting may provide flexibility while deciding on your next
                  long-term home.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#C9A227] bg-[#FFF9EC] p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#14213D]">
                  Sell Your Current Home
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Selling may reduce maintenance responsibilities and free up
                  equity for your next move.
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
                Downsizing FAQs
              </h2>

            </div>

            <div className="mt-14 space-y-8">

              {[
                {
                  question: "When should I start downsizing?",
                  answer: "Start planning several months before you intend to move whenever possible.",
                },
                {
                  question: "Should I renovate before selling?",
                  answer: "That depends on your goals, budget, and the condition of the property.",
                },
                {
                  question: "How do I decide what to keep?",
                  answer: "Keep the items you regularly use and those with meaningful personal value.",
                },
                {
                  question: "Can I sell my home as-is?",
                  answer: "Yes. Many homeowners explore selling without making major repairs first.",
                },
                {
                  question: "How long does downsizing take?",
                  answer: "Every situation is different, but planning ahead usually makes the process much easier.",
                },
                {
                  question: "Can I move closer to family?",
                  answer: "Many homeowners downsize to relocate closer to family, healthcare, or preferred communities.",
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
              Ready for Your Next Chapter?
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Let's Discuss Your Property
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              If you're thinking about downsizing, we are here to help you
              understand your options and move forward with confidence.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
            >
              Contact us
            </Link>

          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}