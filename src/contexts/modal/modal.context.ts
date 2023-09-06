"use client";

import { createContext, useContext } from "react";

import { IConfirmationModalArgs } from "./modal.types";

interface IModalContext {
  showConfirmationModal: (args: IConfirmationModalArgs) => void;
}

export const ModalContext = createContext<IModalContext>({
  showConfirmationModal: () => undefined,
});

export const useModal = () => useContext(ModalContext);
