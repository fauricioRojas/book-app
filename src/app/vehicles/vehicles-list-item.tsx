'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { IVehicle } from '@/supabase';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';

interface IVehiclesListItemProps extends IVehicle {}

export const VehiclesListItem: FC<IVehiclesListItemProps> = ({
  id,
  brand,
  plateNumber,
  notes: { type },
}) => {
  const { colors } = useTheme();

  return (
    <Link href={`${ROUTES.VEHICLES}/${id}`} asContainer>
      <Card>
        <FlexWrap gap={4}>
          <FlexWrap align="center">
            <Icon
              name={ICON_BY_TYPE[type]}
              color={colors.primaryText}
              height={45}
              width={45}
              pointer
            />
          </FlexWrap>
          <FlexWrap direction="column" gap={1}>
            <Typography variant="h5" fontWeight="bold">{brand}</Typography>
            <Typography variant="label">{plateNumber}</Typography>
          </FlexWrap>
        </FlexWrap>
      </Card>
    </Link>
  );
};
