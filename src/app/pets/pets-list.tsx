'use client';

import { FC, useEffect, useState } from 'react';

import { GridWrap } from '@/shared/components';
import { IPet, TABLES, SCHEMAS, ACTIONS, SELECT } from '@/supabase';
import { useDidUpdate } from '@/hooks';
import { PetsListItem } from './pets-list-item';
import { NoPets } from './no-pets';
import { useSupabase } from '@/contexts';

const abortController = new AbortController();

interface IPetsListProps {
  serverPets: IPet[];
}

export const PetsList: FC<IPetsListProps> = ({ serverPets }) => {
  const [pets, setPets] = useState<IPet[]>(serverPets);
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setPets(serverPets), [serverPets]);

  useEffect(() => {
    const channel = supabaseClient
      .channel('pets')
      .on('postgres_changes', {
        event: ACTIONS.INSERT,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.PETS,
      }, async (payload: any) => {
        const newlyAddedPet = await findPetById(payload.new.id);
        if (newlyAddedPet) {
          setPets((prevPets: IPet[]) => prevPets.concat(newlyAddedPet));
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPetById = async(id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.PETS)
      .select<string, IPet>(SELECT.MINIMAL_PET)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  if (!pets.length) {
    return <NoPets />;
  }

  return (
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={4}
    >
      {pets.map((pet) => (
        <PetsListItem key={pet.id} {...pet} />
      ))}
    </GridWrap>
  );
};
