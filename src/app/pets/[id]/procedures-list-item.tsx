'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Typography } from '@/shared/components';
import { IProcedure } from '@/supabase';
import { formatDate, formatMoney } from '@/shared/utils';
import { ICON_BY_TYPE } from '@/shared/constants';

interface IProceduresListItemProps extends IProcedure {}

export const ProceduresListItem: FC<IProceduresListItemProps> = ({
  id,
  cost,
  weight,
  nextDate,
  notes: {
    type,
    date,
  },
}) => {
  const { colors } = useTheme();

  return (
    <Card>
      <FlexWrap direction="column" gap={3}>
        <FlexWrap
          justify="space-between"
          align="center"
        >
          <Typography variant="label">{formatDate(date)}</Typography>
          <Icon
            name={ICON_BY_TYPE[type]}
            color={colors.primaryText}
            height={30}
            width={30}
          />
        </FlexWrap>
        <FlexWrap
          justify="space-between"
          align="center"
        >
          <Typography variant="label">
            {formatMoney(cost)}
          </Typography>
          {weight && (
            <Typography variant="label">
              {weight} kg
            </Typography>
          )}
        </FlexWrap>
      </FlexWrap>
    </Card>
  );
};
