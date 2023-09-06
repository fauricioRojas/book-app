'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, IconName, Typography } from '@/shared/components';
import { IPet } from '@/supabase';

interface IPetsListItemProps extends IPet {}

export const PetsListItem: FC<IPetsListItemProps> = ({
  name,
  breed,
  notes: {
    type
  },
}) => {
  const { colors } = useTheme();

  return (
    <Card>
      <FlexWrap justify="space-between" grow={1}>
        <Typography variant="h5">
          {name}
          {' '}
          <Typography variant="label">({breed})</Typography>
        </Typography>
        <Icon
          name={type as IconName}
          color={colors.primaryText}
          height={25}
          width={25}
        />
      </FlexWrap>
    </Card>
  );
};
