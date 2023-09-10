import { notFound } from "next/navigation";
import { FC } from "react";

import { IMaintenance, TABLES, supabaseClient } from "@/supabase";
import { MaintenanceDetails } from "./maintenance-details";

const abortController = new AbortController();

interface IMaintenanceProps {
  params: {
    maintenanceId: string;
  };
}

const Maintenance: FC<IMaintenanceProps> = async ({ params: { maintenanceId } }) => {
  const { data: maintenance } = await supabaseClient
    .from(TABLES.MAINTENANCES)
    .select<string, IMaintenance>(`
      id,
      notes (
        id,
        type,
        date,
        description,
        photo
      ),
      vehicles (
        id
      ),
      cost,
      kilometers
    `)
    .match({ id: maintenanceId })
    .abortSignal(abortController.signal)
    .single();

  if (!maintenance) {
    notFound();
  }

  return (
    <main>
      <MaintenanceDetails {...maintenance} />
    </main>
  );
};

export default Maintenance;
