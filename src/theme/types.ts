export type Breakpoints = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type Colors = {
  primary100: string;
  primary200: string;
  primary: string; // 10
  primary400: string;
  primary500: string;
  secondary100: string;
  secondary200: string;
  secondary: string; // 30
  secondary400: string;
  secondary500: string;
  neutral: string; // 60
  primaryText: string;
  secondaryText: string;
  white: string;
  black: string;
  success100: string;
  success: string;
  success300: string;
  error100: string;
  error: string;
  error300: string;
  warning100: string;
  warning: string;
  warning300: string;
  skeleton: string;
  border: string;
  backdrop: string;
  card: string;
};

export type FontWeights = {
  bold: number;
  regular: number;
  light: number;
  thin: number;
};

export type Gutters = {
  size0: number;
  size1: string;
  size2: string;
  size3: string;
  size4: string;
  size5: string;
  size6: string;
  size7: string;
  size8: string;
  size9: string;
  size10: string;
  size11: string;
  size12: string;
  size13: string;
  size14: string;
  size15: string;
  size16: string;
  size17: string;
  size18: string;
  size19: string;
  size20: string;
};

export type Shadows = {
  sm: string;
  md: string;
  lg: string;
};

export type ZIndices = {
  hide: number;
  drawer: number;
  popover: number;
  snackbar: number;
};

export type Theme = {
  backdropBlur: string;
  borderRadius: string;
  breakpoints: Breakpoints;
  colors: Colors;
  fontWeights: FontWeights;
  gutters: Gutters;
  shadows: Shadows;
  zIndices: ZIndices;
};
