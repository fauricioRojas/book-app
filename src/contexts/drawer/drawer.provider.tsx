'use client';

import { FC, PropsWithChildren, useState } from 'react';

import { Drawer } from '@/shared/components';
import { DrawerContext } from './drawer.context';
import type { DrawerArgs } from './drawer.types';

type DrawerState = DrawerArgs & {
  isOpen: boolean;
};

const DEFAULT_STATE: DrawerState = {
  isOpen: false,
  title: '',
  children: null,
};

export const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ isOpen, title, children: drawerChildren }, setState] =
    useState<DrawerState>(DEFAULT_STATE);

  const hideDrawer = () => {
    setState(
      (prevState: DrawerState): DrawerState => ({
        ...prevState,
        isOpen: false,
      }),
    );
    setTimeout(() => setState(DEFAULT_STATE), 500);
  };

  const showDrawer = (args: DrawerArgs) => {
    setState({ isOpen: true, ...args });
  };

  return (
    <DrawerContext.Provider value={{ showDrawer, hideDrawer }}>
      {children}
      <Drawer title={title} isOpen={isOpen} onClose={hideDrawer}>
        {drawerChildren}
      </Drawer>
    </DrawerContext.Provider>
  );
};
