"use server";
/**
 * Type definition for a blog post
 */
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: string;
  author: string;
  imageUrl: string | null;
  imageAlt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
};

/**
 * Type definition for a blog post in the list view (without content)
 */
export type BlogPostSummary = Omit<BlogPost, "content" | "seoKeywords">;

/**
 * Type definition for paginated blog posts response
 */
export type BlogPostsResponse = {
  blogs: BlogPostSummary[];
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
};

/**
 * Fetches a single blog post by slug
 * @param slug - The slug of the blog post to fetch
 * @returns The blog post data
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_DASHBOARD_API_KEY || "",
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch blog post");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error;
  }
}

/**
 * Fetches all blog posts with pagination
 * @param page - The page number (0-indexed)
 * @param pageSize - The number of items per page
 * @returns Blog posts with pagination data
 */
export async function fetchAllBlogPosts(
  page: number = 0,
  pageSize: number = 10
): Promise<BlogPostsResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?page=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_DASHBOARD_API_KEY || "",
        },
        next: { revalidate: 1800 }, // 30 minutes in seconds
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch blog posts");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

/**
 * Type definition for lead submission data
 */
export type LeadSubmissionData = {
  visitorId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  referrerSource?: string;
  referrerUrl?: string;
  referrerMedium?: string;
  referrerCampaign?: string;
  metadata?: {
    answers?: Record<string, string>;
    [key: string]: any;
  };
};

/**
 * Type definition for lead submission response
 */
export type LeadSubmissionResponse = {
  success: boolean;
  message: string;
  leadId: string;
};

/**
 * Submits lead data to the API
 * @param data - The lead data to submit
 * @returns Response from the API
 */
export async function submitLeadData(
  data: LeadSubmissionData
): Promise<LeadSubmissionResponse> {
  // Ensure that we have either email or phone
  if (!data.email && !data.phone) {
    throw new Error("At least email or phone must be provided");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_DASHBOARD_API_KEY || "",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to submit lead data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting lead data:", error);
    throw error;
  }
}

// Analytics API Types and Functions

/**
 * Type for Analytics data
 */
export type EventRequest = {
  visitorId?: string;
  eventType: string;
  eventData?: Record<string, any>;
};

export type EventResponse = {
  success: boolean;
  eventId: string;
  message: string;
};

export async function trackEvent(data: EventRequest): Promise<EventResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/analytics/track/event`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_DASHBOARD_API_KEY || "",
        },
        body: JSON.stringify(data),
      }
    );
    console.log("Tracking event:", data.eventType);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to track event");
    }

    return await response.json();
  } catch (error) {
    console.error("Error tracking event:", error);
    throw error;
  }
}
