import { FC } from 'react';

import { GridWrap } from '@/shared/components';
import { TTransfer } from '@/supabase';
import { NoTransfers } from './no-transfers';
import { TransfersListItem } from './transfers-list-item';

type TransfersListProps = {
  serverTransfers: TTransfer[];
};

export const TransfersList: FC<TransfersListProps> = ({ serverTransfers }) => {
  if (!serverTransfers.length) {
    return <NoTransfers />;
  }

  return (
    <GridWrap cols={12} sm={6} lg={4} xl={3} gap={3}>
      {serverTransfers.map((transfer) => (
        <TransfersListItem key={transfer.id} {...transfer} />
      ))}
    </GridWrap>
  );
};
