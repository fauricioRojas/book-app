'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Link, Typography } from '@/shared/components';
import { ICON_BY_TYPE, ROUTES } from '@/shared/constants';
import { formatDate } from '@/shared/utils';
import { TPet } from '@/supabase';

type PetsListItemProps = TPet;

export const PetsListItem: FC<PetsListItemProps> = ({
  id,
  name,
  breed,
  notes: { date, type },
}) => {
  const { colors } = useTheme();

  return (
    <Link href={`${ROUTES.PETS}/${id}`} asContainer>
      <Card background>
        <FlexWrap justify="space-between" gap={2}>
          <FlexWrap direction="column" gap={4}>
            <FlexWrap direction="column" gap={1}>
              <Typography variant="h5" fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="label">{breed}</Typography>
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
