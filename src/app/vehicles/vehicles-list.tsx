import { Col, Row } from '@/shared/components';
import { supabaseClient, IVehicle, VEHICLES_TABLE } from '@/supabase';
import { VehiclesListItem } from './vehicles-list-item';
import { NoVehicles } from './no-vehicles';

export const VehiclesList = async () => {
  const { data: vehicles } = await supabaseClient.from(VEHICLES_TABLE).select<string, IVehicle>(`
    id,
    plateNumber,
    brand,
    notes (
      id,
      type,
      date
    )
  `);

  if (!vehicles?.length) {
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
