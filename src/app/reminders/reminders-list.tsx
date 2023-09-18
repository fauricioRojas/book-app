import { FC } from 'react';

import { Col, Row } from '@/shared/components';
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
    <Row>
      {serverProcedures.map((procedure) => (
        <Col
          key={procedure.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <RemindersListItem {...procedure} />
        </Col>
      ))}
    </Row>
  );
};
