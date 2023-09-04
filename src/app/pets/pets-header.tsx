'use client';

import { useDrawer, useLanguage } from "@/contexts";
import { FlexWrap, IconButton, Typography } from "@/shared/components";
import { PetsForm } from "./pets-form";

export const PetsHeader = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newPet,
      body: <PetsForm />,
    });
  };

  return (
    <FlexWrap align="center" justify="space-between" mb={8}>
      <Typography
        variant="h1"
        fontWeight="bold"
      >
        {translation.pets}
      </Typography>
      <IconButton
        iconName="add"
        height={22}
        width={22}
        onClick={handleShowPetForm}
      />
    </FlexWrap>
  );
};
