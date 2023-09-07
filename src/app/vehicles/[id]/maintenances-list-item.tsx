'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, IconName, Typography } from '@/shared/components';
import { IMaintenance } from '@/supabase';
import { formatDate, formatMoney, formatKilometers } from '@/shared/utils';

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

  return (
    <Card>
      <FlexWrap direction="column" gap={3}>
        <FlexWrap
          justify="space-between"
          align="center"
        >
          <Typography variant="h5">{formatDate(date)}</Typography>
          <Icon
            name={type as IconName}
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
          {kilometers && (
            <Typography variant="label">
              {formatKilometers(kilometers)}
            </Typography>
          )}
        </FlexWrap>
      </FlexWrap>
    </Card>
  );
};
