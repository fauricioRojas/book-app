import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { TMaintenance } from '@/supabase';
import { MaintenancesListItem } from './maintenances-list-item';
import { NoMaintenances } from './no-maintenances';

type MaintenancesListProps = {
  maintenances: TMaintenance[];
}

export const MaintenancesList: FC<MaintenancesListProps> = ({
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
