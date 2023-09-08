'use client';

import styled from 'styled-components';

import { ChangeEvent } from 'react';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';
import { LanguageType } from '@/contexts/language/language.types';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const LanguageSelector = () => {
  const { language, languageOptions, translation, changeLanguage } = useLanguage();

  const handleChangeLanguage = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    changeLanguage(target.value as LanguageType);

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.language}</Typography>
      <Select value={language} options={languageOptions} onChange={handleChangeLanguage} />
    </StyledFlexWrap>
  );
};
