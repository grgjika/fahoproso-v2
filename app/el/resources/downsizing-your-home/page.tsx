import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Οδηγός Μετακόμισης σε Μικρότερο Σπίτι",
  description:
    "Ένας πρακτικός οδηγός για ιδιοκτήτες στο Michigan που σκέφτονται να μετακομίσουν σε μικρότερη κατοικία.",
  alternates: {
    canonical:
      "https://www.fahoproso.com/el/resources/downsizing-your-home",
      languages: {
    "en-US": "https://www.fahoproso.com/resources/downsizing-your-home",
    "es-US": "https://www.fahoproso.com/es/resources/downsizing-your-home",
    "el-GR": "https://www.fahoproso.com/el/resources/downsizing-your-home",
    sq: "https://www.fahoproso.com/sq/resources/downsizing-your-home",
  },
  },
};

const steps = [
  {
    number: "01",
    title: "Καθορίστε τους στόχους σας",
    description:
      "Σκεφτείτε γιατί θέλετε να μετακομίσετε σε μικρότερο σπίτι. Μπορεί να θέλετε να μειώσετε τα έξοδα, να απλοποιήσετε τη συντήρηση, να αλλάξετε περιοχή ή να βρείτε μια κατοικία που ταιριάζει καλύτερα στις σημερινές σας ανάγκες.",
  },
  {
    number: "02",
    title: "Αποφασίστε τι θα κρατήσετε",
    description:
      "Εξετάστε έγκαιρα τα έπιπλα, τα προσωπικά αντικείμενα και τα έγγραφά σας. Ξεχωρίστε τι θέλετε να κρατήσετε, να δωρίσετε, να πουλήσετε ή να απομακρύνετε.",
  },
  {
    number: "03",
    title: "Αξιολογήστε την κατάσταση του σπιτιού",
    description:
      "Αποφασίστε αν αξίζει να κάνετε επισκευές ή βελτιώσεις πριν από την πώληση. Σε ορισμένες περιπτώσεις, η πώληση του ακινήτου ως έχει μπορεί να είναι μια απλούστερη επιλογή.",
  },
  {
    number: "04",
    title: "Σχεδιάστε την επόμενη κατοικία σας",
    description:
      "Εξετάστε το μέγεθος, την τοποθεσία, το κόστος, την προσβασιμότητα και τις ανάγκες συντήρησης της επόμενης κατοικίας σας πριν καθορίσετε την ημερομηνία πώλησης.",
  },
  {
    number: "05",
    title: "Συντονίστε την πώληση και τη μετακόμιση",
    description:
      "Μια ευέλικτη ημερομηνία κλεισίματος μπορεί να σας βοηθήσει να συντονίσετε καλύτερα την πώληση του σημερινού σας σπιτιού με τη μετακόμιση στη νέα σας κατοικία.",
  },
];

export default function DownsizingYourHomeEL() {
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
              Μετακόμιση σε Μικρότερο Σπίτι
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Η μετακόμιση σε μικρότερη κατοικία μπορεί να απλοποιήσει την
              καθημερινότητά σας, αλλά χρειάζεται σωστό προγραμματισμό. Αυτά τα
              βήματα μπορούν να σας βοηθήσουν να οργανώσετε τη διαδικασία.
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
              Σχεδιάστε πριν πάρετε την απόφασή σας
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ένα μικρότερο σπίτι μπορεί να σημαίνει λιγότερη συντήρηση,
              χαμηλότερα έξοδα και μια κατοικία που ταιριάζει καλύτερα στη
              σημερινή σας κατάσταση. Είναι όμως σημαντικό να σχεδιάσετε τόσο
              την πώληση του υπάρχοντος ακινήτου όσο και το επόμενο βήμα σας.
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
                5 βήματα για μια ευκολότερη μετάβαση
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
              Μια επιπλέον επιλογή
            </p>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#C9A227]" />

            <h2 className="mt-6 text-3xl font-bold text-[#14213D]">
              Εξετάστε όλες τις επιλογές πώλησης
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Αν η προετοιμασία του σπιτιού για μια παραδοσιακή πώληση απαιτεί
              υπερβολική δουλειά, μπορείτε να εξετάσετε και άλλες επιλογές,
              συμπεριλαμβανομένης της απευθείας πώλησης του ακινήτου ως έχει.
              Συγκρίνετε την τιμή, τα έξοδα, τον χρόνο και την ευκολία πριν
              αποφασίσετε.
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