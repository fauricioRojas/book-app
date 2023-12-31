'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/utils';
import { TVehicle } from '@/supabase';

type VehiclesListItemProps = TVehicle;

export const VehiclesListItem: FC<VehiclesListItemProps> = ({
  id,
  brand,
  plateNumber,
  notes: { date, type },
}) => {
  const { colors } = useTheme();

  return (
    <Link href={`${ROUTES.VEHICLES}/${id}`} asContainer>
      <Card background>
        <FlexWrap justify="space-between" gap={2}>
          <FlexWrap direction="column" gap={4}>
            <FlexWrap direction="column" gap={1}>
              <Typography variant="h5" fontWeight="bold">
                {brand}
              </Typography>
              <Typography variant="label">{plateNumber}</Typography>
            </FlexWrap>
            <Typography variant="label">{formatDate(date)}</Typography>
          </FlexWrap>
          <FlexWrap align="center" justify="center">
            <Icon
              name={ICON_BY_TYPE[type]}
              color={colors.primaryText}
              size="xxl"
              pointer
            />
          </FlexWrap>
        </FlexWrap>
      </Card>
    </Link>
  );
};
