import { supabaseClient, IPet, TABLES } from '@/supabase';
import { RealtimePetsList } from './realtime-pets-list';

export const revalidate = 5;

const abortController = new AbortController();

export const PetsList = async () => {
  const { data: pets } = await supabaseClient
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
    .abortSignal(abortController.signal);

  return (
    <RealtimePetsList serverPets={pets ?? []} />
  );
};
