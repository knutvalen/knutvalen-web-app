"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/app/styles/theme";
import { GlobalStyles } from "@/app/styles/GlobalStyles";
import { ReactNode, useContext } from "react";
import { getAnalytics, isSupported } from "@firebase/analytics";
import { FirebaseContext } from "@/app/api/FirebaseProvider";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const firebaseApp = useContext(FirebaseContext);
  isSupported().then((res) => res && getAnalytics(firebaseApp));

  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </StyledThemeProvider>
  );
};
