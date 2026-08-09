import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions governing use of the FAHOPROSO website and submission of property inquiries.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Terms &amp; Conditions
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Website Terms of Use
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-slate-700">
            <p className="mb-10 text-lg leading-8">
              These Terms and Conditions govern your use of the FAHOPROSO
              website operated by Faithfull Home &amp; Property Solutions, LLC.
              By accessing or using this website, you agree to these terms.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. General Information
                </h2>

                <p className="mt-4 leading-8">
                  Information on this website is provided for general
                  informational purposes only. It does not constitute legal,
                  financial, tax, investment, or real estate advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. No Contract or Guaranteed Offer
                </h2>

                <p className="mt-4 leading-8">
                  Submitting a contact form, requesting information, or
                  receiving preliminary communication does not create a
                  contract, agency relationship, partnership, or obligation
                  between you and FAHOPROSO.
                </p>

                <p className="mt-4 leading-8">
                  Any potential property offer is subject to review, inspection,
                  due diligence, title evaluation, financing, internal approval,
                  and mutually acceptable written agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Property Information
                </h2>

                <p className="mt-4 leading-8">
                  You are responsible for providing accurate and complete
                  information about any property or opportunity submitted
                  through this website. FAHOPROSO may rely on the information
                  you provide when evaluating an inquiry.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. No Professional Advice
                </h2>

                <p className="mt-4 leading-8">
                  You should consult qualified legal, tax, financial, and real
                  estate professionals before making decisions concerning a
                  property sale, investment, financing arrangement, or contract.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Website Availability
                </h2>

                <p className="mt-4 leading-8">
                  We may modify, suspend, or discontinue any part of this
                  website without notice. We do not guarantee that the website
                  will always be available, uninterrupted, or free from errors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Intellectual Property
                </h2>

                <p className="mt-4 leading-8">
                  Website content, branding, graphics, text, logos, and design
                  elements are owned by or licensed to Faithfull Home &amp;
                  Property Solutions, LLC and may not be copied, reproduced, or
                  distributed without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7. Third-Party Services and Links
                </h2>

                <p className="mt-4 leading-8">
                  This website may use or link to third-party services,
                  including Formspree, mapping providers, and social media
                  platforms. We are not responsible for their content,
                  availability, security, or privacy practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  8. Limitation of Liability
                </h2>

                <p className="mt-4 leading-8">
                  To the fullest extent permitted by law, FAHOPROSO and
                  Faithfull Home &amp; Property Solutions, LLC will not be
                  liable for losses or damages arising from use of this website,
                  reliance on its content, website interruptions, or third-party
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  9. Prohibited Use
                </h2>

                <p className="mt-4 leading-8">
                  You may not use this website for fraudulent, unlawful,
                  abusive, harmful, or unauthorized purposes, or attempt to
                  interfere with its security or operation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  10. Changes to These Terms
                </h2>

                <p className="mt-4 leading-8">
                  We may update these Terms and Conditions from time to time.
                  Updated terms will be posted on this page with a revised
                  effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  11. Contact Information
                </h2>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-bold text-slate-900">
                    Faithfull Home &amp; Property Solutions, LLC
                  </p>

                  <p className="mt-2">Grand Rapids, Michigan</p>

                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:offers@fahoproso.com"
                      className="font-semibold text-[#C9A227]"
                    >
                      offers@fahoproso.com
                    </a>
                  </p>

                  <p className="mt-2">Phone: (616) 275-4443</p>
                </div>
              </div>

              <p className="border-t border-slate-200 pt-8 text-sm text-slate-500">
                Last updated: July 31, 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}