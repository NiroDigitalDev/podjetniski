"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/services/analytics";
import { trackMetaEvent } from "@/services/capi/actions/trackEvent";

// Define the context type
type AnalyticsContextType = {
  trackMetaViewContent: (
    contentName: string,
    contentCategory?: string,
    customData?: Record<string, any>
  ) => Promise<void>;
  sessionId: string;
  visitorId: string;
};

// Create context with a default value
const AnalyticsContext = createContext<AnalyticsContextType>({
  trackMetaViewContent: async () => {},
  sessionId: "",
  visitorId: "",
});

// Custom hook to use the analytics context
export const useAnalytics = () => useContext(AnalyticsContext);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sessionId, setSessionId] = useState<string>("");
  const [visitorId, setVisitorId] = useState<string>("");
  const [lastPageViewTime, setLastPageViewTime] = useState<number>(Date.now());
  const [isInitialized, setIsInitialized] = useState(false);

  // Track which pages we've already logged to prevent duplicate events
  const trackingRef = useRef<{
    lastTrackedPath: string | null;
    lastTrackedTime: number;
    debounceTimeout: NodeJS.Timeout | null;
  }>({
    lastTrackedPath: null,
    lastTrackedTime: 0,
    debounceTimeout: null,
  });

  // Load session and visitor IDs from localStorage on initial mount
  useEffect(() => {
    try {
      const storedSessionId = localStorage.getItem("tf_session_id");
      const storedVisitorId = localStorage.getItem("tf_visitor_id");

      if (storedSessionId) setSessionId(storedSessionId);
      if (storedVisitorId) setVisitorId(storedVisitorId);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Debounced page view tracking to prevent duplicate events
  const debouncedTrackPageView = useCallback(
    async (url: string, path: string, title: string, timeOnPage?: number) => {
      // Clear any existing timeout
      if (trackingRef.current.debounceTimeout) {
        clearTimeout(trackingRef.current.debounceTimeout);
      }

      // Set a new timeout
      trackingRef.current.debounceTimeout = setTimeout(async () => {
        // Safety check to prevent duplicate events
        const now = Date.now();
        const lastTrackedPath = trackingRef.current.lastTrackedPath;
        const timeSinceLastTrack = now - trackingRef.current.lastTrackedTime;

        // Don't track if we've already tracked this path recently (within 2 seconds)
        if (lastTrackedPath === path && timeSinceLastTrack < 2000) {
          return;
        }

        try {
          // Track the regular pageview event
          await trackEvent({
            visitorId: visitorId || undefined,
            eventType: "PageView",
            eventData: {
              url,
              path,
              title,
              timeOnPage,
            },
          });

          // Update tracking reference
          trackingRef.current.lastTrackedPath = path;
          trackingRef.current.lastTrackedTime = now;

          // Session ID and Visitor ID are now managed client-side only
          // If no session ID yet, create one
          if (!sessionId) {
            const newSessionId = `s_${Date.now()}_${Math.random()
              .toString(36)
              .substring(2, 9)}`;
            setSessionId(newSessionId);
            try {
              localStorage.setItem("tf_session_id", newSessionId);
            } catch (error) {
              console.error("Error writing to localStorage:", error);
            }
          }

          // If no visitor ID yet, create one
          if (!visitorId) {
            const newVisitorId = `v_${Date.now()}_${Math.random()
              .toString(36)
              .substring(2, 12)}`;
            setVisitorId(newVisitorId);
            try {
              localStorage.setItem("tf_visitor_id", newVisitorId);
            } catch (error) {
              console.error("Error writing to localStorage:", error);
            }
          }

          // Also track Meta ViewContent event, but only once per page view (debounced)
          await trackMetaEvent({
            eventName: "ViewContent",
            customData: {
              content_name: title || path,
              content_category: "page_view",
              path: path,
              url: url,
            },
            eventSourceUrl: url,
            eventId: `vc_page_${path}_${now}`,
          });
        } catch (error) {
          console.error("Error tracking page view:", error);
        }
      }, 300); // 300ms debounce
    },
    [sessionId, visitorId]
  );

  // Track page views when the path changes
  useEffect(() => {
    if (!isInitialized) return;

    const handlePageView = async () => {
      // Calculate time on previous page
      const timeOnPage = Date.now() - lastPageViewTime;
      setLastPageViewTime(Date.now());

      // Get full URL including search params
      const url = `${window.location.origin}${pathname}${
        searchParams.toString() ? `?${searchParams.toString()}` : ""
      }`;

      // Use the debounced version of page view tracking
      debouncedTrackPageView(
        url,
        pathname,
        document.title,
        timeOnPage > 0 ? Math.floor(timeOnPage / 1000) : undefined
      );
    };

    handlePageView();

    // Store a reference to the current timeout to prevent stale closure issues
    const currentTimeoutRef = trackingRef.current;

    // Cleanup function to clear any pending timeouts
    return () => {
      if (currentTimeoutRef.debounceTimeout) {
        clearTimeout(currentTimeoutRef.debounceTimeout);
      }
    };
  }, [
    pathname,
    searchParams,
    debouncedTrackPageView,
    lastPageViewTime,
    isInitialized,
  ]);

  // Track page visibility changes and user exit - memoize the handler
  useEffect(() => {
    if (!isInitialized) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // User is navigating away or minimizing the page
      } else {
        // User returned to the page - update time without triggering events
        // Just update the last page view time without triggering a new pageview
        setLastPageViewTime((prev) => {
          // Only reset the time if it's been more than 5 minutes since they tabbed away
          // This prevents triggering new events for short tab switches
          if (Date.now() - prev > 300000) {
            // 5 minutes
            return Date.now();
          }
          return prev; // Keep the same time for short tab switches
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isInitialized, pathname, visitorId]);

  // Function to track Meta ViewContent events
  const trackMetaViewContent = useCallback(
    async (
      contentName: string,
      contentCategory?: string,
      customData?: Record<string, any>
    ) => {
      try {
        const eventSourceUrl = `${window.location.origin}${pathname}${
          searchParams.toString() ? `?${searchParams.toString()}` : ""
        }`;

        await trackMetaEvent({
          eventName: "ViewContent",
          customData: {
            content_name: contentName,
            content_category: contentCategory,
            ...customData,
          },
          eventSourceUrl,
          eventId: `vc_${contentName}_${Date.now()}`,
        });

        console.log("Meta ViewContent event tracked:", {
          eventName: "ViewContent",
          contentName,
          contentCategory,
          customData,
          eventSourceUrl,
        });
      } catch (error) {
        console.error("Error tracking Meta ViewContent event:", error);
      }
    },
    [pathname, searchParams]
  );

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({
      trackMetaViewContent,
      sessionId,
      visitorId,
    }),
    [trackMetaViewContent, sessionId, visitorId]
  );

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export default AnalyticsProvider;
