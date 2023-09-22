'use client';

import { Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';

export const NoProcedures = () => {
  const { translation } = useLanguage();

  return (
    <Typography
      variant="label"
      color="secondary-text"
    >
      {translation.noProcedures}
    </Typography>
  );
};
