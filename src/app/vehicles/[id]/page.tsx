import { notFound } from "next/navigation";

import { IVehicle, VEHICLES_TABLE, supabaseClient } from "@/supabase";
import { VehicleDetails } from "./vehicle-details";

interface IVehicleParams {
  params: {
    id: string;
  };
}

const Vehicle = async ({ params: { id } }: IVehicleParams) => {
  const { data: vehicle } = await supabaseClient.from(VEHICLES_TABLE).select<string, IVehicle>(`
    id,
    plateNumber,
    brand,
    model,
    notes (
      id,
      type,
      date,
      description,
      photo
    ),
    maintenances (
      id,
      notes (
        id,
        type,
        date,
        description,
        photo
      ),
      cost,
      kilometers
    )
  `).match({ id }).single();

  if (!vehicle) {
    notFound();
  }
  console.log('vehicle:', vehicle);

  return (
    <main>
      <VehicleDetails {...vehicle} />
    </main>
  );
};

export default Vehicle;
