import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";
import { Suspense } from "react";
import seoImage from "@/assets/og-image.png";

// Define default metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.telefinder.si"),
  title: {
    default: "Telefinder | Primerjajte Mobilne Pakete v Sloveniji", // Default title
    template: "%s | Telefinder", // Template for page-specific titles
  },
  description:
    "Telefinder vam namesto vas najde najboljšega mobilnega operaterja in paket glede na vaše potrebe. Primerjajte ponudbe, cene in pokritost signala v Sloveniji.", // Default description
  keywords: [
    "mobilni operaterji",
    "primerjava paketov",
    "mobilna telefonija",
    "pokritost signala",
    "Slovenija",
    "Telekom Slovenije",
    "A1 Slovenija",
    "Telemach",
    "T-2",
    "najboljši paket, menjava operaterja, najboljši mobilni operater, najboljši telefonski operater, najboljši mobilni operater v Sloveniji, najboljši telefonski operater v Sloveniji, najboljši mobilni operater v Sloveniji, najboljši telefonski operater v Sloveniji",
  ],
  authors: [{ name: "Telefinder" }],
  creator: "Telefinder",
  publisher: "Telefinder",
  alternates: {
    canonical: "/",
    languages: {
      "sl-SI": "/",
    },
  },
  openGraph: {
    title: "Telefinder | Primerjajte Mobilne Pakete v Sloveniji",
    description:
      "Telefinder vam namesto vas najde najboljšega mobilnega operaterja in paket glede na vaše potrebe. ",
    url: "https://www.telefinder.si",
    siteName: "Telefinder",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: seoImage.src,
        width: seoImage.width,
        height: seoImage.height,
        alt: "Telefinder - Primerjava mobilnih paketov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telefinder | Primerjajte Mobilne Pakete v Sloveniji",
    description:
      "Telefinder vam pomaga najti najboljšega mobilnega operaterja in paket glede na vaše potrebe.",
    images: [seoImage.src],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Use 'any' for .ico
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    // TODO: Add manifest if you create one: { rel: "manifest", url: "/site.webmanifest" }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const raleway = Raleway({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if we're in maintenance mode
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  // Determine default title for JSON-LD safely
  let defaultTitle = "Telefinder"; // Fallback
  if (metadata.title) {
    if (typeof metadata.title === "string") {
      defaultTitle = metadata.title;
    } else if (
      typeof metadata.title === "object" &&
      "default" in metadata.title
    ) {
      // Check specifically for the { default: string, template: string } structure
      defaultTitle = metadata.title.default;
    }
    // We don't use title.absolute for the default website name
  }

  // Prepare JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultTitle, // Use the safely determined title
    url: metadata.metadataBase?.toString() || "https://www.telefinder.si",
    description:
      metadata.description ||
      "Telefinder vam pomaga najti najboljšega mobilnega operaterja in paket glede na vaše potrebe.",
    // potentialAction: { // Optional: Add search action if you have site search
    //   "@type": "SearchAction",
    //   "target": "https://www.telefinder.si/iskanje?q={search_term_string}",
    //   "query-input": "required name=search_term_string"
    // }
  };

  return (
    <html lang="sl" suppressHydrationWarning>
      <body className={raleway.className} suppressHydrationWarning>
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={null}>
          <AnalyticsProvider>
            {isMaintenanceMode ? (
              // In maintenance mode, render only the children without header/footer
              <main className="flex-grow">{children}</main>
            ) : (
              // Normal layout with header and footer
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            )}
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
