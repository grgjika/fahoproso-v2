import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Proyectos de Inversión",
  description:
    "Explore el enfoque de FAHOPROSO para inversiones residenciales, propiedades de alquiler y oportunidades inmobiliarias comerciales en Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/es/projects",
    languages: {
    "en-US": "https://www.fahoproso.com/projects",
    "es-US": "https://www.fahoproso.com/es/projects",
    "el-GR": "https://www.fahoproso.com/el/projects",
    sq: "https://www.fahoproso.com/sq/projects",
  },
  },
};

export default function ProjectsPageES() {
  return (
    <>
      <Navbar locale="es" />

      <main className="pt-24">
        <Projects locale="es" />
        <CTA locale="es" />
      </main>

      <Footer locale="es" />
      <ScrollToTop />
    </>
  );
}