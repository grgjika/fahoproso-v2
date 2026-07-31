import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Landmark,
  LineChart,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  TrendingUp,
  Warehouse,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Commercial Real Estate Investments",
  description:
    "Learn how FAHOPROSO evaluates commercial real estate acquisitions, partnerships, development opportunities, and long-term investment potential.",
};

const evaluationFactors = [
  {
    icon: MapPin,
    title: "Location and Accessibility",
    description:
      "We consider visibility, transportation access, nearby development, population trends, employment centers, and the surrounding business environment.",
  },
  {
    icon: LineChart,
    title: "Market Demand",
    description:
      "Local vacancy, tenant demand, comparable rents, competing properties, and broader economic trends help shape our evaluation.",
  },
  {
    icon: Wrench,
    title: "Property Condition",
    description:
      "We review structural condition, major systems, deferred maintenance, code concerns, accessibility, and potential capital improvements.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Potential",
    description:
      "We evaluate whether the property can support stable operations, responsible improvements, tenant demand, and sustainable appreciation.",
  },
];

const benefits = [
  {
    icon: Search,
    title: "Disciplined Evaluation",
    description:
      "Every opportunity is reviewed carefully based on its physical, financial, legal, and operational characteristics.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description:
      "We value professional relationships with owners, brokers, investors, tenants, contractors, and community stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Investment",
    description:
      "We seek opportunities that support sound ownership, realistic improvements, and long-term community value.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Due Diligence",
    description:
      "We approach documentation, inspections, financial review, title matters, and transaction planning with care.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Opportunity Review",
    description:
      "We begin with the property type, location, condition, current use, occupancy, asking terms, and available documentation.",
  },
  {
    number: "02",
    title: "Market and Financial Analysis",
    description:
      "We review tenant demand, comparable properties, income, expenses, vacancy, capital needs, and market conditions.",
  },
  {
    number: "03",
    title: "Property Due Diligence",
    description:
      "We assess inspections, zoning, title, leases, environmental concerns, code compliance, and operating risks.",
  },
  {
    number: "04",
    title: "Investment Decision",
    description:
      "If the opportunity aligns with our strategy, we discuss transaction structure, documentation, approvals, and next steps.",
  },
];

const faqs = [
  {
    question: "What types of commercial properties do you consider?",
    answer:
      "We may evaluate office, retail, industrial, warehouse, mixed-use, small multifamily, land, and other commercial opportunities that align with our investment criteria.",
  },
  {
    question: "Do you consider occupied commercial properties?",
    answer:
      "Yes. Occupied properties may be reviewed, but leases, tenant history, operating expenses, rent collections, maintenance obligations, and vacancy risks must be evaluated.",
  },
  {
    question: "Do you work with brokers and property owners?",
    answer:
      "Yes. We welcome opportunities from owners, licensed real estate professionals, investors, developers, and other qualified partners.",
  },
  {
    question: "Do you consider properties that need improvements?",
    answer:
      "Yes. Properties requiring repairs, modernization, repositioning, or operational improvements may be considered when the scope and investment plan are realistic.",
  },
  {
    question: "What documents are helpful during an initial review?",
    answer:
      "Helpful information may include rent rolls, leases, operating statements, tax records, utility expenses, surveys, environmental reports, inspection reports, and improvement history.",
  },
  {
    question: "What markets do you focus on?",
    answer:
      "FAHOPROSO is based in Grand Rapids and focuses primarily on West Michigan while evaluating selected opportunities in other markets when appropriate.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative flex min-h-[560px] items-center overflow-hidden">
          <Image
            src="/images/property3.jpg"
            alt="Commercial real estate investment"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 via-[#14213D]/85 to-[#14213D]/45" />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-white">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Commercial Real Estate
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Strategic Commercial
                <br />
                Investment Opportunities
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                We evaluate commercial properties and partnerships through
                disciplined analysis, responsible due diligence, and a
                long-term investment perspective.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white"
              >
                Discuss an Opportunity
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
                Our Commercial Focus
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#14213D] md:text-5xl">
                Commercial Real Estate Requires Vision, Discipline, and Careful Analysis
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Commercial real estate presents opportunities to create
                  long-term value through strategic acquisition, responsible
                  ownership, thoughtful improvements, and strong professional
                  partnerships. It also involves greater complexity than many
                  residential transactions.
                </p>

                <p>
                  Every property may include unique lease structures, operating
                  expenses, zoning requirements, maintenance obligations,
                  tenant considerations, environmental concerns, and capital
                  needs. These factors must be reviewed carefully before an
                  investment decision is made.
                </p>

                <p>
                  FAHOPROSO approaches commercial opportunities with a
                  disciplined mindset. We seek to understand the property,
                  market, current operation, risks, and realistic long-term
                  potential rather than relying only on surface-level
                  projections.
                </p>

                <p>
                  Our goal is to identify opportunities where professional
                  ownership, appropriate investment, and clear planning can
                  support businesses, tenants, investors, and surrounding
                  communities.
                </p>
              </div>
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image
                src="/images/service-commercial.jpg"
                alt="Commercial property evaluated by FAHOPROSO"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  FAHOPROSO
                </p>

                <p className="mt-2 text-2xl font-bold">
                  Commercial Investment Analysis
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
                Commercial Property Types
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Each property must meet our investment standards and complete
                due-diligence requirements.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Store, label: "Retail properties" },
                { icon: Building2, label: "Office buildings" },
                { icon: Warehouse, label: "Industrial and warehouse space" },
                { icon: Landmark, label: "Mixed-use properties" },
                { icon: CheckCircle2, label: "Commercial land opportunities" },
                { icon: CheckCircle2, label: "Properties requiring repositioning" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-slate-300 bg-white p-5 shadow-sm"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-[#C9A227]" />
                    <p className="font-semibold text-[#14213D]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Evaluation factors */}
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
                Commercial investment analysis includes the property itself,
                its current operation, legal considerations, financial
                performance, and future market position.
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

        {/* Commercial philosophy */}
        <section className="bg-[#14213D] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Investment Philosophy
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Long-Term Value Begins With Responsible Decisions
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Strong commercial investments require careful underwriting,
                realistic expectations, professional relationships, and a clear
                operating strategy.
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

        {/* Due diligence */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/property3.jpg"
                alt="Commercial real estate property"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Commercial Due Diligence
              </p>

              <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-4xl font-bold text-[#14213D] md:text-5xl">
                Understanding the Complete Property
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Commercial property performance depends on more than purchase
                  price and projected rent. A complete review may include
                  leases, tenant obligations, operating expenses, property
                  taxes, insurance, utilities, repairs, capital improvements,
                  and future vacancy risk.
                </p>

                <p>
                  Physical and legal considerations are equally important.
                  Depending on the opportunity, due diligence may involve
                  inspections, surveys, zoning verification, title review,
                  environmental assessments, accessibility, code compliance,
                  and evaluation of major building systems.
                </p>

                <p>
                  We believe careful due diligence protects all parties involved
                  and creates a stronger foundation for responsible ownership.
                  When information is incomplete or risks cannot be evaluated
                  appropriately, we may determine that an opportunity does not
                  fit our investment strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership section */}
        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Professional Partnerships
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#14213D] md:text-5xl">
                Building Relationships That Support Stronger Opportunities
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
            </div>

            <div className="mx-auto mt-12 max-w-5xl space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Commercial real estate often requires collaboration among
                property owners, brokers, attorneys, lenders, inspectors,
                contractors, engineers, tenants, property managers, investors,
                and local authorities. Successful transactions depend on clear
                communication and professional coordination.
              </p>

              <p>
                FAHOPROSO values relationships built on integrity,
                responsiveness, accurate information, and mutual respect. We
                welcome opportunities to work with professionals who share a
                commitment to responsible real estate investment and long-term
                value creation.
              </p>

              <p>
                We are especially interested in opportunities where thoughtful
                improvements, repositioning, improved operations, or strategic
                partnerships may strengthen a property and contribute
                positively to the surrounding business community.
              </p>
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
                From Opportunity Review to Investment Decision
              </h2>

              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our process is designed to identify opportunities clearly while
                recognizing the financial, physical, operational, and legal
                risks involved.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-300 bg-slate-100 p-7"
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
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-slate-300 bg-white p-8 shadow-sm md:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]">
                <Building2 className="h-8 w-8 text-white" />
              </div>

              <h2 className="mt-7 text-4xl font-bold text-[#14213D]">
                Our Commitment to Responsible Commercial Growth
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  FAHOPROSO is building its commercial investment capabilities
                  with a long-term perspective. We are focused on disciplined
                  growth rather than pursuing every available opportunity.
                </p>

                <p>
                  Each potential acquisition or partnership must support a
                  realistic operating plan, responsible ownership, professional
                  relationships, and a clear understanding of both opportunity
                  and risk.
                </p>

                <p>
                  Our goal is to grow thoughtfully while creating value for
                  property owners, tenants, partners, investors, and the
                  communities in which we operate.
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
                Commercial Property Questions
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
              Share an Opportunity
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Let&apos;s Discuss Your Commercial Property
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Share information about the property, current use, occupancy,
              condition, financial performance, and your goals. We will review
              the opportunity and contact you about possible next steps.
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