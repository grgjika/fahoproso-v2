import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Πληροφορίες",
  description:
    "Εξερευνήστε οδηγούς και πληροφορίες της FAHOPROSO σχετικά με πωλήσεις ακινήτων, επενδύσεις και θέματα για ιδιοκτήτες στο Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/resources",
  },
};

export default function ResourcesPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Πληροφορίες FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Οδηγοί και Πληροφορίες για Ακίνητα
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Εξερευνήστε χρήσιμες πληροφορίες σχετικά με την πώληση ακινήτων,
              τις επενδύσεις και σημαντικά θέματα για ιδιοκτήτες στο Michigan.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
            <a
              href="/el/resources/homeowner-guides"
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#14213D]">
                Οδηγοί για Ιδιοκτήτες
              </h2>
              <p className="mt-3 text-slate-600">
                Πρακτικές πληροφορίες για ιδιοκτήτες που σκέφτονται να πουλήσουν
                ή θέλουν να κατανοήσουν τις διαθέσιμες επιλογές τους.
              </p>
            </a>

            <a
              href="/el/resources/residential-investments"
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#14213D]">
                Επενδυτικές Πληροφορίες
              </h2>
              <p className="mt-3 text-slate-600">
                Εξερευνήστε θέματα σχετικά με οικιστικές επενδύσεις, ακίνητα
                προς ενοικίαση και επαγγελματικά ακίνητα.
              </p>
            </a>
          </div>
        </section>
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}