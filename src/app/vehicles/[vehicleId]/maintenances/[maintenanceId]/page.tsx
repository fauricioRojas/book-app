import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { FC } from "react";

import { SELECT, TABLES, TMaintenance } from "@/supabase";
import { Maintenance } from "./maintenance";

const abortController = new AbortController();

type MaintenancePageProps = {
  params: {
    maintenanceId: string;
  };
}

const MaintenancePage: FC<MaintenancePageProps> = async ({ params: { maintenanceId } }) => {
  const supabaseClient = createServerComponentClient({ cookies });
  const { data: maintenance } = await supabaseClient
    .from(TABLES.MAINTENANCES)
    .select<string, TMaintenance>(SELECT.FULL_MAINTENANCE)
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
