import type { ZIndices } from "@/theme/types";

export type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type FullSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export type Position = "absolute" | "fixed" | "relative" | "sticky";

export type MessageType = "success" | "error" | "warning";

export type ZIndex = keyof ZIndices;

export type SelectOption<T = any> = {
  label: string;
  value?: T;
};

export type TypeSelectorOption = {
  id: number;
  label: string;
  value: string;
  height?: number;
  width?: number;
};
