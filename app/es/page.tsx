import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: { absolute: "FAHOPROSO | Soluciones Inmobiliarias en Michigan" },

  description:
    "FAHOPROSO ayuda a propietarios en Michigan a explorar opciones simples y claras para vender sus propiedades.",

  alternates: {
    canonical: "https://www.fahoproso.com/es/",
    languages: {
      "en-US": "https://www.fahoproso.com/",
      "x-default": "https://www.fahoproso.com/",
      "el-GR": "https://www.fahoproso.com/el/",
      "es-US": "https://www.fahoproso.com/es/",
      "sq": "https://www.fahoproso.com/sq/",
    },
  },
};

export default function SpanishHome() {
  return (
    <>
      <Navbar locale="es" />
      <Hero locale="es" />
      <HomeSections locale="es" />
      <CTA locale="es" />
      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}