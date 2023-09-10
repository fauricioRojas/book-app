import { supabaseClient, TABLES, IVehicle, SELECT } from '@/supabase';
import { VehiclesHeader } from './vehicles-header';
import { VehiclesList } from './vehicles-list';

const abortController = new AbortController();

const VehiclesPage = async() => {
  const { data } = await supabaseClient
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
