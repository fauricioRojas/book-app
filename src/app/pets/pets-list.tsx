import { supabaseClient, IPet, TABLES, SELECT } from '@/supabase';
import { RealtimePetsList } from './realtime-pets-list';

const abortController = new AbortController();

export const PetsList = async () => {
  const { data } = await supabaseClient
    .from(TABLES.PETS)
    .select<string, IPet>(SELECT.MINIMAL_PET)
    .abortSignal(abortController.signal);

  return (
    <RealtimePetsList serverPets={data ?? []} />
  );
};
