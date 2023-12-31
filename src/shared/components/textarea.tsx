import { ChangeEvent, FC, FocusEvent } from 'react';
import styled from 'styled-components';

import { useLanguage } from '@/contexts';
import { FlexWrap, Typography } from '.';

type TextareaProps = {
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
};

type StyledTextareaProps = Pick<
  TextareaProps,
  'onChange' | 'onBlur' | 'onKeyDown'
> & {
  $isInvalid: boolean;
  $rows: number;
};

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  background-color: transparent;
  border: 1px solid
    ${({ $isInvalid, theme }) =>
      $isInvalid ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1rem;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  height: ${({ $rows }) => `${$rows * 28.5}px`};
  line-height: inherit;
  padding: ${({ theme }) => `${theme.gutters.size2} ${theme.gutters.size3}`};
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  resize: none;

  &:hover {
    border-color: ${({ $isInvalid, theme }) =>
      $isInvalid ? undefined : theme.colors.primary100};
  }
  &:focus {
    border-color: ${({ $isInvalid, theme }) =>
      $isInvalid ? theme.colors.error : theme.colors.primary};
    border-width: 2px;
    outline: 0;
  }
`;

export const Textarea: FC<TextareaProps> = ({
  label,
  errorMessage,
  optional,
  rows = 4,
  ...props
}) => {
  const { translation } = useLanguage();

  return (
    <FlexWrap direction="column" gap={2}>
      {label && (
        <Typography variant="label">
          {label}{' '}
          {optional && (
            <Typography variant="span" color="secondary-text">
              ({translation.optional})
            </Typography>
          )}
        </Typography>
      )}
      <StyledTextarea
        rows={rows}
        $rows={rows}
        $isInvalid={!!errorMessage}
        {...props}
      />
      {errorMessage && (
        <Typography variant="span" color="error">
          {errorMessage}
        </Typography>
      )}
    </FlexWrap>
  );
};
