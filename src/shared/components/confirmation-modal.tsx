import { useCallback, useState, FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useLanguage } from '@/contexts';
import { useKeyPress } from '@/hooks';
import { Button, FlexWrap, Typography } from '.';

type StyledConfirmationModalProps = {
  $isHiding: boolean;
}

const slideIn = keyframes`
  from {
    bottom: -300px;
  }
  to {
    bottom: 0;
  }
`;
const slideOut = keyframes`
  from {
    bottom: 0;
  }
  to {
    bottom: -300px
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledConfirmationModal = styled.div`
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;
const StyledConfirmationModalBackdrop = styled.div<StyledConfirmationModalProps>`
  animation: ${fadeIn} .3s;
  background-color: ${({ theme }) => theme.colors.backdrop};
  height: 100%;
  width: 100%;

  ${({ $isHiding }) => $isHiding && css`
    animation: ${fadeOut} .3s;
  `};
`;
const StyledConfirmationModalContent = styled.div<StyledConfirmationModalProps>`
  align-items: center;
  animation: ${slideIn} .3s;
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
    animation: ${slideOut} .3s;
  `};

  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    animation: ${fadeIn} .3s;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    bottom: auto;
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

  const handleCloseConfirmationModal = useCallback(() => {
    setIsHiding(true);
    setTimeout(() => {
      onClose();
      setIsHiding(false);
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(async () => {
    setDisabled(true);
    await onClick();
    setDisabled(false);
    handleCloseConfirmationModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClick]);

  useKeyPress({ key: 'Escape', callback: handleCloseConfirmationModal });

  return isOpen ? (
    <StyledConfirmationModal>
      <StyledConfirmationModalBackdrop
        $isHiding={isHiding}
        onClick={handleCloseConfirmationModal}
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
            onClick={handleCloseConfirmationModal}
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
