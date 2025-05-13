import { Metadata } from "next";
import PrivacyPage from "@/features/Privacy";

export const metadata: Metadata = {
  title: "Politika Zasebnosti | Podjetniški Klub FMF",
  description: "Preberite našo politiko zasebnosti in kako Podjetniški klub FMF ščiti in upravlja z vašimi podatki.",
  keywords: "politika zasebnosti, varstvo podatkov, GDPR, podjetniški klub, FMF",
  openGraph: {
    title: "Politika Zasebnosti - Podjetniški klub FMF",
    description: "Informacije o tem, kako Podjetniški klub FMF varuje vaše osebne podatke",
    images: ['/images/og-image.png'],
  },
};

export default function Page() {
  return <PrivacyPage />;
} 