import type { Metadata } from "next";
import { inter, robotoMono } from "@/app/styles/fonts";
import { ThemeProvider } from "@/app/styles/ThemeProvider";
import { Header } from "@/app/composistions/Header";
import { Footer } from "@/app/composistions/Footer";
import { StyledComponentsRegistry } from "@/app/styles/StyledComponentsRegistry";
import { hasConsentCookie } from "@/app/serverActions";
import { CookieConsent } from "@/app/composistions/CookieConsent";
import { FirebaseProvider } from "@/app/api/FirebaseProvider";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Knut Valen",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <FirebaseProvider>
          <StyledComponentsRegistry>
            <ThemeProvider>
              <Header />
              {children}
              {!hasConsentCookie() && <CookieConsent />}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </FirebaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
