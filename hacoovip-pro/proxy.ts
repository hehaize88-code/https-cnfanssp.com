import { NextResponse, type NextRequest } from "next/server";

const supportedLanguages = new Set(["en", "de", "es", "fr", "it"]);

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const firstSegment = request.nextUrl.pathname.split("/")[1];

  requestHeaders.set(
    "x-site-language",
    supportedLanguages.has(firstSegment) ? firstSegment : "en",
  );

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg).*)"],
};
