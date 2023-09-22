import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "@/shared/constants";

// import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isValidRoute =
    pathname === ROUTES.HOME ||
    pathname.startsWith(ROUTES.PETS) ||
    pathname === ROUTES.PROFILE ||
    pathname === ROUTES.REMINDERS ||
    pathname.startsWith(ROUTES.VEHICLES);

  if (!session && isValidRoute) {
    const url = new URL(req.url);
    url.pathname = ROUTES.SIGN_IN;
    return NextResponse.redirect(url);
  }
  if (
    session &&
    (pathname === ROUTES.SIGN_IN ||
      pathname === ROUTES.SIGN_UP ||
      pathname === ROUTES.HOME)
  ) {
    const url = new URL(req.url);
    url.pathname = ROUTES.REMINDERS;
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
