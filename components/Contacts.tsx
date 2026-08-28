"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import PropertyLocation from "@/components/PropertyLocation";

type Locale = "en" | "es" | "el" | "sq";

type ContactProps = {
  locale?: Locale;
};

const content = {
  en: {
    contactUs: "Contact Us",
    heading: "Tell Us About Your Property",
    intro:
      "Complete the form and tell us about your property. Our team will review your information and contact you to discuss the next steps.",

    talkTitle: "Let's Talk About Your Property",
    talkDescription:
      "We work with homeowners, property owners, investors, and partners throughout West Michigan, the Greater Grand Rapids area, Troy, and surrounding Michigan communities.",

    phone: "Phone",
    email: "Email",
    serviceArea: "Service area",
    serviceAreaValue:
      "Grand Rapids and communities throughout Michigan",
    businessHours: "Business hours",
    mondayFriday: "Monday–Friday, 9:00 AM–5:00 PM",
    saturday: "Saturday, 10:00 AM–2:00 PM",
    responseTime:
      "We aim to respond to all property inquiries within one business day.",

    inquiry: "Property Inquiry",
    inquiryDescription:
      "Share a few details and we'll contact you to discuss your property.",

    firstName: "First name",
    lastName: "Last name",
    emailAddress: "Email address",
    phoneNumber: "Phone number",
    propertyAddress: "Property address",
    propertyDetails: "Tell us about the property",
    propertyPlaceholder:
      "Tell us about the property condition, timeline, occupancy, or anything else you would like us to know.",

    sending: "Sending...",
    submit: "Submit Property",

    addressRequired: "Please enter a property address.",
    success:
      "Thank you! We have received your inquiry. A member of our team will contact you shortly.",
    error: "Something went wrong. Please try again.",
    sendError: "Unable to send your message. Please try again.",

    reviewTitle: "Share Your Experience",
    reviewDescription:
      "Your feedback means a lot to our family-owned business. If we had the opportunity to help you, we'd truly appreciate you sharing your experience with a Google review. Your review helps other homeowners find a local business they can trust.",
    reviewButton: "⭐ Leave a Google Review",
  },

  es: {
    contactUs: "Contáctenos",
    heading: "Cuéntenos Sobre su Propiedad",
    intro:
      "Complete el formulario y cuéntenos sobre su propiedad. Nuestro equipo revisará la información y se pondrá en contacto con usted para hablar sobre los próximos pasos.",

    talkTitle: "Hablemos Sobre su Propiedad",
    talkDescription:
      "Trabajamos con propietarios, inversionistas y socios en West Michigan, el área metropolitana de Grand Rapids, Troy y otras comunidades de Michigan.",

    phone: "Teléfono",
    email: "Correo Electrónico",
    serviceArea: "Área de Servicio",
    serviceAreaValue:
      "Grand Rapids y comunidades en todo Michigan",
    businessHours: "Horario Comercial",
    mondayFriday: "Lunes–Viernes, 9:00 AM–5:00 PM",
    saturday: "Sábado, 10:00 AM–2:00 PM",
    responseTime:
      "Nuestro objetivo es responder a todas las consultas sobre propiedades dentro de un día hábil.",

    inquiry: "Consulta Sobre una Propiedad",
    inquiryDescription:
      "Comparta algunos detalles y nos pondremos en contacto con usted para hablar sobre su propiedad.",

    firstName: "Nombre",
    lastName: "Apellido",
    emailAddress: "Correo electrónico",
    phoneNumber: "Número de teléfono",
    propertyAddress: "Dirección de la propiedad",
    propertyDetails: "Cuéntenos sobre la propiedad",
    propertyPlaceholder:
      "Cuéntenos sobre la condición de la propiedad, el plazo, la ocupación o cualquier otra información que desee compartir.",

    sending: "Enviando...",
    submit: "Enviar Propiedad",

    addressRequired: "Ingrese la dirección de la propiedad.",
    success:
      "¡Gracias! Hemos recibido su consulta. Un miembro de nuestro equipo se pondrá en contacto con usted pronto.",
    error: "Algo salió mal. Inténtelo nuevamente.",
    sendError: "No se pudo enviar su mensaje. Inténtelo nuevamente.",

    reviewTitle: "Comparta su Experiencia",
    reviewDescription:
      "Sus comentarios significan mucho para nuestro negocio familiar. Si tuvimos la oportunidad de ayudarle, agradeceríamos mucho que compartiera su experiencia mediante una reseña en Google. Su reseña ayuda a otros propietarios a encontrar un negocio local en el que puedan confiar.",
    reviewButton: "⭐ Dejar una Reseña en Google",
  },

  el: {
    contactUs: "Επικοινωνήστε Μαζί μας",
    heading: "Πείτε μας για το Ακίνητό σας",
    intro:
      "Συμπληρώστε τη φόρμα και δώστε μας πληροφορίες για το ακίνητό σας. Η ομάδα μας θα εξετάσει τα στοιχεία και θα επικοινωνήσει μαζί σας για να συζητήσουμε τα επόμενα βήματα.",

    talkTitle: "Ας Μιλήσουμε για το Ακίνητό σας",
    talkDescription:
      "Συνεργαζόμαστε με ιδιοκτήτες ακινήτων, επενδυτές και συνεργάτες στο West Michigan, στην ευρύτερη περιοχή του Grand Rapids, στο Troy και σε άλλες κοινότητες του Michigan.",

    phone: "Τηλέφωνο",
    email: "Email",
    serviceArea: "Περιοχή Εξυπηρέτησης",
    serviceAreaValue:
      "Grand Rapids και κοινότητες σε όλο το Michigan",
    businessHours: "Ώρες Λειτουργίας",
    mondayFriday: "Δευτέρα–Παρασκευή, 9:00 AM–5:00 PM",
    saturday: "Σάββατο, 10:00 AM–2:00 PM",
    responseTime:
      "Στόχος μας είναι να απαντάμε σε όλα τα αιτήματα για ακίνητα εντός μίας εργάσιμης ημέρας.",

    inquiry: "Επικοινωνία για Ακίνητο",
    inquiryDescription:
      "Δώστε μας μερικές πληροφορίες και θα επικοινωνήσουμε μαζί σας για να συζητήσουμε το ακίνητό σας.",

    firstName: "Όνομα",
    lastName: "Επώνυμο",
    emailAddress: "Διεύθυνση email",
    phoneNumber: "Αριθμός τηλεφώνου",
    propertyAddress: "Διεύθυνση ακινήτου",
    propertyDetails: "Πείτε μας για το ακίνητο",
    propertyPlaceholder:
      "Πείτε μας για την κατάσταση του ακινήτου, το επιθυμητό χρονοδιάγραμμα, αν κατοικείται ή οποιαδήποτε άλλη πληροφορία θέλετε να γνωρίζουμε.",

    sending: "Αποστολή...",
    submit: "Υποβολή Ακινήτου",

    addressRequired: "Παρακαλώ εισαγάγετε τη διεύθυνση του ακινήτου.",
    success:
      "Ευχαριστούμε! Λάβαμε το αίτημά σας. Ένα μέλος της ομάδας μας θα επικοινωνήσει σύντομα μαζί σας.",
    error: "Παρουσιάστηκε κάποιο πρόβλημα. Παρακαλώ δοκιμάστε ξανά.",
    sendError:
      "Δεν ήταν δυνατή η αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά.",

    reviewTitle: "Μοιραστείτε την Εμπειρία σας",
    reviewDescription:
      "Η γνώμη σας σημαίνει πολλά για την οικογενειακή μας επιχείρηση. Αν είχαμε την ευκαιρία να σας βοηθήσουμε, θα εκτιμούσαμε ιδιαίτερα αν μοιραζόσασταν την εμπειρία σας με μια αξιολόγηση στο Google. Η αξιολόγησή σας βοηθά και άλλους ιδιοκτήτες να βρουν μια τοπική επιχείρηση που μπορούν να εμπιστευτούν.",
    reviewButton: "⭐ Αφήστε Αξιολόγηση στο Google",
  },

  sq: {
    contactUs: "Na Kontaktoni",
    heading: "Na Tregoni për Pronën Tuaj",
    intro:
      "Plotësoni formularin dhe na tregoni për pronën tuaj. Ekipi ynë do të shqyrtojë informacionin dhe do t'ju kontaktojë për të diskutuar hapat e ardhshëm.",

    talkTitle: "Le të Flasim për Pronën Tuaj",
    talkDescription:
      "Punojmë me pronarë, investitorë dhe partnerë në West Michigan, zonën e Greater Grand Rapids, Troy dhe komunitete të tjera në Michigan.",

    phone: "Telefon",
    email: "Email",
    serviceArea: "Zona e Shërbimit",
    serviceAreaValue:
      "Grand Rapids dhe komunitete në të gjithë Michigan-in",
    businessHours: "Orari i Punës",
    mondayFriday: "E Hënë–E Premte, 9:00 AM–5:00 PM",
    saturday: "E Shtunë, 10:00 AM–2:00 PM",
    responseTime:
      "Synojmë t'u përgjigjemi të gjitha kërkesave për prona brenda një dite pune.",

    inquiry: "Kërkesë për Pronën",
    inquiryDescription:
      "Ndani disa detaje dhe ne do t'ju kontaktojmë për të diskutuar pronën tuaj.",

    firstName: "Emri",
    lastName: "Mbiemri",
    emailAddress: "Adresa e email-it",
    phoneNumber: "Numri i telefonit",
    propertyAddress: "Adresa e pronës",
    propertyDetails: "Na tregoni për pronën",
    propertyPlaceholder:
      "Na tregoni për gjendjen e pronës, afatin, statusin e banimit ose çdo informacion tjetër që dëshironi të ndajmë.",

    sending: "Duke dërguar...",
    submit: "Dërgo Pronën",

    addressRequired: "Ju lutemi vendosni adresën e pronës.",
    success:
      "Faleminderit! E kemi marrë kërkesën tuaj. Një anëtar i ekipit tonë do t'ju kontaktojë së shpejti.",
    error: "Diçka shkoi keq. Ju lutemi provoni përsëri.",
    sendError:
      "Mesazhi nuk mund të dërgohej. Ju lutemi provoni përsëri.",

    reviewTitle: "Ndani Përvojën Tuaj",
    reviewDescription:
      "Vlerësimi juaj do të thotë shumë për biznesin tonë familjar. Nëse patëm mundësinë t'ju ndihmojmë, do ta vlerësonim shumë nëse do të ndanit përvojën tuaj me një vlerësim në Google. Vlerësimi juaj ndihmon pronarë të tjerë të gjejnë një biznes lokal të cilit mund t'i besojnë.",
    reviewButton: "⭐ Lini një Vlerësim në Google",
  },
};

export default function Contact({ locale = "en" }: ContactProps) {
  const text = content[locale];
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [propertyAddress, setPropertyAddress] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!propertyAddress.trim()) {
      setStatus(text.addressRequired);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("propertyAddress", propertyAddress);

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formspree.io/f/mjgzkoap",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        window.gtag?.("event", "generate_lead", {
         event_category: "Contact Form",
         event_label: "Property Inquiry",
      });
        form.reset();
        setPropertyAddress("");
        setStatus(
          text.success
        );
      } else {
        setStatus(text.error);
      }
    } catch {
      setStatus(text.sendError);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-blue-50/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="font-semibold uppercase tracking-wide text-blue-600">
            {text.contactUs}
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-amber-500" />
          
          

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            {text.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {text.intro}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Business image and information */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
           <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <Image
            src="/images/contact-business-01.jpg"
            alt="FAHOPROSO residential real estate"
            fill
            className="object-cover"
          />
          </div>

          <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
           <Image
           src="/images/contact-business-2.jpg"
           alt="FAHOPROSO commercial real estate"
           fill
           className="object-cover"
          />
          </div>
      </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                {text.talkTitle}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {text.talkDescription}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {text.phone}
                  </p>

                  <a
                    href="tel:+16162754443"
                    className="mt-1 inline-block font-semibold text-slate-900 transition hover:text-[#C9A227]"
                  >
                    (616) 275-4443
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {text.email}
                  </p>

                  <a
                    href="mailto:offers@fahoproso.com"
                    className="mt-1 inline-block font-semibold text-slate-900 transition hover:text-blue-600"
                  >
                    offers@fahoproso.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {text.serviceArea}
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {text.serviceAreaValue}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {text.businessHours}
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {text.mondayFriday}
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {text.saturday}
                  </p>
                </div>
              </div>

                         <div className="mt-8 rounded-xl border border-slate-300 bg-slate-100 p-5 shadow-sm">
              <p className="font-semibold text-[#14213D]">
                {text.responseTime}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/20"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#14213D]">
              {text.inquiry}
            </h3>

            <p className="mt-2 text-slate-600">
              {text.inquiryDescription}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block font-medium text-slate-700"
              >
                {text.firstName}
              </label>

              <input
                required
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="w-full rounded-xl border border-slate-400 bg-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/20"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block font-medium text-slate-700"
              >
                {text.lastName}
              </label>

              <input
                required
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="w-full rounded-xl border border-slate-400 bg-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-slate-700"
            >
              {text.emailAddress}
            </label>

            <input
              required
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-xl border border-slate-400 bg-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/20"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium text-slate-700"
            >
              {text.phoneNumber}
            </label>

            <input
              required
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-xl border border-slate-400 bg-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/20"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              {text.propertyAddress}
            </label>

            <PropertyLocation
              value={propertyAddress}
              onChange={setPropertyAddress}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-slate-700"
            >
              {text.propertyDetails}
            </label>

            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder={text.propertyPlaceholder}
              className="w-full resize-none rounded-xl border border-slate-400 bg-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-[#C9A227] focus:bg-white focus:ring-2 focus:ring-[#C9A227]/20"
            />
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New FAHOPROSO Property Inquiry"
          />

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded-xl bg-[#14213D] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#C9A227] hover:text-slate-900 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSending ? text.sending : text.submit}
          </button>

          {status && (
            <p
              className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-center font-medium text-green-700"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
    <section className="mt-16 rounded-3xl bg-[#14213D] px-8 py-10 text-center text-white">
  <h3 className="text-3xl font-bold">
    {text.reviewTitle}
  </h3>

  <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
    {text.reviewDescription}
  </p>

  <a
    href="https://g.page/r/Cdu7vBWv41J6EBM/review"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex rounded-xl bg-[#C9A227] px-8 py-4 font-semibold text-[#14213D] transition hover:bg-white"
  >
    {text.reviewButton}
  </a>
</section>
    
  </section>
);
}
      