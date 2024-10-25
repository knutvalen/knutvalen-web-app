import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { inter, robotoMono } from "@/app/styles/fonts";
import { ThemeProvider } from "@/app/styles/ThemeProvider";
import { Header } from "@/app/composistions/Header";
import { Registry } from "@/app/styles/Registry";
import { CookieConsent } from "@/app/composistions/CookieConsent";
import { FirebaseProvider } from "@/app/api/FirebaseProvider";
import { Footer } from "@/app/composistions/Footer";
import { CookiesProvider } from "@/app/CookiesProvider";
import { cookies } from "next/headers";
import { getCookie, hasCookie } from "@/app/serverActions";
import { LayoutProvider } from "@/app/LayoutProvider";

export const metadata: Metadata = {
  title: "Knut Valen",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(217 91% 60%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(0 0% 0%)' },
  ],
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const consent = await hasCookie("necessary", cookieStore);
  const googleAnalyticsCookie = await getCookie("googleAnalytics", cookieStore);

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <CookiesProvider>
          <FirebaseProvider>
            <Registry>
              <ThemeProvider>
                <LayoutProvider analyticsCookie={googleAnalyticsCookie}>
                  <Header />
                  {children}
                  <Footer currentYear={new Date().getFullYear()} />
                  {!consent && <CookieConsent />}
                </LayoutProvider>
              </ThemeProvider>
            </Registry>
          </FirebaseProvider>
        </CookiesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
