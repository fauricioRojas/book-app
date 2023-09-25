'use client';

import { useCallback, useState, FC, PropsWithChildren } from 'react';

import { Drawer } from '@/shared/components';
import { DrawerContext } from './drawer.context';
import { DrawerArgs } from './drawer.types';

type DrawerState = DrawerArgs & {
  isVisible: boolean;
}

export const DEFAULT_DRAWER_STATE: DrawerState = {
  isVisible: false,
  title: '',
  body: null,
};

export const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ isVisible, title, body }, setState] = useState<DrawerState>(DEFAULT_DRAWER_STATE);

  const resetState = useCallback(() => setState(DEFAULT_DRAWER_STATE), []);

  const hideDrawer = useCallback(() => {
    setState((prevState: DrawerState) => ({
      ...prevState,
      isVisible: false,
    }));
    setTimeout(resetState, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showDrawer = useCallback((args: DrawerArgs) => {
    setState({ isVisible: true, ...args });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DrawerContext.Provider value={{ showDrawer, hideDrawer }}>
      {children}      
      <Drawer
        body={body}
        title={title}
        isVisible={isVisible}
        onHideDrawer={hideDrawer}
      />
    </DrawerContext.Provider>
  );
};
