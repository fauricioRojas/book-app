'use client';

import { FC } from "react";

import { Button, FlexWrap } from "@/shared/components";
import { useLanguage } from "@/contexts";

interface IFormButtonsProps {
  onClickBack: () => void;
}

export const FormButtons: FC<IFormButtonsProps> = ({
  onClickBack,
}) => {
  const { translation } = useLanguage();

  return (
    <FlexWrap justify="center" gap={4}>
      <Button
        variant="outline-secondary"
        block
        onClick={onClickBack}
      >
        {translation.back}
      </Button>
      <Button
        type="submit"
        block
      >
        {translation.save}
      </Button>
    </FlexWrap>
  );
};
