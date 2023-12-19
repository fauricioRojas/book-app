import { FC, PropsWithChildren, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useKeyPress } from '@/hooks';
import {
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutRight,
} from '@/shared/styles';
import { Backdrop, Icon, Typography } from '.';

type StyledDrawerProps = {
  $isHiding: boolean;
};

const StyledDrawer = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.drawer};
`;
const StyledDrawerContent = styled.div<StyledDrawerProps>`
  animation: ${slideInUp} 0.3s;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius} ${theme.borderRadius} ${theme.gutters.size0} ${theme.gutters.size0}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  bottom: 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  height: 95%;
  position: absolute;
  width: 100%;

  ${({ $isHiding }) =>
    $isHiding &&
    css`
      animation: ${slideOutDown} 0.3s;
    `};

  ${({ theme }) => theme.breakpoints.md} {
    animation: ${slideInRight} 0.3s;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    border-top: none;
    height: 100%;
    right: 0;
    width: 60%;

    ${({ $isHiding }) =>
      $isHiding &&
      css`
        animation: ${slideOutRight} 0.3s;
      `};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    width: 50%;
  }
  ${({ theme }) => theme.breakpoints.xl} {
    width: 40%;
  }
  ${({ theme }) => theme.breakpoints.xxl} {
    width: 30%;
  }
`;
const StyledDrawerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.gutters.size4};
`;
const StyledDrawerBody = styled.div`
  height: calc(100% - 58px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${({ theme }) =>
    `${theme.gutters.size2} ${theme.gutters.size4} ${theme.gutters.size4}`};

  ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ theme }) => theme.gutters.size4};
  }
  ${({ theme }) => theme.breakpoints.lg} {
    height: calc(100% - 61px);
  }
`;

type DrawerProps = PropsWithChildren & {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Drawer: FC<DrawerProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const { colors } = useTheme();
  const [isHiding, setIsHiding] = useState(false);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => {
      onClose();
      setIsHiding(false);
    }, 200);
  };

  useKeyPress({ key: 'Escape', callback: handleClose });

  return isOpen ? (
    <StyledDrawer>
      <Backdrop isHiding={isHiding} onClick={handleClose} />
      <StyledDrawerContent $isHiding={isHiding}>
        <StyledDrawerHeader>
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
          <Icon
            name="cancel"
            color={colors.primaryText}
            size={15}
            onClick={handleClose}
          />
        </StyledDrawerHeader>
        <StyledDrawerBody>{children}</StyledDrawerBody>
      </StyledDrawerContent>
    </StyledDrawer>
  ) : null;
};
