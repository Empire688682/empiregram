import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  const cookieHeader = req.headers.get("cookie");
  const token = cookieHeader
    ? cookieHeader
      .split("; ")
      .find((c) => c.startsWith("EmpireGToken="))
      ?.split("=")[1]
    : "";

  const isPublic = path === "/";
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  const protectedPaths = ["/chat", "/create", "/group", "/notification", "/settings", "/video"];
  const isProtected = protectedPaths.some((protectedPath) => path.startsWith(protectedPath));
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Prevent redirect loop for public paths
  if (!token && path !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/", "/chat", "/notification", "/@:username*","/create", "/group", "/settings", "/video"],
};
