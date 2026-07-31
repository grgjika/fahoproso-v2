"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import PropertyLocation from "@/components/PropertyLocation";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [propertyAddress, setPropertyAddress] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!propertyAddress.trim()) {
      setStatus("Please enter a property address.");
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
          "Thank you! We have received your inquiry. A member of our team will contact you shortly."
        );
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Unable to send your message. Please try again.");
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
            Contact Us
            </p>

            <div className="mt-3 h-1 w-16 rounded-full bg-amber-500" />
          
          

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Tell Us About Your Property
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Complete the form and tell us about your property. Our
            team will review your information and contact you to
            discuss the next steps.
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
                Let&apos;s Talk About Your Property
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We work with property owners, investors, and partners
                throughout Grand Rapids and surrounding communities.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Phone
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
                    Email
                  </p>

                  <a
                    href="mailto:info@fahoproso.com"
                    className="mt-1 inline-block font-semibold text-slate-900 transition hover:text-blue-600"
                  >
                    info@fahoproso.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Service area
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Grand Rapids, Michigan, and throughout the state of Michigan
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Business hours
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    Monday–Friday, 9:00 AM–5:00 PM
                  </p>
                  <p className="mt-1 font-semibold text-slate-900">
                    Saturday, 10:00 AM–2:00 PM
                  </p>
                </div>
              </div>

                         <div className="mt-8 rounded-xl border border-slate-300 bg-slate-100 p-5 shadow-sm">
              <p className="font-semibold text-[#14213D]">
                We aim to respond to new property inquiries within one business day.
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
              Property Inquiry
            </h3>

            <p className="mt-2 text-slate-600">
              Share a few details and we'll contact you to discuss your property.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block font-medium text-slate-700"
              >
                First name
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
                Last name
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
              Email address
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
              Phone number
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
              Property address
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
              Tell us about the property
            </label>

            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about the property condition, timeline, occupancy, or anything else you would like us to know."
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
            {isSending ? "Sending..." : "Submit Property"}
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
  </section>
);
}
      