import { supabaseClient, IVehicle, TABLES, SELECT } from '@/supabase';
import { RealtimeVehiclesList } from './realtime-vehicles-list';

const abortController = new AbortController();

export const VehiclesList = async () => {
  const { data } = await supabaseClient
    .from(TABLES.VEHICLES)
    .select<string, IVehicle>(SELECT.MINIMAL_VEHICLE)
    .abortSignal(abortController.signal);

  return (
    <RealtimeVehiclesList serverVehicles={data ?? []} />
  );
};
