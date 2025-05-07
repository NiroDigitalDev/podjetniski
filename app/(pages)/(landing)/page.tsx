import LandingPage from "@/features/Landing";
import { Metadata } from "next";
import ogImage from "@/assets/og-image.png";
import twitterImage from "@/assets/twitter-image.png";
import { fetchAllBlogPosts, BlogPostSummary } from "@/services/APIService";

export const metadata: Metadata = {
  title: "TeleFinder | Najdi svojega telefonskega operaterja",
  description:
    "TeleFinder vam pomaga najti najboljšega mobilnega operaterja glede na vašo lokacijo in potrebe. Preverite pokritost in kakovost signala.",
  generator: "Next.js",
  applicationName: "TeleFinder",
  referrer: "origin-when-cross-origin",
  keywords: [
    "mobilni operater",
    "telefonski operater",
    "pokritost signala",
    "mobilno omrežje",
    "primerjava operaterjev, menjava operaterja, najboljši mobilni operater, najboljši telefonski operater, najboljši mobilni operater v Sloveniji, najboljši telefonski operater v Sloveniji, najboljši mobilni operater v Sloveniji, najboljši telefonski operater v Sloveniji",
  ],
  authors: [{ name: "TeleFinder Team" }],
  creator: "TeleFinder",
  publisher: "TeleFinder",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://telefinder.si"
  ),
  openGraph: {
    title: "TeleFinder | Najdi svojega telefonskega operaterja",
    description:
      "TeleFinder vam pomaga najti najboljšega mobilnega operaterja glede na vašo lokacijo in potrebe. Preverite pokritost in kakovost signala.",
    url: "https://telefinder.si",
    siteName: "TeleFinder",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "TeleFinder Domača stran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleFinder | Mobilni operaterji",
    description: "Najdite najboljšega mobilnega operaterja",
    creator: "@telefinder",
    images: [
      {
        url: twitterImage.src,
        width: 1200,
        height: 675,
        alt: "TeleFinder Domača stran",
      },
    ],
  },
};

export const revalidate = 1800; // 30 minutes in seconds

export default async function Home() {
  // Fetch the latest 3 blog posts for the landing page
  let blogPosts: BlogPostSummary[] = [];
  try {
    const blogsData = await fetchAllBlogPosts(0, 3);
    blogPosts = blogsData.blogs;
  } catch (error) {
    console.error("Error fetching blog posts for landing page:", error);
    // Continue with empty blog posts if fetch fails
  }

  return (
    <main>
      <LandingPage blogPosts={blogPosts} />
    </main>
  );
}
