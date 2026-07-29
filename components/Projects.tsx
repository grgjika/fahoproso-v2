export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-600 font-semibold uppercase">
          Featured Projects
        </p>

        <h2 className="mt-3 text-5xl font-bold text-slate-900">
          Our Portfolio
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="h-80 rounded-xl bg-slate-200"></div>

          <div className="h-80 rounded-xl bg-slate-200"></div>

          <div className="h-80 rounded-xl bg-slate-200"></div>

        </div>

      </div>
    </section>
  );
}