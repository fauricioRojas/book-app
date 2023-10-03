'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import {
  AbsoluteWrap,
  FlexWrap,
  Icon,
  Link,
  Typography,
} from '@/shared/components';
import { ROUTES } from '@/shared/constants';

type Page = 'vehicle' | 'pet' | 'maintenance' | 'procedure';

type ResourceNotFoundProps = {
  page: Page;
};

export const ResourceNotFound: FC<ResourceNotFoundProps> = ({ page }) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const titleMapper = new Map<Page, string>([
    ['vehicle', translation.vehicleNotFound],
    ['pet', translation.petNotFound],
    ['maintenance', translation.maintenanceNotFound],
    ['procedure', translation.procedureNotFound],
  ]);
  const title = titleMapper.get(page);

  return (
    <AbsoluteWrap gap={4} isNavbarVisible zIndex="hide">
      <Icon
        name="sad-emoji"
        height={75}
        width={75}
        color={colors.secondary400}
      />
      <Typography variant="h3" color="primary-text" fontWeight="bold">
        {title}
      </Typography>
      <FlexWrap direction="column" gap={1}>
        <Typography variant="p" color="secondary-text" textAlign="center">
          {translation.weAresorry}
        </Typography>
        <Typography variant="p" color="secondary-text" textAlign="center">
          {translation.tryThesePages}
        </Typography>
      </FlexWrap>
      <FlexWrap direction="column" align="center" gap={1}>
        <Link href={ROUTES.PETS}>{translation.pets}</Link>
        <Link href={ROUTES.REMINDERS}>{translation.reminders}</Link>
        <Link href={ROUTES.VEHICLES}>{translation.vehicles}</Link>
      </FlexWrap>
    </AbsoluteWrap>
  );
};
