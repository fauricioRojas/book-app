'use client';

import { useDrawer, useLanguage } from "@/contexts";
import { FlexWrap, Typography } from "@/shared/components";
import { VehiclesForm } from "./vehicles-form";
import { Actions } from "@/components";

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
      <Actions onAdd={handleShowVehicleForm} />
    </FlexWrap>
  );
};
