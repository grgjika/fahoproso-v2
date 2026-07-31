import {
  Home,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
          About FAHOPROSO
        </p>

        <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          Our Real Estate Investment Approach
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          FAHOPROSO is a real estate investment company focused on acquiring,
          improving, and managing residential and commercial properties. We
          help homeowners find practical solutions while creating long-term
          value for investors and the communities we serve. If you're looking
          to sell your property, we can provide a fast, fair, and hassle-free
          cash offer.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-2xl border border-slate-200 bg-stone-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
   <Home className="mb-4 h-10 w-10 text-blue-600" />
    <h3 className="text-xl font-bold text-slate-900">Residential</h3>
    <p className="mt-3 text-slate-600">
      Acquiring, renovating, and managing residential properties.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-stone-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <Building2 className="mb-4 h-10 w-10 text-blue-600" />
    <h3 className="text-xl font-bold text-slate-900">Commercial</h3>
    <p className="mt-3 text-slate-600">
      Investing in commercial opportunities that create lasting value.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-stone-300 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <Handshake className="mb-4 h-10 w-10 text-blue-600" />
    <h3 className="text-xl font-bold text-slate-900">Partnerships</h3>
    <p className="mt-3 text-slate-600">
      Building trusted relationships with sellers, investors, and communities.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-stone-400 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <TrendingUp className="mb-4 h-10 w-10 text-blue-600" />
    <h3 className="text-xl font-bold text-slate-900">Long-Term Value</h3>
    <p className="mt-3 text-slate-600">
      Creating sustainable growth through strategic real estate investments.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}