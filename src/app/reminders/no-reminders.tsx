'use client';

import { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import { AbsoluteWrap, Icon, Typography } from '@/shared/components';

export const NoReminders = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <AbsoluteWrap gap={4} isNavbarVisible zIndex="hide">
      <Icon name="bell" size="xxl" color={colors.secondary400} />
      <Typography variant="h3" color="primary-text" fontWeight="bold">
        {translation.noReminders}
      </Typography>
      <Typography variant="label" color="secondary-text" textAlign="center">
        {translation.noRemindersMessage}
      </Typography>
    </AbsoluteWrap>
  );
};
