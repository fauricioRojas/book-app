"use client";

import { createContext, useContext } from "react";

import { DrawerArgs } from "./drawer.types";

interface IDrawerContext {
  showDrawer: (args: DrawerArgs) => void;
  hideDrawer: () => void;
}

export const DrawerContext = createContext<IDrawerContext>({
  showDrawer: () => undefined,
  hideDrawer: () => undefined,
});

export const useDrawer = () => useContext(DrawerContext);
