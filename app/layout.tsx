import { ReactNode } from "react";
import type { Metadata } from "next";
import { inter, robotoMono } from "@/app/styles/fonts";
import { ThemeProvider } from "@/app/styles/ThemeProvider";
import { Header } from "@/app/composistions/Header";
import { Registry } from "@/app/styles/Registry";
import { hasConsentCookie } from "@/app/serverActions";
import { CookieConsent } from "@/app/composistions/CookieConsent";
import { FirebaseProvider } from "@/app/api/FirebaseProvider";

export const metadata: Metadata = {
  title: "Knut Valen",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const consent = await hasConsentCookie();

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <FirebaseProvider>
          <Registry>
            <ThemeProvider>
              <Header />
              {children}
              {!consent && <CookieConsent />}
            </ThemeProvider>
          </Registry>
        </FirebaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
