'use client';

import { Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';

export const NoMaintenances = () => {
  const { translation } = useLanguage();

  return (
    <Typography variant="label" color="secondary-text">{translation.noMaintenances}</Typography>
  );
};
