'use client';

import { ChangeEvent } from 'react';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';
import { LanguageType } from '@/contexts/language/language.types';

export const LanguageSelector = () => {
  const { language, languageOptions, translation, changeLanguage } = useLanguage();

  const handleChangeLanguage = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    changeLanguage(target.value as LanguageType);

  return (
    <FlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.language}</Typography>
      <Select value={language} options={languageOptions} onChange={handleChangeLanguage} />
    </FlexWrap>
  );
};
