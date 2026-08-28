import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Burime",
  description:
    "Eksploroni udhëzues dhe burime të FAHOPROSO rreth shitjes së pronave, investimeve dhe temave për pronarët në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/resources",
  },
};

export default function ResourcesPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Burime FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Udhëzues dhe Burime për Pasuri të Paluajtshme
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Eksploroni informacione të dobishme rreth shitjes së pronave,
              investimeve dhe çështjeve të rëndësishme për pronarët në Michigan.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
            <a
              href="/sq/resources/homeowner-guides"
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#14213D]">
                Udhëzues për Pronarët
              </h2>
              <p className="mt-3 text-slate-600">
                Informacion praktik për pronarët që po mendojnë të shesin ose
                duan të kuptojnë mundësitë e tyre.
              </p>
            </a>

            <a
              href="/sq/resources/residential-investments"
              className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#14213D]">
                Informacion për Investime
              </h2>
              <p className="mt-3 text-slate-600">
                Eksploroni tema rreth investimeve rezidenciale, pronave me qira
                dhe pasurive të paluajtshme komerciale.
              </p>
            </a>
          </div>
        </section>
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}