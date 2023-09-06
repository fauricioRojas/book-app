import { ChangeEvent, FC } from 'react';
import styled, { css } from 'styled-components';

import { ISelectOption } from "@/shared/types";

interface IStyledSelectProps {
  $block?: boolean;
}

const StyledSelect = styled.select<IStyledSelectProps>`
  background-color: transparent;
  border: 1px solid border;
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  color: ${({ theme }) => theme.colors.secondaryText};
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.00938rem;
  line-height: inherit;
  outline: 0;
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};

  ${({ $block }) => $block && css`
    width: 100%;
  `};
`;

interface ISelectProps {
  value: any;
  options: ISelectOption<string>[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  block?: boolean;
}

export const Select: FC<ISelectProps> = ({ options, block, ...props }) => (
  <StyledSelect $block={block} {...props}>
    {options.map(({ label, value }) => (
      <option key={label} value={value || label}>
        {label}
      </option>
    ))}
  </StyledSelect>
);
