'use client';

import styled, { useTheme } from 'styled-components';

import { useCustomTheme, useLanguage } from '@/contexts';
import { Card, FlexWrap, Icon, Switch, Typography } from '@/shared/components';

const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const ThemeSelector = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const { isDarkMode, toggleTheme } = useCustomTheme();

  return (
    <Card background>
      <FlexWrap justify="space-between">
        <FlexWrap align="center" gap={2}>
          <StyledIconWrapper>
            <Icon name="moon" size={18} color={colors.secondaryText} />
          </StyledIconWrapper>
          <Typography variant="label">{translation.theme}</Typography>
        </FlexWrap>
        <Switch checked={isDarkMode} onChange={toggleTheme} />
      </FlexWrap>
    </Card>
  );
};
