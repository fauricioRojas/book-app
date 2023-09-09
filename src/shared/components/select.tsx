import { ChangeEvent, FC } from 'react';
import styled, { css } from 'styled-components';

import { ISelectOption } from "@/shared/types";

interface IStyledSelectProps {
  $block?: boolean;
  $borderless?: boolean;
}

const StyledSelect = styled.select<IStyledSelectProps>`
  appearance: none;
  background-color: transparent;
  background-image: ${({ theme }) => `
    linear-gradient(45deg,  transparent 50%, ${theme.colors.secondaryText} 50%, ${theme.colors.secondaryText} calc(50% + 1px), transparent calc(50% + 2px)), 
    linear-gradient(-45deg, transparent 50%, ${theme.colors.secondaryText} 50%, ${theme.colors.secondaryText} calc(50% + 1px), transparent calc(50% + 2px));
  `};
  background-position: ${({ $borderless, theme }) => `
    right ${$borderless ? '6px' : '18px'} top ${theme.gutters.size4}, 
    right ${$borderless ? '0px' : theme.gutters.size3} top ${theme.gutters.size4};
  `};
  background-repeat: no-repeat;
  background-size: 6px 6px;
  border: ${({ $borderless, theme }) => `1px solid ${$borderless ? 'transparent' : theme.colors.border}`};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  color: ${({ theme }) => theme.colors.secondaryText};
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
  letter-spacing: 0.00938rem;
  outline: 0;
  padding: ${({ $borderless, theme }) => `
    ${theme.gutters.size2}
    ${$borderless ? theme.gutters.size6 : theme.gutters.size8}
    ${theme.gutters.size2}
    ${$borderless ? theme.gutters.size0 : theme.gutters.size3}`};
  -webkit-appearance: none;
  -moz-appearance: none;

  ${({ $block }) => $block && css`
    width: 100%;
  `};
`;

interface ISelectProps {
  value: any;
  options: ISelectOption<string>[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  block?: boolean;
  borderless?: boolean;
}

export const Select: FC<ISelectProps> = ({
  options,
  block,
  borderless,
  ...props
}) => (
  <StyledSelect
    $block={block}
    $borderless={borderless}
    {...props}
  >
    {options.map(({ label, value }) => (
      <option key={label} value={value || label}>
        {label}
      </option>
    ))}
  </StyledSelect>
);
