import { notFound } from "next/navigation";
import { FC } from "react";

import { IPet, TABLES, supabaseClient } from "@/supabase";
import { PetDetails } from "./pet-details";

const abortController = new AbortController();

interface IPetProps {
  params: {
    petId: string;
  };
}

const Pet: FC<IPetProps> = async ({ params: { petId } }) => {
  const { data: pet } = await supabaseClient
    .from(TABLES.PETS)
    .select<string, IPet>(`
      id,
      name,
      breed,
      notes (
        id,
        type,
        date,
        description,
        photo
      ),
      procedures (
        id,
        pets (
          id
        ),
        notes (
          id,
          type,
          date,
          description,
          photo
        ),
        cost,
        weight,
        nextDate
      )
    `)
    .match({ id: petId })
    .abortSignal(abortController.signal)
    .single();

  if (!pet) {
    notFound();
  }

  return (
    <main>
      <PetDetails {...pet} />
    </main>
  );
};

export default Pet;
