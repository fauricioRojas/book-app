'use client';

import { useLanguage } from '@/contexts';
import { FlexWrap, Link, Typography } from '@/shared/components';

const NotFound = () => {
  const { translation } = useLanguage();

  return (
    <main>
      <Typography variant="h2" mb={8}>{translation.maintenanceNotFound}</Typography>
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

export default NotFound;
