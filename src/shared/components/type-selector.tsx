import { ChangeEvent, FC, useState } from "react";
import styled, { useTheme } from 'styled-components';

import { FlexWrap, GridWrap, Icon, Input, Typography } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";
import { useLanguage } from "@/contexts";
import { ICON_BY_TYPE } from "@/shared/constants";

const StyledTypeSelectorOption = styled.div`
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size2};
  height: 6.5rem;
  justify-content: center;
  padding: ${({ theme }) => theme.gutters.size4};
  transition: background-color .2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 8rem;
  }
`;

interface ITypeSelectorProps {
  types: ITypeSelectorOption[];
  onSelect: (type: ITypeSelectorOption) => void;
}

export const TypeSelector: FC<ITypeSelectorProps> = ({
  types,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTypes, setFilteredTypes] = useState(types);
  const { colors } = useTheme();
  const { translation } = useLanguage();

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const lowerCaseValue = value.toLocaleLowerCase();
    setSearchTerm(value);
    setFilteredTypes(
      value
        ? types.filter(({ label }) => label.toLowerCase().includes(lowerCaseValue))
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
      {filteredTypes.length
        ? (
          <GridWrap
            cols={6}
            sm={4}
            md={6}
            gap={2}
          >
            {filteredTypes.map((type) => (
              <StyledTypeSelectorOption
                key={type.id}
                onClick={() => onSelect(type)}
              >
                <Icon
                  name={ICON_BY_TYPE[type.value]}
                  color={colors.secondaryText}
                  height={type.height ?? 30}
                  width={type.width ?? 30}
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
          <Typography
            variant="label"
            color="secondary-text"
          >
            {translation.noResultsFound}
          </Typography>
        )}
    </FlexWrap>
  );
};
