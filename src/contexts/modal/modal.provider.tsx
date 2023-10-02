'use client';

import { FC, PropsWithChildren, useState } from 'react';

import { ConfirmationModal } from '@/shared/components';
import { ModalContext } from './modal.context';
import type { ConfirmationModalArgs } from './modal.types';

type ModalState = {
  isConfirmationModalOpen: boolean;
  confirmationModalConfig: ConfirmationModalArgs;
}

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [
    { isConfirmationModalOpen, confirmationModalConfig },
    setState,
  ] = useState<ModalState>({
    isConfirmationModalOpen: false,
    confirmationModalConfig: {} as ConfirmationModalArgs,
  });

  const hideConfirmationModal = () => {
    setState((prevState): ModalState => ({
      ...prevState,
      isConfirmationModalOpen: false,
      confirmationModalConfig: {} as ConfirmationModalArgs,
    }));
  };

  const showConfirmationModal = (args: ConfirmationModalArgs) => {
    setState((prevState): ModalState => ({
      ...prevState,
      isConfirmationModalOpen: true,
      confirmationModalConfig: args,
    }));
  };

  return (
    <ModalContext.Provider value={{ showConfirmationModal }}>
      {children}
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={hideConfirmationModal}
        {...confirmationModalConfig}
      />
    </ModalContext.Provider>
  );
};
