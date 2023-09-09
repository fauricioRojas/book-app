import { Col, Row } from '@/shared/components';
import { supabaseClient, IPet, PETS_TABLE } from '@/supabase';
import { PetsListItem } from './pets-list-item';
import { NoPets } from './no-pets';

const abortController = new AbortController();

export const PetsList = async () => {
  const { data: pets } = await supabaseClient
    .from(PETS_TABLE)
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
    .abortSignal(abortController.signal);

  if (!pets?.length) {
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
