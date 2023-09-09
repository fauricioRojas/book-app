import { notFound } from "next/navigation";
import { FC } from "react";

import { IVehicle, VEHICLES_TABLE, supabaseClient } from "@/supabase";
import { VehicleDetails } from "./vehicle-details";

interface IVehicleProps {
  params: {
    vehicleId: string;
  };
}

const Vehicle: FC<IVehicleProps> = async ({ params: { vehicleId } }) => {
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
  `).match({ id: vehicleId }).single();

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