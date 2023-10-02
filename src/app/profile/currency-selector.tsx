'use client';

import styled, { useTheme } from 'styled-components';

import { useLanguage, useMeasure } from '@/contexts';
import { Card, FlexWrap, Icon, Select, Typography } from '@/shared/components';

const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const CurrencySelector = () => {
  const { translation } = useLanguage();
  const { colors } = useTheme();
  const { currency, currencyOptions, changeCurrency } = useMeasure();

  return (
    <Card background>
      <FlexWrap justify="space-between" align="center">
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
      </FlexWrap>
    </Card>
  );
};
