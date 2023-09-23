'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { IPet } from '@/supabase';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';

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
    <Link href={`${ROUTES.PETS}/${id}`} asContainer>
      <Card>
        <FlexWrap gap={4}>
          <FlexWrap align="center">
            <Icon
              name={ICON_BY_TYPE[type]}
              color={colors.primaryText}
              height={35}
              width={35}
              pointer
            />
          </FlexWrap>
          <FlexWrap direction="column" gap={1}>
            <Typography variant="h5" fontWeight="bold">{name}</Typography>
            <Typography variant="label">{breed}</Typography>
          </FlexWrap>
        </FlexWrap>
      </Card>
    </Link>
  );
};
