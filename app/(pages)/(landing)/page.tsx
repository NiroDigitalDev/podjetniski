import LandingPage from "@/features/Landing";
import { Metadata } from "next";
import { BlogPostSummary, fetchAllBlogPosts } from "@/constants/blogData";

export const metadata: Metadata = {
  title: "Podjetniški klub FMF | Študentska podjetniška iniciativa",
  description:
    "Podjetniški klub FMF je študentska iniciativa, namenjena vsem študentom Fakultete za matematiko in fiziko, ki jih zanima podjetništvo, inovacije in osebni razvoj.",
  keywords: "podjetništvo, FMF, študentski klub, inovacije, mreženje, mentorstvo, startup, podjetniške ideje, fakulteta za matematiko in fiziko",
  openGraph: {
    title: "Podjetniški klub FMF",
    description: "Študentska iniciativa za podjetništvo in inovacije na Fakulteti za matematiko in fiziko",
    images: ['/images/og-image.png'],
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
