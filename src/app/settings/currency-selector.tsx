'use client';

import styled from 'styled-components';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage, useMeasure } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const CurrencySelector = () => {
  const { translation } = useLanguage();
  const { currency, currencyOptions, changeCurrency } = useMeasure();

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.currency}</Typography>
      <Select value={currency} options={currencyOptions} onChange={changeCurrency} />
    </StyledFlexWrap>
  );
};
