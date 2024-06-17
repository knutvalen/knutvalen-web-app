"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/app/styles/theme";
import { GlobalStyle } from "@/app/styles/GlobalStyle";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </StyledThemeProvider>
  );
};
