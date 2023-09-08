'use client';

import styled from 'styled-components';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage, useMeasure } from '@/contexts';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const LengthSelector = () => {
  const { lengthUnit, lengthUnitOptions, changeLengthUnit } = useMeasure();
  const { translation } = useLanguage();

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.length}</Typography>
      <Select value={lengthUnit} options={lengthUnitOptions} onChange={changeLengthUnit} />
    </StyledFlexWrap>
  );
};
