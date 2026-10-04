import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Home, MapPin } from "lucide-react";

type Locale = "es" | "el" | "sq";

const content = {
  es: {
    intro: "Aprenda antes de decidir",
    introText:
      "Vender o invertir en bienes raíces es una decisión importante. Nuestras guías le ayudan a entender el proceso antes de asumir cualquier compromiso.",
    groups: [
      {
        title: "Guías para Propietarios",
        text: "Información práctica para propietarios que se preparan para vender.",
        links: [
          ["Guías para Propietarios", "homeowner-guides"],
          ["Guía para Vendedores de Vivienda por Primera Vez", "first-time-home-seller-guide"],
          ["Guía de Sucesiones y Propiedades Heredadas", "probate-guide"],
          ["Guía para Mudarse a una Vivienda Más Pequeña", "downsizing-your-home"],
        ],
      },
      {
        title: "Información para Inversionistas",
        text: "Recursos sobre inversiones residenciales y comerciales.",
        links: [["Guía de Inversiones Residenciales", "residential-investments"]],
      },
      {
        title: "Guías de Michigan",
        text: "Conozca las comunidades de Michigan donde trabajamos.",
        links: [["Guías de Bienes Raíces de Michigan", "michigan-guides"]],
      },
    ],
  },
  el: {
    intro: "Μάθετε πριν αποφασίσετε",
    introText:
      "Η πώληση ή η επένδυση σε ακίνητα είναι σημαντική απόφαση. Οι οδηγοί μας σας βοηθούν να κατανοήσετε τη διαδικασία πριν αναλάβετε οποιαδήποτε δέσμευση.",
    groups: [
      {
        title: "Οδηγοί για Ιδιοκτήτες",
        text: "Πρακτικές πληροφορίες για ιδιοκτήτες που προετοιμάζονται να πουλήσουν.",
        links: [
          ["Οδηγοί για Ιδιοκτήτες", "homeowner-guides"],
          ["Οδηγός για Πωλητές Κατοικίας Πρώτης Φοράς", "first-time-home-seller-guide"],
          ["Οδηγός Κληρονομημένων Ακινήτων και Probate", "probate-guide"],
          ["Οδηγός Μετακόμισης σε Μικρότερο Σπίτι", "downsizing-your-home"],
        ],
      },
      {
        title: "Επενδυτικές Πληροφορίες",
        text: "Πόροι για οικιστικές και επαγγελματικές επενδύσεις.",
        links: [["Οδηγός Επενδύσεων σε Κατοικίες", "residential-investments"]],
      },
      {
        title: "Οδηγοί Michigan",
        text: "Γνωρίστε τις κοινότητες του Michigan όπου δραστηριοποιούμαστε.",
        links: [["Οδηγοί Ακινήτων Michigan", "michigan-guides"]],
      },
    ],
  },
  sq: {
    intro: "Mësoni përpara se të vendosni",
    introText:
      "Shitja ose investimi në pasuri të paluajtshme është një vendim i rëndësishëm. Udhëzuesit tanë ju ndihmojnë ta kuptoni procesin para çdo angazhimi.",
    groups: [
      {
        title: "Udhëzues për Pronarët",
        text: "Informacion praktik për pronarët që përgatiten të shesin.",
        links: [
          ["Udhëzues për Pronarët", "homeowner-guides"],
          ["Udhëzues për Shitësit e Shtëpisë për Herë të Parë", "first-time-home-seller-guide"],
          ["Udhëzues për Pronat e Trashëguara dhe Probate", "probate-guide"],
          ["Udhëzues për Kalimin në një Shtëpi më të Vogël", "downsizing-your-home"],
        ],
      },
      {
        title: "Informacion për Investitorët",
        text: "Burime për investimet rezidenciale dhe komerciale.",
        links: [["Udhëzues për Investimet Rezidenciale", "residential-investments"]],
      },
      {
        title: "Udhëzues për Michigan",
        text: "Njihni komunitetet e Michigan-it ku punojmë.",
        links: [["Udhëzues për Pasuritë e Paluajtshme në Michigan", "michigan-guides"]],
      },
    ],
  },
} as const;

const icons = [Home, Building2, MapPin];

export default function ResourcesHub({ locale }: { locale: Locale }) {
  const text = content[locale];

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14213D] to-[#2b3f6e] shadow-lg shadow-slate-900/20">
            <BookOpen className="h-8 w-8 text-[#E5C766]" />
          </span>
          <h2 className="mt-8 text-4xl font-bold text-[#14213D]">
            {text.intro}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {text.introText}
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          {text.groups.map((group, i) => {
            const Icon = icons[i];
            return (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14213D] to-[#2b3f6e] shadow-lg shadow-slate-900/20">
                  <Icon className="h-7 w-7 text-[#E5C766]" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[#14213D]">
                  {group.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{group.text}</p>

                <ul className="mt-8 space-y-3">
                  {group.links.map(([label, slug]) => (
                    <li key={slug}>
                      <Link
                        href={`/${locale}/resources/${slug}`}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 text-slate-800 transition hover:border-[#C9A227] hover:bg-slate-50"
                      >
                        <span>{label}</span>
                        <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A227] transition group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
