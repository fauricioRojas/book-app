'use client';

import {
  useCallback,
  useState,
  FC,
  ReactNode,
  PropsWithChildren,
} from 'react';

import { Snackbar } from '@/shared/components';
import type { SnackbarArgs } from './snackbar.types';
import { SnackbarContext } from './snackbar.context'
import type { MessageType } from '@/shared/types'

const DEFAULT_DURATION = 5;

type SnackbarState = {
  isVisible: boolean;
  durationInSeconds: number;
  type: MessageType;
  body: ReactNode;
}

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ isVisible, durationInSeconds, type, body }, setState] = useState<SnackbarState>({
    isVisible: false,
    durationInSeconds: DEFAULT_DURATION,
    type: 'success',
    body: null,
  });

  const hideSnackbar = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isVisible: false,
      body: null,
    }));
  }, []);

  const showSnackbar = useCallback((args: SnackbarArgs) => {
    const duration = args.durationInSeconds || DEFAULT_DURATION;

    setState((prevState) => ({
      ...prevState,
      isVisible: true,
      durationInSeconds: duration,
      type: args.type,
      body: args.body,
    }));
    setTimeout(hideSnackbar, duration * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {isVisible && (
        <Snackbar
          body={body}
          type={type}
          durationInSeconds={durationInSeconds}
        />
      )}
    </SnackbarContext.Provider>
  );
};
