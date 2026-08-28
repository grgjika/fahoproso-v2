import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Οδηγός Επενδύσεων σε Κατοικίες",
  description:
    "Εξερευνήστε βασικούς παράγοντες που μπορούν να εξετάζουν οι επενδυτές κατά την αξιολόγηση επενδυτικών ευκαιριών σε κατοικίες στο Michigan.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/el/resources/residential-investments",
  },
};

const factors = [
  {
    number: "01",
    title: "Τοποθεσία και αγορά",
    description:
      "Εξετάστε την τοποθεσία του ακινήτου, την τοπική ζήτηση, συγκρίσιμες πωλήσεις και τα χαρακτηριστικά της περιοχής. Η αγορά μπορεί να επηρεάσει σημαντικά τη σημερινή και τη μελλοντική αξία μιας επένδυσης.",
  },
  {
    number: "02",
    title: "Τιμή αγοράς",
    description:
      "Η τιμή απόκτησης μπορεί να καθορίσει μεγάλο μέρος της δυναμικής μιας επένδυσης. Συγκρίνετε το κόστος αγοράς με τη σημερινή αξία και την πιθανή αξία του ακινήτου μετά από βελτιώσεις.",
  },
  {
    number: "03",
    title: "Κατάσταση και επισκευές",
    description:
      "Αξιολογήστε την κατάσταση της κατασκευής, των βασικών συστημάτων και των απαραίτητων εργασιών. Μια ρεαλιστική εκτίμηση επισκευών βοηθά ώστε τα κόστη να μην περιορίσουν το αναμενόμενο περιθώριο.",
  },
  {
    number: "04",
    title: "Επενδυτική στρατηγική",
    description:
      "Καθορίστε αν το ακίνητο είναι καταλληλότερο για ανακαίνιση και μεταπώληση, μακροχρόνια μίσθωση ή κάποια άλλη επενδυτική στρατηγική πριν δεσμεύσετε κεφάλαια.",
  },
  {
    number: "05",
    title: "Συνολικό κόστος",
    description:
      "Εκτός από την αγορά και τις επισκευές, εξετάστε τη χρηματοδότηση, τους φόρους, την ασφάλιση, τους λογαριασμούς, τη συντήρηση και τα έξοδα κλεισίματος.",
  },
  {
    number: "06",
    title: "Στρατηγική εξόδου και περιθώριο ασφαλείας",
    description:
      "Σχεδιάστε πώς αναμένετε να ολοκληρώσετε την επένδυση και διατηρήστε περιθώριο για απρόβλεπτες αλλαγές στο κόστος, στον χρόνο ή στις συνθήκες της αγοράς.",
  },
];

export default function ResidentialInvestmentsEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Επενδυτικές Πληροφορίες
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Επενδύσεις σε Κατοικίες
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Μια σωστή επένδυση σε κατοικία ξεκινά με προσεκτική αξιολόγηση
              του ακινήτου, του κόστους, της αγοράς και της επενδυτικής
              στρατηγικής πριν από οποιαδήποτε απόφαση.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Πριν επενδύσετε
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Αξιολογήστε ολόκληρη τη συμφωνία, όχι μόνο το ακίνητο
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ένα ακίνητο μπορεί να φαίνεται ελκυστικό, όμως το αποτέλεσμα μιας
              επένδυσης εξαρτάται από πολύ περισσότερα από την τιμή αγοράς. Οι
              επισκευές, η χρηματοδότηση, η συντήρηση και τα έξοδα πώλησης
              μπορούν επίσης να επηρεάσουν την απόδοση.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Αξιολόγηση
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                6 σημαντικοί παράγοντες προς ανάλυση
              </h2>
            </div>

            <div className="mt-12 space-y-6">
              {factors.map((factor) => (
                <div
                  key={factor.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex md:gap-7"
                >
                  <div className="text-3xl font-bold text-[#C9A227]">
                    {factor.number}
                  </div>

                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-[#14213D]">
                      {factor.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Υπενθύμιση
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Διατηρήστε ένα περιθώριο ασφαλείας
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Οι επισκευές, τα χρονοδιαγράμματα και οι συνθήκες της αγοράς
              μπορούν να αλλάξουν. Οι συντηρητικές εκτιμήσεις και η διατήρηση
              αποθεματικού για απρόβλεπτα έξοδα μπορούν να βοηθήσουν στον
              περιορισμό του επενδυτικού κινδύνου.
            </p>
          </div>
        </section>

        <CTA locale="el" />
      </main>

      <Footer locale="el" />
      <ScrollToTop />
    </>
  );
}