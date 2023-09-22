"use client";

import { createContext, useContext } from "react";

import { IDrawerArgs } from "./drawer.types";

interface IDrawerContext {
  showDrawer: (args: IDrawerArgs) => void;
  hideDrawer: () => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  showDrawer: () => undefined,
  hideDrawer: () => undefined,
});

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used inside DrawerProvider");
  }

  return context;
};
