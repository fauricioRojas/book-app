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

export const WeightSelector = () => {
  const { weightUnit, weightUnitOptions, changeWeightUnit } = useMeasure();
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <FlexWrap align="center" gap={2}>
        <StyledIconWrapper>
          <Icon name="weight"
            color={colors.secondaryText}
            width={18}
            height={18}
          />
        </StyledIconWrapper>
        <Typography variant="label">{translation.weight}</Typography>
      </FlexWrap>
      <Select
        value={weightUnit}
        borderless
        options={weightUnitOptions}
        onChange={changeWeightUnit}
      />
    </StyledFlexWrap>
  );
};
