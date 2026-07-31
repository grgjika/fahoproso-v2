import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Handshake,
  Home,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Residential Property Acquisitions",
  description:
    "Learn how FAHOPROSO evaluates residential properties and provides practical real estate solutions for homeowners throughout Grand Rapids and West Michigan.",
};

const evaluationFactors = [
  {
    icon: Wrench,
    title: "Property Condition",
    description:
      "We review structural condition, major systems, repair requirements, cosmetic updates, and other factors that may affect the property.",
  },
  {
    icon: MapPin,
    title: "Location",
    description:
      "Neighborhood characteristics, nearby amenities, transportation, local development, and community demand are considered.",
  },
  {
    icon: TrendingUp,
    title: "Market Conditions",
    description:
      "Current demand, comparable properties, inventory, market activity, and local trends help shape our evaluation.",
  },
  {
    icon: Home,
    title: "Investment Potential",
    description:
      "We consider whether thoughtful improvements and responsible ownership can create sustainable long-term value.",
  },
];

const benefits = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We provide straightforward information, timely responses, and clear explanations throughout the process.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Approach",
    description:
      "We explain the evaluation process and proposed terms so you can make an informed decision without unnecessary pressure.",
  },
  {
    icon: Clock3,
    title: "Flexible Timelines",
    description:
      "Every seller has different needs. We work to understand your preferred timeline and explore practical options.",
  },
  {
    icon: Handshake,
    title: "Respectful Service",
    description:
      "Every property and every situation is treated with professionalism, integrity, and respect.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Conversation",
    description:
      "Tell us about your property, its condition, your goals, and any important timing considerations.",
  },
  {
    number: "02",
    title: "Property Review",
    description:
      "We evaluate the property’s location, condition, local market information, and overall investment potential.",
  },
  {
    number: "03",
    title: "Discussing Options",
    description:
      "If the opportunity aligns with our criteria, we discuss possible solutions and answer your questions clearly.",
  },
  {
    number: "04",
    title: "Moving Forward",
    description:
      "When both parties agree, the transaction continues through due diligence, documentation, and closing.",
  },
];

const faqs = [
  {
    question: "Do you consider properties that need repairs?",
    answer:
      "Yes. Properties do not need to be fully renovated or in perfect condition. We evaluate each opportunity individually, including the repairs and improvements that may be required.",
  },
  {
    question: "Am I required to accept an offer?",
    answer:
      "No. Contacting FAHOPROSO, sharing property information, or receiving a potential offer does not obligate you to proceed.",
  },
  {
    question: "Do you work with inherited properties?",
    answer:
      "Yes. We understand that inherited properties can involve family decisions, maintenance concerns, and unique timelines. We are available to discuss the situation and possible options.",
  },
  {
    question: "How quickly will you review my property?",
    answer:
      "Review times vary depending on the property and the information available. We aim to respond promptly and keep you informed throughout the evaluation process.",
  },
  {
    question: "What types of residential properties do you consider?",
    answer:
      "We may consider single-family homes, townhomes, condominiums, duplexes, small multifamily properties, and other residential opportunities that align with our investment strategy.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "FAHOPROSO is based in Grand Rapids, Michigan, and focuses primarily on West Michigan and surrounding communities while evaluating other opportunities when appropriate.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative flex min-h-[560px] items-center overflow-hidden">
          <Image
            src="/images/property1.jpg"
            alt="Residential property investment"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/85 to-[#14213D]/45" />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Residential Acquisitions
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Practical Residential
                <br />
                Property Solutions
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                We help homeowners explore straightforward real estate options
                while evaluating residential properties with professionalism,
                transparency, and respect.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss Your Property
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Residential Focus
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#14213D] md:text-5xl">
                Every Property and Every Homeowner Has a Different Story
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Residential real estate represents more than land and
                  buildings. A property may hold years of memories, financial
                  investment, family history, and important personal decisions.
                  That is why FAHOPROSO approaches each residential opportunity
                  individually rather than relying on a one-size-fits-all
                  process.
                </p>

                <p>
                  Homeowners contact us for many reasons. Some are relocating,
                  downsizing, managing an inherited property, dealing with
                  deferred maintenance, or simply exploring whether a direct
                  sale may fit their goals. Our responsibility is to listen,
                  review the available information, and communicate honestly
                  about possible next steps.
                </p>

                <p>
                  Our investment philosophy focuses on identifying properties
                  where responsible ownership and thoughtful improvements may
                  create lasting value. We aim to support homeowners while also
                  contributing positively to neighborhoods and surrounding
                  communities.
                </p>
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/images/service-cash-home.jpg"
                alt="Residential home evaluated by FAHOPROSO"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  FAHOPROSO
                </p>

                <p className="mt-2 text-2xl font-bold">
                  Professional Property Evaluation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Property types */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Properties We Consider
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                A Range of Residential Opportunities
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every opportunity is reviewed on its own merits and must align
                with our investment criteria.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Single-family homes",
                "Townhomes and condominiums",
                "Duplexes",
                "Small multifamily properties",
                "Inherited properties",
                "Properties requiring repairs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-300 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-[#C9A227]" />
                  <p className="font-semibold text-[#14213D]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation factors */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Property Evaluation
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                What We Consider
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A responsible evaluation considers the complete property, not
                just one characteristic. These are some of the factors reviewed
                during our process.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {evaluationFactors.map((factor) => {
                const Icon = factor.icon;

                return (
                  <article
                    key={factor.title}
                    className="group rounded-2xl border border-slate-300 bg-slate-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A227]">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#14213D]">
                      {factor.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {factor.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Why Work With Us
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                A Professional and Respectful Experience
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Our goal is to make the evaluation process understandable,
                organized, and centered around clear communication.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-slate-700 bg-slate-800/60 p-7"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#C9A227] p-3">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                A Clear Path From Conversation to Closing
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every transaction is different, but our process is designed to
                remain organized, transparent, and easy to understand.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-300 bg-slate-100 p-7"
                >
                  <span className="text-5xl font-bold text-[#C9A227]/30">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-[#14213D]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div className="relative h-[460px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/service-renovation.jpg"
                alt="Residential property improvement"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Commitment
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Creating Value Through Integrity and Responsible Investment
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  At FAHOPROSO, we understand that deciding what to do with a
                  property can be a significant financial and personal choice.
                  We do not believe homeowners should feel pressured or
                  uninformed when considering their options.
                </p>

                <p>
                  Our commitment is to communicate honestly, evaluate
                  opportunities responsibly, and provide clear information so
                  property owners can decide what works best for their
                  circumstances.
                </p>

                <p>
                  Whether or not a transaction moves forward, we want every
                  homeowner who contacts us to feel respected, informed, and
                  confident that their inquiry was handled professionally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Residential Property Questions
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mt-14 space-y-5">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-slate-300 bg-slate-100 p-7"
                >
                  <h3 className="text-xl font-bold text-[#14213D]">
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Start a Conversation
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Let&apos;s Discuss Your Residential Property
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Share a few details about your property and your goals. We will
              review your information and contact you to discuss possible next
              steps.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
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