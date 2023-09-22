import { cookies } from 'next/headers';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { TABLES, IVehicle, SELECT } from '@/supabase';
import { VehiclesHeader } from './vehicles-header';
import { VehiclesList } from './vehicles-list';

export const revalidate = 0;

const abortController = new AbortController();

const VehiclesPage = async() => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from(TABLES.VEHICLES)
    .select<string, IVehicle>(SELECT.MINIMAL_VEHICLE)
    .abortSignal(abortController.signal);

  return (
    <main>
      <VehiclesHeader />
      <VehiclesList serverVehicles={data ?? []} />
    </main>
  );
};

export default VehiclesPage;
