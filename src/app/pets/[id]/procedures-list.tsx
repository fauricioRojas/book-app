'use client';

import { FC } from 'react';

import { Col, Row, Typography } from '@/shared/components';
import { IProcedure } from '@/supabase';
import { ProceduresListItem } from './procedures-list-item';
import { useLanguage } from '@/contexts';

interface IProceduresListProps {
  procedures: IProcedure[];
}

export const ProceduresList: FC<IProceduresListProps> = ({
  procedures,
}) => {
  const { translation } = useLanguage();

  return (
    <Row>
      {procedures.length ? procedures.map((procedure) => (
        <Col
          key={procedure.id}
          cols={12}
          sm={6}
          lg={4}
          xl={3}
          mb={4}
        >
          <ProceduresListItem {...procedure} />
        </Col>
      )) : (
        <Col>
          <Typography variant="label">{translation.noProcedures}</Typography>
        </Col>
      )}
    </Row>
  );
};
