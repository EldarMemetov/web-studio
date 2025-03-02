import { NextResponse } from "next/server";
import { LANGUAGES } from "./shared/constants";

export function middleware(request) {
  const { cookies, headers, nextUrl } = request;
  const supportedLanguages = Object.values(LANGUAGES);
  const { pathname } = nextUrl;

  const exactWithSlashRegex = new RegExp(
    `^/(${supportedLanguages.join("|")})/$`,
  );
  if (exactWithSlashRegex.test(pathname)) {
    nextUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(nextUrl);
  }

  const missingSlashRegex = new RegExp(
    `^/(${supportedLanguages.join("|")})([^/].+)`,
  );
  if (missingSlashRegex.test(pathname)) {
    const correctedPath = pathname.replace(missingSlashRegex, "/$1/$2");
    nextUrl.pathname = correctedPath;
    return NextResponse.redirect(nextUrl);
  }

  const hasLocale = supportedLanguages.some((lang) =>
    pathname.startsWith(`/${lang}`),
  );
  if (!hasLocale) {
    let currentLocale = cookies.get("NEXT_LOCALE")?.value;
    if (!currentLocale) {
      const acceptLanguage = headers.get("accept-language");
      if (acceptLanguage) {
        const browserLocale = acceptLanguage.split(",")[0].split("-")[0];
        if (supportedLanguages.includes(browserLocale)) {
          currentLocale = browserLocale;
        }
      }
    }
    if (!currentLocale) {
      currentLocale = LANGUAGES.UA;
    }
    nextUrl.pathname = `/${currentLocale}${pathname}`;
    const response = NextResponse.redirect(nextUrl);
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
