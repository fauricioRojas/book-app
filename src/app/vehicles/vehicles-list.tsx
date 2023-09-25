'use client';

import { FC, useEffect, useState } from 'react';

import { GridWrap } from '@/shared/components';
import { TVehicle, TABLES, ACTIONS, SCHEMAS, SELECT } from '@/supabase';
import { useDidUpdate } from '@/hooks';
import { VehiclesListItem } from './vehicles-list-item';
import { NoVehicles } from './no-vehicles';
import { useSupabase } from '@/contexts';

const abortController = new AbortController();

type VehiclesListProps = {
  serverVehicles: TVehicle[];
}

export const VehiclesList: FC<VehiclesListProps> = ({ serverVehicles }) => {
  const [vehicles, setVehicles] = useState<TVehicle[]>(serverVehicles);
  const { supabaseClient } = useSupabase();

  useDidUpdate(() => setVehicles(serverVehicles), [serverVehicles]);

  useEffect(() => {
    const channel = supabaseClient
      .channel('vehicles-list')
      .on('postgres_changes', {
        event: ACTIONS.INSERT,
        schema: SCHEMAS.PUBLIC,
        table: TABLES.VEHICLES,
      }, async (payload: any) => {
        const newlyAddedVehicle = await findVehicleById(payload.new.id);
        if (newlyAddedVehicle) {
          setVehicles((prevVehicles: TVehicle[]) => prevVehicles.concat(newlyAddedVehicle));
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findVehicleById = async (id: number) => {
    const { data } = await supabaseClient
      .from(TABLES.VEHICLES)
      .select<string, TVehicle>(SELECT.MINIMAL_VEHICLE)
      .match({ id })
      .abortSignal(abortController.signal)
      .single();
    return data;
  };

  if (!vehicles.length) {
    return <NoVehicles />;
  }

  return (
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={4}
    >
      {vehicles.map((vehicle) => (
        <VehiclesListItem key={vehicle.id} {...vehicle} />
      ))}
    </GridWrap>
  );
};
