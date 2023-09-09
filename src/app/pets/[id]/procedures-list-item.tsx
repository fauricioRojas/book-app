'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Typography } from '@/shared/components';
import { IProcedure } from '@/supabase';
import { formatDate, formatMoney, formatWeight } from '@/shared/utils';
import { ICON_BY_TYPE } from '@/shared/constants';
import { useMeasure } from '@/contexts';

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
  const { currency, weightUnit } = useMeasure();

  return (
    <Card>
      <FlexWrap gap={4} fullHeight>
        <FlexWrap align="center">
          <Icon
            name={ICON_BY_TYPE[type]}
            color={colors.primaryText}
            height={35}
            width={35}
          />
        </FlexWrap>
        <FlexWrap direction="column" justify="center" gap={2}>
          <Typography variant="label">{formatDate(date)}</Typography>
          <Typography variant="label">{formatMoney(cost, currency)}</Typography>
          {weight && (
            <Typography variant="label">
              {formatWeight(weight, weightUnit)}
            </Typography>
          )}
        </FlexWrap>
      </FlexWrap>
    </Card>
  );
};
