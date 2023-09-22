import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC } from "react";

import { IPet, TABLES, SELECT } from "@/supabase";
import { Pet } from "./pet";

const abortController = new AbortController();

interface IPetPageProps {
  params: {
    petId: string;
  };
}

const PetPage: FC<IPetPageProps> = async ({ params: { petId } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: pet } = await supabase
    .from(TABLES.PETS)
    .select<string, IPet>(SELECT.FULL_PET)
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
