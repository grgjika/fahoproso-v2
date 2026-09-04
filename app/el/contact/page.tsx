import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με τη FAHOPROSO για να συζητήσουμε το ακίνητό σας, μια πιθανή πώληση ή μια επενδυτική ευκαιρία στο Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/contact",
    languages: {
    "en-US": "https://www.fahoproso.com/contact",
    "es-US": "https://www.fahoproso.com/es/contact",
    "el-GR": "https://www.fahoproso.com/el/contact",
    sq: "https://www.fahoproso.com/sq/contact",
  },
  },
};

export default function ContactPageEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <Contact locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}