'use client';

import { useLanguage } from "@/contexts";
import { Typography } from "@/shared/components";

export const SettingsHeader = () => {
  const { translation } = useLanguage();

  return (
    <Typography
      variant="h1"
      fontWeight="bold"
      mb={8}
    >
      {translation.settings}
    </Typography>
  );
};
