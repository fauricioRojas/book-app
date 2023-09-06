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

export const useDrawer = () => useContext(DrawerContext);
