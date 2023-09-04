import { ChangeEvent, FC, FocusEventHandler } from 'react';
import styled from 'styled-components';

import { FlexWrap, Typography } from '.';

type InputMode = 'numeric' | 'tel' | 'decimal' | 'email' | 'url' | 'search';
type Type = 'text' | 'number' | 'date';

interface IInputProps {
  value?: any;
  type?: Type;
  name?: string;
  label?: string;
  inputMode?: InputMode;
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEventHandler<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

interface IStyledInputProps extends Pick<IInputProps, 'onChange' | 'onBlur' | 'onKeyDown'> {
  $isInvalid: boolean;
}

const StyledInput = styled.input<IStyledInputProps>`
  background-color: transparent;
  border: 1px solid ${({ $isInvalid, theme }) => $isInvalid
    ? theme.colors.error
    : theme.colors.border};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: var(--font-lato);
  font-size: 1rem;
  height: 40px;
  letter-spacing: 0.00938rem;
  line-height: inherit;
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: ${({ $isInvalid, theme }) => $isInvalid ? theme.colors.error : theme.colors.primary};
    border-width: 2px;
    outline: 0;
  }
`;

export const Input: FC<IInputProps> = ({
  type = 'text',
  label,
  errorMessage,
  required,
  ...props
}) => (
  <FlexWrap direction="column" gap={1}>
    {label && <Typography variant="label">{label} {required && <Typography variant="label" color="error">*</Typography>}</Typography>}
    <StyledInput
      type={type}
      $isInvalid={!!errorMessage}
      {...props}
    />
    {errorMessage && <Typography variant="span" color="error">{errorMessage}</Typography>}
  </FlexWrap>
);
