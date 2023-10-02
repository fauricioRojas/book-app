import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { useLanguage } from '@/contexts';
import { useKeyPress } from '@/hooks';
import { fadeIn, fadeOut, slideInUp, slideOutDown } from '@/shared/styles';
import { Backdrop, Button, FlexWrap, Typography } from '.';

type StyledConfirmationModalProps = {
  $isHiding: boolean;
}

const StyledConfirmationModal = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.confirmationModal};
`;
const StyledConfirmationModalContent = styled.div<StyledConfirmationModalProps>`
  align-items: center;
  animation: ${slideInUp} .3s;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => `${theme.borderRadius} ${theme.borderRadius} ${theme.gutters.size0} ${theme.gutters.size0}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size4};
  justify-content: center;
  padding: ${({ theme }) => theme.gutters.size4};
  position: absolute;
  width: 100%;

  ${({ $isHiding }) => $isHiding && css`
    animation: ${slideOutDown} .3s;
  `};

  ${({ theme }) => theme.breakpoints.md} {
    animation: ${fadeIn} .3s;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    bottom: auto;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    gap: ${({ theme }) => theme.gutters.size6};
    left: 50%;
    padding: ${({ theme }) => theme.gutters.size6};
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;

    ${({ $isHiding }) => $isHiding && css`
      animation: ${fadeOut} .3s;
    `};
  }
`;

type ConfirmationModalProps = {
  title: string;
  isOpen: boolean;
  buttonText: string;
  onClick: () => Promise<void>;
  onClose: () => void;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  isOpen,
  buttonText,
  onClick,
  onClose,
}) => {
  const { translation } = useLanguage();
  const [disabled, setDisabled] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => {
      onClose();
      setIsHiding(false);
    }, 200);
  };

  const handleClick = async () => {
    setDisabled(true);
    await onClick();
    setDisabled(false);
    handleClose();
  };

  useKeyPress({ key: 'Escape', callback: handleClose });

  return isOpen ? (
    <StyledConfirmationModal>
      <Backdrop
        isHiding={isHiding}
        onClick={handleClose}
      />
      <StyledConfirmationModalContent $isHiding={isHiding}>
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="center"
        >
          {title}
        </Typography>
        <FlexWrap gap={4}>
          <Button
            variant="outline-secondary"
            onClick={handleClose}
          >
            {translation.cancel}
          </Button>
          <Button
            variant="error"
            disabled={disabled}
            onClick={handleClick}
          >
            {buttonText}
          </Button>
        </FlexWrap>
      </StyledConfirmationModalContent>
    </StyledConfirmationModal>
  ) : null;
};
