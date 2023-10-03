import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { TProcedure } from '@/supabase';
import { NoReminders } from './no-reminders';
import { RemindersListItem } from './reminders-list-item';

type RemindersListProps = {
  serverProcedures: TProcedure[];
};

export const RemindersList: FC<RemindersListProps> = ({ serverProcedures }) => {
  if (!serverProcedures.length) {
    return <NoReminders />;
  }

  return (
    <GridWrap cols={12} sm={6} lg={4} xl={3} gap={3}>
      {serverProcedures.map((procedure) => (
        <RemindersListItem key={procedure.id} {...procedure} />
      ))}
    </GridWrap>
  );
};
