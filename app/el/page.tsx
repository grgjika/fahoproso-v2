import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "FAHOPROSO | Λύσεις Ακινήτων στο Michigan",

  description:
    "Η FAHOPROSO βοηθά ιδιοκτήτες ακινήτων στο Michigan να εξετάσουν απλές και ξεκάθαρες επιλογές για την πώληση του ακινήτου τους.",

  alternates: {
    canonical: "https://www.fahoproso.com/el",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "el-GR": "https://www.fahoproso.com/el",
      "es-US": "https://www.fahoproso.com/es",
      "sq": "https://www.fahoproso.com/sq",
    },
  },
};

export default function GreekHome() {
  return (
    <>
      <Navbar locale="el" />
      <Hero locale="el" />
      <About locale="el" />
      <Services locale="el" />
      <HowItWorks locale="el" />
      <Projects locale="el" />
      <WhyChooseUs locale="el" />
      <FAQ locale="el" />
      <CTA locale="el" />
      <Contact locale="el" />
      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}