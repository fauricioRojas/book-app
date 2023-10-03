'use client';

import { createContext, useContext } from 'react';

import type { SnackbarArgs } from './snackbar.types';

type TSnackbarContext = {
  showSnackbar: (args: SnackbarArgs) => void;
};

export const SnackbarContext = createContext<TSnackbarContext>({
  showSnackbar: () => undefined,
});

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnackbar must be used inside SnackbarProvider');
  }

  return context;
};
