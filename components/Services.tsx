export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-600 font-semibold uppercase">
          Our Services
        </p>

        <h2 className="mt-3 text-5xl font-bold text-slate-900">
          What We Do
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold">Buy Houses</h3>
            <p className="mt-3 text-slate-600">
              Fast, fair cash offers for homeowners.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold">Commercial Investments</h3>
            <p className="mt-3 text-slate-600">
              Acquiring and developing commercial properties.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold">Property Management</h3>
            <p className="mt-3 text-slate-600">
              Professional management for investment properties.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}