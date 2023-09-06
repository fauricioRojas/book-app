'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, IconName, Typography } from '@/shared/components';
import { IVehicle } from '@/supabase';

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
              name={type as IconName}
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
