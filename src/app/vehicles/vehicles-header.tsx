'use client';

import { useDrawer, useLanguage } from "@/contexts";
import { FlexWrap, IconButton, Typography } from "@/shared/components";
import { VehiclesForm } from "./vehicles-form";

export const VehiclesHeader = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowVehicleForm = () => {
    showDrawer({
      title: translation.newVehicle,
      body: <VehiclesForm />,
    });
  };

  return (
    <FlexWrap align="center" justify="space-between" mb={8}>
      <Typography
        variant="h1"
        fontWeight="bold"
      >
        {translation.vehicles}
      </Typography>
      <IconButton
        iconName="add"
        height={30}
        width={30}
        onClick={handleShowVehicleForm}
      />
    </FlexWrap>
  );
};
