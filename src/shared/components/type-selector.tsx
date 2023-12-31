import { ChangeEvent, FC, useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import {
  FlexWrap,
  GridWrap,
  Icon,
  Input,
  Typography,
} from '@/shared/components';
import { ICON_BY_TYPE } from '@/shared/constants';
import type { TypeSelectorOption } from '@/shared/types';

const StyledTypeSelectorOption = styled.div`
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size2};
  height: 6.5rem;
  justify-content: center;
  padding: ${({ theme }) => theme.gutters.size4};
  transition: background-color 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.card};
  }

  ${({ theme }) => theme.breakpoints.sm} {
    height: 8rem;
  }
`;

type TypeSelectorProps = {
  types: TypeSelectorOption[];
  onSelect: (type: TypeSelectorOption) => void;
};

export const TypeSelector: FC<TypeSelectorProps> = ({ types, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTypes, setFilteredTypes] = useState(types);
  const { colors } = useTheme();
  const { translation } = useLanguage();

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lowerCaseValue = value.toLocaleLowerCase();
    setSearchTerm(value);
    setFilteredTypes(
      value
        ? types.filter(({ label }) =>
            label.toLowerCase().includes(lowerCaseValue),
          )
        : types,
    );
  };

  return (
    <FlexWrap direction="column" gap={4}>
      {types.length > 8 && (
        <Input
          value={searchTerm}
          leftIconName="search"
          placeholder={translation.search}
          onChange={handleChangeSearchTerm}
        />
      )}
      {filteredTypes.length ? (
        <GridWrap cols={6} sm={4} md={6} gap={2}>
          {filteredTypes.map((type) => (
            <StyledTypeSelectorOption
              key={type.id}
              onClick={() => onSelect(type)}
            >
              <Icon
                name={ICON_BY_TYPE[type.value]}
                color={colors.secondaryText}
                size={type.size ?? 30}
                pointer
              />
              <Typography
                variant="h6"
                color="secondary-text"
                fontWeight="bold"
                textAlign="center"
              >
                {type.label}
              </Typography>
            </StyledTypeSelectorOption>
          ))}
        </GridWrap>
      ) : (
        <Typography variant="label" color="secondary-text">
          {translation.noResultsFound}
        </Typography>
      )}
    </FlexWrap>
  );
};
