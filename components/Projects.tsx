import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Handshake,
  Home,
  MapPin,
  TrendingUp,
} from "lucide-react";

const investmentAreas = [
  {
    icon: Home,
    title: "Residential Acquisitions",
    label: "Buy • Improve • Create Value",
    description:
      "We evaluate residential properties where thoughtful improvements and responsible ownership can create long-term value.",
    image: "/images/property1.jpg",
    href: "/investment-focus/residential",
  },
  {
    icon: TrendingUp,
    title: "Rental Investments",
    label: "Long-Term Ownership",
    description:
      "We pursue rental opportunities with a focus on stable operations, responsible maintenance, and sustainable portfolio growth.",
    image: "/images/property2.jpg",
    href: "/investment-focus/rentals",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    label: "Strategic Expansion",
    description:
      "We are expanding carefully into selected commercial opportunities, partnerships, and long-term investments.",
    image: "/images/property3.jpg",
    href: "/investment-focus/commercial",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Investment Projects
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl lg:text-5xl">
              Investing in Properties.
              Building Stronger Communities.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              FAHOPROSO is building its portfolio through carefully selected
              residential, rental, and commercial real estate opportunities
              across Michigan.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14213D] px-7 py-4 font-semibold text-white transition hover:bg-[#C9A227] hover:text-[#14213D] sm:w-auto"
          >
            Share an Opportunity
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {investmentAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden sm:h-60">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/85 via-[#14213D]/15 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
                    {area.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#14213D]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <Link
                    href={area.href}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#14213D] transition hover:text-[#C9A227]"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
{/* Portfolio Vision */}

<section className="mt-16 grid gap-8 lg:grid-cols-2">
  <div className="rounded-3xl bg-slate-100 p-8 sm:p-10">
    <p className="font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
      Our Vision
    </p>

    <h3 className="mt-4 text-3xl font-bold text-[#14213D] sm:text-4xl">
      More Than Acquisitions
    </h3>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Our goal is to improve properties thoughtfully, create stronger
      investment opportunities, and contribute positively to the communities
      where we operate.
    </p>

    <p className="mt-5 leading-8 text-slate-600">
      As our portfolio grows, this page will feature acquisitions,
      renovations, rental properties, commercial projects, and before-and-after
      stories from across Michigan.
    </p>
  </div>

  <div className="rounded-3xl border border-[#C9A227]/30 bg-[#FFF9EC] p-8 sm:p-10">
    <p className="font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
      Coming Soon
    </p>

    <h3 className="mt-4 text-3xl font-bold text-[#14213D] sm:text-4xl">
      Follow the FAHOPROSO Journey
    </h3>

    <div className="mt-7 space-y-4 text-slate-700">
      <p>✓ New property acquisitions</p>
      <p>✓ Renovation progress</p>
      <p>✓ Rental portfolio growth</p>
      <p>✓ Commercial opportunities</p>
      <p>✓ Community impact stories</p>
    </div>
  </div>
</section>
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#14213D] text-white">
          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <MapPin className="h-7 w-7 text-[#C9A227]" />

                <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  Michigan Focus
                </p>
              </div>

              <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                Growing Through Careful Acquisitions and Partnerships
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                We welcome conversations with property owners, real estate
                professionals, contractors, investors, and community partners
                who share our commitment to responsible growth.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-7 py-4 font-semibold text-[#14213D] transition hover:bg-white sm:w-auto"
            >
              <Handshake className="h-5 w-5" />
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}