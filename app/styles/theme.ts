const colors = {
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
  primary: {
    light: "hsl(212 96% 78%)",
    normal: "hsl(217 91% 60%)",
    dark: "hsl(226 71% 40%)",
  },
  secondary: {
    light: "hsl(291 93% 83%)",
    normal: "hsl(292 84% 61%)",
    dark: "hsl(295 70% 33%)",
  },
  info: {
    light: "hsl(24 6% 83%)",
    normal: "hsl(25 5% 45%)",
    dark: "hsl(12 6% 15%)",
  },
  warning: {
    light: "hsl(50 98% 64%)",
    normal: "hsl(45 93% 47%)",
    dark: "hsl(32 81% 29%)",
  },
  error: {
    light: "hsl(0 94% 82%)",
    normal: "hsl(0 84% 60%)",
    dark: "hsl(0 70% 35%)",
  },
  success: {
    light: "hsl(142 77% 73%)",
    normal: "hsl(142 71% 45%)",
    dark: "hsl(143 64% 24%)",
  },
};

const weights = {
  thin: 100,
  normal: 400,
  mediumSmall: 500,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

const queries = {
  phoneAndSmaller: `(max-width: ${breakpoints.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${breakpoints.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${breakpoints.laptopMax / 16}rem)`,
  prefersDarkTheme: `(prefers-color-scheme: dark)`,
  prefersAnimations: `(prefers-reduced-motion: no-preference)`,
  usesMouseOrTrackpad: `(hover: hover) and (pointer: fine)`,
};

const elevations = {
  depressed: `
    inset 0.5px 1px 4px hsl(var(--shadow-color) / 0.7)
  `,
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
};

export const theme = {
  colors,
  weights,
  queries,
  elevations,
};
