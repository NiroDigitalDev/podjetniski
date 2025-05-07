import { Metadata } from "next";
import TermsPage from "@/features/Terms";

export const metadata: Metadata = {
  title: "Pogoji Sodelovanja | Telefinder",
  description: "Preberite naše pogoje sodelovanja.",
};

export default function Page() {
  return <TermsPage />;
} 