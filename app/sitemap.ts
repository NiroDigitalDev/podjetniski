import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.telefinder.si';

  // Add static routes here
  const staticRoutes = [
    '/',
    '/politika-zasebnosti',
    '/pogosto-zastavljena-vprasanja',
    '/pogoji-sodelovanja',
    '/operaterji',
    '/nasa-resitev',
    '/vprasalnik',
    '/blog',
    // Add other static routes as needed
  ];

  // Note: Dynamic routes (like blog posts /[slug]) need to be generated separately.
  // You would typically fetch all blog post slugs and map them here.
  // Example:
  // const blogPosts = await fetchBlogPosts(); // Function to fetch slugs
  // const dynamicRoutes = blogPosts.map(post => `/blog/${post.slug}`);

  const sitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    // changeFrequency: 'weekly', // Optional: Add change frequency
    // priority: 0.8, // Optional: Add priority
  }));

  // Add dynamic routes to sitemapEntries if generated

  return sitemapEntries;
} 