'use client';

import { useTheme } from 'styled-components';

import {
  AbsoluteWrap,
  Button,
  Icon,
  Typography,
  drawerService,
} from '@/shared/components';
import { useLanguage } from '@/contexts';
import { VehiclesForm } from './vehicles-form';

const { showDrawer } = drawerService;

export const NoVehicles = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  const handleShowVehicleForm = () => {
    showDrawer({
      title: translation.newVehicle,
      body: <VehiclesForm />,
    });
  };

  return (
    <AbsoluteWrap gap={4} isNavbarVisible>
      <Icon
        name="tire"
        height={50}
        width={50}
        color={colors.secondary400}
      />
      <Typography
        variant="h3"
        color="primary-text"
        fontWeight="bold"
      >
        {translation.noVehicles}
      </Typography>
      <Typography
        variant="label"
        color="secondary-text"
      >
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
