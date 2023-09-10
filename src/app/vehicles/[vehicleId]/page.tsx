import { notFound } from "next/navigation";
import { FC } from "react";

import { IVehicle, SELECT, TABLES, supabaseClient } from "@/supabase";
import { Vehicle } from "./vehicle";

const abortController = new AbortController();

interface IVehiclePageProps {
  params: {
    vehicleId: string;
  };
}

const VehiclePage: FC<IVehiclePageProps> = async ({ params: { vehicleId } }) => {
  const { data: vehicle } = await supabaseClient
    .from(TABLES.VEHICLES)
    .select<string, IVehicle>(SELECT.FULL_VEHICLE)
    .match({ id: vehicleId })
    .abortSignal(abortController.signal)
    .single();

  if (!vehicle) {
    notFound();
  }

  return (
    <main>
      <Vehicle serverVehicle={vehicle} />
    </main>
  );
};

export default VehiclePage;
