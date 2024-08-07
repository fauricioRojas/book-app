'use client';

import { FC } from 'react';

import { Button, FlexWrap } from '@/shared/components';
import { useLanguage } from '@/contexts';

type TransfersFormProps = {
  type: 'pet' | 'vehicle';
};

export const TransfersForm: FC<TransfersFormProps> = ({
  type,
}) => {
  const { translation } = useLanguage();

  return (
    <FlexWrap justify="center" gap={4}>
      
    </FlexWrap>
  );
};
