import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

// Define default metadata
export const metadata: Metadata = {
  title: {
    default: "Telefinder | Primerjajte Mobilne Pakete v Sloveniji", // Default title
    template: "%s | Telefinder", // Template for page-specific titles
  },
  description:
    "Telefinder vam namesto vas najde najboljšega mobilnega operaterja in paket glede na vaše potrebe. Primerjajte ponudbe, cene in pokritost signala v Sloveniji.", // Default description
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

  return (
    <html lang="sl" suppressHydrationWarning>
      <body className={raleway.className} suppressHydrationWarning>
        <Suspense fallback={null}>
          {isMaintenanceMode ? (
            // In maintenance mode, render only the children without header/footer
            <main className="flex-grow">{children}</main>
          ) : (
            // Normal layout with header and footer
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-8">{children}</main>
              <Footer />
            </div>
          )}
        </Suspense>
      </body>
    </html>
  );
}
