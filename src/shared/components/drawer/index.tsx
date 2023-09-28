import { FC, useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';

import { useKeyPress } from '@/hooks';
import { slideInUp, slideOutDown, slideInRight, slideOutRight } from '@/shared/keyframes';
import { Backdrop, Icon, Typography } from '..';
import { drawerService } from './drawer.service';
import type { DrawerArgs } from './drawer.types';

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

type DrawerState = DrawerArgs & {
  isOpen: boolean;
  isHiding: boolean;
}

const DEFAULT_STATE: DrawerState = {
  isOpen: false,
  isHiding: false,
  title: '',
  body: null,
};

const Drawer: FC = () => {
  const { colors } = useTheme();
  const [{ isOpen, isHiding, title, body }, setState] = useState<DrawerState>(DEFAULT_STATE);

  const hideDrawer = () => {
    setState((prevState): DrawerState => ({
      ...prevState,
      isHiding: true,
    }));
    setTimeout(() => setState(DEFAULT_STATE), 200);
  };

  const showDrawer = (args: DrawerArgs) => {
    setState((prevState): DrawerState => ({
      ...prevState,
      ...args,
      isOpen: true,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    drawerService.init(showDrawer, hideDrawer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useKeyPress({ key: 'Escape', callback: hideDrawer });

  return isOpen ? (
    <StyledDrawer>
      <Backdrop
        isHiding={isHiding}
        onClick={hideDrawer}
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
            onClick={hideDrawer}
          />
        </StyledDrawerHeader>
        <StyledDrawerBody>{body}</StyledDrawerBody>
      </StyledDrawerContent>
    </StyledDrawer>
  ) : null;
};

export { Drawer, drawerService };
