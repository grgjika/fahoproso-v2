import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Σχετικά με Εμάς",
  description:
    "Μάθετε περισσότερα για τη FAHOPROSO και την προσέγγισή μας στις επενδύσεις οικιστικών και επαγγελματικών ακινήτων στο Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/about",
  },
};

export default function AboutPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Σχετικά με τη FAHOPROSO
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Επενδύουμε σε Ακίνητα.
              <br />
              Δημιουργούμε Ευκαιρίες.
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Η Faithfull Home & Property Solutions, LLC παρέχει πρακτικές,
              διαφανείς και επαγγελματικά διαχειριζόμενες λύσεις επενδύσεων
              σε ακίνητα.
            </p>
          </div>
        </section>

        <About locale="el" />
        <WhyChooseUs locale="el" />
        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}