export default function CTA() {
  return (
    <section className="bg-stone-200 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
          Let's Work Together
        </p>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

        <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
          Ready to Sell, Invest, or Partner?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Whether you're selling a property, looking for your next investment,
          or exploring commercial opportunities, FAHOPROSO is ready to help.
        </p>

        <a
          href="contact"
          className="mt-10 inline-flex rounded-lg bg-[#C9A227] px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
        >
          Contact Us Today
        </a>

      </div>
    </section>
  );
}