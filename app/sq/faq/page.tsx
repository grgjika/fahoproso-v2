import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Pyetje të Shpeshta",
  description:
    "Gjeni përgjigje të qarta për pyetjet e zakonshme rreth shitjes së një prone, ofertave, mbylljes, pronave të trashëguara dhe më shumë.",
  alternates: {
  canonical: "https://www.fahoproso.com/sq/faq",
  languages: {
    "en-US": "https://www.fahoproso.com/faq",
    "es-US": "https://www.fahoproso.com/es/faq",
    "el-GR": "https://www.fahoproso.com/el/faq",
    sq: "https://www.fahoproso.com/sq/faq",
  },
},
};

export default function FAQPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <FAQ locale="sq" />
        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}