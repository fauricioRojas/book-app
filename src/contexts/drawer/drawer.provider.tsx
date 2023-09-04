'use client';

import { useCallback, useState, FC, PropsWithChildren } from 'react';

import { Drawer } from '@/shared/components';
import { DrawerContext } from './drawer.context';
import { IDrawerArgs } from './drawer.types';

interface IDrawerState extends IDrawerArgs {
  isVisible: boolean;
}

export const DEFAULT_DRAWER_STATE: IDrawerState = {
  isVisible: false,
  title: '',
  body: null,
};

export const DrawerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ isVisible, title, body }, setState] = useState<IDrawerState>(DEFAULT_DRAWER_STATE);

  const resetState = useCallback(() => setState(DEFAULT_DRAWER_STATE), []);

  const hideDrawer = useCallback(() => {
    setState((prevState: IDrawerState) => ({
      ...prevState,
      isVisible: false,
    }));
    setTimeout(resetState, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showDrawer = useCallback((args: IDrawerArgs) => {
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
