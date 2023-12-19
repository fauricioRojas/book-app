'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { useMeasure } from '@/contexts';
import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';
import { formatDate, formatMoney } from '@/shared/utils';
import { TMaintenance } from '@/supabase';

type MaintenancesListItemProps = TMaintenance;

export const MaintenancesListItem: FC<MaintenancesListItemProps> = ({
  id,
  cost,
  notes: { type, date },
  vehicles: { id: vehicleId },
}) => {
  const { colors } = useTheme();
  const { currency } = useMeasure();

  return (
    <Link
      href={`${ROUTES.VEHICLES}/${vehicleId}${ROUTES.MAINTENANCES}/${id}`}
      asContainer
    >
      <Card background>
        <FlexWrap justify="space-between" gap={2}>
          <FlexWrap direction="column" gap={4}>
            <Typography variant="label">
              {formatMoney(cost, currency)}
            </Typography>
            <Typography variant="label">{formatDate(date)}</Typography>
          </FlexWrap>
          <FlexWrap align="center" justify="center">
            <Icon
              name={ICON_BY_TYPE[type]}
              color={colors.primaryText}
              size={45}
              pointer
            />
          </FlexWrap>
        </FlexWrap>
      </Card>
    </Link>
  );
};
