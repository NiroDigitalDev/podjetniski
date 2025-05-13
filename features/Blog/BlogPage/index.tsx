"use client";

import { BlogPostSummary, fetchAllBlogPosts } from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface BlogPageProps {
  initialBlogPosts: BlogPostSummary[];
  initialTotalPages: number;
  initialCurrentPage: number;
  initialError?: string;
}

export function BlogPage({
  initialBlogPosts,
  initialTotalPages,
  initialCurrentPage,
  initialError,
}: BlogPageProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPostSummary[]>(initialBlogPosts);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [error, setError] = useState(initialError);
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();

  // Function to fetch blog posts based on page number
  const fetchPosts = async (page: number) => {
    setIsLoading(true);
    try {
      const blogsData = await fetchAllBlogPosts(page, 9); // 9 is the pageSize from server component
      setBlogPosts(blogsData.blogs);
      setTotalPages(blogsData.totalPages);
      setCurrentPage(page);
      setError(undefined);
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      setError("Na žalost trenutno ni mogoče naložiti člankov. Poskusite znova kasneje.");
    } finally {
      setIsLoading(false);
      // Scroll to top after loading
      window.scrollTo(0, 0);
    }
  };

  // Navigate to a new page
  const handlePageChange = (page: number) => {
    if (page === 0) {
      router.push(`/blog`);
    } else {
      router.push(`/blog?page=${page + 1}`);
    }
  };

  // Listen for URL changes and update the page content accordingly
  useEffect(() => {
    const page = searchParams.get('page');
    // If no page param or page=1, use page 0
    // Otherwise subtract 1 from the page number (to convert from 1-indexed to 0-indexed)
    const pageNumber = !page || page === "1" ? 0 : parseInt(page) - 1;
    
    // Only fetch if the page is different from current page to avoid unnecessary fetches
    if (pageNumber !== currentPage) {
      fetchPosts(pageNumber);
    }
  }, [searchParams, currentPage]);

  return (
    <main className="neo-brutalist-section pt-24 pb-16">
      <div className="neo-brutalist-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-4">
              <span className="text-primary">BLOG</span> PODJETNIŠKI KLUB
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Sledite našim člankom o podjetništvu, inovacijah in osebnem
              razvoju. Pridobite koristne nasvete in informacije iz prve roke.
            </p>
          </div>

          {error && (
            <div className="neo-brutalist-card p-6 mb-12 bg-destructive/10 border-destructive">
              <p className="font-bold text-destructive">{error}</p>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-xl font-bold">Nalagam članke...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="neo-brutalist-card overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {post.coverImage && (
                    <div className="relative w-full border-b-2 border-black overflow-hidden aspect-[16/9]">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-border">
                      <div>
                        <span className="text-sm">{post.date}</span>
                        {post.author && (
                          <span className="text-sm ml-2">• {post.author}</span>
                        )}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary font-bold no-underline hover:underline"
                      >
                        PREBERI VEČ
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {blogPosts.length === 0 && !error && !isLoading && (
            <div className="neo-brutalist-card p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ni objavljenih člankov</h3>
              <p>Trenutno ni objavljenih člankov. Preverite znova kasneje.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav>
                <ul className="flex flex-wrap gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handlePageChange(index)}
                        className={`neo-brutalist-btn-sm ${
                          currentPage === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-background hover:bg-muted"
                        }`}
                        disabled={isLoading}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
