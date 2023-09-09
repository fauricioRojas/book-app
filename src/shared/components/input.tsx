import { ChangeEvent, FC, FocusEventHandler } from 'react';
import styled, { useTheme } from 'styled-components';

import { useLanguage } from '@/contexts';
import { Box, FlexWrap, Icon, IconName, Typography } from '.';

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
  optional?: boolean;
  leftIconName?: IconName;
  rightIconName?: IconName;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEventHandler<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}

interface IStyledInputProps extends Pick<IInputProps, 'onChange' | 'onBlur' | 'onKeyDown'> {
  $isInvalid: boolean;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
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
  padding: ${({ $hasLeftIcon, $hasRightIcon, theme }) =>
    `${theme.gutters.size2} ${$hasRightIcon ? theme.gutters.size10 : theme.gutters.size3} ${theme.gutters.size2} ${$hasLeftIcon ? theme.gutters.size10 : theme.gutters.size3}`};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:hover {
    border-color: ${({ $isInvalid, theme }) => $isInvalid ? undefined : theme.colors.primary100};
  }
  &:focus {
    border-color: ${({ $isInvalid, theme }) => $isInvalid ? theme.colors.error : theme.colors.primary};
    border-width: 2px;
    outline: 0;
    padding: ${({ $hasLeftIcon, $hasRightIcon, theme }) =>
      `${theme.gutters.size2} ${$hasRightIcon ? `calc(${theme.gutters.size10} - 1px)` : `calc(${theme.gutters.size3} - 1px)`} ${theme.gutters.size2} ${$hasLeftIcon ? `calc(${theme.gutters.size10} - 1px)` : `calc(${theme.gutters.size3} - 1px)`}`};
  }
`;
const StyledLeftIcon = styled(Icon)`
  position: absolute;
  left: ${({ theme }) => theme.gutters.size3};
  top: 11px;
`;
const StyledRightIcon = styled(Icon)`
  position: absolute;
  right: ${({ theme }) => theme.gutters.size3};
  top: 11px;
`;

export const Input: FC<IInputProps> = ({
  type = 'text',
  label,
  errorMessage,
  optional,
  leftIconName,
  rightIconName,
  ...props
}) => {
  const { colors } = useTheme();
  const { translation } = useLanguage();

  return (
    <FlexWrap direction="column" gap={1}>
      {label && <Typography variant="label">{label} {optional && <Typography variant="span" color="secondary-text">({translation.optional})</Typography>}</Typography>}
      <Box position="relative">
        {leftIconName && (
          <StyledLeftIcon
            name={leftIconName}
            color={colors.secondaryText}
            width={18}
            height={18}
          />
        )}
        <StyledInput
          type={type}
          $isInvalid={!!errorMessage}
          $hasLeftIcon={!!leftIconName}
          $hasRightIcon={!!rightIconName}
          {...props}
        />
        {rightIconName && (
          <StyledRightIcon
            name={rightIconName}
            color={colors.secondaryText}
            width={18}
            height={18}
          />
        )}
      </Box>
      {errorMessage && <Typography variant="span" color="error">{errorMessage}</Typography>}
    </FlexWrap>
  );
};
