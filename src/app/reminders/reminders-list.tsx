import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { IProcedure } from '@/supabase';
import { NoReminders } from './no-reminders';
import { RemindersListItem } from './reminders-list-item';

interface IRemindersListProps {
  serverProcedures: IProcedure[];
}

export const RemindersList: FC<IRemindersListProps> = ({
  serverProcedures,
}) => {
  if (!serverProcedures.length) {
    return <NoReminders />;
  }

  return (
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={3}
    >
      {serverProcedures.map((procedure) => (
        <RemindersListItem key={procedure.id} {...procedure} />
      ))}
    </GridWrap>
  );
};
