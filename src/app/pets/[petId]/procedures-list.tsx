import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { TProcedure } from '@/supabase';
import { NoProcedures } from './no-procedures';
import { ProceduresListItem } from './procedures-list-item';

type ProceduresListProps = {
  procedures: TProcedure[];
}

export const ProceduresList: FC<ProceduresListProps> = ({
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
