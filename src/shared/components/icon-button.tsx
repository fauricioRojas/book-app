import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { Icon, type IconName } from '.';

type Variant = 'primary' | 'secondary' | 'error' | 'warning';

type StyledIconButtonProps = {
  $variant: Variant;
}

const StyledIconButton = styled.button<StyledIconButtonProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: ${({ theme }) => theme.gutters.size0};

  &:disabled {
    opacity: .65;
    cursor: default;
    pointer-events: none;
  }

  @media (width >= ${({ theme }) => theme.breakpoints.lg}) {
    border: 2px solid transparent;
    border-radius: 50%;
    padding: ${({ theme }) => theme.gutters.size1};
    transition: background-color .15s ease-in-out;

    &:focus, &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

type IconButtonProps = {
  iconName: IconName
  variant?: Variant
  width?: number;
  height?: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  variant = 'primary',
  iconName,
  width = 25,
  height = 25,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <StyledIconButton
      $variant={variant}
      {...props}
    >
      <Icon
        name={iconName}
        color={colors[variant]}
        width={width}
        height={height}
        pointer
      />
    </StyledIconButton>
  );
};
