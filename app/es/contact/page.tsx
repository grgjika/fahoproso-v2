import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte a FAHOPROSO para hablar sobre su propiedad, una posible venta o una oportunidad inmobiliaria en Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/es/contact",
    languages: {
    "en-US": "https://www.fahoproso.com/contact",
    "es-US": "https://www.fahoproso.com/es/contact",
    "el-GR": "https://www.fahoproso.com/el/contact",
    sq: "https://www.fahoproso.com/sq/contact",
  },
  },
};

export default function ContactPageES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <Contact locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}