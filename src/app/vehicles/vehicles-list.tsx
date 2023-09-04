'use client';

import { useTheme } from 'styled-components';

import { Card, Col, FlexWrap, Icon, Row, Typography } from '@/shared/components';
import { IVehicle } from '@/shared/types';

const VEHICLES: IVehicle[] = [
  {
    id: 1,
    plateNumber: "CL297736",
    brand: "Isuzu D-Max",
    model: 2017,
    type: "car",
    dateOfPurchase: 1396332000000,
    description: undefined,
    photo: undefined,
  },
  {
    id: 2,
    plateNumber: "M472200",
    brand: "Suzuki GN 125",
    model: 2015,
    type: "motorcycle",
    dateOfPurchase: 1396332000000,
    description: undefined,
    photo: undefined,
  },
];

export const VehiclesList = () => {
  const { colors } = useTheme();

  return (
    <Row>
      {VEHICLES.map((vehicle) => (
        <Col
          key={vehicle.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <Card>
            <FlexWrap direction="column" gap={3}>
              <FlexWrap
                justify="space-between"
              >
                <Typography variant="h5" fontWeight="bold">{vehicle.brand}</Typography>
                <Icon
                  name={vehicle.type}
                  color={colors.primaryText}
                  height={25}
                  width={25}
                />
              </FlexWrap>
              <Typography variant="label">
                {vehicle.plateNumber}
              </Typography>
            </FlexWrap>
          </Card>
        </Col>
      ))}
    </Row>
    // <FlexWrap gap={4} wrap="wrap">
    //   {PETS.map((pet) => (
    //     <Card
    //       key={pet.id}
    //     >
    //       <FlexWrap justify="space-between" grow={1}>
    //         <Typography variant="h5" fontWeight="bold">
    //           {pet.name}
    //           {' '}
    //           <Typography variant="label">({pet.breed})</Typography>
    //         </Typography>
    //         <Icon
    //           name={pet.type}
    //           color={colors.primaryText}
    //           height={25}
    //           width={25}
    //         />
    //       </FlexWrap>
    //     </Card>
    //   ))}
    // </FlexWrap>
  );
};
