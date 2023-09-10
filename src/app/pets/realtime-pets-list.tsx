'use client';

import { FC, useEffect, useState } from 'react';

import { Col, Row } from '@/shared/components';
import { supabaseClient, IPet, TABLES, SCHEMAS, ACTIONS } from '@/supabase';
import { useDidUpdate } from '@/hooks';
import { PetsListItem } from './pets-list-item';
import { NoPets } from './no-pets';

const abortController = new AbortController();

const findPetById = async (id: number) => {
  const { data } = await supabaseClient
    .from(TABLES.PETS)
    .select<string, IPet>(`
      id,
      name,
      breed,
      notes (
        id,
        type,
        date
      )
    `)
    .match({ id })
    .abortSignal(abortController.signal)
    .single();
  return data;
};

interface IRealtimePetsListProps {
  serverPets: IPet[];
}

export const RealtimePetsList: FC<IRealtimePetsListProps> = ({
  serverPets,
}) => {
  const [pets, setPets] = useState<IPet[]>(serverPets);

  useDidUpdate(() => setPets(serverPets), [serverPets]);

  useEffect(() => {
    const channel = supabaseClient
      .channel('pets-list')
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
    }
  }, []);

  if (!pets.length) {
    return <NoPets />;
  }

  return (
    <Row>
      {pets.map((pet) => (
        <Col
          key={pet.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <PetsListItem {...pet} />
        </Col>
      ))}
    </Row>
  );
};
