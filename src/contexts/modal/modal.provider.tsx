'use client';

import { useCallback, useState, FC, PropsWithChildren } from 'react';

import { ConfirmationModal } from '@/shared/components';
import type { ConfirmationModalArgs } from './modal.types';
import { ModalContext } from './modal.context';

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

  const showConfirmationModal = useCallback((args: ConfirmationModalArgs) => {
    setState(prevState => ({
      ...prevState,
      isConfirmationModalOpen: true,
      confirmationModalConfig: args,
    }));
  }, []);

  const hideConfirmationModal = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isConfirmationModalOpen: false,
      confirmationModalConfig: {} as ConfirmationModalArgs,
    }));
  }, []);

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
