// prettier-ignore
export const codeBlock1 =
`const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
`;

// prettier-ignore
export const codeBlock2 =
`"use client";

import { ReactNode, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export const Registry = ({ children }: { children: ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
`;

// prettier-ignore
export const codeBlock3 =
`import { ReactNode } from "react";
import { Registry } from "@/app/Registry";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "fallback",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={inter.variable}>
      <body>
        <Registry>{children}</Registry>
      </body>
    </html>
  );
};

export default RootLayout;
`;

// prettier-ignore
export const codeBlock4 =
`"use client";

import styled from "styled-components";

const Main = styled.main\`
  padding: 16px;
\`;

const Paragraph = styled.p\`\`;

const Page = () => {
  return (
    <Main>
      <Paragraph>Hello, Styled Components!</Paragraph>
    </Main>
  );
};

export default Page;
`;

// prettier-ignore
export const codeBlock5 =
`Route (app)                              Size     First Load JS
┌ ○ /                                    334 B          98.6 kB
└ ○ /_not-found                          871 B          87.9 kB
+ First Load JS shared by all            87 kB
  ├ chunks/23-ebf544808528e91a.js        31.5 kB
  ├ chunks/fd9d1056-be48aeae6e94b8d1.js  53.6 kB
  └ other shared chunks (total)          1.94 kB


○  (Static)  prerendered as static content
`;

// prettier-ignore
export const codeBlock6 =
`const colors = {
  white: "hsl(0 0% 100%)",
  grey: {
    50: "hsl(210 20% 98%)",
    100: "hsl(210 40% 96%)",
    200: "hsl(214 32% 91%)",
    300: "hsl(213 27% 84%)",
    400: "hsl(218 11% 65%)",
    500: "hsl(220 9% 46%)",
    600: "hsl(215 14% 34%)",
    700: "hsl(217 19% 27%)",
    800: "hsl(215 28% 17%)",
    900: "hsl(221 39% 11%)",
    950: "hsl(224 71% 4%)",
  },
  black: "hsl(0 0% 0%)",
  primary: "hsl(217 91% 60%)",
};

export const theme = {
  colors,
};
`;

// prettier-ignore
export const codeBlock7 =
`import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle\`
  html {
    font-family: var(--font-inter);
  }
\`;
`;

// prettier-ignore
export const codeBlock8 =
  `"use client";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/app/theme";
import { ReactNode } from "react";
import { GlobalStyle } from "@/app/GlobalStyle";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </StyledThemeProvider>
  );
};
`;

// prettier-ignore
export const codeBlock9 =
`import { ReactNode } from "react";
import { Registry } from "@/app/Registry";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "fallback",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={inter.variable}>
      <body>
        <Registry>
          <ThemeProvider>{children}</ThemeProvider>
        </Registry>
      </body>
    </html>
  );
};

export default RootLayout;
`;

// prettier-ignore
export const codeBlock10 =
`import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle\`
  body {
    background-color: \${(props) => props.theme.colors.white};
  }
  
  html {
    font-family: var(--font-inter);
  }
\`;
`;

// prettier-ignore
export const codeBlock11 =
`"use client";

import styled from "styled-components";

const Main = styled.main\`
  padding: 16px;
\`;

const Paragraph = styled.p\`
  color: \${props => props.theme.colors.primary};
\`;

const Page = () => {
  return (
    <Main>
      <Paragraph>Hello, Styled Components!</Paragraph>
    </Main>
  );
};

export default Page;
`;

// prettier-ignore
export const codeBlock12 =
`"use client";

import styled from "styled-components";
import { useState } from "react";

const Main = styled.main\`
  padding: 16px;
\`;

const Paragraph = styled.p<{ $isPrimaryColored: boolean }>\`
  color: \${(props) =>
  props.$isPrimaryColored
    ? props.theme.colors.primary
    : props.theme.colors.grey[500]};
\`;

const Page = () => {
  const [isPrimaryColored, togglePrimaryColored] = useState(false);

  return (
    <Main>
      <Paragraph $isPrimaryColored={isPrimaryColored}>
        Hello, Styled Components!
      </Paragraph>
      <button onClick={() => togglePrimaryColored(!isPrimaryColored)}>
        Toggle
      </button>
    </Main>
  );
};

export default Page;
`;

// prettier-ignore
export const codeBlock13 =
`import "styled-components";
import { theme } from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
`;

// prettier-ignore
export const codeBlock14 =
`Route (app)                              Size     First Load JS
┌ ○ /                                    450 B            99 kB
└ ○ /_not-found                          871 B          87.9 kB
+ First Load JS shared by all            87 kB
  ├ chunks/23-1173f579f5a64b66.js        31.5 kB
  ├ chunks/fd9d1056-be48aeae6e94b8d1.js  53.6 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)  prerendered as static content
`;
