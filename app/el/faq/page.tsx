import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Συχνές Ερωτήσεις",
  description:
    "Βρείτε ξεκάθαρες απαντήσεις σε συχνές ερωτήσεις σχετικά με την πώληση ακινήτου, τις προσφορές, την ολοκλήρωση συναλλαγών, τα κληρονομημένα ακίνητα και άλλα.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/faq",
  },
};

export default function FAQPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <FAQ locale="el" />
        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}