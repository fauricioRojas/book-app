'use client';

import { createContext, useContext } from 'react';

import type { DrawerArgs } from './drawer.types';

type TDrawerContext = {
  showDrawer: (args: DrawerArgs) => void;
  hideDrawer: () => void;
};

export const DrawerContext = createContext<TDrawerContext>({
  showDrawer: () => undefined,
  hideDrawer: () => undefined,
});

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawer must be used inside DrawerProvider');
  }

  return context;
};
