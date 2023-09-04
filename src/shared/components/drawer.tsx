import { FC, ReactNode } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { Icon, Typography } from '.';

interface IStyledDrawerProps {
  $isVisible: boolean;
}

const StyledDrawerBackdrop = styled.div<IStyledDrawerProps>`
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
const StyledDrawer = styled.div<IStyledDrawerProps>`
  background-color: ${({ theme }) => theme.colors.neutral};
  border-top-left-radius: ${({ theme }) => theme.gutters.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.gutters.borderRadius};
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  height: 95%;
  left: 0;
  padding: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
  position: fixed;
  transform: translateY(100%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  top: 5%;
  width: 100%;
  z-index: 4;

  ${({ $isVisible }) => $isVisible && css`
    transform: translateY(0);
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 50%;
    width: 50%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    left: 60%;
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    left: 70%;
    width: 30%;
  }
`
const StyledDrawerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.gutters.size4} ${theme.gutters.size0}`};
`
const StyledDrawerBody = styled.div`
  height: calc(100% - 56px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: ${({ theme }) => `${theme.gutters.size4} ${theme.gutters.size0}`};
`

interface IDrawerProps {
  body: ReactNode;
  title: string;
  isVisible: boolean;
  onHideDrawer: () => void;
}

export const Drawer: FC<IDrawerProps> = ({
  body,
  title,
  isVisible,
  onHideDrawer,
}) => {
  const { colors } = useTheme();

  return (
    <>
      <StyledDrawerBackdrop
        $isVisible={isVisible}
        onClick={onHideDrawer}
      />
      <StyledDrawer $isVisible={isVisible}>
        <StyledDrawerHeader>
          <Typography variant="h5" fontWeight="bold">
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