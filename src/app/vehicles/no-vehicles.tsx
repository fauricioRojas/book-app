'use client';

import { Button, FlexWrap, Typography } from '@/shared/components';
import { useDrawer, useLanguage } from '@/contexts';
import { VehiclesForm } from './vehicles-form';

export const NoVehicles = async () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowVehicleForm = () => {
    showDrawer({
      title: translation.newVehicle,
      body: <VehiclesForm />,
    });
  };

  return (
    <FlexWrap
      direction="column"
      gap={4}
      align="center"
      justify="center"
    >
      <Typography
        variant="h5"
        color="secondary-text"
      >
        {translation.noVehicles}
      </Typography>
      <Button onClick={handleShowVehicleForm}>
        {translation.addVehicle}
      </Button>
    </FlexWrap>
  );
};
