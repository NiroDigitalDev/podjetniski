"use client";

import { BlogPostSummary } from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [blogPosts, setBlogPosts] =
    useState<BlogPostSummary[]>(initialBlogPosts);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [error, setError] = useState(initialError);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            {post.coverImage && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
            <div className="p-4">
              <span className="text-sm text-gray-500 mb-1 block">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    • {post.author}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Preberi več
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li key={index}>
                  <Link
                    href={`/blog?page=${index + 1}`}
                    className={`px-4 py-2 border rounded ${
                      currentPage === index
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
