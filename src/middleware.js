"use strict"
import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  const token = req.cookies.get("EmpireGToken")?.value || "";

  const isPublic = path === "/";
  if (token && isPublic) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  const protectedPaths = ["/chat", "/create", "/group", "/notification", "/settings", "/video"];
  const userOnly = protectedPaths.includes(path);
  if (!token && usersOnly) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/chat",
    "/notification",
    "/create",
    "/group",
    "/settings",
    "/video"
  ],
};
