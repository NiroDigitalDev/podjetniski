import { BlogPage } from "@/features/Blog/BlogPage";
import { Metadata } from "next";
import { fetchAllBlogPosts } from "@/services/APIService";

export const revalidate = 1800; // 30 minutes in seconds

export const metadata: Metadata = {
  title: "Blog | Telefinder",
  description:
    "Preberite naše strokovne članke o telekomunikacijah, napotke in novice iz sveta mobilne telefonije.",
  keywords: "telefinder, blog, telekomunikacije, mobilne naprave, operaterji",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Get page from query params or default to 0
  const pageParam = (await searchParams)?.page;
  const page = pageParam ? parseInt(pageParam) - 1 : 0;
  const pageSize = 10;

  try {
    const blogsData = await fetchAllBlogPosts(page, pageSize);

    return (
      <BlogPage
        initialBlogPosts={blogsData.blogs}
        initialTotalPages={blogsData.totalPages}
        initialCurrentPage={page}
      />
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    // Return the component with empty data and error state
    return (
      <BlogPage
        initialBlogPosts={[]}
        initialTotalPages={1}
        initialCurrentPage={0}
        initialError="Failed to load blog posts. Please try again later."
      />
    );
  }
}
