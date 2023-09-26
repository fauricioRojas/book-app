import { FC, ReactNode } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useKeyPress } from '@/hooks';
import { Icon, Typography } from '.';

type StyledDrawerProps = {
  $isVisible: boolean;
}

const StyledDrawerBackdrop = styled.div<StyledDrawerProps>`
  background-color: rgba(0, 0, 0, 0.54);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4;

  ${({ $isVisible }) => !$isVisible && css`
    display: none;
  `};
`;
const StyledDrawer = styled.div<StyledDrawerProps>`
  background-color: ${({ theme }) => theme.colors.neutral};
  border-top-left-radius: ${({ theme }) => theme.gutters.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.gutters.borderRadius};
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  height: 95%;
  left: 0;
  position: fixed;
  transform: translateY(100%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  top: 5%;
  width: 100%;
  z-index: 4;

  ${({ $isVisible }) => $isVisible && css`
    transform: translateY(0);
  `};

  @media (width >= ${({ theme }) => theme.breakpoints.md}) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 100%;
    left: 40%;
    top: 0;
    transform: translateX(100%);
    width: 60%;

    ${({ $isVisible }) => $isVisible && css`
      transform: translateX(0);
    `};
  }
  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    left: 50%;
    width: 50%;
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xl}) {
    left: 60%;
    width: 40%;
  }
  @media (width >= ${({ theme }) => theme.breakpoints.xxl}) {
    left: 70%;
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
  isVisible: boolean;
  onHideDrawer: () => void;
}

export const Drawer: FC<DrawerProps> = ({
  body,
  title,
  isVisible,
  onHideDrawer,
}) => {
  const { colors } = useTheme();
  useKeyPress({ key: 'Escape', callback: onHideDrawer });

  return (
    <>
      <StyledDrawerBackdrop
        $isVisible={isVisible}
        onClick={onHideDrawer}
      />
      <StyledDrawer $isVisible={isVisible}>
        <StyledDrawerHeader>
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
          <Icon
            name="cancel"
            color={colors.primaryText}
            width={15}
            height={15}
            onClick={onHideDrawer}
          />
        </StyledDrawerHeader>
        <StyledDrawerBody>{body}</StyledDrawerBody>
      </StyledDrawer>
    </>
  );
};