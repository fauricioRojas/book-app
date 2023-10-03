'use client';

import { FC, useEffect, useState } from 'react';

import { useSupabase } from '@/contexts';
import { useDidUpdate } from '@/hooks';
import { GridWrap } from '@/shared/components';
import { ACTIONS, SCHEMAS, SELECT, TABLES, TPet } from '@/supabase';
import { NoPets } from './no-pets';
import { PetsListItem } from './pets-list-item';

const abortController = new AbortController();

type PetsListProps = {
  serverPets: TPet[];
};

export const PetsList: FC<PetsListProps> = ({ serverPets }) => {
  const [pets, setPets] = useState<TPet[]>(serverPets);
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setPets(serverPets), [serverPets]);

  useEffect(() => {
    const channel = supabaseClient
      .channel('pets')
      .on(
        'postgres_changes',
        {
          event: ACTIONS.INSERT,
          schema: SCHEMAS.PUBLIC,
          table: TABLES.PETS,
        },
        async (payload: any) => {
          const newlyAddedPet = await findPetById(payload.new.id);
          if (newlyAddedPet) {
            setPets((prevPets: TPet[]) => prevPets.concat(newlyAddedPet));
          }
        },
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findPetById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.PETS)
      .select<string, TPet>(SELECT.MINIMAL_PET)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  if (!pets.length) {
    return <NoPets />;
  }

  return (
    <GridWrap cols={12} sm={6} lg={4} xl={3} gap={4}>
      {pets.map((pet) => (
        <PetsListItem key={pet.id} {...pet} />
      ))}
    </GridWrap>
  );
};
