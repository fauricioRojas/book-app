'use client';

import { useLanguage } from "@/contexts";
import { Typography } from "@/shared/components";

export const NoReminders = () => {
  const { translation } = useLanguage();

  return (
    <Typography
      variant="h5"
      color="secondary-text"
    >
      {translation.noReminders}
    </Typography>
  );
};
