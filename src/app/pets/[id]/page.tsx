import { notFound } from "next/navigation";

import { IPet, PETS_TABLE, supabaseClient } from "@/supabase";
import { PetDetails } from "./pet-details";

interface IPetParams {
  params: {
    id: string;
  };
}

const Pet = async ({ params: { id } }: IPetParams) => {
  const { data: pet } = await supabaseClient.from(PETS_TABLE).select<string, IPet>(`
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
  `).match({ id }).single();

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
