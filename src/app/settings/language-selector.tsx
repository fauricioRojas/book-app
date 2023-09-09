'use client';

import styled, { useTheme } from 'styled-components';

import { FlexWrap, Icon, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;
const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const LanguageSelector = () => {
  const { colors } = useTheme();
  const { language, languageOptions, translation, changeLanguage } = useLanguage();

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
        onChange={changeLanguage}
      />
    </StyledFlexWrap>
  );
};
