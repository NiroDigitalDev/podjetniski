import { BlogPostSummary } from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPostSummary;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="neo-brutalist-card h-full flex flex-col overflow-hidden">
      {post.coverImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-3 right-3">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1 border-black border-[var(--neo-border-width)]">
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 flex-grow">
        <Link
          href={`/blog/${post.slug}`}
          className="no-underline hover:underline"
        >
          <h3 className="mb-3 line-clamp-2">{post.title}</h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      </div>

      <div className="p-6 pt-4 border-t border-border flex justify-between items-center">
        <div className="flex items-center text-sm">
          <span>{post.date}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-primary font-bold uppercase no-underline hover:underline"
        >
          Preberi več
        </Link>
      </div>
    </div>
  );
}
