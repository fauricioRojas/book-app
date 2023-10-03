'use client';

import { createContext, useContext } from 'react';

type TCustomThemeContext = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const CustomThemeContext = createContext<TCustomThemeContext>({
  isDarkMode: false,
  toggleTheme: () => undefined,
});

export const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);

  if (!context) {
    throw new Error('useCustomTheme must be used inside CustomThemeProvider');
  }

  return context;
};
