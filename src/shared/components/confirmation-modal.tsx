import { useCallback, useState, FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useLanguage } from '@/contexts';
import { Button, FlexWrap, Typography } from '.';

interface IStyledConfirmationModalProps {
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
const StyledConfirmationModalBackdrop = styled.div<IStyledConfirmationModalProps>`
  animation-duration: .3s;
  animation-name: ${fadeIn};
  background-color: rgba(0, 0, 0, 0.54);
  height: 100%;
  width: 100%;

  ${({ $isHiding }) => $isHiding && css`
    animation-duration: .3s;
    animation-name: ${fadeOut};
  `};
`;
const StyledConfirmationModalContent = styled.div<IStyledConfirmationModalProps>`
  align-items: center;
  animation-duration: .3s;
  animation-name: ${slideIn};
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size4};
  justify-content: center;
  padding: ${({ theme }) => theme.gutters.size4};
  position: absolute;
  width: 100%;

  ${({ $isHiding }) => $isHiding && css`
    animation-duration: .3s;
    animation-name: ${slideOut};
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    animation-name: ${fadeIn};
    bottom: auto;
    gap: ${({ theme }) => theme.gutters.size6};
    left: 50%;
    padding: ${({ theme }) => theme.gutters.size6};
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;

    ${({ $isHiding }) => $isHiding && css`
      animation-name: ${fadeOut};
    `};
  }
`;

interface IConfirmationModalProps {
  title: string;
  isOpen: boolean;
  buttonText: string;
  onClick: () => void;
  onClose: () => void;
}

export const ConfirmationModal: FC<IConfirmationModalProps> = ({
  title,
  isOpen,
  buttonText,
  onClick,
  onClose,
}) => {
  const { translation } = useLanguage();
  const [isHiding, setIsHiding] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsHiding(true);
    setTimeout(() => {
      onClose();
      setIsHiding(false);
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(() => {
    handleCloseModal();
    onClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClick]);

  return isOpen ? (
    <StyledConfirmationModal>
      <StyledConfirmationModalBackdrop $isHiding={isHiding} onClick={handleCloseModal} />
      <StyledConfirmationModalContent $isHiding={isHiding}>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <FlexWrap gap={4}>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            {translation.cancel}
          </Button>
          <Button variant="error" onClick={handleClick}>
            {buttonText}
          </Button>
        </FlexWrap>
      </StyledConfirmationModalContent>
    </StyledConfirmationModal>
  ) : null;
};
