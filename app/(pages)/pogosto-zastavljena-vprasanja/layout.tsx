import type { Metadata } from "next";

// Define metadata specifically for the FAQ page route
export const metadata: Metadata = {
  title: "Pogosto Zastavljena Vprašanja", // Using template from root layout, just provide specific part
  description:
    "Odgovori na pogosta vprašanja o Telefinder storitvah in ponudbah.", // TODO: Optimize this description further
};

// This layout simply wraps the page component for this route
export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
