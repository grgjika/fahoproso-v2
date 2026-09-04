import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Επενδυτικά Έργα",
  description:
    "Εξερευνήστε την προσέγγιση της FAHOPROSO στις οικιστικές επενδύσεις, τα ενοικιαζόμενα ακίνητα και τις επαγγελματικές ευκαιρίες ακινήτων στο Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/projects",
    languages: {
    "en-US": "https://www.fahoproso.com/projects",
    "es-US": "https://www.fahoproso.com/es/projects",
    "el-GR": "https://www.fahoproso.com/el/projects",
    sq: "https://www.fahoproso.com/sq/projects",
  },
  },
};

export default function ProjectsPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <Projects locale="el" />
        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}