import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { FC } from 'react';

import { SELECT, TABLES, TVehicle } from '@/supabase';
import { Vehicle } from './vehicle';

const abortController = new AbortController();

type VehiclePageProps = {
  params: {
    vehicleId: string;
  };
};

const VehiclePage: FC<VehiclePageProps> = async ({ params: { vehicleId } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: vehicle } = await supabase
    .from(TABLES.VEHICLES)
    .select<string, TVehicle>(SELECT.FULL_VEHICLE)
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
