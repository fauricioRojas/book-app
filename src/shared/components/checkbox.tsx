import { FC } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: flex;
`;
const StyledInput = styled.input`
  cursor: pointer;
`;
const StyledLabel = styled.label`
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.3;
  margin-left: ${({ theme }) => theme.gutters.size1};
`;

type CheckboxProps = {
  checked: boolean;
  label: string;
  onChange: () => void;
};

export const Checkbox: FC<CheckboxProps> = ({ checked, label, onChange }) => (
  <StyledCheckbox>
    <StyledInput
      id={label}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <StyledLabel htmlFor={label}>{label}</StyledLabel>
  </StyledCheckbox>
);
