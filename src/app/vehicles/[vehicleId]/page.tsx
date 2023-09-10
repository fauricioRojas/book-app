import { notFound } from "next/navigation";
import { FC } from "react";

import { IVehicle, TABLES, supabaseClient } from "@/supabase";
import { VehicleDetails } from "./vehicle-details";

const abortController = new AbortController();

interface IVehicleProps {
  params: {
    vehicleId: string;
  };
}

const Vehicle: FC<IVehicleProps> = async ({ params: { vehicleId } }) => {
  const { data: vehicle } = await supabaseClient
    .from(TABLES.VEHICLES)
    .select<string, IVehicle>(`
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
        vehicles (
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
        kilometers
      )
    `)
    .match({ id: vehicleId })
    .abortSignal(abortController.signal)
    .single();

  if (!vehicle) {
    notFound();
  }

  return (
    <main>
      <VehicleDetails {...vehicle} />
    </main>
  );
};

export default Vehicle;
