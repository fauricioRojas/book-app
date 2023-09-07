import { FC } from "react";
import styled, { DefaultTheme, useTheme } from 'styled-components';

import { FlexWrap, Icon, IconName, Typography } from "@/shared/components";
import { ITypeSelectorOption } from "@/shared/types";

const getWidth = ({ gutters }: DefaultTheme, cols: number) =>
  `calc((100% / ${cols}) - ${gutters.size4} + (${gutters.size4} / ${cols}))`;

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
  height: 8rem;
  justify-content: center;
  width: ${({ theme }) => getWidth(theme, 2)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => getWidth(theme, 3)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ theme }) => getWidth(theme, 2)};
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
  const { colors } = useTheme();

  return (
    <FlexWrap gap={4} wrap="wrap">
      {types.map((type) => (
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
          >
            {type.label}
          </Typography>
        </StyledTypeSelectorOption>
      ))}
    </FlexWrap>
  );
};
