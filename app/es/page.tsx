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
  title: "FAHOPROSO | Soluciones Inmobiliarias en Michigan",

  description:
    "FAHOPROSO ayuda a propietarios en Michigan a explorar opciones simples y claras para vender sus propiedades.",

  alternates: {
    canonical: "https://www.fahoproso.com/es",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "el-GR": "https://www.fahoproso.com/el",
      "es-US": "https://www.fahoproso.com/es",
      "sq": "https://www.fahoproso.com/sq",
    },
  },
};

export default function SpanishHome() {
  return (
    <>
      <Navbar locale="es" />
      <Hero locale="es" />
      <About locale="es" />
      <Services locale="es" />
      <HowItWorks locale="es" />
      <Projects locale="es" />
      <WhyChooseUs locale="es" />
      <FAQ locale="es" />
      <CTA locale="es" />
      <Contact locale="es" />
      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}