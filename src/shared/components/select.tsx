import { ChangeEvent, FC } from 'react';
import styled, { css } from 'styled-components';

import type { SelectOption } from '@/shared/types';

type StyledSelectProps = {
  $block?: boolean;
  $borderless?: boolean;
};

const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  background-color: transparent;
  background-image: ${({ theme }) => `
    linear-gradient(45deg,  transparent 50%, ${theme.colors.secondaryText} 50%, ${theme.colors.secondaryText} calc(50% + 1px), transparent calc(50% + 2px)), 
    linear-gradient(-45deg, transparent 50%, ${theme.colors.secondaryText} 50%, ${theme.colors.secondaryText} calc(50% + 1px), transparent calc(50% + 2px));
  `};
  ${({ $borderless }) =>
    $borderless
      ? css`
          background-position:
            right 6px top 7px,
            right 0px top 7px;
        `
      : css`
          background-position:
            right 18px top 16px,
            right 12px top 16px;
        `};
  background-repeat: no-repeat;
  background-size: 6px 6px;
  border: ${({ $borderless, theme }) =>
    `1px solid ${$borderless ? 'transparent' : theme.colors.border}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.secondaryText};
  cursor: pointer;
  font-size: 1rem;
  height: ${({ $borderless }) => ($borderless ? 'auto' : '40px')};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  outline: 0;
  ${({ $borderless, theme }) =>
    $borderless
      ? css`
          padding: ${`${theme.gutters.size0} ${theme.gutters.size6} ${theme.gutters.size0} ${theme.gutters.size0}`};
        `
      : css`
          padding: ${`${theme.gutters.size2} ${theme.gutters.size8} ${theme.gutters.size2} ${theme.gutters.size3}`};
        `};
  -webkit-appearance: none;
  -moz-appearance: none;

  ${({ $block }) =>
    $block &&
    css`
      width: 100%;
    `};
`;

type SelectProps = {
  value: any;
  options: SelectOption<string>[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  block?: boolean;
  borderless?: boolean;
};

export const Select: FC<SelectProps> = ({
  options,
  block,
  borderless,
  ...props
}) => (
  <StyledSelect $block={block} $borderless={borderless} {...props}>
    {options.map(({ label, value }) => (
      <option key={label} value={value || label}>
        {label}
      </option>
    ))}
  </StyledSelect>
);
