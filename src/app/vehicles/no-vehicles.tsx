'use client';

import { useTheme } from 'styled-components';

import { useDrawer, useLanguage } from '@/contexts';
import { AbsoluteWrap, Button, Icon, Typography } from '@/shared/components';
import { VehiclesForm } from './vehicles-form';

export const NoVehicles = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();
  const { colors } = useTheme();

  const handleShowVehicleForm = () => {
    showDrawer({
      title: translation.newVehicle,
      children: <VehiclesForm />,
    });
  };

  return (
    <AbsoluteWrap gap={4} isNavbarVisible zIndex="hide">
      <Icon name="tire" size="xxl" color={colors.secondary400} />
      <Typography variant="h3" color="primary-text" fontWeight="bold">
        {translation.noVehicles}
      </Typography>
      <Typography variant="label" color="secondary-text">
        {translation.noVehiclesMessage}
      </Typography>
      <Button
        variant="primary"
        rightIconName="add"
        onClick={handleShowVehicleForm}
      >
        {translation.addVehicle}
      </Button>
    </AbsoluteWrap>
  );
};
