import { ChangeEvent, FC, FocusEvent } from 'react';
import styled from 'styled-components';

import { useLanguage } from '@/contexts';
import { FlexWrap, Typography } from '.';

interface ITextareaProps {
  value: any;
  name?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  optional?: boolean;
  rows?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

interface IStyledTextareaProps extends Pick<ITextareaProps, 'onChange' | 'onBlur' | 'onKeyDown'> {
  $isInvalid: boolean;
  $rows: number;
}

const StyledTextarea = styled.textarea<IStyledTextareaProps>`
  background-color: transparent;
  border: 1px solid ${({ $isInvalid, theme }) => $isInvalid
    ? theme.colors.error
    : theme.colors.border};
  border-radius: ${({ theme }) => theme.gutters.borderRadius};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-family: var(--font-lato);
  font-size: 1rem;
  letter-spacing: 0.00938rem;
  height: ${({ $rows }) => `${$rows * 28.5}px`};
  line-height: inherit;
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none;

  &:hover {
    border-color: ${({ $isInvalid, theme }) => $isInvalid ? undefined : theme.colors.primary100};
  }
  &:focus {
    border-color: ${({ $isInvalid, theme }) => $isInvalid ? theme.colors.error : theme.colors.primary};
    border-width: 2px;
    outline: 0;
  }
`;

export const Textarea: FC<ITextareaProps> = ({
  label,
  errorMessage,
  optional,
  rows = 4,
  ...props
}) => {
  const { translation } = useLanguage();

  return (
    <FlexWrap direction="column" gap={1}>
      {label && <Typography variant="label">{label} {optional && <Typography variant="span" color="secondary-text">({translation.optional})</Typography>}</Typography>}
      <StyledTextarea
        rows={rows}
        $rows={rows}
        $isInvalid={!!errorMessage}
        {...props}
      />
      {errorMessage && <Typography variant="span" color="error">{errorMessage}</Typography>}
    </FlexWrap>
  );
};
