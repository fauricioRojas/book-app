'use client';

import styled from 'styled-components';

import { useMemo, ChangeEvent } from 'react';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';
import { useLocalStorage } from '@/hooks';
import { ISelectOption } from '@/shared/types';

type Currency =  'colon' | 'dollar';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const CurrencySelector = () => {
  const [currency, setCurrency] = useLocalStorage<Currency>('currency', 'colon');
  const { language, translation } = useLanguage();

  const currencyOptions = useMemo(() => {
    const options: ISelectOption<Currency>[] = [
      {
        label: translation.colon,
        value: 'colon',
      },
      {
        label: translation.dollar,
        value: 'dollar',
      },
    ];
    return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleChangeCurrency = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setCurrency(target.value as Currency);

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.currency}</Typography>
      <Select value={currency} options={currencyOptions} onChange={handleChangeCurrency} />
    </StyledFlexWrap>
  );
};
