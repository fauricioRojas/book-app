'use client';

import styled, { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Switch, Typography } from '@/shared/components';
import { useCustomTheme, useLanguage } from '@/contexts';

const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const ThemeSelector = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <Card>
      <FlexWrap justify="space-between">
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
      </FlexWrap>
    </Card>
  );
};
