import BlogPost from "@/features/Blog/BlogPost";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchBlogPost, BlogPost as BlogPostType } from "@/constants/blogData";

async function getPostData(slug: string): Promise<BlogPostType> {
  try {
    return await fetchBlogPost(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

// Using inline type for generateMetadata props
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);

    return {
      title: post.title + " | Telefinder",
      description: post.excerpt || post.seoDescription || undefined,
      keywords: post.seoKeywords || undefined,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Telefinder",
      description: "Blog post details",
    };
  }
}

// Using inline type for Page props
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);

    return <BlogPost post={post} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    notFound();
  }
}
