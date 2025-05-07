import { trackEvent as baseTrackEvent } from "./APIService";

/**
 * Gets detailed device and browser information
 */
function getDeviceInfo() {
  // Only run on client side
  if (typeof window === "undefined") return {};

  const ua = navigator.userAgent;
  const browserInfo = {
    userAgent: ua,
    language: navigator.language,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
    isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    isOnline: navigator.onLine,
  };

  // Try to detect browser
  let browser = "unknown";
  if (ua.indexOf("Chrome") > -1) browser = "Chrome";
  else if (ua.indexOf("Safari") > -1) browser = "Safari";
  else if (ua.indexOf("Firefox") > -1) browser = "Firefox";
  else if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident") > -1)
    browser = "IE";
  else if (ua.indexOf("Edge") > -1) browser = "Edge";

  // Try to detect OS
  let os = "unknown";
  if (ua.indexOf("Windows") > -1) os = "Windows";
  else if (ua.indexOf("Mac") > -1) os = "MacOS";
  else if (ua.indexOf("Linux") > -1) os = "Linux";
  else if (ua.indexOf("Android") > -1) os = "Android";
  else if (ua.indexOf("iPhone") > -1 || ua.indexOf("iPad") > -1) os = "iOS";

  // Try to detect mobile
  const isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  return {
    browser,
    os,
    isMobile,
    ...browserInfo,
  };
}

/**
 * Gets referrer and UTM parameters
 */
function getReferrerInfo() {
  // Only run on client side
  if (typeof window === "undefined") return {};

  const referrer = document.referrer || "direct";

  // Get UTM parameters from URL
  const url = new URL(window.location.href);
  const utmSource = url.searchParams.get("utm_source");
  const utmMedium = url.searchParams.get("utm_medium");
  const utmCampaign = url.searchParams.get("utm_campaign");
  const utmContent = url.searchParams.get("utm_content");
  const utmTerm = url.searchParams.get("utm_term");

  return {
    referrer,
    utmSource: utmSource || undefined,
    utmMedium: utmMedium || undefined,
    utmCampaign: utmCampaign || undefined,
    utmContent: utmContent || undefined,
    utmTerm: utmTerm || undefined,
  };
}

/**
 * Enhanced trackEvent function that automatically includes device, referrer, and timestamp data
 */
export async function trackEvent({
  visitorId,
  eventType,
  eventData = {},
}: {
  visitorId?: string;
  eventType: string;
  eventData?: Record<string, any>;
}) {
  try {
    // Skip enhancing the data on the server side
    if (typeof window === "undefined") {
      return baseTrackEvent({ visitorId, eventType, eventData });
    }

    // Gather enhanced data
    const deviceInfo = getDeviceInfo();
    const referrerInfo = getReferrerInfo();
    const timestamp = new Date().toISOString();
    const path = window.location.pathname;
    const url = window.location.href;

    // Combine all data
    const enhancedEventData = {
      ...eventData,
      _meta: {
        timestamp,
        path,
        url,
        device: deviceInfo,
        referrer: referrerInfo,
      },
    };

    return baseTrackEvent({
      visitorId,
      eventType,
      eventData: enhancedEventData,
    });
  } catch (error) {
    console.error("Error in enhanced trackEvent:", error);
    // Fall back to original trackEvent
    return baseTrackEvent({ visitorId, eventType, eventData });
  }
}
