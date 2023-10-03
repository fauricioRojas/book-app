'use client';

import { ChangeEvent, createContext, useContext } from 'react';

import { SelectOption } from '@/shared/types';
import type { LanguageTranslation, LanguageType } from './language.types';

type TLanguageContext = {
  language: LanguageType;
  languageOptions: SelectOption<string>[];
  translation: LanguageTranslation;
  changeLanguage: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const LanguageContext = createContext<TLanguageContext>({
  language: 'es',
  languageOptions: [],
  translation: {} as LanguageTranslation,
  changeLanguage: () => undefined,
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
};
