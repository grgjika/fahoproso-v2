import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fahoproso.com"),

  title: {
    default: "FAHOPROSO | Sell Your House & Real Estate Investment Michigan",
    template: "%s | FAHOPROSO",
  },

  description:
    "Faithful Home & Property Solutions, LLC (FAHOPROSO) is a Michigan real estate investment company that buys residential properties and helps homeowners explore simple, straightforward options for selling their homes.",

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
    title: "FAHOPROSO | Sell Your House & Real Estate Investment Michigan",
    description:
      "Residential and commercial real estate investment and property solutions throughout Michigan.",
    url: "https://www.fahoproso.com",
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
    title: "FAHOPROSO | Sell Your House & Real Estate Investment Michigan",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
  "@id": "https://www.fahoproso.com/#organization",
  name: "Faithfull Home & Property Solutions, LLC",
  alternateName: "FAHOPROSO",
  url: "https://www.fahoproso.com",

  logo: {
    "@type": "ImageObject",
    url: "https://www.fahoproso.com/images/logo-transparent.png",
  },

  image: "https://www.fahoproso.com/images/social-preview.jpg",

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
  "@id": "https://www.fahoproso.com/#website",
  url: "https://www.fahoproso.com",
  name: "FAHOPROSO",

  publisher: {
    "@id": "https://www.fahoproso.com/#organization",
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

        <GoogleAnalytics gaId="G-5F9RJMGDCF" />
      </body>
    </html>
  );
}