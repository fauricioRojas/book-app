'use client';

import styled from 'styled-components';

import { useMemo, ChangeEvent } from 'react';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';
import { useLocalStorage } from '@/hooks';
import { ISelectOption } from '@/shared/types';

type Measure = 'meters' | 'miles';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const MeasureSelector = () => {
  const [measure, setMeasure] = useLocalStorage<Measure>('measure', 'meters');
  const { language, translation } = useLanguage();

  const measureOptions = useMemo(() => {
    const options: ISelectOption<Measure>[] = [
      {
        label: translation.meters,
        value: 'meters',
      },
      {
        label: translation.miles,
        value: 'miles',
      },
    ];
    return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleChangeMeasure = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setMeasure(target.value as Measure);

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.measure}</Typography>
      <Select value={measure} options={measureOptions} onChange={handleChangeMeasure} />
    </StyledFlexWrap>
  );
};
