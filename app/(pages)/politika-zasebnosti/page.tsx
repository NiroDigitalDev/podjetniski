import { Metadata } from "next";
import PrivacyPage from "@/features/Privacy";

export const metadata: Metadata = {
  title: "Politika Zasebnosti | Telefinder",
  description: "Preberite našo politiko zasebnosti.",
};

export default function Page() {
  return <PrivacyPage />;
} 