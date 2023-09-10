'use client';

import styled from 'styled-components';

import { Button, FlexWrap, Typography } from '@/shared/components';
import { useDrawer, useLanguage } from '@/contexts';
import { PetsForm } from './pets-form';

const StyledFlexWrap = styled(FlexWrap)`
  padding-top: ${({ theme }) => theme.gutters.size8};
`;

export const NoPets = () => {
  const { translation } = useLanguage();
  const { showDrawer } = useDrawer();

  const handleShowPetForm = () => {
    showDrawer({
      title: translation.newPet,
      body: <PetsForm />,
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
        {translation.noPets}
      </Typography>
      <Button onClick={handleShowPetForm}>
        {translation.addPet}
      </Button>
    </StyledFlexWrap>
  );
};
