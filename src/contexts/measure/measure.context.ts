'use client';

import { ChangeEvent, createContext, useContext } from 'react';

import type { SelectOption } from '@/shared/types';
import type {
  CurrencyType,
  LengthUnitType,
  WeightUnitType,
} from './measure.types';

type MeasureContext = {
  currency: CurrencyType;
  currencyOptions: SelectOption<CurrencyType>[];
  changeCurrency: (event: ChangeEvent<HTMLSelectElement>) => void;
  lengthUnit: LengthUnitType;
  lengthUnitOptions: SelectOption<LengthUnitType>[];
  changeLengthUnit: (event: ChangeEvent<HTMLSelectElement>) => void;
  weightUnit: WeightUnitType;
  weightUnitOptions: SelectOption<WeightUnitType>[];
  changeWeightUnit: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const MeasureContext = createContext<MeasureContext>({
  currency: 'colon',
  currencyOptions: [],
  changeCurrency: () => undefined,
  lengthUnit: 'meters',
  lengthUnitOptions: [],
  changeLengthUnit: () => undefined,
  weightUnit: 'grams',
  weightUnitOptions: [],
  changeWeightUnit: () => undefined,
});

export const useMeasure = () => {
  const context = useContext(MeasureContext);

  if (!context) {
    throw new Error('useMeasure must be used inside MeasureProvider');
  }

  return context;
};
