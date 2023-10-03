'use client';

import { useLanguage } from '@/contexts';
import { Typography } from '@/shared/components';

export const NoMaintenances = () => {
  const { translation } = useLanguage();

  return (
    <Typography variant="label" color="secondary-text">
      {translation.noMaintenances}
    </Typography>
  );
};
