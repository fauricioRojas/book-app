'use client';

import { useLanguage } from "@/contexts";
import { Typography } from "@/shared/components";

export const ProfileHeader = () => {
  const { translation } = useLanguage();

  return (
    <Typography
      variant="h1"
      fontWeight="bold"
      mb={8}
    >
      {translation.profile}
    </Typography>
  );
};
