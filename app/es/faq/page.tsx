import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Encuentre respuestas claras a preguntas comunes sobre vender una propiedad, recibir una oferta, el cierre, propiedades heredadas y más.",
  alternates: {
  canonical: "https://www.fahoproso.com/es/faq",
  languages: {
    "en-US": "https://www.fahoproso.com/faq",
    "es-US": "https://www.fahoproso.com/es/faq",
    "el-GR": "https://www.fahoproso.com/el/faq",
    sq: "https://www.fahoproso.com/sq/faq",
  },
},
};

export default function FAQPageES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <FAQ locale="es" />
        <CTA locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}