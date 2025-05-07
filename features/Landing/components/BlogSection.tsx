import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BlogCard } from "@/features/Blog/components/BlogCard";
import { BlogPostSummary } from "@/constants/blogData";

interface BlogSectionProps {
  blogPosts: BlogPostSummary[];
}

export function BlogSection({ blogPosts }: BlogSectionProps) {
  // If no blog posts are available, don't render the section
  if (!blogPosts || blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
            Blog
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
            Preberite najnovejše novice in članke iz sveta telekomunikacij
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full group"
            >
              Več novic
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
