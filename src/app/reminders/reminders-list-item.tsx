'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import { Card, FlexWrap, Icon, Typography } from '@/shared/components';
import { ICON_BY_TYPE } from '@/shared/constants';
import { formatDate } from '@/shared/utils';
import { TProcedure } from '@/supabase';

type RemindersListItemProps = TProcedure;

export const RemindersListItem: FC<RemindersListItemProps> = ({
  nextDate,
  notes: { type },
  pets: { name },
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <Card background>
      <FlexWrap direction="column" gap={3}>
        <FlexWrap align="center" gap={3}>
          <Icon
            name={ICON_BY_TYPE[type]}
            size={22}
            color={colors.primaryText}
          />
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
        </FlexWrap>
        {nextDate && (
          <Typography variant="label">
            {translation.nextDate}: {formatDate(nextDate)}
          </Typography>
        )}
      </FlexWrap>
    </Card>
  );
};
