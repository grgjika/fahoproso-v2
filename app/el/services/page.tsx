import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Υπηρεσίες Ακινήτων",
  description:
    "Εξερευνήστε τις υπηρεσίες οικιστικών, επαγγελματικών και ενοικιαζόμενων ακινήτων της FAHOPROSO στο Michigan.",
  alternates: {
  canonical: "https://www.fahoproso.com/el/services",
  languages: {
    "en-US": "https://www.fahoproso.com/services",
    "es-US": "https://www.fahoproso.com/es/services",
    "el-GR": "https://www.fahoproso.com/el/services",
    sq: "https://www.fahoproso.com/sq/services",
  },
},
};

export default function ServicesPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Οι Υπηρεσίες μας
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Λύσεις Ακινήτων
              <br />
              Προσαρμοσμένες στους Στόχους σας
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Αξιολογούμε ευκαιρίες σε οικιστικά, επαγγελματικά, ενοικιαζόμενα
              ακίνητα και έργα ανάπτυξης, προσφέροντας σαφείς και πρακτικές
              λύσεις ακινήτων.
            </p>
          </div>
        </section>

        <Services locale="el" />
        <HowItWorks locale="el" />
        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}