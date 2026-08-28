"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

type FAQProps = {
  locale?: Locale;
};

const content = {
  en: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear Answers to Common Property Questions",
    description:
      "Learn more about selling a property, receiving an offer, closing, inherited homes, rental properties, and working with FAHOPROSO.",
    faqs: [
      {
        question: "How does the FAHOPROSO process work?",
        answer:
          "Start by contacting us and sharing basic information about your property. We review the details, discuss your situation, and may schedule a property visit. If the property fits our investment goals, we can present an offer for you to review. You are never required to accept it.",
      },
      {
        question: "Do I need to make repairs before selling?",
        answer:
          "No. You can contact us even if the property needs repairs, updates, cleaning, or major improvements. We review properties in their current condition and explain the available options before you decide what to do.",
      },
      {
        question: "Can I sell my house as-is?",
        answer:
          "Yes. Selling as-is means you do not complete major repairs or renovations before the sale. The property's current condition is considered during the evaluation and offer process.",
      },
      {
        question: "Do I need to clean out the property?",
        answer:
          "No. You are not obligated to clean or empty the property before selling. We buy homes in as-is condition, and you can leave behind unwanted furniture, appliances, or other belongings. If there are any special circumstances, we're happy to discuss them with you.",
      },
      {
        question: "How is the cash offer determined?",
        answer:
          "The offer is based on several factors, including the property's location, condition, needed repairs, market activity, and comparable sales.",
      },
      {
        question: "How quickly can you close?",
        answer:
          "The timeline depends on the property, title work, financing, and transaction details. We work with you to choose a realistic closing timeline that fits your needs.",
      },
      {
        question: "Can I choose the closing date?",
        answer:
          "In many situations, yes. We try to create a timeline that works for everyone involved. Your preferred move-out date, title requirements, and other transaction details may affect the final schedule.",
      },
      {
        question: "Are there commissions or hidden fees?",
        answer:
          "We do not charge a real estate commission when purchasing a property directly. Any costs connected to the transaction will be explained clearly before you agree to move forward.",
      },
      {
        question: "Do I have to pay closing costs?",
        answer:
          "Closing costs depend on the agreement and the specific transaction. We explain who is responsible for each cost before closing so there are no unexpected surprises.",
      },
      {
        question: "Am I required to accept an offer?",
        answer:
          "No. Contacting us, scheduling a meeting, or receiving an offer does not obligate you to sell. You can review the information and decide whether it is right for you.",
      },
      {
        question: "Do you buy inherited properties?",
        answer:
          "Yes. We review inherited properties and understand that these situations can involve family decisions, estate documents, maintenance, and probate. Legal and tax questions should be reviewed with qualified professionals.",
      },
      {
        question: "Do you buy properties during probate?",
        answer:
          "We may review probate properties, but the person handling the estate must have the proper legal authority to sell. The timing and requirements depend on the estate and Michigan law.",
      },
      {
        question: "Do you buy rental properties with tenants?",
        answer:
          "Yes, we may evaluate occupied rental properties. Existing leases, tenant rights, payment history, property condition, and occupancy details should be reviewed before moving forward.",
      },
      {
        question: "Do you buy vacant or damaged properties?",
        answer:
          "Yes. We consider vacant properties and homes with deferred maintenance, fire damage, water damage, outdated interiors, structural concerns, or other repair needs.",
      },
      {
        question: "Do you buy residential and commercial properties?",
        answer:
          "Yes. Our investment focus includes residential homes, rental properties, multifamily opportunities, land, and selected commercial real estate.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "Our primary focus includes Grand Rapids, Kent County, Ottawa County, and selected opportunities in Troy. We also review properties in other parts of Michigan based on the location and property type.",
      },
      {
        question: "What information should I provide when contacting you?",
        answer:
          "Helpful information includes the property address, property type, current condition, occupancy status, reason for selling, preferred timeline, and any known repairs, mortgages, liens, or estate issues.",
      },
      {
        question: "What happens after I accept an offer?",
        answer:
          "The transaction moves into the closing process. A title company or closing professional reviews ownership, liens, taxes, and required documents. Once everything is ready, the parties sign the closing documents and the sale is completed.",
      },
    ],
  },

  es: {
    eyebrow: "Preguntas Frecuentes",
    title: "Respuestas Claras a Preguntas Comunes Sobre Propiedades",
    description:
      "Obtenga más información sobre la venta de una propiedad, las ofertas, el cierre, propiedades heredadas, propiedades de alquiler y cómo trabajar con FAHOPROSO.",
    faqs: [
      {
        question: "¿Cómo funciona el proceso de FAHOPROSO?",
        answer:
          "Comience contactándonos y compartiendo información básica sobre su propiedad. Revisamos los detalles, hablamos sobre su situación y, si es necesario, podemos programar una visita. Si la propiedad se ajusta a nuestros objetivos de inversión, podemos presentarle una oferta para que la considere. Nunca está obligado a aceptarla.",
      },
      {
        question: "¿Necesito hacer reparaciones antes de vender?",
        answer:
          "No. Puede contactarnos incluso si la propiedad necesita reparaciones, actualizaciones, limpieza o mejoras importantes. Revisamos las propiedades en su condición actual y explicamos las opciones disponibles antes de que usted decida qué hacer.",
      },
      {
        question: "¿Puedo vender mi casa tal como está?",
        answer:
          "Sí. Vender una propiedad tal como está significa que no necesita realizar reparaciones o renovaciones importantes antes de la venta. La condición actual de la propiedad se toma en cuenta durante la evaluación y el proceso de oferta.",
      },
      {
        question: "¿Necesito limpiar o vaciar la propiedad?",
        answer:
          "No. No está obligado a limpiar o vaciar la propiedad antes de vender. Compramos casas en su condición actual, y puede dejar muebles, electrodomésticos u otros artículos que ya no desee. Si existen circunstancias especiales, estaremos encantados de hablarlas con usted.",
      },
      {
        question: "¿Cómo se determina la oferta en efectivo?",
        answer:
          "La oferta se basa en varios factores, incluyendo la ubicación, condición, reparaciones necesarias, actividad del mercado y ventas comparables.",
      },
      {
        question: "¿Qué tan rápido pueden cerrar?",
        answer:
          "El plazo depende de la propiedad, el trabajo de título, el financiamiento y los detalles de la transacción. Trabajamos con usted para elegir un plazo de cierre realista que se adapte a sus necesidades.",
      },
      {
        question: "¿Puedo elegir la fecha de cierre?",
        answer:
          "En muchas situaciones, sí. Intentamos crear un plazo que funcione para todos los involucrados. Su fecha preferida de mudanza, los requisitos del título y otros detalles pueden afectar el calendario final.",
      },
      {
        question: "¿Hay comisiones o cargos ocultos?",
        answer:
          "No cobramos comisión inmobiliaria cuando compramos una propiedad directamente. Cualquier costo relacionado con la transacción se explicará claramente antes de que usted decida continuar.",
      },
      {
        question: "¿Tengo que pagar los costos de cierre?",
        answer:
          "Los costos de cierre dependen del acuerdo y de la transacción específica. Explicamos quién es responsable de cada costo antes del cierre para evitar sorpresas.",
      },
      {
        question: "¿Estoy obligado a aceptar una oferta?",
        answer:
          "No. Contactarnos, programar una reunión o recibir una oferta no le obliga a vender. Puede revisar la información y decidir si es la opción adecuada para usted.",
      },
      {
        question: "¿Compran propiedades heredadas?",
        answer:
          "Sí. Revisamos propiedades heredadas y entendemos que estas situaciones pueden involucrar decisiones familiares, documentos de sucesión, mantenimiento y probate. Las preguntas legales y fiscales deben revisarse con profesionales calificados.",
      },
      {
        question: "¿Compran propiedades durante probate?",
        answer:
          "Podemos evaluar propiedades involucradas en probate, pero la persona que administra la sucesión debe tener la autoridad legal correspondiente para vender. Los plazos y requisitos dependen de la situación y de la ley de Michigan.",
      },
      {
        question: "¿Compran propiedades de alquiler con inquilinos?",
        answer:
          "Sí, podemos evaluar propiedades de alquiler ocupadas. Deben revisarse los contratos existentes, los derechos de los inquilinos, el historial de pagos, la condición de la propiedad y los detalles de ocupación antes de continuar.",
      },
      {
        question: "¿Compran propiedades vacantes o dañadas?",
        answer:
          "Sí. Consideramos propiedades vacantes y casas con mantenimiento atrasado, daños por incendio o agua, interiores desactualizados, problemas estructurales u otras necesidades de reparación.",
      },
      {
        question: "¿Compran propiedades residenciales y comerciales?",
        answer:
          "Sí. Nuestro enfoque de inversión incluye viviendas residenciales, propiedades de alquiler, oportunidades multifamiliares, terrenos y determinadas propiedades comerciales.",
      },
      {
        question: "¿Qué áreas sirven?",
        answer:
          "Nuestro enfoque principal incluye Grand Rapids, Kent County, Ottawa County y oportunidades seleccionadas en Troy. También evaluamos propiedades en otras partes de Michigan según la ubicación y el tipo de propiedad.",
      },
      {
        question: "¿Qué información debo proporcionar al contactarlos?",
        answer:
          "La información útil incluye la dirección, tipo de propiedad, condición actual, ocupación, motivo de venta, plazo preferido y cualquier reparación, hipoteca, gravamen o asunto relacionado con una sucesión.",
      },
      {
        question: "¿Qué sucede después de aceptar una oferta?",
        answer:
          "La transacción pasa al proceso de cierre. Una compañía de títulos o profesional de cierre revisa la propiedad, gravámenes, impuestos y documentos necesarios. Una vez que todo está listo, las partes firman los documentos y se completa la venta.",
      },
    ],
  },

  el: {
    eyebrow: "Συχνές Ερωτήσεις",
    title: "Ξεκάθαρες Απαντήσεις σε Συχνές Ερωτήσεις για Ακίνητα",
    description:
      "Μάθετε περισσότερα σχετικά με την πώληση ακινήτου, τις προσφορές, την ολοκλήρωση της συναλλαγής, τα κληρονομημένα ακίνητα, τις ενοικιάσεις και τη συνεργασία με τη FAHOPROSO.",
    faqs: [
      {
        question: "Πώς λειτουργεί η διαδικασία της FAHOPROSO;",
        answer:
          "Ξεκινήστε επικοινωνώντας μαζί μας και δίνοντάς μας βασικές πληροφορίες για το ακίνητό σας. Εξετάζουμε τα στοιχεία, συζητάμε την κατάστασή σας και, αν χρειάζεται, μπορεί να προγραμματίσουμε μια επίσκεψη στο ακίνητο. Αν το ακίνητο ταιριάζει στους επενδυτικούς μας στόχους, μπορούμε να σας παρουσιάσουμε μια προσφορά για να την αξιολογήσετε. Δεν είστε ποτέ υποχρεωμένοι να την αποδεχτείτε.",
      },
      {
        question: "Χρειάζεται να κάνω επισκευές πριν πουλήσω;",
        answer:
          "Όχι. Μπορείτε να επικοινωνήσετε μαζί μας ακόμη και αν το ακίνητο χρειάζεται επισκευές, αναβαθμίσεις, καθαρισμό ή σημαντικές βελτιώσεις. Αξιολογούμε τα ακίνητα στην τρέχουσα κατάστασή τους και σας εξηγούμε τις διαθέσιμες επιλογές πριν αποφασίσετε.",
      },
      {
        question: "Μπορώ να πουλήσω το σπίτι μου όπως είναι;",
        answer:
          "Ναι. Η πώληση όπως είναι σημαίνει ότι δεν χρειάζεται να ολοκληρώσετε σημαντικές επισκευές ή ανακαινίσεις πριν από την πώληση. Η υπάρχουσα κατάσταση του ακινήτου λαμβάνεται υπόψη κατά την αξιολόγηση και τη διαμόρφωση της προσφοράς.",
      },
      {
        question: "Χρειάζεται να αδειάσω ή να καθαρίσω το ακίνητο;",
        answer:
          "Όχι. Δεν είστε υποχρεωμένοι να καθαρίσετε ή να αδειάσετε το ακίνητο πριν από την πώληση. Αγοράζουμε ακίνητα στην υπάρχουσα κατάστασή τους και μπορείτε να αφήσετε ανεπιθύμητα έπιπλα, συσκευές ή άλλα αντικείμενα. Αν υπάρχουν ειδικές συνθήκες, μπορούμε να τις συζητήσουμε μαζί σας.",
      },
      {
        question: "Πώς καθορίζεται η προσφορά μετρητοίς;",
        answer:
          "Η προσφορά βασίζεται σε διάφορους παράγοντες, όπως η τοποθεσία, η κατάσταση του ακινήτου, οι απαραίτητες επισκευές, η δραστηριότητα της αγοράς και οι συγκρίσιμες πωλήσεις.",
      },
      {
        question: "Πόσο γρήγορα μπορεί να ολοκληρωθεί η πώληση;",
        answer:
          "Το χρονοδιάγραμμα εξαρτάται από το ακίνητο, τον έλεγχο τίτλου, τη χρηματοδότηση και τις λεπτομέρειες της συναλλαγής. Συνεργαζόμαστε μαζί σας για να επιλέξουμε ένα ρεαλιστικό χρονοδιάγραμμα που ταιριάζει στις ανάγκες σας.",
      },
      {
        question: "Μπορώ να επιλέξω την ημερομηνία ολοκλήρωσης;",
        answer:
          "Σε πολλές περιπτώσεις, ναι. Προσπαθούμε να δημιουργήσουμε ένα χρονοδιάγραμμα που εξυπηρετεί όλους τους εμπλεκόμενους. Η ημερομηνία μετακόμισης, οι απαιτήσεις τίτλου και άλλες λεπτομέρειες μπορεί να επηρεάσουν το τελικό πρόγραμμα.",
      },
      {
        question: "Υπάρχουν προμήθειες ή κρυφές χρεώσεις;",
        answer:
          "Δεν χρεώνουμε προμήθεια μεσίτη όταν αγοράζουμε ένα ακίνητο απευθείας. Οποιοδήποτε κόστος σχετίζεται με τη συναλλαγή θα σας εξηγηθεί με σαφήνεια πριν αποφασίσετε να προχωρήσετε.",
      },
      {
        question: "Πρέπει να πληρώσω τα έξοδα ολοκλήρωσης;",
        answer:
          "Τα έξοδα ολοκλήρωσης εξαρτώνται από τη συμφωνία και τη συγκεκριμένη συναλλαγή. Εξηγούμε ποιος είναι υπεύθυνος για κάθε κόστος πριν από την ολοκλήρωση ώστε να μην υπάρχουν απρόσμενες εκπλήξεις.",
      },
      {
        question: "Είμαι υποχρεωμένος να αποδεχτώ μια προσφορά;",
        answer:
          "Όχι. Η επικοινωνία μαζί μας, μια συνάντηση ή η λήψη προσφοράς δεν σας υποχρεώνει να πουλήσετε. Μπορείτε να εξετάσετε τις πληροφορίες και να αποφασίσετε αν είναι σωστό για εσάς.",
      },
      {
        question: "Αγοράζετε κληρονομημένα ακίνητα;",
        answer:
          "Ναι. Εξετάζουμε κληρονομημένα ακίνητα και κατανοούμε ότι αυτές οι περιπτώσεις μπορεί να περιλαμβάνουν οικογενειακές αποφάσεις, έγγραφα κληρονομιάς, συντήρηση και probate. Νομικά και φορολογικά ζητήματα πρέπει να εξετάζονται με κατάλληλους επαγγελματίες.",
      },
      {
        question: "Αγοράζετε ακίνητα που βρίσκονται σε διαδικασία probate;",
        answer:
          "Μπορούμε να εξετάσουμε ακίνητα σε probate, αλλά το πρόσωπο που διαχειρίζεται την κληρονομιά πρέπει να έχει τη νόμιμη εξουσία να πουλήσει. Το χρονοδιάγραμμα και οι απαιτήσεις εξαρτώνται από την κληρονομιά και τη νομοθεσία του Michigan.",
      },
      {
        question: "Αγοράζετε ενοικιαζόμενα ακίνητα με ενοικιαστές;",
        answer:
          "Ναι, μπορούμε να αξιολογήσουμε ενοικιαζόμενα ακίνητα που είναι ήδη κατειλημμένα. Πρέπει να εξεταστούν οι υπάρχουσες μισθώσεις, τα δικαιώματα των ενοικιαστών, το ιστορικό πληρωμών, η κατάσταση του ακινήτου και οι λεπτομέρειες κατοίκησης.",
      },
      {
        question: "Αγοράζετε κενά ή κατεστραμμένα ακίνητα;",
        answer:
          "Ναι. Εξετάζουμε κενά ακίνητα και σπίτια με καθυστερημένη συντήρηση, ζημιές από φωτιά ή νερό, παλαιωμένους εσωτερικούς χώρους, δομικά προβλήματα ή άλλες ανάγκες επισκευής.",
      },
      {
        question: "Αγοράζετε οικιστικά και επαγγελματικά ακίνητα;",
        answer:
          "Ναι. Η επενδυτική μας δραστηριότητα περιλαμβάνει κατοικίες, ενοικιαζόμενα ακίνητα, πολυκατοικίες, γη και επιλεγμένα επαγγελματικά ακίνητα.",
      },
      {
        question: "Ποιες περιοχές εξυπηρετείτε;",
        answer:
          "Η κύρια εστίασή μας περιλαμβάνει το Grand Rapids, το Kent County, το Ottawa County και επιλεγμένες ευκαιρίες στο Troy. Εξετάζουμε επίσης ακίνητα σε άλλες περιοχές του Michigan ανάλογα με την τοποθεσία και τον τύπο του ακινήτου.",
      },
      {
        question: "Τι πληροφορίες πρέπει να δώσω όταν επικοινωνήσω μαζί σας;",
        answer:
          "Χρήσιμες πληροφορίες είναι η διεύθυνση, ο τύπος και η κατάσταση του ακινήτου, αν κατοικείται, ο λόγος πώλησης, το επιθυμητό χρονοδιάγραμμα και τυχόν γνωστές επισκευές, υποθήκες, βάρη ή ζητήματα κληρονομιάς.",
      },
      {
        question: "Τι συμβαίνει αφού αποδεχτώ μια προσφορά;",
        answer:
          "Η συναλλαγή περνά στη διαδικασία ολοκλήρωσης. Μια εταιρεία τίτλων ή επαγγελματίας ολοκλήρωσης ελέγχει την ιδιοκτησία, τα βάρη, τους φόρους και τα απαραίτητα έγγραφα. Όταν όλα είναι έτοιμα, τα μέρη υπογράφουν τα έγγραφα και η πώληση ολοκληρώνεται.",
      },
    ],
  },

  sq: {
    eyebrow: "Pyetje të Shpeshta",
    title: "Përgjigje të Qarta për Pyetjet më të Zakonshme",
    description:
      "Mësoni më shumë rreth shitjes së një prone, marrjes së një oferte, mbylljes, pronave të trashëguara, pronave me qira dhe bashkëpunimit me FAHOPROSO.",
    faqs: [
      {
        question: "Si funksionon procesi i FAHOPROSO?",
        answer:
          "Filloni duke na kontaktuar dhe duke ndarë informacion bazë për pronën tuaj. Ne shqyrtojmë detajet, diskutojmë situatën tuaj dhe, nëse është e nevojshme, mund të planifikojmë një vizitë në pronë. Nëse prona përputhet me objektivat tona të investimit, mund t'ju paraqesim një ofertë për ta shqyrtuar. Nuk jeni asnjëherë të detyruar ta pranoni.",
      },
      {
        question: "A duhet të bëj riparime para se të shes?",
        answer:
          "Jo. Mund të na kontaktoni edhe nëse prona ka nevojë për riparime, përmirësime, pastrim apo punime të mëdha. Ne i vlerësojmë pronat në gjendjen e tyre aktuale dhe ju shpjegojmë mundësitë para se të vendosni.",
      },
      {
        question: "A mund ta shes shtëpinë në gjendjen që është?",
        answer:
          "Po. Shitja në gjendjen aktuale do të thotë se nuk keni nevojë të kryeni riparime ose rinovime të mëdha para shitjes. Gjendja aktuale e pronës merret parasysh gjatë vlerësimit dhe procesit të ofertës.",
      },
      {
        question: "A duhet ta pastroj ose zbraz pronën?",
        answer:
          "Jo. Nuk jeni të detyruar ta pastroni ose zbrazni pronën para shitjes. Ne blejmë prona në gjendjen aktuale dhe mund të lini mobilje, pajisje apo sende të tjera që nuk i dëshironi. Nëse ka rrethana të veçanta, mund t'i diskutojmë me ju.",
      },
      {
        question: "Si përcaktohet oferta në para?",
        answer:
          "Oferta bazohet në disa faktorë, duke përfshirë vendndodhjen, gjendjen e pronës, riparimet e nevojshme, aktivitetin e tregut dhe shitjet e krahasueshme.",
      },
      {
        question: "Sa shpejt mund të përfundojë shitja?",
        answer:
          "Afati varet nga prona, puna me titullin, financimi dhe detajet e transaksionit. Ne bashkëpunojmë me ju për të zgjedhur një afat realist që përshtatet me nevojat tuaja.",
      },
      {
        question: "A mund ta zgjedh datën e mbylljes?",
        answer:
          "Në shumë raste, po. Përpiqemi të krijojmë një afat që funksionon për të gjithë. Data juaj e preferuar e largimit, kërkesat e titullit dhe detaje të tjera mund të ndikojnë në orarin përfundimtar.",
      },
      {
        question: "A ka komisione ose tarifa të fshehura?",
        answer:
          "Nuk ngarkojmë komision të agjentit kur blejmë një pronë drejtpërdrejt. Çdo kosto e lidhur me transaksionin do t'ju shpjegohet qartë para se të vendosni të vazhdoni.",
      },
      {
        question: "A duhet të paguaj kostot e mbylljes?",
        answer:
          "Kostot e mbylljes varen nga marrëveshja dhe transaksioni specifik. Ne shpjegojmë kush është përgjegjës për secilën kosto para mbylljes që të mos ketë surpriza.",
      },
      {
        question: "A jam i detyruar ta pranoj ofertën?",
        answer:
          "Jo. Kontakti me ne, planifikimi i një takimi ose marrja e një oferte nuk ju detyron të shisni. Mund ta shqyrtoni informacionin dhe të vendosni nëse është zgjedhja e duhur për ju.",
      },
      {
        question: "A blini prona të trashëguara?",
        answer:
          "Po. Shqyrtojmë prona të trashëguara dhe kuptojmë se këto situata mund të përfshijnë vendime familjare, dokumente të trashëgimisë, mirëmbajtje dhe probate. Pyetjet ligjore dhe tatimore duhet të shqyrtohen me profesionistë të kualifikuar.",
      },
      {
        question: "A blini prona gjatë procesit të probate?",
        answer:
          "Mund të shqyrtojmë prona në probate, por personi që administron pasurinë duhet të ketë autoritetin ligjor për të shitur. Afati dhe kërkesat varen nga pasuria dhe ligji i Michigan-it.",
      },
      {
        question: "A blini prona me qira që kanë qiramarrës?",
        answer:
          "Po, mund të vlerësojmë prona me qira që janë të zëna. Duhet të shqyrtohen kontratat ekzistuese, të drejtat e qiramarrësve, historia e pagesave, gjendja e pronës dhe detajet e banimit.",
      },
      {
        question: "A blini prona bosh ose të dëmtuara?",
        answer:
          "Po. Shqyrtojmë prona bosh dhe shtëpi me mirëmbajtje të vonuar, dëme nga zjarri ose uji, ambiente të vjetruara, probleme strukturore ose nevoja të tjera për riparime.",
      },
      {
        question: "A blini prona rezidenciale dhe komerciale?",
        answer:
          "Po. Fokusi ynë përfshin shtëpi rezidenciale, prona me qira, prona multifamiljare, tokë dhe prona të përzgjedhura komerciale.",
      },
      {
        question: "Cilat zona shërbeni?",
        answer:
          "Fokusi ynë kryesor përfshin Grand Rapids, Kent County, Ottawa County dhe mundësi të përzgjedhura në Troy. Shqyrtojmë gjithashtu prona në pjesë të tjera të Michigan-it sipas vendndodhjes dhe llojit të pronës.",
      },
      {
        question: "Çfarë informacioni duhet të jap kur ju kontaktoj?",
        answer:
          "Informacioni i dobishëm përfshin adresën, llojin e pronës, gjendjen aktuale, statusin e banimit, arsyen e shitjes, afatin e preferuar dhe çdo riparim, hipotekë, barrë ose çështje trashëgimie që dihet.",
      },
      {
        question: "Çfarë ndodh pasi pranoj një ofertë?",
        answer:
          "Transaksioni kalon në procesin e mbylljes. Një kompani titulli ose profesionist i mbylljes shqyrton pronësinë, barrët, taksat dhe dokumentet e kërkuara. Kur gjithçka është gati, palët nënshkruajnë dokumentet dhe shitja përfundon.",
      },
    ],
  },
};

export default function FAQ({ locale = "en" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const text = content[locale];

  return (
    <section id="faq" className="bg-[#F5F5F0] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
            {text.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl md:text-5xl">
            {text.title}
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {text.description}
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-14">
          {text.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A227] shadow-lg"
                    : "border-slate-200 shadow-sm hover:-translate-y-0.5 hover:border-[#C9A227]/60 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:gap-6 sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold leading-7 text-[#14213D] sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#C9A227] text-white"
                        : "bg-[#C9A227]/10 text-[#C9A227]"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-5 py-5 leading-8 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}