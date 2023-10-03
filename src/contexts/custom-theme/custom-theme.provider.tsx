'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { useLocalStorage } from '@/hooks';
import { getDeviceDarkMode } from '@/shared/utils';
import { DARK_THEME, LIGHT_THEME } from '@/theme';
import { CustomThemeContext } from './custom-theme.context';

const isDeviceDarkTheme = getDeviceDarkMode();

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    'dark-theme',
    isDeviceDarkTheme,
  );

  const toggleTheme = () => setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME}>
      <CustomThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};
