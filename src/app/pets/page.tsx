import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

import { TPet, SELECT, TABLES } from '@/supabase';
import { PetsHeader } from './pets-header';
import { PetsList } from './pets-list';

export const revalidate = 0;

const abortController = new AbortController();

const PetsPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from(TABLES.PETS)
    .select<string, TPet>(SELECT.MINIMAL_PET)
    .abortSignal(abortController.signal);

  return (
    <main>
      <PetsHeader />
      <PetsList serverPets={data ?? []} />
    </main>
  );
};

export default PetsPage;
