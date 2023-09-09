'use client';

import { useLanguage } from '@/contexts';
import { FlexWrap, Link, Typography } from '@/shared/components';
import { FC } from 'react';

type Page = 'vehicle' | 'pet' | 'maintenance' | 'procedure';

interface IResourceNotFoundProps {
  page: Page;
}

export const ResourceNotFound: FC<IResourceNotFoundProps> = ({ page }) => {
  const { translation } = useLanguage();

  const titleMapper: Record<Page, string> = {
    vehicle: translation.vehicleNotFound,
    pet: translation.petNotFound,
    maintenance: translation.maintenanceNotFound,
    procedure: translation.procedureNotFound,
  };

  const title = titleMapper[page];

  return (
    <main>
      <Typography variant="h2" mb={8}>{title}</Typography>
      <FlexWrap direction="column" gap={3} align="flex-start">
        <Typography variant="p">{translation.weAresorry}</Typography>
        <Typography variant="p">{translation.tryThesePages}</Typography>
        <FlexWrap direction="column" gap={1}>
          <Link href="/">{translation.home}</Link>
          <Link href="/pets">{translation.pets}</Link>
          <Link href="/vehicles">{translation.vehicles}</Link>
        </FlexWrap>
      </FlexWrap>
    </main>
  );
};

