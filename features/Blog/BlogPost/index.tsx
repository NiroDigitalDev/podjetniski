import { BlogPost as BlogPostType } from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <Link
        href="/blog"
        className="inline-block mb-6 neo-brutalist-btn-sm bg-primary text-primary-foreground no-underline"
      >
        ← Nazaj na blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.category}</span>
          </div>

          {post.coverImage && (
            <div className="mb-8 w-full">
              <div className="relative w-full max-w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={800}
                  priority
                  className="rounded-lg w-full h-auto"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Render Markdown content */}
          <div
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />
        </div>
      </article>
    </div>
  );
}

// Simple function to convert basic markdown to HTML
// In a real application, you would use a proper markdown parser
function formatMarkdown(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*)\*/gim, "<em>$1</em>")
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-1">$1</li>')
    // Paragraphs
    .replace(/^\s*$/gim, '</p><p class="mb-4">');

  // Wrap in paragraph
  html = '<p class="mb-4">' + html + "</p>";

  // Fix list items
  html = html.replace(
    /<\/p><p class="mb-4"><li/g,
    '<ul class="mb-4 list-disc"><li'
  );
  html = html.replace(/<\/li><\/p>/g, "</li></ul>");

  return html;
}
