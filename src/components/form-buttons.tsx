'use client';

import { FC } from "react";

import { Button, FlexWrap } from "@/shared/components";
import { useLanguage } from "@/contexts";

interface IFormButtonsProps {
  disabledSave?: boolean;
  onClickBack?: () => void;
}

export const FormButtons: FC<IFormButtonsProps> = ({
  disabledSave,
  onClickBack,
}) => {
  const { translation } = useLanguage();

  return (
    <FlexWrap justify="center" gap={4}>
      {onClickBack && (
        <Button
          variant="outline-secondary"
          block
          onClick={onClickBack}
        >
          {translation.back}
        </Button>
      )}
      <Button
        variant="primary"
        type="submit"
        block
        disabled={disabledSave}
      >
        {translation.save}
      </Button>
    </FlexWrap>
  );
};
