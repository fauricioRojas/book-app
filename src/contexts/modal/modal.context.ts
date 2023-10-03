'use client';

import { createContext, useContext } from 'react';

import type { ConfirmationModalArgs } from './modal.types';

type TModalContext = {
  showConfirmationModal: (args: ConfirmationModalArgs) => void;
};

export const ModalContext = createContext<TModalContext>({
  showConfirmationModal: () => undefined,
});

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used inside ModalProvider');
  }

  return context;
};
