import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { IProcedure } from '@/supabase';
import { ProceduresListItem } from './procedures-list-item';
import { NoProcedures } from './no-procedures';

interface IProceduresListProps {
  procedures: IProcedure[];
}

export const ProceduresList: FC<IProceduresListProps> = ({
  procedures,
}) => {
  if (!procedures.length) {
    return <NoProcedures />;
  }

  return (
    <GridWrap
      cols={12}
      sm={6}
      lg={4}
      xl={3}
      gap={4}
    >
      {procedures.map((procedure) => (
        <ProceduresListItem key={procedure.id} {...procedure} />
      ))}
    </GridWrap>
  );
};
