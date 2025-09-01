import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// CORS configuration
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
  "Access-Control-Allow-Credentials": "true",
} as const;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
  }

  // Handle wedev_public routes
  if (pathname.startsWith("/wedev_public")) {
    const response = NextResponse.next();
    response.headers.set("Cross-Origin-Embedder-Policy", "unsafe-none");
    response.headers.set("Cross-Origin-Resource-Policy", "cross-origin");
    return response;
  }

  // Add CORS headers to all responses
  const response = NextResponse.next();
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico|wedev).*)",
    "/api/:path*",
    "/wedev/:path*",
  ],
  runtime: "nodejs",
}
