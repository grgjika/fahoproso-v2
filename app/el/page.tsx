import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: { absolute: "FAHOPROSO | Λύσεις Ακινήτων στο Michigan" },

  description:
    "Η FAHOPROSO βοηθά ιδιοκτήτες ακινήτων στο Michigan να εξετάσουν απλές και ξεκάθαρες επιλογές για την πώληση του ακινήτου τους.",

  alternates: {
    canonical: "https://www.fahoproso.com/el/",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "el-GR": "https://www.fahoproso.com/el/",
      "es-US": "https://www.fahoproso.com/es/",
      "sq": "https://www.fahoproso.com/sq/",
    },
  },
};

export default function GreekHome() {
  return (
    <>
      <Navbar locale="el" />
      <Hero locale="el" />
      <HomeSections locale="el" />
      <CTA locale="el" />
      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}