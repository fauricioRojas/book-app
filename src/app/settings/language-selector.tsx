'use client';

import styled, { useTheme } from 'styled-components';

import { ChangeEvent } from 'react';

import { FlexWrap, Icon, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';
import { LanguageType } from '@/contexts/language/language.types';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;
const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const LanguageSelector = () => {
  const { colors } = useTheme();
  const { language, languageOptions, translation, changeLanguage } = useLanguage();

  const handleChangeLanguage = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    changeLanguage(target.value as LanguageType);

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <FlexWrap align="center" gap={2}>
        <StyledIconWrapper>
          <Icon name="translate" color={colors.secondaryText} />
        </StyledIconWrapper>
        <Typography variant="label">{translation.language}</Typography>
      </FlexWrap>
      <Select
        value={language}
        borderless
        options={languageOptions}
        onChange={handleChangeLanguage}
      />
    </StyledFlexWrap>
  );
};
