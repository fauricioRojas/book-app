import { supabaseClient, IVehicle, TABLES } from '@/supabase';
import { RealtimeVehiclesList } from './realtime-vehicles-list';

const abortController = new AbortController();

export const VehiclesList = async () => {
  const { data } = await supabaseClient
    .from(TABLES.VEHICLES)
    .select<string, IVehicle>(`
      id,
      plateNumber,
      brand,
      notes (
        id,
        type,
        date
      )
    `)
    .abortSignal(abortController.signal);

  return (
    <RealtimeVehiclesList serverVehicles={data ?? []} />
  );
};
