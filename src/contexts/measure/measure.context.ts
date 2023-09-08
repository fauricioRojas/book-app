"use client";

import { ChangeEvent, createContext, useContext } from "react";

import { ISelectOption } from "@/shared/types";
import { CurrencyType, LengthUnitType, WeightUnitType } from "./measure.types";

interface IMeasureContext {
  currency: CurrencyType;
  currencyOptions: ISelectOption<CurrencyType>[];
  changeCurrency: (event: ChangeEvent<HTMLSelectElement>) => void;
  lengthUnit: LengthUnitType;
  lengthUnitOptions: ISelectOption<LengthUnitType>[];
  changeLengthUnit: (event: ChangeEvent<HTMLSelectElement>) => void;
  weightUnit: WeightUnitType;
  weightUnitOptions: ISelectOption<WeightUnitType>[];
  changeWeightUnit: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const MeasureContext = createContext<IMeasureContext>({
  currency: "colon",
  currencyOptions: [],
  changeCurrency: () => undefined,
  lengthUnit: "meters",
  lengthUnitOptions: [],
  changeLengthUnit: () => undefined,
  weightUnit: "grams",
  weightUnitOptions: [],
  changeWeightUnit: () => undefined,
});

export const useMeasure = () => useContext(MeasureContext);
