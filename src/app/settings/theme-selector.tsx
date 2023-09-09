'use client';

import styled, { useTheme } from 'styled-components';

import { FlexWrap, Icon, Switch, Typography } from '@/shared/components';
import { useCustomTheme, useLanguage } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;
const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const ThemeSelector = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <StyledFlexWrap justify="space-between">
      <FlexWrap align="center" gap={2}>
        <StyledIconWrapper>
          <Icon name="moon"
            color={colors.secondaryText}
            width={15}
            height={15}
          />
        </StyledIconWrapper>
        <Typography variant="label">{translation.theme}</Typography>
      </FlexWrap>
      <Switch checked={isDarkTheme} onChange={toggleTheme} />
    </StyledFlexWrap>
  );
};
