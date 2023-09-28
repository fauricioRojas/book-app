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
import { PetsForm } from './pets-form';

const { showDrawer } = drawerService;

export const NoPets = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newPet,
      body: <PetsForm />,
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
