'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { IVehicle } from '@/supabase';
import { ICON_BY_TYPE } from '@/shared/constants';

interface IVehiclesListItemProps extends IVehicle {}

export const VehiclesListItem: FC<IVehiclesListItemProps> = ({
  id,
  brand,
  plateNumber,
  notes: { type },
}) => {
  const { colors } = useTheme();

  return (
    <Link href={`/vehicles/${id}`} asContainer>
      <Card>
        <FlexWrap direction="column" gap={3}>
          <FlexWrap
            justify="space-between"
          >
            <Typography variant="h5">{brand}</Typography>
            <Icon
              name={ICON_BY_TYPE[type]}
              color={colors.primaryText}
              height={25}
              width={25}
            />
          </FlexWrap>
          <Typography variant="label">
            {plateNumber}
          </Typography>
        </FlexWrap>
      </Card>
    </Link>
  );
};
