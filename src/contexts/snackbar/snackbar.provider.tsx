'use client';

import { FC, PropsWithChildren, useState } from 'react';

import { Snackbar } from '@/shared/components';
import { SnackbarContext } from './snackbar.context';
import type { SnackbarArgs } from './snackbar.types';

const DEFAULT_DURATION = 5;

type SnackbarState = SnackbarArgs & {
  isVisible: boolean;
};

const DEFAULT_STATE: SnackbarState = {
  isVisible: false,
  durationInSeconds: DEFAULT_DURATION,
  type: 'success',
  message: '',
};

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ isVisible, durationInSeconds, type, message }, setState] =
    useState<SnackbarState>(DEFAULT_STATE);

  const hideSnackbar = () => setState(DEFAULT_STATE);

  const showSnackbar = (args: SnackbarArgs) => {
    const duration = args.durationInSeconds || DEFAULT_DURATION;

    setState(
      (prevState): SnackbarState => ({
        ...prevState,
        ...args,
        isVisible: true,
      }),
    );
    setTimeout(hideSnackbar, duration * 1000);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {isVisible && (
        <Snackbar
          type={type}
          message={message}
          durationInSeconds={durationInSeconds || DEFAULT_DURATION}
        />
      )}
    </SnackbarContext.Provider>
  );
};
