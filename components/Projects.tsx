import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
            Investment Focus
          </p>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Our Real Estate Expertise
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            FAHOPROSO identifies residential and commercial real estate
            opportunities that create value for homeowners, investors,
            and the communities we proudly serve.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl">

            <Image
              src="/images/property1.jpg"
              alt="Residential Acquisitions"
              width={600}
              height={400}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">
              <span className="rounded-full bg-[#C9A227]/10 px-4 py-2 text-sm font-semibold text-[#C9A227]">
                Buy • Renovate • Sell
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Residential Acquisitions
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We purchase homes in any condition and provide homeowners
                with fast, reliable, and hassle-free solutions.
              </p>

              <a
                href="/investment-focus/residential"
                className="mt-8 inline-flex rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-[#C9A227]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl">

            <Image
              src="/images/property2.jpg"
              alt="Rental Investments"
              width={600}
              height={400}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">
              <span className="rounded-full bg-[#C9A227]/10 px-4 py-2 text-sm font-semibold text-[#C9A227]">
                Long-Term Income
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Rental Investments
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We acquire quality rental properties that generate
                dependable cash flow while building long-term wealth.
              </p>

              <a
                href="/investment-focus/rentals"
                className="mt-8 inline-flex rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-[#C9A227]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl">

            <Image
              src="/images/property3.jpg"
              alt="Commercial Real Estate"
              width={600}
              height={400}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">
              <span className="rounded-full bg-[#C9A227]/10 px-4 py-2 text-sm font-semibold text-[#C9A227]">
                Growth Strategy
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Commercial Real Estate
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We are expanding into commercial real estate through
                strategic acquisitions and partnerships that strengthen
                local communities.
              </p>

              <a
                href="/investment-focus/commercial"
                className="mt-8 inline-flex rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-[#C9A227]"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}