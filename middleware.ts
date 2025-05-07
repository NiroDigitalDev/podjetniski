import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if we're in maintenance mode
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  // If maintenance mode is active and we're not already on the maintenance page
  if (
    isMaintenanceMode &&
    !request.nextUrl.pathname.startsWith("/maintenance")
  ) {
    // Exclude asset requests (like images, css, js)
    if (
      !request.nextUrl.pathname.includes("/_next/") &&
      !request.nextUrl.pathname.includes("/api/") &&
      !request.nextUrl.pathname.endsWith(".ico") &&
      !request.nextUrl.pathname.endsWith(".png") &&
      !request.nextUrl.pathname.endsWith(".svg") &&
      !request.nextUrl.pathname.endsWith(".jpg") &&
      !request.nextUrl.pathname.endsWith(".jpeg")
    ) {
      return NextResponse.redirect(new URL("/maintenance", request.url));
    }
  }

  return NextResponse.next();
}

// Run the middleware on all routes except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml (public files)
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
