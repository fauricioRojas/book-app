'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import { FlexWrap, Icon, Link, Typography } from '@/shared/components';

type Page = 'vehicle' | 'pet' | 'maintenance' | 'procedure';

interface IResourceNotFoundProps {
  page: Page;
}

export const ResourceNotFound: FC<IResourceNotFoundProps> = ({ page }) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  const titleMapper: Record<Page, string> = {
    vehicle: translation.vehicleNotFound,
    pet: translation.petNotFound,
    maintenance: translation.maintenanceNotFound,
    procedure: translation.procedureNotFound,
  };

  const title = titleMapper[page];

  return (
    <>
      <Typography variant="h1" mb={8}>{title}</Typography>
      <FlexWrap direction="column" gap={3} align="flex-start">
        <Icon name="sad-emoji" height={75} width={75} color={colors.secondary100} />
        <Typography variant="p" color="secondary-text">{translation.weAresorry}</Typography>
        <Typography variant="p" color="secondary-text">{translation.tryThesePages}</Typography>
        <FlexWrap direction="column" gap={1}>
          <Link href="/">{translation.home}</Link>
          <Link href="/pets">{translation.pets}</Link>
          <Link href="/vehicles">{translation.vehicles}</Link>
        </FlexWrap>
      </FlexWrap>
    </>
  );
};

