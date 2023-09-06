import {
  type IBreakpoints,
  type IColors,
  type IGutters,
  type IFontWeights,
  type IShadows,
  type ITheme,
} from "./types";

const breakpoints: IBreakpoints = {
  sm: "36rem",
  md: "48rem",
  lg: "62rem",
  xl: "75rem",
  xxl: "87.5rem",
};

const commonColors = {
  primary100: "#6897D8",
  primary: "#2474E1",
  primary900: "#19519E",
  white: "#FFF",
  black: "#000",
  success: "#31A24C",
  error: "#DC3545",
  warning: "#FC6E20",
  gray100: "#F8F9FA",
  gray200: "#E9ECEF",
  gray300: "#DEE2E6",
  gray400: "#CED4DA",
  gray500: "#ADB5BD",
  gray600: "#6C757D",
  gray700: "#495057",
  gray800: "#343A40",
  gray900: "#212529",
};

export const lightColors: IColors = {
  ...commonColors,
  secondary100: "#ECEEF1",
  secondary: "#E8EAED",
  secondary900: "#797C7E",
  neutral: "#FEFEFE",
  neutralTransparent: "rgba(255,255,255,0.9)",
  primaryText: "#292A36",
  secondaryText: "#444444",
  skeleton: "#ADB5BD",
  border: "rgba(0, 0, 0, 0.23)",
};

export const darkColors: IColors = {
  ...commonColors,
  secondary100: "#969A9B",
  secondary: "#3C4043",
  secondary900: "#242728",
  neutral: "#1A1A1A",
  neutralTransparent: "rgba(16, 20, 24, 0.8)",
  primaryText: "#E4E6EB",
  secondaryText: "#B0B3B8",
  skeleton: "#1F1E1E",
  border: "rgba(255, 255, 255, 0.23)",
};

const fontWeights: IFontWeights = {
  bold: 700,
  regular: 400,
  light: 300,
  thin: 100,
};

const gutters: IGutters = {
  borderRadius: "4px",
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
};

const shadows: IShadows = {
  sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
  md: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
  lg: "0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15)",
};

const commonTheme = {
  breakpoints,
  fontWeights,
  gutters,
  shadows,
};

export const LIGHT_THEME: ITheme = {
  ...commonTheme,
  colors: lightColors,
};

export const DARK_THEME: ITheme = {
  ...commonTheme,
  colors: darkColors,
};
