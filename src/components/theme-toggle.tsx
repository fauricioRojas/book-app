'use client';

import { FlexWrap, Switch, Typography } from '@/shared/components';
import { useCustomTheme, useLanguage } from '@/contexts';

export const ThemeToggle = () => {
  const { translation } = useLanguage();
  const { isDarkTheme, toggleTheme } = useCustomTheme();

  return (
    <FlexWrap justify="space-between">
      <Typography variant="label">{translation.theme}</Typography>
      <Switch checked={isDarkTheme} onChange={toggleTheme} />
    </FlexWrap>
  );
};
