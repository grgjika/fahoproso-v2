import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Οδηγοί για Ιδιοκτήτες",
  description:
    "Εξερευνήστε πρακτικούς οδηγούς της FAHOPROSO για ιδιοκτήτες που σκέφτονται να πουλήσουν ένα ακίνητο στο Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/resources/homeowner-guides",
  },
};

const guides = [
  {
    title: "Οδηγός για Πωλητές Πρώτης Φοράς",
    description:
      "Μάθετε τα βασικά βήματα για την προετοιμασία, την αξιολόγηση των επιλογών σας και την κατανόηση της διαδικασίας πώλησης ενός ακινήτου.",
    href: "/el/resources/first-time-home-seller-guide",
  },
  {
    title: "Μετακόμιση σε Μικρότερο Σπίτι",
    description:
      "Πρακτικές πληροφορίες για ιδιοκτήτες που σκέφτονται να μετακομίσουν σε μια μικρότερη κατοικία.",
    href: "/el/resources/downsizing-your-home",
  },
  {
    title: "Κληρονομημένα Ακίνητα και Probate",
    description:
      "Μάθετε για σημαντικά ζητήματα που μπορεί να προκύψουν κατά τη διαχείριση ή την πώληση ενός κληρονομημένου ακινήτου.",
    href: "/el/resources/probate-guide",
  },
  {
    title: "Οδηγοί Michigan",
    description:
      "Εξερευνήστε τοπικές πληροφορίες για ιδιοκτήτες και πωλητές ακινήτων σε διαφορετικές κοινότητες του Michigan.",
    href: "/el/resources/michigan-guides",
  },
];

export default function HomeownerGuidesPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Πληροφορίες για Ιδιοκτήτες
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Οδηγοί για Ιδιοκτήτες
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Πρακτικές πληροφορίες που σας βοηθούν να κατανοήσετε διαφορετικές
              καταστάσεις σχετικά με την ιδιοκτησία και την πώληση ακινήτων
              στο Michigan.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227] hover:shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-[#14213D]">
                    {guide.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {guide.description}
                  </p>

                  <p className="mt-6 font-semibold text-[#C9A227]">
                    Διαβάστε περισσότερα →
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