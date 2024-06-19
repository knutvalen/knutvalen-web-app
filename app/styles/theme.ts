import { css } from "styled-components";

const colors = {
  white: css`hsl(0 0% 100%)`,
  grey: {
    50: css`hsl(210 20% 98%)`,
    100: css`hsl(210 40% 96%)`,
    200: css`hsl(214 32% 91%)`,
    300: css`hsl(213 27% 84%)`,
    400: css`hsl(218 11% 65%)`,
    500: css`hsl(220 9% 46%)`,
    600: css`hsl(215 14% 34%)`,
    700: css`hsl(217 19% 27%)`,
    800: css`hsl(215 28% 17%)`,
    900: css`hsl(221 39% 11%)`,
    950: css`hsl(224 71% 4%)`,
  },
  black: css`hsl(0 0% 0%)`,
  primary: {
    light: css`hsl(212 96% 78%)`,
    normal: css`hsl(217 91% 60%)`,
    dark: css`hsl(226 71% 40%)`,
  },
  colorMixGrey: {
    50: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 5%, hsl(0 0% 100%))`,
    100: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 10%, hsl(0 0% 100%))`,
    200: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 20%, hsl(0 0% 100%))`,
    300: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 30%, hsl(0 0% 100%))`,
    400: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 40%, hsl(0 0% 100%))`,
    500: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 50%, hsl(0 0% 100%))`,
    600: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 60%, hsl(0 0% 100%))`,
    700: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 70%, hsl(0 0% 100%))`,
    800: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 80%, hsl(0 0% 100%))`,
    900: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 90%, hsl(0 0% 100%))`,
    950: css`color-mix(in hsl shorter hue, hsl(0 0% 0%) 95%, hsl(0 0% 100%))`,
  },
  warning: {
    light: css`hsl(50 98% 64%)`,
    normal: css`hsl(45 93% 47%)`,
    dark: css`hsl(32 81% 29%)`,
  },
  error: {
    light: css`hsl(0 94% 82%)`,
    normal: css`hsl(0 84% 60%)`,
    dark: css`hsl(0 70% 35%)`,
  },
  success: {
    light: css`hsl(142 77% 73%)`,
    normal: css`hsl(142 71% 45%)`,
    dark: css`hsl(143 64% 24%)`,
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
  phoneAndSmaller: css`(max-width: ${breakpoints.phoneMax / 16}rem)`,
  tabletAndSmaller: css`(max-width: ${breakpoints.tabletMax / 16}rem)`,
  laptopAndSmaller: css`(max-width: ${breakpoints.laptopMax / 16}rem)`,
  prefersDarkTheme: css`(prefers-color-scheme: dark)`,
  prefersAnimations: css`(prefers-reduced-motion: no-preference)`,
  usesMouseOrTrackpad: css`(hover: hover) and (pointer: fine)`,
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
