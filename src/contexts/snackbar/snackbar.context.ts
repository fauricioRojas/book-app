"use client";

import { createContext, useContext } from "react";

import { ISnackbarArgs } from "./snackbar.types";

interface ISnackbarContext {
  showSnackbar: (args: ISnackbarArgs) => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
  showSnackbar: () => undefined,
});

export const useSnackbar = () => useContext(SnackbarContext);
