import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the FAHOPROSO privacy policy and learn how we collect, use, disclose, and protect information submitted through our website.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#14213D] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
              Privacy Policy
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-6xl">
              Your Privacy Matters
            </h1>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#C9A227]" />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-slate-700">
            <p className="mb-10 text-lg leading-8">
              Faithfull Home &amp; Property Solutions, LLC
              (&quot;FAHOPROSO,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard the information you provide when visiting our website
              or communicating with us.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Information We Collect
                </h2>

                <p className="mt-4 leading-8">
                  We may collect information that you voluntarily provide,
                  including:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-8">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Property address</li>
                  <li>Property details and descriptions</li>
                  <li>Any information included in your message</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. How We Use Your Information
                </h2>

                <p className="mt-4 leading-8">
                  We may use submitted information to:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-8">
                  <li>Respond to your inquiries.</li>
                  <li>Evaluate properties and investment opportunities.</li>
                  <li>Prepare and communicate potential purchase offers.</li>
                  <li>Schedule appointments and property inspections.</li>
                  <li>Improve our website and services.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Information Sharing
                </h2>

                <p className="mt-4 leading-8">
                  We do not sell, rent, or trade your personal information. We
                  may share information only when necessary to process your
                  inquiry, work with trusted service providers, comply with
                  legal requirements, or protect our rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Third-Party Services
                </h2>

                <p className="mt-4 leading-8">
                  We may use third-party providers, including Formspree, to
                  process contact-form submissions. Those providers may process
                  information according to their own privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Data Security
                </h2>

                <p className="mt-4 leading-8">
                  We use reasonable administrative, technical, and
                  organizational safeguards to protect submitted information.
                  However, no method of internet transmission or electronic
                  storage can be guaranteed to be completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Cookies and Analytics
                </h2>

                <p className="mt-4 leading-8">
                  Our website may use cookies or similar technologies to support
                  functionality, analyze performance, and improve user
                  experience. You may control cookies through your browser
                  settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7. Your Choices
                </h2>

                <p className="mt-4 leading-8">
                  You may request access to, correction of, or deletion of
                  personal information you submitted through this website. You
                  may also ask us to stop contacting you regarding an inquiry.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  8. Policy Updates
                </h2>

                <p className="mt-4 leading-8">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with a revised effective
                  date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  9. Contact Information
                </h2>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-bold text-slate-900">
                    Faithfull Home &amp; Property Solutions, LLC
                  </p>

                  <p className="mt-2">Grand Rapids, Michigan</p>

                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:info@fahoproso.com"
                      className="font-semibold text-[#C9A227]"
                    >
                      info@fahoproso.com
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