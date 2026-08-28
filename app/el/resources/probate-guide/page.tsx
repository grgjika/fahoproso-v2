import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Οδηγός Κληρονομημένων Ακινήτων και Probate",
  description:
    "Ένας πρακτικός οδηγός για ιδιοκτήτες και οικογένειες στο Michigan που διαχειρίζονται κληρονομημένο ακίνητο ή διαδικασία probate.",
  alternates: {
    canonical: "https://www.fahoproso.com/el/resources/probate-guide",
  },
};

const steps = [
  {
    number: "01",
    title: "Επιβεβαιώστε ποιος έχει δικαίωμα διαχείρισης",
    description:
      "Πριν από οποιαδήποτε πώληση ή σημαντική απόφαση, επιβεβαιώστε ποιος έχει τη νόμιμη εξουσία να διαχειριστεί το ακίνητο. Αυτό μπορεί να εξαρτάται από διαθήκη, δικαστική διαδικασία ή άλλα νομικά έγγραφα.",
  },
  {
    number: "02",
    title: "Ελέγξτε την κατάσταση του ακινήτου",
    description:
      "Εξετάστε το ακίνητο και προσδιορίστε αν χρειάζονται επισκευές, καθαρισμός, συντήρηση ή πρόσθετη προστασία όσο εξελίσσεται η διαδικασία.",
  },
  {
    number: "03",
    title: "Καταγράψτε έξοδα και οικονομικές υποχρεώσεις",
    description:
      "Ελέγξτε φόρους, ασφάλιση, λογαριασμούς, στεγαστικά δάνεια, βάρη και άλλα έξοδα που μπορεί να επηρεάζουν το ακίνητο πριν από πιθανή πώληση.",
  },
  {
    number: "04",
    title: "Επικοινωνήστε με τους κληρονόμους",
    description:
      "Η ξεκάθαρη επικοινωνία μπορεί να περιορίσει καθυστερήσεις. Βεβαιωθείτε ότι όλοι οι εμπλεκόμενοι κατανοούν τις επιλογές και τις υποχρεώσεις που σχετίζονται με το ακίνητο.",
  },
  {
    number: "05",
    title: "Συγκρίνετε τις επιλογές πώλησης",
    description:
      "Μπορείτε να εξετάσετε μια παραδοσιακή πώληση, την πώληση του ακινήτου ως έχει ή μια απευθείας πώληση. Η κατάλληλη επιλογή εξαρτάται από την κατάσταση του ακινήτου, τον διαθέσιμο χρόνο και τις ανάγκες της οικογένειας.",
  },
  {
    number: "06",
    title: "Συντονίστε το κλείσιμο με τη νομική διαδικασία",
    description:
      "Πριν από το κλείσιμο, επιβεβαιώστε ότι έχουν ολοκληρωθεί οι απαραίτητες νομικές διαδικασίες για τη σωστή μεταβίβαση του ακινήτου.",
  },
];

export default function ProbateGuideEL() {
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
              Κληρονομημένα Ακίνητα και Probate
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Η διαχείριση ενός κληρονομημένου ακινήτου μπορεί να περιλαμβάνει
              νομικές, οικονομικές και πρακτικές αποφάσεις. Η κατανόηση των
              βασικών βημάτων μπορεί να σας βοηθήσει να οργανώσετε καλύτερα τη
              διαδικασία.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="font-semibold uppercase tracking-widest text-[#C9A227]">
              Πριν πάρετε αποφάσεις
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D] md:text-4xl">
              Κατανοήστε πρώτα τη νομική κατάσταση
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ένα κληρονομημένο ακίνητο δεν μπορεί πάντα να πωληθεί άμεσα.
              Ανάλογα με τις περιστάσεις, μπορεί να χρειάζεται να ολοκληρωθούν
              συγκεκριμένα νομικά βήματα πριν γίνει η μεταβίβαση.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Αν υπάρχει αβεβαιότητα σχετικά με τη νόμιμη εξουσία, τους
              κληρονόμους, τον τίτλο ή τη διαδικασία probate, εξετάστε το
              ενδεχόμενο να συμβουλευτείτε δικηγόρο ή άλλο κατάλληλο
              επαγγελματία.
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
                6 σημαντικά βήματα που πρέπει να εξετάσετε
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
              Μια πιθανή επιλογή
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Πώληση κληρονομημένου ακινήτου ως έχει
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Αν το ακίνητο χρειάζεται σημαντικές επισκευές, καθαρισμό ή
              συντήρηση, μια απευθείας πώληση ως έχει μπορεί να αποτελέσει
              εναλλακτική λύση αντί της προετοιμασίας για παραδοσιακή πώληση.
              Συγκρίνετε πάντα την τιμή, τα έξοδα, τον χρόνο και την ευκολία.
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