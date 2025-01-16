import { NextResponse } from 'next/server'

export function middleware(req) {
 const path = req.nextUrl.pathname;
 const token = req.cookies.get("EmpireGToken")?. value || "";

 const isPublic = path === "/";
 if(token && isPublic){
    return NextResponse.redirect(new URL('/chat', req.url));
 }

 const usersOnly = path === "/chat"
 if(!token && usersOnly){
    return NextResponse.redirect(new URL("/", req.url));
 }

 if(!token){
    
 }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "chat",
    "notification",
  ]
}