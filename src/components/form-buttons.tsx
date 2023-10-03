'use client';

import { FC } from 'react';

import { Button, FlexWrap } from '@/shared/components';
import { useLanguage } from '@/contexts';

type FormButtonsProps = {
  disabledSave?: boolean;
  onClickBack?: () => void;
};

export const FormButtons: FC<FormButtonsProps> = ({
  disabledSave,
  onClickBack,
}) => {
  const { translation } = useLanguage();

  return (
    <FlexWrap justify="center" gap={4}>
      {onClickBack && (
        <Button variant="outline-secondary" block onClick={onClickBack}>
          {translation.back}
        </Button>
      )}
      <Button variant="primary" type="submit" block disabled={disabledSave}>
        {translation.save}
      </Button>
    </FlexWrap>
  );
};
