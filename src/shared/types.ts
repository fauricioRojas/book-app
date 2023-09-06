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

export type MessageType = "success" | "error" | "warning";

export interface ISelectOption<T = any> {
  label: string;
  value?: T;
}

export interface ITypeSelectorOption {
  id: number;
  label: string;
  value: "car" | "motorcycle" | "dog" | "cat";
}

export interface IPet {
  id: number;
  name: string;
  breed: string;
  type: "dog" | "cat";
  dateOfBirth: number;
  description?: string;
  photo?: string;
}

export interface IVehicle {
  id: number;
  plateNumber: string;
  brand: string;
  model: number;
  type: "car" | "motorcycle";
  dateOfPurchase: number;
  description?: string;
  photo?: string;
}
