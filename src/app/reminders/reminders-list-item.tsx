'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Typography } from '@/shared/components';
import { IProcedure } from '@/supabase';
import { useLanguage } from '@/contexts';
import { ICON_BY_TYPE } from '@/shared/constants';
import { formatDate } from '@/shared/utils';

interface IRemindersListItemProps extends IProcedure {}

export const RemindersListItem: FC<IRemindersListItemProps> = ({
  nextDate,
  notes: { type },
  pets: { name },
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <Card>
      <FlexWrap direction="column" gap={3}>
        <FlexWrap align="center" gap={3}>
          <Icon
            name={ICON_BY_TYPE[type]}
            height={22}
            width={22}
            color={colors.primaryText}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
          >
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
