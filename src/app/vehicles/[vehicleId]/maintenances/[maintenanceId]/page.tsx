import { notFound } from "next/navigation";
import { FC } from "react";

import { IMaintenance, MAINTENANCES_TABLE, supabaseClient } from "@/supabase";
import { MaintenanceDetails } from "./maintenance-details";

interface IMaintenanceProps {
  params: {
    maintenanceId: string;
  };
}

const Maintenance: FC<IMaintenanceProps> = async ({ params: { maintenanceId } }) => {
  console.log('maintenanceId:', maintenanceId);
  const { data: maintenance } = await supabaseClient.from(MAINTENANCES_TABLE).select<string, IMaintenance>(`
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
  `).match({ id: maintenanceId }).single();

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