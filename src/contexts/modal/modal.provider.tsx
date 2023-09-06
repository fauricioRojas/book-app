'use client';

import { useCallback, useState, FC, PropsWithChildren } from 'react';

import { ConfirmationModal } from '@/shared/components';
import { IConfirmationModalArgs } from './modal.types';
import { ModalContext } from './modal.context';

interface IModalState {
  isConfirmationModalOpen: boolean;
  confirmationModalConfig: IConfirmationModalArgs;
}

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [
    { isConfirmationModalOpen, confirmationModalConfig },
    setState,
  ] = useState<IModalState>({
    isConfirmationModalOpen: false,
    confirmationModalConfig: {} as IConfirmationModalArgs,
  });

  const showConfirmationModal = useCallback((args: IConfirmationModalArgs) => {
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
      confirmationModalConfig: {} as IConfirmationModalArgs,
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
