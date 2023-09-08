'use client';

import styled from 'styled-components';

import { FlexWrap, Switch, Typography } from '@/shared/components';
import { useCustomTheme, useLanguage } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const ThemeSelector = () => {
  const { translation } = useLanguage();
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <StyledFlexWrap justify="space-between">
      <Typography variant="label">{translation.theme}</Typography>
      <Switch checked={isDarkTheme} onChange={toggleTheme} />
    </StyledFlexWrap>
  );
};
