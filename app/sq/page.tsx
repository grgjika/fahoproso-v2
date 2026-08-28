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
  title: "FAHOPROSO | Zgjidhje për Pasuri të Paluajtshme në Michigan",

  description:
    "FAHOPROSO ndihmon pronarët në Michigan të shqyrtojnë mundësi të thjeshta dhe të qarta për shitjen e pronave të tyre.",

  alternates: {
    canonical: "https://www.fahoproso.com/sq",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "el-GR": "https://www.fahoproso.com/el",
      "es-US": "https://www.fahoproso.com/es",
      "sq": "https://www.fahoproso.com/sq",
    },
  },
};

export default function AlbanianHome() {
  return (
    <>
      <Navbar locale="sq" />
      <Hero locale="sq" />
      <About locale="sq" />
      <Services locale="sq" />
      <HowItWorks locale="sq" />
      <Projects locale="sq" />
      <WhyChooseUs locale="sq" />
      <FAQ locale="sq" />
      <CTA locale="sq" />
      <Contact locale="sq" />
      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}