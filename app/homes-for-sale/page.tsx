import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import HomesForSale from "@/components/homes/HomesForSale";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Hidden from Google until real houses replace the samples in
// components/homes/listings.ts (then delete the `robots` line).
export const metadata: Metadata = {
  title: "Homes for Sale in Grand Rapids, MI",
  description:
    "Houses we bought, fixed up and now offer for sale in Grand Rapids and West Michigan. See photos and details.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.fahoproso.com/homes-for-sale/" },
};

export default function HomesForSalePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <HomesForSale />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
