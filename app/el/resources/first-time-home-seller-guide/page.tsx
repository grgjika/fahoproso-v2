import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Οδηγός για Πωλητές Κατοικίας Πρώτης Φοράς",
  description:
    "Ένας πρακτικός οδηγός για ιδιοκτήτες που πουλούν κατοικία για πρώτη φορά στο Michigan, από την προετοιμασία μέχρι το κλείσιμο.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/el/resources/first-time-home-seller-guide",
  },
};

const steps = [
  {
    number: "01",
    title: "Κατανοήστε γιατί θέλετε να πουλήσετε",
    description:
      "Πριν ξεκινήσετε, σκεφτείτε τους στόχους σας, το χρονικό σας πλαίσιο και τι θέλετε να πετύχετε από την πώληση. Αυτό μπορεί να σας βοηθήσει να επιλέξετε την κατάλληλη λύση.",
  },
  {
    number: "02",
    title: "Γνωρίστε την κατάσταση του ακινήτου σας",
    description:
      "Εξετάστε τη γενική κατάσταση του σπιτιού και αποφασίστε αν χρειάζονται επισκευές, καθαρισμός ή αναβαθμίσεις. Μπορείτε επίσης να εξετάσετε την πώληση του ακινήτου ως έχει.",
  },
  {
    number: "03",
    title: "Κατανοήστε την αξία του ακινήτου",
    description:
      "Η αξία ενός σπιτιού μπορεί να επηρεάζεται από την τοποθεσία, την κατάσταση, το μέγεθος, τις πρόσφατες συγκρίσιμες πωλήσεις και τις τρέχουσες συνθήκες της αγοράς.",
  },
  {
    number: "04",
    title: "Συγκρίνετε τις επιλογές πώλησης",
    description:
      "Μπορείτε να πουλήσετε μέσω μεσίτη, μόνοι σας ή απευθείας σε έναν αγοραστή ακινήτων. Κάθε επιλογή έχει διαφορετικό κόστος, χρόνο και υποχρεώσεις.",
  },
  {
    number: "05",
    title: "Εξετάστε προσεκτικά κάθε προσφορά",
    description:
      "Μην εξετάζετε μόνο την τιμή. Λάβετε επίσης υπόψη την ημερομηνία κλεισίματος, τις προϋποθέσεις, τα έξοδα, τη χρηματοδότηση και άλλους όρους της προσφοράς.",
  },
  {
    number: "06",
    title: "Προετοιμαστείτε για το κλείσιμο",
    description:
      "Κατά το κλείσιμο ολοκληρώνονται τα τελικά έγγραφα και μεταβιβάζεται επίσημα το ακίνητο. Βεβαιωθείτε ότι κατανοείτε τα έγγραφα πριν τα υπογράψετε.",
  },
];

export default function FirstTimeHomeSellerGuideEL() {
  return (
    <>
      <Navbar locale="el" />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Οδηγός για Ιδιοκτήτες
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Οδηγός για Πωλητές Κατοικίας Πρώτης Φοράς
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Η πώληση ενός σπιτιού για πρώτη φορά μπορεί να φαίνεται
              περίπλοκη. Η κατανόηση των βασικών βημάτων μπορεί να σας βοηθήσει
              να πάρετε αποφάσεις με μεγαλύτερη σιγουριά.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Πριν ξεκινήσετε
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Τι πρέπει να γνωρίζετε πριν πουλήσετε
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Δεν υπάρχει μόνο ένας σωστός τρόπος για να πουλήσετε ένα ακίνητο.
              Ανάλογα με την κατάστασή σας, μπορεί να σας ενδιαφέρει περισσότερο
              η υψηλότερη δυνατή τιμή, μια γρήγορη πώληση, η αποφυγή επισκευών ή
              η ευελιξία στην ημερομηνία κλεισίματος.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Αν γνωρίζετε τις προτεραιότητές σας από την αρχή, η διαδικασία
              μπορεί να γίνει πολύ πιο απλή.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
                Η διαδικασία
              </p>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

              <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
                6 βήματα για πωλητές πρώτης φοράς
              </h2>
            </div>

            <div className="mt-12 space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex md:gap-7"
                >
                  <div className="text-3xl font-bold text-[#C9A227]">
                    {step.number}
                  </div>

                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-[#14213D]">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {step.description}
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
              Να θυμάστε
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Δεν είναι όλες οι πωλήσεις ίδιες
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ένα ακίνητο που χρειάζεται επισκευές, ένα κληρονομημένο σπίτι, ένα
              κενό ακίνητο ή ένα ενοικιαζόμενο ακίνητο μπορεί να απαιτεί
              διαφορετική προσέγγιση. Συγκρίνετε τις επιλογές σας και επιλέξτε
              τη λύση που ταιριάζει καλύτερα στις ανάγκες σας.
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