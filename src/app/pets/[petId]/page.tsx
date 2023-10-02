import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { FC } from "react";

import { SELECT, TABLES, TPet } from "@/supabase";
import { Pet } from "./pet";

const abortController = new AbortController();

type PetPageProps = {
  params: {
    petId: string;
  };
}

const PetPage: FC<PetPageProps> = async ({ params: { petId } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: pet } = await supabase
    .from(TABLES.PETS)
    .select<string, TPet>(SELECT.FULL_PET)
    .match({ id: petId })
    .abortSignal(abortController.signal)
    .single();

  if (!pet) {
    notFound();
  }

  return (
    <main>
      <Pet serverPet={pet} />
    </main>
  );
};

export default PetPage;
