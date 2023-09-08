'use client';

import styled from 'styled-components';

import { useMemo, ChangeEvent } from 'react';

import { FlexWrap, Select, Typography } from '@/shared/components';
import { useLanguage } from '@/contexts';
import { useLocalStorage } from '@/hooks';
import { ISelectOption } from '@/shared/types';

type Weight = 'grams' | 'pounds';

const StyledFlexWrap = styled(FlexWrap)`
  margin: ${({ theme }) => `${theme.gutters.size0} ${theme.gutters.size4}`};
`;

export const WeightSelector = () => {
  const [weight, setWeight] = useLocalStorage<Weight>('weight', 'grams');
  const { language, translation } = useLanguage();

  const weightOptions = useMemo(() => {
    const options: ISelectOption<Weight>[] = [
      {
        label: translation.grams,
        value: 'grams',
      },
      {
        label: translation.pounds,
        value: 'pounds',
      },
    ];
    return options;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleChangeWeight = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setWeight(target.value as Weight);

  return (
    <StyledFlexWrap justify="space-between" align="center">
      <Typography variant="label">{translation.weight}</Typography>
      <Select value={weight} options={weightOptions} onChange={handleChangeWeight} />
    </StyledFlexWrap>
  );
};
