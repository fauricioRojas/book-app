'use client';

import { FC, useEffect, useState } from 'react';

import { Col, Row } from '@/shared/components';
import { supabaseClient, IVehicle, TABLES, ACTIONS, SCHEMAS } from '@/supabase';
import { useDidUpdate } from '@/hooks';
import { VehiclesListItem } from './vehicles-list-item';
import { NoVehicles } from './no-vehicles';

const abortController = new AbortController();

const findVehicleById = async (id: number) => {
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
    .match({ id })
    .abortSignal(abortController.signal)
    .single();
  return data;
};

interface IRealtimeVehiclesListProps {
  serverVehicles: IVehicle[];
}

export const RealtimeVehiclesList: FC<IRealtimeVehiclesListProps> = ({
  serverVehicles,
}) => {
  const [vehicles, setVehicles] = useState<IVehicle[]>(serverVehicles);

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
          setVehicles((prevVehicles: IVehicle[]) => prevVehicles.concat(newlyAddedVehicle));
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    }
  }, []);

  if (!vehicles.length) {
    return <NoVehicles />;
  }

  return (
    <Row>
      {vehicles.map((vehicle) => (
        <Col
          key={vehicle.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <VehiclesListItem {...vehicle} />
        </Col>
      ))}
    </Row>
  );
};
