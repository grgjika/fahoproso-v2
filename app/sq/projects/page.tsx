import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Projektet e Investimit",
  description:
    "Eksploroni qasjen e FAHOPROSO ndaj investimeve rezidenciale, pronave me qira dhe mundësive komerciale të pasurive të paluajtshme në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/projects",
  },
};

export default function ProjectsPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <Projects locale="sq" />
        <CTA locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}