import { BlogPage } from "@/features/Blog/BlogPage";
import { Metadata } from "next";
import { fetchAllBlogPosts } from "@/constants/blogData";

export const revalidate = 1800; // 30 minutes in seconds

export const metadata: Metadata = {
  title: "Blog | Podjetniški Klub FMF",
  description:
    "Preberite naše članke o podjetništvu, inovacijah, poslovnih idejah in zgodbah uspešnih podjetnikov.",
  keywords:
    "podjetništvo, podjetniški klub, blog, FMF, inovacije, mladi podjetniki, poslovna znanja, študentsko podjetništvo",
  openGraph: {
    title: "Blog Podjetniškega kluba FMF",
    description: "Podjetniške zgodbe, izkušnje in nasveti uspešnih podjetnikov na blogu Podjetniškega kluba FMF",
    images: ['/images/og-image.png'],
  },
};

// Define an explicit type for the page props to match the build environment's expectation
type BlogPageServerProps = {
  params: Promise<Record<string, never>>; 
  searchParams: Promise<{ page?: string }>;
};

export default async function Page({ params: paramsPromise, searchParams: searchParamsPromise }: BlogPageServerProps) {
  // Still await the params promise, but we don't need to capture its value since we don't use it
  await paramsPromise; 
  const searchParams = await searchParamsPromise; // Resolve the searchParams promise

  // Get page from query params or default to 0
  const pageParam = searchParams?.page;
  // If no page param or page=1, set to page 0
  // Otherwise subtract 1 from the page number (to convert from 1-indexed to 0-indexed)
  const page = !pageParam || pageParam === "1" ? 0 : parseInt(pageParam) - 1;
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
