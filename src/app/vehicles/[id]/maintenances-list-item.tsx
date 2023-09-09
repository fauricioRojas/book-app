'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Typography } from '@/shared/components';
import { IMaintenance } from '@/supabase';
import { formatDate, formatMoney, formatLength } from '@/shared/utils';
import { ICON_BY_TYPE } from '@/shared/constants';
import { useMeasure } from '@/contexts';

interface IMaintenancesListItemProps extends IMaintenance {}

export const MaintenancesListItem: FC<IMaintenancesListItemProps> = ({
  id,
  cost,
  kilometers,
  notes: {
    type,
    date,
  },
}) => {
  const { colors } = useTheme();
  const { currency, lengthUnit } = useMeasure();

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
          {kilometers && (
            <Typography variant="label">
              {formatLength(kilometers, lengthUnit)}
            </Typography>
          )}
        </FlexWrap>
      </FlexWrap>
    </Card>
  );
};
