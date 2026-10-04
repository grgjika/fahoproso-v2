import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesHub from "@/components/ResourcesHub";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Πληροφορίες",
  description:
    "Εξερευνήστε οδηγούς και πληροφορίες της FAHOPROSO σχετικά με πωλήσεις ακινήτων, επενδύσεις και θέματα για ιδιοκτήτες στο Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/resources",
    languages: {
    "en-US": "https://www.fahoproso.com/resources",
    "es-US": "https://www.fahoproso.com/es/resources",
    "el-GR": "https://www.fahoproso.com/el/resources",
    sq: "https://www.fahoproso.com/sq/resources",
  },
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

        <ResourcesHub locale="el" />
        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}