'use client';

import { ChangeEvent, FC, PropsWithChildren, useMemo } from 'react';

import { useLocalStorage } from '@/hooks';
import type { SelectOption } from '@/shared/types';
import { useLanguage } from '..';
import { MeasureContext } from './measure.context';
import type {
  CurrencyType,
  LengthUnitType,
  WeightUnitType,
} from './measure.types';

export const MeasureProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currency, setCurrency] = useLocalStorage<CurrencyType>(
    'currency',
    'colon',
  );
  const [lengthUnit, setLengthUnit] = useLocalStorage<LengthUnitType>(
    'length',
    'meters',
  );
  const [weightUnit, setWeightUnit] = useLocalStorage<WeightUnitType>(
    'weight',
    'grams',
  );
  const { language, translation } = useLanguage();

  const { currencyOptions, lengthUnitOptions, weightUnitOptions } =
    useMemo(() => {
      const currencyOptions: SelectOption<CurrencyType>[] = [
        {
          label: translation.colon,
          value: 'colon',
        },
        {
          label: translation.dollar,
          value: 'dollar',
        },
      ];
      const lengthUnitOptions: SelectOption<LengthUnitType>[] = [
        {
          label: translation.meters,
          value: 'meters',
        },
        {
          label: translation.miles,
          value: 'miles',
        },
      ];
      const weightUnitOptions: SelectOption<WeightUnitType>[] = [
        {
          label: translation.grams,
          value: 'grams',
        },
        {
          label: translation.pounds,
          value: 'pounds',
        },
      ];

      return {
        currencyOptions,
        lengthUnitOptions,
        weightUnitOptions,
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

  const changeCurrency = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setCurrency(target.value as CurrencyType);

  const changeLengthUnit = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setLengthUnit(target.value as LengthUnitType);

  const changeWeightUnit = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setWeightUnit(target.value as WeightUnitType);

  return (
    <MeasureContext.Provider
      value={{
        currency,
        currencyOptions,
        changeCurrency,
        lengthUnit,
        lengthUnitOptions,
        changeLengthUnit,
        weightUnit,
        weightUnitOptions,
        changeWeightUnit,
      }}
    >
      {children}
    </MeasureContext.Provider>
  );
};
