'use client';

import { Button, FlexWrap, Typography } from '@/shared/components';
import { useDrawer, useLanguage } from '@/contexts';
import { PetsForm } from './pets-form';

export const NoPets = async () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newPet,
      body: <PetsForm />,
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
        {translation.noPets}
      </Typography>
      <Button onClick={handleShowPetForm}>
        {translation.addPet}
      </Button>
    </FlexWrap>
  );
};
