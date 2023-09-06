export interface IBreakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface IColors {
  primary100: string;
  primary: string; // 10
  primary900: string;
  secondary100: string;
  secondary: string; // 30
  secondary900: string;
  neutral: string; // 60
  neutralTransparent: string;
  primaryText: string;
  secondaryText: string;
  white: string;
  black: string;
  success: string;
  error: string;
  warning: string;
  skeleton: string;
  border: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
}

export interface IFontWeights {
  bold: number;
  regular: number;
  light: number;
  thin: number;
}

export interface IGutters {
  borderRadius: string;
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
}

export interface IShadows {
  sm: string;
  md: string;
  lg: string;
}

export interface ITheme {
  breakpoints: IBreakpoints;
  colors: IColors;
  fontWeights: IFontWeights;
  gutters: IGutters;
  shadows: IShadows;
}
