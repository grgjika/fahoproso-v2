import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahoproso.com"),

  title: {
    default: "FAHOPROSO | Real Estate Investment",
    template: "%s | FAHOPROSO",
  },

  description:
    "FAHOPROSO provides residential and commercial real estate investment and property solutions throughout Michigan.",

  keywords: [
    "real estate investment Michigan",
    "cash home buyers Michigan",
    "property solutions Michigan",
    "Grand Rapids real estate",
    "Kent County real estate investors",
    "Ottawa County real estate investors",
    "residential investments",
    "commercial real estate",
    "sell house for cash Grand Rapids",
    "sell my house Michigan",
  ],

  authors: [
    {
      name: "Faithfull Home & Property Solutions, LLC",
    },
  ],

  creator: "Faithfull Home & Property Solutions, LLC",
  publisher: "Faithfull Home & Property Solutions, LLC",

  openGraph: {
    title: "FAHOPROSO | Real Estate Investment",
    description:
      "Residential and commercial real estate investment and property solutions throughout Michigan.",
    url: "https://fahoproso.com",
    siteName: "FAHOPROSO",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "FAHOPROSO Real Estate Investment",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FAHOPROSO | Real Estate Investment",
    description:
      "Residential and commercial real estate investment and property solutions throughout Michigan.",
    images: ["/images/social-preview.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    {
      url: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
  ],
  apple: "/apple-touch-icon.png",
},

manifest: "/site.webmanifest",

category: "real estate",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14213D",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fahoproso.com/#organization",
  name: "Faithfull Home & Property Solutions, LLC",
  alternateName: "FAHOPROSO",
  url: "https://fahoproso.com",
  logo: {
    "@type": "ImageObject",
    url: "https://fahoproso.com/images/logo-transparent.png",
  },
  image: "https://fahoproso.com/images/social-preview.jpg",
  description:
    "FAHOPROSO provides residential and commercial real estate investment and property solutions throughout Michigan.",
  email: "info@fahoproso.com",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Michigan",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kent County, Michigan",
    },
    {
      "@type": "AdministrativeArea",
      name: "Ottawa County, Michigan",
    },
    {
      "@type": "City",
      name: "Grand Rapids, Michigan",
    },
    {
      "@type": "City",
      name: "Troy, Michigan",
    },
  ],
  knowsAbout: [
    "Residential real estate investment",
    "Rental property investment",
    "Commercial real estate investment",
    "Property acquisitions",
    "Property solutions",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fahoproso.com/#website",
  url: "https://fahoproso.com",
  name: "FAHOPROSO",
  publisher: {
    "@id": "https://fahoproso.com/#organization",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>

      <GoogleAnalytics gaId="G-5F9RJMGDCF" />
    </html>
  );
}