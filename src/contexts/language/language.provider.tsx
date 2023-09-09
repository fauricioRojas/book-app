'use client';

import { ChangeEvent, FC, PropsWithChildren } from 'react';

import { useLocalStorage } from '@/hooks';
import { LANGUAGES, languageTypes } from './constants/language.constants';
import { LanguageType, ILanguageTranslation } from './language.types';
import { LanguageContext } from './language.context';
import { ISelectOption } from '@/shared/types';

const getLanguageOptions = (translation: ILanguageTranslation): ISelectOption<LanguageType>[] =>
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
