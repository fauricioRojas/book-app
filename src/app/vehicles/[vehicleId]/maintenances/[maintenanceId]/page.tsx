import { notFound } from "next/navigation";
import { FC } from "react";

import { IMaintenance, SELECT, TABLES, supabaseClient } from "@/supabase";
import { Maintenance } from "./maintenance";

const abortController = new AbortController();

interface IMaintenancePageProps {
  params: {
    maintenanceId: string;
  };
}

const MaintenancePage: FC<IMaintenancePageProps> = async ({ params: { maintenanceId } }) => {
  const { data: maintenance } = await supabaseClient
    .from(TABLES.MAINTENANCES)
    .select<string, IMaintenance>(SELECT.FULL_MAINTENANCE)
    .match({ id: maintenanceId })
    .abortSignal(abortController.signal)
    .single();

  if (!maintenance) {
    notFound();
  }

  return (
    <main>
      <Maintenance serverMaintenance={maintenance} />
    </main>
  );
};

export default MaintenancePage;
