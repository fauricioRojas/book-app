'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { TVehicle } from '@/supabase';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/utils';

type VehiclesListItemProps = TVehicle;

export const VehiclesListItem: FC<VehiclesListItemProps> = ({
  id,
  brand,
  plateNumber,
  notes: {
    date,
    type,
  },
}) => {
  const { colors } = useTheme();

  return (
    <Link href={`${ROUTES.VEHICLES}/${id}`} asContainer>
      <Card>
        <FlexWrap justify="space-between" gap={4}>
          <FlexWrap direction="column" gap={4}>
            <FlexWrap direction="column" gap={1}>
              <Typography variant="h5" fontWeight="bold">{brand}</Typography>
              <Typography variant="label">{plateNumber}</Typography>
            </FlexWrap>
            <Typography variant="label">{formatDate(date)}</Typography>
          </FlexWrap>
          <FlexWrap align="center" justify="center">
            <Icon
              name={ICON_BY_TYPE[type]}
              color={colors.primaryText}
              height={50}
              width={50}
              pointer
            />
          </FlexWrap>
        </FlexWrap>
      </Card>
    </Link>
  );
};
