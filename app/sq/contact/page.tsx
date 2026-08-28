import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktoni FAHOPROSO për të diskutuar pronën tuaj, një shitje të mundshme ose një mundësi investimi në Michigan.",
  alternates: {
    canonical: "https://www.fahoproso.com/sq/contact",
  },
};

export default function ContactPageSQ() {
  return (
    <>
      <Navbar locale="sq" />

      <main className="pt-24">
        <Contact locale="sq" />
      </main>

      <Footer locale="sq" />
      <ScrollToTop />
    </>
  );
}