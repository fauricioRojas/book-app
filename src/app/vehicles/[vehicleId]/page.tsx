import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC } from "react";

import { IVehicle, SELECT, TABLES } from "@/supabase";
import { Vehicle } from "./vehicle";

const abortController = new AbortController();

interface IVehiclePageProps {
  params: {
    vehicleId: string;
  };
}

const VehiclePage: FC<IVehiclePageProps> = async ({ params: { vehicleId } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: vehicle } = await supabase
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
