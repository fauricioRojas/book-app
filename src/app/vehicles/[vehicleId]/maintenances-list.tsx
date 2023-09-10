'use client';

import { FC } from 'react';

import { Col, Row, Typography } from '@/shared/components';
import { IMaintenance } from '@/supabase';
import { MaintenancesListItem } from './maintenances-list-item';
import { useLanguage } from '@/contexts';

interface IMaintenancesListProps {
  maintenances: IMaintenance[];
}

export const MaintenancesList: FC<IMaintenancesListProps> = ({
  maintenances,
}) => {
  const { translation } = useLanguage();

  return (
    <Row>
      {maintenances.length ? maintenances.map((maintenance) => (
        <Col
          key={maintenance.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <MaintenancesListItem {...maintenance} />
        </Col>
      )) : (
        <Col>
          <Typography variant="label" color="secondary-text">{translation.noMaintenances}</Typography>
        </Col>
      )}
    </Row>
  );
};
