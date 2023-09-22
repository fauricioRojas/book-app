import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { IMaintenance } from '@/supabase';
import { MaintenancesListItem } from './maintenances-list-item';
import { NoMaintenances } from './no-maintenances';

interface IMaintenancesListProps {
  maintenances: IMaintenance[];
}

export const MaintenancesList: FC<IMaintenancesListProps> = ({
  maintenances,
}) => {
  if (!maintenances.length) {
    return <NoMaintenances />;
  }

  return (
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={4}
    >
      {maintenances.map((maintenance) => (
        <MaintenancesListItem key={maintenance.id} {...maintenance} />
      ))}
    </GridWrap>
  );
};
