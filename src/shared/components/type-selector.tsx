import { ChangeEvent, FC, useState } from "react";
import styled, { DefaultTheme, useTheme } from 'styled-components';

import { FlexWrap, Icon, IconName, Input, Typography } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";
import { useLanguage } from "@/contexts";

const getWidth = ({ gutters }: DefaultTheme, cols: number) =>
  `calc((100% / ${cols}) - ${gutters.size2} + (${gutters.size2} / ${cols}))`;

const StyledTypeSelectorOption = styled.div`
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.size2};
  height: 6.5rem;
  justify-content: center;
  padding: ${({ theme }) => theme.gutters.size4};
  width: ${({ theme }) => getWidth(theme, 2)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 8rem;
    width: ${({ theme }) => getWidth(theme, 3)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ theme }) => getWidth(theme, 2)};
  }
`;

interface ITypeSelectorProps {
  types: ITypeSelectorOption[];
  showSearchInput?: boolean;
  onSelect: (type: ITypeSelectorOption) => void;
}

export const TypeSelector: FC<ITypeSelectorProps> = ({
  types,
  showSearchInput,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTypes, setFilteredTypes] = useState(types);
  const { colors } = useTheme();
  const { translation } = useLanguage();

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    setFilteredTypes(
      value
        ? types.filter(({ label }) => label.toLowerCase().includes(value))
        : types,
    );
  };

  return (
    <FlexWrap direction="column" gap={4}>
      {showSearchInput && (
        <Input
          value={searchTerm}
          leftIconName="search"
          placeholder={translation.search}
          onChange={handleChangeSearchTerm}
        />
      )}
      <FlexWrap gap={2} wrap="wrap">
        {filteredTypes.length
          ? filteredTypes.map((type) => (
              <StyledTypeSelectorOption
                key={type.id}
                onClick={() => onSelect(type)}
              >
                <Icon
                  name={type.value as IconName}
                  color={colors.primary}
                  height={type.height ?? 30}
                  width={type.width ?? 30}
                />
                <Typography
                  variant="label"
                  color="primary"
                  fontWeight="bold"
                  textAlign="center"
                >
                  {type.label}
                </Typography>
              </StyledTypeSelectorOption>
            ))
          : (
            <Typography
              variant="label"
              color="secondary-text"
            >
              {translation.noResultsFound}
            </Typography>
          )
      }
      </FlexWrap>
    </FlexWrap>
  );
};
