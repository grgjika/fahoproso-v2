import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  KeyRound,
  LineChart,
  MapPin,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Rental Property Investments",
  description:
    "Learn how FAHOPROSO evaluates rental property opportunities and creates long-term value through responsible ownership and professional real estate investment.",
};

const evaluationFactors = [
  {
    icon: MapPin,
    title: "Location and Neighborhood",
    description:
      "We consider neighborhood stability, nearby employment, transportation, schools, services, and long-term community demand.",
  },
  {
    icon: LineChart,
    title: "Rental Demand",
    description:
      "Local occupancy patterns, comparable rents, housing supply, and tenant demand help us understand the property's income potential.",
  },
  {
    icon: Wrench,
    title: "Property Condition",
    description:
      "We review structural condition, major systems, deferred maintenance, safety concerns, and improvements needed for responsible operation.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Potential",
    description:
      "We evaluate whether the property can support stable operations, sustainable improvements, and lasting value over time.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Responsible Ownership",
    description:
      "We believe long-term rental success depends on safe properties, consistent maintenance, and respectful management.",
  },
  {
    icon: Users,
    title: "Resident-Focused Approach",
    description:
      "Quality housing and clear communication help create better experiences for residents and stronger communities.",
  },
  {
    icon: CalendarCheck,
    title: "Long-Term Planning",
    description:
      "We evaluate opportunities with a patient strategy focused on stability rather than short-term speculation.",
  },
  {
    icon: Building2,
    title: "Portfolio Discipline",
    description:
      "Every property must align with our standards for location, condition, operating potential, and long-term growth.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Opportunity Review",
    description:
      "We begin by reviewing the property type, location, condition, occupancy, and available financial information.",
  },
  {
    number: "02",
    title: "Market Analysis",
    description:
      "We examine neighborhood demand, comparable rents, expenses, vacancy risk, and local market conditions.",
  },
  {
    number: "03",
    title: "Property Evaluation",
    description:
      "We assess repairs, improvements, operations, management needs, and the property's long-term investment potential.",
  },
  {
    number: "04",
    title: "Investment Decision",
    description:
      "If the opportunity fits our strategy, we discuss next steps, due diligence, documentation, and possible transaction terms.",
  },
];

const faqs = [
  {
    question: "What types of rental properties do you consider?",
    answer:
      "We may evaluate single-family rentals, duplexes, townhomes, small multifamily properties, and other residential income opportunities that align with our investment criteria.",
  },
  {
    question: "Do you consider occupied properties?",
    answer:
      "Yes. Occupied properties may be considered, but lease terms, tenant records, payment history, property condition, and applicable legal requirements must be reviewed carefully.",
  },
  {
    question: "Do you only purchase fully renovated rentals?",
    answer:
      "No. We may consider properties that require repairs or operational improvements when the opportunity supports a responsible and realistic investment plan.",
  },
  {
    question: "What financial information is helpful?",
    answer:
      "Helpful documents may include current leases, rent rolls, operating expenses, utility information, maintenance history, insurance costs, and property tax records.",
  },
  {
    question: "Do you manage rental properties?",
    answer:
      "Our long-term vision includes responsible ownership and professional management. The management approach may vary depending on the property, location, and operating requirements.",
  },
  {
    question: "What markets do you focus on?",
    answer:
      "FAHOPROSO is based in Grand Rapids and focuses primarily on West Michigan while reviewing selected opportunities in other markets when appropriate.",
  },
];

export default function RentalsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative flex min-h-[560px] items-center overflow-hidden">
          <Image
            src="/images/property2.jpg"
            alt="Rental property investment"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/85 to-[#14213D]/45" />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Rental Investments
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Building Long-Term Value
                <br />
                Through Rental Properties
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                We evaluate rental opportunities with a focus on responsible
                ownership, sustainable operations, resident experience, and
                long-term portfolio growth.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss a Rental Opportunity
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
                Our Rental Strategy
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#14213D] md:text-5xl">
                Stable Housing, Responsible Operations, and Sustainable Growth
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Rental real estate can create long-term value when properties
                  are selected carefully, maintained responsibly, and managed
                  with discipline. At FAHOPROSO, we do not view rental
                  properties as short-term transactions. We approach them as
                  long-term investments that affect residents, neighborhoods,
                  operating partners, and the broader community.
                </p>

                <p>
                  A successful rental property must provide more than projected
                  income. It should also offer safe and functional housing,
                  realistic operating expenses, dependable demand, and a clear
                  plan for maintenance and improvement.
                </p>

                <p>
                  We evaluate each opportunity individually, considering the
                  property's location, physical condition, current occupancy,
                  rental demand, operating history, and long-term potential.
                  This disciplined process helps us identify opportunities that
                  align with our investment standards and business goals.
                </p>
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/images/service-rental1.jpg"
                alt="Rental property evaluated by FAHOPROSO"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  FAHOPROSO
                </p>

                <p className="mt-2 text-2xl font-bold">
                  Long-Term Rental Investment
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
                Opportunities We Consider
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Residential Income Property Types
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every rental opportunity is reviewed based on its complete
                operating and investment profile.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Single-family rentals",
                "Duplexes",
                "Townhomes and condominiums",
                "Small multifamily properties",
                "Occupied rental properties",
                "Properties requiring improvements",
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

        {/* Evaluation */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Investment Evaluation
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                What We Review
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Rental property analysis involves both the physical property
                and the financial operation behind it.
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

        {/* Ownership approach */}
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Ownership Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Long-Term Thinking Shapes Every Decision
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Sustainable rental investments require discipline,
                maintenance, communication, and a clear operating plan.
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

        {/* Operations */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/property2.jpg"
                alt="Residential rental investment property"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Responsible Operations
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Rental Performance Depends on More Than Monthly Income
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Responsible rental ownership includes planning for repairs,
                  maintaining appropriate reserves, responding to property
                  issues, understanding lease obligations, and protecting the
                  long-term condition of the asset.
                </p>

                <p>
                  We also recognize the importance of the resident experience.
                  Clear expectations, functional homes, respectful
                  communication, and consistent property care support stronger
                  rental performance and more stable communities.
                </p>

                <p>
                  Before pursuing an opportunity, we seek to understand both the
                  property's current operation and the improvements necessary to
                  support its future. This prevents decisions based only on
                  surface-level projections or unrealistic assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                From Initial Review to Investment Decision
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We follow an organized process designed to identify both the
                opportunities and the risks associated with each property.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-300 bg-white p-7"
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
        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 md:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]">
                <KeyRound className="h-8 w-8 text-white" />
              </div>

              <h2 className="mt-7 text-4xl font-bold text-[#14213D]">
                Our Commitment to Long-Term Value
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  FAHOPROSO seeks rental properties that can support responsible
                  ownership, sustainable operations, and long-term improvement.
                  We believe the strongest investments create value for more
                  than the property owner alone.
                </p>

                <p>
                  Well-maintained rental housing can support residents,
                  strengthen neighborhoods, preserve property values, and
                  contribute to local stability. That responsibility influences
                  how we evaluate opportunities and how we think about future
                  growth.
                </p>

                <p>
                  Our approach is built on realistic analysis, professional
                  communication, and a willingness to walk away from
                  opportunities that do not support responsible long-term
                  ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Rental Investment Questions
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mt-14 space-y-5">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-slate-300 bg-white p-7"
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
              Share an Opportunity
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Let&apos;s Discuss Your Rental Property
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about the property, current occupancy, condition, and your
              goals. We will review the information and contact you about
              possible next steps.
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