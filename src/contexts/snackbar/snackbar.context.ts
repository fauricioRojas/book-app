"use client";

import { createContext, useContext } from "react";

import { ISnackbarArgs } from "./snackbar.types";

interface ISnackbarContext {
  showSnackbar: (args: ISnackbarArgs) => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  showSnackbar: () => undefined,
});

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used inside SnackbarProvider");
  }

  return context;
};
