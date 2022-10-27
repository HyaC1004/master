import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export {default} from "next-auth/middleware"

export async function middleware(req) {
    // console.log(" middleware - ", Object.keys(req));
    // console.log(" middleware - ", req.nextUrl.pathname);
    const token = await getToken({req:req});
    
    const url = req.nextUrl;
    url.pathname = '/api/unauthorize';

    if(!token) {
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/api/user/:path*","/api/comment"]
}