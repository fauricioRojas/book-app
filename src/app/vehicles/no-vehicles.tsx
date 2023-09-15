'use client';

import styled from 'styled-components';

import { Button, FlexWrap, Typography } from '@/shared/components';
import { useDrawer, useLanguage } from '@/contexts';
import { VehiclesForm } from './vehicles-form';

const StyledFlexWrap = styled(FlexWrap)`
  padding-top: ${({ theme }) => theme.gutters.size8};
`;

export const NoVehicles = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowVehicleForm = () => {
    showDrawer({
      title: translation.newVehicle,
      body: <VehiclesForm />,
    });
  };

  return (
    <StyledFlexWrap
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
      <Button
        variant="primary"
        rightIconName="add"
        onClick={handleShowVehicleForm}
      >
        {translation.addVehicle}
      </Button>
    </StyledFlexWrap>
  );
};
