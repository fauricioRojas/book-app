'use client';

import { useLanguage } from "@/contexts";
import { FlexWrap, Typography, drawerService } from "@/shared/components";
import { Actions } from "@/components";
import { PetsForm } from "./pets-form";

const { showDrawer } = drawerService;

export const PetsHeader = () => {
  const { translation } = useLanguage();

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
      <Actions onAdd={handleShowPetForm} />
    </FlexWrap>
  );
};
