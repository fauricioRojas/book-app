'use client';

import styled, { useTheme } from 'styled-components';

import { FlexWrap, Icon, Select, Typography } from '@/shared/components';
import { useLanguage, useMeasure } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;
const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const CurrencySelector = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const { currency, currencyOptions, changeCurrency } = useMeasure();

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <FlexWrap align="center" gap={2}>
        <StyledIconWrapper>
          <Icon name="currency" color={colors.secondaryText} />
        </StyledIconWrapper>
        <Typography variant="label">{translation.currency}</Typography>
      </FlexWrap>
      <Select
        value={currency}
        borderless
        options={currencyOptions}
        onChange={changeCurrency}
      />
    </StyledFlexWrap>
  );
};
