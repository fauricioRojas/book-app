import { IPet, SELECT, TABLES, supabaseClient } from '@/supabase';
import { PetsHeader } from './pets-header';
import { PetsList } from './pets-list';

export const revalidate = 0;

const abortController = new AbortController();

const PetsPage = async () => {
  const { data } = await supabaseClient
    .from(TABLES.PETS)
    .select<string, IPet>(SELECT.MINIMAL_PET)
    .abortSignal(abortController.signal);

  return (
    <main>
      <PetsHeader />
      <PetsList serverPets={data ?? []} />
    </main>
  );
};

export default PetsPage;
