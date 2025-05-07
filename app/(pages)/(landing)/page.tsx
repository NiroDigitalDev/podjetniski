import LandingPage from "@/features/Landing";
import { Metadata } from "next";
import { BlogPostSummary, fetchAllBlogPosts } from "@/constants/blogData";

export const metadata: Metadata = {
  title: "TeleFinder | Najdi svojega telefonskega operaterja",
  description:
    "TeleFinder vam pomaga najti najboljšega mobilnega operaterja glede na vašo lokacijo in potrebe. Preverite pokritost in kakovost signala.",
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
