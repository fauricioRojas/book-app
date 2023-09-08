'use client';

import styled from 'styled-components';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage, useMeasure } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const WeightSelector = () => {
  const { weightUnit, weightUnitOptions, changeWeightUnit } = useMeasure();
  const { translation } = useLanguage();

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.weight}</Typography>
      <Select value={weightUnit} options={weightUnitOptions} onChange={changeWeightUnit} />
    </StyledFlexWrap>
  );
};
