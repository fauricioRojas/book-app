'use client';

import styled, { useTheme } from 'styled-components';

import { useLanguage, useMeasure } from '@/contexts';
import { Card, FlexWrap, Icon, Select, Typography } from '@/shared/components';

const StyledIconWrapper = styled(FlexWrap)`
  width: 25px;
`;

export const LengthSelector = () => {
  const { lengthUnit, lengthUnitOptions, changeLengthUnit } = useMeasure();
  const { translation } = useLanguage();
  const { colors } = useTheme();

  return (
    <Card background>
      <FlexWrap justify="space-between" align="center">
        <FlexWrap align="center" gap={2}>
          <StyledIconWrapper>
            <Icon name="length-meter" color={colors.secondaryText} />
          </StyledIconWrapper>
          <Typography variant="label">{translation.length}</Typography>
        </FlexWrap>
        <Select
          value={lengthUnit}
          borderless
          options={lengthUnitOptions}
          onChange={changeLengthUnit}
        />
      </FlexWrap>
    </Card>
  );
};
