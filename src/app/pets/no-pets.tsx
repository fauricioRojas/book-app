'use client';

import { useTheme } from 'styled-components';

import { AbsoluteWrap, Button, Icon, Typography } from '@/shared/components';
import { useDrawer, useLanguage } from '@/contexts';
import { PetsForm } from './pets-form';

export const NoPets = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();
  const { colors } = useTheme();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newPet,
      children: <PetsForm />,
    });
  };

  return (
    <AbsoluteWrap gap={4} isNavbarVisible>
      <Icon
        name="footprint"
        height={50}
        width={50}
        color={colors.secondary400}
      />
      <Typography
        variant="h3"
        color="primary-text"
        fontWeight="bold"
      >
        {translation.noPets}
      </Typography>
      <Typography
        variant="label"
        color="secondary-text"
      >
        {translation.noPetsMessage}
      </Typography>
      <Button
        variant="primary"
        rightIconName="add"
        onClick={handleShowPetForm}
      >
        {translation.addPet}
      </Button>
    </AbsoluteWrap>
  );
};
