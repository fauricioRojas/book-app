'use client';

import { useTheme } from 'styled-components';

import { useLanguage } from "@/contexts";
import { AbsoluteWrap, Icon, Typography } from "@/shared/components";

export const NoTransfers = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <AbsoluteWrap gap={4} isNavbarVisible>
      <Icon
        name="transfer"
        height={50}
        width={50}
        color={colors.secondary400}
      />
      <Typography
        variant="h3"
        color="primary-text"
        fontWeight="bold"
      >
        {translation.noTransfers}
      </Typography>
      <Typography
        variant="label"
        color="secondary-text"
        textAlign="center"
      >
        {translation.noTransfersMessage}
      </Typography>
    </AbsoluteWrap>
  );
};
