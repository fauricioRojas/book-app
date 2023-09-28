import type {
  Breakpoints,
  Colors,
  Gutters,
  FontWeights,
  Shadows,
  Theme,
  ZIndices,
} from "./types";

const breakpoints: Breakpoints = {
  sm: "36rem",
  md: "48rem",
  lg: "62rem",
  xl: "75rem",
  xxl: "87.5rem",
};

const commonColors = {
  primary100: "#93C5FD",
  primary200: "#60A5FA",
  primary: "#3B82F6",
  primary400: "#2563EB",
  primary500: "#1D4ED8",
  white: "#FFFFFF",
  black: "#000000",
  success100: "#22C55E",
  success: "#31A24C",
  success300: "#16A34A",
  error100: "#EC716F",
  error: "#DC3545",
  error300: "#A12D35",
  warning100: "#FDBA74",
  warning: "#F97316",
  warning300: "#EA580C",
};

export const lightColors: Colors = {
  ...commonColors,
  secondary100: "#F3F4F6",
  secondary200: "#EEEFF1",
  secondary: "#AFB3BB",
  secondary400: "#A8AAAC",
  secondary500: "#6D6E6F",
  neutral: "#FEFEFE",
  primaryText: "#171717",
  secondaryText: "#666666",
  skeleton: "#DBDDDF",
  border: "#E4E4E7",
  backdrop: "rgba(255, 255, 255, 0.8)",
  card: "#F2F2F4",
};

export const darkColors: Colors = {
  ...commonColors,
  secondary100: "#989A9C",
  secondary200: "#686B6E",
  secondary: "#27272A",
  secondary400: "#2E3133",
  secondary500: "#212324",
  neutral: "#0D0D10",
  primaryText: "#EDEDED",
  secondaryText: "#888888",
  skeleton: "#1E1B1B",
  border: "#27272A",
  backdrop: "rgba(0, 0, 0, 0.6)",
  card: "#211F2A",
};

const fontWeights: FontWeights = {
  bold: 700,
  regular: 400,
  light: 300,
  thin: 100,
};

const gutters: Gutters = {
  size0: 0,
  size1: "0.25rem",
  size2: "0.5rem",
  size3: "0.75rem",
  size4: "1rem",
  size5: "1.25rem",
  size6: "1.5rem",
  size7: "1.75rem",
  size8: "2rem",
  size9: "2.25rem",
  size10: "2.5rem",
  size11: "2.75rem",
  size12: "3rem",
  size13: "3.25rem",
  size14: "3.5rem",
  size15: "3.75rem",
  size16: "4rem",
  size17: "4.25rem",
  size18: "4.5rem",
  size19: "4.75rem",
  size20: "5rem",
};

const shadows: Shadows = {
  sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
  md: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
  lg: "0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15)",
};

const zIndices: ZIndices = {
  hide: -1,
  drawer: 1400,
  popover: 1500,
  snackbar: 1600,
};

const commonTheme: Omit<Theme, "colors"> = {
  backdropBlur: "blur(8px)",
  borderRadius: "6px",
  breakpoints,
  fontWeights,
  gutters,
  shadows,
  zIndices,
};

export const LIGHT_THEME: Theme = {
  ...commonTheme,
  colors: lightColors,
};

export const DARK_THEME: Theme = {
  ...commonTheme,
  colors: darkColors,
};
