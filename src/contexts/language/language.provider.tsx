'use client';

import { ChangeEvent, FC, PropsWithChildren } from 'react';

import { useLocalStorage } from '@/hooks';
import { LANGUAGES, languageTypes } from './constants/language.constants';
import { LanguageContext } from './language.context';
import type { LanguageType, LanguageTranslation } from './language.types';
import type { SelectOption } from '@/shared/types';

const getLanguageOptions = (translation: LanguageTranslation): SelectOption<LanguageType>[] =>
  languageTypes.map(type => ({ label: translation[type], value: type }));

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useLocalStorage<LanguageType>('language', 'es');
  const translation = LANGUAGES[language];

  const changeLanguage = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setLanguage(target.value as LanguageType);

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageOptions: getLanguageOptions(translation),
        translation,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
