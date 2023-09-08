"use client";

import { createContext, useContext } from "react";

interface ICustomThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ICustomThemeContext>({
  isDarkTheme: false,
  toggleTheme: () => undefined,
});

export const useCustomTheme = () => useContext(CustomThemeContext);
