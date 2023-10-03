'use client';

import { Actions } from '@/components';
import { useDrawer, useLanguage } from '@/contexts';
import { FlexWrap, Typography } from '@/shared/components';
import { PetsForm } from './pets-form';

export const PetsHeader = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newPet,
      children: <PetsForm />,
    });
  };

  return (
    <FlexWrap align="center" justify="space-between" mb={8}>
      <Typography variant="h1" fontWeight="bold">
        {translation.pets}
      </Typography>
      <Actions onAdd={handleShowPetForm} />
    </FlexWrap>
  );
};
