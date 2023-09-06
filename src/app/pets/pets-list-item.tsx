'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, IconName, Typography } from '@/shared/components';
import { IPet } from '@/supabase';

interface IPetsListItemProps extends IPet {}

export const PetsListItem: FC<IPetsListItemProps> = ({
  id,
  name,
  breed,
  notes: {
    type
  },
}) => {
  const { colors } = useTheme();

  return (
    <Link href={`/pets/${id}`} asContainer>
      <Card>
        <FlexWrap justify="space-between">
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
    </Link>
  );
};
