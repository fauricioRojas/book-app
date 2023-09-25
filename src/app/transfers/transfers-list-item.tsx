'use client';

import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Card, FlexWrap, Icon, Typography } from '@/shared/components';
import { TTransfer } from '@/supabase';
import { useLanguage } from '@/contexts';
import { ICON_BY_TYPE } from '@/shared/constants';
import { formatDate } from '@/shared/utils';

type TransfersListItemProps = TTransfer;

export const TransfersListItem: FC<TransfersListItemProps> = ({
  id,
}) => {
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <Card>
      {/* <FlexWrap direction="column" gap={3}>
        <FlexWrap align="center" gap={3}>
          <Icon
            name={ICON_BY_TYPE[type]}
            height={22}
            width={22}
            color={colors.primaryText}
          />
          <Typography
            variant="h5"
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
      </FlexWrap> */}
    </Card>
  );
};
