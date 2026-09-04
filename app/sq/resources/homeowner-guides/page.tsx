import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Udhëzues për Pronarët",
  description:
    "Eksploroni udhëzues praktikë të FAHOPROSO për pronarët që po konsiderojnë shitjen e një prone në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/resources/homeowner-guides",
    languages: {
    "en-US": "https://www.fahoproso.com/resources/homeowner-guides",
    "es-US": "https://www.fahoproso.com/es/resources/homeowner-guides",
    "el-GR": "https://www.fahoproso.com/el/resources/homeowner-guides",
    sq: "https://www.fahoproso.com/sq/resources/homeowner-guides",
  },
  },
};

const guides = [
  {
    title: "Udhëzues për Shitësit për Herë të Parë",
    description:
      "Mësoni hapat kryesorë për t'u përgatitur, për të vlerësuar mundësitë tuaja dhe për të kuptuar procesin e shitjes së një prone.",
    href: "/sq/resources/first-time-home-seller-guide",
  },
  {
    title: "Kalimi në një Shtëpi më të Vogël",
    description:
      "Informacion praktik për pronarët që po konsiderojnë të kalojnë në një banesë më të vogël.",
    href: "/sq/resources/downsizing-your-home",
  },
  {
    title: "Pronat e Trashëguara dhe Probate",
    description:
      "Mësoni rreth çështjeve të rëndësishme që mund të lindin gjatë menaxhimit ose shitjes së një prone të trashëguar.",
    href: "/sq/resources/probate-guide",
  },
  {
    title: "Udhëzues për Michigan",
    description:
      "Eksploroni informacione lokale për pronarët dhe shitësit e pronave në komunitete të ndryshme të Michigan.",
    href: "/sq/resources/michigan-guides",
  },
];

export default function HomeownerGuidesPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Burime për Pronarët
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Udhëzues për Pronarët
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Informacion praktik për t'ju ndihmuar të kuptoni situata të
              ndryshme që lidhen me pronësinë dhe shitjen e pasurive të
              paluajtshme në Michigan.
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
                    Lexo më shumë →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}