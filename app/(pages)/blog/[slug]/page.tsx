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

// Use the correct type for params in Next.js 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostData(slug);

    return {
      title: post.title + " | Podjetniški Klub FMF",
      description: post.excerpt || post.seoDescription || undefined,
      keywords: post.seoKeywords || "podjetniški klub, FMF, podjetništvo, študentska iniciativa",
      openGraph: {
        title: post.title,
        description: post.excerpt || post.seoDescription || undefined,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        images: [post.coverImage],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Podjetniški Klub FMF",
      description: "Blog post details",
    };
  }
}

// Use the correct type for params in Next.js 15
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
