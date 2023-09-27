import { FC, ReactNode, useCallback, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useKeyPress } from '@/hooks';
import { slideInUp, slideOutDown, slideInRight, slideOutRight } from '@/shared/keyframes';
import { Backdrop, Icon, Typography } from '.';

type StyledDrawerProps = {
  $isHiding: boolean;
}

const StyledDrawer = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`;
const StyledDrawerContent = styled.div<StyledDrawerProps>`
  animation: ${slideInUp} .3s;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => `${theme.borderRadius} ${theme.borderRadius} ${theme.gutters.size0} ${theme.gutters.size0}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  bottom: 0;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  height: 95%;
  position: absolute;
  width: 100%;
  z-index: 4;

  ${({ $isHiding }) => $isHiding && css`
    animation: ${slideOutDown} .3s;
  `};

  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    animation: ${slideInRight} .3s;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    border-top: none;
    height: 100%;
    right: 0;
    width: 60%;

    ${({ $isHiding }) => $isHiding && css`
      animation: ${slideOutRight} .3s;
    `};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    width: 50%;
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    width: 40%;
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
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
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size4} ${theme.gutters.size4}`};

  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.gutters.size4};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    height: calc(100% - 61px);
  }
`;

type DrawerProps = {
  body: ReactNode;
  title: string;
  isOpen: boolean;
  onHideDrawer: () => void;
}

export const Drawer: FC<DrawerProps> = ({
  body,
  title,
  isOpen,
  onHideDrawer,
}) => {
  const { colors } = useTheme();
  const [isHiding, setIsHiding] = useState(false);

  const handleCloseDrawer = useCallback(() => {
    setIsHiding(true);
    setTimeout(() => {
      onHideDrawer();
      setIsHiding(false);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useKeyPress({ key: 'Escape', callback: handleCloseDrawer });

  return isOpen ? (
    <StyledDrawer>
      <Backdrop
        isHiding={isHiding}
        onClick={handleCloseDrawer}
      />
      <StyledDrawerContent $isHiding={isHiding}>
        <StyledDrawerHeader>
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
          <Icon
            name="cancel"
            color={colors.primaryText}
            width={15}
            height={15}
            onClick={handleCloseDrawer}
          />
        </StyledDrawerHeader>
        <StyledDrawerBody>{body}</StyledDrawerBody>
      </StyledDrawerContent>
    </StyledDrawer>
  ) : null;
};