import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC } from "react";

import { IMaintenance, SELECT, TABLES } from "@/supabase";
import { Maintenance } from "./maintenance";

const abortController = new AbortController();

interface IMaintenancePageProps {
  params: {
    maintenanceId: string;
  };
}

const MaintenancePage: FC<IMaintenancePageProps> = async ({ params: { maintenanceId } }) => {
  const supabaseClient = createServerComponentClient({ cookies });
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
