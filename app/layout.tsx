import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://fahoproso.com"),

  title: {
    default: "FAHOPROSO | Real Estate Investment",
    template: "%s | FAHOPROSO",
  },

  description:
    "FAHOPROSO provides residential and commercial real estate investment and property solutions in Grand Rapids, Michigan, and surrounding communities.",

  keywords: [
    "real estate investment",
    "cash home buyers",
    "property solutions",
    "Grand Rapids real estate",
    "Michigan real estate investors",
    "residential investments",
    "commercial real estate",
    "sell house for cash Grand Rapids",
  ],

  authors: [
    {
      name: "Faithfull Home & Property Solutions, LLC",
    },
  ],

  creator: "Faithfull Home & Property Solutions, LLC",
  publisher: "Faithfull Home & Property Solutions, LLC",

  alternates: {
    canonical: "https://fahoproso.com",
  },

  openGraph: {
    title: "FAHOPROSO | Real Estate Investment",
    description:
      "Residential and commercial real estate investment and property solutions in Grand Rapids, Michigan.",
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
      "Residential and commercial real estate investment and property solutions in Grand Rapids, Michigan.",
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
    apple: "/apple-touch-icon.png",
  },

  category: "real estate",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14213D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>{children}</body>

     <GoogleAnalytics gaId="G-5F9RJMGDCF" />
    </html>
  );
}