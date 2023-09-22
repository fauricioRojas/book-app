"use client";

import { createContext, useContext } from "react";

import { IConfirmationModalArgs } from "./modal.types";

interface IModalContext {
  showConfirmationModal: (args: IConfirmationModalArgs) => void;
}

export const ModalContext = createContext<IModalContext>({
  showConfirmationModal: () => undefined,
});

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used inside ModalProvider");
  }

  return context;
};
