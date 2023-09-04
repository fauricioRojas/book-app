'use client';

import { useTheme } from 'styled-components';

import { Card, Col, FlexWrap, Icon, Row, Typography } from '@/shared/components';
import { IPet } from '@/shared/types';

const PETS: IPet[] = [
  {
    id: 1,
    name: "Luna",
    breed: "Pastor Alemán",
    type: "dog",
    dateOfBirth: 1396332000000,
    description: undefined,
    photo: undefined,
  },
  {
    id: 2,
    name: "Tesla",
    breed: "Pastor Alemán",
    type: "dog",
    dateOfBirth: 1681970400000,
    description: undefined,
    photo: undefined,
  },
  {
    id: 3,
    name: "Cascabel",
    breed: "Mini",
    type: "cat",
    dateOfBirth: 1681970400000,
    description: undefined,
    photo: undefined,
  },
];

export const PetsList = () => {
  const { colors } = useTheme();

  return (
    <Row>
      {PETS.map((pet) => (
        <Col
          key={pet.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <Card>
            <FlexWrap justify="space-between" grow={1}>
              <Typography variant="h5" fontWeight="bold">
                {pet.name}
                {' '}
                <Typography variant="label">({pet.breed})</Typography>
              </Typography>
              <Icon
                name={pet.type}
                color={colors.primaryText}
                height={25}
                width={25}
              />
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
