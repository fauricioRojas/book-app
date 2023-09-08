"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from '@/hooks';
import { DARK_THEME, LIGHT_THEME } from '@/theme';
import { CustomThemeContext } from './custom-theme.context';

const isDeviceDarkTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean>('dark-theme', isDeviceDarkTheme);

  const toggleTheme = () => setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
      <CustomThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};
