"use client";

import { ChangeEvent, createContext, useContext } from "react";

import { ISelectOption } from "@/shared/types";
import { ILanguageTranslation, LanguageType } from "./language.types";

interface ILanguageContext {
  language: LanguageType;
  languageOptions: ISelectOption<string>[];
  translation: ILanguageTranslation;
  changeLanguage: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: "es",
  languageOptions: [],
  translation: {} as ILanguageTranslation,
  changeLanguage: () => undefined,
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};
