'use client';

import styled, { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import { Card, FlexWrap, Icon, Select, Typography } from '@/shared/components';

const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const LanguageSelector = () => {
  const { colors } = useTheme();
  const { language, languageOptions, translation, changeLanguage } =
    useLanguage();

  return (
    <Card background>
      <FlexWrap justify="space-between" align="center">
        <FlexWrap align="center" gap={2}>
          <StyledIconWrapper>
            <Icon
              name="translate"
              color={colors.secondaryText}
              width={22}
              height={22}
            />
          </StyledIconWrapper>
          <Typography variant="label">{translation.language}</Typography>
        </FlexWrap>
        <Select
          value={language}
          borderless
          options={languageOptions}
          onChange={changeLanguage}
        />
      </FlexWrap>
    </Card>
  );
};
