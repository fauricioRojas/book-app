import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Icon, type IconName } from '.';

type IconButtonSolidVariant = 'primary' | 'secondary' | 'error' | 'warning';
export type IconButtonVariant =
  | 'primary'
  | 'primary-ghost'
  | 'secondary'
  | 'secondary-ghost'
  | 'error'
  | 'error-ghost'
  | 'warning'
  | 'warning-ghost';

type StyledIconButtonProps = {
  $isGhost: boolean;
  $variant: IconButtonSolidVariant;
};

const StyledIconButton = styled.button<StyledIconButtonProps>`
  background-color: ${({ $isGhost, $variant, theme }) =>
    $isGhost ? 'transparent' : theme.colors[$variant]};
  border: ${({ $isGhost, $variant, theme }) =>
    $isGhost ? 'none' : theme.colors[$variant]};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  padding: ${({ $isGhost, theme }) =>
    $isGhost ? theme.gutters.size0 : theme.gutters.size2};

  &:disabled {
    opacity: 0.65;
    cursor: default;
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.lg} {
    border: 2px solid
      ${({ $isGhost, $variant, theme }) =>
        $isGhost ? 'transparent' : theme.colors[$variant]};
    padding: ${({ $isGhost, theme }) =>
      $isGhost ? theme.gutters.size1 : theme.gutters.size3};
    transition: background-color 0.15s ease-in-out;

    &:focus,
    &:hover {
      background-color: ${({ $isGhost, $variant, theme }) =>
        $isGhost ? theme.colors.secondary : theme.colors[`${$variant}400`]};
    }
  }
`;

type IconButtonProps = {
  className?: string;
  iconName: IconName;
  variant: IconButtonVariant;
  width?: number;
  height?: number;
  disabled?: boolean;
  onClick?: () => void;
};

export const IconButton: FC<IconButtonProps> = ({
  variant,
  iconName,
  width = 25,
  height = 25,
  ...props
}) => {
  const { colors } = useTheme();
  const isGhost = variant.endsWith('ghost');
  const formattedVariant = variant.replace(
    '-ghost',
    '',
  ) as IconButtonSolidVariant;

  return (
    <StyledIconButton $isGhost={isGhost} $variant={formattedVariant} {...props}>
      <Icon
        name={iconName}
        color={isGhost ? colors[formattedVariant] : colors.white}
        width={width}
        height={height}
        pointer
      />
    </StyledIconButton>
  );
};
