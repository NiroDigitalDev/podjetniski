import { BlogPage } from "@/features/Blog/BlogPage";
import { Metadata } from "next";
import { fetchAllBlogPosts } from "@/constants/blogData";

export const revalidate = 1800; // 30 minutes in seconds

export const metadata: Metadata = {
  title: "Blog | Podjetniški Klub FMF",
  description:
    "Preberite naše članke o podjetništvu, inovacijah, poslovnih idejah in zgodbah uspešnih podjetnikov.",
  keywords:
    "podjetništvo, podjetniški klub, blog, FMF, inovacije, mladi podjetniki, poslovna znanja",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Get page from query params or default to 0
  const pageParam = (await searchParams)?.page;
  const page = pageParam ? parseInt(pageParam) - 1 : 0;
  const pageSize = 9; // 3x3 grid for Neo-Brutalist design

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
        initialError="Na žalost trenutno ni mogoče naložiti člankov. Poskusite znova kasneje."
      />
    );
  }
}
