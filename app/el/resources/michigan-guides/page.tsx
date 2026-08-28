import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Οδηγοί Ακινήτων Michigan",
  description:
    "Εξερευνήστε τοπικές πληροφορίες για ιδιοκτήτες και πωλητές ακινήτων στο Grand Rapids, Kent County, Ottawa County, Troy και άλλες περιοχές του Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/resources/michigan-guides",
  },
};

const areas = [
  {
    title: "Grand Rapids",
    description:
      "Πληροφορίες για ιδιοκτήτες που σκέφτονται να πουλήσουν κατοικία ή άλλο ακίνητο στο Grand Rapids.",
    href: "/sell-my-house-grand-rapids",
  },
  {
    title: "Kent County",
    description:
      "Εξερευνήστε πληροφορίες για ιδιοκτήτες και πωλητές ακινήτων στο Kent County και τις κοινότητές του.",
    href: "/sell-my-house-kent-county",
  },
  {
    title: "Ottawa County",
    description:
      "Πληροφορίες για ιδιοκτήτες που εξετάζουν τις επιλογές πώλησης ακινήτου στο Ottawa County.",
    href: "/sell-my-house-ottawa-county",
  },
  {
    title: "Troy",
    description:
      "Πληροφορίες για ιδιοκτήτες που σκέφτονται να πουλήσουν κατοικία ή άλλο ακίνητο στο Troy του Michigan.",
    href: "/sell-my-house-troy",
  },
];

export default function MichiganGuidesEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Τοπικές Πληροφορίες
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Οδηγοί Michigan
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Εξερευνήστε πληροφορίες για ιδιοκτήτες και πωλητές ακινήτων στις
              κοινότητες του Michigan στις οποίες εστιάζει η FAHOPROSO.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Τοπική γνώση
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Κάθε αγορά ακινήτων είναι διαφορετική
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Η τοποθεσία μπορεί να επηρεάσει την αξία ενός ακινήτου, τη ζήτηση
              από αγοραστές, τον χρόνο που απαιτείται για την πώληση και τις
              επιλογές που έχει ένας ιδιοκτήτης.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Οι τοπικοί οδηγοί μας αποτελούν ένα σημείο εκκίνησης για να
              γνωρίσετε καλύτερα ορισμένες από τις περιοχές του Michigan στις
              οποίες εστιάζουμε.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Περιοχές του Michigan
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                Εξερευνήστε τους τοπικούς οδηγούς μας
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {areas.map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-[#14213D]">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <p className="mt-6 font-semibold text-[#C9A227]">
                    Εξερεύνηση περιοχής →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}