import { notFound } from "next/navigation";
import { FC } from "react";

import { IPet, TABLES, SELECT, supabaseClient } from "@/supabase";
import { Pet } from "./pet";

const abortController = new AbortController();

interface IPetPageProps {
  params: {
    petId: string;
  };
}

const PetPage: FC<IPetPageProps> = async ({ params: { petId } }) => {
  const { data: pet } = await supabaseClient
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
